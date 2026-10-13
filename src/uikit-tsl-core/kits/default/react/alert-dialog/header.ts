
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogHeader as VanillaAlertDialogHeader, AlertDialogHeaderProperties as VanillaAlertDialogHeaderProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AlertDialogHeader as VanillaAlertDialogHeader } from '../../core/index'

export type AlertDialogHeaderProperties = VanillaAlertDialogHeaderProperties & { children?: ReactNode } & ClassListProperties

export const AlertDialogHeader: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogHeaderProperties> & RefAttributes<VanillaAlertDialogHeader>
> = /* @__PURE__ */ build<VanillaAlertDialogHeader, AlertDialogHeaderProperties>(VanillaAlertDialogHeader, "VanillaDefaultAlertDialogHeader")
    