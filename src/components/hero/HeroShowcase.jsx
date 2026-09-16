import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ToggleSwitch from "../001-toggle-switch/ToggleSwitch.jsx";
import DragReorderList from "../010-drag-reorder-list/DragReorderList.jsx";
import LikeHeartButton from "../005-like-heart-button/LikeHeartButton.jsx";
import ProgressStepper from "../012-progress-stepper/ProgressStepper.jsx";
import ImageGalleryLayout from "../011-image-gallery-layout/ImageGalleryLayout.jsx";

const DEFAULT_DURATION = 3200;

// The real component implementations, each rendered with `autoPlay` so its
// own real interaction fires itself instead of waiting for a hover/click
// nobody is going to make in a passive showcase reel. Toggle Switch gets a
// shorter slot since its flip completes almost instantly — no need to hold
// on it as long as the others.
const slots = [
  { Component: ToggleSwitch, duration: 1600 },
  { Component: DragReorderList, duration: DEFAULT_DURATION },
  { Component: LikeHeartButton, duration: DEFAULT_DURATION },
  { Component: ProgressStepper, duration: DEFAULT_DURATION },
  { Component: ImageGalleryLayout, duration: DEFAULT_DURATION },
];

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
    <div
      className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/40"
      // Establishes a containing block for `fixed`-positioned descendants
      // (ImageGalleryLayout's lightbox overlay uses `fixed`, correct for
      // its normal full-page usage) so that overlay stays boxed in here
      // instead of covering the whole viewport.
      style={{ transform: "translateZ(0)" }}
    >
      {/* `tick` (not the component index) is the key, so every cycle is a
          genuine fresh mount — including wrapping back to a component that
          was already shown — which is what makes its autoPlay effect fire
          again every time. No AnimatePresence/exit here on purpose: a
          nested AnimatePresence + layoutId component (as several of these
          are) got stuck mid-exit when the outer wrapper also tried to
          exit-animate it in testing. React just swaps the outgoing element
          out immediately on key change; only the incoming one fades in. */}
      <motion.div
        key={tick}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <ActiveComponent autoPlay />
      </motion.div>
    </div>
  );
}
