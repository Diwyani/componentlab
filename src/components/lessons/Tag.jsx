export default function Tag({ children }) {
  return (
    <span className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
      {children}
    </span>
  )
}
