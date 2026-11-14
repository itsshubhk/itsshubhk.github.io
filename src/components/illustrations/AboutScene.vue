<script setup lang="ts">
import { asset } from '@/utils/helpers'
</script>

<template>
  <figure class="mx-auto w-full max-w-[25rem] lg:mx-0 xl:max-w-[30rem] 2xl:max-w-[36rem]">
    <img
      :src="asset('images/about-illustration.webp')"
      width="482"
      height="701"
      loading="lazy"
      decoding="async"
      alt="Clay-style Shubham in a blue hoodie, seated thoughtfully with a hand at his chin, beside a plant and an idea bulb."
      class="block h-auto w-full rounded-[2rem] border border-line bg-[#202020] shadow-[var(--shadow-clay-lg)]"
    />
    <figcaption class="mx-auto mt-5 max-w-[17rem] text-center font-display text-xl italic leading-snug">
      A backend foundation.<br />A curious next chapter.
    </figcaption>
  </figure>
</template>
