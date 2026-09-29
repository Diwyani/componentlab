import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ToggleSwitch({ autoPlay = false, onStateChange }) {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => setIsOn(true), 300);
    return () => clearTimeout(timer);
  }, [autoPlay]);

  useEffect(() => {
    onStateChange?.({ isOn });
  }, [isOn, onStateChange]);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`flex w-16 h-9 p-1 rounded-full cursor-pointer ${
        isOn ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"
      }`}
    >
      <motion.div
        className="w-7 h-7 bg-white rounded-full shadow-md"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      />
    </div>
  );
}
