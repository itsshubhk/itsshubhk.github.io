<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'white' | 'blue' | 'yellow' | 'coral' | 'lavender' | 'dashed' }>(), {
  tone: 'white',
})
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border-[1.5px] px-3 py-1 text-sm font-medium leading-snug"
    :class="{
      'border-line bg-white text-ink': tone === 'white',
      'border-transparent bg-sky/85 text-on-accent': tone === 'blue',
      'border-transparent bg-butter/85 text-on-accent': tone === 'yellow',
      'border-transparent bg-coral/85 text-on-accent': tone === 'coral',
      'border-transparent bg-lilac/85 text-on-accent': tone === 'lavender',
      'border-dashed border-ink/40 bg-white/60 text-ink': tone === 'dashed',
    }"
  >
    <slot />
  </span>
</template>
