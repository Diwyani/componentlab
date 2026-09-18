import { useEffect, useState } from 'react'

function noteStorageKey(slug) {
  return `component-lab:notes:${slug}`
}

export default function QuickNotes({ slug }) {
  const [note, setNote] = useState('')
  const [savedAt, setSavedAt] = useState(null)

  useEffect(() => {
    try {
      setNote(localStorage.getItem(noteStorageKey(slug)) ?? '')
    } catch {
      setNote('')
    }
    setSavedAt(null)
  }, [slug])

  function handleChange(e) {
    const value = e.target.value
    setNote(value)
    try {
      localStorage.setItem(noteStorageKey(slug), value)
      setSavedAt(new Date())
    } catch {
      // localStorage unavailable (private mode, disabled, etc.) — edits just won't persist.
    }
  }

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-medium uppercase tracking-wide text-neutral-500">Quick Notes</h2>
        {savedAt && <span className="text-xs text-neutral-500 dark:text-neutral-600">Saved</span>}
      </div>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Scratch thoughts, todos, what you'll do next..."
        rows={8}
        className="mt-2 w-full resize-y rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-200 dark:placeholder:text-neutral-600 dark:focus:border-neutral-700"
      />
      <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-600">
        Saved locally in this browser only — separate from notes.md.
      </p>
    </div>
  )
}
