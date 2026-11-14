<script setup lang="ts">
import type { Component } from 'vue'
import { ArrowRight, BrainCircuit, Cloud, GitBranch, PanelsTopLeft, Server, ShieldCheck, Workflow, Wrench } from 'lucide-vue-next'
import { skillGroups } from '@/data/skills'
import { vReveal } from '@/composables/useReveal'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SkillsScene from '@/components/illustrations/SkillsScene.vue'

const accents = { blue: 'bg-sky', yellow: 'bg-butter', coral: 'bg-coral', lavender: 'bg-lilac' }
const icons: Record<string, Component> = {
  Backend: Server,
  Frontend: PanelsTopLeft,
  Engineering: GitBranch,
  'Applied AI': BrainCircuit,
  'Agentic AI': Workflow,
  'Cloud and Deployment': Cloud,
  'AI Production Engineering': ShieldCheck,
}
</script>

<template>
  <section id="skills" aria-labelledby="skills-title" class="section-pad border-y border-line bg-white/40">
    <div class="container-page">
      <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <SectionHeading
          id="skills-title"
          number="04"
          eyebrow="The engineering toolkit"
          title="My skillset."
          intro="A connected toolkit across backend systems, thoughtful interfaces, Applied AI and dependable software delivery."
        />
        <p class="section-label pb-1">{{ skillGroups.length }} disciplines / one toolkit</p>
      </div>

      <div class="mt-9 overflow-hidden rounded-[2rem] border border-line bg-white shadow-[var(--shadow-clay)] lg:grid lg:grid-cols-[minmax(15rem,0.8fr)_minmax(0,2.2fr)]">
        <div v-reveal class="flex flex-col justify-between border-b border-line bg-sand/65 p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-9">
          <div class="grid grid-cols-[minmax(0,1fr)_6rem] items-center gap-4 sm:grid-cols-[minmax(0,1fr)_11rem] lg:grid-cols-1">
            <div>
              <p class="section-label mb-4">Built to work together</p>
              <p class="max-w-[14rem] font-display text-2xl font-medium leading-[1.12] tracking-tight sm:text-3xl">
                Different tools.<br />One connected system.
              </p>
              <p class="mt-4 hidden max-w-[24rem] text-sm leading-relaxed text-ink-soft sm:block">
                From the API to the interface, each layer has its own tools. Good engineering brings them together.
              </p>
            </div>
            <SkillsScene class="!max-w-[22rem] lg:mt-9" />
          </div>
          <a href="#projects" class="text-link mt-5 w-fit lg:mt-9">
            Explore the projects <ArrowRight :size="16" aria-hidden="true" />
          </a>
        </div>

        <ul class="grid min-w-0 md:grid-cols-2">
          <li
            v-for="(group, i) in skillGroups"
            :key="group.title"
            v-reveal="(i % 2) * 0.05"
            class="min-w-0 border-b border-line px-6 py-7 last:border-b-0 sm:px-8 md:odd:border-r md:last:col-span-2 md:last:border-r-0"
          >
            <article>
              <header class="flex items-start gap-3.5">
                <span class="grid h-10 w-10 shrink-0 place-items-center rounded-[0.9rem] text-on-accent shadow-[inset_0_1px_0_rgb(255_255_255/0.4)]" :class="accents[group.accent]">
                  <component :is="icons[group.title] ?? Wrench" :size="19" :stroke-width="1.7" aria-hidden="true" />
                </span>
                <div class="min-w-0">
                  <h3 class="pt-0.5 font-sans text-base font-semibold leading-tight tracking-normal">{{ group.title }}</h3>
                  <p v-if="group.description" class="mt-1.5 max-w-[55ch] text-[0.8125rem] leading-relaxed text-ink-soft">{{ group.description }}</p>
                </div>
              </header>
              <ul class="mt-5 flex flex-wrap gap-2" :aria-label="`${group.title} skills`">
                <li v-for="skill in group.skills" :key="skill">
                  <span class="inline-flex rounded-lg bg-cream px-3 py-1.5 text-sm font-medium leading-snug text-ink">{{ skill }}</span>
                </li>
              </ul>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
