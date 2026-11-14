import { onBeforeUnmount, onMounted, ref } from 'vue'

type Theme = 'light' | 'dark'
const theme = ref<Theme>(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
const storageWarning = ref(document.documentElement.dataset.themeStorageUnavailable === 'true')

function applyTheme(value: Theme) {
  theme.value = value
  document.documentElement.dataset.theme = value
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', value === 'dark' ? '#171E28' : '#FFF8EC')
}

export function useTheme() {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  function onSystemChange() {
    if (document.documentElement.dataset.themePreference === 'system') applyTheme(media.matches ? 'dark' : 'light')
  }
  function onStorage(event: StorageEvent) {
    if (event.key !== 'portfolio-theme') return
    const preference = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : 'system'
    document.documentElement.dataset.themePreference = preference
    applyTheme(preference === 'system' ? (media.matches ? 'dark' : 'light') : preference)
  }
  function toggleTheme() {
    const next = theme.value === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.themePreference = next
    applyTheme(next)
    try {
      localStorage.setItem('portfolio-theme', next)
      storageWarning.value = false
    } catch {
      storageWarning.value = true
    }
  }
  onMounted(() => {
    media.addEventListener('change', onSystemChange)
    window.addEventListener('storage', onStorage)
  })
  onBeforeUnmount(() => {
    media.removeEventListener('change', onSystemChange)
    window.removeEventListener('storage', onStorage)
  })
  return { theme, toggleTheme, storageWarning }
}
