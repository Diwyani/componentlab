A gallery where clicking a thumbnail opens a larger version of that same image.

This component is useful for understanding **selected state, derived data, conditional rendering, `find()`, & Framer Motion's `layoutId`**.

---

## What are we building?

A gallery with:

- multiple image thumbnails
    
- a selected image
    
- a large image view
    
- a backdrop
    
- an enter/exit animation
    
- a shared layout animation between thumbnail & large image
    

---

## Mental model

```text
             IMAGE GALLERY
                    │
                    ▼
            selectedId = null
                    │
                    ▼
             show thumbnails
                    │
              user clicks
                image 2
                    │
                    ▼
          setSelectedId("2")
                    │
                    ▼
             React re-renders
                    │
                    ▼
       selected = images.find(...)
                    │
                    ▼
          render large image
                    │
                    ▼
       same layoutId = "2"
                    │
                    ▼
          Framer Motion sees
          thumbnail + large image
          as the same visual thing
```

The important thing here is:

> We store **which image is selected**, not the entire selected image.

---

## The code

```jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    id: "1",
    url: "https://picsum.photos/seed/one/400/300",
  },
  {
    id: "2",
    url: "https://picsum.photos/seed/two/400/300",
  },
  {
    id: "3",
    url: "https://picsum.photos/seed/three/400/300",
  },
  {
    id: "4",
    url: "https://picsum.photos/seed/four/400/300",
  },
];

export default function ImageGalleryLayout() {
  const [selectedId, setSelectedId] = useState(null);

  const selected = images.find(
    (img) => img.id === selectedId
  );

  return (
    <div className="w-80">
      <div className="grid grid-cols-2 gap-2">
        {images.map((img) => (
          <motion.img
            key={img.id}
            layoutId={img.id}
            src={img.url}
            onClick={() => setSelectedId(img.id)}
            className="h-24 w-full cursor-pointer rounded-lg object-cover"
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/70"
            onClick={() => setSelectedId(null)}
          >
            <motion.img
              layoutId={selected.id}
              src={selected.url}
              className="max-h-[80vh] max-w-[80vw] rounded-xl object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## 1. The image data

Each image is an object:

```jsx
{
  id: "1",
  url: "..."
}
```

So our array looks like:

```text
images
  ↓
[
  { id: "1", url: "..." },
  { id: "2", url: "..." },
  { id: "3", url: "..." },
  { id: "4", url: "..." }
]
```

This is JavaScript data.

React doesn't create this data.

We give the data to React.

---

## 2. `selectedId`

```jsx
const [selectedId, setSelectedId] = useState(null);
```

Initially:

```text
selectedId = null
```

That means:

> No image is selected.

When the user clicks image 2:

```jsx
setSelectedId(img.id)
```

Now:

```text
selectedId = "2"
```

Notice that we store:

```text
"2"
```

not:

```text
{
  id: "2",
  url: "..."
}
```

We only need the identity of the selected image.

---

## 3. Derived data with `find()`

Now we need the actual image object.

```jsx
const selected = images.find(
  (img) => img.id === selectedId
);
```

`.find()` is JavaScript.

It means:

> Look through the array & return the first item that matches this condition.

If:

```text
selectedId = "2"
```

then:

```text
images.find(...)
       ↓
{ id: "2", url: "..." }
```

So:

```jsx
selected
```

is the complete selected image object.

---

## 4. Why not store `selected` directly?

You could technically store the whole object.

But then you'd have two pieces of information:

```text
selectedId
selected
```

which can potentially get out of sync.

Instead:

```text
selectedId
   ↓
images.find(...)
   ↓
selected
```

There is only one source of truth.

This is called **derived state**.

The selected image can be calculated from the selected ID, so we don't need to store both.

---

## 5. Rendering the thumbnails

```jsx
{images.map((img) => (
  <motion.img
    key={img.id}
    src={img.url}
    onClick={() => setSelectedId(img.id)}
  />
))}
```

The process is:

```text
images array
    ↓
.map()
    ↓
one image element per object
```

Each image gets:

```jsx
src={img.url}
```

so the browser knows what image to display.

---

## 6. Clicking an image

This:

```jsx
onClick={() => setSelectedId(img.id)}
```

means:

> When this image is clicked, store its ID as the selected ID.

For image 3:

```text
click image 3
    ↓
img.id = "3"
    ↓
setSelectedId("3")
    ↓
React re-renders
```

---

## 7. Conditional rendering

The large image only exists when there is a selected image:

```jsx
{selected && (
  <motion.div>
    ...
  </motion.div>
)}
```

Remember:

```text
null && thing
    ↓
nothing

object && thing
    ↓
thing
```

So:

```text
selected = null
↓
no large image

selected = image object
↓
large image exists
```

---

## 8. Closing the image

The backdrop has:

```jsx
onClick={() => setSelectedId(null)}
```

So:

```text
click backdrop
     ↓
setSelectedId(null)
     ↓
selected = undefined
     ↓
selected && (...)
     ↓
nothing
```

`AnimatePresence` then allows the large image view to animate out.

---

## 9. The important `layoutId`

The thumbnail has:

```jsx
layoutId={img.id}
```

The large image has:

```jsx
layoutId={selected.id}
```

Suppose image 2 is selected.

Both become:

```text
layoutId="2"
```

Framer Motion sees:

```text
thumbnail
layoutId="2"

      ↓

large image
layoutId="2"
```

and understands:

> These represent the same visual element across two different layouts.

So instead of simply:

```text
thumbnail disappears
large image appears
```

you get a visual transition:

```text
thumbnail
   ↓
expands
   ↓
large image
```

---

## 10. React vs Framer Motion

This distinction is important.

React decides:

```text
which image is selected?
should the large image exist?
```

JavaScript decides:

```text
which object matches the ID?
```

Framer Motion decides:

```text
how does the selected image visually move
from one layout to another?
```

---

## What belongs to what?

|Concept|Technology|
|---|---|
|`selectedId`|React|
|`useState`|React|
|conditional rendering|React|
|`images`|JavaScript|
|`.map()`|JavaScript|
|`.find()`|JavaScript|
|`layoutId`|Framer Motion|
|`AnimatePresence`|Framer Motion|
|`grid`|CSS / Tailwind|
|`fixed`|CSS / Tailwind|

---

## Things to understand

- objects inside arrays
    
- `.map()`
    
- `.find()`
    
- selected state
    
- derived state
    
- conditional rendering
    
- `layoutId`
    
- `AnimatePresence`
    
- source of truth
    

---

## Try changing it

1. Add 4 more images.
    
2. Add captions to each image.
    
3. Show the caption in the expanded view.
    
4. Add a close button.
    
5. Add Previous / Next buttons.
    
6. Store image objects with:
    

```jsx
{
  id: "1",
  url: "...",
  title: "Mountain",
  category: "Travel"
}
```

7. Try changing `layoutId={img.id}` to a static value and observe what happens.
    

---

## What this component teaches

This component introduces an important principle:

> **Don't store something in state if you can calculate it from existing state.**

Instead of:

```text
selectedImage
selectedId
```

we have:

```text
selectedId
    ↓
find()
    ↓
selectedImage
```

One source of truth. Everything else is derived.

---

## Next concepts

This leads naturally into:

- derived state
    
- lifting state up
    
- props
    
- controlled components
    
- reusable component APIs