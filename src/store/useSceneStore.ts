import { create } from 'zustand'

export type RendererBackend = 'webgpu' | 'webgl'

interface SceneState {
  /** Which backend the renderer actually came up on, or null before init resolves. */
  backend: RendererBackend | null
  /** Strength of the emissive veins in the TSL node graph. */
  distortion: number
  autoRotate: boolean
  setBackend: (backend: RendererBackend) => void
  setDistortion: (distortion: number) => void
  toggleAutoRotate: () => void
}

export const useSceneStore = create<SceneState>()((set) => ({
  backend: null,
  distortion: 0.35,
  autoRotate: true,
  setBackend: (backend) => set({ backend }),
  setDistortion: (distortion) => set({ distortion }),
  toggleAutoRotate: () => set((state) => ({ autoRotate: !state.autoRotate })),
}))
