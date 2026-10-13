
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogTrigger as VanillaAlertDialogTrigger, AlertDialogTriggerProperties as VanillaAlertDialogTriggerProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AlertDialogTrigger as VanillaAlertDialogTrigger } from '../../core/index'

export type AlertDialogTriggerProperties = VanillaAlertDialogTriggerProperties & { children?: ReactNode } & ClassListProperties

export const AlertDialogTrigger: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogTriggerProperties> & RefAttributes<VanillaAlertDialogTrigger>
> = /* @__PURE__ */ build<VanillaAlertDialogTrigger, AlertDialogTriggerProperties>(VanillaAlertDialogTrigger, "VanillaDefaultAlertDialogTrigger")
    