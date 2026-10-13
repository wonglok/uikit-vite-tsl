
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Separator as VanillaSeparator, SeparatorProperties as VanillaSeparatorProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Separator as VanillaSeparator } from '../../core/index'

export type SeparatorProperties = VanillaSeparatorProperties & { children?: ReactNode } & ClassListProperties

export const Separator: ForwardRefExoticComponent<
  PropsWithoutRef<SeparatorProperties> & RefAttributes<VanillaSeparator>
> = /* @__PURE__ */ build<VanillaSeparator, SeparatorProperties>(VanillaSeparator, "VanillaDefaultSeparator")
    
