import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const RULES = [
  { test: (v) => v.length >= 8, label: "At least 8 characters" },
  { test: (v) => /[A-Z]/.test(v), label: "An uppercase letter" },
  { test: (v) => /[0-9]/.test(v), label: "A number" },
  { test: (v) => /[^A-Za-z0-9]/.test(v), label: "A special character" },
];

const LEVELS = [
  { label: "Very weak", color: "bg-red-500" },
  { label: "Weak", color: "bg-orange-500" },
  { label: "Fair", color: "bg-yellow-500" },
  { label: "Good", color: "bg-lime-500" },
  { label: "Strong", color: "bg-green-500" },
];

export default function PasswordStrengthMeter() {
  const [value, setValue] = useState("");

  const score = useMemo(() => RULES.filter((rule) => rule.test(value)).length, [value]);
  const level = value ? LEVELS[score] : null;

  return (
    <div className="w-72">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type a password..."
        className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-600"
      />

      <div className="mt-3 flex gap-1">
        {RULES.map((_, i) => (
          <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
            <motion.div
              className={`h-full ${level ? level.color : ""}`}
              initial={false}
              animate={{ width: score > i ? "100%" : "0%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </div>
        ))}
      </div>

      <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
        {level ? level.label : "Start typing to see strength"}
      </p>

      <ul className="mt-3 flex flex-col gap-1">
        {RULES.map((rule) => {
          const passed = rule.test(value);
          return (
            <li
              key={rule.label}
              className={`flex items-center gap-1.5 text-xs transition-colors ${
                passed ? "text-green-600 dark:text-green-400" : "text-neutral-400 dark:text-neutral-600"
              }`}
            >
              <Check className={`h-3 w-3 ${passed ? "opacity-100" : "opacity-0"}`} />
              {rule.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
