## The idea

A small notification that pops up after an action and disappears after 3 seconds. Several can be on screen at once. The new idea:

> **state can be an array of objects.**

So far state has been a boolean (Toggle), a string (Tabs) and a number (Accordion). Here it's a whole collection.

```text
click  →  add a toast object to the array  →  re-render  →  .map() draws it  →  3s later filter it out  →  it animates away
```

## How it works

### 01 Start with an empty array

The state holds every toast currently on screen.

- `[]` means there are no toasts.
- After one click it holds one object, after three clicks, three.

```jsx
const [toasts, setToasts] = useState([]);
```

### 02 Create a toast with a unique id

Each toast is an object with an `id` and a `message`.

- `Date.now()` gives the current time in milliseconds, which works as a simple unique id.
- The id is how we'll find this exact toast again when it's time to remove it.

```jsx
function addToast() {
  const id = Date.now();
  setToasts((prev) => [...prev, { id, message: "Changes saved successfully" }]);
```

### 03 Add it without changing the old array

`[...prev, newToast]` builds a **new** array: everything from before, plus the new one.

- `...` is [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax): if `prev` is `[A, B]`, then `[...prev, C]` is `[A, B, C]`.
- `prev` is the latest value of the state, so quick clicks never lose a toast.
- We don't use `push()`: React state should be replaced, not edited in place.

```jsx
setToasts((prev) => [...prev, newToast]);
```

### 04 Draw every toast with .map()

Each object in the array becomes one notification on screen.

- `key={toast.id}` gives each toast a stable identity, which matters when one is removed from the middle.

```jsx
{toasts.map((toast) => (
  <motion.div key={toast.id}>{toast.message}</motion.div>
))}
```

### 05 Remove it after 3 seconds

A timer removes this toast by keeping every toast **except** this one.

- [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) returns a new array of the items that pass the test.
- `[A, B, C]` filtered with `toast.id !== B.id` becomes `[A, C]`.

```jsx
setTimeout(() => {
  setToasts((prev) => prev.filter((toast) => toast.id !== id));
}, 3000);
```

### 06 Animate in, out, and closing the gap

`AnimatePresence` lets a removed toast slide out before it disappears.

- `initial` / `animate`: new toasts rise up and fade in.
- `exit`: removed toasts slide off to the right.
- `layout`: the remaining toasts glide into the gap instead of jumping.

```jsx
<AnimatePresence>
  {toasts.map((toast) => (
    <motion.div
      key={toast.id}
      layout
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.9 }}
    />
  ))}
</AnimatePresence>
```

## What belongs to what

- **React**: `useState` with an array, event handlers, `key`, re-render
- **JavaScript**: arrays, objects, spread `...`, `.map()`, `.filter()`, `Date.now()`, `setTimeout`
- **Tailwind**: `fixed` positioning, spacing, colours, shadows
- **Framer Motion**: `AnimatePresence`, `layout`, `initial`, `animate`, `exit`

## Things to understand

### Why not a boolean like `isToastVisible`?

It only answers yes or no. It can't say how many toasts there are, what they say, or which one should leave next. The array holds all of that.

### Why not `prev.push(newToast)`?

`push` changes the existing array. React compares old and new values to decide whether to re-render, so always hand it a new array.

### Where else does this pattern show up?

Everywhere: messages, cart items, comments, tasks, search results. An array in state, `.map()` to draw it.

## Try changing it

1. Add different messages.
2. Add a `type` like `"success"` or `"error"` and style each type differently. This is **data driving UI**.
3. Add a close button on each toast.
4. Give each toast its own duration.
5. Show the newest toast on top.
6. Keep a maximum of 3 on screen.

## Read next

- [Updating arrays in state](https://react.dev/learn/updating-arrays-in-state)
- [Rendering lists](https://react.dev/learn/rendering-lists)
- [Array filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
