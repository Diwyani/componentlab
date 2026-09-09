// TODO: build the tooltip-that-follows-the-cursor-on-hover component here.
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursorTooltip() {
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      className="relative w-72 h-40 flex items-center justify-center rounded-xl bg-neutral-800 text-neutral-400 text-sm cursor-none"
    >
      Hover over this box

      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            style={{ left: coords.x, top: coords.y }}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-2 py-1 text-xs font-medium text-black"
          >
            👀 Watching
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}