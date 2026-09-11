import { useState } from "react";
import { motion } from "framer-motion";

const options = ["Day", "Week", "Month", "Year"];

export default function SegmentedControl() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="inline-flex gap-0.5 rounded-full bg-neutral-800 p-1">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className="relative rounded-full px-4 py-1.5 text-sm font-medium"
        >
          {selected === option && (
            <motion.div
              layoutId="segmented-pill"
              className="absolute inset-0 rounded-full bg-white"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <span className={`relative z-10 ${selected === option ? "text-black" : "text-neutral-400"}`}>
            {option}
          </span>
        </button>
      ))}
    </div>
  );
}  
