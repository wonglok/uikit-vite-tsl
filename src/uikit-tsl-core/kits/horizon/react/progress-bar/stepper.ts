
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ProgressBarStepper as VanillaProgressBarStepper, ProgressBarStepperProperties as VanillaProgressBarStepperProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { ProgressBarStepper as VanillaProgressBarStepper } from '../../core'

export type ProgressBarStepperProperties = VanillaProgressBarStepperProperties & { children?: ReactNode } & ClassListProperties

export const ProgressBarStepper: ForwardRefExoticComponent<
  PropsWithoutRef<ProgressBarStepperProperties> & RefAttributes<VanillaProgressBarStepper>
> = /* @__PURE__ */ build<VanillaProgressBarStepper, ProgressBarStepperProperties>(VanillaProgressBarStepper, "VanillaHorizonProgressBarStepper")
    