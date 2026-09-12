A card that expands into a larger detail view when clicked.

This component is mainly about understanding **UI states** & how React switches between them.

---

## What are we building?

Initially we have a small card:

```text
┌──────────────────────┐
│ Weekly Notes         │
│ Ideas from this week │
└──────────────────────┘
```

When we click it:

```text
┌─────────────────────────────┐
│ Weekly Notes             ✕  │
│                             │
│ Full details about the      │
│ notes appear here...        │
│                             │
└─────────────────────────────┘
```

There are really **two UI states**:

```text
collapsed
    ↓
expanded
```

---

## The mental model

We need one piece of information:

```jsx
const [isExpanded, setIsExpanded] = useState(false);
```

Think of it as a switch:

```text
isExpanded = false
        ↓
show small card


isExpanded = true
        ↓
show expanded card
```

The complete flow:

```text
isExpanded = false
       ↓
small card is shown
       ↓
user clicks card
       ↓
setIsExpanded(true)
       ↓
React re-renders
       ↓
small card disappears
       ↓
expanded card appears
```

When the user closes it:

```text
click the ✕ button
       ↓
setIsExpanded(false)
       ↓
React re-renders
       ↓
expanded card disappears
       ↓
small card appears again
```

---

## The most important part of the code

### Small card

```jsx
{!isExpanded && (
  <motion.button>
    ...
  </motion.button>
)}
```

Read this as:

> If `isExpanded` is false, show the small card.

conditionally rendering already learned in tab switching. 


```text
isExpanded = false

!isExpanded
    ↓
!false
    ↓
true
```

So the small card renders.

---

## After clicking

The small card has:

```jsx
onClick={() => setIsExpanded(true)}
```

So:

```text
click
  ↓
setIsExpanded(true)
  ↓
isExpanded = true
```

Now:

```jsx
!isExpanded
```

becomes:

```text
!true
 ↓
false
```

So React does not render the small card.

---

## The expanded card

The other part says:

```jsx
{isExpanded && (
  ...
)}
```

Read this as:

> If `isExpanded` is true, render the expanded version.

So after clicking:

```text
isExpanded = true

true && (...)
      ↓
expanded card renders
```

This means the component is essentially:

```text
                  isExpanded
                      │
              ┌───────┴───────┐
              │               │
            false            true
              │               │
              ▼               ▼
         small card      expanded card
```

This is the React logic.

**Everything else comes after this.**

---

# So why do we have two cards?

This is an important question.

We're not actually taking one HTML element & magically making it bigger.

We have:

```text
small card
```

and:

```text
expanded card
```

They are two different rendered elements.

React switches between them.

Without animation, this would simply be:

```text
small card
     ↓
remove it
     ↓
show expanded card
```

---

# Then what is `layoutId` doing?

Now we introduce Framer Motion.

Small card:

```jsx
<motion.button layoutId={card.id}>
```

Expanded card:

```jsx
<motion.div layoutId={card.id}>
```

Assume:

```jsx
card.id = "notes-card"
```

So both elements have:

```text
layoutId = "notes-card"
```

This tells Framer Motion:

> These two elements represent the same visual object.

React is still responsible for:

```text
which version exists?
```

Framer Motion is responsible for:

```text
how do we visually transition between them?
```

So:

```text
REACT

small card
    ↓
expanded card


FRAMER MOTION

"these have the same layoutId"
    ↓
animate the change
```

---

# The title has its own layoutId

The small card contains:

```jsx
<motion.h3
  layoutId={`${card.id}-title`}
>
  {card.title}
</motion.h3>
```

The expanded card contains the same:

```jsx
<motion.h3
  layoutId={`${card.id}-title`}
>
  {card.title}
</motion.h3>
```

If:

```text
card.id = "notes-card"
```

then:

```text
notes-card-title
```

identifies the title.

So Framer Motion can also animate:

```text
Weekly Notes
```

from its position in the small card to its position in the expanded card.

---

# What about the detail text?

The detail text does NOT have a `layoutId`.

Instead:

```jsx
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.15 }}
>
```

It simply fades in.

Why?

Because there wasn't a detail paragraph in the small card.

There is nothing to connect.

So:

```text
CARD
layoutId
   ↓
small card → expanded card


TITLE
layoutId
   ↓
small title → expanded title


DETAIL
no layoutId
   ↓
just fade in
```

---

# What is AnimatePresence doing?

When:

```text
isExpanded = false
```

the expanded card doesn't exist.

When:

```text
isExpanded = true
```

it gets rendered.

When it changes back to false, React wants to remove it.

`AnimatePresence` lets Framer Motion animate an element **when it is being removed**.

So:

```text
isExpanded = false
        ↓
React says:
"expanded card should go away"
        ↓
AnimatePresence:
"let it play its exit animation first"
```

---

# The whole thing

```text
                isExpanded
                     │
                     ▼
              ┌─────────────┐
              │    false    │
              └──────┬──────┘
                     │
                     ▼
                 small card
                     │
                   click
                     │
                     ▼
             setIsExpanded(true)
                     │
                     ▼
              ┌─────────────┐
              │    true     │
              └──────┬──────┘
                     │
                     ▼
               expanded card
                     │
                     │
              layoutId connects
                     │
                     ▼
          Framer Motion animates
                     │
                     ▼
             small → expanded
```

---

## New concepts in this component

### React

- `useState`
- conditional rendering
- `&&`
- `!`
- re-render
- component state


### JavaScript
- template literals
- object properties
- boolean values

### Framer Motion
- `motion`
- `layoutId`
- `AnimatePresence`
- `initial`
- `animate`
- `exit`
- `transition`

### CSS / Tailwind

- `fixed` 
- `inset-0`
- `z-index`
- positioning
- overlay


---

## Things I initially need to understand

**Does `layoutId` decide which card appears?**

No.

`isExpanded` decides that.

**Does Framer Motion create the expanded card?**

No.

React renders the expanded card.

**Why are there two card elements?**

Because we're representing two different UI states.

**Why does the transition look like one card expanding?**

Because both versions share the same `layoutId`.

---

## Two small revisions worth calling out

The expanded card went through two changes after the version described above:

**The "Close" text button became an X icon.** A text button reads fine, but expanded detail views — cards, modals, drawers — conventionally close via a small icon in the corner rather than a labeled button competing for space with the actual content. The button is now:

```jsx
<button
  onClick={() => setIsExpanded(false)}
  aria-label="Close"
  className="absolute right-4 top-4 rounded-full p-1 text-neutral-900/60 transition-colors hover:bg-black/10 hover:text-neutral-900"
>
  <X className="h-4 w-4" />
</button>
```

`aria-label="Close"` matters here specifically because the button no longer has any visible text — without it, the button would be announced to assistive technology as unlabeled.

**The expanded card's background became yellow** (`bg-yellow-400`), a deliberate style choice rather than a default. Notice the text colors changed alongside it — `text-neutral-900` / `text-neutral-800` instead of white/gray — because dark text needed enough contrast against a light, saturated background. This is a small but real lesson: changing a background color usually means re-checking every text color layered on top of it, not just the background itself.

---

## Try changing it

1. Remove `layoutId` from both cards.
    
2. Keep `layoutId` on the cards but remove it from the title.
    
3. Remove `AnimatePresence`.
    
4. Remove the detail fade animation.
    
5. Change the card's expanded width.
    
6. Add an icon to the small card & connect it with `layoutId`.
    
7. Add a second card & make each card expand independently.
    

The last one is especially useful because it forces you to think about **state per item**.

---

## What this component teaches

The bigger React pattern is:

```text
UI state
   ↓
conditional rendering
   ↓
different UI
```

The bigger Framer Motion pattern is:

```text
two related layouts
   ↓
same layoutId
   ↓
visual transition between them
```

These are two separate concepts working together.

---

## Next concepts

- [Conditional rendering](https://react.dev/learn/conditional-rendering)
- [Shared layout animations (layoutId)](https://motion.dev/docs/react-layout-animations)
- [AnimatePresence](https://motion.dev/docs/react-animate-presence)
- [ARIA labels](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [Color contrast basics](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)