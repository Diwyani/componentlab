## The idea

Drag the list down, a spinner fades in and turns as you pull, and past a certain point it locks into refreshing for a moment. The core idea:

> **A single number from 0 to 1 can replace several booleans.**

Instead of `isHalfway`, `isAlmostThere`, `isPastThreshold`, one value, `pullProgress`, drives everything.

```text
drag down  →  pullProgress 0 → 1  →  spinner fades in and turns  →  release past 70px  →  refreshing  →  reset
```

## How it works

### 01 Two pieces of state

`pullProgress` is how far you've pulled, `isRefreshing` is whether we're in the locked refresh.

- `0` is not pulled at all, `1` is pulled all the way to the threshold.

```jsx
const THRESHOLD = 70;

const [pullProgress, setPullProgress] = useState(0);
const [isRefreshing, setIsRefreshing] = useState(false);
```

### 02 Turn the drag into a 0 to 1 number

While dragging, the pull distance is divided by the threshold and **clamped** between 0 and 1.

- `Math.max(offset, 0)` ignores upward drags.
- Dividing by `70` turns pixels into a fraction.
- `Math.min(..., 1)` stops it going past 1 however far you pull.

```jsx
function handleDrag(_, info) {
  setPullProgress(Math.min(Math.max(info.offset.y, 0) / THRESHOLD, 1));
}
```

### 03 One number, two visuals

The same `pullProgress` sets the spinner's opacity and its rotation.

- Opacity `0.5` when half pulled, fully visible at `1`.
- Rotation `pullProgress * 360`: half pulled is half a turn.

```jsx
<div style={{ opacity: pullProgress }}>
  <motion.div animate={{ rotate: pullProgress * 360 }} />
</div>
```

### 04 Release: refresh or snap back

On release we check whether you pulled past the threshold.

- Yes: lock into refreshing and pin the spinner fully visible.
- `setTimeout` stands in for a real network request, and resets after 1.2 seconds.
- No: `pullProgress` goes back to `0`.

```jsx
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
```

### 05 Spin forever while refreshing

While refreshing, the spinner switches from following your finger to a real looping animation.

- `repeat: Infinity` with `ease: "linear"` gives a steady, endless spin.
- Dragging is turned off (`drag={false}`) so you can't pull again mid-refresh, and the list holds 70px down.

```jsx
animate={isRefreshing ? { rotate: 360 } : { rotate: pullProgress * 360 }}
transition={isRefreshing ? { duration: 0.7, repeat: Infinity, ease: "linear" } : { duration: 0 }}

drag={isRefreshing ? false : "y"}
animate={{ y: isRefreshing ? THRESHOLD : 0 }}
```

## What belongs to what

- **React**: `useState` with a number, derived visuals, event handlers
- **JavaScript**: `Math.min()`, `Math.max()`, division, `setTimeout`, constants
- **Tailwind**: `overflow-hidden`, `absolute inset-x-0`, `pointer-events-none`
- **Framer Motion**: `drag`, `dragElastic`, `onDrag`, `onDragEnd`, `repeat: Infinity`
- **lucide-react**: the `RefreshCw` icon

## Things to understand

### What is clamping?

Keeping a value inside a range: `Math.min(Math.max(value, min), max)`. Here it makes sure `pullProgress` is always between 0 and 1.

### Why `duration: 0` while pulling?

While your finger is on the list, the spinner should follow instantly. Any animation delay would make it lag behind your hand.

## Try changing it

1. Lower `THRESHOLD` to `40` and feel the difference.
2. Swap the spinner for another lucide icon.
3. Add a label that switches from "Pull to refresh" to "Release to refresh" at `1`.
4. Replace the `setTimeout` with a real `fetch`.

## Read next

- [React state](https://react.dev/learn/state-a-components-memory)
- [Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
- [Framer Motion drag](https://motion.dev/docs/react-drag)
- [Repeating animations](https://motion.dev/docs/react-transitions#repeat)
