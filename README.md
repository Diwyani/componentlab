# Component Lab

Daily component practice — Framer Motion → GSAP → Three.js.

| Day | Component      | Tech          | Link                                                        | Notes                                                              |
| --- | --------------- | ------------- | ------------------------------------------------------------ | ------------------------------------------------------------------- |
| 001 | Toggle Switch   | Framer Motion | [src/components/001-toggle-switch](src/components/001-toggle-switch) | [notes](src/components/001-toggle-switch/notes.md) |
| 002 | Tab Switcher    | Framer Motion | [src/components/002-tab-switcher](src/components/002-tab-switcher) | [notes](src/components/002-tab-switcher/notes.md) |
| 003 | Accordion FAQ   | Framer Motion | [src/components/003-accordion-faq](src/components/003-accordion-faq) | [notes](src/components/003-accordion-faq/notes.md) |

## Adding a new day's component

```bash
name=004-my-component
mkdir -p src/components/$name
cp src/components/001-toggle-switch/notes.md src/components/$name/notes.md
sed 's/ToggleSwitch/MyComponent/' src/components/001-toggle-switch/ToggleSwitch.jsx > src/components/$name/MyComponent.jsx
cat > src/components/$name/meta.js <<'EOF'
export const meta = {
  day: '004',
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
