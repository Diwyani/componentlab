## The idea

A grey placeholder shows while content "loads", then fades into the real content. The new ideas: **effects**, timers, cleanup, and a UI that moves between states on its own.

```text
isLoading = true  →  show skeleton  →  timer runs 2s  →  setIsLoading(false)  →  re-render  →  show content
```

## How it works

### 01 The loading state

The component starts in a loading state.

- `true` shows the skeleton, `false` shows the content.
- Nothing is clicked here. Time changes the state.

```jsx
const [isLoading, setIsLoading] = useState(true);
```

### 02 Start a timer with useEffect

Starting a timer is a **side effect**: something the component does besides working out what to draw.

- Timers, network requests and browser APIs are all side effects.
- [`useEffect`](https://react.dev/reference/react/useEffect) is React's place for them.
- `setTimeout` is plain JavaScript: run this function after 2000ms (2 seconds).

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return () => clearTimeout(timer);
}, []);
```

### 03 The empty dependency array

The `[]` at the end decides when the effect runs.

- Empty means: run once when the component first appears, not after every render.
- Without it, every re-render would start another timer.

```jsx
}, []);
```

### 04 Clean up after yourself

The function returned from the effect is the **cleanup**.

- If the component disappears before the 2 seconds are up, `clearTimeout` cancels the timer.
- Rule of thumb: if you start something, stop it when you're done.

```jsx
return () => clearTimeout(timer);
```

### 05 Pick which UI to show

A [ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) chooses between the skeleton and the content.

- Loading: grey pulsing bars (`animate-pulse` from Tailwind).
- Done: the image, title and text.

```jsx
{isLoading ? <Skeleton /> : <Content />}
```

### 06 Cross-fade between them

`AnimatePresence` animates the swap instead of an instant jump.

- The two versions have different `key`s (`"skeleton"`, `"content"`), so Framer Motion knows they're different things.
- `mode="wait"` lets the skeleton fade out fully before the content fades in.

```jsx
<AnimatePresence mode="wait">
  {isLoading ? (
    <motion.div key="skeleton" exit={{ opacity: 0 }} />
  ) : (
    <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
  )}
</AnimatePresence>
```

## What belongs to what

- **React**: `useState`, `useEffect`, cleanup, conditional rendering, re-render
- **JavaScript**: `setTimeout`, `clearTimeout`, functions
- **Tailwind**: layout, sizing, `animate-pulse`, backgrounds
- **Framer Motion**: `AnimatePresence`, `initial`, `animate`, `exit`, `mode="wait"`

## Things to understand

### Does `useEffect` render the content?

No. It only starts the timer. The timer changes state, and the state change is what makes React render the content.

### Why not call `setTimeout` directly in the component?

The component body runs on every render. A timer there would start again and again. `useEffect` gives it one controlled place.

### Why does this matter for real apps?

A real API request has the same shape: loading, then a request, then success or error, then render the result.

## Try changing it

1. Change the loading time.
2. Add a round skeleton avatar.
3. Add a button that finishes loading early.
4. Add an error state and a retry button.
5. Replace the fake timer with a real `fetch()`.
6. Remove `AnimatePresence` and see what React does on its own.

## Read next

- [useEffect](https://react.dev/reference/react/useEffect)
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
- [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
