<script setup lang="ts">
import { computed } from 'vue'
import type { SocialLink } from '@/types'
import { isPlaceholder } from '@/utils/helpers'
import SocialIcon from '@/components/ui/SocialIcon.vue'

const props = defineProps<{ social: SocialLink; compact?: boolean }>()
const available = computed(() => !isPlaceholder(props.social.url))
</script>

<template>
  <a
    v-if="available"
    :href="social.url"
    :target="social.key === 'email' ? undefined : '_blank'"
    :rel="social.key === 'email' ? undefined : 'noopener noreferrer'"
    class="inline-flex min-h-11 items-center gap-2 text-sm font-medium transition"
    :class="compact ? 'hover:text-butter' : 'rounded-full border border-ink/15 px-4 hover:border-ink/40 hover:bg-white/60'"
  >
    <SocialIcon :name="social.key" />
    {{ social.label }}
  </a>
  <span
    v-else
    class="inline-flex min-h-11 items-center gap-2 text-sm"
    :class="compact ? 'text-footer-text/70' : 'rounded-full border border-dashed border-ink/20 px-4 text-ink-soft'"
  >
    <SocialIcon :name="social.key" />
    {{ social.label }}
    <span class="text-[0.65rem]">{{ compact ? '(not added)' : 'Link pending' }}</span>
  </span>
</template>
