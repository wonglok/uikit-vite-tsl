
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DialogTrigger as VanillaDialogTrigger, DialogTriggerProperties as VanillaDialogTriggerProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { DialogTrigger as VanillaDialogTrigger } from '../../core/index'

export type DialogTriggerProperties = VanillaDialogTriggerProperties & { children?: ReactNode } & ClassListProperties

export const DialogTrigger: ForwardRefExoticComponent<
  PropsWithoutRef<DialogTriggerProperties> & RefAttributes<VanillaDialogTrigger>
> = /* @__PURE__ */ build<VanillaDialogTrigger, DialogTriggerProperties>(VanillaDialogTrigger, "VanillaDefaultDialogTrigger")
    