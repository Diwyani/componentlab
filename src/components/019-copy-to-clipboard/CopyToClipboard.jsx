import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

const SNIPPET = "npm install component-lab";

export default function CopyToClipboard({ onStateChange }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(SNIPPET);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  useEffect(() => {
    onStateChange?.({ copied });
  }, [copied, onStateChange]);

  return (
    <div className="flex w-80 items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900/40">
      <code className="truncate text-sm text-neutral-700 dark:text-neutral-300">{SNIPPET}</code>
      <button
        onClick={handleCopy}
        aria-label="Copy to clipboard"
        className="flex h-8 w-8 flex-none items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}
