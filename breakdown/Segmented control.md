A group of options where exactly one option is selected at a time.

For example:

```text
Day | Week | Month | Year
```

This is conceptually very similar to the Tab Switcher you already built. The difference is useful because it shows that the same React pattern can power many different UI components — and, as you'll see below, this component eventually became more than just a demo: it turned into a **reusable piece used elsewhere in this project**.

---

## What are we building?

A segmented control with:

- multiple options
- one selected value
- click interaction
- conditional styling
- an animated active pill

---

## Mental model

```text
             OPTIONS
                │
                ▼
     ["Day", "Week", "Month", "Year"]
                │
                ▼
          selected = "Day"
                │
                ▼
          render all options
                │
        selected === option?
          │              │
         YES             NO
          │              │
          ▼              ▼
      active pill      no pill
      black text       grey text
                │
          user clicks
             Month
                │
                ▼
        setSelected("Month")
                │
                ▼
          React re-renders
                │
                ▼
          pill moves to Month
```

---

## The code

This component actually now lives as **two things in one file**: a reusable primitive, and a small demo that uses it.

```jsx
import { useId, useState } from "react";
import { motion } from "framer-motion";

export function Segmented({ options, value, onChange, layoutId }) {
  const autoId = useId();
  const pillId = layoutId ?? autoId;

  return (
    <div className="inline-flex gap-0.5 rounded-full bg-neutral-800 p-1">
      {options.map((option) => {
        const optValue = typeof option === "string" ? option : option.value;
        const optLabel = typeof option === "string" ? option : option.label;
        const isActive = value === optValue;

        return (
          <button
            key={optValue}
            onClick={() => onChange(optValue)}
            className="relative rounded-full px-4 py-1.5 text-sm font-medium"
          >
            {isActive && (
              <motion.div
                layoutId={`segmented-pill-${pillId}`}
                className="absolute inset-0 rounded-full bg-white"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-black" : "text-neutral-400"}`}>
              {optLabel}
            </span>
          </button>
        );
      })}
    </div>
  );
}

const demoOptions = ["Day", "Week", "Month", "Year"];

export default function SegmentedControl() {
  const [selected, setSelected] = useState(demoOptions[0]);

  return <Segmented options={demoOptions} value={selected} onChange={setSelected} />;
}
```

---

## 1. Why did this change from one component into two?

The original version (what you'll still recognize from the Tab Switcher) managed its own state internally — you couldn't reuse the pill-switcher part without also getting the hardcoded `Day/Week/Month/Year` options baked in.

Later, this project needed the exact same "sliding pill between options" behavior somewhere else entirely: the Preview/Code tab switcher used on every component's page in this app. Rather than write that logic twice, the pill-switcher itself was pulled out into its own function — `Segmented` — that takes its options and its state as **props**, instead of owning them.

```text
before
  ↓
SegmentedControl owns everything (options + state + rendering)

after
  ↓
Segmented owns only rendering
SegmentedControl (this demo) owns the options + state, and hands them to Segmented
```

This is the same idea as "lifting state up," just applied to a whole component instead of a single value.

---

## 2. Reading `Segmented`'s props

```jsx
export function Segmented({ options, value, onChange, layoutId }) {
```

- `options` — the list of choices to render (either plain strings, or `{ value, label }` objects — see below).
- `value` — which option is currently selected. `Segmented` doesn't decide this; whoever renders `Segmented` decides it.
- `onChange` — a function `Segmented` calls when a user clicks an option, handing back that option's value.
- `layoutId` — an optional identifier explained in the next section.

This is called a **controlled component**: `Segmented` never stores "what's selected" itself. It just displays whatever `value` it's given, and reports clicks via `onChange`. The demo below supplies both:

```jsx
const [selected, setSelected] = useState(demoOptions[0]);

return <Segmented options={demoOptions} value={selected} onChange={setSelected} />;
```

`setSelected` is passed directly as `onChange` — when `Segmented` calls `onChange(newValue)`, it's really calling `setSelected(newValue)`.

---

## 3. Supporting both strings and objects

```jsx
const optValue = typeof option === "string" ? option : option.value;
const optLabel = typeof option === "string" ? option : option.label;
```

This lets `Segmented` accept either:

```jsx
["Day", "Week", "Month", "Year"]
```

or:

```jsx
[
  { value: "preview", label: "Preview" },
  { value: "code", label: "Code" },
]
```

`typeof option === "string"` checks which shape you gave it. If it's a plain string, that string is both the value and the label. If it's an object, `.value` and `.label` are read out separately. This flexibility is exactly what let the *same* `Segmented` component power both this demo (plain strings) and the Preview/Code switcher elsewhere in the app (which needed a value like `"preview"` distinct from the label `"Preview"`).

---

## 4. Why does `layoutId` need a fallback?

```jsx
const autoId = useId();
const pillId = layoutId ?? autoId;
```

The original version hardcoded `layoutId="segmented-pill"` directly. That's fine when only one `Segmented` exists on the page at a time — but once `Segmented` became reusable, nothing stops two instances from being mounted simultaneously (for example: this very demo, sitting inside the Preview panel of *its own* Preview/Code page, while the Preview/Code switcher itself is also a `Segmented`, both visible at once).

If both used the exact same `layoutId`, Framer Motion would think their pills were *the same element* and try to animate one pill jumping between two unrelated controls — visibly broken.

[`useId()`](https://react.dev/reference/react/useId) generates a unique, stable ID per component instance. `layoutId ?? autoId` means: "use whatever `layoutId` was passed in, but if none was, fall back to this instance's own unique ID." So every `Segmented` on the page gets its own isolated pill animation unless you deliberately want two of them to share one (which the fallback still allows, by passing `layoutId` explicitly).

---

## 5. The rest is the same pattern as before

Once you're inside the `options.map(...)`, everything is the same logic the original version had:

```jsx
const isActive = value === optValue;
```

```text
value = "Month"

optValue = "Day"    → false
optValue = "Week"   → false
optValue = "Month"  → true
optValue = "Year"   → false
```

Only one option can be active. The pill only renders for that one:

```jsx
{isActive && (
  <motion.div layoutId={`segmented-pill-${pillId}`} ... />
)}
```

And `relative` / `absolute` position the pill behind the label text (`z-10`) exactly as before — see the earlier version of this file (or the Tab Switcher notes) if you want the positioning explained from scratch.

---

## What belongs to what?

|Concept|Technology|
|---|---|
|`value`, `onChange` props|React (controlled component pattern)|
|`useState` (in the demo)|React|
|`useId`|React|
|`options.map()`|JavaScript|
|`typeof` check|JavaScript|
|nullish coalescing `??`|JavaScript|
|`layoutId`|Framer Motion|
|`transition`|Framer Motion|
|`relative` / `absolute`, `z-10`|CSS / Tailwind|

---

## Things to understand

- controlled components (`value` + `onChange`, not internal state)
- why extracting a reusable piece means moving state *out*, not in
- `typeof` as a way to accept more than one input shape
- `useId()` and why shared `layoutId`s can collide
- everything from before: `.map()`, `===`, conditional rendering, shared layout animation

---

## Try changing it

1. Render two `<Segmented>` controls on the same page and confirm their pills don't interfere with each other.
2. Deliberately pass the same `layoutId` to both, and watch the pill incorrectly jump between them.
3. Pass an `options` array mixing plain strings and `{ value, label }` objects.
4. Add a `disabled` option to the array and skip rendering its pill/click handler.
5. Try removing the `??` fallback and see what breaks when `layoutId` isn't passed.

---

## What this component teaches

The React lesson from before still holds:

```text
options
   ↓
selected value
   ↓
compare
   ↓
render
```

But the bigger lesson is about **when and why to extract a reusable component**: not upfront, but the moment you actually need the same behavior in a second place. `Segmented` didn't start reusable  it became reusable once there was a real second use case (the Preview/Code switcher), and the props it ended up needing (`options`, `value`, `onChange`, `layoutId`) were shaped by what that second use case actually required, not guessed in advance.

---

## Next concepts

- [Controlled and uncontrolled components](https://react.dev/learn/sharing-state-between-components)
- [useId](https://react.dev/reference/react/useId)
- [Lifting state up](https://react.dev/learn/sharing-state-between-components)
- [Passing props to a component](https://react.dev/learn/passing-props-to-a-component)
- [Nullish coalescing operator (`??`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
