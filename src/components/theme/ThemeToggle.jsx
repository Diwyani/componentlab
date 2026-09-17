import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { applyTheme, getInitialTheme } from '../../theme.js'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex h-3.5 w-3.5 items-center justify-center overflow-hidden text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
    >
      {/* Outgoing icon spins out, incoming icon spins in from the opposite
          side — fast and ease-in-out so it reads as a quick flip rather than
          a lingering animation. No AnimatePresence exit-lifecycle risk here
          (unlike nested-motion components elsewhere) since these are plain
          icons with nothing of their own to animate. */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeInOut' }}
        >
          {theme === 'dark' ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
