
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AccordionItem as VanillaAccordionItem, AccordionItemProperties as VanillaAccordionItemProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AccordionItem as VanillaAccordionItem } from '../../core/index'

export type AccordionItemProperties = VanillaAccordionItemProperties & { children?: ReactNode } & ClassListProperties

export const AccordionItem: ForwardRefExoticComponent<
  PropsWithoutRef<AccordionItemProperties> & RefAttributes<VanillaAccordionItem>
> = /* @__PURE__ */ build<VanillaAccordionItem, AccordionItemProperties>(VanillaAccordionItem, "VanillaDefaultAccordionItem")
    