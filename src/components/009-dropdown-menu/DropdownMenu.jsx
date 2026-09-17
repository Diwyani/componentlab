import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = ["Profile", "Settings", "Billing", "Sign out"];

const menuVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.15,
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -8,
    transition: { duration: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
};

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
      >
        Options
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute left-0 top-full z-20 mt-2 w-44 rounded-lg bg-neutral-100 p-1 shadow-xl dark:bg-neutral-800"
            >
              {items.map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded-md px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-700"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
