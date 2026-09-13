// TODO: build the skeleton loader -> content swap component here.
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SkeletonLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-72 rounded-xl bg-neutral-100 dark:bg-neutral-800 p-4">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeleton"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            <div className="h-24 w-full animate-pulse rounded-lg bg-neutral-300 dark:bg-neutral-700" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            <img
              src="https://picsum.photos/300/150"
              className="h-24 w-full rounded-lg object-cover"
            />
            <h3 className="text-sm font-medium text-neutral-900 dark:text-white">Loaded Content Title</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              This content appeared after the simulated network delay finished.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}