## The idea

A sheet you drag up and down that snaps to one of three resting positions: open, half, or closed. It builds on the Drawer Modal, but instead of one boolean (`isOpen`) the state is **one of several named positions**.

Instead of "did you drag far enough?", the question becomes: **which position is the drag closest to?**

```text
snap = "half"  →  drag and release  →  predict where it's heading  →  pick the closest position  →  spring there
```

## How it works

### 01 Name the positions

Each resting spot gets a name and a pixel value.

- `SNAPS` maps names to how far down the sheet sits (0 is fully open).
- `ORDER` lists the names so we can loop over them.
- State stores the **name** (`"half"`), not a raw number.

```jsx
const SNAPS = { open: 0, half: 170, closed: 310 };
const ORDER = ["open", "half", "closed"];

const [snap, setSnap] = useState("half");
```

### 02 The sheet follows the state

The sheet's position is looked up from the current name.

- `animate={{ y: SNAPS[snap] }}` springs it to that spot whenever `snap` changes.
- `dragConstraints` are hard limits, `dragElastic={0.05}` lets it stretch just a little past them.

```jsx
<motion.div
  drag="y"
  dragConstraints={{ top: SNAPS.open, bottom: SNAPS.closed }}
  dragElastic={0.05}
  animate={{ y: SNAPS[snap] }}
  transition={{ type: "spring", stiffness: 300, damping: 32 }}
  onDragEnd={handleDragEnd}
/>
```

### 03 Predict where the drag is heading

On release we estimate where the sheet **would** end up.

- Start from the current position, add how far you dragged (`offset`).
- Add a bit of the speed (`velocity * 0.15`), so a fast flick carries further, even past the middle position.

```jsx
const projected = SNAPS[snap] + info.offset.y + info.velocity.y * 0.15;
```

### 04 Find the closest position

A "find the minimum" loop checks each position's distance from the prediction.

- `Infinity` is a starting distance that anything will beat.
- `Math.abs` gives distance regardless of direction.
- Whichever position is nearest wins, and becomes the new state.

```jsx
let closest = ORDER[0];
let closestDistance = Infinity;
for (const key of ORDER) {
  const distance = Math.abs(SNAPS[key] - projected);
  if (distance < closestDistance) {
    closestDistance = distance;
    closest = key;
  }
}
setSnap(closest);
```

## What belongs to what

- **React**: `useState` holding a name, event handlers
- **JavaScript**: objects as lookup tables, `for...of` loops, `Math.abs()`, `Infinity`
- **Tailwind**: `absolute inset-x-0`, `overflow-hidden`, `rounded-t-2xl`, `shadow-xl`
- **Framer Motion**: `drag`, `dragConstraints`, `dragElastic`, `onDragEnd`, spring transition

## Things to understand

### Why store names instead of pixel values?

`"half"` says what the position means. Numbers can be tweaked in one place (`SNAPS`) without touching the logic.

### How does this relate to the Drawer?

The Drawer's "far enough or fast enough?" is really the same question with only two answers. This version works for any number of positions.

### What's the difference between the two drag settings?

`dragConstraints` is where the sheet stops. `dragElastic` is how much it can stretch past that stop before springing back.

## Try changing it

1. Add a fourth position, `"peek"`, between `open` and `half`.
2. Remove `* 0.15` and notice flicks stop carrying.
3. Raise `dragElastic` to `0.3` and feel the edges.
4. Rewrite the loop with `Array.reduce`.
5. `console.log(projected)` on each release to see the decision.

## Read next

- [Framer Motion drag](https://motion.dev/docs/react-drag)
- [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [Math.abs()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
- [Choosing the state structure](https://react.dev/learn/choosing-the-state-structure)
