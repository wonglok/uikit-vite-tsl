
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ButtonIcon as VanillaButtonIcon, ButtonIconProperties as VanillaButtonIconProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { ButtonIcon as VanillaButtonIcon } from '../../core'

export type ButtonIconProperties = VanillaButtonIconProperties & { children?: ReactNode } & ClassListProperties

export const ButtonIcon: ForwardRefExoticComponent<
  PropsWithoutRef<ButtonIconProperties> & RefAttributes<VanillaButtonIcon>
> = /* @__PURE__ */ build<VanillaButtonIcon, ButtonIconProperties>(VanillaButtonIcon, "VanillaHorizonButtonIcon")
    