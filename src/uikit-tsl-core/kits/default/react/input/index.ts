
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Input as VanillaInput, InputProperties as VanillaInputProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Input as VanillaInput } from '../../core/index'

export type InputProperties = VanillaInputProperties & ClassListProperties

export const Input: ForwardRefExoticComponent<
  PropsWithoutRef<InputProperties> & RefAttributes<VanillaInput>
> = /* @__PURE__ */ build<VanillaInput, InputProperties>(VanillaInput, "VanillaDefaultInput")
    
