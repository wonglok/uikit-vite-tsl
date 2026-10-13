
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { AlertDialogTitle as VanillaAlertDialogTitle, AlertDialogTitleProperties as VanillaAlertDialogTitleProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { AlertDialogTitle as VanillaAlertDialogTitle } from '../../core/index'

export type AlertDialogTitleProperties = VanillaAlertDialogTitleProperties & { children?: ReactNode } & ClassListProperties

export const AlertDialogTitle: ForwardRefExoticComponent<
  PropsWithoutRef<AlertDialogTitleProperties> & RefAttributes<VanillaAlertDialogTitle>
> = /* @__PURE__ */ build<VanillaAlertDialogTitle, AlertDialogTitleProperties>(VanillaAlertDialogTitle, "VanillaDefaultAlertDialogTitle")
    