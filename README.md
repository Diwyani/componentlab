# Component Lab

Daily component practice — Framer Motion → GSAP → Three.js.

| Day | Component      | Tech          | Link                                                        | Notes                                                              |
| --- | --------------- | ------------- | ------------------------------------------------------------ | ------------------------------------------------------------------- |
| 001 | Toggle Switch   | Framer Motion | [src/components/001-toggle-switch](src/components/001-toggle-switch) | [notes](src/components/001-toggle-switch/notes.md) |

## Adding a new day's component

```bash
day=002
name=002-my-component
mkdir -p src/components/$name
cp src/components/001-toggle-switch/notes.md src/components/$name/notes.md
sed 's/ToggleSwitch/MyComponent/' src/components/001-toggle-switch/ToggleSwitch.jsx > src/components/$name/MyComponent.jsx
```

Then:

1. Add a row to the table above.
2. Build the component in `src/components/$name/`.
3. Fill in `notes.md` as you go.

The index page (`src/App.jsx`) auto-discovers any folder under `src/components/` that has a `notes.md` file — no need to register it manually.
