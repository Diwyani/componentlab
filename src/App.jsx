import { useState } from 'react'
import ToggleSwitch from './components/001-toggle-switch/ToggleSwitch.jsx'

// Register each day's component here manually — add one import + one map entry per new day.
const componentMap = {
  '001-toggle-switch': ToggleSwitch,
}

// Auto-discovers every folder under src/components/ (e.g. "001-toggle-switch")
// and lists it as a link. Add a new folder and it shows up here automatically.
const notesModules = import.meta.glob('./components/*/notes.md', { eager: true, as: 'raw' })

const entries = Object.keys(notesModules)
  .map((path) => {
    const slug = path.split('/')[2] // "001-toggle-switch"
    const [day, ...nameParts] = slug.split('-')
    const name = nameParts.join(' ').replace(/\b\w/g, (c) => c.toUpperCase())
    return { slug, day, name }
  })
  .sort((a, b) => a.day.localeCompare(b.day))

export default function App() {
  const [activeSlug, setActiveSlug] = useState(null)

  if (activeSlug) {
    const ActiveComponent = componentMap[activeSlug]
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <button
            onClick={() => setActiveSlug(null)}
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            ← Back
          </button>
          <div className="mt-8">
            {ActiveComponent ? <ActiveComponent /> : <p className="text-sm text-neutral-500">Component not found.</p>}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-2xl font-semibold tracking-tight">Component Lab</h1>
        <p className="mt-2 text-sm text-neutral-400">
          Daily component practice — Framer Motion → GSAP → Three.js
        </p>

        <ul className="mt-10 divide-y divide-neutral-800 border-t border-b border-neutral-800">
          {entries.map(({ slug, day, name }) => (
            <li key={slug}>
              <button
                onClick={() => setActiveSlug(slug)}
                className="flex w-full items-center justify-between py-4 text-sm transition-colors hover:text-white"
              >
                <span className="text-neutral-300">{name}</span>
                <span className="font-mono text-xs text-neutral-500">Day {day}</span>
              </button>
            </li>
          ))}
        </ul>

        {entries.length === 0 && (
          <p className="mt-10 text-sm text-neutral-500">
            No components yet — add one under src/components/.
          </p>
        )}
      </div>
    </div>
  )
}
