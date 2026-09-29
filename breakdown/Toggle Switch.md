## The idea

A small switch that flips between two states: on and off. It teaches one of the most basic React patterns:

> **state changes → UI changes**

The circle doesn't move because you told it to move. It moves because the state changed, and the UI follows the state.

```text
isOn = false  →  click  →  setIsOn(!isOn)  →  isOn = true  →  React re-renders  →  ON look
```

## How it works

### 01 Create the state

One value remembers whether the switch is on or off.

- `useState(false)` gives us two things: the current value `isOn`, and `setIsOn`, the function that changes it.
- It starts as `false`, so the switch starts off.
- This is [React state](https://react.dev/learn/state-a-components-memory): the component's memory between renders.

```jsx
const [isOn, setIsOn] = useState(false);
```

### 02 Respond to a click

Clicking flips the value to its opposite.

- `onClick` runs every time the switch is clicked.
- `!` means **not**, so `!false` is `true` and `!true` is `false`.
- `isOn` is a [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean): it can only ever be `true` or `false`.

```jsx
<div onClick={() => setIsOn(!isOn)}>
```

### 03 React re-renders

Changing state makes React run the component again.

- `setIsOn` doesn't move anything. It only changes the value.
- React then runs the whole component again with the new value. This is a [re-render](https://react.dev/learn/render-and-commit).
- Everything that reads `isOn` now gets the new answer.

```text
click → setIsOn() → state changes → re-render → UI changes
```

### 04 Style from state

The colour and the circle's side are both picked from `isOn`.

- A [ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) reads as: if `isOn` is true use the first value, otherwise the second.
- On: green track, circle pushed right with `justify-end`.
- Off: grey track, circle on the left with `justify-start`.

```jsx
className={`flex w-16 h-9 p-1 rounded-full ${
  isOn ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"
}`}
```

### 05 Framer Motion animates the jump

React already decided where the circle goes. Framer Motion makes the trip feel physical.

- Without animation the circle would teleport from left to right.
- `layout` tells Framer Motion to animate any change in position.
- The spring settings (`stiffness`, `damping`) decide how snappy and bouncy it feels.

```jsx
<motion.div
  layout
  transition={{ type: "spring", stiffness: 700, damping: 30 }}
/>
```

## What belongs to what

- **React**: `useState`, `isOn`, `setIsOn`, `onClick`, re-render
- **JavaScript**: booleans, `!`, the ternary `? :`, arrow functions
- **Tailwind**: `bg-*`, `justify-start`, `justify-end`, sizing, spacing, rounded corners
- **Framer Motion**: `motion.div`, `layout`, `transition`, spring animation

## Things to understand

### Does `setIsOn()` move the circle?

No. It only changes the state. Everything after that is a chain reaction:

```text
setIsOn() → state changes → re-render
→ Tailwind classes change → layout changes → Framer Motion animates it
```

### Why don't we store the position separately?

We don't need `circlePosition = "right"`. The position already comes from `isOn`, so there is one source of truth. Two values that must always agree will eventually disagree.

## Try changing it

Don't just copy the component. Try:

1. Change green/grey to another colour treatment.
2. Add `OFF` and `ON` labels.
3. Make the switch bigger.
4. Change the spring `stiffness`, then the `damping`.
5. Remove `layout` and see what happens.
6. Remove Framer Motion completely and see what React still does on its own.
7. Add a disabled state.

The goal is to understand **which part of the component is responsible for what**.

## Read next

- [React state](https://react.dev/learn/state-a-components-memory)
- [Event handlers](https://react.dev/learn/responding-to-events)
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
- [JavaScript booleans](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
