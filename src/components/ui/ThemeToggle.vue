<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme, storageWarning } = useTheme()
</script>

<template>
  <div class="relative">
    <button
      type="button"
      class="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border border-ink/20 bg-white/60 transition hover:border-ink/50"
      :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
      :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="toggleTheme"
    >
      <Sun v-if="theme === 'dark'" :size="18" aria-hidden="true" />
      <Moon v-else :size="18" aria-hidden="true" />
    </button>
    <p v-if="storageWarning" role="status" class="absolute right-0 top-14 z-50 w-60 rounded-xl border border-line bg-cream p-3 text-xs shadow-[var(--shadow-clay)]">
      Theme changed for this visit. Your browser is preventing the preference from being saved.
    </p>
  </div>
</template>
