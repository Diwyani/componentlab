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
- `exitDirections` remembers which way each card was thrown, looked up by its id.

```jsx
const [stack, setStack] = useState(cards);
const [exitDirections, setExitDirections] = useState({});
```

### 02 Only draw the top 3

There's no need to render the whole deck.

- `.slice(0, 3)` takes the first three cards.
- `.slice().reverse()` copies then flips them, so the top card renders last and sits on top.

```jsx
const visible = stack.slice(0, 3);

visible.slice().reverse().map((card, i) => ...)
```

### 03 Position is derived, not stored

Each card works out its place in the stack from where it sits in the array.

- `position` 0 is the top card, 1 the one behind, 2 the one behind that.
- Cards further back shrink by 5% and shift down 10px, so it reads as a pile.
- Only the top card is draggable: `drag={isTop ? "x" : false}`.

```jsx
const position = visible.length - 1 - i;
const isTop = position === 0;

animate={{ scale: 1 - position * 0.05, y: position * 10 }}
drag={isTop ? "x" : false}
```

### 04 Throw it far or fast enough

When you let go, we check how far and how fast you dragged.

- More than 100px **or** a quick flick: dismiss. Otherwise it springs back.
- `Math.abs` ignores direction, so left and right both count.
- The direction is saved (`1` right, `-1` left) under the card's id.

```jsx
function handleDragEnd(id, info) {
  const passedThreshold = Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500;
  if (!passedThreshold) return;

  setExitDirections((prev) => ({ ...prev, [id]: info.offset.x > 0 ? 1 : -1 }));
  setStack((prev) => prev.filter((card) => card.id !== id));
}
```

### 05 Fly out the way it was thrown

The exit animation reads the saved direction.

- Thrown right: slides `+300px` and tilts right. Thrown left: the opposite.
- `AnimatePresence` keeps the card on screen long enough to play this.

```jsx
const direction = exitDirections[card.id] ?? 1;

exit={{ x: direction * 300, opacity: 0, rotate: direction * 15 }}
```

### 06 Empty state and reset

When no cards are left, a message and a Reset button appear.

- Reset puts the original `cards` array back into state.

```jsx
{visible.length === 0 ? (
  <button onClick={() => setStack(cards)}>Reset</button>
) : ( ... )}
```

## What belongs to what

- **React**: array state, derived position, `key`, conditional rendering
- **JavaScript**: `.slice()`, `.reverse()`, `.filter()`, `Math.abs()`, `??`, objects keyed by id
- **Tailwind**: `absolute inset-0`, `rounded-2xl`, colour classes per card
- **Framer Motion**: `drag`, `dragConstraints`, `dragElastic`, `whileDrag`, `onDragEnd`, `AnimatePresence`, `exit`

## Things to understand

### Why `.slice()` before `.reverse()`?

`.reverse()` changes the array it's called on. `.slice()` makes a copy first, so we never scramble the real `visible` list.

### Why store exit direction per id?

By the time the card animates out, it's already gone from `stack`. The direction needs to live somewhere the exit animation can still read it.

## Try changing it

1. Show 5 cards instead of 3. Do you need to change anything else?
2. Lower the threshold from `100` to `50`.
3. Tint the top card green or red while dragging, based on direction.
4. Replace Reset with Undo, which brings back only the last dismissed card.

## Read next

- [Choosing the state structure](https://react.dev/learn/choosing-the-state-structure)
- [Array slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Framer Motion drag](https://motion.dev/docs/react-drag)
- [AnimatePresence](https://motion.dev/docs/react-animate-presence)
