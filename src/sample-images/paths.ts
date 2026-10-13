/**
 * Where the locally generated sample images live, and how their seeds map onto
 * filenames.
 *
 * The examples reference these paths instead of remote hosts. The images
 * themselves are produced by `./generate.ts` and committed under
 * `public/sample-images/`; this module is the single definition of the naming
 * scheme, shared by the generator and the pages, so the two cannot drift.
 *
 * WHY: the examples used to pull imagery from unsplash, picsum,
 * `avatar.iran.liara.run`, dicebear and raw.githubusercontent.com. Several of
 * those send no `Access-Control-Allow-Origin` header, so the browser blocked
 * them and the element silently rendered nothing; all of them made the examples
 * depend on the network. See `./generate.ts` for the full rationale.
 */

/** Directory under `public/` that holds the generated PNGs. */
export const SAMPLE_IMAGE_DIR = "sample-images";

/** Which generator draws a given image. */
export type SampleKind = "avatar" | "image"

/**
 * Normalises a seed into a filename-safe slug: lowercased, with every run of
 * non-alphanumeric characters collapsed to a single dash.
 */
export function slugify(seed: string): string {
  return seed
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

/**
 * Public URL of the sample image for `seed`. Serving from `public/` means these
 * are plain static files — no bundler import, no data URL, no network.
 */
export function samplePath(kind: SampleKind, seed: string): string {
  return `/${SAMPLE_IMAGE_DIR}/${kind}-${slugify(seed)}.png`
}

/** Public URL of the avatar generated for `seed`. */
export function avatarPath(seed: string): string {
  return samplePath("avatar", seed)
}

/** Public URL of the abstract image generated for `seed`. */
export function imagePath(seed: string): string {
  return samplePath("image", seed)
}
