<script setup lang="ts">
import { Download, Eye } from 'lucide-vue-next'
import { profile } from '@/data/profile'
import { useResume } from '@/composables/useResume'
import { vReveal } from '@/composables/useReveal'
import { asset } from '@/utils/helpers'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const { url, available } = useResume()
const isDev = import.meta.env.DEV
</script>

<template>
  <section id="resume" aria-labelledby="resume-title" class="section-pad">
    <div class="container-page">
      <div v-reveal class="grid items-center gap-10 rounded-[2rem] border border-line bg-sand p-6 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 lg:p-12">
        <div>
          <SectionHeading
            id="resume-title"
            number="05"
            eyebrow="Experience, in a document"
            title="Take the full story with you."
            intro="My experience, end-to-end engineering ownership, project work and education. Easy to save, share and revisit."
          />
          <div class="mt-7 flex flex-wrap gap-3">
            <BaseButton :href="available ? url : undefined" :disabled="!available" download variant="ink">
              <Download :size="18" aria-hidden="true" />Download Resume
            </BaseButton>
            <BaseButton :href="available ? url : undefined" :disabled="!available" external variant="white">
              <Eye :size="18" aria-hidden="true" />View Resume
            </BaseButton>
          </div>
          <p v-if="!available" class="mt-5 max-w-lg text-sm text-ink-soft">
            The resume PDF hasn't been added yet.
            <a href="#contact" class="font-medium underline decoration-coral decoration-2 underline-offset-4">Contact details are below.</a>
          </p>
          <p v-if="isDev && !available" class="mt-3 text-xs text-ink-soft">
            Add <code>public/{{ profile.resumePath }}</code> and restart the dev server.
          </p>
        </div>

        <figure class="mx-auto w-full max-w-[15rem]">
          <div class="relative aspect-[1/1.48]">
            <div class="absolute bottom-[8%] left-[4%] right-0 top-[18%] rotate-[6deg] rounded-2xl border border-ink/10 bg-butter shadow-[var(--shadow-clay)]"></div>
            <img v-if="available" :src="asset('images/resume-preview.png')" width="680" height="1009" loading="lazy" alt="Preview of the first page of Shubham Khare's updated resume." class="relative w-full rotate-[-5deg] rounded-xl border border-line shadow-[var(--shadow-clay-lg)]" />
            <div v-else aria-hidden="true" class="absolute inset-0 rounded-2xl border border-line bg-white p-6">
              <p class="section-label">Resume PDF</p>
              <p class="mt-4 font-display text-2xl">{{ profile.name }}</p>
            </div>
          </div>
          <figcaption class="mt-3 text-center text-[0.65rem] text-ink-soft">{{ available ? 'Resume preview / page 1 of 2' : 'Resume PDF not yet available.' }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
