<script setup lang="ts">
import ClayBraces from '@/components/illustrations/ClayBraces.vue'
import ClayDatabase from '@/components/illustrations/ClayDatabase.vue'
import ClayCloud from '@/components/illustrations/ClayCloud.vue'
import ClayRobot from '@/components/illustrations/ClayRobot.vue'
</script>

<template>
  <div class="relative mx-auto aspect-[5/3] w-full" aria-hidden="true">
    <div class="illustration-stage absolute inset-x-[7%] bottom-[17%] top-[5%] rounded-t-[50%] rounded-b-xl bg-sky/25"></div>
    <div class="absolute inset-x-[2%] bottom-[15%] h-[7%] rounded-full border border-ink/5 bg-plinth"></div>
    <ClayBraces class="absolute left-[0%] top-[31%] w-[25%] rotate-[-8deg]" />
    <ClayDatabase class="absolute left-[24%] top-[17%] w-[29%]" />
    <ClayRobot class="absolute left-[49%] top-[11%] w-[29%]" />
    <ClayCloud class="float absolute right-[-1%] top-[22%] w-[27%]" style="--rot: 7deg; --dur: 9s" />
  </div>
</template>
