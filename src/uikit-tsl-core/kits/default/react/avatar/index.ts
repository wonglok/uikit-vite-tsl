
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Avatar as VanillaAvatar, AvatarProperties as VanillaAvatarProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Avatar as VanillaAvatar } from '../../core/index'

export type AvatarProperties = VanillaAvatarProperties & ClassListProperties

export const Avatar: ForwardRefExoticComponent<
  PropsWithoutRef<AvatarProperties> & RefAttributes<VanillaAvatar>
> = /* @__PURE__ */ build<VanillaAvatar, AvatarProperties>(VanillaAvatar, "VanillaDefaultAvatar")
    
