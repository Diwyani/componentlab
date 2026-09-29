## The idea

A heart that toggles between liked and unliked with a small spring bounce, like liking a post on X. The new idea here:

> **one piece of state can drive a visual change and an animation at the same time.**

```text
isLiked = false  →  click  →  setIsLiked(prev => !prev)  →  re-render  →  red filled heart + bounce
```

## How it works

### 01 The liked state

Same boolean pattern as the Toggle Switch: one value, two states.

- `false` is an outline heart, `true` is a filled one.
- `prev => !prev` flips the value based on what it was a moment ago. This is a [functional update](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state).

```jsx
const [isLiked, setIsLiked] = useState(false);

onClick={() => setIsLiked((prev) => !prev)}
```

### 02 A real icon, not an emoji

Emoji look different on every device and can't be styled. An icon from [lucide-react](https://lucide.dev/) is an SVG you fully control.

- `className` sets the size and colour with Tailwind.
- `fill` switches between outline (`"none"`) and solid.
- `fill="currentColor"` means "use the text colour", so the fill matches `text-red-500` without repeating the colour.

```jsx
<Heart
  className={isLiked ? "h-6 w-6 text-red-500" : "h-6 w-6 text-neutral-400"}
  fill={isLiked ? "currentColor" : "none"}
/>
```

### 03 The bounce

Changing a `key` makes React throw away the old element and mount a brand new one.

- `key={isLiked}` changes every time you click.
- A fresh mount means Framer Motion replays `initial → animate`, from small to full size.
- That's why the pop plays both when liking and unliking.

```jsx
<motion.span
  key={isLiked}
  initial={{ scale: 0.6 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 700, damping: 15 }}
>
```

## What belongs to what

- **React**: `useState`, functional updates, `key` and remounting
- **JavaScript**: flipping a boolean with `!`, ternary `? :`
- **Tailwind**: `text-red-500`, `text-neutral-400`, `h-6 w-6`
- **Framer Motion**: `motion.span`, `initial`, `animate`, spring transition
- **lucide-react**: the `Heart` icon, `fill` and `className` as normal SVG props

## Things to understand

### Why wrap the icon in `motion.span`?

It keeps the icon simple (only styling) and puts all animation in one place. Handy later if you want to animate something the icon doesn't have, like a glow behind it.

### Why `key` instead of an `animate` array like `[1, 1.4, 1]`?

Both work. A `key` remount always restarts cleanly from `initial`. A keyframe array is shorter, but can look different if you click again before it finishes.

### Where did the particle burst go?

An earlier version sent 8 particles flying out on each like. It was cut for being noisy: the fill plus bounce already reads as "liked", closer to how X does it.

## Try changing it

1. Swap `Heart` for `Star` or `Bookmark`. The same pattern still works.
2. Change `stiffness` and `damping` and feel the bounce change.
3. Make the bounce play only when liking, not unliking. (You'll need a second piece of state.)
4. Add a like counter that goes up and down with `isLiked`.

## Read next

- [React state](https://react.dev/learn/state-a-components-memory)
- [Why keys force remounts](https://react.dev/learn/rendering-lists#why-does-react-need-keys)
- [Functional state updates](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state)
- [SVG fill](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)
