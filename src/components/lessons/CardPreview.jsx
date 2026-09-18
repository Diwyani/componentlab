import { useEffect, useRef, useState } from 'react'

const AUTOPLAY = new Set(['001', '005', '010', '011', '012', '014'])

function fire(el, type, init = {}) {
  el.dispatchEvent(new MouseEvent(type, { bubbles: true, cancelable: true, ...init }))
}

function triggerByDay(day, root) {
  if (!root) return
  const buttons = [...root.querySelectorAll('button')]
  if (day === '004') {
    const target = root.firstElementChild?.firstElementChild ?? root.firstElementChild
    if (!target) return
    const r = target.getBoundingClientRect()
    fire(target, 'mouseover', { clientX: r.left + r.width / 2, clientY: r.top + r.height / 2 })
    fire(target, 'mousemove', { clientX: r.left + r.width / 2, clientY: r.top + r.height / 2 })
    return
  }
  if (day === '020') {
    const stars = root.querySelectorAll('svg')
    const star = stars[3]?.closest('button, span, div') ?? stars[3]
    if (star) fire(star, 'mouseover')
    return
  }
  if (day === '018') {
    const input = root.querySelector('input')
    if (!input) return
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set
    setter.call(input, 'Lab#2026x')
    input.dispatchEvent(new Event('input', { bubbles: true }))
    return
  }
  if (buttons.length) buttons[buttons.length > 1 && day === '002' ? 1 : 0].click()
}

export default function CardPreview({ day, Component }) {
  const [run, setRun] = useState(0)
  const [hovered, setHovered] = useState(false)
  const rootRef = useRef(null)
  const wrapRef = useRef(null)
  const autoPlay = AUTOPLAY.has(day)

  useEffect(() => {
    const card = wrapRef.current?.closest('a')
    if (!card) return
    const enter = () => {
      setHovered(true)
      setRun((n) => n + 1)
    }
    const leave = () => setHovered(false)
    card.addEventListener('mouseenter', enter)
    card.addEventListener('mouseleave', leave)
    return () => {
      card.removeEventListener('mouseenter', enter)
      card.removeEventListener('mouseleave', leave)
    }
  }, [])

  useEffect(() => {
    if (!hovered || autoPlay) return
    const t = setTimeout(() => triggerByDay(day, rootRef.current), 350)
    return () => clearTimeout(t)
  }, [run, hovered, autoPlay, day])

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{ transform: 'translateZ(0)' }}
      >
        <div
          ref={rootRef}
          key={run}
          style={{ zoom: 0.7 }}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          <Component autoPlay={hovered && autoPlay} />
        </div>
      </div>
    </div>
  )
}
