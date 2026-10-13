
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogContent as VanillaAlertDialogContent, AlertDialogContentProperties as VanillaAlertDialogContentProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AlertDialogContent as VanillaAlertDialogContent } from '../../core/index'

export type AlertDialogContentProperties = VanillaAlertDialogContentProperties & { children?: ReactNode } & ClassListProperties

export const AlertDialogContent: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogContentProperties> & RefAttributes<VanillaAlertDialogContent>
> = /* @__PURE__ */ build<VanillaAlertDialogContent, AlertDialogContentProperties>(VanillaAlertDialogContent, "VanillaDefaultAlertDialogContent")
    