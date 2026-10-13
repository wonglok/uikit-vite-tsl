
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { InputField as VanillaInputField, InputFieldProperties as VanillaInputFieldProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { InputField as VanillaInputField } from '../../core'

export type InputFieldProperties = VanillaInputFieldProperties & { children?: ReactNode } & ClassListProperties

export const InputField: ForwardRefExoticComponent<
  PropsWithoutRef<InputFieldProperties> & RefAttributes<VanillaInputField>
> = /* @__PURE__ */ build<VanillaInputField, InputFieldProperties>(VanillaInputField, "VanillaHorizonInputField")
    
