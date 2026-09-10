// TODO: build the like/heart button (bounce) component here.
import { useState } from "react";
import { motion } from "framer-motion";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="relative flex items-center justify-center w-20 h-20">
      <motion.button
        onClick={() => setIsLiked(!isLiked)}
        whileTap={{ scale: 0.85 }}
        animate={isLiked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="text-3xl"
      >
        {isLiked ? "❤️" : "🤍"}
      </motion.button>
    </div>
  );
}