<script setup lang="ts">
import { useId } from 'vue'
import { asset } from '@/utils/helpers'

defineProps<{ pose: 'thinking' | 'working' | 'waving'; label: string }>()
const id = useId()
</script>

<template>
  <svg viewBox="0 0 420 540" fill="none" role="img" :aria-label="label">
    <defs>
      <linearGradient :id="`${id}-blue`" x1="130" y1="210" x2="286" y2="355" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9AC6EA" /><stop offset="1" stop-color="#5985B5" />
      </linearGradient>
      <linearGradient :id="`${id}-skin`" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#FFD1A6" /><stop offset="1" stop-color="#D78F66" />
      </linearGradient>
      <linearGradient :id="`${id}-trousers`" x1="165" y1="350" x2="260" y2="500" gradientUnits="userSpaceOnUse">
        <stop stop-color="#EEDBC0" /><stop offset="1" stop-color="#C4A88B" />
      </linearGradient>
    </defs>
    <ellipse cx="210" cy="516" rx="114" ry="12" fill="#30343B" opacity=".1" />

    <g v-if="pose !== 'waving'" filter="url(#clay)">
      <rect x="132" y="363" width="149" height="22" rx="11" fill="#A4B5CB" />
      <path d="M146 381l-12 124M266 381l13 124" stroke="#DDB785" stroke-width="17" stroke-linecap="round" />
    </g>
    <g filter="url(#clay)">
      <template v-if="pose === 'waving'">
        <path d="M149 338h121l-14 131c-1 20-42 21-42-1l-9-73-11 75c-3 20-44 17-44-3z" :fill="`url(#${id}-trousers)`" />
        <rect x="135" y="466" width="69" height="36" rx="18" fill="#F5EBDD" />
        <rect x="212" y="466" width="69" height="36" rx="18" fill="#F5EBDD" />
      </template>
      <template v-else>
        <path d="M148 337h115c19 0 28 29 12 44l-47 43-43-18 23-26-60 2c-28 0-33-45 0-45z" :fill="`url(#${id}-trousers)`" />
        <path d="M177 375l57 22 20 73c5 21-36 35-44 13l-19-53-27-12c-26-13-15-54 13-43z" :fill="`url(#${id}-trousers)`" />
        <rect x="205" y="469" width="72" height="35" rx="17.5" transform="rotate(-9 205 469)" fill="#F5EBDD" />
        <rect x="162" y="413" width="70" height="34" rx="17" transform="rotate(-25 162 413)" fill="#F5EBDD" />
      </template>
      <path d="M145 226c-1-36 22-45 48-34l17 13 26-12c24-9 49 9 44 40l-11 102c-3 26-118 26-124 0z" :fill="`url(#${id}-blue)`" />
      <path d="M172 207q30 37 65 0" stroke="#5884B1" stroke-width="16" stroke-linecap="round" />
      <path d="M172 308q35-13 72 0v28h-72z" fill="#7099C3" />
    </g>
    <path d="M184 232v43M227 232v43" stroke="#B7D5EF" stroke-width="4" stroke-linecap="round" />
    <path d="M154 341h109" stroke="#547DA9" stroke-opacity=".6" stroke-width="6" stroke-linecap="round" />

    <g v-if="pose === 'thinking'" filter="url(#clay)">
      <path d="M152 241l-24 49c-7 17 4 30 21 30h42" :stroke="`url(#${id}-blue)`" stroke-width="36" stroke-linecap="round" />
      <ellipse cx="205" cy="319" rx="25" ry="14" :fill="`url(#${id}-skin)`" />
      <path d="M265 242l20 43c8 14-13 29-19 11l-16-64" :stroke="`url(#${id}-blue)`" stroke-width="34" stroke-linecap="round" />
    </g>
    <g v-else-if="pose === 'working'" filter="url(#clay)">
      <path d="M154 244l-21 46c-4 13 8 22 22 22h44" :stroke="`url(#${id}-blue)`" stroke-width="35" stroke-linecap="round" />
      <path d="M263 243l20 43c7 15 26 20 42 15" :stroke="`url(#${id}-blue)`" stroke-width="34" stroke-linecap="round" />
      <ellipse cx="220" cy="312" rx="27" ry="12" :fill="`url(#${id}-skin)`" />
      <ellipse cx="344" cy="301" rx="26" ry="12" :fill="`url(#${id}-skin)`" />
    </g>
    <g v-else filter="url(#clay)">
      <path d="M153 245l-20 50 23 16" :stroke="`url(#${id}-blue)`" stroke-width="35" stroke-linecap="round" />
      <ellipse cx="171" cy="315" rx="21" ry="13" :fill="`url(#${id}-skin)`" />
      <path d="M269 242l55-36 13-53" :stroke="`url(#${id}-blue)`" stroke-width="37" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="319" y="104" width="41" height="54" rx="20" :fill="`url(#${id}-skin)`" />
      <path d="M324 115l-9-20M334 108l-4-31M344 107V78M354 114l7-25" :stroke="`url(#${id}-skin)`" stroke-width="11" stroke-linecap="round" />
      <path d="M325 131l-21-12" :stroke="`url(#${id}-skin)`" stroke-width="13" stroke-linecap="round" />
    </g>

    <image
      :href="asset('images/character-head.webp')"
      x="105" y="8" width="222" height="222"
      :transform="pose === 'thinking' ? 'rotate(-8 210 165)' : pose === 'waving' ? 'rotate(4 210 165)' : undefined"
    />
    <g v-if="pose === 'thinking'" filter="url(#clay)">
      <ellipse cx="249" cy="225" rx="16" ry="22" transform="rotate(-15 249 225)" :fill="`url(#${id}-skin)`" />
      <path d="M251 219l-9-16" :stroke="`url(#${id}-skin)`" stroke-width="10" stroke-linecap="round" />
    </g>
    <path v-if="pose === 'waving'" d="M371 98l8-4M372 117l9 2" stroke="#C9B8F5" stroke-width="4" stroke-linecap="round" />
  </svg>
</template>
