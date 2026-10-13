
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DialogTitle as VanillaDialogTitle, DialogTitleProperties as VanillaDialogTitleProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { DialogTitle as VanillaDialogTitle } from '../../core/index'

export type DialogTitleProperties = VanillaDialogTitleProperties & { children?: ReactNode } & ClassListProperties

export const DialogTitle: ForwardRefExoticComponent<
  PropsWithoutRef<DialogTitleProperties> & RefAttributes<VanillaDialogTitle>
> = /* @__PURE__ */ build<VanillaDialogTitle, DialogTitleProperties>(VanillaDialogTitle, "VanillaDefaultDialogTitle")
    