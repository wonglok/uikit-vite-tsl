
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DialogDescription as VanillaDialogDescription, DialogDescriptionProperties as VanillaDialogDescriptionProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { DialogDescription as VanillaDialogDescription } from '../../core/index'

export type DialogDescriptionProperties = VanillaDialogDescriptionProperties & { children?: ReactNode } & ClassListProperties

export const DialogDescription: ForwardRefExoticComponent<
  PropsWithoutRef<DialogDescriptionProperties> & RefAttributes<VanillaDialogDescription>
> = /* @__PURE__ */ build<VanillaDialogDescription, DialogDescriptionProperties>(VanillaDialogDescription, "VanillaDefaultDialogDescription")
    