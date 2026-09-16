import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ToggleSwitch from "../001-toggle-switch/ToggleSwitch.jsx";
import LikeHeartButton from "../005-like-heart-button/LikeHeartButton.jsx";
import DragReorderList from "../010-drag-reorder-list/DragReorderList.jsx";
import CardExpandDetail from "../014-card-expand-detail/CardExpandDetail.jsx";
import ProgressStepper from "../012-progress-stepper/ProgressStepper.jsx";

const SLOT_DURATION = 3200;

// The real component implementations, each rendered with `autoPlay` so its
// own real interaction fires itself instead of waiting for a hover/click
// nobody is going to make in a passive showcase reel.
const slots = [ToggleSwitch, LikeHeartButton, DragReorderList, CardExpandDetail, ProgressStepper];

export default function HeroShowcase() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), SLOT_DURATION);
    return () => clearInterval(interval);
  }, []);

  const ActiveComponent = slots[tick % slots.length];

  return (
    <div
      className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/40"
      // Establishes a containing block for `fixed`-positioned descendants
      // (CardExpandDetail's expanded backdrop/modal uses `fixed`, correct
      // for its normal full-page usage) so that overlay stays boxed in here
      // instead of covering the whole viewport.
      style={{ transform: "translateZ(0)" }}
    >
      {/* `tick` (not the component index) is the key, so every cycle is a
          genuine fresh mount — including wrapping back to a component that
          was already shown — which is what makes its autoPlay effect fire
          again every time. No AnimatePresence/exit here on purpose:
          CardExpandDetail has its own internal AnimatePresence + layoutId
          for its expand/collapse, and exit-animating a subtree that
          contains that is a known-fragile combination in Framer Motion —
          it got stuck mid-exit in testing. React just swaps the outgoing
          element out immediately on key change; only the incoming one
          fades in. */}
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
