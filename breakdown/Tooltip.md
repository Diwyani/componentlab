A tooltip that follows your mouse cursor.

The goal isn't just to make a tooltip. The goal is to understand how React can respond to **browser events** and use that information to update the UI.

---

## What are we building?

When the user moves their mouse inside a container, a small tooltip follows the cursor.

```text
┌─────────────────────────────────┐
│                                 │
│       move your cursor →        │
│                         [info]  │
│                                 │
└─────────────────────────────────┘
```

When the cursor leaves the container, the tooltip disappears.

---

## The mental model

There are two things we need to know:

1. Is the cursor inside the container?
2. Where is the cursor?

So we keep two pieces of state:

```text
isHovering
    ↓
should the tooltip exist?

coords
    ↓
where should the tooltip be?
```

The overall flow:

```text
mouse enters
    ↓
isHovering = true
    ↓
show tooltip

mouse moves
    ↓
browser gives us cursor position
    ↓
save position in coords
    ↓
React re-renders
    ↓
tooltip moves

mouse leaves
    ↓
isHovering = false
    ↓
hide tooltip
```

---

## What belongs to what?

### JavaScript

JavaScript gives us things like:

- the mouse event
- `getBoundingClientRect()`
- `clientX` & `clientY`
- objects
- calculations

### React

React gives us:

- `useState`
- event handlers
- re-rendering
- conditional rendering


### Tailwind

Tailwind controls:

- size
- spacing
- positioiing
- colours
- typography

### Framer Motion

Framer Motion controls:

- the tooltip's entrance
- the tooltip's exit
- animation


This separation is useful because React isn't doing everything.

---

## Step 1 — tracking whether we're hovering

```jsx
const [isHovering, setIsHovering] = useState(false);
```

We start with:

```text
isHovering = false
```

When the mouse enters:

```jsx
onMouseEnter={() => setIsHovering(true)}
```

When it leaves:

```jsx
onMouseLeave={() => setIsHovering(false)}
```

So:

```text
mouse enters
    ↓
setIsHovering(true)
    ↓
isHovering = true
    ↓
React re-renders
```

---

## Step 2 — tracking the cursor position

A boolean isn't enough.

We also need to know:

```text
x = ?
y = ?
```

So we use an object:

```jsx
const [coords, setCoords] = useState({
  x: 0,
  y: 0,
});
```

When the mouse moves:

```jsx
function handleMouseMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();

  setCoords({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  });
}
```

There are a few new concepts here.

### `e`

`e` is the **event object**.

The browser gives it to our event handler.

It contains information about the event that happened.

### `e.clientX`

The cursor's X position relative to the browser viewport.

### `e.clientY`

The cursor's Y position relative to the browser viewport.

### `getBoundingClientRect()`

This gives us information about the element's position and size.

We use it because we don't want the tooltip position relative to the entire browser window.

We want it relative to our container.

So:

```text
browser cursor position
        ↓
clientX / clientY
        ↓
subtract container position
        ↓
local x / y
        ↓
position tooltip
```

---

## Step 3 — conditionally render the tooltip

We only want the tooltip when the user is hovering.

```jsx
{isHovering && (
  <motion.div>
    ...
  </motion.div>
)}
```

This is **conditional rendering**.

You can read it as:

> if `isHovering` is true, render this.

The `&&` here is a JavaScript pattern commonly used in React for conditional rendering.

---

## Step 4 — position the tooltip

The tooltip uses:

```jsx
style={{
  left: coords.x,
  top: coords.y,
}}
```

So if:

```text
coords = {
  x: 120,
  y: 80
}
```

the tooltip gets positioned at:

```text
left: 120px
top: 80px
```

Every mouse movement updates `coords`.

That causes React to render the tooltip at the new position.

---

## Step 5 — animate it

React answers:

> should the tooltip exist?

Framer Motion answers:

> how should it appear/disappear?

```jsx
<AnimatePresence>
  {isHovering && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      ...
    </motion.div>
  )}
</AnimatePresence>
```

---

## New concepts in this component

### React

- `useState`
    
- event handlers
    
- conditional rendering
    
- re-render
    

### JavaScript

- objects
    
- function parameters
    
- event objects
    
- `&&`
    
- calculations
    

### Browser APIs

- `getBoundingClientRect()`
    
- `clientX`
    
- `clientY`
    

### Framer Motion

- `motion.div`
    
- `AnimatePresence`
    
- `initial`
    
- `animate`
    
- `exit`
    

### CSS / Tailwind

- `relative`
    
- `absolute`
    
- positioning
    
- `pointer-events-none`
    

---

## Things I need to understand before moving on

Don't just memorise this component.

Make sure you can answer:

**Why do we need `coords`?**

Because the tooltip needs to know where to go.

**Why is `coords` an object?**

Because we're storing two related values: `x` & `y`.

**Why does changing `coords` move the tooltip?**

Because state changes → React re-renders → the new coordinates are applied.

**Why do we need `AnimatePresence`?**

Because the tooltip is conditionally removed from the DOM, and we want Framer Motion to control its exit animation.

---

## Try changing it

Before moving to the next component, try:

1. Make the tooltip follow only the X position.
    
2. Offset it by `10px`.
    
3. Make it appear below the cursor instead of directly on it.
    
4. Change the enter animation.
    
5. Remove Framer Motion completely & see what React still does.
    
6. Remove `coords` & understand why the tooltip can no longer follow the cursor.
    

The goal is not to copy the component.

The goal is to be able to break it & understand why it broke.

---

## What this component teaches

The bigger idea is:

```text
browser event
    ↓
event data
    ↓
React state
    ↓
re-render
    ↓
updated UI
```

This is one of the most important patterns in interactive UI.