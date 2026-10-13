
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DialogFooter as VanillaDialogFooter, DialogFooterProperties as VanillaDialogFooterProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { DialogFooter as VanillaDialogFooter } from '../../core/index'

export type DialogFooterProperties = VanillaDialogFooterProperties & { children?: ReactNode } & ClassListProperties

export const DialogFooter: ForwardRefExoticComponent<
  PropsWithoutRef<DialogFooterProperties> & RefAttributes<VanillaDialogFooter>
> = /* @__PURE__ */ build<VanillaDialogFooter, DialogFooterProperties>(VanillaDialogFooter, "VanillaDefaultDialogFooter")
    