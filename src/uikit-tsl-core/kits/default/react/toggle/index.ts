
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Toggle as VanillaToggle, ToggleProperties as VanillaToggleProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Toggle as VanillaToggle } from '../../core/index'

export type ToggleProperties = VanillaToggleProperties & { children?: ReactNode } & ClassListProperties

export const Toggle: ForwardRefExoticComponent<
  PropsWithoutRef<ToggleProperties> & RefAttributes<VanillaToggle>
> = /* @__PURE__ */ build<VanillaToggle, ToggleProperties>(VanillaToggle, "VanillaDefaultToggle")
    
