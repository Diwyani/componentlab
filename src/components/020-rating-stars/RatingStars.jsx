import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const MAX = 5;

export default function RatingStars({ onStateChange }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);

  const display = hovered ?? rating;

  useEffect(() => {
    onStateChange?.({ rating, hovered });
  }, [rating, hovered, onStateChange]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1" onMouseLeave={() => setHovered(null)}>
        {Array.from({ length: MAX }, (_, i) => i + 1).map((value) => {
          const filled = value <= display;
          return (
            <motion.button
              key={value}
              type="button"
              onMouseEnter={() => setHovered(value)}
              onClick={() => setRating(value)}
              whileTap={{ scale: 0.85 }}
              animate={{ scale: filled ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              aria-label={`Rate ${value} star${value === 1 ? "" : "s"}`}
              className="p-0.5"
            >
              <Star
                className={filled ? "h-6 w-6 text-yellow-400" : "h-6 w-6 text-neutral-300 dark:text-neutral-700"}
                fill={filled ? "currentColor" : "none"}
              />
            </motion.button>
          );
        })}
      </div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        {rating > 0 ? `You rated this ${rating} out of ${MAX}` : "Hover to preview, click to rate"}
      </p>
    </div>
  );
}
