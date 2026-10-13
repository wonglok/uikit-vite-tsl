
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogDescription as VanillaAlertDialogDescription, AlertDialogDescriptionProperties as VanillaAlertDialogDescriptionProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AlertDialogDescription as VanillaAlertDialogDescription } from '../../core/index'

export type AlertDialogDescriptionProperties = VanillaAlertDialogDescriptionProperties & { children?: ReactNode } & ClassListProperties

export const AlertDialogDescription: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogDescriptionProperties> & RefAttributes<VanillaAlertDialogDescription>
> = /* @__PURE__ */ build<VanillaAlertDialogDescription, AlertDialogDescriptionProperties>(VanillaAlertDialogDescription, "VanillaDefaultAlertDialogDescription")
    