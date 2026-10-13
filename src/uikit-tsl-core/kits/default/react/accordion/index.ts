
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Accordion as VanillaAccordion, AccordionProperties as VanillaAccordionProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Accordion as VanillaAccordion } from '../../core/index'

export type AccordionProperties = VanillaAccordionProperties & { children?: ReactNode } & ClassListProperties

export const Accordion: ForwardRefExoticComponent<
  PropsWithoutRef<AccordionProperties> & RefAttributes<VanillaAccordion>
> = /* @__PURE__ */ build<VanillaAccordion, AccordionProperties>(VanillaAccordion, "VanillaDefaultAccordion")
    
export * from "./content";export * from "./item";export * from "./trigger-icon";export * from "./trigger";