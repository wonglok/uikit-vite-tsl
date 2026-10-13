
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Input as VanillaInput, InputProperties as VanillaInputProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { Input as VanillaInput } from '../../core'

export type InputProperties = VanillaInputProperties & { children?: ReactNode } & ClassListProperties

export const Input: ForwardRefExoticComponent<
  PropsWithoutRef<InputProperties> & RefAttributes<VanillaInput>
> = /* @__PURE__ */ build<VanillaInput, InputProperties>(VanillaInput, "VanillaHorizonInput")
    
