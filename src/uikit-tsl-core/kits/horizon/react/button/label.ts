
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ButtonLabel as VanillaButtonLabel, ButtonLabelProperties as VanillaButtonLabelProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { ButtonLabel as VanillaButtonLabel } from '../../core'

export type ButtonLabelProperties = VanillaButtonLabelProperties & { children?: ReactNode } & ClassListProperties

export const ButtonLabel: ForwardRefExoticComponent<
  PropsWithoutRef<ButtonLabelProperties> & RefAttributes<VanillaButtonLabel>
> = /* @__PURE__ */ build<VanillaButtonLabel, ButtonLabelProperties>(VanillaButtonLabel, "VanillaHorizonButtonLabel")
    