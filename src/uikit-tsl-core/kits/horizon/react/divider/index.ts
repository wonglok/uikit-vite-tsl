
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Divider as VanillaDivider, DividerProperties as VanillaDividerProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { Divider as VanillaDivider } from '../../core'

export type DividerProperties = VanillaDividerProperties & { children?: ReactNode } & ClassListProperties

export const Divider: ForwardRefExoticComponent<
  PropsWithoutRef<DividerProperties> & RefAttributes<VanillaDivider>
> = /* @__PURE__ */ build<VanillaDivider, DividerProperties>(VanillaDivider, "VanillaHorizonDivider")
    
