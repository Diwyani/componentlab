## The idea

A list of questions where clicking one reveals its answer, and clicking it again hides it. The goal is to see how **one piece of state can control a whole collection of items**.

Instead of a boolean for every item, we remember one number: which item is open.

```text
openIndex = null  →  click item 1  →  setOpenIndex(1)  →  re-render  →  item 1 shows its answer
```

## How it works

### 01 The data

The questions live in an array of [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

- Each object has a `question` and an `answer`.
- Keeping content as data means the UI can be built from it.

```jsx
const faqs = [
  { question: "What is Framer Motion?", answer: "A React animation library..." },
  { question: "What is GSAP?", answer: "A JavaScript animation library..." },
];
```

### 02 Remember which one is open

One state value holds the position of the open item.

- `openIndex = 0` means the first item is open, `2` means the third.
- It starts as `null`, which means **nothing is open**.

```jsx
const [openIndex, setOpenIndex] = useState(null);
```

### 03 Build each item with .map()

[`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) gives us each item and its position.

- `faq` is the item, `index` is where it sits: `0`, `1`, `2`.
- One piece of UI is created for every FAQ.

```jsx
{faqs.map((faq, index) => (
  ...
))}
```

### 04 Each item asks "am I open?"

We calculate `isOpen` instead of storing it.

- `openIndex === index` is `true` for exactly one item, `false` for the rest.
- This is **derived data**: worked out from state, not kept as extra state.

```jsx
const isOpen = openIndex === index;
```

### 05 Clicking opens or closes

A [ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) decides what the click does.

- Already open? Set it to `null` to close it.
- Closed? Set it to this item's `index` to open it (and close any other).

```jsx
onClick={() => setOpenIndex(isOpen ? null : index)}
```

### 06 Show the answer only when open

`&&` renders the answer only when `isOpen` is true. This is [conditional rendering](https://react.dev/learn/conditional-rendering).

- `AnimatePresence` lets the answer animate out before React removes it.
- Height goes from `0` to `"auto"`, so the answer slides open.

```jsx
<AnimatePresence initial={false}>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
    >
      <p>{faq.answer}</p>
    </motion.div>
  )}
</AnimatePresence>
```

### 07 The plus becomes a cross

The icon reads the same `isOpen` value, so it needs no state of its own.

- Closed: `0°`, a plus. Open: `45°`, which looks like an `×`.

```jsx
<motion.span animate={{ rotate: isOpen ? 45 : 0 }}>+</motion.span>
```

## What belongs to what

- **React**: `useState`, `.map()` rendering, conditional rendering, re-render
- **JavaScript**: arrays, objects, `index`, `===`, ternary, `null`
- **Tailwind**: spacing, rounded corners, layout, typography, `overflow-hidden`
- **Framer Motion**: `motion`, `AnimatePresence`, `initial`, `animate`, `exit`

## Things to understand

### Why `openIndex` instead of `isOpen`?

There are several items. A single `isOpen = true` wouldn't tell us **which** one is open. `openIndex = 2` does.

### Is `isOpen` state?

No. It's derived from `openIndex`. An important React rule: don't store information you can calculate from existing state.

### What does `index` mean?

When `.map()` walks the array, the first item gets `0`, the second `1`, the third `2`. It's each item's position.

## Try changing it

1. Let several items stay open at once. Is one `openIndex` still enough? (No, and working out why is the lesson: choosing the right **shape** of state.)
2. Swap `+` for an arrow and rotate it.
3. Change the animation timing.
4. Move the FAQ data into its own file.
5. Make it a reusable component that receives `faqs` as a prop.

## Read next

- [Rendering lists](https://react.dev/learn/rendering-lists)
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
- [JavaScript objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
