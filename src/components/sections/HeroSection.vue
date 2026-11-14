<script setup lang="ts">
import { ArrowDown, ArrowRight, Download } from 'lucide-vue-next'
import { profile } from '@/data/profile'
import { useResume } from '@/composables/useResume'
import BaseButton from '@/components/ui/BaseButton.vue'
import TechTag from '@/components/ui/TechTag.vue'
import HeroScene from '@/components/illustrations/HeroScene.vue'

const { url: resumeUrl, available } = useResume()
</script>

<template>
  <section id="home" aria-labelledby="hero-title" class="relative pt-28 pb-8 lg:pt-36 lg:pb-10">
    <div class="container-page">
      <div class="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        <div class="min-w-0">
          <p class="section-label mb-6">
            <span class="h-1.5 w-1.5 rounded-full bg-coral"></span>
            {{ profile.role }}
          </p>
          <p class="mb-3 font-display text-2xl italic sm:text-3xl">{{ profile.headline.line1 }}</p>
          <h1 id="hero-title" class="max-w-[40rem] text-[clamp(2.6rem,5vw,4.1rem)] font-medium leading-[1.06] tracking-[-0.045em]">
            <template v-for="(word, i) in profile.headline.line2.split(' ')" :key="i"><span class="inline-block">{{ word }}</span>{{ ' ' }}</template>
          </h1>
          <p class="mt-6 max-w-[33rem] text-base leading-relaxed text-ink-soft sm:text-lg">{{ profile.subheading }}</p>

          <ul class="mt-6 flex max-w-xl flex-wrap gap-2" aria-label="Engineering background and current learning">
            <li v-for="tag in profile.heroTags" :key="tag">
              <TechTag :tone="tag === 'Applied AI' ? 'lavender' : 'white'">
                {{ tag === 'Applied AI' ? 'Exploring Applied AI' : tag }}
              </TechTag>
            </li>
          </ul>

          <div class="mt-8 flex flex-wrap gap-3">
            <BaseButton href="#projects" variant="ink" size="lg">
              Explore My Work
              <ArrowRight :size="18" aria-hidden="true" />
            </BaseButton>
            <BaseButton :href="available ? resumeUrl : '#resume'" :external="available" variant="white" size="lg">
              <Download :size="18" aria-hidden="true" />
              Download Resume
            </BaseButton>
          </div>
          <div class="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1">
            <p class="inline-flex items-center gap-2 text-xs font-medium text-ink-soft">
              <span class="h-1.5 w-1.5 rounded-full bg-ink"></span>
              Open to FDE &amp; Applied AI roles
            </p>
            <a href="#contact" class="text-link">
              Let's talk <ArrowRight :size="15" aria-hidden="true" />
            </a>
          </div>
        </div>
        <HeroScene />
      </div>

      <div class="mt-12 flex items-end justify-between gap-6 border-y border-line py-6 lg:mt-16">
        <dl class="grid flex-1 grid-cols-3 gap-3 sm:gap-8">
          <div v-for="fact in profile.facts" :key="fact.label" class="flex flex-col-reverse gap-2 border-line first:border-0 sm:border-l sm:pl-8 sm:first:pl-0">
            <dt class="text-[0.65rem] font-medium uppercase leading-relaxed tracking-[0.1em] text-ink-soft sm:text-xs">{{ fact.label }}</dt>
            <dd class="font-display text-lg font-semibold leading-tight sm:text-2xl">{{ fact.value }}</dd>
          </div>
        </dl>
        <a href="#about" aria-label="Discover more about Shubham" class="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 transition hover:bg-butter hover:text-on-accent sm:inline-flex">
          <ArrowDown :size="18" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
