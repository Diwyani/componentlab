A password field with a live strength meter that fills and changes color as your input satisfies more of the listed rules.

## What are we building?

A password input with:

- a segmented strength bar that fills, segment by segment, as you type
- a color that shifts from red through to green as strength increases
- a checklist of rules that check themselves off live
- everything derived from one array of rule objects — no hardcoded "if 8 characters and uppercase then..." chain

The important part: **the rules are data, not a chain of `if` statements.** Adding a fifth rule means adding one object to an array — nothing else in the component changes.

---

## Mental model

```text
RULES = [
  { test: v => v.length >= 8,      label: "At least 8 characters" },
  { test: v => /[A-Z]/.test(v),    label: "An uppercase letter" },
  { test: v => /[0-9]/.test(v),    label: "A number" },
  { test: v => /[^A-Za-z0-9]/.test(v), label: "A special character" },
]

user types → value changes
                │
                ▼
     score = RULES.filter(rule => rule.test(value)).length
                │
                ▼
        level = LEVELS[score]
                │
        ┌───────┼────────┐
        ▼       ▼        ▼
   bar segments  label   each rule's
   (score > i)  text    checkmark
                         (rule.test(value))
```

---

## The code

```jsx
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const RULES = [
  { test: (v) => v.length >= 8, label: "At least 8 characters" },
  { test: (v) => /[A-Z]/.test(v), label: "An uppercase letter" },
  { test: (v) => /[0-9]/.test(v), label: "A number" },
  { test: (v) => /[^A-Za-z0-9]/.test(v), label: "A special character" },
];

const LEVELS = [
  { label: "Very weak", color: "bg-red-500" },
  { label: "Weak", color: "bg-orange-500" },
  { label: "Fair", color: "bg-yellow-500" },
  { label: "Good", color: "bg-lime-500" },
  { label: "Strong", color: "bg-green-500" },
];

export default function PasswordStrengthMeter() {
  const [value, setValue] = useState("");

  const score = useMemo(() => RULES.filter((rule) => rule.test(value)).length, [value]);
  const level = value ? LEVELS[score] : null;

  return (
    <div className="w-72">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type a password..." />

      <div className="mt-3 flex gap-1">
        {RULES.map((_, i) => (
          <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
            <motion.div
              className={`h-full ${level ? level.color : ""}`}
              initial={false}
              animate={{ width: score > i ? "100%" : "0%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </div>
        ))}
      </div>

      <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
        {level ? level.label : "Start typing to see strength"}
      </p>

      <ul className="mt-3 flex flex-col gap-1">
        {RULES.map((rule) => {
          const passed = rule.test(value);
          return (
            <li key={rule.label}>
              <Check className={`h-3 w-3 ${passed ? "opacity-100" : "opacity-0"}`} />
              {rule.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

---

## 1. A rule is a function, stored in an array

```jsx
const RULES = [
  { test: (v) => v.length >= 8, label: "At least 8 characters" },
  ...
];
```

Each rule pairs a **function** (`test`) with a **label**. `test` takes the current password value and returns `true` or `false`. This is a step up from earlier components — instead of state driving a fixed piece of UI, here a piece of *data* (the `RULES` array) drives both the logic and the list of checkboxes rendered underneath. Functions being stored as ordinary values in an array — not called immediately, just held onto — is what makes that possible.

---

## 2. Turning rules into a score

```jsx
const score = useMemo(() => RULES.filter((rule) => rule.test(value)).length, [value]);
```

Read inside-out:

```text
RULES.filter(rule => rule.test(value))
  → keep only the rules whose test() returns true for the current value
  → e.g. if only length and number pass, this returns 2 rule objects

.length
  → how many rules passed → the score (0 to 4)
```

Nothing here mentions "8 characters" or "uppercase" by name. The score is just "how many rules currently return true" — completely generic to whatever's in `RULES`.

---

## 3. `useMemo` — recompute only when it matters

```jsx
useMemo(() => RULES.filter(...).length, [value]);
```

`useMemo` caches the result of a calculation and only re-runs it when something in the dependency array (`[value]`) changes. Without it, this component would still *work* — `RULES.filter(...)` is cheap enough that recalculating it on every render wouldn't be noticeable here. But it's the right habit to build: any derived value that's more expensive than "map over 4 short strings" (a large list, a heavy regex, a sort) should be wrapped in `useMemo` so it isn't recalculated on renders that have nothing to do with it.

---

## 4. Deriving the level from the score

```jsx
const level = value ? LEVELS[score] : null;
```

`LEVELS` is a 5-item array (`score` can be `0` through `4`), so `LEVELS[score]` always lands on a valid entry — no separate `if/else if/else` chain deciding "weak vs fair vs strong." The `value ?` guard exists so an *empty* input shows neither a color nor a label — `LEVELS[0]` ("Very weak") would otherwise show even before the user has typed anything.

---

## 5. Turning the score into a filled bar

```jsx
{RULES.map((_, i) => (
  <div key={i}>
    <motion.div animate={{ width: score > i ? "100%" : "0%" }} />
  </div>
))}
```

There's one bar segment *per rule* — mapping over `RULES` just to get 4 items, ignoring the rule itself (`_`) and using only its index (`i`). Each segment asks one question: "is the score greater than my position?" Segment `0` fills once `score >= 1`, segment `1` once `score >= 2`, and so on. This is the same idea as the Progress Stepper's `index <= current` check, applied to a strength meter instead of a wizard.

---

## 6. Reusing the test functions for the checklist

```jsx
{RULES.map((rule) => {
  const passed = rule.test(value);
  return (
    <li key={rule.label}>
      <Check className={passed ? "opacity-100" : "opacity-0"} />
      {rule.label}
    </li>
  );
})}
```

Notice `rule.test(value)` is called *again* here, separately from the `score` calculation above. Each rule doesn't just contribute to a total — its individual pass/fail state also drives its own checkmark. Rather than toggling the checkmark icon's *presence*, its `opacity` is toggled between `0` and `100` — the icon is always in the DOM, just invisible when the rule hasn't passed yet, which keeps the list from visibly reflowing as items pop in and out.

---

## What belongs to what?

| Concept | Technology |
|---|---|
| `value` | React |
| `useMemo` | React |
| functions stored in an array, `.filter()`, `.map()`, regex `.test()` | JavaScript |
| `motion.div`, `animate`, `width` transition | Framer Motion |
| `opacity-0` / `opacity-100`, layout classes | Tailwind |

---

## Things to understand

- storing functions as data inside an array
- `.filter()` combined with a function stored on each item
- `useMemo` and when it's actually worth reaching for
- deriving a "level" from a numeric score via array indexing
- reusing the same test function for two different purposes (scoring and checklist)

---

## Try changing it

1. Add a fifth rule — nothing else in the component should need to change.
2. Add a length-based bonus: make very long passwords (16+ characters) count as two rules.
3. Swap the regex rules for a real password-strength library and compare results.
4. Make the input `type="password"` and add a show/hide toggle.
5. Animate the label text itself, not just the bar, when the level changes.

---

## What this component teaches

This is the first component in the series where **the rules themselves are configuration, not code**. Every previous component's logic was written directly into the JSX or a handler function. Here, the actual "what counts as a strong password" decision lives entirely in the `RULES` array — the rendering logic (`.filter()`, `.map()`) doesn't know or care what the rules check for. This pattern — data-driven logic instead of hardcoded conditionals — is what makes components scale past a handful of cases without turning into an unreadable chain of `if`s.

---

## Next concepts

After this, you should understand:

- data-driven UI (rules/config as arrays, not conditionals)
- `useMemo` and derived state
- calling the same function for two different purposes
- regex basics (`.test()`)
