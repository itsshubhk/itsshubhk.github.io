<script setup lang="ts">
import { asset } from '@/utils/helpers'
</script>

<template>
  <figure class="mx-auto w-full max-w-[25rem] lg:mx-0 xl:max-w-[30rem] 2xl:max-w-[36rem]">
    <img
      :src="asset('images/experience-illustration.webp')"
      width="602"
      height="675"
      loading="lazy"
      decoding="async"
      alt="Clay-style Shubham at an engineering workstation with a code monitor, desk lamp, books, and miniature cloud and database objects."
      class="block h-auto w-full rounded-[2rem] border border-line bg-[#202020] shadow-[var(--shadow-clay-lg)]"
    />
  </figure>
</template>
