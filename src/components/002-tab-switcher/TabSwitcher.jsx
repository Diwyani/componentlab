import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Commit", "Analytics", "Upgrade"];

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex gap-2 p-1 bg-neutral-200 dark:bg-neutral-800 rounded-full w-fit">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className="relative px-4 py-2 text-sm font-medium rounded-full"
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-neutral-900 dark:bg-white rounded-full"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <span
            className={`relative z-10 ${
              activeTab === tab ? "text-white dark:text-black" : "text-neutral-600 dark:text-neutral-400"
            }`}
          >
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
}
