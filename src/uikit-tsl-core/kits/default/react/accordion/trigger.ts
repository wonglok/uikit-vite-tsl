
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AccordionTrigger as VanillaAccordionTrigger, AccordionTriggerProperties as VanillaAccordionTriggerProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AccordionTrigger as VanillaAccordionTrigger } from '../../core/index'

export type AccordionTriggerProperties = VanillaAccordionTriggerProperties & { children?: ReactNode } & ClassListProperties

export const AccordionTrigger: ForwardRefExoticComponent<
  PropsWithoutRef<AccordionTriggerProperties> & RefAttributes<VanillaAccordionTrigger>
> = /* @__PURE__ */ build<VanillaAccordionTrigger, AccordionTriggerProperties>(VanillaAccordionTrigger, "VanillaDefaultAccordionTrigger")
    