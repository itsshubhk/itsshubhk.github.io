<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { Check, Copy, Mail } from 'lucide-vue-next'
import { profile } from '@/data/profile'
import { isPlaceholder } from '@/utils/helpers'
import { vReveal } from '@/composables/useReveal'
import BaseButton from '@/components/ui/BaseButton.vue'
import SocialLink from '@/components/ui/SocialLink.vue'
import ContactScene from '@/components/illustrations/ContactScene.vue'

const links = computed(() => profile.social.filter((s) => s.enabled))
const emailAvailable = computed(() => !isPlaceholder(profile.email))
const copyState = ref<'idle' | 'copied' | 'error'>('idle')
let copyTimer: ReturnType<typeof setTimeout> | undefined

async function copyEmail() {
  clearTimeout(copyTimer)
  try {
    await navigator.clipboard.writeText(profile.email)
    copyState.value = 'copied'
    copyTimer = setTimeout(() => (copyState.value = 'idle'), 2200)
  } catch {
    copyState.value = 'error'
  }
}

onBeforeUnmount(() => clearTimeout(copyTimer))
</script>

<template>
  <section id="contact" aria-labelledby="contact-title" class="section-pad">
    <div class="container-page grid items-start gap-10 border-t border-line pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
      <div v-reveal class="min-w-0">
        <p class="section-label mb-6"><span class="section-number">06</span>Let's connect</p>
        <h2 id="contact-title" class="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.12]">
          <span class="mb-4 block font-sans text-lg font-normal tracking-normal text-ink-soft">{{ profile.contact.heading[0] }}</span>
          {{ profile.contact.heading[1] }}
        </h2>
        <p class="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">{{ profile.contact.subheading }}</p>

        <div class="mt-7 flex flex-wrap gap-3">
          <BaseButton :href="emailAvailable ? `mailto:${profile.email}` : undefined" :disabled="!emailAvailable" variant="ink">
            <Mail :size="18" aria-hidden="true" />Email me
          </BaseButton>
          <BaseButton :disabled="!emailAvailable" variant="white" @click="copyEmail">
            <Check v-if="copyState === 'copied'" :size="18" aria-hidden="true" />
            <Copy v-else :size="18" aria-hidden="true" />
            {{ copyState === 'copied' ? 'Copied!' : 'Copy email' }}
          </BaseButton>
        </div>


        <ul class="mt-7 flex flex-wrap gap-3" aria-label="Social links">
          <li v-for="s in links" :key="s.key"><SocialLink :social="s" /></li>
        </ul>
      </div>
      <div v-reveal="0.1" class="min-w-0 lg:pt-14">
        <ContactScene />
      </div>
    </div>
  </section>
</template>
