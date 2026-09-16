import { useEffect, useState } from "react";
import { FlickerSpinner } from "flicker-dot";

const grids = [
  [
    false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false,
    true, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false,
    false,
  ],
  [
    false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false,
    true, false, true, false, false, false, true, false,
    true, false, true, false, false, false, true, false,
    true, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false,
    false,
  ],
  [
    false, false, false, false, false, false, false, false,
    false, false, true, false, false, false, false, false,
    true, false, true, false, false, false, true, false,
    true, false, true, false, false, false, true, false,
    true, false, false, false, false, false, true, false,
    false, false, false, false, false, false, false, false,
    false,
  ],
  [
    false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false,
    true, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false,
    false,
  ]
]

// There's no real async data-fetch in this app to gate a loading state on,
// so `document.fonts.ready` (are the web fonts this page uses actually
// painted yet) is the closest thing to a genuine "is the site ready to be
// seen" condition, rather than an arbitrary fake delay. MIN keeps the
// spinner from flashing for an imperceptible instant if fonts resolve
// immediately; MAX is a safety cap in case `fonts.ready` never settles.
const MIN_VISIBLE_MS = 500;
const MAX_WAIT_MS = 2000;

export default function AppLoader({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = Date.now();
    let settled = false;

    function finish() {
      if (settled) return;
      settled = true;
      const remaining = Math.max(0, MIN_VISIBLE_MS - (Date.now() - start));
      setTimeout(() => setReady(true), remaining);
    }

    const fallback = setTimeout(finish, MAX_WAIT_MS);

    if (document.fonts?.ready) {
      document.fonts.ready.then(finish);
    } else {
      finish();
    }

    return () => clearTimeout(fallback);
  }, []);

  if (ready) return children;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-950">
      <FlickerSpinner grids={grids} onColor="#91B51D" offColor="#212121" />
    </div>
  );
}
