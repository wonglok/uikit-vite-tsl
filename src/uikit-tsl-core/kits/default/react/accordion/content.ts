
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AccordionContent as VanillaAccordionContent, AccordionContentProperties as VanillaAccordionContentProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AccordionContent as VanillaAccordionContent } from '../../core/index'

export type AccordionContentProperties = VanillaAccordionContentProperties & { children?: ReactNode } & ClassListProperties

export const AccordionContent: ForwardRefExoticComponent<
  PropsWithoutRef<AccordionContentProperties> & RefAttributes<VanillaAccordionContent>
> = /* @__PURE__ */ build<VanillaAccordionContent, AccordionContentProperties>(VanillaAccordionContent, "VanillaDefaultAccordionContent")
    