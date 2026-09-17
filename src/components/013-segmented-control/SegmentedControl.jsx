import { useId, useState } from "react";
import { motion } from "framer-motion";

export function Segmented({ options, value, onChange, layoutId }) {
  const autoId = useId();
  const pillId = layoutId ?? autoId;

  return (
    <div className="inline-flex gap-0.5 rounded-full bg-neutral-200 p-1 dark:bg-neutral-800">
      {options.map((option) => {
        const optValue = typeof option === "string" ? option : option.value;
        const optLabel = typeof option === "string" ? option : option.label;
        const isActive = value === optValue;

        return (
          <button
            key={optValue}
            onClick={() => onChange(optValue)}
            className="relative rounded-full px-4 py-1.5 text-sm font-medium"
          >
            {isActive && (
              <motion.div
                layoutId={`segmented-pill-${pillId}`}
                className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-white dark:text-black" : "text-neutral-600 dark:text-neutral-400"}`}>
              {optLabel}
            </span>
          </button>
        );
      })}
    </div>
  );
}

const demoOptions = ["Day", "Week", "Month", "Year"];

export default function SegmentedControl() {
  const [selected, setSelected] = useState(demoOptions[0]);

  return <Segmented options={demoOptions} value={selected} onChange={setSelected} />;
}
