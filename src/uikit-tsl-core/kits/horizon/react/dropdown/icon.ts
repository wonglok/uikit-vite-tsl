
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DropdownIcon as VanillaDropdownIcon, DropdownIconProperties as VanillaDropdownIconProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { DropdownIcon as VanillaDropdownIcon } from '../../core'

export type DropdownIconProperties = VanillaDropdownIconProperties & { children?: ReactNode } & ClassListProperties

export const DropdownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownIconProperties> & RefAttributes<VanillaDropdownIcon>
> = /* @__PURE__ */ build<VanillaDropdownIcon, DropdownIconProperties>(VanillaDropdownIcon, "VanillaHorizonDropdownIcon")
    