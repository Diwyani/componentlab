import { useState } from "react";
import { Reorder } from "framer-motion";

const initialItems = ["Write daily component", "Review pull requests", "Ship the release", "Reply to feedback"];

export default function DragReorderList() {
  const [items, setItems] = useState(initialItems);

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
