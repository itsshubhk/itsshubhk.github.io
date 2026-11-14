import { ref } from 'vue'
import { profile } from '@/data/profile'
import { asset } from '@/utils/helpers'

const available = ref(__RESUME_AVAILABLE__)

/**
 * Whether public/resume.pdf existed when the site was built (see vite.config.ts).
 * When it is missing, resume buttons fall back to the Resume section instead of a dead link.
 */
export function useResume() {
  return { url: asset(profile.resumePath), available }
}
