<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Menu, X, FileText } from 'lucide-vue-next'
import { profile } from '@/data/profile'
import { useActiveSection } from '@/composables/useActiveSection'
import { useResume } from '@/composables/useResume'
import BaseButton from '@/components/ui/BaseButton.vue'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
]

const { active } = useActiveSection([...links.map((l) => l.id), 'resume', 'contact'])
const { url: resumeUrl, available } = useResume()

const open = ref(false)
const scrolled = ref(false)

const onScroll = () => (scrolled.value = window.scrollY > 12)
const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 transition duration-300"
    :class="scrolled || open ? 'border-b border-line bg-cream/95 backdrop-blur-sm' : 'border-b border-transparent'"
  >
    <a
      href="#main"
      class="absolute left-4 top-[-4rem] z-50 rounded-full bg-ink px-4 py-2 text-white focus:top-3"
    >
      Skip to content
    </a>
    <div class="container-page flex h-[4.5rem] items-center justify-between gap-4">
      <a
        href="#home"
        class="flex items-center gap-2 whitespace-nowrap text-[0.6rem] font-bold tracking-[0.1em] text-ink no-underline min-[360px]:text-xs sm:gap-3 sm:text-sm"
        aria-label="Shubham Khare, back to top"
      >
        <span aria-hidden="true" class="grid h-9 w-9 shrink-0 place-items-center rounded-[0.85rem] border border-ink/10 bg-sky font-display text-lg font-semibold tracking-normal text-on-accent shadow-[0_3px_0_rgb(168_216_240/0.3)]">sk.</span>
        {{ profile.brand }}
      </a>

      <nav aria-label="Primary" class="hidden items-center gap-1 lg:flex">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="relative rounded-full px-3 py-3 text-sm font-medium no-underline transition hover:text-ink"
          :class="active === link.id ? 'text-ink after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-coral' : 'text-ink-soft'"
          :aria-current="active === link.id ? 'true' : undefined"
        >
          {{ link.label }}
        </a>
        <BaseButton
          class="ml-2"
          variant="coral"
          size="sm"
          :href="available ? resumeUrl : '#resume'"
          :external="available"
        >
          <FileText :size="16" aria-hidden="true" />
          Resume
        </BaseButton>
      </nav>

      <div class="flex shrink-0 items-center gap-2">
      <ThemeToggle />
      <button
        type="button"
        class="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/20 bg-white/60 lg:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <X v-if="open" :size="22" aria-hidden="true" />
        <Menu v-else :size="22" aria-hidden="true" />
      </button>
      </div>
    </div>

    <nav
      v-show="open"
      id="mobile-menu"
      aria-label="Mobile"
      class="container-page flex max-h-[calc(100dvh-4.5rem)] flex-col gap-1 overflow-y-auto pb-6 pt-2 lg:hidden"
    >
      <a
        v-for="link in links"
        :key="link.id"
        :href="`#${link.id}`"
        class="rounded-2xl px-4 py-3 text-lg font-medium text-ink no-underline"
        :class="active === link.id ? 'bg-butter text-on-accent' : 'hover:bg-butter/85 hover:text-on-accent'"
        @click="open = false"
      >
        {{ link.label }}
      </a>
      <BaseButton
        class="mt-2"
        variant="coral"
        :href="available ? resumeUrl : '#resume'"
        :external="available"
        @click="open = false"
      >
        <FileText :size="18" aria-hidden="true" />
        Resume
      </BaseButton>
    </nav>
  </header>
</template>
