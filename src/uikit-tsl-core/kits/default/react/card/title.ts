
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { CardTitle as VanillaCardTitle, CardTitleProperties as VanillaCardTitleProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { CardTitle as VanillaCardTitle } from '../../core/index'

export type CardTitleProperties = VanillaCardTitleProperties & { children?: ReactNode } & ClassListProperties

export const CardTitle: ForwardRefExoticComponent<
  PropsWithoutRef<CardTitleProperties> & RefAttributes<VanillaCardTitle>
> = /* @__PURE__ */ build<VanillaCardTitle, CardTitleProperties>(VanillaCardTitle, "VanillaDefaultCardTitle")
    