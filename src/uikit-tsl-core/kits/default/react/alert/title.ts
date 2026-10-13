
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertTitle as VanillaAlertTitle, AlertTitleProperties as VanillaAlertTitleProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AlertTitle as VanillaAlertTitle } from '../../core/index'

export type AlertTitleProperties = VanillaAlertTitleProperties & { children?: ReactNode } & ClassListProperties

export const AlertTitle: ForwardRefExoticComponent<
  PropsWithoutRef<AlertTitleProperties> & RefAttributes<VanillaAlertTitle>
> = /* @__PURE__ */ build<VanillaAlertTitle, AlertTitleProperties>(VanillaAlertTitle, "VanillaDefaultAlertTitle")
    