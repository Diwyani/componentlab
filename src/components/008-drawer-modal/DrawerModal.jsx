
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DrawerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const title = "Drawer";
  const children = (
    <p className="text-sm text-neutral-500 dark:text-neutral-400">
      This is the drawer content. Drag the handle down, click the backdrop, or press Escape to close it.
    </p>
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
      >
        Open Drawer
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
            />

            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 rounded-t-2xl shadow-xl max-h-[85vh] flex flex-col"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 100 || info.velocity.y > 500) {
                  onClose();
                }
              }}
              role="dialog"
              aria-modal="true"
              aria-label={title ?? "Drawer"}
            >
              <div className="flex justify-center pt-3 pb-1 shrink-0">
                <div className="w-10 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>

              {title && (
                <div className="px-5 pb-3 shrink-0">
                  <h2 className="text-lg font-semibold">{title}</h2>
                </div>
              )}

              <div className="px-5 pb-6 overflow-y-auto">{children}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
