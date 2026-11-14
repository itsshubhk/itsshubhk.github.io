<script setup lang="ts">
import { Building2, CalendarDays, ChevronDown, MapPin } from 'lucide-vue-next'
import { experience } from '@/data/experience'
import { vReveal } from '@/composables/useReveal'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechTag from '@/components/ui/TechTag.vue'
import ExperienceScene from '@/components/illustrations/ExperienceScene.vue'
</script>

<template>
  <section id="experience" aria-labelledby="experience-title" class="section-pad border-y border-line bg-white/40">
    <div class="container-page grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <div class="min-w-0">
        <SectionHeading
          id="experience-title"
          number="02"
          eyebrow="Engineering experience"
          title="A foundation built in enterprise software."
          intro="Eight years of backend engineering, enterprise applications and integrations. With testing, debugging and CI/CD as part of the work, not an afterthought."
        />
        <ExperienceScene v-reveal class="mt-8" />
      </div>

      <div class="min-w-0">
        <div class="mb-7 flex items-center justify-between gap-3 border-b border-line pb-4">
          <p class="section-label">Career timeline</p>
          <span class="text-xs text-ink-soft">Newest first</span>
        </div>
        <ol class="relative space-y-5 border-l border-ink/20 pl-6 sm:pl-8">
          <li v-for="(role, i) in experience" :key="role.id" v-reveal class="relative">
            <span aria-hidden="true" class="absolute -left-[1.85rem] top-7 h-3 w-3 rounded-full border-[3px] border-cream bg-ink ring-1 ring-ink/30 sm:-left-[2.35rem]"></span>
            <details :open="!role.placeholder" class="group rounded-2xl border border-line bg-cream/65">
              <summary class="flex min-h-24 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 [&::-webkit-details-marker]:hidden sm:p-6">
                <div class="min-w-0">
                  <p class="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    {{ role.placeholder ? `Role entry / 0${i + 1}` : role.dates }}
                  </p>
                  <h3 class="text-xl">{{ role.placeholder ? 'Career details to be added' : role.title }}</h3>
                  <p class="mt-1 text-xs text-ink-soft">
                    {{ role.placeholder ? 'Company, dates and achievements awaiting your details' : role.company }}
                  </p>
                </div>
                <ChevronDown :size="18" class="shrink-0 text-ink-soft transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>

              <div class="border-t border-line px-5 pb-6 pt-5 sm:px-6">
                <p v-if="role.placeholder" class="mb-5 border-l-2 border-coral pl-3 text-sm text-ink-soft">
                  Editable placeholder, not a verified role. Replace this entry in <code class="break-words">src/data/experience.ts</code>.
                </p>
                <h4 class="font-semibold">{{ role.title }}</h4>
                <p class="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-ink-soft">
                  <span class="inline-flex items-center gap-1.5"><Building2 :size="14" aria-hidden="true" />{{ role.company }}</span>
                  <span class="inline-flex items-center gap-1.5"><CalendarDays :size="14" aria-hidden="true" />{{ role.dates }}</span>
                  <span v-if="role.location" class="inline-flex items-center gap-1.5"><MapPin :size="14" aria-hidden="true" />{{ role.location }}</span>
                </p>
                <p class="mt-4 text-sm text-ink-soft">{{ role.summary }}</p>
                <div v-for="(items, label) in { Responsibilities: role.responsibilities, Achievements: role.achievements }" :key="label" class="mt-5">
                  <template v-if="items.length">
                    <h5 class="mb-2 text-xs font-semibold uppercase tracking-wider">{{ label }}</h5>
                    <ul class="space-y-2 text-sm text-ink-soft">
                      <li v-for="item in items" :key="item" class="flex gap-3">
                        <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/50" aria-hidden="true"></span>
                        {{ item }}
                      </li>
                    </ul>
                  </template>
                </div>
                <ul class="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                  <li v-for="t in role.technologies" :key="t"><TechTag>{{ t }}</TechTag></li>
                </ul>
              </div>
            </details>
          </li>
        </ol>
        <p v-if="experience.some((role) => role.placeholder)" class="mt-6 pl-6 text-xs leading-relaxed text-ink-soft sm:pl-8">
          Company names, employment dates and measurable achievements are intentionally not invented. Expand an entry to view its editable fields.
        </p>
      </div>
    </div>
  </section>
</template>
