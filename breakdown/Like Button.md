A heart icon that toggles between liked & unliked, with a small spring bounce — the same feel as liking a post on X/Twitter.

The goal isn't just to make a heart change color. This component introduces an important idea:

> **the same piece of state can drive both a visual change (color/fill) and an animation, at the same time.**

---

## What are we building?

Initially:

```text
♡  (outline, gray)
```

After clicking:

```text
♥  (filled, red, with a little pop)
```

Click again:

```text
♡  (outline, gray)
```

One boolean decides everything — the icon's fill, its color, and whether the bounce replays.

---

## The mental model

We only need one thing:

```text
isLiked
```

```jsx
const [isLiked, setIsLiked] = useState(false);
```

The flow:

```text
isLiked = false
    ↓
outline heart, gray
    ↓
user clicks
    ↓
setIsLiked(prev => !prev)
    ↓
isLiked = true
    ↓
React re-renders
    ↓
filled heart, red
    ↓
bounce plays
```

Click again and it runs the same flow in reverse.

---

## Step 1 — the liked state

```jsx
const [isLiked, setIsLiked] = useState(false);
```

Same boolean pattern as the Toggle Switch — one value, two possible states.

```text
false → true → false
```

---

## Step 2 — using a real icon instead of an emoji

Early drafts of this component used emoji (🤍 / ❤️) for the heart. Emoji render inconsistently across operating systems and can't be styled — no controlling their exact size, stroke width, or color.

Instead, we use an actual icon component from [lucide-react](https://lucide.dev/):

```jsx
import { Heart } from "lucide-react";
```

`Heart` is just an SVG under the hood, which means it accepts normal SVG props — `className` for size/color via Tailwind, and `fill` to control whether it's outlined or solid:

```jsx
<Heart
  className={isLiked ? "h-6 w-6 text-red-500" : "h-6 w-6 text-neutral-400"}
  fill={isLiked ? "currentColor" : "none"}
/>
```

```text
isLiked = false
    ↓
fill="none", gray outline

isLiked = true
    ↓
fill="currentColor", red fill
```

`fill="currentColor"` means "fill with whatever the current text color is" — so it automatically matches `text-red-500` without hardcoding a second color value.

---

## Step 3 — the bounce

```jsx
<motion.span
  key={isLiked}
  initial={{ scale: 0.6 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 700, damping: 15 }}
>
```

The important part here is `key={isLiked}`.

Normally, React reuses the same DOM element across re-renders and just updates its props. But when the `key` changes, React treats it as a **brand new element** — it unmounts the old one and mounts a fresh one. Framer Motion sees a fresh mount and replays `initial → animate` from scratch.

```text
isLiked: false → true
    ↓
key changes (false → true)
    ↓
React treats this as a new element
    ↓
Framer Motion replays the pop
```

That's why the bounce plays **both when liking and unliking** — every change to `isLiked` is a new `key`, so the animation restarts every time, in either direction.

---

## What belongs to what?

### React
- `useState`
- state
- `key` and why changing it forces a remount

### JavaScript
- boolean toggling with `!`
- ternary `? :`

### Tailwind
- `text-red-500` / `text-neutral-400`
- sizing (`h-6 w-6`)

### Framer Motion
- `motion.span`
- `initial` / `animate`
- spring transition
- replaying an animation via `key`

### lucide-react
- `Heart` icon component
- `fill` and `className` as normal SVG props

---

## The code

```jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      onClick={() => setIsLiked((prev) => !prev)}
      aria-label={isLiked ? "Unlike" : "Like"}
      className="flex h-10 w-10 items-center justify-center"
    >
      <motion.span
        key={isLiked}
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 700, damping: 15 }}
      >
        <Heart
          className={isLiked ? "h-6 w-6 text-red-500" : "h-6 w-6 text-neutral-400"}
          fill={isLiked ? "currentColor" : "none"}
        />
      </motion.span>
    </button>
  );
}
```

---

## Things to understand

### Why not just animate the `Heart` icon directly, instead of wrapping it in `motion.span`?

You could `motion.svg` or wrapping the icon differently both work. Wrapping in a plain element keeps the icon itself simple (just styling props) and puts all the animation concerns in one place, which becomes handy if you later want to animate something the icon itself doesn't expose (like a background glow).

### Why `key={isLiked}` instead of using `whileTap` or an `animate` array like `[1, 1.4, 1]`?

Both approaches work and you'll see both in the wild. `key`-based remounting is useful when you want a full, clean restart of the animation from `initial` every single time — no risk of it looking different depending on what mid-animation state it interrupted. An `animate` keyframe array is more compact but can look slightly different if the user clicks again before the previous animation finished.

### What happened to the burst/particle effect?

An earlier version of this component spawned 8 small particles flying outward when liked, using a `burstKey` counter to force a fresh set of particles each time. It was cut for being visually noisy — the icon swap + bounce alone reads clearly as "liked," which is closer to how X's own like button behaves. The core lesson (state driving both appearance and animation) doesn't need the extra complexity to teach.

---

## Try changing it

1. Swap `Heart` for a different lucide icon (`Star`, `Bookmark`) and see the same pattern still applies.
2. Change the spring's `stiffness`/`damping` and feel how it changes the bounce.
3. Make the bounce only play when *liking*, not unliking (hint: you'll need a second piece of state, similar to how `burstKey` used to work).
4. Add a like counter that increments/decrements alongside `isLiked`.

---

## What this component teaches

```text
one boolean
      ↓
drives visual state (fill, color)
      ↓
AND drives animation (via key remount)
```

The same state variable can simultaneously answer "what does this look like?" and "should an animation replay?" — you don't need separate state for each.

---

## Next concepts

- [React state](https://react.dev/learn/state-a-components-memory)
- [Keys and why they force remounts](https://react.dev/learn/rendering-lists#why-does-react-need-keys)
- [Functional state updates](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state)
- [SVG `fill` attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)
