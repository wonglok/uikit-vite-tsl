/**
 * Generates `src/uikit-tsl-core/loaders/msdf-worker.ts`.
 *
 * Adapted from upstream `packages/uikit/scripts/build-msdf-assets.mjs`, whose
 * output (`msdf-worker.ts`) is gitignored upstream and therefore missing from
 * the source checkout. That file is what the TTF-upload path needs: it inlines
 * the esbuild-bundled Zappar MSDF worker plus the generator's WASM as a base64
 * data URI, so no external asset fetch is required at runtime.
 *
 * Run with:  node scripts/build-msdf-assets.mjs
 */
import { readFile, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'

import { build } from 'esbuild'

const require = createRequire(import.meta.url)

const wasm = await readFile(
  require.resolve('@zappar/msdf-generator/msdfgen_wasm.wasm'),
  'base64',
)
const wasmUrl = `data:application/octet-stream;base64,${wasm}`

const { outputFiles } = await build({
  entryPoints: [require.resolve('@zappar/msdf-generator/worker.js')],
  bundle: true,
  format: 'esm',
  write: false,
})

const workerSource = outputFiles[0].text

await writeFile(
  new URL('../src/uikit-tsl-core/loaders/msdf-worker.ts', import.meta.url),
  `// prettier-ignore\nexport const workerSource = ${JSON.stringify(workerSource)}\n// prettier-ignore\nexport const wasmUrl = ${JSON.stringify(wasmUrl)}\n`,
)

console.log(`wrote msdf-worker.ts (worker ${workerSource.length}B, wasm ${wasmUrl.length}B)`)
