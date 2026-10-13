
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Dropdown as VanillaDropdown, DropdownProperties as VanillaDropdownProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { Dropdown as VanillaDropdown } from '../../core'

export type DropdownProperties = VanillaDropdownProperties & { children?: ReactNode } & ClassListProperties

export const Dropdown: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownProperties> & RefAttributes<VanillaDropdown>
> = /* @__PURE__ */ build<VanillaDropdown, DropdownProperties>(VanillaDropdown, "VanillaHorizonDropdown")
    
export * from "./avatar";export * from "./button";export * from "./icon";export * from "./list-item";export * from "./list";export * from "./text-value";