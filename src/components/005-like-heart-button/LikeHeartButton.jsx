// TODO: build the like/heart button (bounce + particle burst) component here.
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [burstKey, setBurstKey] = useState(0);

  function handleClick() {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setBurstKey((prev) => prev + 1);
    }
  }

  const particles = Array.from({ length: 8 });

  return (
    <div className="relative flex items-center justify-center w-20 h-20">
      <motion.button
        onClick={handleClick}
        whileTap={{ scale: 0.85 }}
        animate={isLiked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="text-3xl"
      >
        {isLiked ? "❤️" : "🤍"}
      </motion.button>

      <AnimatePresence>
        {isLiked && (
          <motion.div key={burstKey} className="absolute inset-0 pointer-events-none">
            {particles.map((_, i) => {
              const angle = (i / particles.length) * 360;
              const radius = 40;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.span
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{ x, y, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2 text-sm"
                >
                  ❤️
                </motion.span>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}