import { onBeforeUnmount, onMounted, ref } from 'vue'

/** Tracks which section is currently under the sticky header. */
export function useActiveSection(ids: string[]) {
  const active = ref(ids[0] ?? '')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) active.value = entry.target.id
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer?.observe(el)
    })
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { active }
}
