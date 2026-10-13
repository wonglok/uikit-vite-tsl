
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogFooter as VanillaAlertDialogFooter, AlertDialogFooterProperties as VanillaAlertDialogFooterProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AlertDialogFooter as VanillaAlertDialogFooter } from '../../core/index'

export type AlertDialogFooterProperties = VanillaAlertDialogFooterProperties & { children?: ReactNode } & ClassListProperties

export const AlertDialogFooter: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogFooterProperties> & RefAttributes<VanillaAlertDialogFooter>
> = /* @__PURE__ */ build<VanillaAlertDialogFooter, AlertDialogFooterProperties>(VanillaAlertDialogFooter, "VanillaDefaultAlertDialogFooter")
    