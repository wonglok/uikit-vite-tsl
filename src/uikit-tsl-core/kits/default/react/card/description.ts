
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { CardDescription as VanillaCardDescription, CardDescriptionProperties as VanillaCardDescriptionProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { CardDescription as VanillaCardDescription } from '../../core/index'

export type CardDescriptionProperties = VanillaCardDescriptionProperties & { children?: ReactNode } & ClassListProperties

export const CardDescription: ForwardRefExoticComponent<
  PropsWithoutRef<CardDescriptionProperties> & RefAttributes<VanillaCardDescription>
> = /* @__PURE__ */ build<VanillaCardDescription, CardDescriptionProperties>(VanillaCardDescription, "VanillaDefaultCardDescription")
    