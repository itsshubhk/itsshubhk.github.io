<script setup lang="ts">
import { Layers, Lightbulb, Sprout } from 'lucide-vue-next'
import { profile } from '@/data/profile'
import { vReveal } from '@/composables/useReveal'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import AboutScene from '@/components/illustrations/AboutScene.vue'

const icons = [Layers, Lightbulb, Sprout]
const tints = ['bg-sky', 'bg-butter', 'bg-lilac']
</script>

<template>
  <section id="about" aria-labelledby="about-title" class="section-pad">
    <div class="container-page grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <div v-reveal class="order-2 min-w-0 lg:order-1 lg:pt-13">
        <AboutScene />
      </div>

      <div v-reveal="0.1" class="order-1 min-w-0 lg:order-2">
        <SectionHeading id="about-title" eyebrow="The person behind the code" number="01" :title="profile.about.heading" />
        <div class="mt-7 max-w-[65ch] space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          <p v-for="p in profile.about.paragraphs" :key="p">{{ p }}</p>
        </div>

        <ul class="mt-8 max-w-[65ch] space-y-4 border-t border-line pt-6">
          <li v-for="(item, i) in profile.about.highlights" :key="item.title" class="flex items-start gap-4">
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-on-accent" :class="tints[i % tints.length]">
              <component :is="icons[i % icons.length]" :size="17" aria-hidden="true" />
            </span>
            <div>
              <h3 class="font-sans text-sm font-semibold tracking-normal">{{ item.title }}</h3>
              <p class="mt-1 text-sm leading-relaxed text-ink-soft">{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
