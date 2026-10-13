
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Button as VanillaButton, ButtonProperties as VanillaButtonProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { Button as VanillaButton } from '../../core'

export type ButtonProperties = VanillaButtonProperties & { children?: ReactNode } & ClassListProperties

export const Button: ForwardRefExoticComponent<
  PropsWithoutRef<ButtonProperties> & RefAttributes<VanillaButton>
> = /* @__PURE__ */ build<VanillaButton, ButtonProperties>(VanillaButton, "VanillaHorizonButton")
    
export * from "./icon";export * from "./label-subtext";export * from "./label";