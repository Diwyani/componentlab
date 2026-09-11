import { useState } from "react";
import { motion } from "framer-motion";

const steps = ["Account", "Profile", "Payment", "Confirm"];

export default function ProgressStepper() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-96">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{
                  backgroundColor: index <= current ? "#ffffff" : "#262626",
                  color: index <= current ? "#000000" : "#737373",
                }}
                transition={{ duration: 0.25 }}
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium"
              >
                {index < current ? "✓" : index + 1}
              </motion.div>
              <span className="text-xs text-neutral-400">{step}</span>
            </div>

            {index < steps.length - 1 && (
              <div className="relative mx-2 h-0.5 flex-1 -translate-y-3 bg-neutral-800">
                <motion.div
                  animate={{ width: index < current ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-y-0 left-0 bg-white"
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
          className="rounded-lg bg-neutral-800 px-4 py-2 text-sm text-neutral-200 disabled:opacity-40"
        >
          Back
        </button>
        <button
          onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))}
          disabled={current === steps.length - 1}
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
