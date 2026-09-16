// TODO: build the toggle switch component here.
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// `autoPlay` is opt-in and unused by every normal usage of this component
// (its own day page renders <ToggleSwitch /> with no props) — it only
// exists so a showcase reel can trigger the same state change the click
// handler already does, without faking a separate animation.
export default function ToggleSwitch({ autoPlay = false }) {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => setIsOn(true), 300);
    return () => clearTimeout(timer);
  }, [autoPlay]);

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
