import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { chromium } from 'playwright-core'

const source = fileURLToPath(new URL('../src/data/resume.html', import.meta.url))
const pdf = fileURLToPath(new URL('../public/resume.pdf', import.meta.url))
const preview = fileURLToPath(new URL('../public/images/resume-preview.png', import.meta.url))
await mkdir(fileURLToPath(new URL('../public/images', import.meta.url)), { recursive: true })
await readFile(source)
const browser = await chromium.launch(
  process.env.BROWSER_EXECUTABLE_PATH
    ? { executablePath: process.env.BROWSER_EXECUTABLE_PATH }
    : { channel: process.platform === 'win32' ? 'msedge' : 'chrome' },
)
try {
  const page = await browser.newPage({ viewport: { width: 900, height: 1300 } })
  await page.goto(pathToFileURL(source).href)
  await page.emulateMedia({ media: 'print' })
  await page.evaluate(() => document.fonts.ready)
  // Chromium rounds millimeter dimensions to fractions of a CSS pixel.
  const maximumPageHeight = (267 / 25.4) * 96 + 0.5
  const overflow = await page.locator('.page').evaluateAll(
    (pages, maximum) => pages.some((page) => page.getBoundingClientRect().height > maximum),
    maximumPageHeight,
  )
  if (overflow) throw new Error('Resume content exceeds the intended A4 page height. Shorten it before export.')
  const buffer = await page.pdf({ preferCSSPageSize: true, printBackground: false, tagged: true, outline: true })
  await writeFile(pdf, buffer)
  await page.locator('.page').first().screenshot({ path: preview })
  console.log(`Exported ${pdf}\nPreview ${preview}`)
} finally {
  await browser.close()
}
