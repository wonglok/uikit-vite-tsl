
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AccordionTriggerIcon as VanillaAccordionTriggerIcon, AccordionTriggerIconProperties as VanillaAccordionTriggerIconProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AccordionTriggerIcon as VanillaAccordionTriggerIcon } from '../../core/index'

export type AccordionTriggerIconProperties = VanillaAccordionTriggerIconProperties & ClassListProperties

export const AccordionTriggerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<AccordionTriggerIconProperties> & RefAttributes<VanillaAccordionTriggerIcon>
> = /* @__PURE__ */ build<VanillaAccordionTriggerIcon, AccordionTriggerIconProperties>(VanillaAccordionTriggerIcon, "VanillaDefaultAccordionTriggerIcon")
    