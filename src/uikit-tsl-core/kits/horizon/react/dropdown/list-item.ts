
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DropdownListItem as VanillaDropdownListItem, DropdownListItemProperties as VanillaDropdownListItemProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { DropdownListItem as VanillaDropdownListItem } from '../../core'

export type DropdownListItemProperties = VanillaDropdownListItemProperties & { children?: ReactNode } & ClassListProperties

export const DropdownListItem: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownListItemProperties> & RefAttributes<VanillaDropdownListItem>
> = /* @__PURE__ */ build<VanillaDropdownListItem, DropdownListItemProperties>(VanillaDropdownListItem, "VanillaHorizonDropdownListItem")
    