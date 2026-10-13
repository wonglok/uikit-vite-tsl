
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ProgressBar as VanillaProgressBar, ProgressBarProperties as VanillaProgressBarProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { ProgressBar as VanillaProgressBar } from '../../core'

export type ProgressBarProperties = VanillaProgressBarProperties & ClassListProperties

export const ProgressBar: ForwardRefExoticComponent<
  PropsWithoutRef<ProgressBarProperties> & RefAttributes<VanillaProgressBar>
> = /* @__PURE__ */ build<VanillaProgressBar, ProgressBarProperties>(VanillaProgressBar, "VanillaHorizonProgressBar")
    
export * from "./stepper-step";export * from "./stepper";