## The idea

Five stars where hovering previews a rating and clicking locks it in. The important part:

> **Two pieces of state for two ideas that look the same on screen:** what's committed, and what's being previewed. A third value, worked out from both, decides what to show.

```text
hover star 4  →  hovered = 4  →  display = 4  →  click  →  rating = 4  →  mouse leaves  →  display = rating
```

## How it works

### 01 Committed and previewed

`rating` is what you've actually chosen. `hovered` is the star under your mouse right now.

- `rating` starts at `0` (nothing chosen).
- `hovered` starts at `null` (mouse isn't over the stars).

```jsx
const [rating, setRating] = useState(0);
const [hovered, setHovered] = useState(null);
```

### 02 Decide what to show

`??` means: use `hovered` if it has a value, otherwise fall back to `rating`.

- Hovering: show the preview.
- Not hovering: show the real rating.

```jsx
const display = hovered ?? rating;
```

### 03 Make five stars from a number

We don't write five buttons. We make an array `[1, 2, 3, 4, 5]` and `.map()` it.

- `Array.from({ length: 5 }, (_, i) => i + 1)` builds that array.
- Change `MAX` and the number of stars follows.

```jsx
const MAX = 5;

{Array.from({ length: MAX }, (_, i) => i + 1).map((value) => ( ... ))}
```

### 04 Hover previews, click commits

Each star sets `hovered` on enter and `rating` on click. Leaving the whole row clears the preview.

- `onMouseLeave` is on the row, not each star, so moving between stars doesn't flicker.

```jsx
<div onMouseLeave={() => setHovered(null)}>
  <motion.button
    onMouseEnter={() => setHovered(value)}
    onClick={() => setRating(value)}
  />
</div>
```

### 05 Fill and pop

A star is filled when its number is at or below `display`.

- Filled stars are yellow and scale up slightly with a springy pop.
- `whileTap` squashes the star while it's pressed.

```jsx
const filled = value <= display;

<motion.button
  whileTap={{ scale: 0.85 }}
  animate={{ scale: filled ? 1.1 : 1 }}
  transition={{ type: "spring", stiffness: 500, damping: 20 }}
>
  <Star fill={filled ? "currentColor" : "none"} />
</motion.button>
```

## What belongs to what

- **React**: two related `useState`s, derived values, `.map()`, mouse events
- **JavaScript**: `??`, `Array.from()`, `<=`, template literals
- **Tailwind**: `text-yellow-400`, `flex gap-1`, sizing
- **Framer Motion**: `whileTap`, `animate` scale, spring transition
- **lucide-react**: the `Star` icon

## Things to understand

### Why not just one piece of state?

With only `rating`, hovering would have to change the real rating, and leaving would lose it. Keeping the preview separate means you can look without committing.

### Why `??` and not `||`?

`||` treats `0` as "empty" too. `??` only falls back on `null` or `undefined`, which is exactly what "not hovering" means here.

## Try changing it

1. Change `MAX` to 10.
2. Allow half stars.
3. Clicking the current rating again clears it back to 0.
4. Show a word under the stars ("Poor", "Great") based on `display`.

## Read next

- [Choosing the state structure](https://react.dev/learn/choosing-the-state-structure)
- [Nullish coalescing (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [Framer Motion gestures](https://motion.dev/docs/react-gestures)
