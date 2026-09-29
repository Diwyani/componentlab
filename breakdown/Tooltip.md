## The idea

A small tooltip that follows your cursor while you're inside a box, and disappears when you leave. The goal is to see how React responds to **browser events** and turns the information they carry into UI.

We need to know two things: is the cursor inside, and where is it?

```text
mouse moves  →  browser gives the position  →  setCoords()  →  re-render  →  tooltip moves
```

## How it works

### 01 Track whether we're hovering

A boolean decides whether the tooltip should exist at all.

- The mouse enters: `isHovering` becomes `true`.
- The mouse leaves: it goes back to `false`.

```jsx
const [isHovering, setIsHovering] = useState(false);

onMouseEnter={() => setIsHovering(true)}
onMouseLeave={() => setIsHovering(false)}
```

### 02 Track where the cursor is

A boolean isn't enough, we also need `x` and `y`. So this state is an object.

- `x` and `y` belong together, so they live in one [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

```jsx
const [coords, setCoords] = useState({ x: 0, y: 0 });
```

### 03 Read the position from the event

Every mouse move hands us an **event object**, `e`, full of information.

- `e.clientX` / `e.clientY` is the cursor position in the whole browser window.
- `getBoundingClientRect()` tells us where our box is.
- Subtracting the box's position gives the cursor's position **inside the box**.

```jsx
function handleMouseMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  setCoords({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  });
}
```

### 04 Show and place the tooltip

`&&` renders the tooltip only while hovering, and `style` puts it at the saved position.

- `coords = { x: 120, y: 80 }` becomes `left: 120px; top: 80px`.
- Every move updates `coords`, React re-renders, and the tooltip lands in its new spot.

```jsx
{isHovering && (
  <motion.div style={{ left: coords.x, top: coords.y }}>
    👀 Watching
  </motion.div>
)}
```

### 05 Animate in and out

React decides **whether** the tooltip exists. Framer Motion decides **how** it appears and disappears.

- `AnimatePresence` lets the tooltip play its exit animation before React removes it.

```jsx
<AnimatePresence>
  {isHovering && (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    />
  )}
</AnimatePresence>
```

## What belongs to what

- **React**: `useState`, event handlers, conditional rendering, re-render
- **JavaScript**: objects, the event object `e`, `&&`, calculations
- **Browser APIs**: `getBoundingClientRect()`, `clientX`, `clientY`
- **Tailwind**: `relative`, `absolute`, positioning, `pointer-events-none`
- **Framer Motion**: `motion.div`, `AnimatePresence`, `initial`, `animate`, `exit`

## Things to understand

### Why do we need `coords`?

The tooltip needs to know where to go. Without `coords` it could appear, but never follow.

### Why subtract the box's position?

`clientX` is measured from the edge of the browser window. The tooltip is positioned inside the box, so we need the distance from the box's edge instead.

### Why do we need `AnimatePresence`?

The tooltip is removed from the page when you leave. Without `AnimatePresence`, it would vanish instantly instead of fading out.

## Try changing it

1. Make the tooltip follow only the X position.
2. Offset it by `10px` so it sits beside the cursor.
3. Make it appear below the cursor.
4. Change the enter animation.
5. Remove Framer Motion completely and see what React still does.
6. Remove `coords` and explain why it stops following.

The goal isn't to copy it. It's to break it and understand why it broke.

## Read next

- [Responding to events](https://react.dev/learn/responding-to-events)
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
- [getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
- [MouseEvent clientX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX)
