
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DialogContent as VanillaDialogContent, DialogContentProperties as VanillaDialogContentProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { DialogContent as VanillaDialogContent } from '../../core/index'

export type DialogContentProperties = VanillaDialogContentProperties & { children?: ReactNode } & ClassListProperties

export const DialogContent: ForwardRefExoticComponent<
  PropsWithoutRef<DialogContentProperties> & RefAttributes<VanillaDialogContent>
> = /* @__PURE__ */ build<VanillaDialogContent, DialogContentProperties>(VanillaDialogContent, "VanillaDefaultDialogContent")
    