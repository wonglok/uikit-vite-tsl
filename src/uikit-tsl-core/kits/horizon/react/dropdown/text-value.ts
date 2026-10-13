
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DropdownTextValue as VanillaDropdownTextValue, DropdownTextValueProperties as VanillaDropdownTextValueProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { DropdownTextValue as VanillaDropdownTextValue } from '../../core'

export type DropdownTextValueProperties = VanillaDropdownTextValueProperties & { children?: ReactNode } & ClassListProperties

export const DropdownTextValue: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownTextValueProperties> & RefAttributes<VanillaDropdownTextValue>
> = /* @__PURE__ */ build<VanillaDropdownTextValue, DropdownTextValueProperties>(VanillaDropdownTextValue, "VanillaHorizonDropdownTextValue")
    