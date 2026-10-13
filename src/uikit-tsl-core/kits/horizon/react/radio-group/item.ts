
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { RadioGroupItem as VanillaRadioGroupItem, RadioGroupItemProperties as VanillaRadioGroupItemProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { RadioGroupItem as VanillaRadioGroupItem } from '../../core'

export type RadioGroupItemProperties = VanillaRadioGroupItemProperties & { children?: ReactNode } & ClassListProperties

export const RadioGroupItem: ForwardRefExoticComponent<
  PropsWithoutRef<RadioGroupItemProperties> & RefAttributes<VanillaRadioGroupItem>
> = /* @__PURE__ */ build<VanillaRadioGroupItem, RadioGroupItemProperties>(VanillaRadioGroupItem, "VanillaHorizonRadioGroupItem")
    