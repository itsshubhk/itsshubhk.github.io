<script setup lang="ts">
import { Github, Instagram, Linkedin, Mail } from 'lucide-vue-next'
import type { SocialKey } from '@/types'

defineProps<{ name: SocialKey }>()

const icons = { github: Github, linkedin: Linkedin, email: Mail, instagram: Instagram }
</script>

<template>
  <component :is="icons[name]" :size="20" :stroke-width="2" aria-hidden="true" />
</template>
