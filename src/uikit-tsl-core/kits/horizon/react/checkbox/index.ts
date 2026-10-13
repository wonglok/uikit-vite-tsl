
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Checkbox as VanillaCheckbox, CheckboxProperties as VanillaCheckboxProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { Checkbox as VanillaCheckbox } from '../../core'

export type CheckboxProperties = VanillaCheckboxProperties & ClassListProperties

export const Checkbox: ForwardRefExoticComponent<
  PropsWithoutRef<CheckboxProperties> & RefAttributes<VanillaCheckbox>
> = /* @__PURE__ */ build<VanillaCheckbox, CheckboxProperties>(VanillaCheckbox, "VanillaHorizonCheckbox")
    
