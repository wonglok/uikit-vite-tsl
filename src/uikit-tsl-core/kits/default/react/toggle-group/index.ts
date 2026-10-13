
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { ToggleGroup as VanillaToggleGroup, ToggleGroupProperties as VanillaToggleGroupProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { ToggleGroup as VanillaToggleGroup } from '../../core/index'

export type ToggleGroupProperties = VanillaToggleGroupProperties & { children?: ReactNode } & ClassListProperties

export const ToggleGroup: ForwardRefExoticComponent<
  PropsWithoutRef<ToggleGroupProperties> & RefAttributes<VanillaToggleGroup>
> = /* @__PURE__ */ build<VanillaToggleGroup, ToggleGroupProperties>(VanillaToggleGroup, "VanillaDefaultToggleGroup")
    
export * from "./item";