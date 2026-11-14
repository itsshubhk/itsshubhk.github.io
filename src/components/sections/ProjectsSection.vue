<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects } from '@/data/projects'
import type { Project } from '@/types'
import { vReveal } from '@/composables/useReveal'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectModal from '@/components/projects/ProjectModal.vue'

const selected = ref<Project | null>(null)
const professionalProjects = computed(() => projects.filter((project) => project.kind === 'professional'))
const learningProjects = computed(() => projects.filter((project) => project.kind === 'learning'))
let opener: HTMLElement | null = null

function open(project: Project) {
  opener = document.activeElement as HTMLElement | null
  selected.value = project
}
function close() {
  selected.value = null
  opener?.focus()
}
</script>

<template>
  <section id="projects" aria-labelledby="projects-title" class="section-pad">
    <div class="container-page">
      <SectionHeading
        id="projects-title"
        number="03"
        eyebrow="The project workshop"
        title="Real problems. Thoughtful solutions."
        intro="Current professional platforms with end-to-end architecture, design and implementation ownership. Project names and descriptions are anonymized; internal code, data and screenshots are not published."
      />

      <ul class="mt-10 grid gap-6 md:grid-cols-2">
        <li v-for="(project, i) in professionalProjects" :key="project.slug" v-reveal="i * 0.08" class="h-full" :class="{ 'md:col-span-2': i === 0 }">
          <ProjectCard :project="project" :number="i + 1" :featured="i === 0" @open="open" />
        </li>
      </ul>
      <details class="group mt-10 rounded-3xl border border-line p-6 sm:p-8">
        <summary class="flex cursor-pointer list-none flex-wrap items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
          <div>
            <p class="section-label mb-2">Currently learning</p>
            <h3 class="text-2xl">Applied AI &amp; automation concepts</h3>
            <p class="mt-2 text-sm text-ink-soft">{{ learningProjects.length }} planned portfolio projects, separate from my professional work.</p>
          </div>
          <span class="rounded-full border border-line px-4 py-2 text-sm group-open:hidden">Explore plans +</span>
          <span class="hidden rounded-full border border-line px-4 py-2 text-sm group-open:block">Close plans -</span>
        </summary>
        <ul class="mt-8 grid gap-6 lg:grid-cols-3">
          <li v-for="(project, i) in learningProjects" :key="project.slug">
            <ProjectCard :project="project" :number="i + 1" @open="open" />
          </li>
        </ul>
      </details>
    </div>

    <ProjectModal :project="selected" @close="close" />
  </section>
</template>
