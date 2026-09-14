# Component Lab

Daily component practice — Framer Motion → GSAP → Three.js.

| Day | Component      | Tech          | Link                                                        | Notes                                                              |
| --- | --------------- | ------------- | ------------------------------------------------------------ | ------------------------------------------------------------------- |
| 001 | Toggle Switch   | Framer Motion | [src/components/001-toggle-switch](src/components/001-toggle-switch) | [notes](src/components/001-toggle-switch/notes.md) |
| 002 | Tab Switcher    | Framer Motion | [src/components/002-tab-switcher](src/components/002-tab-switcher) | [notes](src/components/002-tab-switcher/notes.md) |
| 003 | Accordion FAQ   | Framer Motion | [src/components/003-accordion-faq](src/components/003-accordion-faq) | [notes](src/components/003-accordion-faq/notes.md) |
| 004 | Tooltip Follow Cursor | Framer Motion | [src/components/004-tooltip-follow-cursor](src/components/004-tooltip-follow-cursor) | [notes](src/components/004-tooltip-follow-cursor/notes.md) |
| 005 | Like Heart Button | Framer Motion | [src/components/005-like-heart-button](src/components/005-like-heart-button) | [notes](src/components/005-like-heart-button/notes.md) |
| 006 | Skeleton Loader | Framer Motion | [src/components/006-skeleton-loader](src/components/006-skeleton-loader) | [notes](src/components/006-skeleton-loader/notes.md) |
| 007 | Toast Notification | Framer Motion | [src/components/007-toast-notification](src/components/007-toast-notification) | [notes](src/components/007-toast-notification/notes.md) |
| 008 | Drawer Modal    | Framer Motion | [src/components/008-drawer-modal](src/components/008-drawer-modal) | [notes](src/components/008-drawer-modal/notes.md) |
| 009 | Dropdown Menu   | Framer Motion | [src/components/009-dropdown-menu](src/components/009-dropdown-menu) | [notes](src/components/009-dropdown-menu/notes.md) |
| 010 | Drag Reorder List | Framer Motion | [src/components/010-drag-reorder-list](src/components/010-drag-reorder-list) | [notes](src/components/010-drag-reorder-list/notes.md) |
| 011 | Image Gallery Layout | Framer Motion | [src/components/011-image-gallery-layout](src/components/011-image-gallery-layout) | [notes](src/components/011-image-gallery-layout/notes.md) |
| 012 | Progress Stepper | Framer Motion | [src/components/012-progress-stepper](src/components/012-progress-stepper) | [notes](src/components/012-progress-stepper/notes.md) |
| 013 | Segmented Control | Framer Motion | [src/components/013-segmented-control](src/components/013-segmented-control) | [notes](src/components/013-segmented-control/notes.md) |
| 014 | Card Expand Detail | Framer Motion | [src/components/014-card-expand-detail](src/components/014-card-expand-detail) | [notes](src/components/014-card-expand-detail/notes.md) |
| 015 | Swipeable Card Stack | Framer Motion | [src/components/015-swipeable-card-stack](src/components/015-swipeable-card-stack) | [notes](src/components/015-swipeable-card-stack/notes.md) |
| 016 | Pull To Refresh | Framer Motion | [src/components/016-pull-to-refresh](src/components/016-pull-to-refresh) | [notes](src/components/016-pull-to-refresh/notes.md) |
| 017 | Draggable Bottom Sheet | Framer Motion | [src/components/017-draggable-bottom-sheet](src/components/017-draggable-bottom-sheet) | [notes](src/components/017-draggable-bottom-sheet/notes.md) |
| 018 | Password Strength Meter | Framer Motion | [src/components/018-password-strength-meter](src/components/018-password-strength-meter) | [notes](src/components/018-password-strength-meter/notes.md) |
| 019 | Copy To Clipboard | Framer Motion | [src/components/019-copy-to-clipboard](src/components/019-copy-to-clipboard) | [notes](src/components/019-copy-to-clipboard/notes.md) |
| 020 | Rating Stars | Framer Motion | [src/components/020-rating-stars](src/components/020-rating-stars) | [notes](src/components/020-rating-stars/notes.md) |

## Adding a new day's component

```bash
name=021-my-component
mkdir -p src/components/$name
cp src/components/001-toggle-switch/notes.md src/components/$name/notes.md
sed 's/ToggleSwitch/MyComponent/' src/components/001-toggle-switch/ToggleSwitch.jsx > src/components/$name/MyComponent.jsx
cat > src/components/$name/meta.js <<'EOF'
export const meta = {
  day: '021',
  name: 'My Component',
  description: 'TODO: describe what this component does.',
  tags: ['react', 'tailwindcss', 'framer motion'],
}
EOF
```

Then:

1. Add a row to the table above.
2. Build the component in `src/components/$name/`.
3. Fill in `meta.js` (name/description/tags) and `notes.md` as you go.

The index page (`src/App.jsx`) auto-discovers any folder under `src/components/` that has both a `.jsx` component file and a `meta.js` file — no need to register it manually.
