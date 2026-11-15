<script setup lang="ts">
import { asset } from '@/utils/helpers'
</script>

<template>
  <figure class="mx-auto w-full max-w-[25rem] lg:mr-0 xl:max-w-[30rem] 2xl:max-w-[36rem]">
    <img
      :src="asset('images/contact-illustration.webp')"
      width="1128"
      height="1394"
      loading="lazy"
      decoding="async"
      alt="Clay-style Shubham in a blue hoodie, standing and waving beside an envelope to welcome a conversation."
      class="block h-auto w-full rounded-[2rem] border border-line bg-[#131c29] shadow-[var(--shadow-clay-lg)]"
    />
    <figcaption class="mt-5 text-center font-display text-lg italic leading-snug">Good work starts with a conversation.</figcaption>
  </figure>
</template>
