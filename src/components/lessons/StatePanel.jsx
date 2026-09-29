import { motion } from 'framer-motion'

export default function StatePanel({ state }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-dashed border-neutral-300 px-4 py-3 dark:border-neutral-700">
      <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">Live state</span>
      {Object.entries(state).map(([key, value]) => (
        <code key={key} className="text-sm text-neutral-700 dark:text-neutral-300">
          {key}:{' '}
          <motion.span
            key={JSON.stringify(value)}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className={value === true ? 'text-[#3fb950]' : 'text-neutral-500'}
          >
            {JSON.stringify(value)}
          </motion.span>
        </code>
      ))}
      <span className="ml-auto text-xs text-neutral-500">Interact with the preview to see it change</span>
    </div>
  )
}
