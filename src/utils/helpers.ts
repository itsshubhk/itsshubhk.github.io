/** Resolve a path in /public against the configured Vite base (works on any host). */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const isPlaceholder = (value: string): boolean =>
  !value.trim() || /your-|your\.|example\.com/i.test(value)
