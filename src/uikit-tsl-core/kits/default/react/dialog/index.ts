
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Dialog as VanillaDialog, DialogProperties as VanillaDialogProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Dialog as VanillaDialog } from '../../core/index'

export type DialogProperties = VanillaDialogProperties & { children?: ReactNode } & ClassListProperties

export const Dialog: ForwardRefExoticComponent<
  PropsWithoutRef<DialogProperties> & RefAttributes<VanillaDialog>
> = /* @__PURE__ */ build<VanillaDialog, DialogProperties>(VanillaDialog, "VanillaDefaultDialog")
    
export * from "./content";export * from "./description";export * from "./footer";export * from "./header";export * from "./title";export * from "./trigger";