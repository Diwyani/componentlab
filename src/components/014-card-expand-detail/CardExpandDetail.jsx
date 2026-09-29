import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const card = {
  id: "notes-card",
  title: "Weekly Notes",
  summary: "Ideas and reminders from this week.",
  detail:
    "Ship the progress stepper, fix the drawer's controlled-props issue, and start the drag-to-reorder list. Remember to update meta.js descriptions before Friday.",
};

export default function CardExpandDetail({ autoPlay = false, onStateChange }) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => setIsExpanded(true), 300);
    return () => clearTimeout(timer);
  }, [autoPlay]);

  useEffect(() => {
    onStateChange?.({ isExpanded });
  }, [isExpanded, onStateChange]);

  return (
    <div className="relative flex w-80 items-center justify-center">
      {!isExpanded && (
        <motion.button
          layoutId={card.id}
          onClick={() => setIsExpanded(true)}
          className="w-full rounded-xl bg-neutral-100 p-5 text-left dark:bg-neutral-800"
        >
          <motion.h3 layoutId={`${card.id}-title`} className="text-sm font-medium text-neutral-900 dark:text-white">
            {card.title}
          </motion.h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{card.summary}</p>
        </motion.button>
      )}

      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60"
              onClick={() => setIsExpanded(false)}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div layoutId={card.id} className="relative w-80 rounded-xl bg-yellow-400 p-6 text-left">
                <button
                  onClick={() => setIsExpanded(false)}
                  aria-label="Close"
                  className="absolute right-4 top-4 rounded-full p-1 text-neutral-900/60 transition-colors hover:bg-black/10 hover:text-neutral-900"
                >
                  <X className="h-4 w-4" />
                </button>
                <motion.h3 layoutId={`${card.id}-title`} className="text-base font-medium text-neutral-900">
                  {card.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="mt-3 pr-6 text-sm leading-relaxed text-neutral-800"
                >
                  {card.detail}
                </motion.p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
