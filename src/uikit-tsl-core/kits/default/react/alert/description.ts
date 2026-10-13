
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDescription as VanillaAlertDescription, AlertDescriptionProperties as VanillaAlertDescriptionProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AlertDescription as VanillaAlertDescription } from '../../core/index'

export type AlertDescriptionProperties = VanillaAlertDescriptionProperties & { children?: ReactNode } & ClassListProperties

export const AlertDescription: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDescriptionProperties> & RefAttributes<VanillaAlertDescription>
> = /* @__PURE__ */ build<VanillaAlertDescription, AlertDescriptionProperties>(VanillaAlertDescription, "VanillaDefaultAlertDescription")
    