
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Skeleton as VanillaSkeleton, SkeletonProperties as VanillaSkeletonProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Skeleton as VanillaSkeleton } from '../../core/index'

export type SkeletonProperties = VanillaSkeletonProperties & { children?: ReactNode } & ClassListProperties

export const Skeleton: ForwardRefExoticComponent<
  PropsWithoutRef<SkeletonProperties> & RefAttributes<VanillaSkeleton>
> = /* @__PURE__ */ build<VanillaSkeleton, SkeletonProperties>(VanillaSkeleton, "VanillaDefaultSkeleton")
    
