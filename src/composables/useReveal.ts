import type { Directive } from 'vue'
import { animate, inView } from 'motion'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** v-reveal="delaySeconds?": fades and lifts an element in once when it scrolls into view. */
export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (prefersReducedMotion()) return
    el.style.opacity = '0'
    inView(
      el,
      () => {
        animate(
          el,
          { opacity: [0, 1], transform: ['translateY(22px)', 'translateY(0px)'] },
          { duration: 0.7, delay: binding.value ?? 0, ease: [0.22, 1, 0.36, 1] },
        ).finished.then(() => {
          el.style.opacity = '1'
          el.style.transform = ''
        })
      },
      { amount: 0.15 },
    )
  },
}
