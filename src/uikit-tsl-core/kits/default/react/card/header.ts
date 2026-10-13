
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { CardHeader as VanillaCardHeader, CardHeaderProperties as VanillaCardHeaderProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { CardHeader as VanillaCardHeader } from '../../core/index'

export type CardHeaderProperties = VanillaCardHeaderProperties & { children?: ReactNode } & ClassListProperties

export const CardHeader: ForwardRefExoticComponent<
  PropsWithoutRef<CardHeaderProperties> & RefAttributes<VanillaCardHeader>
> = /* @__PURE__ */ build<VanillaCardHeader, CardHeaderProperties>(VanillaCardHeader, "VanillaDefaultCardHeader")
    