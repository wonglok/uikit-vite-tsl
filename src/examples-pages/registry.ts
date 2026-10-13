/**
 * Registry of the uikit example pages.
 *
 * Each entry mirrors one project from upstream `examples/`. The home page and
 * the router are both generated from this list, so adding an example means
 * adding one entry plus its component file.
 */
export interface ExampleEntry {
  /** URL segment and route key. */
  slug: string
  /** Display name on the home page. */
  title: string
  /** One line describing what the example demonstrates. */
  description: string
  /** Upstream packages the example exercises. */
  uses: Array<string>
}

export const examples: Array<ExampleEntry> = [
  {
    slug: 'uikit',
    title: 'UIKit',
    description:
      'The kitchen-sink example: Fullscreen, Container, Text, Video, Image and Portal in one scene.',
    uses: ['@react-three/uikit', '@react-three/drei', '@react-three/xr'],
  },
  {
    slug: 'default',
    title: 'Default Kit',
    description:
      'The shadcn-style component kit: buttons, cards, dialogs, tabs, and the rest of the 66 components.',
    uses: ['@react-three/uikit-default', '@react-three/uikit-lucide'],
  },
  {
    slug: 'horizon',
    title: 'Horizon Kit',
    description:
      'The Horizon UI kit, with its own theme tree and custom panel materials.',
    uses: ['@react-three/uikit-horizon', '@pmndrs/msdfonts'],
  },
  {
    slug: 'dashboard',
    title: 'Dashboard',
    description:
      'A denser application layout built from the default kit, exercising scrolling and pointer events.',
    uses: ['@react-three/uikit-default', '@pmndrs/pointer-events'],
  },
  {
    slug: 'card',
    title: 'Card',
    description:
      'Physical UI panels in a rapier physics scene — uikit surfaces reacting to a 3D world.',
    uses: ['@react-three/uikit-default', '@react-three/rapier'],
  },
  {
    slug: 'market',
    title: 'Market',
    description: 'A storefront layout composed entirely from default kit components.',
    uses: ['@react-three/uikit-default', '@react-three/uikit-lucide'],
  },
  {
    slug: 'auth',
    title: 'Auth',
    description: 'A sign-in form: inputs, labels and buttons laid out with flex.',
    uses: ['@react-three/uikit-default'],
  },
  {
    slug: 'lucide',
    title: 'Lucide Icons',
    description: 'Renders the lucide icon set as uikit SVG components.',
    uses: ['@react-three/uikit-lucide'],
  },
  {
    slug: 'performance',
    title: 'Performance',
    description:
      'A stress test for the instanced panel and glyph batching paths.',
    uses: ['@react-three/uikit'],
  },
  {
    slug: 'ttf-react',
    title: 'TTF (React)',
    description: 'Generating an MSDF atlas at runtime from an uploaded TTF file.',
    uses: ['@react-three/uikit', '@zappar/msdf-generator'],
  },
  {
    slug: 'ttf-vanilla',
    title: 'TTF (Vanilla)',
    description:
      'The same runtime TTF atlas generation, driven through the vanilla API without React.',
    uses: ['@pmndrs/uikit', '@zappar/msdf-generator'],
  },
  {
    slug: 'vanilla',
    title: 'Vanilla',
    description:
      'The vanilla (non-React) API: building a uikit scene imperatively with Video and Svg content.',
    uses: ['@pmndrs/uikit', '@pmndrs/uikit-horizon'],
  },
]
