<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; intro?: string; id?: string; center?: boolean; number?: string }>()
</script>

<template>
  <header class="max-w-2xl" :class="{ 'mx-auto text-center': center }">
    <p class="section-label mb-5">
      <span v-if="number" class="section-number">{{ number }}</span>
      <span v-else class="h-1.5 w-1.5 rounded-full bg-coral"></span>
      {{ eyebrow }}
    </p>
    <h2 :id="id" class="text-[clamp(2rem,4vw,3rem)] leading-[1.12]">{{ title }}</h2>
    <p v-if="intro" class="mt-5 max-w-[38rem] text-base leading-relaxed text-ink-soft sm:text-lg">{{ intro }}</p>
  </header>
</template>
