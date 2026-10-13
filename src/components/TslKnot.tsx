import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import type { Mesh } from 'three'
import { MeshStandardNodeMaterial } from 'three/webgpu'
import {
  color,
  mix,
  mx_fractal_noise_float,
  positionLocal,
  time,
  uniform,
} from 'three/tsl'
import { useSceneStore } from '../store/useSceneStore'

/**
 * A torus knot shaded entirely with Three.js Shading Language.
 *
 * TSL compiles this one graph down to WGSL for the WebGPU backend and to
 * GLSL for the WebGL2 backend, so the same material runs on both.
 */
export function TslKnot() {
  const meshRef = useRef<Mesh>(null)
  const autoRotate = useSceneStore((state) => state.autoRotate)

  const { material, distortion } = useMemo(() => {
    const distortionUniform = uniform(0.35)

    // Ridged fractal noise in local space, drifting forward with time.
    const noise = mx_fractal_noise_float(
      positionLocal.mul(1.6).add(time.mul(0.15)),
      3,
    )
    const veins = noise.abs().oneMinus().pow(3)

    const deep = color('#0b1026')
    const hot = color('#ff5f2e')
    const sheen = color('#39d0ff')

    const base = mix(deep, hot, veins)
    const shaded = mix(base, sheen, veins.mul(0.6).smoothstep(0.2, 0.9))

    const nodeMaterial = new MeshStandardNodeMaterial()
    nodeMaterial.colorNode = shaded
    nodeMaterial.emissiveNode = hot.mul(veins.mul(veins).mul(distortionUniform))
    nodeMaterial.roughnessNode = veins.remap(0, 1, 0.15, 0.75)
    nodeMaterial.metalness = 0.35

    return { material: nodeMaterial, distortion: distortionUniform }
  }, [])

  useEffect(() => () => material.dispose(), [material])

  useFrame((_, delta) => {
    // Ease toward whatever the UI slider is currently asking for.
    const target = useSceneStore.getState().distortion
    distortion.value += (target - distortion.value) * Math.min(1, delta * 4)

    const mesh = meshRef.current
    if (mesh && autoRotate) {
      mesh.rotation.y += delta * 0.4
      mesh.rotation.x += delta * 0.15
    }
  })

  return (
    <mesh ref={meshRef} material={material}>
      <torusKnotGeometry args={[1, 0.34, 256, 48]} />
    </mesh>
  )
}
