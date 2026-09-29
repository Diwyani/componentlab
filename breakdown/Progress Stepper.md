## The idea

A row of steps (Account, Profile, Payment, Confirm) showing where you are in a process, with Back and Next buttons. The lesson:

> **One piece of state can control many parts of the UI.**

Every circle, tick, line and button is worked out from one number: `current`.

```text
current = 0  →  click Next  →  setCurrent(c + 1)  →  re-render  →  step 1 ticked, line fills, step 2 active
```

## How it works

### 01 One number for the whole stepper

`current` is the index of the step you're on.

- `0` is Account, `3` is Confirm.
- Nothing else about the stepper is stored anywhere.

```jsx
const steps = ["Account", "Profile", "Payment", "Confirm"];

const [current, setCurrent] = useState(0);
```

### 02 Each step compares itself to current

`.map()` gives every step its `index`, and comparisons decide how it looks.

- `index < current`: already done, shows a tick.
- `index <= current`: done or current, gets the dark filled circle.
- Otherwise: still ahead, grey with its number.

```jsx
className={index <= current ? "bg-neutral-900 text-white" : "bg-neutral-200"}

{index < current ? "✓" : index + 1}
```

### 03 The lines fill in behind you

Between each pair of steps is a line whose fill width is also derived.

- The line after step `index` is full once you've passed that step.
- Framer Motion animates the width, so the line grows instead of snapping.

```jsx
<motion.div
  animate={{ width: index < current ? "100%" : "0%" }}
  transition={{ duration: 0.3 }}
/>
```

### 04 Back and Next can't go too far

The buttons change `current`, clamped so it never leaves the list.

- `Math.max(0, c - 1)` stops Back at the first step.
- `Math.min(steps.length - 1, c + 1)` stops Next at the last.

```jsx
onClick={() => setCurrent((c) => Math.max(0, c - 1))}
onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))}
```

### 05 Disabled states are derived too

Each button knows when it's useless and disables itself.

- Back is disabled on the first step, Next on the last.
- `disabled:opacity-40` from Tailwind fades them out.

```jsx
<button disabled={current === 0}>Back</button>
<button disabled={current === steps.length - 1}>Next</button>
```

## What belongs to what

- **React**: `useState`, functional updates, derived UI, `.map()` with `index`
- **JavaScript**: arrays, `<`, `<=`, `===`, `Math.min()`, `Math.max()`
- **Tailwind**: `flex-1`, `transition-colors`, `disabled:opacity-40`
- **Framer Motion**: `motion.div`, animating `width`

## Things to understand

### Why not store "completed steps" separately?

If you know the current step, you already know every step before it is done. A second list would just be something else to keep in sync.

### What can be derived from `current`?

Which steps are done, which is active, which lines are filled, whether Back or Next is disabled, and what content to show. That's **derived UI**.

## Try changing it

1. Add a fifth step.
2. Show a "Finish" button on the last step.
3. Let clicking a completed step jump back to it.
4. Show different content below the stepper based on `current`.
5. Replace the numbers with icons.

## Read next

- [Choosing the state structure](https://react.dev/learn/choosing-the-state-structure)
- [Rendering lists](https://react.dev/learn/rendering-lists)
- [Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
- [Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
