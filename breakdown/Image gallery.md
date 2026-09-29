## The idea

A grid of thumbnails. Click one and that same image grows into a large view, click the backdrop and it shrinks back. The key principle:

> **Don't store something in state if you can calculate it from existing state.**

We store only **which** image is selected, then look the image up.

```text
selectedId = null  →  click image 2  →  setSelectedId("2")  →  find() the image  →  large view grows from the thumbnail
```

## How it works

### 01 The images are data

Each image is an object with an `id` and a `url`, kept in an array.

- The `id` is how we'll identify an image later, both for state and for the animation.

```jsx
const images = [
  { id: "1", url: "https://picsum.photos/seed/one/400/300" },
  { id: "2", url: "https://picsum.photos/seed/two/400/300" },
];
```

### 02 Store only the selected id

The state is just the id of the open image, or `null` for none.

- Clicking a thumbnail sets its id.
- Clicking the backdrop sets it back to `null`.

```jsx
const [selectedId, setSelectedId] = useState(null);

onClick={() => setSelectedId(img.id)}
```

### 03 Look up the full image with find()

[`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) returns the first item that matches, or `undefined` if none does.

- `selected` is **derived**: calculated from `selectedId` on every render.
- One source of truth (`selectedId`), everything else worked out from it.

```jsx
const selected = images.find((img) => img.id === selectedId);
```

### 04 Show the large view only when selected

`&&` renders the backdrop and big image only when `selected` exists.

- `undefined` counts as false, so nothing renders when no image is open.
- The backdrop is `fixed inset-0`, covering the screen, and clicking it closes the view.

```jsx
<AnimatePresence>
  {selected && (
    <motion.div className="fixed inset-0 bg-black/70" onClick={() => setSelectedId(null)}>
      <motion.img layoutId={selected.id} src={selected.url} />
    </motion.div>
  )}
</AnimatePresence>
```

### 05 layoutId makes them one image

The thumbnail and the large image share the same `layoutId`.

- Framer Motion treats them as the same thing, so it animates the thumbnail growing into the large view (and back).
- This is the same shared-identity idea as the Tab Switcher pill.

```jsx
<motion.img key={img.id} layoutId={img.id} src={img.url} />
```

## What belongs to what

- **React**: `useState`, derived data, conditional rendering, `.map()`
- **JavaScript**: objects in arrays, `.find()`, `===`, `null` / `undefined`
- **Tailwind**: `grid grid-cols-2`, `fixed inset-0`, `object-cover`, `max-h-[80vh]`
- **Framer Motion**: `layoutId`, `AnimatePresence`, `initial`, `animate`, `exit`

## Things to understand

### Why not store the whole selected image in state?

Then you'd have two copies of the same image (in the array and in state) that could drift apart. Storing the id and using `find()` keeps one source of truth.

### What happens if two images share a `layoutId`?

Framer Motion can't tell which one should grow. Try setting `layoutId` to a fixed value and watch it get confused.

## Try changing it

1. Add 4 more images.
2. Add a caption to each and show it in the large view.
3. Add a close button.
4. Add Previous and Next buttons.
5. Change `layoutId={img.id}` to a static value and observe what breaks.

## Read next

- [Choosing the state structure](https://react.dev/learn/choosing-the-state-structure)
- [Array find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Framer Motion layout animations](https://motion.dev/docs/react-layout-animations)
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
