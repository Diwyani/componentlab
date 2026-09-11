import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const card = {
  id: "notes-card",
  title: "Weekly Notes",
  summary: "Ideas and reminders from this week.",
  detail:
    "Ship the progress stepper, fix the drawer's controlled-props issue, and start the drag-to-reorder list. Remember to update meta.js descriptions before Friday.",
};

export default function CardExpandDetail() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex w-80 items-center justify-center">
      {!isExpanded && (
        <motion.button
          layoutId={card.id}
          onClick={() => setIsExpanded(true)}
          className="w-full rounded-xl bg-neutral-800 p-5 text-left"
        >
          <motion.h3 layoutId={`${card.id}-title`} className="text-sm font-medium text-white">
            {card.title}
          </motion.h3>
          <p className="mt-1 text-sm text-neutral-400">{card.summary}</p>
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
              <motion.div layoutId={card.id} className="w-80 rounded-xl bg-neutral-800 p-6 text-left">
                <motion.h3 layoutId={`${card.id}-title`} className="text-base font-medium text-white">
                  {card.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="mt-3 text-sm leading-relaxed text-neutral-400"
                >
                  {card.detail}
                </motion.p>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="mt-5 rounded-lg bg-neutral-700 px-3 py-1.5 text-xs text-neutral-200"
                >
                  Close
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
