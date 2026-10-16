import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

const cards = [
  { id: 1, title: "Mountain Hike", color: "bg-emerald-500" },
  { id: 2, title: "Coffee Break", color: "bg-amber-500" },
  { id: 3, title: "City Lights", color: "bg-indigo-500" },
  { id: 4, title: "Ocean Breeze", color: "bg-sky-500" },
];

const exitVariants = {
  exit: (direction) => ({
    x: direction * 400,
    opacity: 0,
    rotate: direction * 25,
    transition: { duration: 0.3 },
  }),
};

function SwipeCard({ card, position, onDragEnd }) {
  const isTop = position === 0;
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-18, 18]);
  const opacity = useTransform(x, [-260, -120, 0, 120, 260], [0.4, 1, 1, 1, 0.4]);

  return (
    <motion.div
      className={`absolute inset-0 flex items-end rounded-2xl p-5 text-white shadow-lg ${card.color} ${
        isTop ? "cursor-grab active:cursor-grabbing" : ""
      }`}
      style={{ zIndex: 10 - position, x, rotate, opacity }}
      initial={false}
      animate={{ scale: 1 - position * 0.05, y: position * 10 }}
      variants={exitVariants}
      exit="exit"
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      drag={isTop}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      whileDrag={{ scale: 1.03 }}
      onDragEnd={(_, info) => onDragEnd(card.id, info)}
    >
      <h3 className="text-lg font-semibold">{card.title}</h3>
    </motion.div>
  );
}

export default function SwipeableCardStack({ onStateChange }) {
  const [stack, setStack] = useState(cards);
  const [exitDirection, setExitDirection] = useState(1);

  function handleDragEnd(id, info) {
    const passedThreshold = Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500;
    if (!passedThreshold) return;

    setExitDirection(info.offset.x > 0 ? 1 : -1);
    setStack((prev) => prev.filter((card) => card.id !== id));
  }

  const visible = stack.slice(0, 3);

  useEffect(() => {
    onStateChange?.({ stack: stack.map((card) => card.id) });
  }, [stack, onStateChange]);

  return (
    <div className="relative h-72 w-64">
      <AnimatePresence custom={exitDirection}>
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
            .map((card, i) => (
              <SwipeCard
                key={card.id}
                card={card}
                position={visible.length - 1 - i}
                onDragEnd={handleDragEnd}
              />
            ))
        )}
      </AnimatePresence>
    </div>
  );
}
