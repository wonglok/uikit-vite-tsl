
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ProgressBarStepperStep as VanillaProgressBarStepperStep, ProgressBarStepperStepProperties as VanillaProgressBarStepperStepProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { ProgressBarStepperStep as VanillaProgressBarStepperStep } from '../../core'

export type ProgressBarStepperStepProperties = VanillaProgressBarStepperStepProperties & ClassListProperties

export const ProgressBarStepperStep: ForwardRefExoticComponent<
  PropsWithoutRef<ProgressBarStepperStepProperties> & RefAttributes<VanillaProgressBarStepperStep>
> = /* @__PURE__ */ build<VanillaProgressBarStepperStep, ProgressBarStepperStepProperties>(VanillaProgressBarStepperStep, "VanillaHorizonProgressBarStepperStep")
    