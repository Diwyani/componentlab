

A placeholder UI that appears while content is loading.

The goal isn't just to make a skeleton. This component introduces **effects**, timers, cleanup, & the idea that a UI can move through multiple states.

---

## What are we building?

While content is loading:

```text
┌─────────────────────────┐
│ ████████████████        │
│ ███████████████████     │
│ ██████████              │
└─────────────────────────┘
```

After loading:

```text
┌─────────────────────────┐
│ Weekly Notes            │
│ Ideas from this week.   │
│                         │
│ Read more →             │
└─────────────────────────┘
```

---

## The mental model

We have one important piece of state:

```text
isLoading
```

Initially:

```text
isLoading = true
```

So we show the skeleton.

After some time:

```text
isLoading = false
```

So we show the content.

The flow:

```text
component renders
       ↓
isLoading = true
       ↓
show skeleton
       ↓
useEffect runs
       ↓
start timer
       ↓
2 seconds pass
       ↓
setIsLoading(false)
       ↓
React re-renders
       ↓
show content
```

---

## Step 1 — loading state

```jsx
const [isLoading, setIsLoading] = useState(true);
```

We start with:

```text
true
```

because the component begins in a loading state.

Later:

```jsx
setIsLoading(false);
```

changes it.

---

## Step 2 — why `useEffect`?

We want to start a timer after the component appears.

That is a **side effect**.

A side effect is something the component does outside simply calculating what UI to render.

Examples include:

- timers
    
- network requests
    
- subscriptions
    
- browser APIs
    

React provides [`useEffect`](https://react.dev/reference/react/useEffect) for this.

```jsx
useEffect(() => {
  ...
}, []);
```

---

## Step 3 — start the timer

```jsx
const timer = setTimeout(() => {
  setIsLoading(false);
}, 2000);
```

`setTimeout` is JavaScript.

It means:

> run this function after 2000 milliseconds.

So:

```text
2000 ms
   ↓
2 seconds
```

After two seconds:

```jsx
setIsLoading(false);
```

runs.

---

## Step 4 — the dependency array

At the end:

```jsx
}, []);
```

The empty array tells React that this effect should run when the component mounts rather than after every render.

Think:

```text
component appears
      ↓
effect runs
      ↓
timer starts
```

The dependency array is part of understanding how [`useEffect`](https://react.dev/reference/react/useEffect) decides when an effect should run again.

---

## Step 5 — cleanup

We return:

```jsx
return () => clearTimeout(timer);
```

This is cleanup.

If the component disappears before the timer finishes, we don't want the timer hanging around.

So:

```text
effect starts
   ↓
timer starts
   ↓
component goes away
   ↓
cleanup runs
   ↓
clearTimeout()
```

Think of it as:

> if I start something, I should clean it up when I'm done with it.

---

## Step 6 — conditional rendering

We can decide which UI to show:

```jsx
{isLoading ? (
  <Skeleton />
) : (
  <Content />
)}
```

This uses a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

Read it as:

> if loading, show the skeleton. Otherwise, show the content.

So:

```text
isLoading = true
       ↓
Skeleton


isLoading = false
       ↓
Content
```

---

## Step 7 — AnimatePresence

We could switch instantly between the two.

Instead:

```jsx
<AnimatePresence mode="wait">
```

lets Framer Motion animate the transition.

The skeleton has:

```jsx
key="skeleton"
```

The content has:

```jsx
key="content"
```

The keys help identify the two different UI elements.

`mode="wait"` tells Framer Motion to wait for the exiting element before entering the next one.

---

## What belongs to what?

### React

- `useState`
    
- `useEffect`
    
- conditional rendering
    
- re-render
    
- cleanup
    

### JavaScript

- `setTimeout`
    
- `clearTimeout`
    
- functions
    

### Framer Motion

- `AnimatePresence`
    
- `initial`
    
- `animate`
    
- `exit`
    
- `mode="wait"`
    

### Tailwind

- layout
    
- spacing
    
- sizing
    
- background
    
- typography
    

---

## The code

```jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SkeletonLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-80">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-xl bg-neutral-800 p-5"
          >
            <div className="h-4 w-32 rounded bg-neutral-700" />
            <div className="mt-3 h-3 w-full rounded bg-neutral-700" />
            <div className="mt-2 h-3 w-4/5 rounded bg-neutral-700" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl bg-neutral-800 p-5"
          >
            <h3 className="text-sm font-medium text-white">
              Weekly Notes
            </h3>

            <p className="mt-2 text-sm text-neutral-400">
              Ideas and reminders from this week.
            </p>

            <button className="mt-4 text-sm text-white">
              Read more →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## Things to understand

### Is `useEffect` responsible for rendering the content?

No.

React state controls what gets rendered.

`useEffect` only starts the timer.

```text
useEffect
   ↓
timer
   ↓
setIsLoading(false)
   ↓
state changes
   ↓
React renders content
```

---

### Why not just use `setTimeout` directly in the component?

Because rendering should stay predictable.

Putting side effects directly into the component body can cause them to run repeatedly whenever React renders.

`useEffect` gives us a place to manage the side effect.

---

### Why do we need cleanup?

Because effects can create things that continue running:

```text
timer
subscription
event listener
request
```

When the component no longer needs them, they should be cleaned up.

---

## Try changing it

1. Change the loading time.
    
2. Add a skeleton avatar.
    
3. Add a button that manually finishes loading.
    
4. Add an error state.
    
5. Add a retry state.
    
6. Replace the fake timer with a real `fetch()`.
    
7. Remove `AnimatePresence` & see what changes.
    

The last exercise is important:

> understand what React does without Framer Motion.

---

## What this component teaches

The bigger pattern is:

```text
initial state
     ↓
side effect
     ↓
state changes
     ↓
React re-renders
     ↓
different UI
```

This pattern becomes extremely important when working with real data.

A real API request follows almost the same structure:

```text
loading
   ↓
request
   ↓
success / error
   ↓
render result
```

---

## Next concepts

- [useEffect](https://react.dev/reference/react/useEffect)
    
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
    
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
    
- [JavaScript `setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
    
- [JavaScript `clearTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout)
    
- [React state](https://react.dev/learn/state-a-components-memory)