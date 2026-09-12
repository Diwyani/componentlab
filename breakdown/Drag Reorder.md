# Drag Reorder List

A list where the user can drag items up & down to change their order. This component is important because the state is no longer just controlling whether something is open or closed.

**The state represents actual data that changes.**

---

## What are we building?

A list where:

- items can be dragged vertically
- dragging changes their order
- the new order becomes React state
- the UI re-renders using the new order
- Framer Motion handles the dragging interaction


---

## Mental model

```text
             DRAG REORDER LIST
                     │
                     ▼
          items = [A, B, C, D]
                     │
                     ▼
              React renders
                     │
                user drags C
                     │
                     ▼
          Framer Motion detects
              new position
                     │
                     ▼
             onReorder(newItems)
                     │
                     ▼
              setItems(newItems)
                     │
                     ▼
              React re-renders
                     │
                     ▼
          items = [C, A, B, D]
                     │
                     ▼
              new order shown
```

The important idea:

> **The drag interaction changes the data.**

---

## The code

```jsx
import { useState } from "react";
import { Reorder } from "framer-motion";

const initialItems = [
  "Write daily component",
  "Review pull requests",
  "Ship the release",
  "Reply to feedback",
];

export default function DragReorderList() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      className="flex w-72 flex-col gap-2"
    >
      {items.map((item) => (
        <Reorder.Item
          key={item}
          value={item}
          whileDrag={{
            scale: 1.03,
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          }}
          className="cursor-grab rounded-lg bg-neutral-800 px-4 py-3 text-sm text-neutral-200 active:cursor-grabbing"
        >
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
```

---

## 1. The initial data

```jsx
const initialItems = [
  "Write daily component",
  "Review pull requests",
  "Ship the release",
  "Reply to feedback",
];
```

This is just JavaScript.

It's an array.

At the beginning:

```text
[A, B, C, D]
```

The order matters.

---

## 2. Store the order in state

```jsx
const [items, setItems] = useState(initialItems);
```

Now React owns the current order.

Initially:

```text
items
↓
[A, B, C, D]
```

After dragging:

```text
items
↓
[C, A, B, D]
```

This is different from something like:

```jsx
const [isOpen, setIsOpen] = useState(false);
```

There, state represented a UI condition.

Here, state represents **actual application data**.

---

## 3. `Reorder.Group`

```jsx
<Reorder.Group
  axis="y"
  values={items}
  onReorder={setItems}
>
```

This is Framer Motion's reorder container.

It needs to know:

### Which direction?

```jsx
axis="y"
```

Vertical.

### What is the current order?

```jsx
values={items}
```

We give it the current array.

### What should happen when the order changes?

```jsx
onReorder={setItems}
```

This is the most important line.

It means:

> When the user creates a new order, put that new order into React state.

---

## 4. Why is `onReorder={setItems}` so powerful?

Usually you see:

```jsx
onClick={() => setSomething(...)}
```

Here we're passing the state setter directly:

```jsx
onReorder={setItems}
```

Framer Motion calls it with the new array.

Conceptually:

```text
Framer Motion
      ↓
new order detected
      ↓
setItems(newOrder)
      ↓
React state changes
      ↓
React re-renders
```

So Framer Motion doesn't permanently "own" the order.

React does.

---

## 5. `.map()` renders the items

```jsx
items.map((item) => (
  <Reorder.Item>
    {item}
  </Reorder.Item>
))
```

If:

```jsx
items = ["A", "B", "C"]
```

then React renders:

```text
A
B
C
```

If the state changes to:

```jsx
items = ["C", "A", "B"]
```

the same `.map()` now renders:

```text
C
A
B
```

This is why the UI follows the state.

---

## 6. `Reorder.Item`

Each item is wrapped in:

```jsx
<Reorder.Item>
```

This tells Framer Motion:

> This is one reorderable item inside the group.

We give it:

```jsx
value={item}
```

The value identifies what this item represents.

And:

```jsx
key={item}
```

gives React the item's identity.

---

## 7. `key` vs `value`

These look similar but have different jobs.

```jsx
key={item}
```

is for **React**.

It helps React identify list elements.

```jsx
value={item}
```

is for **Framer Motion's reorder system**.

It tells the reorder system what value belongs to that item.

Think:

```text
key
↓
React identity

value
↓
reorder identity
```

---

## 8. `whileDrag`

```jsx
whileDrag={{
  scale: 1.03,
  boxShadow: "...",
}}
```

This is purely visual feedback.

While the user is dragging:

```text
normal
 ↓
slightly larger
 ↓
shadow appears
```

This doesn't change the actual data.

It just makes the interaction feel better.

---

## 9. What happens when you drag?

Imagine:

```text
A
B
C
D
```

You drag C above A.

Framer Motion detects:

```text
C
A
B
D
```

Then:

```text
onReorder(newItems)
        ↓
setItems(newItems)
        ↓
React state changes
        ↓
React re-renders
        ↓
items.map(...)
        ↓
C
A
B
D
```

That is the complete loop.

---

## React vs Framer Motion

This distinction is important.

### React

Owns:

```text
current order
state
rendering
data
```

### Framer Motion

Owns:

```text
drag interaction
position
movement
reordering mechanics
drag animation
```

### JavaScript

Owns:

```text
array
.map()
data manipulation
```

### Tailwind

Owns:

```text
layout
spacing
colors
cursor
visual styling
```

---

## The full architecture

```text
              initialItems
                   │
                   ▼
             React state
               items
                   │
                   ▼
             Reorder.Group
                   │
                   ▼
                .map()
                   │
                   ▼
             Reorder.Item
                   │
              user drags
                   │
                   ▼
           Framer Motion
                   │
                   ▼
             new order
                   │
                   ▼
             setItems()
                   │
                   ▼
             React state
                   │
                   └──────────→ re-render
```

---

## Things to understand

Make sure these concepts are clear:

- array state
- `.map()`
- `key`
- state representing data
- passing a state setter as a callback
- controlled data flow
- Framer Motion `Reorder.Group`
- `Reorder.Item`
- `axis`
- `value`
- `whileDrag`

---

## Try changing it

1. Add 5 more items.
2. Change the list from tasks to favourite movies.
3. Add an ID to each item.
4. Add a delete button.
5. Add a checkbox for completed tasks.
6. Make completed tasks look different.
7. Try storing objects instead of strings:


```jsx
const initialItems = [
  {
    id: 1,
    title: "Write daily component",
    completed: false,
  },
];
```

Then render:

```jsx
{item.title}
```

This is a particularly useful exercise because real applications rarely contain only strings.

---

## What this component teaches

This is where you should start seeing an important React pattern:

```text
STATE
  ↓
UI
  ↓
USER INTERACTION
  ↓
STATE CHANGES
  ↓
UI UPDATES
```

React is essentially maintaining this relationship:

> **The UI is a representation of the current state.**

You don't manually tell the list:

> "Move C above A."

Instead, the interaction produces new data:

```text
[A, B, C, D]
        ↓
[C, A, B, D]
```

React then renders whatever the current data says.

---

## Next concepts

This naturally leads into:

- props
- callbacks
- lifting state up
- immutable updates
- objects inside arrays
- controlled components
- derived state
- reusable list components