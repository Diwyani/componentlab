import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ToastDemo({ onStateChange }) {
  const [toasts, setToasts] = useState([]);

  function addToast() {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message: "Changes saved successfully" }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }

  useEffect(() => {
    onStateChange?.({ "toasts.length": toasts.length });
  }, [toasts, onStateChange]);

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={addToast}
        className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
      >
        Trigger Toast
      </button>

      <div className="fixed bottom-6 right-6 flex flex-col gap-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-lg bg-neutral-100 px-4 py-3 text-sm text-neutral-900 shadow-lg dark:bg-neutral-800 dark:text-white"
            >
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
