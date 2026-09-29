## The idea

A row of options (Day, Week, Month, Year) where exactly one is selected. It uses the same pattern as the Tab Switcher, which shows that one React pattern powers many components. The new lesson is about **when and how to make a piece reusable**.

```text
selected = "Day"  →  click Month  →  onChange("Month")  →  setSelected  →  re-render  →  pill slides to Month
```

## How it works

### 01 The state lives in the parent

The demo component holds the selected value, not the control itself.

- `Segmented` receives `value` (what's selected) and `onChange` (how to change it) as props.
- This is a **controlled component**: the parent decides, the control just shows and reports.

```jsx
const demoOptions = ["Day", "Week", "Month", "Year"];

export default function SegmentedControl() {
  const [selected, setSelected] = useState(demoOptions[0]);
  return <Segmented options={demoOptions} value={selected} onChange={setSelected} />;
}
```

### 02 Accept strings or objects

Each option can be a plain string or a `{ value, label }` object.

- `typeof option === "string"` checks which shape it got.
- A string is both the value and the label. An object can show one thing and mean another.

```jsx
const optValue = typeof option === "string" ? option : option.value;
const optLabel = typeof option === "string" ? option : option.label;
```

### 03 Each option asks "am I active?"

Same comparison as the Tab Switcher.

- `value === optValue` is true for exactly one option.
- Clicking calls `onChange` with this option's value, and the parent updates.

```jsx
const isActive = value === optValue;

<button onClick={() => onChange(optValue)}>
```

### 04 The sliding pill

The active option renders a pill with a shared `layoutId`, so Framer Motion slides it between options.

```jsx
{isActive && (
  <motion.div
    layoutId={`segmented-pill-${pillId}`}
    transition={{ type: "spring", stiffness: 500, damping: 35 }}
  />
)}
```

### 05 useId keeps two controls apart

If two controls on a page used the same `layoutId`, the pill would jump between them.

- [`useId()`](https://react.dev/reference/react/useId) gives each control its own unique id automatically.
- `??` means: use the `layoutId` prop if one was passed, otherwise the generated one.

```jsx
const autoId = useId();
const pillId = layoutId ?? autoId;
```

## What belongs to what

- **React**: controlled components, props, `useId`, `.map()`, conditional rendering
- **JavaScript**: `typeof`, `===`, `??`, template literals
- **Tailwind**: `inline-flex`, `rounded-full`, `relative` / `absolute`, `z-10`
- **Framer Motion**: `motion.div`, `layoutId`, spring transition

## Things to understand

### Why move the state out of the control?

Once a piece is reusable, the page using it usually needs to know the selection too. Keeping state in the parent means the control stays simple and any page can use it.

### When should you extract a reusable component?

Not upfront. Do it the moment you actually need the same behaviour in a second place.

## Try changing it

1. Put two `<Segmented>` controls on the page and check their pills stay separate.
2. Pass the same `layoutId` to both and watch the pill wrongly jump between them.
3. Mix plain strings and `{ value, label }` objects in `options`.
4. Add a disabled option that can't be clicked.
5. Remove the `??` fallback and see what breaks.

## Read next

- [Sharing state between components](https://react.dev/learn/sharing-state-between-components)
- [useId](https://react.dev/reference/react/useId)
- [Passing props to a component](https://react.dev/learn/passing-props-to-a-component)
- [Nullish coalescing (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
