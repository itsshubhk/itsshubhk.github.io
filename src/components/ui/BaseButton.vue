<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'ink' | 'coral' | 'white' | 'butter'
    size?: 'md' | 'lg' | 'sm'
    href?: string
    external?: boolean
    download?: boolean
    disabled?: boolean
    type?: 'button' | 'submit'
  }>(),
  { variant: 'ink', size: 'md', type: 'button' },
)

const classes = computed(() => [
  'group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border font-semibold no-underline',
  'transition duration-200 ease-out',
  props.size === 'lg' ? 'px-7 py-3.5 text-base' : props.size === 'sm' ? 'px-4 py-2 text-sm' : 'px-5 py-2.5 text-[0.95rem]',
  {
    ink: 'border-ink bg-ink text-white shadow-[0_3px_0_rgb(48_52_59/0.18)] hover:-translate-y-0.5 hover:bg-ink-soft active:translate-y-0 active:shadow-none',
    coral: 'border-ink/15 bg-coral text-on-accent shadow-[0_3px_0_rgb(255_155_133/0.3)] hover:-translate-y-0.5 hover:border-ink/40 active:translate-y-0 active:shadow-none',
    butter: 'border-ink/15 bg-butter text-on-accent shadow-[0_3px_0_rgb(255_230_154/0.3)] hover:-translate-y-0.5 hover:border-ink/40 active:translate-y-0 active:shadow-none',
    white: 'border-ink/20 bg-transparent text-ink hover:-translate-y-0.5 hover:border-ink active:translate-y-0',
  }[props.variant],
  props.disabled ? 'pointer-events-none opacity-50' : 'cursor-pointer',
])
</script>

<template>
  <a
    v-if="href && !disabled"
    :href="href"
    :class="classes"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :download="download ? '' : undefined"
  >
    <slot />
  </a>
  <button v-else :type="type" :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>
