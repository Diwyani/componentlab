import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowRight, ChevronRight } from 'lucide-react'

export function isStructuredLesson(markdown) {
  return /^## How it works\s*$/m.test(markdown)
}

function splitBy(markdown, level) {
  const marker = `${'#'.repeat(level)} `
  const parts = []
  let current = null
  let inFence = false
  for (const line of markdown.split('\n')) {
    if (line.startsWith('```')) inFence = !inFence
    if (!inFence && line.startsWith(marker)) {
      current = { title: line.slice(marker.length).trim(), body: [] }
      parts.push(current)
    } else if (current) {
      current.body.push(line)
    }
  }
  return parts.map((p) => ({ title: p.title, body: p.body.join('\n').trim() }))
}

function splitCode(body) {
  const match = body.match(/```[\s\S]*?```/)
  if (!match) return { prose: body, code: '' }
  return {
    prose: (body.slice(0, match.index) + body.slice(match.index + match[0].length)).trim(),
    code: match[0].replace(/^```\w*\n?/, '').replace(/```$/, '').trimEnd(),
  }
}

function CodeBlock({ code }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300">
      <code>{code}</code>
    </pre>
  )
}

function StepTitle({ title }) {
  const match = title.match(/^(\d+)\s+(.*)$/)
  return (
    <div className="flex items-baseline gap-3">
      {match && (
        <span className="text-2xl leading-none text-[#3fb950]/80" style={{ fontFamily: '"Dokdo", cursive' }}>
          {match[1]}
        </span>
      )}
      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">{match ? match[2] : title}</h3>
    </div>
  )
}

function HowItWorks({ body, md }) {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Each step on the left, only the code it's about on the right.
      </p>
      {splitBy(body, 3).map((step) => {
        const { prose, code } = splitCode(step.body)
        return (
          <div key={step.title} className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div>
              <StepTitle title={step.title} />
              <div className="mt-2">{md(prose)}</div>
            </div>
            {code && <div className="min-w-0 lg:pt-8">{<CodeBlock code={code} />}</div>}
          </div>
        )
      })}
    </div>
  )
}

function BelongsTo({ body, md }) {
  const rows = body
    .split('\n')
    .map((line) => line.match(/^-\s+\*\*(.+?)\*\*:\s*(.*)$/))
    .filter(Boolean)
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
      {rows.map(([, label, rest]) => (
        <div
          key={label}
          className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-neutral-200 px-4 py-3 last:border-b-0 dark:border-neutral-800"
        >
          <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{label}</span>
          <div className="text-sm text-neutral-600 dark:text-neutral-400 [&_p]:my-0">{md(rest)}</div>
        </div>
      ))}
    </div>
  )
}

function Questions({ body, md }) {
  return (
    <div className="flex flex-col gap-2">
      {splitBy(body, 3).map((q) => (
        <details
          key={q.title}
          className="group rounded-xl border border-neutral-200 px-4 py-3 dark:border-neutral-800"
        >
          <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 [&::-webkit-details-marker]:hidden">
            <ChevronRight className="h-4 w-4 flex-none text-neutral-500 transition-transform group-open:rotate-90" />
            {md(q.title, true)}
          </summary>
          <div className="mt-2 pl-6">{md(q.body)}</div>
        </details>
      ))}
    </div>
  )
}

function ReadNext({ body, next }) {
  const links = [...body.matchAll(/^-\s+\[(.+?)\]\((.+?)\)/gm)].map((m) => ({ label: m[1], href: m[2] }))
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {next && (
        <Link
          to={`/lessons/${next.slug}`}
          className="group flex flex-col justify-between rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-white/25"
        >
          <span className="text-xs uppercase tracking-wide text-neutral-500">Next component</span>
          <span className="mt-3 flex items-center justify-between text-sm font-medium text-neutral-900 dark:text-neutral-100">
            <span>
              <span className="mr-1.5 text-[#3fb950]/80" style={{ fontFamily: '"Dokdo", cursive' }}>
                {next.day}
              </span>
              {next.name}
            </span>
            <ArrowRight className="h-4 w-4 text-neutral-500 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      )}
      {links.length > 0 && (
        <div className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
          <span className="text-xs uppercase tracking-wide text-neutral-500">Concepts to read</span>
          <ul className="mt-3 flex flex-col gap-1.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-2 hover:text-neutral-950 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function StructuredLesson({ markdown, components, slugify, next }) {
  const md = (text, inline = false) => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={inline ? { ...components, p: ({ children }) => <span>{children}</span> } : components}
    >
      {text}
    </ReactMarkdown>
  )

  return (
    <div className="flex flex-col">
      {splitBy(markdown, 2).map(({ title, body }) => {
        let content
        if (title === 'How it works') content = <HowItWorks body={body} md={md} />
        else if (title === 'What belongs to what') content = <BelongsTo body={body} md={md} />
        else if (title === 'Things to understand') content = <Questions body={body} md={md} />
        else if (title === 'Read next') content = <ReadNext body={body} next={next} />
        else content = md(body)

        return (
          <section key={title} className="mt-12 first:mt-0">
            <h2
              id={slugify(title)}
              className="mb-4 scroll-mt-20 text-xs font-medium uppercase tracking-wide text-neutral-500"
            >
              {title}
            </h2>
            {content}
          </section>
        )
      })}
    </div>
  )
}
