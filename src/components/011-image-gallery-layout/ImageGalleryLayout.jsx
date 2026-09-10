import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { id: "1", url: "https://picsum.photos/seed/one/400/300" },
  { id: "2", url: "https://picsum.photos/seed/two/400/300" },
  { id: "3", url: "https://picsum.photos/seed/three/400/300" },
  { id: "4", url: "https://picsum.photos/seed/four/400/300" },
];

export default function ImageGalleryLayout() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = images.find((img) => img.id === selectedId);

  return (
    <div className="w-80">
      <div className="grid grid-cols-2 gap-2">
        {images.map((img) => (
          <motion.img
            key={img.id}
            layoutId={img.id}
            src={img.url}
            onClick={() => setSelectedId(img.id)}
            className="h-24 w-full cursor-pointer rounded-lg object-cover"
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/70"
            onClick={() => setSelectedId(null)}
          >
            <motion.img
              layoutId={selected.id}
              src={selected.url}
              className="max-h-[80vh] max-w-[80vw] rounded-xl object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
