import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { id: 1, title: "Mountain Hike", color: "bg-emerald-500" },
  { id: 2, title: "Coffee Break", color: "bg-amber-500" },
  { id: 3, title: "City Lights", color: "bg-indigo-500" },
  { id: 4, title: "Ocean Breeze", color: "bg-sky-500" },
];

export default function SwipeableCardStack() {
  const [stack, setStack] = useState(cards);
  const [exitDirections, setExitDirections] = useState({});

  function handleDragEnd(id, info) {
    const passedThreshold = Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500;
    if (!passedThreshold) return;

    setExitDirections((prev) => ({ ...prev, [id]: info.offset.x > 0 ? 1 : -1 }));
    setStack((prev) => prev.filter((card) => card.id !== id));
  }

  const visible = stack.slice(0, 3);

  return (
    <div className="relative h-72 w-64">
      <AnimatePresence>
        {visible.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-neutral-300 text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400"
          >
            <p>All caught up</p>
            <button
              onClick={() => setStack(cards)}
              className="rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-black"
            >
              Reset
            </button>
          </motion.div>
        ) : (
          visible
            .slice()
            .reverse()
            .map((card, i) => {
              const position = visible.length - 1 - i;
              const isTop = position === 0
              const direction = exitDirections[card.id] ?? 1

              return (
                <motion.div
                  key={card.id}
                  className={`absolute inset-0 flex items-end rounded-2xl p-5 text-white shadow-lg ${card.color}`}
                  style={{ zIndex: 10 - position }}
                  initial={false}
                  animate={{ scale: 1 - position * 0.05, y: position * 10 }}
                  exit={{ x: direction * 300, opacity: 0, rotate: direction * 15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.9}
                  whileDrag={{ rotate: 8, cursor: "grabbing" }}
                  onDragEnd={(_, info) => handleDragEnd(card.id, info)}
                >
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </motion.div>
              )
            })
        )}
      </AnimatePresence>
    </div>
  );
}
