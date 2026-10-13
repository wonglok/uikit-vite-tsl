
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DropdownList as VanillaDropdownList, DropdownListProperties as VanillaDropdownListProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { DropdownList as VanillaDropdownList } from '../../core'

export type DropdownListProperties = VanillaDropdownListProperties & { children?: ReactNode } & ClassListProperties

export const DropdownList: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownListProperties> & RefAttributes<VanillaDropdownList>
> = /* @__PURE__ */ build<VanillaDropdownList, DropdownListProperties>(VanillaDropdownList, "VanillaHorizonDropdownList")
    