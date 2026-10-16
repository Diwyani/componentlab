## The idea

A stack of cards you swipe left or right to dismiss, revealing the next one underneath, like a Tinder-style deck. The important part:

> **The array order is the UI.** Whichever card is first in the array is the top card. No extra "which card is on top" state.

```text
stack = [1, 2, 3, 4]  →  swipe card 1 away  →  filter it out  →  stack = [2, 3, 4]  →  card 2 is now on top
```

## How it works

### 01 The deck is an array

`stack` holds the cards that haven't been dismissed yet.

- Dismissing a card removes it from the array.
- `exitDirection` remembers which way the last card was thrown: `1` right, `-1` left.

```jsx
const [stack, setStack] = useState(cards);
const [exitDirection, setExitDirection] = useState(1);
```

### 02 Only draw the top 3

There's no need to render the whole deck.

- `.slice(0, 3)` takes the first three cards.
- `.slice().reverse()` copies then flips them, so the top card renders last and sits on top.
- Each card is its own `SwipeCard` component, because each one needs its own motion values (step 04).

```jsx
const visible = stack.slice(0, 3);

visible.slice().reverse().map((card, i) => (
  <SwipeCard key={card.id} card={card} position={visible.length - 1 - i} onDragEnd={handleDragEnd} />
))
```

### 03 Position is derived, not stored

Each card works out its place in the pile from where it sits in the array.

- `position` 0 is the top card, 1 the one behind, 2 the one behind that.
- Cards further back shrink by 5% and shift down 10px, so it reads as a pile.
- Only the top card can be dragged: `drag={isTop}`.

```jsx
const isTop = position === 0;

animate={{ scale: 1 - position * 0.05, y: position * 10 }}
drag={isTop}
```

### 04 The card follows your mouse

The top card sticks to the cursor in every direction, then springs home if you let go too early.

- `drag` (not `drag="x"`) means it can move up, down, left and right.
- `dragConstraints` of 0 on every side is "home". `dragElastic={1}` lets it move the full distance your mouse does, so it tracks 1:1 instead of lagging behind.
- On release, it springs back to home unless it was thrown away (step 06).

```jsx
drag={isTop}
dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
dragElastic={1}
```

### 05 Tilt and fade follow the drag

A **motion value** is a number Framer Motion updates every frame without re-rendering React. `useTransform` turns one motion value into another.

- `x` is how far the card has moved sideways.
- `rotate` maps that onto a tilt: 200px right becomes 18°, 200px left becomes -18°.
- `opacity` fades the card as it nears the edge, a hint that letting go will throw it away.

```jsx
const x = useMotionValue(0);
const rotate = useTransform(x, [-200, 200], [-18, 18]);
const opacity = useTransform(x, [-260, -120, 0, 120, 260], [0.4, 1, 1, 1, 0.4]);

style={{ x, rotate, opacity }}
```

### 06 Throw it far or fast enough

When you let go, we check how far and how fast you dragged sideways.

- More than 100px **or** a quick flick: dismiss. Otherwise it springs back.
- `Math.abs` ignores direction, so left and right both count.
- The direction is saved **before** the card is removed.

```jsx
function handleDragEnd(id, info) {
  const passedThreshold = Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500;
  if (!passedThreshold) return;

  setExitDirection(info.offset.x > 0 ? 1 : -1);
  setStack((prev) => prev.filter((card) => card.id !== id));
}
```

### 07 Fly out the way it was thrown

A removed card can't receive new props any more, so the direction is handed to it through `AnimatePresence`.

- `custom={exitDirection}` on `AnimatePresence` passes the latest direction to cards that are leaving.
- The exit is a function variant, so it can use that direction: flying right and tilting right, or the opposite.

```jsx
const exitVariants = {
  exit: (direction) => ({ x: direction * 400, opacity: 0, rotate: direction * 25 }),
};

<AnimatePresence custom={exitDirection}>
  <motion.div variants={exitVariants} exit="exit" />
</AnimatePresence>
```

### 08 Empty state and reset

When no cards are left, a message and a Reset button appear.

- Reset puts the original `cards` array back into state.

```jsx
{visible.length === 0 ? (
  <button onClick={() => setStack(cards)}>Reset</button>
) : ( ... )}
```

## What belongs to what

- **React**: array state, derived position, `key`, conditional rendering, one component per card
- **JavaScript**: `.slice()`, `.reverse()`, `.filter()`, `Math.abs()`
- **Tailwind**: `absolute inset-0`, `rounded-2xl`, colour classes per card, `cursor-grab`
- **Framer Motion**: `drag`, `dragConstraints`, `dragElastic`, `useMotionValue`, `useTransform`, `onDragEnd`, `AnimatePresence` with `custom`, exit variants

## Things to understand

### Why `.slice()` before `.reverse()`?

`.reverse()` changes the array it's called on. `.slice()` makes a copy first, so we never scramble the real `visible` list.

### Why does the direction go through `AnimatePresence`?

React removes the card in the same update that records the direction, so the leaving card never sees the new value as a prop. `AnimatePresence` is still alive, so its `custom` prop is the one thing that can reach a card on its way out.

### Why motion values instead of state for the tilt?

The tilt changes on every frame of a drag. State would re-render the component 60 times a second. A motion value updates the style directly and React never notices.

## Try changing it

1. Show 5 cards instead of 3. Do you need to change anything else?
2. Lower the threshold from `100` to `50`.
3. Tint the top card green or red while dragging, using another `useTransform` on `x`.
4. Make the tilt stronger by changing `[-18, 18]` to `[-30, 30]`.
5. Replace Reset with Undo, which brings back only the last dismissed card.

## Read next

- [Choosing the state structure](https://react.dev/learn/choosing-the-state-structure)
- [Array slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Framer Motion drag](https://motion.dev/docs/react-drag)
- [Motion values](https://motion.dev/docs/react-motion-value)
- [useTransform](https://motion.dev/docs/react-use-transform)
- [AnimatePresence](https://motion.dev/docs/react-animate-presence)
