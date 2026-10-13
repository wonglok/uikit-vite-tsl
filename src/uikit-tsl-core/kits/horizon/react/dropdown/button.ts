
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DropdownButton as VanillaDropdownButton, DropdownButtonProperties as VanillaDropdownButtonProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { DropdownButton as VanillaDropdownButton } from '../../core'

export type DropdownButtonProperties = VanillaDropdownButtonProperties & { children?: ReactNode } & ClassListProperties

export const DropdownButton: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownButtonProperties> & RefAttributes<VanillaDropdownButton>
> = /* @__PURE__ */ build<VanillaDropdownButton, DropdownButtonProperties>(VanillaDropdownButton, "VanillaHorizonDropdownButton")
    