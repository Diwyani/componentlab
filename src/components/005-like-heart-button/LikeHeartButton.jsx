import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// `autoPlay` is opt-in, unused by this component's own day page — it lets a
// showcase reel trigger the real like animation instead of faking one.
export default function LikeButton({ autoPlay = false }) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => setIsLiked(true), 300);
    return () => clearTimeout(timer);
  }, [autoPlay]);

  return (
    <button
      onClick={() => setIsLiked((prev) => !prev)}
      aria-label={isLiked ? "Unlike" : "Like"}
      className="flex h-10 w-10 items-center justify-center"
    >
      <motion.span
        key={isLiked}
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 700, damping: 15 }}
      >
        <Heart
          className={isLiked ? "h-6 w-6 text-red-500" : "h-6 w-6 text-neutral-400"}
          fill={isLiked ? "currentColor" : "none"}
        />
      </motion.span>
    </button>
  );
}
