import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ToggleSwitch from "../001-toggle-switch/ToggleSwitch.jsx";
import DragReorderList from "../010-drag-reorder-list/DragReorderList.jsx";
import LikeHeartButton from "../005-like-heart-button/LikeHeartButton.jsx";
import ProgressStepper from "../012-progress-stepper/ProgressStepper.jsx";

const DEFAULT_DURATION = 3200;

// The real component implementations, each rendered with `autoPlay` so its
// own real interaction fires itself instead of waiting for a hover/click
// nobody is going to make in a passive showcase reel. Toggle Switch gets a
// shorter slot since its flip completes almost instantly — no need to hold
// on it as long as the others. `label` names the one React/Framer Motion
// piece each example is actually demonstrating; `position` picks where that
// label + its arrow sit relative to the component, since one fixed spot
// doesn't read well against every shape (a tall stepper wants its label
// above it, a horizontal list wants it off to the side).
const slots = [
  { Component: ToggleSwitch, duration: 1600, label: "useState", position: "bottom" },
  { Component: DragReorderList, duration: DEFAULT_DURATION, label: "Reorder", position: "top-right" },
  { Component: LikeHeartButton, duration: DEFAULT_DURATION, label: "animate", position: "bottom-curvy" },
  { Component: ProgressStepper, duration: DEFAULT_DURATION, label: "ease", position: "top" },
];

const DOKDO = { fontFamily: '"Dokdo", cursive' };

// A single wavy, slightly imperfect arrow (not a straight/geometric one) —
// rotated per `position` below rather than redrawn per direction, since the
// point is a sketched, hand-drawn feel, not directional precision. `curvy`
// swaps in a more exaggerated zigzag S-curve for slots that want the tail
// (near the component) to visibly wind its way over to the label, rather
// than a mostly-straight line with a slight bend.
function HandDrawnArrow({ className = "", style, curvy = false }) {
  const linePath = curvy
    ? "M20 2 C 36 10, 4 20, 30 30 C 38 36, 4 40, 19 50"
    : "M20 3 C 28 15, 12 28, 23 40 C 26 44, 21 47, 19 50";

  return (
    <svg viewBox="0 0 40 60" className={className} style={style} fill="none">
      <path d={linePath} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M11 42 C 14 45, 17 48, 19 50 C 22 47, 25 44, 28 41"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Arrow always points from the component toward the label (never the other
// way), so its rotation depends on which side the label sits on.
function Label({ text, position }) {
  if (position === "top-right") {
    return (
      <div
        className="absolute left-1/2 top-1/2 flex flex-col items-center text-[#3fb950]/80 dark:text-[#3fb950]/70"
        // `-translate-x-1/2 -translate-y-1/2` (centering) and an offset
        // can't both be Tailwind utility classes — they'd set the same
        // `--tw-translate-x`/`-y` variable and the later one would just
        // overwrite the earlier one instead of combining. One explicit
        // transform avoids that.
        style={{ transform: "translate(calc(-50% + 4rem), calc(-50% - 8rem))" }}
      >
        <span className="text-base" style={{ ...DOKDO, transform: "rotate(-6deg)" }}>
          {text}
        </span>
        <HandDrawnArrow className="h-9 w-6" style={{ transform: "rotate(-135deg)" }} />
      </div>
    );
  }

  if (position === "top") {
    return (
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-32 flex-col items-center text-[#3fb950]/80 dark:text-[#3fb950]/70">
        <span className="text-base" style={{ ...DOKDO, transform: "rotate(-6deg)" }}>
          {text}
        </span>
        <HandDrawnArrow className="h-9 w-6 rotate-180" />
      </div>
    );
  }

  if (position === "bottom-curvy") {
    return (
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-9 flex-col items-center text-[#3fb950]/80 dark:text-[#3fb950]/70">
        <HandDrawnArrow className="h-9 w-6" curvy />
        <span className="text-base" style={DOKDO}>
          {text}
        </span>
      </div>
    );
  }

  // "bottom" — the default
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-9 flex-col items-center text-[#3fb950]/80 dark:text-[#3fb950]/70">
      <HandDrawnArrow className="h-9 w-6" />
      <span className="text-base" style={DOKDO}>
        {text}
      </span>
    </div>
  );
}

export default function HeroShowcase() {
  const [tick, setTick] = useState(0);
  const active = slots[tick % slots.length];

  // A chained setTimeout (not a fixed-interval setInterval) is what lets
  // each slot hold its own duration — Toggle Switch's shorter slot and the
  // rest's longer ones — without ever leaving a gap: the next slot is
  // scheduled the instant the current one's duration elapses.
  useEffect(() => {
    const timer = setTimeout(() => setTick((t) => t + 1), active.duration);
    return () => clearTimeout(timer);
  }, [tick, active.duration]);

  const ActiveComponent = active.Component;

  return (
    <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/40">
      {/* The component itself always stays dead-center via this absolute
          wrapper, regardless of which side the label/arrow occupy — so
          switching a slot's label position never shifts the demo itself. */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* `tick` (not the component index) is the key, so every cycle is a
            genuine fresh mount — including wrapping back to a component
            that was already shown — which is what makes its autoPlay
            effect fire again every time. No AnimatePresence/exit here on
            purpose: a nested AnimatePresence + layoutId component (as
            several of these are) got stuck mid-exit when the outer
            wrapper also tried to exit-animate it in testing. React just
            swaps the outgoing element out immediately on key change; only
            the incoming one fades in. */}
        <motion.div
          key={tick}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <ActiveComponent autoPlay />
        </motion.div>
      </div>

      <Label text={active.label} position={active.position} />
    </div>
  );
}
