import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

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
