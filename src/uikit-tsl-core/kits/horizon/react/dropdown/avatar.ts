
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { DropdownAvatar as VanillaDropdownAvatar, DropdownAvatarProperties as VanillaDropdownAvatarProperties } from '../../core'
import { build, ClassListProperties } from '../../../../react/index'

export { DropdownAvatar as VanillaDropdownAvatar } from '../../core'

export type DropdownAvatarProperties = VanillaDropdownAvatarProperties & { children?: ReactNode } & ClassListProperties

export const DropdownAvatar: ForwardRefExoticComponent<
  PropsWithoutRef<DropdownAvatarProperties> & RefAttributes<VanillaDropdownAvatar>
> = /* @__PURE__ */ build<VanillaDropdownAvatar, DropdownAvatarProperties>(VanillaDropdownAvatar, "VanillaHorizonDropdownAvatar")
    