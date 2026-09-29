## The idea

A small card that grows into a larger detail view when clicked, and shrinks back when closed. It's about **UI states** and how React switches between them, with Framer Motion making the switch look like one card growing.

There are two versions: collapsed and expanded. One boolean picks which exists.

```text
isExpanded = false  →  click card  →  setIsExpanded(true)  →  re-render  →  small card gone, big card animates in
```

## How it works

### 01 One boolean, two layouts

`isExpanded` decides which version of the card is on screen.

- `false`: the small card. `true`: the expanded card.

```jsx
const [isExpanded, setIsExpanded] = useState(false);
```

### 02 The small card

`!isExpanded && (...)` renders the small card only when not expanded.

- `!` flips the value: `!false` is `true`, so the small card shows.
- Clicking it sets `isExpanded` to `true`.

```jsx
{!isExpanded && (
  <motion.button layoutId={card.id} onClick={() => setIsExpanded(true)}>
    <motion.h3 layoutId={`${card.id}-title`}>{card.title}</motion.h3>
    <p>{card.summary}</p>
  </motion.button>
)}
```

### 03 The expanded card

The opposite condition renders the big version with a dark backdrop.

- These are **two different elements**. React swaps one for the other.
- The backdrop and the X button both set `isExpanded` back to `false`.
- `aria-label="Close"` names the icon-only button for screen readers.

```jsx
{isExpanded && (
  <motion.div layoutId={card.id}>
    <button onClick={() => setIsExpanded(false)} aria-label="Close">
      <X />
    </button>
    <motion.h3 layoutId={`${card.id}-title`}>{card.title}</motion.h3>
  </motion.div>
)}
```

### 04 layoutId connects them

Both cards share `layoutId="notes-card"`, and both titles share `"notes-card-title"`.

- React decides **which** version exists. Framer Motion decides **how** to move between them.
- Matching ids tell Framer Motion "these are the same thing", so it animates the size and position change.
- The title has its own id, so it glides from its small spot to its big spot separately.

```jsx
<motion.button layoutId={card.id} />   // small
<motion.div layoutId={card.id} />      // expanded
```

### 05 The detail text just fades in

The long description only exists in the expanded card, so there's nothing to connect it to.

- No `layoutId`. It simply fades in, slightly after the card finishes growing.

```jsx
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.15 }}
>
  {card.detail}
</motion.p>
```

### 06 AnimatePresence handles closing

When `isExpanded` turns false, React wants to remove the big card immediately. `AnimatePresence` lets it animate out first.

```jsx
<AnimatePresence>
  {isExpanded && ( ... )}
</AnimatePresence>
```

## What belongs to what

- **React**: `useState`, conditional rendering, `&&`, `!`, re-render
- **JavaScript**: objects, template literals, booleans
- **Tailwind**: `fixed`, `inset-0`, `z-40` / `z-50`, `bg-yellow-400`
- **Framer Motion**: `layoutId`, `AnimatePresence`, `initial`, `animate`, `exit`, `transition`

## Things to understand

### Does `layoutId` decide which card appears?

No. `isExpanded` decides that. `layoutId` only makes the change look like one card growing.

### Why are there two card elements?

Because there are two UI states. We're not stretching one element, we're swapping two and animating between them.

### Why did the close text become an X icon?

Detail views conventionally close with a small corner icon. Since the button has no visible text, `aria-label` is what tells assistive technology what it does.

## Try changing it

1. Remove `layoutId` from both cards.
2. Keep it on the cards but remove it from the title.
3. Remove `AnimatePresence`.
4. Change how wide the expanded card is.
5. Add a second card that expands independently. This forces you to think about **state per item**.

## Read next

- [Conditional rendering](https://react.dev/learn/conditional-rendering)
- [Shared layout animations](https://motion.dev/docs/react-layout-animations)
- [AnimatePresence](https://motion.dev/docs/react-animate-presence)
- [ARIA labels](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
