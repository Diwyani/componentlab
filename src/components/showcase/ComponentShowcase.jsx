import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

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
      <div className="flex">
        {tabs.map((t) => {
          const isActive = tab === t.value;
          return (
            <button
              key={t.value}
              onClick={() => setTab(t.value)}
              className={`-mb-px rounded-t-lg border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-neutral-800 border-b-transparent bg-neutral-900/30 text-neutral-100"
                  : "border-transparent text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden rounded-b-xl rounded-tr-xl border border-neutral-800 bg-neutral-900/30"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {tab === "preview" ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex min-h-[200px] items-center justify-center p-10"
            >
              {preview}
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative min-h-[200px] overflow-auto p-4"
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
      </motion.div>
    </div>
  );
}
