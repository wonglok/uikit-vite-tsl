
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialog as VanillaAlertDialog, AlertDialogProperties as VanillaAlertDialogProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AlertDialog as VanillaAlertDialog } from '../../core/index'

export type AlertDialogProperties = VanillaAlertDialogProperties & { children?: ReactNode } & ClassListProperties

export const AlertDialog: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogProperties> & RefAttributes<VanillaAlertDialog>
> = /* @__PURE__ */ build<VanillaAlertDialog, AlertDialogProperties>(VanillaAlertDialog, "VanillaDefaultAlertDialog")
    
export * from "./action";export * from "./cancel";export * from "./content";export * from "./description";export * from "./footer";export * from "./header";export * from "./title";export * from "./trigger";