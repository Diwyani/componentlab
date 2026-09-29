## The idea

A password field with a bar that fills and changes colour as your password meets more rules, and a checklist that ticks itself off as you type. The key idea:

> **The rules are data, not a chain of `if` statements.** Adding a fifth rule means adding one object to an array.

```text
type  →  count how many rules pass  →  score  →  pick a level  →  bar, label and ticks all update
```

## How it works

### 01 The input is controlled

The typed text lives in state, and the input always shows that state.

- `value={value}` shows the state, `onChange` updates it on every keystroke.
- React is the single source of truth for what's in the box.

```jsx
const [value, setValue] = useState("");

<input value={value} onChange={(e) => setValue(e.target.value)} />
```

### 02 Rules as an array of objects

Each rule has a `test` function and a `label`.

- `test` takes the password and returns `true` or `false`.
- `/[A-Z]/.test(v)` is a regular expression: "does it contain a capital letter?"

```jsx
const RULES = [
  { test: (v) => v.length >= 8, label: "At least 8 characters" },
  { test: (v) => /[A-Z]/.test(v), label: "An uppercase letter" },
  { test: (v) => /[0-9]/.test(v), label: "A number" },
  { test: (v) => /[^A-Za-z0-9]/.test(v), label: "A special character" },
];
```

### 03 Score = how many pass

`.filter()` keeps the rules whose test passes, and `.length` counts them.

- The score goes from 0 to 4.
- `useMemo` remembers the result and only recalculates when `value` changes.

```jsx
const score = useMemo(() => RULES.filter((rule) => rule.test(value)).length, [value]);
```

### 04 Score picks a level

The score is used as a position in a list of levels.

- `LEVELS[0]` is "Very weak" in red, `LEVELS[4]` is "Strong" in green.
- An empty box has no level at all, so the hint text shows instead.

```jsx
const LEVELS = [
  { label: "Very weak", color: "bg-red-500" },
  // ...
  { label: "Strong", color: "bg-green-500" },
];

const level = value ? LEVELS[score] : null;
```

### 05 The bar fills segment by segment

One segment per rule. A segment is full when the score is higher than its index.

- Score 2: segments 0 and 1 are full, 2 and 3 empty.
- Framer Motion animates each segment's width.

```jsx
{RULES.map((_, i) => (
  <motion.div
    className={level ? level.color : ""}
    animate={{ width: score > i ? "100%" : "0%" }}
  />
))}
```

### 06 The checklist reuses the same tests

Each rule's `test` is called again to tick its own line.

- The same function does two jobs: counting the score and showing the checklist.

```jsx
{RULES.map((rule) => {
  const passed = rule.test(value);
  return <li className={passed ? "text-green-600" : "text-neutral-400"}>{rule.label}</li>;
})}
```

## What belongs to what

- **React**: controlled input, `useState`, `useMemo`, derived values
- **JavaScript**: functions stored in objects, `.filter()`, `.length`, regex `.test()`, array indexing
- **Tailwind**: colour classes per level, `flex-1` segments, `transition-colors`
- **Framer Motion**: animating `width`, `initial={false}`
- **lucide-react**: the `Check` icon

## Things to understand

### Why store functions in an array?

So the component doesn't need to know what the rules are. It just runs whatever tests it's given. New rule, no new code.

### Is `useMemo` needed here?

Honestly, not for four tiny tests. It's here to show the idea: remember an expensive calculation and only redo it when its inputs change.

## Try changing it

1. Add a fifth rule. Nothing else should need to change (except adding a level).
2. Make 16+ characters count as two rules.
3. Change the input to `type="password"` with a show/hide toggle.
4. Animate the level label when it changes.

## Read next

- [Reacting to input with state](https://react.dev/learn/reacting-to-input-with-state)
- [useMemo](https://react.dev/reference/react/useMemo)
- [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
- [Array filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
