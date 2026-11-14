<script setup lang="ts">
import type { ProjectStatus } from '@/types'

defineProps<{ status: ProjectStatus }>()
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider"
    :class="{
      'bg-white': status === 'Planned',
      'bg-butter text-on-accent': status === 'In Progress',
      'bg-sky text-on-accent': status === 'Completed',
    }"
  >
    <span
      class="h-2 w-2 rounded-full"
      :class="{
        'bg-lilac': status === 'Planned',
        'bg-coral': status === 'In Progress',
        'bg-ink': status === 'Completed',
      }"
    ></span>
    {{ status }}
  </span>
</template>
