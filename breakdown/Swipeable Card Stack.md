A stack of cards that can be swiped left or right to dismiss, revealing the next card underneath — like a Tinder-style deck.

## What are we building?

A card stack with:

- a queue of cards, only the top 3 ever rendered
- drag-to-dismiss on the top card only
- cards underneath scaled down and offset, so the stack reads as a stack
- the dismissed card exits in whichever direction it was thrown
- an empty state with a reset button once the deck is cleared

The important part: **the array order *is* the UI**. There's no separate "which card is on top" flag — whichever card is first in the array is the top card, full stop.

---

## Mental model

```text
              stack = [card1, card2, card3, card4]
                            │
                            ▼
              visible = stack.slice(0, 3)
                            │
                            ▼
          reverse, then map with index → position
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
         position 2    position 1    position 0
        (bottom card)  (middle card)  (top card, draggable)
```

Dismissing the top card:

```text
user drags top card
        │
        ▼
   onDragEnd fires
        │
        ▼
far enough OR fast enough?
        │
   ┌────┴────┐
   no         yes
   │           │
   ▼           ▼
snap back   remember exit direction
            for this card's id
                │
                ▼
        remove it from `stack`
                │
                ▼
        React re-renders
                │
                ▼
     AnimatePresence animates
     the removed card flying out
                │
                ▼
     the next card is now
     first in the array →
     it becomes the top card
```

---

## The code

```jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { id: 1, title: "Mountain Hike", color: "bg-emerald-500" },
  { id: 2, title: "Coffee Break", color: "bg-amber-500" },
  { id: 3, title: "City Lights", color: "bg-indigo-500" },
  { id: 4, title: "Ocean Breeze", color: "bg-sky-500" },
];

export default function SwipeableCardStack() {
  const [stack, setStack] = useState(cards);
  const [exitDirections, setExitDirections] = useState({});

  function handleDragEnd(id, info) {
    const passedThreshold = Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500;
    if (!passedThreshold) return;

    setExitDirections((prev) => ({ ...prev, [id]: info.offset.x > 0 ? 1 : -1 }));
    setStack((prev) => prev.filter((card) => card.id !== id));
  }

  const visible = stack.slice(0, 3);

  return (
    <div className="relative h-72 w-64">
      <AnimatePresence>
        {visible.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-neutral-300 text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400"
          >
            <p>All caught up</p>
            <button onClick={() => setStack(cards)}>Reset</button>
          </motion.div>
        ) : (
          visible
            .slice()
            .reverse()
            .map((card, i) => {
              const position = visible.length - 1 - i; // 0 = top of the stack
              const isTop = position === 0;
              const direction = exitDirections[card.id] ?? 1;

              return (
                <motion.div
                  key={card.id}
                  className={`absolute inset-0 flex items-end rounded-2xl p-5 text-white shadow-lg ${card.color}`}
                  style={{ zIndex: 10 - position }}
                  initial={false}
                  animate={{ scale: 1 - position * 0.05, y: position * 10 }}
                  exit={{ x: direction * 300, opacity: 0, rotate: direction * 15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.9}
                  whileDrag={{ rotate: 8, cursor: "grabbing" }}
                  onDragEnd={(_, info) => handleDragEnd(card.id, info)}
                >
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </motion.div>
              );
            })
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## 1. The array order *is* the stack order

```jsx
const [stack, setStack] = useState(cards);
```

There's no `topCardId` or `currentIndex` variable anywhere. The component never asks "which card is on top?" — it just looks at `stack[0]`.

Dismissing a card means removing it from the array:

```jsx
setStack((prev) => prev.filter((card) => card.id !== id));
```

Whatever was second becomes first automatically. This is simpler than tracking an index, and it can never go out of sync with what's actually rendered.

---

## 2. Only rendering 3 cards at a time

```jsx
const visible = stack.slice(0, 3);
```

Even if the deck starts with 40 cards, only 3 DOM nodes ever exist. You don't need to render cards the user can't see or interact with yet — you only need enough underneath to sell the illusion of a deck.

---

## 3. Reverse, then map with index

```jsx
visible
  .slice()
  .reverse()
  .map((card, i) => {
    const position = visible.length - 1 - i;
    ...
  })
```

This looks backwards on purpose. `visible[0]` is the top card, but in the DOM it needs to be painted **last** so it stacks visually above the others (later siblings paint on top of earlier ones). Reversing the array before mapping puts the bottom card first in the JSX and the top card last.

`.slice()` before `.reverse()` matters: `.reverse()` mutates the array it's called on. Without `.slice()` first, it would silently reverse `visible` itself — and since `visible` was built from `stack` with `.slice(0, 3)` (a copy), this particular case is *safe*, but it's a habit worth having: never mutate an array you didn't explicitly make a throwaway copy of.

`position` converts the reversed index back into "distance from the top" — `0` is always the top card, `1` is the one behind it, and so on, regardless of how the array happened to be ordered going in.

---

## 4. Faking depth with scale and offset

```jsx
animate={{ scale: 1 - position * 0.05, y: position * 10 }}
```

The top card (`position: 0`) renders at full scale with no offset. Each card behind it shrinks by 5% and shifts down by 10px per position. There's no 3D or perspective involved — it's plain 2D scale and translate, but paired with `zIndex: 10 - position` (so closer-to-top cards paint over farther ones), it reads as a physical stack.

---

## 5. Only the top card is draggable

```jsx
drag={isTop ? "x" : false}
```

`drag` isn't just `true`/`false` — passing `"x"` constrains dragging to the horizontal axis only. Passing `false` disables it entirely. Only `position === 0` gets `drag="x"`; every card behind it is locked in place until it becomes the top card itself.

---

## 6. The dismiss threshold

```jsx
const passedThreshold = Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500;
```

Same pattern as the Drawer Modal and Bottom Sheet: a swipe counts as *either* dragged far enough *or* thrown fast enough. `Math.abs` matters here because a swipe can be dismissed in either direction — left or right, both should count.

If the threshold isn't met, `handleDragEnd` returns early and does nothing — Framer Motion's `animate` prop (still `{ scale, y }` for `position: 0`) snaps the card back into place automatically, since no `x` value was ever set to move it away.

---

## 7. Remembering which way a card left

```jsx
const [exitDirections, setExitDirections] = useState({});
...
setExitDirections((prev) => ({ ...prev, [id]: info.offset.x > 0 ? 1 : -1 }));
```

Here's a subtlety: by the time a card's `exit` animation runs, it has *already been removed from `stack`*. Its own drag `info` is gone. So before removing it, the direction it was swiped (`1` for right, `-1` for left) is stashed in a separate object, keyed by the card's `id`.

```jsx
exit={{ x: direction * 300, opacity: 0, rotate: direction * 15 }}
```

reads that stored direction to decide whether the card should fly off to the right or the left as it exits — matching the direction the user actually swiped, instead of always exiting the same way.

---

## 8. `AnimatePresence` for the exit

Same role as in the Drawer Modal: without it, a card removed from `stack` would just vanish the instant React re-renders. `AnimatePresence` holds it in the DOM long enough to run its `exit` animation first.

The empty state (`key="empty"`) is inside the *same* `AnimatePresence`, so it fades in smoothly right as the last card finishes exiting, instead of popping in abruptly.

---

## What belongs to what?

| Concept | Technology |
|---|---|
| `stack`, `exitDirections` | React |
| `.slice()`, `.reverse()`, `.map()`, `.filter()` | JavaScript |
| `drag`, `dragConstraints`, `whileDrag` | Framer Motion |
| `onDragEnd`, `info.offset`, `info.velocity` | Framer Motion |
| `AnimatePresence`, `exit` | Framer Motion |
| `absolute inset-0`, `zIndex` via `style` | Tailwind / CSS |

---

## Things to understand

- why array order can replace a separate "index" state
- `.slice()` vs `.reverse()` and why order of operations matters
- rendering only a slice of a larger dataset
- conditional `drag` prop (`"x"` vs `false`)
- offset-or-velocity dismiss thresholds
- storing per-item metadata (`exitDirections`) keyed by id
- `AnimatePresence` holding an element through its exit

---

## Try changing it

1. Increase `visible` from 3 cards to 5 — do you need to change anything else?
2. Make the dismiss threshold easier by lowering `100` to `50`.
3. Add a fourth exit direction based on vertical swipes too.
4. Show a colored border on the top card while dragging, based on direction.
5. Instead of `Reset`, add an "Undo" that puts the last dismissed card back on top.

---

## What this component teaches

This component is a good example of **deriving UI state instead of storing it**. There's no `currentCardIndex`, no `isTopCard` flag stored per card — `position` is computed fresh every render from `stack`'s order and each card's index. When state can be computed instead of stored, storing it anyway is usually a bug waiting to happen (the two can drift out of sync). Compute it instead.

---

## Next concepts

After this, you should understand:

- keyed metadata objects (`{ [id]: value }`) as a lightweight alternative to a `Map`
- derived vs stored state
- multi-directional gesture thresholds
- `AnimatePresence` with dynamic lists (not just a single boolean)
