<template>
  <!-- Shared clay lighting filter, referenced as url(#clay) by every illustration. -->
  <svg width="0" height="0" class="absolute" aria-hidden="true" focusable="false">
    <defs>
      <filter id="clay" x="-12%" y="-12%" width="124%" height="128%" color-interpolation-filters="sRGB">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4.5" result="blur" />
        <feDiffuseLighting in="blur" surfaceScale="3" diffuseConstant="1.1" lighting-color="#ffffff" result="diffuse">
          <feDistantLight azimuth="225" elevation="62" />
        </feDiffuseLighting>
        <feSpecularLighting in="blur" surfaceScale="3" specularConstant="0.12" specularExponent="8" lighting-color="#ffffff" result="spec">
          <feDistantLight azimuth="225" elevation="62" />
        </feSpecularLighting>
        <feComposite in="spec" in2="SourceAlpha" operator="in" result="specIn" />
        <feComposite in="SourceGraphic" in2="diffuse" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="shaded" />
        <feComposite in="shaded" in2="specIn" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="lit" />
        <feComposite in="lit" in2="SourceAlpha" operator="in" />
      </filter>
    </defs>
  </svg>
</template>
