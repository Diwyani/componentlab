A five-star rating input where hovering previews a rating and clicking locks it in, with a springy pop on each filled star.

## What are we building?

A star rating with:

- five stars, generated from a number rather than written out one by one
- a hover preview — moving your mouse over the 4th star shows 4 stars filled, without committing anything
- a click that locks in the actual rating
- the hover preview disappearing (reverting to the real rating) the moment your mouse leaves

The important part: **two pieces of state represent two different ideas that look identical on screen** — "what's committed" and "what's being previewed" — and a third, computed value decides which one to actually show.

---

## Mental model

```text
rating = 0        (committed — what the user has actually chosen)
hovered = null    (preview — what the mouse is currently over)

display = hovered ?? rating
                │
     ┌──────────┴──────────┐
     ▼                     ▼
hovered is not null   hovered is null
(mouse is over a star)  (mouse isn't hovering)
     │                     │
     ▼                     ▼
show the preview      show the real rating

user moves mouse over star #4
        │
        ▼
  setHovered(4)
        │
        ▼
  display = 4 → stars 1-4 fill

user clicks star #4
        │
        ▼
  setRating(4)   (display was already 4, nothing visually changes)

user moves mouse away from the whole row
        │
        ▼
  onMouseLeave → setHovered(null)
        │
        ▼
  display = rating again → shows the committed value
```

---

## The code

```jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const MAX = 5;

export default function RatingStars() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);

  const display = hovered ?? rating;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1" onMouseLeave={() => setHovered(null)}>
        {Array.from({ length: MAX }, (_, i) => i + 1).map((value) => {
          const filled = value <= display;
          return (
            <motion.button
              key={value}
              type="button"
              onMouseEnter={() => setHovered(value)}
              onClick={() => setRating(value)}
              whileTap={{ scale: 0.85 }}
              animate={{ scale: filled ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              aria-label={`Rate ${value} star${value === 1 ? "" : "s"}`}
            >
              <Star
                className={filled ? "h-6 w-6 text-yellow-400" : "h-6 w-6 text-neutral-300 dark:text-neutral-700"}
                fill={filled ? "currentColor" : "none"}
              />
            </motion.button>
          );
        })}
      </div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        {rating > 0 ? `You rated this ${rating} out of ${MAX}` : "Hover to preview, click to rate"}
      </p>
    </div>
  );
}
```

---

## 1. Two states for two different questions

```jsx
const [rating, setRating] = useState(0);
const [hovered, setHovered] = useState(null);
```

It might seem like one state variable should be enough — "the rating" — but `rating` and `hovered` answer genuinely different questions: *"what has the user decided?"* versus *"what is the user currently looking at?"* Merging them into one variable would mean hovering would permanently overwrite the actual chosen rating the instant your mouse passed over a star, with no way to preview without committing. Two states let the component tell those two ideas apart.

---

## 2. `??` — the nullish coalescing operator

```jsx
const display = hovered ?? rating;
```

`??` returns its left side *unless that left side is `null` or `undefined`*, in which case it falls back to the right side. Since `hovered` starts as `null` and only ever becomes a number while actively hovering, `display` reads as: "show what I'm hovering, or if I'm not hovering anything, fall back to the real rating."

This is different from `||`, which many people reach for instead:

```jsx
hovered || rating    // WRONG here
```

`||` falls back whenever the left side is *falsy* — and `0` is falsy in JavaScript. If `hovered` were ever legitimately `0`, `||` would incorrectly skip it and show `rating` instead. `??` only cares about `null`/`undefined`, so a hovered value of `0` (not used in this component, but worth knowing) would still be respected. This distinction — falsy vs. nullish — is a common source of subtle bugs once numeric state can be `0`.

---

## 3. Generating a list of numbers instead of writing them out

```jsx
Array.from({ length: MAX }, (_, i) => i + 1)
```

`Array.from` can build an array from something that *isn't* already an array — here, `{ length: 5 }` (an object with just a length, not real array data) plus a mapping function that runs once per slot. `i` is the index (`0` through `4`); adding `1` shifts it to `1` through `5` — five stars, without writing `[1, 2, 3, 4, 5]` by hand or needing a separate `.map()` afterward. This scales to any `MAX` by changing one number.

---

## 4. Hover to preview, click to commit

```jsx
onMouseEnter={() => setHovered(value)}
onClick={() => setRating(value)}
```

Each star button has two separate handlers doing two separate things. Hovering over star `3` sets `hovered` to `3` — a *preview*, nothing permanent. Only a click calls `setRating`, which is the actual commit. This separation — preview vs. commit — is a pattern that shows up anywhere a UI wants to let you "try before you buy": color pickers, drag-and-drop reordering previews, and here, a star rating.

---

## 5. Resetting the preview on mouse-leave

```jsx
<div className="flex gap-1" onMouseLeave={() => setHovered(null)}>
```

`onMouseLeave` is attached to the *row wrapping all five stars*, not to each individual star. If it were on each star instead, moving your mouse from star 3 to star 4 would trigger star 3's `onMouseLeave` between the two `onMouseEnter` calls, causing a flicker back to the real rating for a frame. Putting it on the parent means the preview only resets once the mouse leaves the *entire* row, not while moving between stars within it.

---

## 6. A spring pop per star, without extra state

```jsx
animate={{ scale: filled ? 1.1 : 1 }}
transition={{ type: "spring", stiffness: 500, damping: 20 }}
```

No new state was added to make stars "pop" — `filled` (already computed from `display`) is reused directly to drive the scale. Framer Motion's `animate` prop watches for that value changing and animates between `1` and `1.1` automatically; there was no need to manually track "which stars are currently animating."

---

## What belongs to what?

| Concept | Technology |
|---|---|
| `rating`, `hovered` | React |
| `??` (nullish coalescing), `Array.from` | JavaScript |
| `motion.button`, `animate`, `whileTap`, spring `transition` | Framer Motion |
| `Star` icon, `fill` prop | lucide-react |
| `onMouseEnter`, `onMouseLeave`, `onClick` | DOM events (via React) |

---

## Try changing it

1. Change `MAX` from `5` to `10` — nothing else should need to change.
2. Swap `??` for `||` and try hovering to see if you can spot a difference (hint: you won't, until `rating` can be `0` in a way that matters — think about why).
3. Add half-star support by tracking mouse X position within each star.
4. Make the color scale with the rating (red for 1-2, yellow for 3, green for 4-5).
5. Persist the chosen rating to `localStorage`, the way Quick Notes does elsewhere in this app.

---

## What this component teaches

The main idea worth keeping: **when "what's shown" and "what's committed" can differ, they need separate state** — and a small derived value (`display`) reconciles them for rendering. It also introduces `??` at the exact moment it matters (a value that could legitimately be `0`), which is a more durable lesson than memorizing "use `??` instead of `||`" in the abstract.

---

## Next concepts

After this, you should understand:

- preview vs. commit state (hover-to-preview patterns)
- `??` vs `||` and why the difference matters for numeric state
- `Array.from` for generating sequences
- event handler placement (parent vs. child) affecting behavior
