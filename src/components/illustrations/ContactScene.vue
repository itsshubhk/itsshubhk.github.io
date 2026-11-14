<script setup lang="ts">
import ClayDeveloper from '@/components/illustrations/ClayDeveloper.vue'
import ClayEnvelope from '@/components/illustrations/ClayEnvelope.vue'
</script>

<template>
  <figure class="relative mx-auto w-full max-w-[22rem]">
    <div class="relative aspect-[6/7]">
      <div class="illustration-stage absolute inset-x-[4%] bottom-[8%] top-[12%] rounded-t-[46%] rounded-b-[2rem] bg-sky/30"></div>
      <ClayDeveloper
        pose="waving"
        label="Clay Shubham standing and waving a raised hand beside a friendly envelope."
        class="clay-shadow absolute bottom-[5%] left-1/2 w-[93%] -translate-x-1/2"
      />
      <ClayEnvelope class="absolute bottom-[0%] right-[-3%] w-[43%] rotate-[-8deg]" />
    </div>
    <figcaption class="mt-3 text-center font-display text-lg italic">Good work starts with a conversation.</figcaption>
  </figure>
</template>
