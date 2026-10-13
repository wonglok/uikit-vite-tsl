/**
 * Generator for the local sample images used by the example pages.
 *
 * WHY THESE EXIST
 * The examples used to pull their imagery from remote hosts — unsplash, picsum,
 * `avatar.iran.liara.run`, dicebear, raw.githubusercontent.com. That is three
 * separate problems: several of those hosts send no `Access-Control-Allow-Origin`
 * header (so the browser blocked the request and the element silently rendered
 * nothing), all of them made the examples depend on the network to look right,
 * and shared stock photos made the components harder to judge against each other.
 *
 * HOW TO REGENERATE
 * This module draws with Canvas2D, so it must run in a browser — Node has no 2D
 * canvas context. It is not imported by any page (it is tree-shaken out of the
 * app bundle); it is a build-time step that emits static files:
 *
 *   1. Start the dev server.
 *   2. In the page, import this module and call `generateDataUrls()`, e.g.
 *        await import('/src/sample-images/generate.ts').then(m => m.generateDataUrls())
 *   3. Decode each returned PNG data URL to `public/sample-images/<filename>`.
 *
 * `SAMPLE_IMAGES` below is the manifest: the single list of every image the
 * examples reference. Add a seed here, regenerate, and the path helpers in
 * `./paths.ts` will resolve it.
 *
 * Output is 512x512 for every image, and deterministic — the same seed always
 * produces the same picture, so re-rendering never reshuffles the artwork.
 */
import { SAMPLE_IMAGE_DIR, slugify, type SampleKind } from "./paths"

/** Edge length of every generated PNG, in pixels. */
export const SAMPLE_IMAGE_SIZE = 512

/**
 * Every image the examples reference, keyed by seed.
 *
 * Avatars are drawn as a head-and-shoulders figure; images are abstract fields.
 * The seeds are the same strings the pages pass to `avatarPath`/`imagePath`.
 */
export const SAMPLE_IMAGES: ReadonlyArray<{ kind: SampleKind; seed: string }> = [
  // examples/card
  { kind: "avatar", seed: "Scot" },
  { kind: "avatar", seed: "Theo" },
  { kind: "avatar", seed: "Paul" },
  // examples/default
  { kind: "avatar", seed: "default-avatar" },
  // examples/horizon
  { kind: "avatar", seed: "horizon" },
  // examples/dashboard — team switcher and the recent-sales list
  { kind: "avatar", seed: "personal" },
  { kind: "avatar", seed: "acme-inc" },
  { kind: "avatar", seed: "monsters" },
  { kind: "avatar", seed: "Alicia" },
  { kind: "avatar", seed: "olivia" },
  { kind: "avatar", seed: "jackson" },
  { kind: "avatar", seed: "isabella" },
  { kind: "avatar", seed: "will" },
  { kind: "avatar", seed: "sofia" },
  // examples/uikit
  { kind: "image", seed: "uikit-hero" },
  // examples/dashboard
  { kind: "image", seed: "dashboard-macbook" },
  // examples/market — seeded by album name, so the albums the upstream data
  // lists twice share one cover, exactly as the repeated unsplash URLs did.
  { kind: "image", seed: "market:React Rendezvous" },
  { kind: "image", seed: "market:Async Awakenings" },
  { kind: "image", seed: "market:The Art of Reusability" },
  { kind: "image", seed: "market:Stateful Symphony" },
  { kind: "image", seed: "market:Thinking Components" },
  { kind: "image", seed: "market:Functional Fury" },
]

/**
 * FNV-1a. A tiny, well-known string hash turning a readable seed ("Scot",
 * "market:Stateful Symphony") into a 32-bit number. It scatters adjacent seeds
 * widely, so avatars placed side by side never come out the same colour.
 */
function hashSeed(seed: string): number {
  let hash = 2166136261
  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

/**
 * mulberry32 — a compact seeded PRNG. `Math.random()` cannot be used because the
 * artwork has to be stable across regenerations, so every random choice below
 * comes from this stream instead.
 */
function createRandom(seed: number): () => number {
  let state = seed >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Resizes `canvas`, returns its 2D context, and throws if unavailable. */
function prepareCanvas(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  canvas.width = SAMPLE_IMAGE_SIZE
  canvas.height = SAMPLE_IMAGE_SIZE
  const context = canvas.getContext("2d")
  if (context == null) {
    throw new Error(`${SAMPLE_IMAGE_DIR}: canvas 2d context is unavailable`)
  }
  return context
}

/**
 * Paints a head-and-shoulders avatar over a tinted gradient.
 *
 * `hue` is the avatar's identity: the backdrop runs from a pale tint of it to a
 * deeper one, and the silhouette is near-white so it stays readable at the 20px
 * the dashboard renders it at.
 */
export function drawSampleAvatar(canvas: HTMLCanvasElement, hue: number): void {
  const size = SAMPLE_IMAGE_SIZE
  const context = prepareCanvas(canvas)

  // Backdrop: one hue at two lightnesses, the second rotated 42 degrees so the
  // fill has direction without looking like a flat swatch.
  const backdrop = context.createLinearGradient(0, 0, size, size)
  backdrop.addColorStop(0, `hsl(${hue} 62% 78%)`)
  backdrop.addColorStop(1, `hsl(${(hue + 42) % 360} 52% 58%)`)
  context.fillStyle = backdrop
  context.fillRect(0, 0, size, size)

  // An off-centre highlight, so the gradient gains a little depth.
  const glow = context.createRadialGradient(
    size * 0.3,
    size * 0.24,
    0,
    size * 0.3,
    size * 0.24,
    size * 0.85,
  )
  glow.addColorStop(0, "rgba(255, 255, 255, 0.42)")
  glow.addColorStop(1, "rgba(255, 255, 255, 0)")
  context.fillStyle = glow
  context.fillRect(0, 0, size, size)

  // Silhouette, slightly translucent so the backdrop hue still tints it — that
  // ties the figure to its own avatar colour instead of reading as a white blob.
  context.fillStyle = "rgba(255, 255, 255, 0.92)"

  context.beginPath()
  context.arc(size / 2, size * 0.4, size * 0.175, 0, Math.PI * 2)
  context.fill()

  // Shoulders: the upper half of a wide ellipse whose peak just meets the head.
  context.beginPath()
  context.ellipse(size / 2, size * 0.98, size * 0.37, size * 0.4, 0, Math.PI, Math.PI * 2)
  context.fill()
}

/**
 * Paints an abstract, photo-shaped placeholder: a two-tone gradient with a
 * handful of soft colour fields and a light sheen.
 *
 * Deliberately not a photograph. These stand in for product shots, covers and
 * hero images, and an abstract field reads as "an image is here" at every size
 * without pretending to be content a viewer might mistake for real data.
 */
export function drawSampleImage(canvas: HTMLCanvasElement, seed: number): void {
  const size = SAMPLE_IMAGE_SIZE
  const context = prepareCanvas(canvas)
  const random = createRandom(seed)

  const hue = random() * 360
  const spread = 40 + random() * 70

  const base = context.createLinearGradient(0, 0, size * (0.4 + random()), size)
  base.addColorStop(0, `hsl(${hue} 58% 84%)`)
  base.addColorStop(1, `hsl(${(hue + spread + 360) % 360} 62% 46%)`)
  context.fillStyle = base
  context.fillRect(0, 0, size, size)

  // Soft colour fields. Placed around a circle with jitter rather than uniformly
  // at random, so they overlap into a composition instead of scattering.
  const fields = 4 + Math.floor(random() * 3)
  for (let index = 0; index < fields; index += 1) {
    const angle = (index / fields) * Math.PI * 2 + random() * 0.9
    const distance = size * (0.12 + random() * 0.3)
    const x = size / 2 + Math.cos(angle) * distance
    const y = size / 2 + Math.sin(angle) * distance
    const radius = size * (0.3 + random() * 0.34)
    const fieldHue = (hue + 30 + index * spread * 0.8) % 360

    const field = context.createRadialGradient(x, y, 0, x, y, radius)
    field.addColorStop(0, `hsla(${fieldHue} 72% ${52 + random() * 28}% / 0.72)`)
    field.addColorStop(1, `hsla(${fieldHue} 72% 58% / 0)`)
    context.fillStyle = field
    context.fillRect(0, 0, size, size)
  }

  // A few crisp translucent rings, at low alpha. Pure gradients read as blur at
  // small sizes; these give the placeholder some structure to hold onto.
  context.strokeStyle = "rgba(255, 255, 255, 0.22)"
  const rings = 2 + Math.floor(random() * 3)
  for (let index = 0; index < rings; index += 1) {
    context.lineWidth = size * (0.006 + random() * 0.018)
    context.beginPath()
    context.arc(random() * size, random() * size, size * (0.08 + random() * 0.3), 0, Math.PI * 2)
    context.stroke()
  }

  // Diagonal sheen across the top-left, matching the avatar's light direction so
  // the two generators look like one family.
  const sheen = context.createLinearGradient(0, 0, size, size)
  sheen.addColorStop(0, "rgba(255, 255, 255, 0.3)")
  sheen.addColorStop(0.5, "rgba(255, 255, 255, 0)")
  sheen.addColorStop(1, "rgba(0, 0, 0, 0.12)")
  context.fillStyle = sheen
  context.fillRect(0, 0, size, size)
}

/** Filename `generateDataUrls` produces for a manifest entry. */
export function fileNameFor(entry: { kind: SampleKind; seed: string }): string {
  return `${entry.kind}-${slugify(entry.seed)}.png`
}

/**
 * Draws every entry in {@link SAMPLE_IMAGES} and returns a filename -> PNG data
 * URL map. Run this in a browser and write each entry to
 * `public/${SAMPLE_IMAGE_DIR}/`.
 */
export function generateDataUrls(): Record<string, string> {
  const canvas = document.createElement("canvas")
  const output: Record<string, string> = {}

  for (const entry of SAMPLE_IMAGES) {
    const digest = hashSeed(entry.seed)
    if (entry.kind === "avatar") {
      drawSampleAvatar(canvas, digest % 360)
    } else {
      drawSampleImage(canvas, digest)
    }
    output[fileNameFor(entry)] = canvas.toDataURL("image/png")
  }

  return output
}
