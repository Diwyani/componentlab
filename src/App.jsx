import { Fragment, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import ComponentShowcase from './components/showcase/ComponentShowcase.jsx'
import LessonView from './components/lessons/LessonView.jsx'
import ThemeToggle from './components/theme/ThemeToggle.jsx'
import HeroShowcase from './components/hero/HeroShowcase.jsx'
import AppLoader from './components/loader/AppLoader.jsx'
import { buildLessonCategories, buildLessonList, hasLesson } from './lessons.js'

// Auto-discovers every folder under src/components/ — each folder's .jsx file
// (the component) and meta.js file (day/name/description/tags) are matched
// by folder slug. Add a new folder with both files and it shows up here
// automatically, with zero edits to this file. Scoped to numbered day folders
// (001-toggle-switch, etc.) so shared helpers like components/showcase/ aren't
// swept in as if they were a day's component.
const componentModules = import.meta.glob('./components/[0-9]*/*.jsx', { eager: true })
const sourceModules = import.meta.glob('./components/[0-9]*/*.jsx', { eager: true, query: '?raw', import: 'default' })
const metaModules = import.meta.glob('./components/[0-9]*/meta.js', { eager: true })

const entries = Object.keys(metaModules)
  .map((metaPath) => {
    const slug = metaPath.split('/')[2] // "001-toggle-switch"
    const componentPath = Object.keys(componentModules).find((p) => p.split('/')[2] === slug)
    return {
      slug,
      ...metaModules[metaPath].meta,
      component: componentPath ? componentModules[componentPath].default : null,
      source: componentPath ? sourceModules[componentPath] : '',
    }
  })
  .sort((a, b) => a.day.localeCompare(b.day))

// A 2-stud brick drawn as a literal pixel grid (each cell its own <rect>,
// with a small gap between cells) rather than a smooth icon shape, so it
// actually reads as "made of pixels" at small sizes.
const LEGO_PIXELS = [
  [1, 0], [2, 0], [4, 0], [5, 0],
  [1, 1], [2, 1], [4, 1], [5, 1],
  [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2],
  [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3],
  [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4],
]

function LegoPixelIcon({ className = 'h-7 w-7' }) {
  return (
    <motion.svg
      viewBox="0 0 6 5"
      className={className}
      aria-hidden="true"
      // A slow idle bob so it never looks static, plus a snappier wiggle +
      // pop on hover — two different motions, not the same loop sped up.
      animate={{ y: [0, -2, 0], rotate: [0, -3, 0, 3, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{
        rotate: [0, -12, 10, -6, 0],
        scale: 1.15,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }}
    >
      {LEGO_PIXELS.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x + 0.08} y={y + 0.08} width={0.84} height={0.84} fill="#3fb950" />
      ))}
    </motion.svg>
  )
}

function Tag({ children }) {
  return (
    <span className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
      {children}
    </span>
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
          className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
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

// Mounted once at the app root (outside <Routes>) so it's the same bar on
// every page, not a per-page copy — the count is `entries.length` (the
// real total), not anything filtered, so it never fluctuates.
function BottomBar() {
  return (
    <div className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-xs text-neutral-600 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-400">
      <span>
        {entries.length} Component{entries.length === 1 ? '' : 's'}
      </span>
      <span className="h-3.5 w-px bg-neutral-300 dark:bg-neutral-700" />
      <SocialLinks />
      <span className="h-3.5 w-px bg-neutral-300 dark:bg-neutral-700" />
      <ThemeToggle />
    </div>
  )
}

function IndexGrid() {
  const [activeFilter, setActiveFilter] = useState(filters[0].tag)

  const filteredEntries =
    activeFilter === null ? entries : entries.filter((e) => e.tags.some((t) => t.toLowerCase() === activeFilter))

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <LegoPixelIcon className="h-7 w-7" />
              <h1 className="text-2xl font-semibold tracking-tight">Component Lab</h1>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Why Component Lab?</h2>
              <p className="mt-2 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                Learn on the go, learn by doing.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                There's a real gap for designers who want to learn to code: most resources assume you're starting
                from zero or already deep in engineering, nothing in between. The best way to learn anything is to
                get your hands dirty: build things, get stuck, sob a little, figure it out.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                If vibe-coding alone isn't cutting it and you want to actually understand what's happening, this is
                for you. Web only, for now: React, Framer Motion.
              </p>
              <p className="mt-4 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                This project is an attempt to:
              </p>
              <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                <li>Dissect the logic behind the code: not just copy it, understand why it works</li>
                <li>Show what belongs where: what's Tailwind, what's React, what's plain JavaScript</li>
                <li>Point you toward what to learn next to build a stronger foundation</li>
                <li>
                  Stay alive: this is a living document, not a finished one. Feedback and questions welcome on
                  Twitter or by email.
                </li>
              </ol>
            </div>
          </div>

          <div>
            <HeroShowcase />

            <div className="mt-4 flex flex-wrap items-center gap-5">
              <a
                href="https://github.com/Diwyani/componentlab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3fb950]/80 transition-colors hover:text-[#3fb950]"
              >
                <Star className="h-4 w-4" />
                Star on GitHub
              </a>
              <Link
                to="/lessons"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Learn lesson
              </Link>
            </div>
          </div>
        </div>

        <div id="components" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filteredEntries.map(({ slug, day, name, description, tags }, index) => (
            <Fragment key={slug}>
              {index > 0 && index % 7 === 0 && (
                <div className="col-span-full my-2 border-t border-neutral-200 dark:border-neutral-800" />
              )}
              <Link
                to={`/components/${slug}`}
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-left transition-colors hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{name}</h2>
                  <span className="font-mono text-xs text-[#3fb950]/80 dark:text-[#3fb950]/60">{day}</span>
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Link>
            </Fragment>
          ))}
        </div>

        {filteredEntries.length === 0 && (
          <p className="mt-10 text-sm text-neutral-500">
            No components match this filter yet.
          </p>
        )}
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

function DetailView({ entry }) {
  const { slug, name, description, tags, component: ActiveComponent, source } = entry

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row">
        <div className="lg:w-72 lg:flex-none">
          <Link
            to="/"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            ← Back
          </Link>

          <h1 className="mt-6 text-lg font-semibold tracking-tight">{name}</h1>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          {hasLesson(slug) && (
            <Link
              to={`/lessons/${slug}`}
              className="mt-4 inline-flex items-center gap-1 text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-2 hover:text-neutral-950 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-white"
            >
              View lesson breakdown →
            </Link>
          )}

          <QuickNotes slug={slug} />
        </div>

        <div className="min-w-0 flex-1">
          {ActiveComponent ? (
            <ComponentShowcase preview={<ActiveComponent />} code={source} language="jsx" />
          ) : (
            <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 p-10 dark:border-neutral-800 dark:bg-neutral-900/30">
              <p className="text-sm text-neutral-500">Component not found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function DetailViewRoute() {
  const { slug } = useParams()
  const entry = entries.find((e) => e.slug === slug)

  if (!entry) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <div className="text-center">
          <p className="text-sm text-neutral-500">No component at this link.</p>
          <Link
            to="/"
            className="mt-3 inline-block text-sm text-neutral-700 underline hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
          >
            ← Back to Component Lab
          </Link>
        </div>
      </div>
    )
  }

  return <DetailView entry={entry} />
}

const lessonList = buildLessonList(entries)
const lessonCategories = buildLessonCategories(entries)

export default function App() {
  return (
    <AppLoader>
      <Routes>
        <Route path="/" element={<IndexGrid />} />
        <Route path="/components/:slug" element={<DetailViewRoute />} />
        <Route
          path="/lessons"
          element={<LessonView lessonList={lessonList} lessonCategories={lessonCategories} entries={entries} />}
        />
        <Route
          path="/lessons/:slug"
          element={<LessonView lessonList={lessonList} lessonCategories={lessonCategories} entries={entries} />}
        />
      </Routes>
      <BottomBar />
    </AppLoader>
  )
}
