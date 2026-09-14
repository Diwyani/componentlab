import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const items = [
  "New message from Sam",
  "Your order has shipped",
  "3 people liked your post",
  "Weekly summary is ready",
];

const THRESHOLD = 70;

export default function PullToRefresh() {
  const [pullProgress, setPullProgress] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  function handleDrag(_, info) {
    setPullProgress(Math.min(Math.max(info.offset.y, 0) / THRESHOLD, 1));
  }

  function handleDragEnd(_, info) {
    if (info.offset.y > THRESHOLD) {
      setIsRefreshing(true);
      setPullProgress(1);
      setTimeout(() => {
        setIsRefreshing(false);
        setPullProgress(0);
      }, 1200);
    } else {
      setPullProgress(0);
    }
  }

  return (
    <div className="relative h-80 w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex h-14 items-center justify-center"
        style={{ opacity: pullProgress }}
      >
        <motion.div
          animate={isRefreshing ? { rotate: 360 } : { rotate: pullProgress * 360 }}
          transition={isRefreshing ? { duration: 0.7, repeat: Infinity, ease: "linear" } : { duration: 0 }}
        >
          <RefreshCw className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
        </motion.div>
      </div>

      <motion.div
        drag={isRefreshing ? false : "y"}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.6 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={{ y: isRefreshing ? THRESHOLD : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex flex-col gap-2 p-4"
      >
        {items.map((item) => (
          <div
            key={item}
            className="rounded-lg bg-neutral-100 px-3 py-2.5 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
