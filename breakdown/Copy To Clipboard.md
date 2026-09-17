A copy-to-clipboard button whose icon morphs into a checkmark for a moment after copying, then reverts.

## What are we building?

A button that:

- copies a fixed string to the system clipboard using a real browser API
- swaps its icon from a copy icon to a checkmark the instant the copy succeeds
- reverts back to the copy icon automatically after 1.5 seconds
- fails silently and safely if the browser refuses the copy (no crash, no error shown to the user)

The important part: this is the **shortest** component in the series, but it's the first one that talks to an *asynchronous* browser API instead of a synchronous one like `document.body.style` or `addEventListener`.

---

## Mental model

```text
user clicks the button
        │
        ▼
  handleCopy() runs
        │
        ▼
await navigator.clipboard.writeText(SNIPPET)
        │
   ┌────┴────┐
 succeeds    fails
   │           │
   ▼           ▼
setCopied(true)   (caught, ignored)
   │
   ▼
icon becomes ✓
   │
(1500ms later, via setTimeout)
   │
   ▼
setCopied(false)
   │
   ▼
icon becomes copy-icon again
```

---

## The code

```jsx
import { useState } from "react";
import { Copy, Check } from "lucide-react";

const SNIPPET = "npm install component-lab";

export default function CopyToClipboard() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(SNIPPET);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable (permissions, insecure context, etc.) — copy silently no-ops.
    }
  }

  return (
    <div>
      <code>{SNIPPET}</code>
      <button onClick={handleCopy} aria-label="Copy to clipboard">
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}
```

---

## 1. `navigator.clipboard` is a browser API, not a React one

```jsx
await navigator.clipboard.writeText(SNIPPET);
```

`navigator` is a global object the browser gives every page — it's how JavaScript reaches out to things outside the page itself (the clipboard, geolocation, battery status, and more). React never wraps or replaces this; it's called directly, the same way you'd call it in plain JavaScript with no framework at all. This is worth noticing because it's easy to assume "if it's in a `.jsx` file, it must be a React thing" — it isn't. `useState` is React. `navigator.clipboard` is the browser.

---

## 2. Why `async` and `await`

```jsx
async function handleCopy() {
  await navigator.clipboard.writeText(SNIPPET);
  ...
}
```

Writing to the clipboard isn't instant from the browser's point of view — it may need to check permissions first, which takes an unknown amount of time. `writeText` reflects that by returning a **Promise** (a placeholder for "a value that will exist later") instead of finishing immediately.

`async` marks a function as one that's allowed to `await` something. `await` pauses *that function* — not the whole page — until the Promise settles, then continues with whatever comes next. Without `await`, `setCopied(true)` would run immediately, before the browser had actually confirmed the copy succeeded.

---

## 3. `try`/`catch` around an API that might refuse

```jsx
try {
  await navigator.clipboard.writeText(SNIPPET);
  setCopied(true);
  setTimeout(() => setCopied(false), 1500);
} catch {
  // Clipboard API unavailable (permissions, insecure context, etc.) — copy silently no-ops.
}
```

`writeText` can fail — the user might have denied clipboard permission, or the page might not be served over HTTPS (the Clipboard API refuses to work on insecure origins). When an `await`ed Promise fails, it *throws*, the same way a regular synchronous error would. `try`/`catch` catches that: if the copy fails, execution jumps straight to `catch`, skipping `setCopied(true)` entirely — so the icon simply never changes, rather than the app crashing or showing a scary error for something the user can't really fix from inside your UI.

---

## 4. Reverting automatically with `setTimeout`

```jsx
setCopied(true);
setTimeout(() => setCopied(false), 1500);
```

This is the same idea used in the Toast Notification — flip state on, then schedule flipping it back off after a fixed delay. There's no cleanup function here (unlike the Drawer Modal's `useEffect`-based listeners) because this isn't tied to a mount/unmount lifecycle — it's a one-off timer kicked off by a single click, which is fine for something this short-lived.

---

## 5. Two icons, one ternary

```jsx
{copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
```

Both `Copy` and `Check` are imported from `lucide-react` (the same icon set used for `Heart`, `RefreshCw`, `X`, and `Star` elsewhere in this project). The ternary swaps between them based on one boolean — no animation library needed for this particular swap, since it's an instant icon replacement rather than a morph. Compare this to the Like Heart Button, which *does* animate its icon change with a `motion.span` — the difference is a deliberate choice per component, not a rule.

---

## What belongs to what?

| Concept | Technology |
|---|---|
| `copied` | React |
| `async`/`await`, `try`/`catch`, `setTimeout` | JavaScript |
| `navigator.clipboard.writeText` | Browser API |
| `Copy`, `Check` icons | lucide-react |
| layout classes | Tailwind |

---

## Things to understand

- the difference between a React API (`useState`) and a browser API (`navigator.clipboard`)
- Promises, `async`, and `await` at a basic level
- why `await` needs to live inside an `async` function
- `try`/`catch` for a Promise that might reject
- ternaries for swapping between two icons

---

## Try changing it

1. Make `SNIPPET` a prop instead of a hardcoded constant, so the button can copy anything.
2. Change the revert delay from `1500` to `3000` and notice how it changes the feel.
3. Add a visible error state for when the `catch` block runs, instead of failing silently.
4. Replace the icon swap with an animated one, like the Like Heart Button's `motion.span`.
5. Add a `title="Copied!"` tooltip that also appears/disappears with `copied`.

---

## What this component teaches

This is the first component to reach past `useState` and `useEffect` into **asynchronous JavaScript** — Promises, `async`/`await`, and `try`/`catch` around something that can genuinely fail for reasons outside your control (permissions, browser support, context). That combination — call an async browser API, handle both success and failure, update state accordingly — is the exact same shape you'll use later for real network requests (`fetch`), not just the clipboard.

---

## Next concepts

After this, you should understand:

- Promises, `async`, `await`
- `try`/`catch` for asynchronous failures
- distinguishing React APIs from plain browser/JavaScript APIs
- graceful degradation when a browser feature isn't available
