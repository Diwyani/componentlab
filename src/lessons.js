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
