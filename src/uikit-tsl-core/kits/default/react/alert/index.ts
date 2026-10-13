
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Alert as VanillaAlert, AlertProperties as VanillaAlertProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Alert as VanillaAlert } from '../../core/index'

export type AlertProperties = VanillaAlertProperties & { children?: ReactNode } & ClassListProperties

export const Alert: ForwardRefExoticComponent<
  PropsWithoutRef<AlertProperties> & RefAttributes<VanillaAlert>
> = /* @__PURE__ */ build<VanillaAlert, AlertProperties>(VanillaAlert, "VanillaDefaultAlert")
    
export * from "./description";export * from "./icon";export * from "./title";