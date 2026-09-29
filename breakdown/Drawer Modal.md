## The idea

A sheet that slides up from the bottom of the screen. While it's open the page behind can't scroll, and you can close it by clicking outside, pressing Escape, or dragging it down.

This component has three jobs split between three tools:

```text
React          →  decides whether the drawer exists
Browser / JS   →  locks page scrolling, listens for the Escape key
Framer Motion  →  animates it and handles dragging
```

## How it works

### 01 Open and close with one boolean

`isOpen` decides whether the drawer exists at all.

- The button sets it to `true`.
- Every way of closing (backdrop, Escape, drag) calls the same `onClose` function.

```jsx
const [isOpen, setIsOpen] = useState(false);
const onClose = () => setIsOpen(false);

<button onClick={() => setIsOpen(true)}>Open Drawer</button>
```

### 02 Lock the page scroll

When the drawer is open, the page behind it shouldn't scroll. That means changing the page itself, which is a side effect, so it goes in `useEffect`.

- `[isOpen]` means: run this again every time `isOpen` changes.
- The cleanup resets the scroll, so it never gets stuck locked.

```jsx
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
```

### 03 Close on Escape

React has no "press Escape anywhere" event, so we listen on the browser `window` directly.

- `addEventListener` starts listening. The event object `e` tells us which key was pressed.
- The cleanup removes the listener. Forgetting this leaves listeners piling up.

```jsx
useEffect(() => {
  const handleKey = (e) => {
    if (e.key === "Escape") onClose();
  };
  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [onClose]);
```

### 04 A backdrop that closes it

A dark layer covers the whole screen behind the drawer.

- `fixed inset-0` stretches it over everything.
- Clicking it calls `onClose`: that's "click outside to close".

```jsx
<motion.div
  className="fixed inset-0 bg-black/50"
  onClick={onClose}
/>
```

### 05 Slide in and out

`AnimatePresence` lets the drawer animate out before React removes it.

- `y: "100%"` means pushed fully below the screen. `y: 0` is its resting place.
- A spring makes the entrance feel physical.

```jsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
    />
  )}
</AnimatePresence>
```

### 06 Drag down to close

Framer Motion gives dragging for free with `drag="y"`.

- `dragConstraints` keeps it snapping back, `dragElastic` lets it stretch downward only.
- On release, `info` says how far (`offset`) and how fast (`velocity`) you dragged.
- Far enough (100px) **or** fast enough (a flick): close it.

```jsx
drag="y"
dragConstraints={{ top: 0, bottom: 0 }}
dragElastic={{ top: 0, bottom: 0.5 }}
onDragEnd={(_, info) => {
  if (info.offset.y > 100 || info.velocity.y > 500) onClose();
}}
```

### 07 Tell assistive tech it's a dialog

Screen readers can't see that this is a modal, so we say it in attributes.

- `role="dialog"` and `aria-modal="true"` announce it as a modal window.
- `aria-label` gives it a name.

```jsx
role="dialog"
aria-modal="true"
aria-label={title}
```

## What belongs to what

- **React**: `useState`, `useEffect`, dependency arrays, cleanup, conditional rendering
- **JavaScript**: event listeners, the event object, `||`
- **Browser APIs**: `document.body.style`, `window.addEventListener`, `keydown`
- **Tailwind**: `fixed`, `inset-0`, `z-40` / `z-50`, `rounded-t-2xl`, `max-h-[85vh]`
- **Framer Motion**: `AnimatePresence`, `drag`, `dragConstraints`, `dragElastic`, `onDragEnd`

## Things to understand

### Why do both effects need cleanup?

Both change something outside React (the page's scroll, a window listener). If the component goes away without undoing them, the page stays locked or the listener keeps firing.

### Why check velocity as well as distance?

A quick flick barely moves the sheet, but it clearly means "close". Checking speed makes it feel like a real phone sheet.

### Why is this a big step?

Earlier components only changed their own look. This one reaches out and changes the **browser itself**, which is what most real product UI has to do.

## Try changing it

1. Make it open from the right instead of the bottom.
2. Swap the spring for a tween.
3. Add a close button.
4. Make it exactly 50% of the screen height.
5. Change the drag distance from `100` to `200`.
6. Remove `AnimatePresence` and see what changes.

## Read next

- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [Framer Motion drag](https://motion.dev/docs/react-drag)
- [Dialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
