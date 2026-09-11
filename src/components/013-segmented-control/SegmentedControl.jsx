import { useId, useState } from "react";
import { motion } from "framer-motion";

// Reusable pill-switcher primitive. `layoutId` isolates the shared-layout
// animation per instance (defaults to a generated id) so multiple Segmented
// controls can be on screen at once without their pills morphing into each other.
export function Segmented({ options, value, onChange, layoutId }) {
  const autoId = useId();
  const pillId = layoutId ?? autoId;

  return (
    <div className="inline-flex gap-0.5 rounded-full bg-neutral-800 p-1">
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
                className="absolute inset-0 rounded-full bg-white"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-black" : "text-neutral-400"}`}>
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
