
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Progress as VanillaProgress, ProgressProperties as VanillaProgressProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Progress as VanillaProgress } from '../../core/index'

export type ProgressProperties = VanillaProgressProperties & ClassListProperties

export const Progress: ForwardRefExoticComponent<
  PropsWithoutRef<ProgressProperties> & RefAttributes<VanillaProgress>
> = /* @__PURE__ */ build<VanillaProgress, ProgressProperties>(VanillaProgress, "VanillaDefaultProgress")
    
