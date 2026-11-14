# Shubham Khare · Portfolio

A static, deployment-ready personal portfolio built with **Vue 3 + TypeScript + Vite + Tailwind CSS v4**, with a soft 3D clay illustration style. It uses no backend, database, API keys or paid services.

Sections: Hero · About · Experience timeline · Featured projects (with detail modals) · Unified skillset · Resume · Contact · Footer.

## Visual direction

The portfolio uses a restrained editorial layout rather than repeating the same card grid in every section. Numbered section labels, shared type and spacing tokens, a grounded clay workbench, and a featured project layout establish the visual rhythm. Colors mark context: warm cream for the canvas, soft blue for engineering, and lavender for AI-oriented tools. The shared SVG lighting in `ClayDefs.vue` gives the miniature objects a softer, matte material.

The mobile hero presents the professional introduction and calls to action before the illustration. Placeholder career entries start collapsed; verified entries open by default. Unconfigured social links are displayed as “link pending” instead of sending visitors to nonexistent profiles, and email/copy controls are disabled until a real email is configured. Copy failures produce a visible message rather than a false success state.

The footer is intentionally compact: name, current role, tagline and copyright. Navigation stays in the header and social links stay in Contact, without repeated Explore/Connect columns.

The shared page container fills the viewport rather than stopping at a fixed desktop width. Responsive gutters keep navigation and section edges aligned (20px on mobile, 32–64px on larger screens). Text retains a readable measure and illustrations scale within their own bounds, so full-width layouts do not stretch paragraphs or artwork on ultrawide displays.

### Light and dark modes

The header has a keyboard-accessible theme toggle on desktop and mobile. On the first visit, the site follows the system preference; a manual choice is stored in `localStorage` under `portfolio-theme`. An inline initializer applies the theme before the page renders to avoid a light-theme flash. Theme colors and surfaces are defined in `src/style.css`; accent foreground colors stay readable in both modes. If storage is blocked, the theme still changes for the visit and the interface explains that it could not save the preference.

## Local setup

Requires Node.js 20+ (developed on Node 24).

```bash
npm install
npm run dev        # http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run typecheck` | Type-check TypeScript and `.vue` files |
| `npm run build` | Type-check, then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run resume:export` | Generate the updated PDF and resume preview from the editable HTML source |

## Updating your information

Personal profile information, roles, project details and skills live in `src/data/`. Section labels and visual captions live in their section and illustration components.

| File | Contains |
| --- | --- |
| `src/data/profile.ts` | Name, headline, hero copy, about text, **email**, **GitHub / LinkedIn / Gmail / Instagram URLs**, footer tagline |
| `src/data/experience.ts` | Career timeline (company, title, dates, responsibilities, achievements, technologies) |
| `src/data/projects.ts` | Featured projects (status, problem, solution, architecture, GitHub/demo links, screenshots) |
| `src/data/skills.ts` | Unified `skillGroups` array organized by engineering discipline |

Information now populated from the supplied CV:

- Email, LinkedIn, employer, employment dates and recognition use the supplied CV.
- The current title is Technical Specialist, updated from your latest information; Senior Software Engineer is retained as the previous role. Employment dates describe company tenure, not an assumed promotion date.
- GitHub and Instagram are configured and visible; set a social entry's `enabled: false` to hide it.
- `experience.ts` contains the verified employment entry. Add future roles as needed; `placeholder: true` is available for draft entries.
- `projects.ts` distinguishes `kind: 'professional'` from `kind: 'learning'`. Three current professional projects are `In Progress`, anonymized, and marked `private: true`; their source, internal URLs and screenshots are not published.
- The three AI/automation concepts remain `Planned` and are grouped separately. Their `github` / `demo` values stay `null` until public implementations exist.
- The website presents one skillset without a separate "Currently learning" panel. This neutral list does not imply that every technology has been used professionally; project and CV claims remain evidence-based.
- The skillset uses a single toolkit panel: a clay-illustrated overview alongside a compact, icon-led directory. Categories share dividers and quiet technology labels instead of repeated numbered cards. It becomes a stacked list on mobile, with all skills visible without tabs or filters.
- Do not change private work to public or expose implementation details without authorization. Architecture summaries describe high-level integration boundaries, not proprietary algorithms.

### Project screenshots

Put images in `public/images/projects/` and list them in the project entry:

```ts
screenshots: [{ src: 'images/projects/incident-dashboard.webp', alt: 'Incident dashboard showing ranked root causes' }]
```

## Updating the resume

The original supplied PDF is preserved in `src/data/` and excluded from Git by `.gitignore`. The downloadable, updated CV is **`public/resume.pdf`**. It uses anonymized project summaries, omits the original street address and non-professional extracurricular content, and keeps learning skills separate from professional experience.

1. Edit `src/data/resume.html`, the print-oriented, selectable-text CV source.
2. Run `npm run resume:export`. It generates `public/resume.pdf` and `public/images/resume-preview.png`.
3. Restart the dev server if the PDF was previously absent; production builds detect its availability automatically.

The exporter uses `playwright-core` and an installed browser: Microsoft Edge on Windows, Chrome elsewhere. To use another Chromium installation, set `BROWSER_EXECUTABLE_PATH` to its executable path. No browser or PDF service is called remotely. The CV is designed for two A4 pages; the exporter rejects content that exceeds the intended page height. PDF export is a local authoring command, not part of the static site's runtime or deployment build.

The nav, hero and resume section all use the same PDF. Download and view actions work when it exists; if removed, the site shows an explicit unavailable state instead of a broken PDF link. A manually replaced PDF also requires updating the preview image so it remains accurate.

## Illustrations

| Asset | Location |
| --- | --- |
| Hero character (your reference image, optimised WebP) | `public/images/character-hero.webp` |
| About illustration | `public/images/about-illustration.webp`, optimized from the supplied `A little about me.png` |
| Experience illustration | `public/images/experience-illustration.webp`, optimized from the supplied `A foundation built in enterprise software.png` |
| Contact character | `ClayDeveloper.vue` provides the waving pose, with shared clay material and the isolated reference head in `public/images/character-head.webp` |
| Clay objects (laptop, robot, database, cloud, network, envelope, …) | Vue SVG components in `src/components/illustrations/Clay*.vue`, shaded by one shared SVG filter in `ClayDefs.vue` |
| Scene compositions | `HeroScene`, `AboutScene`, `ExperienceScene`, `SkillsScene`, `ContactScene`, `ProjectArt` |
| Favicon / social preview | `public/favicon.svg`, `public/og-image.png` (1200×630) |

About and Experience use the complete illustrations supplied in the workspace root. They are optimized to WebP without cropping, reshaping, or overlaying extra objects. Their original dark studio backgrounds are preserved inside consistent rounded frames that work in both themes. Explicit dimensions reserve the correct aspect ratio; the scenes use normal-flow images rather than absolutely positioned composites.

To replace either image, update the corresponding WebP asset and its intrinsic dimensions in `AboutScene.vue` or `ExperienceScene.vue`. Keep the original PNGs as source artwork. Contact still uses the locally composed waving SVG pose; customize it in `ClayDeveloper.vue` and `ContactScene.vue`. No remote image-generation service is used.

To convert a PNG to WebP: `python -c "from PIL import Image; Image.open('in.png').save('out.webp','WEBP',quality=86)"`.

## SEO

`index.html` holds the title, description and Open Graph / Twitter tags. They point to `https://shuhbamkhare.github.io/`. If your final URL differs, update the `canonical`, `og:url`, `og:image` and `twitter:image` values (and `siteUrl` in `profile.ts`).

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

1. Create a GitHub repository named **`shuhbamkhare.github.io`** under the **`ShuhbamKhare`** account (user sites must be named `<username>.github.io`).
2. Push this project to the `main` branch.
3. In the repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Push (or run the workflow manually from the **Actions** tab). The site appears at `https://<username>.github.io/`.

Base path: for `<username>.github.io` repositories the site is served from `/`, which is the default. The workflow automatically uses `/<repo>/` for any other repository name (a project site). To build locally for a project site: `VITE_BASE=/my-repo/ npm run build` (PowerShell: `$env:VITE_BASE='/my-repo/'; npm run build`).

SPA fallback: the site is a single page with in-page anchors and modal dialogs (no client-side router), so no `404.html` fallback is needed. `public/.nojekyll` is included so GitHub Pages serves the build as-is.

## Deploying to Vercel or Cloudflare Pages later

- **Vercel:** import the repository. `vercel.json` already sets the Vite framework, build command and `dist` output. No environment variables are needed (base path `/`).
- **Cloudflare Pages:** build command `npm run build`, output directory `dist`.
- Under a custom domain, update the canonical and Open Graph URLs in `index.html`.

## Project structure

```
src/
  components/
    layout/         NavBar, SiteFooter
    sections/       Hero, About, Experience, Projects, Skills, Resume, Contact
    projects/       ProjectCard, ProjectModal
    illustrations/  Clay* SVG objects and scene compositions
    ui/             BaseButton, TechTag, StatusBadge, SectionHeading, SocialIcon
  composables/      useReveal, useActiveSection, useResume, useTheme
  data/             profile, experience, projects, skills, resume.html
  types/            TypeScript types
scripts/            Local resume PDF/preview exporter
public/             favicon, og-image, images, updated resume.pdf
```

Animations are subtle (scroll reveals via `motion`, slow CSS floating) and are disabled when the visitor's system requests reduced motion.
