A draggable bottom sheet that snaps to open, half, or closed positions based on drag distance and velocity.

## What are we building?

A sheet with:

- three resting positions instead of the Drawer Modal's simple open/closed
- a drag handle that can be released anywhere, and snaps to the *nearest* position
- velocity-aware snapping — a fast flick can jump two positions, not just the nearest one

The important part: this builds directly on the Drawer Modal's ideas (`drag="y"`, `onDragEnd`, spring transitions) but replaces a single boolean (`isOpen`) with **one of several named positions**, and replaces "did you drag far enough" with **"which position is now closest."**

---

## Mental model

```text
SNAPS = { open: 0, half: 170, closed: 310 }
ORDER = ["open", "half", "closed"]

                snap = "half"   (current resting position)
                       │
                 user drags sheet
                       │
                       ▼
                 onDragEnd fires
                       │
                       ▼
   projected = SNAPS[snap] + offset.y + velocity.y * 0.15
                       │
                       ▼
     for each key in ORDER, measure:
        distance = |SNAPS[key] - projected|
                       │
                       ▼
        keep whichever key has the
           smallest distance
                       │
                       ▼
              setSnap(closest)
                       │
                       ▼
       animate={{ y: SNAPS[snap] }}
       springs the sheet to that position
```

---

## The code

```jsx
import { useState } from "react";
import { motion } from "framer-motion";

const SNAPS = { open: 0, half: 170, closed: 310 };
const ORDER = ["open", "half", "closed"];

export default function DraggableBottomSheet() {
  const [snap, setSnap] = useState("half");

  function handleDragEnd(_, info) {
    const projected = SNAPS[snap] + info.offset.y + info.velocity.y * 0.15;

    let closest = ORDER[0];
    let closestDistance = Infinity;
    for (const key of ORDER) {
      const distance = Math.abs(SNAPS[key] - projected);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = key;
      }
    }
    setSnap(closest);
  }

  return (
    <div className="relative h-96 w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950">
      <p className="absolute inset-x-0 top-4 text-center text-xs text-neutral-400 dark:text-neutral-600">
        underlying content
      </p>

      <motion.div
        drag="y"
        dragConstraints={{ top: SNAPS.open, bottom: SNAPS.closed }}
        dragElastic={0.05}
        animate={{ y: SNAPS[snap] }}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
        onDragEnd={handleDragEnd}
        className="absolute inset-x-0 top-0 h-full rounded-t-2xl bg-white shadow-xl dark:bg-neutral-900"
      >
        <div className="flex justify-center pb-2 pt-3">
          <div className="h-1.5 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        </div>
        <div className="px-5 pb-5">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Sheet content</h3>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Drag the handle up or down — it snaps to open, half, or closed.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
```

---

## 1. Positions as named values, not booleans

```jsx
const SNAPS = { open: 0, half: 170, closed: 310 };
const [snap, setSnap] = useState("half");
```

`SNAPS` maps a human-readable name to a pixel value — how far down (`y`) the sheet sits at that position. State itself just stores which *name* is active (`"open"`, `"half"`, or `"closed"`), not the raw pixel number. This is the same "derive, don't duplicate" idea from other components: `SNAPS[snap]` always gives you the correct pixel value, computed from the name, so the name and its position can never drift apart.

`ORDER` exists separately from `SNAPS` because object key order isn't something you should rely on for iteration — an explicit array says exactly which positions exist and in what order to check them.

---

## 2. Predicting where the drag would land

```jsx
const projected = SNAPS[snap] + info.offset.y + info.velocity.y * 0.15;
```

This is the trickiest line in the file, so read it piece by piece:

```text
SNAPS[snap]        → where the sheet started this drag
+ info.offset.y     → how far it was actually dragged
+ info.velocity.y * 0.15  → a nudge in the direction it was moving
```

Without the velocity term, releasing the sheet mid-flick would only ever snap to the *nearest* position by distance — even if you clearly flicked it hard toward a farther one. Multiplying velocity by a small factor (`0.15`) and adding it to the projected landing spot lets a fast flick "overshoot" toward the next position, the way real bottom sheets (iOS, Android) behave.

---

## 3. Finding the closest snap point

```jsx
let closest = ORDER[0];
let closestDistance = Infinity;
for (const key of ORDER) {
  const distance = Math.abs(SNAPS[key] - projected);
  if (distance < closestDistance) {
    closestDistance = distance;
    closest = key;
  }
}
```

This is a manual "find the minimum" loop — a pattern you'll see constantly outside of React too. Start by assuming the first item is the answer (`closest = ORDER[0]`, `closestDistance = Infinity` so anything beats it), then check each candidate: if this one's distance is smaller than the best one found so far, it becomes the new best.

By the end of the loop, `closest` holds whichever named position (`"open"`, `"half"`, or `"closed"`) is nearest to `projected`.

---

## 4. Comparing this to the Drawer Modal

The Drawer Modal asked one yes/no question:

```jsx
if (info.offset.y > 100 || info.velocity.y > 500) onClose();
```

This component asks "which of N options is closest," which can't be a single `if`. The loop above is what a boolean threshold check turns into once there are more than two possible outcomes. Same underlying gesture data (`info.offset`, `info.velocity`) — a fundamentally different question being asked of it.

---

## 5. `dragElastic` vs `dragConstraints`

```jsx
dragConstraints={{ top: SNAPS.open, bottom: SNAPS.closed }}
dragElastic={0.05}
```

`dragConstraints` sets the hard boundaries — the sheet physically cannot be dragged above `SNAPS.open` or below `SNAPS.closed`. `dragElastic` (a value from `0` to `1`) controls how much it's allowed to *stretch past* those boundaries before snapping back, like a rubber band. `0.05` here means "almost no give" — the sheet feels close to rigid at its limits, unlike the Drawer Modal's backdrop-drag which allowed a softer `0.5` on one side.

---

## What belongs to what?

| Concept | Technology |
|---|---|
| `snap` | React |
| `Math.abs`, `for...of`, object lookups | JavaScript |
| `drag`, `dragConstraints`, `dragElastic` | Framer Motion |
| `onDragEnd`, `info.offset.y`, `info.velocity.y` | Framer Motion |
| `animate`, spring `transition` | Framer Motion |
| `absolute`, `rounded-t-2xl`, layout classes | Tailwind |

---

## Things to understand

- naming positions instead of storing raw pixel values
- combining drag offset *and* velocity to predict intent
- the "find the minimum" loop pattern
- the difference between a 2-state and an N-state drag interaction
- `dragConstraints` (hard limits) vs `dragElastic` (how much give at the limits)

---

## Try changing it

1. Add a fourth snap position, `"peek"`, between `open` and `half`.
2. Remove the `* 0.15` velocity term — notice how much harder it gets to flick between distant positions.
3. Make `dragElastic` larger (e.g. `0.3`) and feel the difference at the boundaries.
4. Replace the manual "find the minimum" loop with `Array.prototype.reduce`.
5. Log `projected` to the console on every drag end to see the number behind the decision.

---

## What this component teaches

The real lesson here is **how a two-outcome decision generalizes to N outcomes**. The Drawer Modal's `if (farEnough || fastEnough)` is really a special case of "which of these outcomes is the drag closest to" — it just happens to only have two outcomes (open, closed), so a single `if` was enough. The moment there's a third option, the same underlying gesture data needs a loop instead of a condition. Recognizing that shape — "this `if/else` is actually a 2-item version of a more general pattern" — is a genuinely useful instinct once you're writing more complex interactions.

---

## Next concepts

After this, you should understand:

- combining multiple signals (offset + velocity) into one decision
- iterative "find the best match" logic
- generalizing a 2-state interaction into an N-state one
- physical-feeling constraints (`dragElastic`) vs hard limits (`dragConstraints`)
