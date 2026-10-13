
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DialogHeader as VanillaDialogHeader, DialogHeaderProperties as VanillaDialogHeaderProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { DialogHeader as VanillaDialogHeader } from '../../core/index'

export type DialogHeaderProperties = VanillaDialogHeaderProperties & { children?: ReactNode } & ClassListProperties

export const DialogHeader: ForwardRefExoticComponent<
  PropsWithoutRef<DialogHeaderProperties> & RefAttributes<VanillaDialogHeader>
> = /* @__PURE__ */ build<VanillaDialogHeader, DialogHeaderProperties>(VanillaDialogHeader, "VanillaDefaultDialogHeader")
    