import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { Segmented } from "../013-segmented-control/SegmentedControl.jsx";

const tabs = [
  { value: "preview", label: "Preview" },
  { value: "code", label: "Code" },
];

export default function ComponentShowcase({ preview, code, language = "jsx" }) {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable (permissions, insecure context, etc.) — copy silently no-ops.
    }
  }

  return (
    <div className="w-full">
      <Segmented options={tabs} value={tab} onChange={setTab} />

      <AnimatePresence initial={false}>
        {tab === "preview" ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="mt-4 flex min-h-[200px] items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/30 p-10"
          >
            {preview}
          </motion.div>
        ) : (
          <motion.div
            key="code"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="relative mt-4 min-h-[200px] overflow-auto rounded-2xl border border-neutral-800 bg-neutral-900/30 p-4"
          >
            <button
              onClick={handleCopy}
              aria-label="Copy code"
              className="absolute right-3 top-3 rounded-md border border-neutral-800 bg-neutral-900 p-1.5 text-neutral-400 transition-colors hover:text-neutral-100"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
            <pre className="pr-8 text-xs leading-relaxed text-neutral-300">
              <code data-language={language}>{code}</code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
