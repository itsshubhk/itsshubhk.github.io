<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import type { Project } from '@/types'
import StatusBadge from '@/components/ui/StatusBadge.vue'
import TechTag from '@/components/ui/TechTag.vue'
import ProjectArt from '@/components/illustrations/ProjectArt.vue'

const props = defineProps<{ project: Project; number: number; featured?: boolean }>()
defineEmits<{ open: [project: Project] }>()
const bg = { blue: 'bg-sky/45', yellow: 'bg-butter/55', coral: 'bg-coral/30', lavender: 'bg-lilac/40' }
const visible = computed(() => props.project.technologies.slice(0, props.featured ? 6 : 4))
const extra = computed(() => props.project.technologies.length - visible.value.length)
</script>

<template>
  <article
    class="clay-card group grid h-full min-w-0 overflow-hidden transition duration-300 hover:border-ink/20 hover:shadow-[var(--shadow-clay-lg)]"
    :class="featured ? 'md:grid-cols-[0.9fr_1.1fr]' : 'grid-rows-[auto_1fr]'"
  >
    <div class="relative min-w-0 overflow-hidden" :class="[bg[project.accent], featured ? 'min-h-60 md:min-h-[25rem]' : 'aspect-[16/8]']">
      <ProjectArt :art="project.art" class="mx-auto !w-[min(100%,28rem)] transition duration-500 group-hover:scale-[1.03]" />
      <div class="absolute left-5 top-5"><StatusBadge :status="project.status" /></div>
      <span aria-hidden="true" class="absolute bottom-4 right-5 font-display text-4xl font-medium text-ink/25">0{{ number }}</span>
    </div>

    <div class="flex flex-col p-6 sm:p-8" :class="{ 'lg:p-10': featured }">
      <p class="section-label mb-4">{{ project.kind === 'professional' ? 'Professional work' : 'Portfolio concept' }} / 0{{ number }}</p>
      <h3 :class="featured ? 'text-3xl lg:text-[2.15rem]' : 'text-2xl'">{{ project.title }}</h3>
      <p class="mt-3 text-sm font-medium">{{ project.tagline }}</p>
      <p class="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{{ project.description }}</p>
      <ul class="mt-5 mb-6 flex flex-wrap gap-2" aria-label="Technologies">
        <li v-for="t in visible" :key="t"><TechTag>{{ t }}</TechTag></li>
        <li v-if="extra > 0"><TechTag tone="dashed">+{{ extra }} more</TechTag></li>
      </ul>
      <div class="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-line pt-4">
        <button
          type="button"
          class="text-link cursor-pointer rounded-sm"
          :aria-label="`View details for ${project.title}`"
          @click="$emit('open', project)"
        >
          {{ project.kind === 'professional' ? 'Explore the work' : 'Explore the concept' }} <ArrowUpRight :size="18" aria-hidden="true" />
        </button>
        <span class="text-[0.65rem] uppercase tracking-[0.1em] text-ink-soft">{{ project.private ? 'Anonymized / private project' : project.status === 'Completed' ? 'Project details' : 'Design, not a shipped product' }}</span>
      </div>
    </div>
  </article>
</template>
