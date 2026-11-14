<script setup lang="ts">
import { asset } from '@/utils/helpers'
import ClayBraces from '@/components/illustrations/ClayBraces.vue'
import ClayDatabase from '@/components/illustrations/ClayDatabase.vue'
import ClayCloud from '@/components/illustrations/ClayCloud.vue'
</script>

<template>
  <figure class="relative mx-auto w-full max-w-[21rem] sm:max-w-[26rem] lg:max-w-[36rem] 2xl:max-w-[40rem]">
    <div class="relative aspect-[4/5]">
      <div class="illustration-stage absolute inset-x-[8%] bottom-[8%] top-[8%] rounded-t-[48%] rounded-b-[2.5rem] bg-butter/65"></div>
      <div class="absolute inset-x-[3%] bottom-[5%] h-[12%] rounded-[50%] border border-ink/5 bg-plinth shadow-[0_12px_20px_-16px_rgb(48_52_59/0.3)]"></div>
      <img
        :src="asset('images/character-hero.webp')"
        width="760"
        height="1140"
        fetchpriority="high"
        alt="Clay developer with dark curly hair and a blue hoodie, working on a laptop at his little workbench."
        class="clay-shadow absolute bottom-[8%] left-1/2 h-[91%] w-auto max-w-none -translate-x-[48%] select-none"
      />
      <ClayBraces class="float absolute left-[-1%] top-[20%] w-[20%]" style="--rot: -9deg; --dur: 8s" />
      <ClayCloud class="float absolute right-[-1%] top-[12%] w-[23%]" style="--rot: 7deg; --dur: 9s; --delay: -2s" />
      <ClayDatabase class="absolute right-[1%] bottom-[15%] w-[22%] rotate-[6deg]" />
    </div>
    <figcaption class="flex items-center justify-between gap-3 px-5 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-ink-soft">
      <span>The engineering workbench</span>
      <span aria-hidden="true" class="flex gap-1.5">
        <span class="h-2 w-2 rounded-full bg-sky"></span>
        <span class="h-2 w-2 rounded-full bg-coral"></span>
        <span class="h-2 w-2 rounded-full bg-lilac"></span>
      </span>
    </figcaption>
  </figure>
</template>
