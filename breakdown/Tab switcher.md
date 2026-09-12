A group of tabs where one tab is active at a time.

The goal isn't just to make tabs. The goal is to understand how **React state can hold a value**, how [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) become UI using `.map()`, & how one piece of state can control multiple parts of the interface.

---

## What are we building?

```text
┌────────┬───────────┬────────┐
│ Commit │ Analytics │ Upgrade│
└────────┴───────────┴────────┘
   ↑
 active
```

When the user clicks Analytics:

```text
┌────────┬───────────┬────────┐
│ Commit │ Analytics │ Upgrade│
└────────┴───────────┴────────┘
            ↑
          active
```

Only one tab is selected at a time.

---

## The mental model

This time we don't need a boolean. We need to remember:

> **which tab is selected?**

So our state is:

```jsx
const [activeTab, setActiveTab] = useState("Commit");
```

The state contains a value:

```text
activeTab = "Commit"
```

After clicking Analytics:

```text
activeTab = "Analytics"
```

The flow is:

```text
activeTab = "Commit"
       ↓
render all tabs
       ↓
Commit is active
       ↓
user clicks Analytics
       ↓
setActiveTab("Analytics")
       ↓
activeTab = "Analytics"
       ↓
React re-renders
       ↓
Analytics is now active
```

---

## The important idea

In the Toggle Switch, our state was:

```text
true / false
```

Here our state is:

```text
"Commit"
"Analytics"
"Upgrade"
```

So state doesn't always mean on/off. It can represent a **value**.

---

## Step 1 — store the tab data

```jsx
const tabs = ["Commit", "Analytics", "Upgrade"];
```

This is a ==JavaScript array.==

Instead of manually writing:

```jsx
<button>Commit</button>
<button>Analytics</button>
<button>Upgrade</button>
```

we can create the buttons from the array.

---

## Step 2 — use `.map()`

```jsx
{tabs.map((tab) => (
  <button key={tab}>
    {tab}
  </button>
))}
```

[`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) goes through an array and creates something for every item.

So:

```text
["Commit", "Analytics", "Upgrade"]
             ↓
            map()
             ↓
┌────────┐ ┌───────────┐ ┌────────┐
│ Commit │ │ Analytics │ │ Upgrade│
└────────┘ └───────────┘ └────────┘
```

This is JavaScript doing the work. React is simply rendering the result.

---

## Step 3 — why `key`?

```jsx
key={tab}
```

React needs a way to identify each item in a list.

So:

```text
Commit → key "Commit"
Analytics → key "Analytics"
Upgrade → key "Upgrade"
```

This is a [React key](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key). For simple static values like these, the tab itself can be the key.

---

## Step 4 — clicking a tab changes state

```jsx
onClick={() => setActiveTab(tab)}
```

Notice that `tab` comes from `.map()`.

When we're rendering:

```text
Commit
```

the click becomes:

```jsx
setActiveTab("Commit")
```

For Analytics:

```jsx
setActiveTab("Analytics")
```

For Upgrade:

```jsx
setActiveTab("Upgrade")
```

So the same component logic works for every tab.

---

## Step 5 — determine which tab is active

We can ask:

```jsx
activeTab === tab
```

This is a comparison.

For example:

```text
activeTab = "Analytics"
tab = "Commit"

"Analytics" === "Commit"
        ↓
      false
```

But:

```text
activeTab = "Analytics"
tab = "Analytics"

"Analytics" === "Analytics"
        ↓
       true
```

So every tab can figure out whether **it** is active.

---

## Step 6 — conditional rendering

We can use:

```jsx
{activeTab === tab && (
  <motion.div />
)}
```

This uses `&&` for [conditional rendering](https://react.dev/learn/conditional-rendering).

Read it as:

> if this tab is active, render the active pill.

So:

```text
Commit
   ↓
is it active?
   ↓
yes → render pill
no  → don't render pill
```

---

## Step 7 — conditional styling

We can also change the text:

```jsx
activeTab === tab
  ? "text-black"
  : "text-neutral-400"
```

This is the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

So the active tab gets one style & the inactive tabs get another.

---

## Step 8 — Framer Motion

The active background uses:

```jsx
<motion.div
  layoutId="active-pill"
/>
```

Every active tab renders a pill with the same:

```text
layoutId = "active-pill"
```

When the active tab changes:

```text
Commit
   ↓
Analytics
```

React changes which pill exists.

Framer Motion sees the same `layoutId` move from one tab to another.

So instead of:

```text
pill disappears
pill appears
```

it visually becomes:

```text
pill
 ↓
moves
 ↓
new tab
```

This is the same **shared visual identity** idea you'll see later in Card Expand & Image Gallery.

---

## What belongs to what?

### React

- `useState`
    
- state
    
- event handlers
    
- `.map()` rendering
    
- conditional rendering
    
- `key`
    

### JavaScript

- arrays
    
- `.map()`
    
- `===`
    
- arrow functions
    

### Tailwind

- spacing
    
- colours
    
- positioning
    
- `relative`
    
- `absolute`
    
- `z-10`
    

### Framer Motion

- `motion.div`
    
- `layoutId`
    
- `transition`
    

---

## The code

```jsx
import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Commit", "Analytics", "Upgrade"];

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex w-fit gap-2 rounded-full bg-neutral-800 p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className="relative rounded-full px-4 py-2 text-sm font-medium"
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 rounded-full bg-white"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
              }}
            />
          )}

          <span
            className={`relative z-10 ${
              activeTab === tab
                ? "text-black"
                : "text-neutral-400"
            }`}
          >
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
}
```

---

## Things to understand

### Why use an array?

Because the tabs are a collection of similar things.

```text
tabs
 ↓
map()
 ↓
buttons
```

If we add:

```jsx
"Settings"
```

to the array, another tab automatically appears.

---

### Why only one piece of state?

We could theoretically have:

```text
commitIsActive
analyticsIsActive
upgradeIsActive
```

But that creates unnecessary state.

Instead:

```text
activeTab = "Analytics"
```

already tells us everything we need.

Every tab can derive:

```text
am I active?
```

from that value.

---

### Does `layoutId` select the tab?

No.

React state selects the tab:

```jsx
setActiveTab(tab)
```

`layoutId` only helps Framer Motion animate the active indicator between tabs.

---

## Try changing it

1. Add a fourth tab.
    
2. Change the active indicator from a pill to an underline.
    
3. Make the tabs vertical.
    
4. Add an icon to each tab.
    
5. Change the animation from spring to tween.
    
6. Remove `layoutId` & see what changes.
    
7. Replace the strings with objects:
    

```jsx
const tabs = [
  { label: "Commit", icon: "..." },
  { label: "Analytics", icon: "..." },
  { label: "Upgrade", icon: "..." },
];
```

This is a good exercise because you're now changing the **data structure**, not just the styling.

---

## What this component teaches

The bigger pattern is:

```text
data
 ↓
.map()
 ↓
UI
```

combined with:

```text
selected value
 ↓
compare with each item
 ↓
derive active state
 ↓
change UI
```

---

## Next concepts

- [Rendering lists](https://react.dev/learn/rendering-lists)
- [JavaScript `map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
- [React state](https://react.dev/learn/state-a-components-memory)
- [React keys](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
- [JavaScript strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)