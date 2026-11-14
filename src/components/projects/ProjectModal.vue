<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { ExternalLink, Github, Image as ImageIcon, X } from 'lucide-vue-next'
import type { Project } from '@/types'
import { asset } from '@/utils/helpers'
import BaseButton from '@/components/ui/BaseButton.vue'
import StatusBadge from '@/components/ui/StatusBadge.vue'
import TechTag from '@/components/ui/TechTag.vue'
import ProjectArt from '@/components/illustrations/ProjectArt.vue'

const props = defineProps<{ project: Project | null }>()
const emit = defineEmits<{ close: [] }>()

const dialog = ref<HTMLDialogElement | null>(null)
const bg = { blue: 'bg-sky/60', yellow: 'bg-butter/70', coral: 'bg-coral/45', lavender: 'bg-lilac/55' }

watch(
  () => props.project,
  async (project) => {
    await nextTick()
    const el = dialog.value
    if (!el) return
    if (project && !el.open) {
      el.showModal()
      document.documentElement.style.overflow = 'hidden'
    } else if (!project && el.open) {
      el.close()
    }
  },
)

function onClosed() {
  document.documentElement.style.overflow = ''
  emit('close')
}

// Clicking the backdrop (the dialog element itself) closes the modal.
function onBackdrop(e: MouseEvent) {
  if (e.target === dialog.value) dialog.value?.close()
}
</script>

<template>
  <dialog
    ref="dialog"
    aria-labelledby="project-modal-title"
    class="m-auto max-h-[92dvh] w-[min(56rem,calc(100vw-1.5rem))] overflow-y-auto rounded-[1.5rem] border border-line bg-cream p-0 text-ink shadow-[var(--shadow-clay-lg)] backdrop:bg-footer/70 backdrop:backdrop-blur-sm"
    @close="onClosed"
    @click="onBackdrop"
  >
    <div v-if="project">
      <div class="relative h-48 overflow-hidden sm:h-56" :class="bg[project.accent]">
        <ProjectArt :art="project.art" class="mx-auto !w-[min(100%,28rem)]" />
        <button
          type="button"
          class="absolute right-4 top-4 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-ink/20 bg-white transition hover:bg-butter hover:text-on-accent"
          aria-label="Close project details"
          autofocus
          @click="dialog?.close()"
        >
          <X :size="20" aria-hidden="true" />
        </button>
      </div>

      <div class="space-y-9 p-6 sm:p-9">
        <header>
          <StatusBadge :status="project.status" />
          <h3 id="project-modal-title" class="mt-3 text-3xl sm:text-4xl">{{ project.title }}</h3>
          <p class="mt-2 text-lg text-ink-soft">{{ project.tagline }}</p>
          <p
            v-if="project.kind === 'learning' && project.status !== 'Completed'"
            class="mt-4 rounded-2xl border-[1.5px] border-dashed border-ink/30 bg-white/70 px-4 py-3 text-sm text-ink-soft"
          >
            This is a <strong>{{ project.status.toLowerCase() }}</strong> portfolio project. The details below describe the
            intended design, not a finished product.
          </p>
        </header>

        <section aria-labelledby="pm-overview">
          <h4 id="pm-overview" class="mb-2 font-display font-semibold text-xl">Overview</h4>
          <p class="text-ink-soft">{{ project.overview }}</p>
        </section>
        <section v-if="project.ownership" aria-labelledby="pm-ownership" class="rounded-2xl border border-line bg-sky/10 p-5">
          <h4 id="pm-ownership" class="mb-2 font-display text-xl font-semibold">My ownership</h4>
          <p class="text-ink-soft">{{ project.ownership }}</p>
          <p v-if="project.private" class="mt-3 text-sm text-ink-soft">This is an ongoing professional project. Public details are intentionally high-level and anonymized.</p>
        </section>

        <div class="grid gap-6 md:grid-cols-2">
          <section aria-labelledby="pm-problem" class="clay-card p-5">
            <h4 id="pm-problem" class="mb-2 font-display font-semibold text-xl">Problem</h4>
            <p class="text-ink-soft">{{ project.problem }}</p>
          </section>
          <section aria-labelledby="pm-solution" class="clay-card p-5">
            <h4 id="pm-solution" class="mb-2 font-display font-semibold text-xl">Solution</h4>
            <p class="text-ink-soft">{{ project.solution }}</p>
          </section>
        </div>

        <section aria-labelledby="pm-arch">
          <h4 id="pm-arch" class="mb-4 font-display font-semibold text-xl">Architecture <span class="text-base font-normal text-ink-soft">{{ project.kind === 'professional' ? '(high-level)' : project.status !== 'Completed' ? '(planned)' : '' }}</span></h4>
          <ol class="grid gap-3 sm:grid-cols-2">
            <li v-for="(node, i) in project.architecture" :key="node.label" class="flex gap-4 rounded-2xl border-[1.5px] border-line bg-white p-4">
              <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-lilac font-display font-bold text-on-accent">{{ i + 1 }}</span>
              <div>
                <p class="font-semibold leading-tight">{{ node.label }}</p>
                <p class="mt-0.5 text-sm text-ink-soft">{{ node.detail }}</p>
              </div>
            </li>
          </ol>
        </section>

        <section aria-labelledby="pm-tech">
          <h4 id="pm-tech" class="mb-3 font-display font-semibold text-xl">Technologies</h4>
          <ul class="flex flex-wrap gap-2">
            <li v-for="t in project.technologies" :key="t"><TechTag tone="blue">{{ t }}</TechTag></li>
          </ul>
        </section>

        <section aria-labelledby="pm-shots">
          <h4 id="pm-shots" class="mb-3 font-display font-semibold text-xl">Screenshots</h4>
          <div v-if="project.screenshots.length" class="grid gap-4 sm:grid-cols-2">
            <img
              v-for="shot in project.screenshots"
              :key="shot.src"
              :src="asset(shot.src)"
              :alt="shot.alt"
              loading="lazy"
              class="w-full rounded-2xl border-[1.5px] border-line"
            />
          </div>
          <div
            v-else
            class="grid place-items-center gap-2 rounded-2xl border-2 border-dashed border-ink/25 bg-white/60 px-6 py-10 text-center text-ink-soft"
          >
            <ImageIcon :size="28" aria-hidden="true" />
            <p>{{ project.private ? 'Internal screenshots are not published.' : 'Screenshots will appear here once the project is built.' }}</p>
          </div>
        </section>

        <footer v-if="project.private" class="border-t border-line pt-6 text-sm text-ink-soft">
          Private professional work. Source repositories, internal services and live demos are not shared publicly.
        </footer>
        <footer v-else class="flex flex-wrap gap-3 border-t border-line pt-6">
          <BaseButton :href="project.github ?? undefined" :disabled="!project.github" external variant="ink">
            <Github :size="18" aria-hidden="true" />
            {{ project.github ? 'View on GitHub' : 'GitHub · coming soon' }}
          </BaseButton>
          <BaseButton :href="project.demo ?? undefined" :disabled="!project.demo" external variant="white">
            <ExternalLink :size="18" aria-hidden="true" />
            {{ project.demo ? 'Live demo' : 'Live demo · coming soon' }}
          </BaseButton>
        </footer>
      </div>
    </div>
  </dialog>
</template>
