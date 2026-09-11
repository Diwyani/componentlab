import { useEffect, useState } from 'react'

// Auto-discovers every folder under src/components/ — each folder's .jsx file
// (the component) and meta.js file (day/name/description/tags) are matched
// by folder slug. Add a new folder with both files and it shows up here
// automatically, with zero edits to this file.
const componentModules = import.meta.glob('./components/*/*.jsx', { eager: true })
const metaModules = import.meta.glob('./components/*/meta.js', { eager: true })

const entries = Object.keys(metaModules)
  .map((metaPath) => {
    const slug = metaPath.split('/')[2] // "001-toggle-switch"
    const componentPath = Object.keys(componentModules).find((p) => p.split('/')[2] === slug)
    return {
      slug,
      ...metaModules[metaPath].meta,
      component: componentPath ? componentModules[componentPath].default : null,
    }
  })
  .sort((a, b) => a.day.localeCompare(b.day))

function Tag({ children }) {
  return (
    <span className="rounded-md bg-neutral-900 px-2.5 py-1 text-xs text-neutral-400">{children}</span>
  )
}

function IndexGrid({ onSelect }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-2xl font-semibold tracking-tight">Component Lab</h1>
        <p className="mt-2 text-sm text-neutral-400">
          Daily component practice — Framer Motion → GSAP → Three.js
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {entries.map(({ slug, day, name, description, tags }) => (
            <button
              key={slug}
              onClick={() => onSelect(slug)}
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 text-left transition-colors hover:border-neutral-700 hover:bg-neutral-900"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-neutral-100">{name}</h2>
                <span className="font-mono text-xs text-neutral-500">Day {day}</span>
              </div>
              <p className="mt-2 text-sm text-neutral-400">{description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </button>
          ))}
        </div>

        {entries.length === 0 && (
          <p className="mt-10 text-sm text-neutral-500">
            No components yet — add one under src/components/.
          </p>
        )}
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-2 text-xs text-neutral-400 backdrop-blur">
        {entries.length} Component{entries.length === 1 ? '' : 's'}
      </div>
    </div>
  )
}

function noteStorageKey(slug) {
  return `component-lab:notes:${slug}`
}

function QuickNotes({ slug }) {
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
        {savedAt && <span className="text-xs text-neutral-600">Saved</span>}
      </div>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Scratch thoughts, todos, what you'll do next..."
        rows={8}
        className="mt-2 w-full resize-y rounded-lg border border-neutral-800 bg-neutral-900/40 p-3 text-sm text-neutral-200 placeholder:text-neutral-600 focus:border-neutral-700 focus:outline-none"
      />
      <p className="mt-1.5 text-xs text-neutral-600">
        Saved locally in this browser only — separate from notes.md.
      </p>
    </div>
  )
}

function DetailView({ entry, onBack }) {
  const { slug, name, description, tags, component: ActiveComponent } = entry

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row">
        <div className="lg:w-72 lg:flex-none">
          <button
            onClick={onBack}
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            ← Back
          </button>

          <h1 className="mt-6 text-lg font-semibold tracking-tight">{name}</h1>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">{description}</p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <QuickNotes slug={slug} />
        </div>

        <div className="flex flex-1 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/30 p-10">
          {ActiveComponent ? <ActiveComponent /> : <p className="text-sm text-neutral-500">Component not found.</p>}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [activeSlug, setActiveSlug] = useState(null)
  const activeEntry = entries.find((e) => e.slug === activeSlug)

  if (activeEntry) {
    return <DetailView entry={activeEntry} onBack={() => setActiveSlug(null)} />
  }

  return <IndexGrid onSelect={setActiveSlug} />
}
