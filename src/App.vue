<script setup lang="ts">
import ClayDefs from '@/components/illustrations/ClayDefs.vue'
import NavBar from '@/components/layout/NavBar.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ResumeSection from '@/components/sections/ResumeSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <ClayDefs />
  <NavBar />
  <main id="main" class="overflow-x-clip">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <ResumeSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
