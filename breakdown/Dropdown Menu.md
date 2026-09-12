A button that opens a list of actions or options.

This component is useful because it combines **state + data + conditional rendering + animation + positioning**.

---

## What are we building?

A dropdown that:

- opens when the button is clicked
- renders menu items from an array
- closes when an item is selected
- closes when you click outside
- animates when entering & exiting
- animates its children one by one


---

## Mental model

```text
                 DROPDOWN
                    │
                    ▼
             isOpen = false
                    │
              user clicks
               "Options"
                    │
                    ▼
             setIsOpen(true)
                    │
                    ▼
             React re-renders
                    │
                    ▼
              isOpen = true
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
      render menu        render backdrop
          │                   │
        .map()            click outside
          │                   │
          ▼                   ▼
 Profile / Settings      setIsOpen(false)
 Billing / Sign out
          │
     click item
          │
          ▼
   setIsOpen(false)
```

The key idea:

> **State answers what should exist. Data answers what should be rendered. Events change the state.**

---

## The code

```jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  "Profile",
  "Settings",
  "Billing",
  "Sign out",
];

const menuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -8,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.15,
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },

  exit: {
    opacity: 0,
    scale: 0.95,
    y: -8,
    transition: {
      duration: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -8,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
      >
        Options
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />

            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute left-0 top-full z-20 mt-2 w-44 rounded-lg bg-neutral-800 p-1 shadow-xl"
            >
              {items.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                >
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded-md px-3 py-2 text-left text-sm text-neutral-200 hover:bg-neutral-700"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## 1. The state

```jsx
const [isOpen, setIsOpen] = useState(false);
```

Again, this is a boolean.

```text
false → closed
true  → open
```

When the button is clicked:

```jsx
setIsOpen((prev) => !prev)
```

This means:

> Take the previous value & flip it.

So:

```text
false → true
true → false
```

---

## 2. Why `(prev) => !prev`?

You could write:

```jsx
setIsOpen(!isOpen)
```

You will often see that.

But:

```jsx
setIsOpen((prev) => !prev)
```

explicitly says:

> Calculate the new state from the previous state.

This pattern is especially useful when the new state depends on the old state.

---

## 3. The menu data

```jsx
const items = [
  "Profile",
  "Settings",
  "Billing",
  "Sign out",
];
```

This is just JavaScript.

React doesn't know what an array is specifically for.

We are simply storing our menu data in an array.

Then:

```jsx
items.map(...)
```

turns that data into UI.

---

## 4. `.map()`

This:

```jsx
items.map((item) => (
  <button>{item}</button>
))
```

means:

> For every item in the array, create this piece of UI.

If:

```jsx
items = ["Profile", "Settings", "Billing"]
```

then `.map()` produces:

```text
Profile
Settings
Billing
```

This is one of the most important JavaScript concepts for React.

---

## 5. Why `key={item}`?

```jsx
<motion.li key={item}>
```

React needs a stable identity for each item in a list.

Here:

```text
Profile
Settings
Billing
Sign out
```

are unique, so the item itself works as the key.

The key helps React understand which item is which when the list changes.

---

## 6. Conditional rendering

This:

```jsx
{isOpen && (
  <Menu />
)}
```

means:

```text
isOpen = false
↓
don't render menu

isOpen = true
↓
render menu
```

Again:

```text
condition && thing
```

is a very common React pattern.

---

## 7. Click outside

We create an invisible element:

```jsx
<div
  className="fixed inset-0 z-10"
  onClick={() => setIsOpen(false)}
/>
```

It covers the screen.

So when the user clicks anywhere outside the dropdown:

```text
click
 ↓
setIsOpen(false)
 ↓
React removes menu
```

This is commonly called **click-away behavior**.

---

## 8. Why `relative` + `absolute`?

The wrapper:

```jsx
<div className="relative">
```

creates the positioning context.

The menu:

```jsx
className="absolute left-0 top-full"
```

is positioned relative to that wrapper.

Think:

```text
button
  ↓
parent = relative
  ↓
menu = absolute
  ↓
position menu relative to parent
```

`top-full` means:

> Put the top of the menu at the bottom of the parent.

That's why it appears underneath the button.

---

## 9. Variants

Instead of writing every animation directly:

```jsx
initial={{ ... }}
animate={{ ... }}
exit={{ ... }}
```

we define named states:

```jsx
const menuVariants = {
  hidden: {...},
  visible: {...},
  exit: {...},
};
```

Think of variants as **animation presets**.

```text
hidden
↓
what should closed look like?

visible
↓
what should open look like?

exit
↓
what should disappearing look like?
```

Then:

```jsx
variants={menuVariants}
initial="hidden"
animate="visible"
exit="exit"
```

connects those names to the animation.

---

## 10. Child animations

The menu itself has:

```jsx
staggerChildren: 0.05
```

That means:

> Don't animate all children at exactly the same time.

So:

```text
Profile
   ↓
Settings
   ↓
Billing
   ↓
Sign out
```

appear slightly after one another.

Each child uses:

```jsx
variants={itemVariants}
```

The parent controls **when** the children appear.

The child controls **how it appears**.

---

## 11. Parent → children relationship

This is a useful Framer Motion concept:

```text
menuVariants
      │
      ├── controls menu
      │
      └── controls timing of children
                    │
                    ├── Profile
                    ├── Settings
                    ├── Billing
                    └── Sign out
```

The React structure and animation structure are working together.

---

## What belongs to what?

|Concept|Technology|
|---|---|
|`isOpen`|React|
|`useState`|React|
|`items`|JavaScript|
|`.map()`|JavaScript|
|`key`|React|
|`&&`|JavaScript|
|`relative` / `absolute`|CSS / Tailwind|
|`variants`|Framer Motion|
|`staggerChildren`|Framer Motion|
|`AnimatePresence`|Framer Motion|

---

## Things to understand

Make sure these concepts are becoming familiar:

- boolean state
    
- functional state updates
    
- `.map()`
    
- `key`
    
- conditional rendering
    
- click-away behavior
    
- `relative` + `absolute`
    
- Framer Motion variants
    
- parent/child animation
    
- `staggerChildren`
    

---

## Try changing it

1. Add an icon beside every item.
    
2. Change the menu to open toward the right.
    
3. Add a selected state.
    
4. Pass the items into the component as props.
    
5. Make clicking "Sign out" behave differently from the other items.
    
6. Change the animation direction.
    
7. Remove `staggerChildren` & compare the result.
    

---

## What this component teaches

This is your first strong example of **data-driven UI**.

Instead of manually writing:

```jsx
<button>Profile</button>
<button>Settings</button>
<button>Billing</button>
<button>Sign out</button>
```

you write:

```jsx
items.map(...)
```

Now the UI comes from data.

That's a fundamental React pattern:

```text
data
 ↓
map
 ↓
UI
```

---

## Next concepts

That leads directly into props, callbacks, controlled components, & reusable component APIs:

- [Passing props to a component](https://react.dev/learn/passing-props-to-a-component)
- [Responding to events](https://react.dev/learn/responding-to-events)
- [Framer Motion variants](https://motion.dev/docs/react-animation#variants)
- [Sharing state between components](https://react.dev/learn/sharing-state-between-components)
