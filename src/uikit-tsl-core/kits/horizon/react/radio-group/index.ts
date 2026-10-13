
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { RadioGroup as VanillaRadioGroup, RadioGroupProperties as VanillaRadioGroupProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { RadioGroup as VanillaRadioGroup } from '../../core'

export type RadioGroupProperties = VanillaRadioGroupProperties & { children?: ReactNode } & ClassListProperties

export const RadioGroup: ForwardRefExoticComponent<
  PropsWithoutRef<RadioGroupProperties> & RefAttributes<VanillaRadioGroup>
> = /* @__PURE__ */ build<VanillaRadioGroup, RadioGroupProperties>(VanillaRadioGroup, "VanillaHorizonRadioGroup")
    
export * from "./item";