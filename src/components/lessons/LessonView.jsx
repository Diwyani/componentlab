import { useEffect, useRef, useState, Children } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Star } from 'lucide-react'
import ComponentShowcase from '../showcase/ComponentShowcase.jsx'
import { getLessonContent, hasLesson } from '../../lessons.js'

function textFromChildren(children) {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === 'string') return child
      if (child?.props?.children) return textFromChildren(child.props.children)
      return ''
    })
    .join('')
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function stripInlineMarkdown(text) {
  return text
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim()
}

// Parsed straight from the raw markdown (not the rendered tree) so the TOC is
// ready before ReactMarkdown even renders — same slugify rule as the h2
// renderer below keeps the #hash targets in sync.
function extractHeadings(markdown) {
  const headings = []
  for (const line of markdown.split('\n')) {
    const match = line.match(/^##\s+(.+)$/)
    if (match) {
      const text = stripInlineMarkdown(match[1])
      headings.push({ id: slugify(text), text })
    }
  }
  return headings
}

const markdownComponents = {
  h1: ({ children }) => (
    <h1 className="mb-4 mt-8 text-2xl font-semibold text-neutral-900 first:mt-0 dark:text-neutral-100">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2
      id={slugify(textFromChildren(children))}
      className="mb-3 mt-8 scroll-mt-20 border-b border-neutral-200 pb-2 text-xl font-semibold text-neutral-900 dark:border-neutral-800 dark:text-neutral-100"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-2 mt-6 text-base font-semibold text-neutral-900 dark:text-neutral-100">{children}</h3>
  ),
  p: ({ children }) => <p className="my-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{children}</p>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-700 underline decoration-neutral-300 underline-offset-2 hover:text-neutral-950 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-white"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="my-3 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">{children}</ul>,
  ol: ({ children }) => <ol className="my-3 list-decimal space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-2 border-neutral-300 pl-4 text-sm italic text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-neutral-200 dark:border-neutral-800" />,
  strong: ({ children }) => <strong className="font-semibold text-neutral-900 dark:text-neutral-100">{children}</strong>,
  table: ({ children }) => (
    <div className="my-4 overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-neutral-100 dark:bg-neutral-900/60">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-neutral-200 px-3 py-2 font-medium text-neutral-800 dark:border-neutral-800 dark:text-neutral-200">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-neutral-200/60 px-3 py-2 text-neutral-700 dark:border-neutral-800/60 dark:text-neutral-300">
      {children}
    </td>
  ),
  pre: ({ children }) => (
    <pre className="my-4 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300">
      {children}
    </pre>
  ),
  code: ({ className, children }) => {
    const isBlock = /language-/.test(className || '')
    if (isBlock) return <code className={className}>{children}</code>
    return (
      <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-[0.85em] text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
        {children}
      </code>
    )
  },
}

function LessonLink({ slug, day, name, isActive }) {
  return (
    <Link
      to={slug === 'index' ? '/lessons' : `/lessons/${slug}`}
      className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
        isActive
          ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100'
          : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900/60 dark:hover:text-neutral-200'
      }`}
    >
      {day && (
        <span
          className="mr-1.5 text-sm text-[#3fb950]/80 dark:text-[#3fb950]/60"
          style={{ fontFamily: '"Dokdo", cursive' }}
        >
          {day}
        </span>
      )}
      {name}
    </Link>
  )
}

export default function LessonView({ lessonList, lessonCategories, entries = [] }) {
  const { slug = 'index' } = useParams()
  const content = getLessonContent(slug)
  const current = lessonList.find((l) => l.slug === slug)
  const entry = entries.find((e) => e.slug === slug)
  const isIndex = slug === 'index'
  const articleRef = useRef(null)
  const [activeId, setActiveId] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [query, setQuery] = useState('')
  const headings = extractHeadings(content)

  // Filters each category's items by name/slug — categories with zero
  // remaining matches are dropped entirely rather than shown empty.
  const normalizedQuery = query.trim().toLowerCase()
  const filteredCategories = normalizedQuery
    ? lessonCategories
        .map((category) => ({
          ...category,
          items: category.items.filter(
            (item) => item.name.toLowerCase().includes(normalizedQuery) || item.slug.includes(normalizedQuery)
          ),
        }))
        .filter((category) => category.items.length > 0)
    : lessonCategories

  useEffect(() => {
    setActiveId('')
    // A scroll-position check rather than IntersectionObserver: an instant
    // jump (scrollbar drag, "scroll amount" beyond one screen) can skip a
    // heading between two observer checks and leave activeId stuck, since
    // the observer only reports whether a target is *currently* intersecting
    // — not every heading it passed through to get there.
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)) : 0)

      const elements = articleRef.current ? Array.from(articleRef.current.querySelectorAll('h2[id]')) : []
      let current = ''
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= 120) current = el.id
      }
      setActiveId(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [slug, content])

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="fixed left-0 top-0 z-50 h-0.5 w-full bg-transparent">
        <div
          className="h-full bg-neutral-900 dark:bg-neutral-100"
          style={{ width: `${scrollProgress}%`, transition: 'width 100ms linear' }}
        />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl gap-8 px-6 py-16">
        <div className="hidden w-56 flex-none border-r border-neutral-200 pr-8 dark:border-neutral-800 lg:block">
          <div className="sticky top-16">
            <nav className="flex flex-col gap-0.5">
              <LessonLink slug="index" day={null} name="Index" isActive={isIndex} />
            </nav>

            <p className="mt-3 text-xs leading-relaxed text-neutral-400 dark:text-neutral-600">
              Grouped by concept, not day number: the numbers still mark build order.
            </p>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search lessons..."
              className="mt-4 w-full rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-600"
            />

            {filteredCategories.length === 0 && (
              <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-600">No lessons match "{query}".</p>
            )}

            {filteredCategories.map((category) => (
              <div key={category.title} className="mt-5">
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">{category.title}</p>
                <nav className="mt-2 flex flex-col gap-0.5">
                  {category.items.map((lesson) => (
                    <LessonLink
                      key={`${category.title}-${lesson.slug}-${lesson.name}`}
                      slug={lesson.slug}
                      day={lesson.day}
                      name={lesson.name}
                      isActive={lesson.slug === slug}
                    />
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <Link to="/" className="transition-colors hover:text-neutral-900 dark:hover:text-white">
              Component Lab
            </Link>
            <span>→</span>
            <Link to="/lessons" className="transition-colors hover:text-neutral-900 dark:hover:text-white">
              Lessons
            </Link>
            {!isIndex && (
              <>
                <span>→</span>
                <span className="text-neutral-900 dark:text-neutral-100">{current?.name ?? 'Component'}</span>
              </>
            )}
          </nav>

          {!isIndex && entry?.prerequisites?.length > 0 && (
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">Builds on:</span>{' '}
              {entry.prerequisites.join(', ')}
            </p>
          )}

          {!isIndex && entry?.component && (
            <div className="mt-6">
              <ComponentShowcase preview={<entry.component />} code={entry.source} language="jsx" />
            </div>
          )}

          <article ref={articleRef} className="mt-8">
            {hasLesson(slug) && content ? (
              <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            ) : (
              <p className="text-sm text-neutral-500">No lesson breakdown yet for this component.</p>
            )}
          </article>
        </div>

        {headings.length > 0 && (
          <div className="hidden w-48 flex-none border-l border-neutral-200 pl-8 dark:border-neutral-800 xl:block">
            <div className="sticky top-16">
              <a
                href="https://github.com/Diwyani/componentlab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3fb950]/80 transition-colors hover:text-[#3fb950]"
              >
                <Star className="h-4 w-4" />
                Star on GitHub
              </a>

              <p className="mt-5 text-xs font-medium uppercase tracking-wide text-neutral-500">On this page</p>
              <nav className="mt-2 flex flex-col gap-0.5 border-l border-neutral-200 dark:border-neutral-800">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`-ml-px border-l px-3 py-1 text-sm transition-colors ${
                      activeId === heading.id
                        ? 'border-neutral-900 font-medium text-neutral-900 dark:border-neutral-100 dark:text-neutral-100'
                        : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300'
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
