A small switch that changes between two states: on & off.
understand one of the most basic React patterns:

> **state changes → UI changes**


Understanding this can be divided into 3 parts 
1. Logic ( state changed)
2. Colour ( Tailwind)
3. Motion ( Farmer)

---

## What are we building?

A switch with two visual states.

```text
OFF

┌──────────────┐
│ ●            │
└──────────────┘
```

After clicking:

```text
ON

┌──────────────┐
│            ● │
└──────────────┘
```

==The circle moves because the state has changed.==

---

## The mental model

We only need to remember one thing:

```text
isOn
```

It can be:

```text
false
```

or:

```text
true
```

So the component works like this:

```text
isOn = false
    ↓
show OFF state
    ↓
user clicks
    ↓
setIsOn(!isOn)
    ↓
isOn = true
    ↓
React re-renders
    ↓
show ON state
```

When we click again:

```text
true
 ↓
false
```

---

## Step 1 — create the state

```jsx
const [isOn, setIsOn] = useState(false);
```

This is [React state](https://react.dev/learn/state-a-components-memory).

There are two parts:

```text
isOn
```

The current value.

And:

```text
setIsOn
```

The function that changes it.

We start with:

```text
isOn = false
```

So the switch starts off. // and look like this add image here// 

---

## Step 2 — respond to a click

```jsx
onClick={() => setIsOn(!isOn)}
```

When the user clicks, we change the state.

The `!` means **not**.

So:

```text
!false → true
!true → false
```

Therefore:

```text
false
  ↓
!false
  ↓
true
```

and:

```text
true
  ↓
!true
  ↓
false
```

This is a [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean). A boolean can only either be true or false

```text
true
false
```

---

## Step 3 — React re-renders

After:

```jsx
setIsOn(!isOn)
```

React runs the component again with the new state.

This is called a [re-render](https://react.dev/learn/render-and-commit).

The flow is:

```text
click
 ↓
setIsOn()
 ↓
state changes
 ↓
React re-renders
 ↓
new state is used
 ↓
UI changes
```

This is one of the most important React patterns to understand.

---

## Step 4 change the styling based on state

We can use a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator):

```jsx
isOn ? "bg-green-500" : "bg-gray-300"
```

Read this as:

> if `isOn` is true, use the first value. Otherwise use the second.

So:

```text
isOn = true
    ↓
bg-green-500
```

and:

```text
isOn = false
    ↓
bg-gray-300
```

The same idea is used for the circle position:

```jsx
isOn ? "justify-end" : "justify-start"
```

So:

```text
OFF
justify-start
     ↓
●────────


ON
justify-end
     ↓
────────●
```

---

## Step 5 — where Framer Motion comes in

React has already done its job.

React decides:

```text
OFF layout
   ↓
ON layout
```

But without animation, that change would happen immediately.

Framer Motion makes the change feel physical.

```jsx
<motion.div
  layout
  transition={{
    type: "spring",
    stiffness: 700,
    damping: 30
  }}
/>
```

The important part here is:

```jsx
layout
```

It tells Framer Motion to animate layout changes.

So:

```text
React

"the circle should now be on the right."

        ↓

Framer Motion

"I'll animate it from the old position to the new position."
```

---

## What belongs to what?

### React 
(useState,  state, setIsOn, onClick,  re-render) 


### JavaScript

- booleans, !, ternary `? : , arrow functions

### Tailwind

- `bg-*`
    
- `justify-start`
    
- `justify-end`
    
- sizing
    
- spacing
    
- rounded corners
    

### Framer Motion

- `motion.div`
    
- `layout`
    
- `transition`
    
- spring animation
    

---

## The code

```jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`flex h-9 w-16 cursor-pointer rounded-full p-1 ${
        isOn
          ? "justify-end bg-green-500"
          : "justify-start bg-gray-300"
      }`}
    >
      <motion.div
        className="h-7 w-7 rounded-full bg-white shadow-md"
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
    </div>
  );
}
```

---

## Things to understand

### Does `setIsOn()` move the circle?

No.

It changes the state.

```text
setIsOn()
   ↓
state changes
   ↓
React re-renders
   ↓
Tailwind classes change
   ↓
layout changes
   ↓
Framer Motion animates it
```

### Why don't we store the position separately?

We don't need:

```text
circlePosition = "right"
```

The position is already determined by:

```text
isOn
```

So we have one source of truth.

---

## Try changing it

Don't just copy the component.

Try:

1. Change the switch from green/grey to another visual treatment.
    
2. Add an `OFF` & `ON` label.
    
3. Make the switch bigger.
    
4. Change the spring stiffness.
    
5. Change the damping.
    
6. Remove `layout` & see what happens.
    
7. Remove Framer Motion completely & see what React still does.
    
8. Add a disabled state.
    

The goal is to understand **which part of the component is responsible for what**.

---

## What this component teaches

The bigger pattern is:

```text
user interaction
      ↓
event
      ↓
state update
      ↓
React re-render
      ↓
UI reflects state
```

This pattern appears everywhere in interactive interfaces.

---

## Next concepts

After understanding this component, useful concepts to learn are:

- [React state](https://react.dev/learn/state-a-components-memory)
    
- [Event handlers](https://react.dev/learn/responding-to-events)
    
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
    
- [JavaScript booleans](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
    
- [Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)