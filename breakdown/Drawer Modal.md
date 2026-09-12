A bottom sheet that opens from the bottom of the screen, locks page scrolling, closes when you click outside, press Escape, or drag it down.

## What are we building?

A drawer with:

- an open/close state
- a backdrop
- Escape key support
- locked body scrolling
- drag-to-close interaction
- enter & exit animations

The important part is that this component combines **React state + browser effects + Framer Motion interactions**.

---

## Mental model

```text
                 DRAWER
                    │
                    ▼
             isOpen = false
                    │
              user clicks
             "Open Drawer"
                    │
                    ▼
             setIsOpen(true)
                    │
                    ▼
             React re-renders
                    │
                    ▼
              isOpen = true
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
    render drawer        render backdrop
          │                   │
          │              click outside
          │                   │
          │                   ▼
          │               onClose()
          │
          ├── press Escape
          │       ↓
          │    onClose()
          │
          └── drag down
                  ↓
             enough distance
             or velocity?
                  ↓
              onClose()
                  │
                  ▼
            isOpen = false
                  │
                  ▼
             drawer exits
```

There are actually **three different jobs** happening here:

```text
React
↓
decides whether drawer exists

Browser / JavaScript
↓
handles body scroll + keyboard events

Framer Motion
↓
handles animation + dragging
```

---

## The code

```jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DrawerModal() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  const title = "Drawer";

  const children = (
    <p className="text-sm text-neutral-500 dark:text-neutral-400">
      This is the drawer content. Drag the handle down, click the backdrop,
      or press Escape to close it.
    </p>
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Drawer
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 flex max-h-[85vh] flex-col rounded-t-2xl bg-white shadow-xl dark:bg-neutral-900"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={(_, info) => {
                if (
                  info.offset.y > 100 ||
                  info.velocity.y > 500
                ) {
                  onClose();
                }
              }}
              role="dialog"
              aria-modal="true"
              aria-label={title}
            >
              <div className="flex shrink-0 justify-center pb-1 pt-3">
                <div className="h-1.5 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>

              {title && (
                <div className="shrink-0 px-5 pb-3">
                  <h2 className="text-lg font-semibold">{title}</h2>
                </div>
              )}

              <div className="overflow-y-auto px-5 pb-6">{children}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

## 1. `isOpen` is the source of truth

```jsx
const [isOpen, setIsOpen] = useState(false);
```

The drawer only needs to know one thing:

> Should I be open?

So we use a boolean.

```text
false → closed
true  → open
```

When the button is clicked:

```jsx
setIsOpen(true)
```

React re-renders.

Now this:

```jsx
{isOpen && (...)}
```

becomes:

```text
true && drawer
```

So the drawer is rendered.

---

## 2. What does `&&` mean?

You have already seen this pattern many times:

```jsx
{isOpen && <Drawer />}
```

It means:

> Render `<Drawer />` only when `isOpen` is true.

Think:

```text
condition && thing

false && thing → nothing
true && thing  → thing
```

This is called **conditional rendering**.

---

## 3. `AnimatePresence`

Normally, when React stops rendering something:

```jsx
{isOpen && <Drawer />}
```

the element disappears immediately.

`AnimatePresence` allows Framer Motion to animate that removal.

```text
isOpen = true
↓
drawer enters

isOpen = false
↓
drawer exits
↓
then removed
```

That is why we use:

```jsx
<AnimatePresence>
  {isOpen && (...)}
</AnimatePresence>
```

---

## 4. The drawer animation

```jsx
initial={{ y: "100%" }}
animate={{ y: 0 }}
exit={{ y: "100%" }}
```

The drawer starts below the screen:

```text
y: 100%
     ↓
     ┌─────────────┐
     │             │
     │    screen   │
     │             │
     └─────────────┘
             drawer
```

Then:

```text
y: 0
```

moves it into place.

When closing:

```text
y: 0
 ↓
y: 100%
```

So the drawer slides back down.

---

## 5. The backdrop

The backdrop is a completely separate element:

```jsx
<motion.div
  className="fixed inset-0 ..."
  onClick={onClose}
/>
```

Its job is simple:

```text
user clicks outside drawer
        ↓
      onClose()
        ↓
  setIsOpen(false)
```

It also fades:

```jsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
```

---

## 6. Why `useEffect`?

This component needs to affect things **outside React's rendered UI**.

For example:

```jsx
document.body.style.overflow = "hidden";
```

We're changing the browser's page, not a React element.

That's a **side effect**.

`useEffect` is React's mechanism for handling side effects.

```jsx
useEffect(() => {
  // side effect
}, [dependency]);
```

---

## 7. Locking page scrolling

When the drawer opens:

```jsx
document.body.style.overflow = "hidden";
```

The page behind the drawer can't scroll.

When it closes:

```jsx
document.body.style.overflow = "";
```

Scrolling is restored.

The dependency:

```jsx
[isOpen]
```

means:

> Run this effect whenever `isOpen` changes.

So:

```text
isOpen changes
     ↓
effect runs
     ↓
lock/unlock body scroll
```

---

## 8. Cleanup

This part:

```jsx
return () => {
  document.body.style.overflow = "";
};
```

is cleanup.

React runs cleanup when the effect needs to be cleaned up.

Cleanup is especially important for things like:

- timers
    
- event listeners
    
- subscriptions
    
- browser changes
    

You don't want effects from an old component state hanging around.

---

## 9. Escape key

We can listen to browser keyboard events:

```jsx
window.addEventListener("keydown", handleKey);
```

Then:

```jsx
const handleKey = (e) => {
  if (e.key === "Escape") {
    onClose();
  }
};
```

The browser gives us an event object `e`.

We inspect:

```jsx
e.key
```

to find out which key was pressed.

---

## 10. Why remove the listener?

We add:

```jsx
window.addEventListener("keydown", handleKey);
```

So we also need:

```jsx
window.removeEventListener("keydown", handleKey);
```

Otherwise, the listener can remain active after it is no longer needed.

This is another example of effect cleanup.

---

## 11. Dragging

Framer Motion gives us:

```jsx
drag="y"
```

This means:

> Allow the element to be dragged vertically.

Then:

```jsx
dragConstraints={{ top: 0, bottom: 0 }}
```

limits where the drawer can normally settle.

And:

```jsx
dragElastic={{ top: 0, bottom: 0.5 }}
```

allows some elastic movement.

---

## 12. `onDragEnd`

When dragging finishes:

```jsx
onDragEnd={(_, info) => {
  if (
    info.offset.y > 100 ||
    info.velocity.y > 500
  ) {
    onClose();
  }
}}
```

We ask:

> Did the user drag it far enough OR fast enough?

`info.offset.y` tells us how far it moved.

`info.velocity.y` tells us how quickly it was moving.

So:

```text
drag down a lot
      OR
drag down quickly
      ↓
     close
```

This is a good example of combining **interaction data + React state**.

---

## 13. What is `role="dialog"`?

```jsx
role="dialog"
```

tells assistive technology:

> This is a dialog-like interface.

And:

```jsx
aria-modal="true"
```

communicates that the dialog is currently modal.

Accessibility isn't separate from UI engineering. It is part of building the component correctly.

---

## What belongs to what?

|Concept|Technology|
|---|---|
|`isOpen`|React|
|`useState`|React|
|`useEffect`|React|
|`document.body`|Browser / JavaScript|
|`addEventListener`|Browser / JavaScript|
|`if`|JavaScript|
|`&&`|JavaScript|
|`drag`|Framer Motion|
|`animate`|Framer Motion|
|`AnimatePresence`|Framer Motion|
|`fixed`, `z-50`, `p-6`|Tailwind|
|`role`, `aria-modal`|HTML / Accessibility|

---

## Things to understand

Before moving on, make sure these make sense:

- boolean state
- conditional rendering
- `&&`
- `useEffect`
- dependency arrays
- cleanup functions
- browser event listeners
- event objects
- `AnimatePresence`
- drag interactions
- accessibility attributes


---

## Try changing it

1. Make the drawer open from the **right** instead of the bottom.
2. Change the opening animation from a spring to a tween.
3. Add a close button.
4. Make the drawer 50% of the screen height.
5. Change the drag threshold from `100` to `200`.
6. Add a second piece of content.
7. Try removing `AnimatePresence` and see what changes.


---

## What this component teaches

This is an important jump from the earlier components.

You are no longer just changing visual state.

You are learning how React interacts with the **browser itself**:

```text
React state
    ↓
UI

React effect
    ↓
browser

Framer Motion
    ↓
interaction + animation
```

That pattern appears everywhere in real product interfaces.

---

## Next concepts

After this, you should understand:

- controlled components
- props
- composition
- `children`
- lifting state up
- reusable component APIs