import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "What is Framer Motion?", answer: "A React animation library for building smooth, physics-based UI motion." },
  { question: "What is GSAP?", answer: "A JavaScript animation library known for complex timelines and scroll-based effects." },
  { question: "What is Three.js?", answer: "A JavaScript library for building 3D graphics in the browser using WebGL." },
];

export default function Accordion({ onStateChange }) {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    onStateChange?.({ openIndex });
  }, [openIndex, onStateChange]);

  return (
    <div className="w-80 flex flex-col gap-2">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className="rounded-lg bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-neutral-900 dark:text-white text-left"
            >
              {faq.question}
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <p className="px-4 pb-3 text-sm text-neutral-600 dark:text-neutral-400">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
