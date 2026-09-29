## The idea

A group of tabs where only one is active at a time. The goal isn't just to make tabs. It's to see that **state can hold a value**, not just on/off, and that one value can control many parts of the UI.

In the Toggle Switch, state was `true` or `false`. Here it's a word: `"Commit"`, `"Analytics"` or `"Upgrade"`.

```text
activeTab = "Commit"  →  click Analytics  →  setActiveTab("Analytics")  →  re-render  →  Analytics is active
```

## How it works

### 01 Store the tabs in an array

The tabs are a list of similar things, so they live in a [JavaScript array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

- Instead of writing three `<button>`s by hand, we keep the labels in one place.
- Add `"Settings"` to the array and a fourth tab appears on its own.

```jsx
const tabs = ["Commit", "Analytics", "Upgrade"];
```

### 02 Remember which tab is active

One piece of state holds the name of the selected tab.

- It starts on the first tab, `tabs[0]`, which is `"Commit"`.
- We don't need `commitIsActive`, `analyticsIsActive`... One value already tells us everything.

```jsx
const [activeTab, setActiveTab] = useState(tabs[0]);
```

### 03 Turn the array into buttons with .map()

[`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) goes through the array and makes one button per item.

- This is JavaScript doing the work. React just renders the result.
- `key={tab}` gives each button a name so React can tell them apart. This is a [React key](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key).

```jsx
{tabs.map((tab) => (
  <button key={tab} onClick={() => setActiveTab(tab)}>
    {tab}
  </button>
))}
```

### 04 Clicking sets the value

Each button passes its own label to `setActiveTab`.

- `tab` comes from `.map()`, so the Analytics button calls `setActiveTab("Analytics")`.
- The same line of code works for every tab.

```jsx
onClick={() => setActiveTab(tab)}
```

### 05 Each tab asks "am I active?"

Every tab compares itself to the state with `===`.

- `"Analytics" === "Commit"` is `false`, `"Analytics" === "Analytics"` is `true`.
- `&&` renders the pill only when the answer is true. This is [conditional rendering](https://react.dev/learn/conditional-rendering).
- A [ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) gives the active tab different text colour.

```jsx
{activeTab === tab && <motion.div layoutId="active-pill" />}

<span className={activeTab === tab ? "text-black" : "text-neutral-400"}>
```

### 06 Framer Motion slides the pill

Every active pill shares the same `layoutId`, so Framer Motion treats them as one thing that moved.

- React removes the pill from Commit and adds one to Analytics.
- Framer Motion sees the same `layoutId` and animates it sliding across instead of vanishing and reappearing.
- You'll see this shared-identity idea again in Card Expand and Image Gallery.

```jsx
<motion.div
  layoutId="active-pill"
  transition={{ type: "spring", stiffness: 500, damping: 35 }}
/>
```

## What belongs to what

- **React**: `useState`, event handlers, `.map()` rendering, conditional rendering, `key`
- **JavaScript**: arrays, `.map()`, `===`, arrow functions
- **Tailwind**: spacing, colours, `relative`, `absolute`, `z-10`
- **Framer Motion**: `motion.div`, `layoutId`, `transition`

## Things to understand

### Why only one piece of state?

`activeTab = "Analytics"` already tells every tab whether it is active. Three booleans would be extra state that could get out of sync.

### Does `layoutId` select the tab?

No. React state selects the tab with `setActiveTab(tab)`. `layoutId` only helps Framer Motion animate the indicator between tabs.

## Try changing it

1. Add a fourth tab.
2. Change the pill into an underline.
3. Make the tabs vertical.
4. Add an icon to each tab.
5. Change the spring to a tween.
6. Remove `layoutId` and see what changes.
7. Turn the strings into objects like `{ label: "Commit", icon: "..." }`. Now you're changing the **data structure**, not just the styling.

## Read next

- [Rendering lists](https://react.dev/learn/rendering-lists)
- [JavaScript map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
- [React keys](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
- [Strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
