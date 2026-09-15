// Loads the markdown breakdowns from /breakdown at the project root and maps
// each one to its component's slug. Filenames in /breakdown don't match the
// numbered folder slugs 1:1 (they were written before the folder naming
// convention existed), so that mapping is kept explicit here rather than
// guessed from string similarity.
const breakdownModules = import.meta.glob('../breakdown/*.md', { eager: true, query: '?raw', import: 'default' })

function getBreakdown(filename) {
  return breakdownModules[`../breakdown/${filename}.md`] ?? ''
}

const slugToFile = {
  '001-toggle-switch': 'Toggle Switch',
  '002-tab-switcher': 'Tab switcher',
  '003-accordion-faq': 'Accordion',
  '004-tooltip-follow-cursor': 'Tooltip',
  '005-like-heart-button': 'Like Button',
  '006-skeleton-loader': 'Skeleton Loader',
  '007-toast-notification': 'Toast',
  '008-drawer-modal': 'Drawer Modal',
  '009-dropdown-menu': 'Dropdown Menu',
  '010-drag-reorder-list': 'Drag Reorder',
  '011-image-gallery-layout': 'Image gallery',
  '012-progress-stepper': 'Progress Stepper',
  '013-segmented-control': 'Segmented control',
  '014-card-expand-detail': 'Card that expands',
}

const INDEX_FILE = 'Index of learning react one component at a time'

export function getLessonContent(slug) {
  if (slug === 'index') return getBreakdown(INDEX_FILE)
  const file = slugToFile[slug]
  return file ? getBreakdown(file) : ''
}

export function hasLesson(slug) {
  return slug === 'index' || Boolean(slugToFile[slug])
}

// Ordered list for the lesson sidebar: Index first, then every component in
// day order. `entries` (from App.jsx) already carries day/name per slug.
export function buildLessonList(entries) {
  return [
    { slug: 'index', day: null, name: 'Index' },
    ...entries.map(({ slug, day, name }) => ({ slug, day, name })),
  ]
}

// Grouped by what you're learning, not build order — mirrors the "Index"
// breakdown's own category structure. A category item is either a bare slug,
// or { slug, label } when the same build is being revisited under a different
// name for a different lesson (e.g. Drawer Modal shown again as "Modal" under
// Component Architecture — same code, different concept being studied).
const CATEGORY_DEFS = [
  {
    title: '01 — State & Rendering',
    items: ['001-toggle-switch', '002-tab-switcher', '003-accordion-faq'],
  },
  {
    title: '02 — Interaction',
    items: [
      '004-tooltip-follow-cursor',
      '005-like-heart-button',
      '007-toast-notification',
      '020-rating-stars',
      '018-password-strength-meter',
    ],
  },
  {
    title: '03 — Effects & Browser APIs',
    items: ['006-skeleton-loader', '008-drawer-modal', '019-copy-to-clipboard'],
  },
  {
    title: '04 — Data & Lists',
    items: ['009-dropdown-menu', '010-drag-reorder-list', '011-image-gallery-layout'],
  },
  {
    title: '05 — Layout & Motion',
    items: [
      '012-progress-stepper',
      '013-segmented-control',
      '014-card-expand-detail',
      '015-swipeable-card-stack',
      '017-draggable-bottom-sheet',
      '016-pull-to-refresh',
    ],
  },
  {
    title: '06 — Component Architecture',
    items: [
      { slug: '008-drawer-modal', label: 'Modal' },
      { slug: '009-dropdown-menu', label: 'Controlled Dropdown' },
    ],
  },
]

export function buildLessonCategories(entries) {
  const bySlug = Object.fromEntries(entries.map((entry) => [entry.slug, entry]))

  return CATEGORY_DEFS.map(({ title, items }) => ({
    title,
    items: items
      .map((item) => {
        const ref = typeof item === 'string' ? { slug: item } : item
        const entry = bySlug[ref.slug]
        if (!entry) return null
        return { slug: entry.slug, day: entry.day, name: ref.label ?? entry.name }
      })
      .filter(Boolean),
  }))
}
