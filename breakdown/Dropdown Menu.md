## The idea

A button that opens a list of options. It closes when you pick one or click anywhere outside, and the items slide in one after another.

> **State answers what should exist. Data answers what gets rendered. Events change the state.**

```text
isOpen = false  →  click Options  →  setIsOpen(true)  →  re-render  →  menu and items appear
```

## How it works

### 01 Open state

One boolean decides whether the menu exists.

- The button flips it with a functional update: `prev => !prev`.
- Clicking again closes it.

```jsx
const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen((prev) => !prev)}>Options</button>
```

### 02 The items come from data

The menu options live in an array, and `.map()` turns them into buttons.

- Add `"Help"` to the array and a fifth item appears.
- Picking any item closes the menu.

```jsx
const items = ["Profile", "Settings", "Billing", "Sign out"];

{items.map((item) => (
  <motion.li key={item}>
    <button onClick={() => setIsOpen(false)}>{item}</button>
  </motion.li>
))}
```

### 03 Click outside to close

An invisible layer covers the page behind the open menu.

- `fixed inset-0` stretches it over the whole screen, `z-10` keeps it under the menu (`z-20`).
- Clicking anywhere that isn't the menu hits this layer and closes it.

```jsx
<div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
```

### 04 Position under the button

The wrapper is `relative` and the menu is `absolute`, so the menu is placed relative to the button.

- `top-full` puts it just below the button, `left-0` lines up the left edges.

```jsx
<div className="relative inline-block">
  <motion.ul className="absolute left-0 top-full mt-2" />
</div>
```

### 05 Variants: named animation states

Instead of writing `initial` / `animate` values inline, we name them in a **variants** object.

- `hidden`, `visible` and `exit` are just labels we chose.
- The menu uses those names, which keeps the JSX clean.

```jsx
const menuVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { staggerChildren: 0.05 } },
  exit: { opacity: 0, scale: 0.95, y: -8 },
};

<motion.ul variants={menuVariants} initial="hidden" animate="visible" exit="exit" />
```

### 06 Children follow one by one

The items use their own variants with the **same names**, so they follow the parent automatically.

- When the menu switches to `visible`, each item does too.
- `staggerChildren: 0.05` starts each item 50ms after the one before, giving the cascade.

```jsx
const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
};

<motion.li variants={itemVariants} />
```

## What belongs to what

- **React**: `useState`, functional updates, `.map()`, `key`, conditional rendering
- **JavaScript**: arrays, objects, arrow functions
- **Tailwind**: `relative` + `absolute`, `top-full`, `fixed inset-0`, `z-10` / `z-20`
- **Framer Motion**: `AnimatePresence`, variants, parent/child animation, `staggerChildren`

## Things to understand

### Why does the invisible layer work for "click outside"?

It sits over everything except the menu. So any click that isn't on the menu lands on the layer, and the layer's only job is to close it.

### Why don't the items need `initial` and `animate`?

Children with variants inherit the current variant name from their parent. The parent says `visible`, and each child looks up its own `visible`.

## Try changing it

1. Add an icon beside each item.
2. Open the menu to the right instead.
3. Show which item is selected.
4. Pass `items` into the component as a prop.
5. Make "Sign out" behave differently.
6. Remove `staggerChildren` and compare.

## Read next

- [Passing props to a component](https://react.dev/learn/passing-props-to-a-component)
- [Responding to events](https://react.dev/learn/responding-to-events)
- [Framer Motion variants](https://motion.dev/docs/react-animation#variants)
- [Sharing state between components](https://react.dev/learn/sharing-state-between-components)
