
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogAction as VanillaAlertDialogAction, AlertDialogActionProperties as VanillaAlertDialogActionProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AlertDialogAction as VanillaAlertDialogAction } from '../../core/index'

export type AlertDialogActionProperties = VanillaAlertDialogActionProperties & { children?: ReactNode } & ClassListProperties

export const AlertDialogAction: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogActionProperties> & RefAttributes<VanillaAlertDialogAction>
> = /* @__PURE__ */ build<VanillaAlertDialogAction, AlertDialogActionProperties>(VanillaAlertDialogAction, "VanillaDefaultAlertDialogAction")
    