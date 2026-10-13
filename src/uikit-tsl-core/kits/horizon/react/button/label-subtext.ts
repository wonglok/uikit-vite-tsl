
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ButtonLabelSubtext as VanillaButtonLabelSubtext, ButtonLabelSubtextProperties as VanillaButtonLabelSubtextProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { ButtonLabelSubtext as VanillaButtonLabelSubtext } from '../../core'

export type ButtonLabelSubtextProperties = VanillaButtonLabelSubtextProperties & { children?: ReactNode } & ClassListProperties

export const ButtonLabelSubtext: ForwardRefExoticComponent<
  PropsWithoutRef<ButtonLabelSubtextProperties> & RefAttributes<VanillaButtonLabelSubtext>
> = /* @__PURE__ */ build<VanillaButtonLabelSubtext, ButtonLabelSubtextProperties>(VanillaButtonLabelSubtext, "VanillaHorizonButtonLabelSubtext")
    