import { useEffect, useState } from "react";
import { Reorder } from "framer-motion";

const initialItems = ["Write daily component", "Review pull requests", "Ship the release", "Reply to feedback"];

// `autoPlay` is opt-in, unused by this component's own day page. Rather than
// faking a pointer drag, it just swaps two items in the array — Reorder.Group
// already animates any array-order change as a layout transition, so this
// plays the component's real reorder animation, just triggered by data
// instead of a gesture.
export default function DragReorderList({ autoPlay = false }) {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => {
      setItems((prev) => {
        const next = [...prev];
        const first = next[0];
        next[0] = next[2];
        next[2] = first;
        return next;
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [autoPlay]);

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      className="flex w-72 flex-col gap-2"
    >
      {items.map((item) => (
        <Reorder.Item
          key={item}
          value={item}
          whileDrag={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
          className="cursor-grab rounded-lg bg-neutral-100 px-4 py-3 text-sm text-neutral-700 active:cursor-grabbing dark:bg-neutral-800 dark:text-neutral-200"
        >
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
