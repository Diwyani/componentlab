// TODO: build the toggle switch component here.
import { useState } from "react";
import { motion } from "framer-motion";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

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
