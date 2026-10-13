
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogCancel as VanillaAlertDialogCancel, AlertDialogCancelProperties as VanillaAlertDialogCancelProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AlertDialogCancel as VanillaAlertDialogCancel } from '../../core/index'

export type AlertDialogCancelProperties = VanillaAlertDialogCancelProperties & { children?: ReactNode } & ClassListProperties

export const AlertDialogCancel: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogCancelProperties> & RefAttributes<VanillaAlertDialogCancel>
> = /* @__PURE__ */ build<VanillaAlertDialogCancel, AlertDialogCancelProperties>(VanillaAlertDialogCancel, "VanillaDefaultAlertDialogCancel")
    