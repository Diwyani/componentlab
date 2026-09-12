An accordion is a list of items where clicking an item reveals or hides its content.

The goal isn't just to build an accordion. The goal is to understand how React can use **one piece of state to control a collection of items**.

---

## What are we building?

```text
What is React?
────────────────────────

How does state work?
────────────────────────

What is Framer Motion?
────────────────────────
```

When the user clicks an item:

```text
What is React?
────────────────────────
React is a library...
────────────────────────

How does state work?
────────────────────────

What is Framer Motion?
────────────────────────
```

Clicking the same item again closes it.

---

## The mental model

The first question is:

> How do we know which item is open?

We could store a boolean for every item:

```text
item 1 → true
item 2 → false
item 3 → false
```

But there's a simpler way.

We store:

```text
openIndex
```

For example:

```text
openIndex = 0
```

means:

> item 0 is open.

Or:

```text
openIndex = 2
```

means:

> item 2 is open.

And:

```text
openIndex = null
```

means:

> nothing is open.

---

## The complete flow

```text
openIndex = null
       ↓
nothing is open
       ↓
user clicks item 1
       ↓
setOpenIndex(1)
       ↓
openIndex = 1
       ↓
React re-renders
       ↓
item 1 shows its answer
```

Click item 1 again:

```text
item 1 is already open
       ↓
setOpenIndex(null)
       ↓
nothing is open
```

---

## Step 1 — the data

We have an array of FAQ objects:

```jsx
const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building interfaces.",
  },
  {
    question: "What is state?",
    answer: "State is information that can change over time.",
  },
];
```

Each item contains:

```text
question
answer
```

This is a JavaScript [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

---

## Step 2 — the state

```jsx
const [openIndex, setOpenIndex] = useState(null);
```

Initially:

```text
openIndex = null
```

Nothing is open.

Why `null`?

Because `null` can represent:

> there is currently no selected item.

---

## Step 3 — `.map()` creates each FAQ

```jsx
{faqs.map((faq, index) => (
  ...
))}
```

We get both:

```text
faq
index
```

For example:

```text
faq = first question
index = 0
```

Then:

```text
faq = second question
index = 1
```

Then:

```text
faq = third question
index = 2
```

The [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) creates one piece of UI for every FAQ.

---

## Step 4 — figure out whether this item is open

Inside `.map()`:

```jsx
const isOpen = openIndex === index;
```

This is **derived information**.

We're not storing:

```text
isOpen
```

in state.

We're calculating it.

For example:

```text
openIndex = 1
index = 0

1 === 0
   ↓
false
```

For the second item:

```text
openIndex = 1
index = 1

1 === 1
   ↓
true
```

So:

```text
FAQ 0 → false
FAQ 1 → true
FAQ 2 → false
```

Only one item is open.

---

## Step 5 — clicking an item

```jsx
onClick={() => setOpenIndex(isOpen ? null : index)}
```

This uses a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

Read it as:

> if this item is already open, close it. Otherwise, open it.

So:

```text
isOpen = true
    ↓
setOpenIndex(null)
```

But:

```text
isOpen = false
    ↓
setOpenIndex(index)
```

This gives us the toggle behaviour.

---

## Step 6 — conditionally render the answer

```jsx
{isOpen && (
  <div>
    {faq.answer}
  </div>
)}
```

This uses `&&` for [conditional rendering](https://react.dev/learn/conditional-rendering).

Read it as:

> if this item is open, render the answer.

So:

```text
isOpen = true
    ↓
answer exists


isOpen = false
    ↓
answer doesn't exist
```

---

## Step 7 — animate the answer

Without animation, the answer would simply appear/disappear.

We use:

```jsx
<AnimatePresence>
```

because the answer is conditionally rendered.

When:

```text
isOpen = true
```

the answer enters.

When:

```text
isOpen = false
```

the answer is removed.

`AnimatePresence` allows Framer Motion to play the exit animation before the element is removed.

---

## Step 8 — the plus icon

The icon can also use the same `isOpen` value:

```jsx
animate={{
  rotate: isOpen ? 45 : 0
}}
```

So:

```text
closed
rotate = 0°


open
rotate = 45°
```

The plus sign therefore becomes visually closer to an `×`.

We don't need another state for the icon.

Why?

Because the icon's state can be derived from:

```text
isOpen
```

---

## What belongs to what?

### React

- `useState`
    
- state
    
- `.map()` rendering
    
- conditional rendering
    
- re-render
    

### JavaScript

- arrays
    
- objects
    
- `.map()`
    
- `index`
    
- `===`
    
- ternary
    
- `null`
    

### Framer Motion

- `motion`
    
- `AnimatePresence`
    
- `initial`
    
- `animate`
    
- `exit`
    

### Tailwind

- spacing
    
- borders
    
- layout
    
- typography
    
- overflow
    

---

## The code

```jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is state?",
    answer: "State is information that can change over time.",
  },
  {
    question: "What is Framer Motion?",
    answer: "Framer Motion is a library for adding animations and interactions to React interfaces.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-96">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className="border-b border-neutral-800"
          >
            <button
              onClick={() =>
                setOpenIndex(isOpen ? null : index)
              }
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="text-sm font-medium text-white">
                {faq.question}
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                className="text-xl text-neutral-400"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 text-sm text-neutral-400">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
```

---

## Things to understand

### Why `openIndex` instead of `isOpen`?

Because there are multiple FAQ items.

A single:

```text
isOpen = true
```

wouldn't tell us **which** FAQ is open.

But:

```text
openIndex = 2
```

does.

---

### Why is `isOpen` inside `.map()`?

Because each FAQ needs to ask:

> Am I the open one?

For each item:

```jsx
const isOpen = openIndex === index;
```

So the same logic works for every item.

---

### Is `isOpen` state?

No.

It's **derived data**.

The actual state is:

```text
openIndex
```

We calculate:

```text
isOpen
```

from it.

This is an important React concept:

> Don't store information that you can calculate from existing state.

---

### What does `&&` mean here?

```jsx
{isOpen && <Answer />}
```

It means:

```text
isOpen = true
     ↓
render Answer


isOpen = false
     ↓
render nothing
```

It's a common React pattern for [conditional rendering](https://react.dev/learn/conditional-rendering).

---

### What does `index` mean?

When `.map()` goes through the array:

```text
first item  → index 0
second item → index 1
third item  → index 2
```

So `index` gives each item a position.

---

## Try changing it

1. Make multiple items stay open at the same time.
    
2. Add an arrow instead of `+`.
    
3. Rotate the arrow.
    
4. Change the animation.
    
5. Add a second level of nested questions.
    
6. Move the FAQ data into a separate file.
    
7. Turn the accordion into a reusable component that receives `faqs` as a prop.
    
8. Build a controlled version where the parent decides which item is open.
    

The first exercise is particularly useful.

It forces you to ask:

> If more than one item can be open, is one `openIndex` still enough?

The answer is no.

That is how you start thinking about **choosing the right shape of state** instead of memorising patterns.

---

## What this component teaches

The bigger pattern is:

```text
collection of data
       ↓
.map()
       ↓
each item gets an index
       ↓
compare index with state
       ↓
derive item state
       ↓
conditionally render UI
```

And the deeper React idea is:

```text
state
 ↓
derived information
 ↓
UI
```

---

## Next concepts

- [Rendering lists](https://react.dev/learn/rendering-lists)
    
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
    
- [React state](https://react.dev/learn/state-a-components-memory)
    
- [JavaScript arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    
- [JavaScript objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
    
- [JavaScript `map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    
- [JavaScript ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)