import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = ["Account", "Profile", "Payment", "Confirm"];

export default function ProgressStepper({ autoPlay = false }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((c) => {
        if (c >= steps.length - 1) {
          clearInterval(interval);
          return c;
        }
        return c + 1;
      });
    }, 700);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div className="w-96">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors duration-300 ${
                  index <= current
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "bg-neutral-200 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-500"
                }`}
              >
                {index < current ? "✓" : index + 1}
              </div>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">{step}</span>
            </div>

            {index < steps.length - 1 && (
              <div className="relative mx-2 h-0.5 flex-1 -translate-y-3 bg-neutral-200 dark:bg-neutral-800">
                <motion.div
                  animate={{ width: index < current ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-y-0 left-0 bg-neutral-900 dark:bg-white"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          className="rounded-lg bg-neutral-100 px-4 py-2 text-sm text-neutral-700 disabled:opacity-40 dark:bg-neutral-800 dark:text-neutral-200"
        >
          Back
        </button>
        <button
          onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))}
          disabled={current === steps.length - 1}
          className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 dark:bg-white dark:text-black"
        >
          Next
        </button>
      </div>
    </div>
  );
}
