import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getLessonContent, hasLesson } from '../../lessons.js'

const markdownComponents = {
  h1: ({ children }) => (
    <h1 className="mb-4 mt-8 text-2xl font-semibold text-neutral-900 first:mt-0 dark:text-neutral-100">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-3 mt-8 border-b border-neutral-200 pb-2 text-xl font-semibold text-neutral-900 dark:border-neutral-800 dark:text-neutral-100">
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

export default function LessonView({ lessonList }) {
  const { slug = 'index' } = useParams()
  const content = getLessonContent(slug)
  const current = lessonList.find((l) => l.slug === slug)
  const isIndex = slug === 'index'

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto flex min-h-screen max-w-6xl gap-10 px-6 py-16">
        <div className="hidden w-56 flex-none lg:block">
          <div className="sticky top-16">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">Lessons</p>
            <nav className="mt-3 flex flex-col gap-0.5">
              {lessonList.map((lesson) => {
                const isActive = lesson.slug === slug
                return (
                  <Link
                    key={lesson.slug}
                    to={lesson.slug === 'index' ? '/lessons' : `/lessons/${lesson.slug}`}
                    className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900/60 dark:hover:text-neutral-200'
                    }`}
                  >
                    {lesson.day && <span className="mr-1.5 font-mono text-xs text-[#3fb950]/80 dark:text-[#3fb950]/60">{lesson.day}</span>}
                    {lesson.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <Link
            to={isIndex ? '/' : `/components/${slug}`}
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            ← Back to {isIndex ? 'Component Lab' : current?.name ?? 'component'}
          </Link>

          <article className="mt-6">
            {hasLesson(slug) && content ? (
              <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            ) : (
              <p className="text-sm text-neutral-500">No lesson breakdown yet for this component.</p>
            )}
          </article>
        </div>
      </div>
    </div>
  )
}
