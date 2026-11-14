<script setup lang="ts">
import { profile } from '@/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-footer text-footer-text">
    <div class="container-page py-10 lg:py-12">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
        <div>
          <p class="font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-tight tracking-tight">{{ profile.name }}</p>
          <p class="mt-3 text-sm text-footer-text/80">{{ profile.role }}</p>
        </div>
        <p class="max-w-[22rem] font-display text-xl italic leading-snug text-butter md:text-right">{{ profile.footerTagline }}</p>
      </div>

      <p class="mt-8 border-t border-footer-text/15 pt-5 text-xs text-footer-text/70">
        © {{ year }} {{ profile.name }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>
