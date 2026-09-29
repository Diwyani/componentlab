## The idea

A button that copies text to your clipboard, turns into a tick for a moment, then turns back. It's the shortest component in the series, but the first to talk to an **asynchronous** browser API: one that answers later, and might say no.

```text
click  →  await clipboard.writeText()  →  succeeded?  →  setCopied(true)  →  tick  →  1.5s later  →  copy icon again
```

## How it works

### 01 One boolean for feedback

`copied` only decides which icon to show.

- `false`: the copy icon. `true`: a green tick.

```jsx
const [copied, setCopied] = useState(false);
```

### 02 Ask the browser to copy

`navigator.clipboard.writeText()` is a browser API, not a React one.

- It returns a **Promise**: a value that arrives later.
- `await` pauses this function until the browser answers.
- `await` only works inside a function marked `async`.

```jsx
async function handleCopy() {
  await navigator.clipboard.writeText(SNIPPET);
```

### 03 Only celebrate if it worked

The browser can refuse (no permission, insecure page). `try` / `catch` handles that.

- If the copy succeeds, the next lines run and the tick appears.
- If it fails, we jump to `catch` and quietly do nothing, instead of crashing.

```jsx
try {
  await navigator.clipboard.writeText(SNIPPET);
  setCopied(true);
  setTimeout(() => setCopied(false), 1500);
} catch {}
```

### 04 Swap the icon

A ternary picks which lucide icon to render.

- `aria-label` names the button, since it only contains an icon.

```jsx
<button onClick={handleCopy} aria-label="Copy to clipboard">
  {copied ? <Check className="text-green-500" /> : <Copy />}
</button>
```

## What belongs to what

- **React**: `useState`, event handlers, conditional rendering
- **JavaScript**: Promises, `async` / `await`, `try` / `catch`, `setTimeout`, constants
- **Browser APIs**: `navigator.clipboard.writeText()`
- **Tailwind**: `truncate`, `flex-none`, hover colours
- **lucide-react**: the `Copy` and `Check` icons

## Things to understand

### What's the difference between a React API and a browser API?

`useState` comes from React. `navigator.clipboard` comes from the browser itself and works the same with or without React.

### Why can't we just call it without `await`?

Then `setCopied(true)` would run before the browser answered, showing a tick even if the copy failed.

### Why fail silently?

For a tiny copy button, a crash is worse than nothing happening. A real app might show an error message instead.

## Try changing it

1. Make `SNIPPET` a prop so the button can copy anything.
2. Change the delay from `1500` to `3000`.
3. Show an error state when `catch` runs.
4. Animate the icon swap like the Like Button's `motion.span`.

## Read next

- [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Clipboard writeText()](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)
- [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
