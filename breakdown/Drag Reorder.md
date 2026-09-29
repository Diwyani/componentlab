## The idea

A list you can drag up and down to change the order. The state here isn't open/closed any more:

> **The state is actual data, and the drag changes that data.**

You never tell the list "move C above A". The drag produces a new array, and React draws whatever the array says.

```text
items = [A, B, C, D]  →  drag C to the top  →  onReorder([C, A, B, D])  →  setItems  →  re-render
```

## How it works

### 01 The list lives in state

The order of the items is the state.

- It starts from a plain array of strings.
- Whatever order this array is in is the order on screen.

```jsx
const initialItems = ["Write daily component", "Review pull requests", "Ship the release", "Reply to feedback"];

const [items, setItems] = useState(initialItems);
```

### 02 Reorder.Group watches the drag

Framer Motion's `Reorder.Group` handles all the dragging maths for us.

- `axis="y"`: items move up and down only.
- `values={items}`: the current order.
- `onReorder={setItems}`: when the order changes, hand the new array straight to our state setter.

```jsx
<Reorder.Group axis="y" values={items} onReorder={setItems}>
```

### 03 Each item knows its value

`.map()` turns every string into a draggable `Reorder.Item`.

- `value={item}` tells the group which piece of data this row is.
- `key={item}` lets React keep track of each row as it moves.

```jsx
{items.map((item) => (
  <Reorder.Item key={item} value={item}>
    {item}
  </Reorder.Item>
))}
```

### 04 Feedback while dragging

`whileDrag` styles the item only while it's being held.

- It grows slightly and gets a shadow, so it feels lifted off the list.
- `cursor-grab` / `active:cursor-grabbing` show a hand that grips on press.

```jsx
<Reorder.Item
  whileDrag={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
  className="cursor-grab active:cursor-grabbing"
/>
```

## What belongs to what

- **React**: array state, `.map()`, `key`, passing a setter as a callback
- **JavaScript**: arrays, strings
- **Tailwind**: `flex-col`, `gap-2`, `cursor-grab`, `active:cursor-grabbing`
- **Framer Motion**: `Reorder.Group`, `Reorder.Item`, `axis`, `values`, `value`, `whileDrag`

## Things to understand

### Why can we pass `setItems` directly to `onReorder`?

`onReorder` calls whatever function you give it with the new array. `setItems` is a function that takes a new array. They fit together exactly.

### What does "the UI is a representation of state" mean here?

The screen always shows the current array, nothing more. Change the array (by dragging or by code) and the list follows.

## Try changing it

1. Add 5 more items.
2. Turn the tasks into favourite movies.
3. Add a delete button to each row.
4. Store objects instead of strings, like `{ id: 1, title: "Write daily component", completed: false }`, and render `item.title`. Real apps rarely store plain strings.
5. Add a checkbox and style completed tasks differently.

## Read next

- [Updating arrays in state](https://react.dev/learn/updating-arrays-in-state)
- [Rendering lists](https://react.dev/learn/rendering-lists)
- [Framer Motion Reorder](https://motion.dev/docs/react-reorder)
- [Sharing state between components](https://react.dev/learn/sharing-state-between-components)
