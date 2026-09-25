import { Fragment, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import ComponentShowcase from './components/showcase/ComponentShowcase.jsx'
import LessonView from './components/lessons/LessonView.jsx'
import ThemeToggle from './components/theme/ThemeToggle.jsx'
import AppLoader from './components/loader/AppLoader.jsx'
import CardPreview from './components/lessons/CardPreview.jsx'
import Tag from './components/lessons/Tag.jsx'
import QuickNotes from './components/lessons/QuickNotes.jsx'
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
    label: 'X',
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

const TOOLTIP_DELAY = 500

function SocialLinks() {
  const [active, setActive] = useState(null)
  const [warm, setWarm] = useState(false)
  const timer = useRef(null)

  function enter(label) {
    clearTimeout(timer.current)
    if (warm) {
      setActive(label)
      return
    }
    timer.current = setTimeout(() => {
      setActive(label)
      setWarm(true)
    }, TOOLTIP_DELAY)
  }

  function leaveAll() {
    clearTimeout(timer.current)
    setActive(null)
    setWarm(false)
  }

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <div className="flex items-center gap-3" onMouseLeave={leaveAll}>
      {socialLinks.map(({ label, href, external, icon }) => (
        <div key={label} className="relative flex" onMouseEnter={() => enter(label)}>
          <AnimatePresence>
            {active === label && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: warm ? 0.1 : 0.15 }}
                className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-md border border-neutral-200 bg-white px-2 py-1 text-[11px] text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
          <a
            href={href}
            aria-label={label}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="text-neutral-500 transition-all hover:text-neutral-900 hover:brightness-75 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:brightness-150"
          >
            {icon}
          </a>
        </div>
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
    <div className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-xs text-neutral-600 backdrop-blur transition-transform duration-200 hover:scale-105 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-400">
      <span className="flex items-center gap-1.5">
        <span className="text-base leading-none text-[#3fb950]" style={{ fontFamily: '"Dokdo", cursive' }}>
          •
        </span>
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
    <div
      className="relative min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.12)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]"
        style={{
          maskImage: 'radial-gradient(260px circle at var(--mx, -500px) var(--my, -500px), black, transparent)',
          WebkitMaskImage: 'radial-gradient(260px circle at var(--mx, -500px) var(--my, -500px), black, transparent)',
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-16">
        <div className="text-left">
          <div>
            <div className="max-w-xl">
            <p
              className="text-xs text-neutral-500 dark:text-neutral-400"
              style={{ fontFamily: '"Dokdo", cursive' }}
            >
              Learn on the go
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight">Component Lab</h1>

            <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              There's a real gap for designers who want to learn to code: most resources assume you're starting from
              zero or already deep in engineering, nothing in between. The best way to learn anything is to get your
              hands dirty: build things, get stuck, sob a little, figure it out.
            </p>
            </div>

            <div
              className="mt-4 flex flex-wrap items-center gap-5"
              style={{ fontFamily: '"Dokdo", cursive' }}
            >
              <a
                href="https://github.com/Diwyani/componentlab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-base font-semibold text-[#3fb950]/80 transition-colors hover:text-[#3fb950]"
              >
                <Star className="h-4 w-4" />
                Star on GitHub
              </a>
              <Link
                to="/lessons"
                className="text-base text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                See docs
              </Link>
            </div>
          </div>
        </div>

        <div id="components" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filteredEntries.map(({ slug, day, name, description, tags }, index) => (
            <Fragment key={slug}>
              {index > 0 && index % 7 === 0 && (
                <div
                  className="col-span-full my-2 h-px"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(to right, rgba(63,185,80,0.25) 0 14px, transparent 14px 24px)',
                  }}
                />
              )}
              <Link
                to={`/lessons/${slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 text-left transition-all hover:-translate-y-0.5 hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-white/25"
              >
                <div className="relative h-52 border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                  <span
                    className="absolute left-3 top-2 z-10 text-base text-[#3fb950]/80 dark:text-[#3fb950]/70"
                    style={{ fontFamily: '"Dokdo", cursive' }}
                  >
                    {day}
                  </span>
                  <CardPreview
                    day={day}
                    Component={entries.find((e) => e.slug === slug).component}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{name}</h2>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
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

// Keyed on pathname only, so the "On this page" #hash links (same path, new
// hash) still jump to their heading instead of being reset to the top.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <AppLoader>
      <ScrollToTop />
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
