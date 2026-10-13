
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Card as VanillaCard, CardProperties as VanillaCardProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Card as VanillaCard } from '../../core/index'

export type CardProperties = VanillaCardProperties & { children?: ReactNode } & ClassListProperties

export const Card: ForwardRefExoticComponent<
  PropsWithoutRef<CardProperties> & RefAttributes<VanillaCard>
> = /* @__PURE__ */ build<VanillaCard, CardProperties>(VanillaCard, "VanillaDefaultCard")
    
export * from "./content";export * from "./description";export * from "./footer";export * from "./header";export * from "./title";