## Why Component Lab?

**Learn on the go, learn by doing.**

There's a real gap for designers who want to learn to code: most resources assume you're starting from zero or already deep in engineering, nothing in between. The best way to learn anything is to get your hands dirty: build things, get stuck, sob a little, figure it out.

If vibe-coding alone isn't cutting it and you want to actually understand what's happening, this is for you. Web only, for now: React, Framer Motion.

This project is an attempt to:

1. Dissect the logic behind the code: not just copy it, understand why it works
2. Show what belongs where: what's Tailwind, what's React, what's plain JavaScript
3. Point you toward what to learn next to build a stronger foundation
4. Stay alive: this is a living document, not a finished one. Feedback and questions welcome on Twitter or by email.

component-lab/
├── README.md                 ← running index, updated daily (this becomes your "12 Components" list)
├── components/
│   ├── 001-action-toolbar/
│   │   ├── ActionToolbar.jsx
│   │   ├── notes.md          ← what you learned, what was hard
│   │   └── preview.gif       ← optional, for the README
│   ├── 002-family-drawer/
│   │   ├── FamilyDrawer.jsx
│   │   └── notes.md
│   ├── 003-...
├── package.json




Structure
1. what are we building?
2. what problem does it solve?
3. mental model
4. how the pieces work together
5. what belongs to React / JS / Tailwind / Framer Motion
6. code
7. code concepts
8. jargon / new terms
9. things I initially misunderstood
10. try changing this
11. what to learn next


The most basic things 
1. Import : 
2. export default function functionname :


Organized by **what you're learning**, not the order things were built in. The day number (001, 002, ...) still tells you the actual build sequence and matches the folder in `src/components/` — this grouping is just a different lens on the same components, for going back to study a concept rather than a specific day.

---

### 01 — State & Rendering

1. ==[[Toggle Switch]]== (001) — a boolean driving what's on screen
2. ==[[Tab switcher]]== (002) — state as a value, not just true/false
3. [[Accordion]] (003) — derived state (`isOpen` calculated, not stored, per item)

### 02 — Interaction

4. [[Tooltip]] (004) — responding to real-time browser events (mouse position)
5. [[Like Button]] (005) — one boolean driving both appearance *and* animation replay
6. [[Toast]] (007) — state as an array of independent, timed items
7. Rating Stars (020) — hover-driven fill, *upcoming*
8. Password Strength Meter (018) — live feedback as you type, *upcoming*

### 03 — Effects & Browser APIs

9. [[Skeleton Loader]] (006) — `useEffect`, timers, cleanup
10. [[Drawer Modal]] (008) — `useEffect` reaching outside React (scroll lock, keyboard listener)
11. Copy To Clipboard (019) — the Clipboard API, *upcoming*

### 04 — Data & Lists

12. [[Dropdown Menu]] (009) — data → `.map()` → UI, staggered children
13. [[Drag Reorder]] (010) — state that represents real data, not just UI condition
14. [[Image gallery]] (011) — selected-ID pattern + shared layout transitions (`layoutId`)
15. Search — filtering a list as you type, *upcoming*

### 05 — Layout & Motion

16. ==[[Progress Stepper]]== (012) — one piece of state driving many visual details
17. [[Segmented control]] (013) — shared layout animation; later became a reusable primitive
18. ==[[Card that expands]]== (014) — `layoutId` morphing between two different layouts
19. Swipeable Card Stack (015) — drag gestures + exit direction
20. Draggable Bottom Sheet (017) — drag with multiple snap points
21. Pull To Refresh (016) — drag distance driving a threshold-triggered action

### 06 — Component Architecture

22. Modal *(same build as [[Drawer Modal]], 008 — revisited here for composition/reuse rather than its effects)*
23. Controlled Dropdown *(same build as [[Dropdown Menu]], 009 — revisited here for the controlled-component pattern, the way `Segmented` was extracted from Segmented Control)*
24. Forms — *upcoming*
25. Async Data — *upcoming*

---

## Later (GSAP → Three.js, not yet categorized like the above)

**Week 4 — GSAP (timeline, scroll)**  
21. Scroll-triggered fade/slide-in sections  
22. Animated number counter (stats section)  
23. Text split-and-reveal (letters/words stagger in)  
24. SVG line-draw animation (logo or icon draws itself)  
25. Sticky horizontal scroll section  
26. Cursor-follow blob/magnetic button  
27. Parallax hero section

**Week 5 — GSAP, more complex**  
28. Marquee/infinite scroll ticker  
29. Image hover distortion (simple, no shader yet — just scale/clip-path)  
30. Animated navbar that shrinks on scroll  
31. Timeline-based loading sequence (like an app intro)  
32. Draggable slider/carousel with GSAP Draggable

**Week 6 — Three.js/WebGL start**  
33. Rotating 3D shape that responds to mouse  
34. Particle field background (mouse-reactive)  
35. 3D card tilt on hover (react-three-fiber)  
36. Image plane with basic shader (grayscale-to-color on hover)  
37. Simple dither/noise shader pass 