
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertIcon as VanillaAlertIcon, AlertIconProperties as VanillaAlertIconProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AlertIcon as VanillaAlertIcon } from '../../core/index'

export type AlertIconProperties = VanillaAlertIconProperties & { children?: ReactNode } & ClassListProperties

export const AlertIcon: ForwardRefExoticComponent<
  PropsWithoutRef<AlertIconProperties> & RefAttributes<VanillaAlertIcon>
> = /* @__PURE__ */ build<VanillaAlertIcon, AlertIconProperties>(VanillaAlertIcon, "VanillaDefaultAlertIcon")
    