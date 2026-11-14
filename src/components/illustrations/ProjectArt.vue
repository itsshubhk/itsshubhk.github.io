<script setup lang="ts">
import type { ProjectArt } from '@/types'
import ClayLaptop from '@/components/illustrations/ClayLaptop.vue'
import ClayRobot from '@/components/illustrations/ClayRobot.vue'
import ClayDatabase from '@/components/illustrations/ClayDatabase.vue'
import ClayCloud from '@/components/illustrations/ClayCloud.vue'
import ClayNetwork from '@/components/illustrations/ClayNetwork.vue'
import ClayBulb from '@/components/illustrations/ClayBulb.vue'
import ClayTerminal from '@/components/illustrations/ClayTerminal.vue'

defineProps<{ art: ProjectArt }>()
</script>

<template>
  <div class="relative h-full w-full" aria-hidden="true">
    <div class="absolute left-1/2 top-1/2 aspect-[2/1] w-full -translate-x-1/2 -translate-y-1/2">
    <template v-if="art === 'incident'">
      <ClayLaptop class="absolute left-[37%] top-[12%] w-[49%] rotate-[3deg]" />
      <ClayRobot class="float absolute left-[5%] top-[27%] w-[35%]" style="--rot: -6deg; --dur: 9s" />
      <ClayTerminal class="absolute right-[10%] top-[8%] w-[22%] rotate-[8deg]" />
    </template>
    <template v-else-if="art === 'knowledge'">
      <ClayDatabase class="absolute left-[31%] top-[12%] w-[43%]" />
      <ClayBulb class="float absolute left-[10%] top-[21%] w-[25%]" style="--rot: -8deg; --dur: 9s" />
      <ClayCloud class="absolute right-[8%] top-[36%] w-[28%] rotate-[6deg]" />
    </template>
    <template v-else>
      <ClayNetwork class="absolute left-[27%] top-[10%] w-[43%]" />
      <ClayCloud class="float absolute right-[6%] top-[25%] w-[28%]" style="--rot: 6deg; --dur: 9s" />
      <ClayLaptop class="absolute left-[9%] top-[37%] w-[29%] rotate-[-5deg]" />
    </template>
    </div>
  </div>
</template>
