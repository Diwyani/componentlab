A pull-to-refresh list where dragging the content down past a threshold triggers a spinning refresh animation.

## What are we building?

A list with:

- a drag-down gesture on the content itself (not a separate handle)
- a spinner that appears above the list and rotates in sync with how far you've pulled
- a threshold — pull far enough and it locks into a "refreshing" state
- a simulated network delay (`setTimeout`) before it resets

The important part: **one number (`pullProgress`) drives three different things at once** — the spinner's opacity, its rotation, and (indirectly) whether the list has crossed the refresh threshold.

---

## Mental model

```text
user drags list down
        │
        ▼
   onDrag fires repeatedly
        │
        ▼
pullProgress = clamp(offset.y / THRESHOLD, 0, 1)
        │
   ┌────┴─────────────────┐
   ▼                       ▼
spinner opacity      spinner rotation
= pullProgress        = pullProgress * 360°

user releases
        │
        ▼
   onDragEnd fires
        │
        ▼
  offset.y > THRESHOLD?
        │
   ┌────┴────┐
   no         yes
   │           │
   ▼           ▼
reset to 0   isRefreshing = true
             pullProgress = 1 (pinned)
             spinner spins continuously
                   │
              (1200ms later)
                   │
                   ▼
             isRefreshing = false
             pullProgress = 0
```

---

## The code

```jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const items = [
  "New message from Sam",
  "Your order has shipped",
  "3 people liked your post",
  "Weekly summary is ready",
];

const THRESHOLD = 70;

export default function PullToRefresh() {
  const [pullProgress, setPullProgress] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  function handleDrag(_, info) {
    setPullProgress(Math.min(Math.max(info.offset.y, 0) / THRESHOLD, 1));
  }

  function handleDragEnd(_, info) {
    if (info.offset.y > THRESHOLD) {
      setIsRefreshing(true);
      setPullProgress(1);
      setTimeout(() => {
        setIsRefreshing(false);
        setPullProgress(0);
      }, 1200);
    } else {
      setPullProgress(0);
    }
  }

  return (
    <div className="relative h-80 w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex h-14 items-center justify-center"
        style={{ opacity: pullProgress }}
      >
        <motion.div
          animate={isRefreshing ? { rotate: 360 } : { rotate: pullProgress * 360 }}
          transition={isRefreshing ? { duration: 0.7, repeat: Infinity, ease: "linear" } : { duration: 0 }}
        >
          <RefreshCw className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
        </motion.div>
      </div>

      <motion.div
        drag={isRefreshing ? false : "y"}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.6 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={{ y: isRefreshing ? THRESHOLD : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex flex-col gap-2 p-4"
      >
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </motion.div>
    </div>
  );
}
```

---

## 1. `pullProgress` is a number, not a boolean

```jsx
const [pullProgress, setPullProgress] = useState(0);
```

Most of the components before this one used booleans (`isOpen`, `isLiked`) — a light switch, on or off. This one needs something that can be *partway* true, because the spinner should fade and rotate progressively as you drag, not snap on at some arbitrary point. A number from `0` to `1` (0% to 100%) is the natural type for "how far along is this."

---

## 2. Clamping with `Math.min` / `Math.max`

```jsx
Math.min(Math.max(info.offset.y, 0) / THRESHOLD, 1)
```

Read from the inside out:

```text
Math.max(info.offset.y, 0)
  → never let this go below 0
  → (dragging up would give a negative offset — ignore that)

... / THRESHOLD
  → convert "pixels dragged" into "0 to 1+ progress"

Math.min( ..., 1)
  → never let this go above 1
  → (dragging way past the threshold shouldn't overshoot 100%)
```

This "clamp between a floor and a ceiling" pattern — `Math.min(Math.max(value, min), max)` — comes up constantly whenever a raw input (pixels dragged, scroll position, mouse coordinates) needs to be squeezed into a predictable range.

---

## 3. One value, driving two unrelated-looking things

```jsx
style={{ opacity: pullProgress }}
```
```jsx
animate={{ rotate: pullProgress * 360 }}
```

Opacity wants a `0`–`1` number — `pullProgress` already is one, so it's used directly. Rotation wants degrees, `0`–`360` — so `pullProgress` is multiplied by `360`. Same underlying number, two different units, because CSS opacity and CSS rotation just happen to use different scales. This is a common trick: keep *one* source of truth (`0` to `1`) and scale it differently for each thing that consumes it, rather than tracking "opacity" and "rotation" as separate pieces of state that could drift apart.

---

## 4. Two different animations for the same element

```jsx
animate={isRefreshing ? { rotate: 360 } : { rotate: pullProgress * 360 }}
transition={isRefreshing ? { duration: 0.7, repeat: Infinity, ease: "linear" } : { duration: 0 }}
```

While dragging, rotation is a direct, instant (`duration: 0`) reflection of finger position — no animation, just following your thumb 1:1. Once refreshing starts, that stops mattering (there's no more drag), and it switches to a real animation: spin to `360°`, `repeat: Infinity`, forever, until the refresh finishes. Same `rotate` property, completely different behavior, picked with a ternary based on `isRefreshing`.

---

## 5. Disabling drag mid-refresh

```jsx
drag={isRefreshing ? false : "y"}
```

Once a refresh is in progress, dragging is turned off entirely. Otherwise a user could yank the list around *while* the fake network request is "in flight," which would fight with the `animate={{ y: isRefreshing ? THRESHOLD : 0 }}` pinning it in place.

---

## 6. Simulating a network request

```jsx
setIsRefreshing(true);
setPullProgress(1);
setTimeout(() => {
  setIsRefreshing(false);
  setPullProgress(0);
}, 1200);
```

There's no real API call here — `setTimeout` stands in for "waiting on the network." This is a common technique when building or demoing a component before the real data layer exists: fake the delay, wire up the real `fetch`/API call later, and none of the animation logic around it has to change.

---

## What belongs to what?

| Concept | Technology |
|---|---|
| `pullProgress`, `isRefreshing` | React |
| `Math.min`, `Math.max`, `setTimeout` | JavaScript |
| `drag`, `dragConstraints`, `dragElastic` | Framer Motion |
| `onDrag`, `onDragEnd`, `info.offset.y` | Framer Motion |
| `animate`, `transition`, `repeat: Infinity` | Framer Motion |
| `pointer-events-none`, layout classes | Tailwind |

---

## Things to understand

- state as a continuous number (`0`–`1`) instead of a boolean
- the clamp pattern: `Math.min(Math.max(value, min), max)`
- driving multiple visual properties from one source value
- swapping between "follow the gesture directly" and "run a real animation"
- `repeat: Infinity` for indefinite looping animations
- `setTimeout` as a placeholder for a real async request

---

## Try changing it

1. Lower `THRESHOLD` to `40` and see how much less you need to pull.
2. Change the spinner icon to something else from `lucide-react`.
3. Make the list items themselves fade in as `pullProgress` increases.
4. Replace the `setTimeout` with a real `fetch` to a placeholder API.
5. Add a "Pull to refresh" / "Release to refresh" text label that swaps based on whether `pullProgress` has crossed `1`.

---

## What this component teaches

The core idea worth taking with you: **a single continuous value can replace several booleans**. Before reaching for `isHalfway`, `isAlmostThere`, `isPastThreshold` as separate pieces of state, ask whether one number and a few comparisons (`pullProgress > 1`, `pullProgress === 0`) could express the same thing with less state to keep in sync.

---

## Next concepts

After this, you should understand:

- deriving multiple UI properties from one shared value
- clamped/normalized values (`0`–`1` ranges)
- temporarily disabling interaction during an async operation
- faking async delays during development
