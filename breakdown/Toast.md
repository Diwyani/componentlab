A toast is a small temporary notification that appears after an action.

For example:

```text
┌─────────────────────────────┐
│ ✓ Changes saved             │
└─────────────────────────────┘
```

The goal isn't just to make a notification. This component introduces an important new idea:

> **state can be an array of objects.**

---

## What are we building?

Clicking a button creates a toast.

```text
click
 ↓
┌─────────────────────────────┐
│ Changes saved successfully  │
└─────────────────────────────┘
```

After three seconds, it disappears.

Multiple toasts can exist at the same time.

```text
┌─────────────────────────────┐
│ Changes saved               │
└─────────────────────────────┘
┌─────────────────────────────┐
│ Profile updated             │
└─────────────────────────────┘
┌─────────────────────────────┐
│ Settings saved              │
└─────────────────────────────┘
```

---

## The mental model

Our state is not a boolean.

It is an array:

```jsx
const [toasts, setToasts] = useState([]);
```

Initially:

```text
toasts = []
```

No notifications exist.

After clicking:

```text
toasts = [
  {
    id: 123,
    message: "Changes saved successfully"
  }
]
```

Click again:

```text
toasts = [
  {
    id: 123,
    message: "Changes saved successfully"
  },
  {
    id: 124,
    message: "Changes saved successfully"
  }
]
```

So the state represents the **current collection of toasts**.

---

## The complete flow

```text
user clicks
     ↓
create a toast object
     ↓
add object to toasts array
     ↓
React re-renders
     ↓
.map() creates a UI element
     ↓
toast appears
     ↓
3 seconds pass
     ↓
remove that toast from array
     ↓
React re-renders
     ↓
AnimatePresence plays exit animation
```

---

## Step 1 — array state

```jsx
const [toasts, setToasts] = useState([]);
```

The initial value is an empty array.

This means:

> currently, there are no toasts.

This is different from our previous components.

```text
Toggle
state → boolean


Tabs
state → string


Accordion
state → number/null


Toast
state → array
```

---

## Step 2 — create a toast

```jsx
function addToast() {
  const id = Date.now();

  setToasts((prev) => [
    ...prev,
    {
      id,
      message: "Changes saved successfully",
    },
  ]);
}
```

First:

```jsx
const id = Date.now();
```

We create an identifier.

We need this because each toast needs to be distinguishable from the others.

---

## Step 3 — the spread operator

This part is important:

```jsx
[
  ...prev,
  newToast
]
```

The `...` is the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

If:

```text
prev = [A, B]
```

then:

```jsx
[...prev, C]
```

creates:

```text
[A, B, C]
```

We are creating a **new array** rather than changing the existing one directly.

This is an important React pattern.

---

## Step 4 — why `prev`?

```jsx
setToasts((prev) => ...)
```

`prev` is the previous value of `toasts`.

We're using it because the new array depends on the previous array.

```text
previous toasts
      ↓
add another toast
      ↓
new toasts
```

---

## Step 5 — render the toasts

```jsx
{toasts.map((toast) => (
  <motion.div key={toast.id}>
    {toast.message}
  </motion.div>
))}
```

Again, `.map()` converts data into UI.

```text
toasts array
    ↓
.map()
    ↓
toast UI
toast UI
toast UI
```

Each object becomes one visual notification.

---

## Step 6 — why the key?

```jsx
key={toast.id}
```

React needs to distinguish between the toast items.

Imagine:

```text
Toast A → id 123
Toast B → id 124
Toast C → id 125
```

The IDs give React stable identities.

This becomes particularly important when we remove one item.

---

## Step 7 — remove a toast

When we create a toast, we also start a timer:

```jsx
setTimeout(() => {
  setToasts((prev) =>
    prev.filter((toast) => toast.id !== id)
  );
}, 3000);
```

After three seconds we remove the toast.

The important part is:

```jsx
filter((toast) => toast.id !== id)
```

[`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) creates a new array containing only the items that pass the condition.

So if:

```text
toasts = [A, B, C]
```

and we want to remove B:

```text
toast.id !== B.id
```

gives:

```text
[A, C]
```

---

## Step 8 — React notices the array changed

Before:

```text
[A, B, C]
```

After:

```text
[A, C]
```

React re-renders.

`.map()` now only renders:

```text
A
C
```

B is no longer rendered.

---

## Step 9 — AnimatePresence

Because the toast is disappearing:

```jsx
<AnimatePresence>
```

allows Framer Motion to play its exit animation.

So:

```text
toast removed from state
       ↓
React stops rendering it
       ↓
AnimatePresence
       ↓
exit animation
       ↓
toast disappears
```

---

## What belongs to what?

### React

- `useState`
    
- array state
    
- event handlers
    
- re-render
    
- `key`
    

### JavaScript

- arrays
    
- objects
    
- spread syntax
    
- `.map()`
    
- `.filter()`
    
- `Date.now()`
    
- `setTimeout`
    

### Framer Motion

- `motion`
    
- `AnimatePresence`
    
- `layout`
    
- `initial`
    
- `animate`
    
- `exit`
    

### Tailwind

- positioning
    
- spacing
    
- sizing
    
- colours
    
- typography
    

---

## The code

```jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ToastDemo() {
  const [toasts, setToasts] = useState([]);

  function addToast() {
    const id = Date.now();

    setToasts((prev) => [
      ...prev,
      {
        id,
        message: "Changes saved successfully",
      },
    ]);

    setTimeout(() => {
      setToasts((prev) =>
        prev.filter((toast) => toast.id !== id)
      );
    }, 3000);
  }

  return (
    <div>
      <button
        onClick={addToast}
        className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
      >
        Save changes
      </button>

      <div className="fixed bottom-6 right-6 z-50 flex w-80 flex-col gap-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="rounded-lg bg-neutral-800 px-4 py-3 text-sm text-white shadow-xl"
            >
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
```

---

## Things to understand

### Why is the state an array?

Because multiple toasts can exist.

```text
one toast

[toast]


three toasts

[toast, toast, toast]
```

The array represents the current collection.

---

### Why not just use `isToastVisible`?

That would only tell us:

```text
yes/no
```

It wouldn't tell us:

```text
how many?
which ones?
what message?
which one should disappear?
```

The array gives us all that information.

---

### Why don't we use `push()`?

You might be tempted to do:

```jsx
prev.push(newToast)
```

But React state should generally be treated as immutable.

Instead, create a new array:

```jsx
[...prev, newToast]
```

This gives React a new value to work with.

---

### Why do we use `filter()` to remove the toast?

Because we don't want to mutate the existing array.

We create a new array containing everything **except** the toast we want to remove.

---

## Try changing it

1. Add different messages.
    
2. Add a `type` property:
    

```jsx
{
  id,
  type: "success",
  message: "Saved!"
}
```

3. Add error & warning toasts.
    
4. Add a close button.
    
5. Give each toast a different duration.
    
6. Add a progress bar showing the remaining time.
    
7. Make the newest toast appear at the top.
    
8. Add a maximum of 3 visible toasts.
    

The important exercise is adding a `type`.

You will then have to think about:

```text
toast.type
     ↓
what should this particular toast look like?
```

That's another example of **data driving UI**.

---

## What this component teaches

The bigger pattern is:

```text
data stored in state
       ↓
.map()
       ↓
UI
```

And when the data changes:

```text
array changes
     ↓
React re-renders
     ↓
UI reflects the new array
```

This pattern is everywhere in real applications:

```text
notifications
messages
shopping cart items
comments
tasks
search results
table rows
```

---

## Next concepts

- [Rendering lists](https://react.dev/learn/rendering-lists)
    
- [React state](https://react.dev/learn/state-a-components-memory)
    
- [Updating arrays in state](https://react.dev/learn/updating-arrays-in-state)
    
- [JavaScript `map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    
- [JavaScript `filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    
- [JavaScript spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
    
- [JavaScript `Date.now()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
    
- [React keys](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)