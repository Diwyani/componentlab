import { useState } from "react";
import { motion } from "framer-motion";

const SNAPS = { open: 0, half: 170, closed: 310 };
const ORDER = ["open", "half", "closed"];

export default function DraggableBottomSheet() {
  const [snap, setSnap] = useState("half");

  function handleDragEnd(_, info) {
    // Predict where it would come to rest: current resting position + how far
    // it was dragged + a nudge from velocity, so a fast flick can jump two
    // snap points instead of only ever landing on the nearest one.
    const projected = SNAPS[snap] + info.offset.y + info.velocity.y * 0.15;

    let closest = ORDER[0];
    let closestDistance = Infinity;
    for (const key of ORDER) {
      const distance = Math.abs(SNAPS[key] - projected);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = key;
      }
    }
    setSnap(closest);
  }

  return (
    <div className="relative h-96 w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950">
      <p className="absolute inset-x-0 top-4 text-center text-xs text-neutral-400 dark:text-neutral-600">
        underlying content
      </p>

      <motion.div
        drag="y"
        dragConstraints={{ top: SNAPS.open, bottom: SNAPS.closed }}
        dragElastic={0.05}
        animate={{ y: SNAPS[snap] }}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
        onDragEnd={handleDragEnd}
        className="absolute inset-x-0 top-0 h-full rounded-t-2xl bg-white shadow-xl dark:bg-neutral-900"
      >
        <div className="flex justify-center pb-2 pt-3">
          <div className="h-1.5 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        </div>
        <div className="px-5 pb-5">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Sheet content</h3>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Drag the handle up or down — it snaps to open, half, or closed.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
