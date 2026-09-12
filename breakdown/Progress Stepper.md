
A component that shows where a user currently is in a multi-step process.

For example
 
```text
Account → Profile → Payment → Confirm
```

This component teaches an important React idea:

> **One piece of state can control many parts of the UI.**

---

## What are we building?

A stepper with:

- multiple steps
- a current step
- completed steps
- progress lines
- Back & Next buttons
- disabled states
- animated transitions

---

## Mental model

```text
             STEPPER
                │
                ▼
           current = 0
                │
                ▼
          React renders
                │
                ▼
      every visual state is
       calculated from current
                │
          user clicks Next
                │
                ▼
        setCurrent(c + 1)
                │
                ▼
           current = 1
                │
                ▼
          React re-renders
                │
       ┌────────┼────────┐
       ▼        ▼        ▼
   step 1    step 2    line
   done      current    fills
```

The key idea is:

```text
current
  ↓
everything else is derived
```

---

## The code

```jsx
import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  "Account",
  "Profile",
  "Payment",
  "Confirm",
];

export default function ProgressStepper() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-96">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex flex-1 items-center last:flex-none"
          >
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{
                  backgroundColor:
                    index <= current ? "#ffffff" : "#262626",
                  color:
                    index <= current ? "#000000" : "#737373",
                }}
                transition={{ duration: 0.25 }}
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium"
              >
                {index < current ? "✓" : index + 1}
              </motion.div>

              <span className="text-xs text-neutral-400">
                {step}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div className="relative mx-2 h-0.5 flex-1 -translate-y-3 bg-neutral-800">
                <motion.div
                  animate={{
                    width: index < current ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-y-0 left-0 bg-white"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <button
          onClick={() =>
            setCurrent((c) => Math.max(0, c - 1))
          }
          disabled={current === 0}
          className="rounded-lg bg-neutral-800 px-4 py-2 text-sm text-neutral-200 disabled:opacity-40"
        >
          Back
        </button>

        <button
          onClick={() =>
            setCurrent((c) =>
              Math.min(steps.length - 1, c + 1)
            )
          }
          disabled={current === steps.length - 1}
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
```

---

## 1. The steps

```jsx
const steps = [
  "Account",
  "Profile",
  "Payment",
  "Confirm",
];
```

This is just JavaScript data.

The array gives us four steps.

Because we're using `.map()`, we don't need to manually write each step.

---

## 2. The current step

```jsx
const [current, setCurrent] = useState(0);
```

The number represents the current position.

```text
0 → Account
1 → Profile
2 → Payment
3 → Confirm
```

So initially:

```text
current = 0
```

means Account is the current step.

---

## 3. One state controls everything

This is the most important concept.

We don't store:

```text
accountIsComplete
profileIsComplete
paymentIsComplete
confirmIsCurrent
```

Instead we store only:

```text
current
```

Then we calculate everything else.

For example:

```jsx
index < current
```

means:

> This step has already been completed.

And:

```jsx
index <= current
```

means:

> This step has been reached.

---

## 4. Understanding `index`

`.map()` gives us both:

```jsx
steps.map((step, index) => ...)
```

For our array:

```text
Account   → index 0
Profile   → index 1
Payment   → index 2
Confirm   → index 3
```

So we can compare `index` with `current`.

---

## 5. Completed vs current vs upcoming

Suppose:

```text
current = 2
```

Then:

```text
index 0 → completed
index 1 → completed
index 2 → current
index 3 → upcoming
```

Because:

```text
index < current
```

is true for 0 & 1.

But:

```text
index === current
```

is true for 2.

---

## 6. Why `index <= current`?

For the circle's visual styling:

```jsx
index <= current
```

We want the current step to look active too.

So if:

```text
current = 2
```

then:

```text
0 <= 2 → true
1 <= 2 → true
2 <= 2 → true
3 <= 2 → false
```

Therefore the first three circles get the active appearance.

---

## 7. Why `index < current` for the checkmark?

For the text inside the circle:

```jsx
{index < current ? "✓" : index + 1}
```

If the step is before the current step:

```text
show ✓
```

Otherwise:

```text
show step number
```

So:

```text
✓   ✓   3   4
```

---

## 8. The connector line

We don't want a line after the final step.

So:

```jsx
index < steps.length - 1
```

Our array has length 4.

Therefore:

```text
steps.length - 1
= 4 - 1
= 3
```

The condition becomes:

```text
index < 3
```

So lines appear after:

```text
0
1
2
```

but not after:

```text
3
```

---

## 9. Filling the connector

```jsx
width: index < current ? "100%" : "0%"
```

Suppose:

```text
current = 2
```

Then:

```text
line after step 0 → 100%
line after step 1 → 100%
line after step 2 → 0%
```

So the progress visually matches the current state.

---

## 10. The Next button

```jsx
setCurrent((c) =>
  Math.min(steps.length - 1, c + 1)
)
```

We want:

```text
current + 1
```

but we don't want to go past the final step.

`Math.min()` gives us the smaller value.

So:

```text
Math.min(3, 2 + 1)
→ 3
```

But:

```text
Math.min(3, 3 + 1)
→ 3
```

So the state can never become 4.

---

## 11. The Back button

Same idea:

```jsx
Math.max(0, c - 1)
```

We don't want the value to become negative.

So:

```text
Math.max(0, 0 - 1)
→ 0
```

The state stays within:

```text
0 → 3
```

---

## 12. Disabled buttons

```jsx
disabled={current === 0}
```

The Back button is disabled when we're at the first step.

And:

```jsx
disabled={current === steps.length - 1}
```

disables Next at the final step.

Again, these are derived from the same `current` state.

---

## What belongs to what?

|Concept|Technology|
|---|---|
|`current`|React|
|`useState`|React|
|`steps`|JavaScript|
|`.map()`|JavaScript|
|`index`|JavaScript|
|`Math.min()`|JavaScript|
|`Math.max()`|JavaScript|
|`animate`|Framer Motion|
|`flex`, `gap`, `w-96`|Tailwind|
|`disabled`|HTML|

---

## Things to understand
- array `.map()`
- index
- derived UI
- comparison operators
- `<`
- `<=`
- `===`
- `Math.min()`
- `Math.max()`
- disabled states
- one source of truth

---

## Try changing it

1. Add a fifth step.
2. Change the labels.
3. Add a "Finish" button on the final step.
4. Make clicking a completed step go back to that step.
5. Add different content below the stepper based on `current`.
6. Make the stepper horizontal on desktop & vertical on mobile.
7. Try replacing the number with an icon.

---

## What this component teaches

This is one of the most important patterns you've learned so far:

```text
ONE PIECE OF STATE
       ↓
DERIVED UI
       ↓
many visual changes
```

You don't need separate state for every visual detail.

If the current step is known, you can calculate:

- which steps are complete
    
- which step is current
    
- which lines are filled
    
- whether Back is disabled
    
- whether Next is disabled
    
- what content should be shown
    

That's **derived UI**.

---

## Next concepts

This leads naturally into:

- derived state
- controlled components
- lifting state up
- props
- forms
- reusable component APIs