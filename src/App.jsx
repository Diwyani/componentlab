import { Fragment, useEffect, useState } from 'react'

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

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/diwyani-vajpayee-9b2270213/',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z" />
      </svg>
    ),
  },
  {
    label: 'Twitter/X',
    href: 'https://x.com/DiwyaniVajpayee',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.6 22H1.5l8.1-9.3L1 2h7.1l4.9 6.1zm-1.2 18h1.9L6.4 4H4.4z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:diwyani.vajpayee@gmail.com',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
]

function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(({ label, href, external, icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-neutral-400 transition-colors hover:text-neutral-100"
        >
          {icon}
        </a>
      ))}
    </div>
  )
}

const filters = [
  { label: 'All', tag: null },
  { label: 'Framer Motion', tag: 'framer motion' },
  { label: 'GSAP', tag: 'gsap' },
  { label: 'Three.js', tag: 'three.js' },
]

function IndexGrid({ onSelect }) {
  const [activeFilter, setActiveFilter] = useState(filters[0].tag)

  const filteredEntries =
    activeFilter === null ? entries : entries.filter((e) => e.tags.some((t) => t.toLowerCase() === activeFilter))

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-2xl font-semibold tracking-tight">Component Lab</h1>
        <p className="mt-2 text-sm text-neutral-400">
          Daily component practice — Framer Motion → GSAP → Three.js
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => setActiveFilter(filter.tag)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                activeFilter === filter.tag
                  ? 'bg-neutral-100 text-neutral-950'
                  : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filteredEntries.map(({ slug, day, name, description, tags }, index) => (
            <Fragment key={slug}>
              {index > 0 && index % 7 === 0 && (
                <div className="col-span-full my-2 border-t border-neutral-800" />
              )}
              <button
                onClick={() => onSelect(slug)}
                className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 text-left transition-colors hover:border-neutral-700 hover:bg-neutral-900"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-neutral-100">{name}</h2>
                  <span className="font-mono text-xs text-[#3fb950]/60">{day}</span>
                </div>
                <p className="mt-2 text-sm text-neutral-400">{description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </button>
            </Fragment>
          ))}
        </div>

        {filteredEntries.length === 0 && (
          <p className="mt-10 text-sm text-neutral-500">
            No components match this filter yet.
          </p>
        )}
      </div>

      <div className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-2 text-xs text-neutral-400 backdrop-blur">
        <span>
          {filteredEntries.length} Component{filteredEntries.length === 1 ? '' : 's'}
        </span>
        <span className="h-3.5 w-px bg-neutral-700" />
        <SocialLinks />
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
