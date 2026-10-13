
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ToggleGroupItem as VanillaToggleGroupItem, ToggleGroupItemProperties as VanillaToggleGroupItemProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { ToggleGroupItem as VanillaToggleGroupItem } from '../../core/index'

export type ToggleGroupItemProperties = VanillaToggleGroupItemProperties & { children?: ReactNode } & ClassListProperties

export const ToggleGroupItem: ForwardRefExoticComponent<
  PropsWithoutRef<ToggleGroupItemProperties> & RefAttributes<VanillaToggleGroupItem>
> = /* @__PURE__ */ build<VanillaToggleGroupItem, ToggleGroupItemProperties>(VanillaToggleGroupItem, "VanillaDefaultToggleGroupItem")
    