
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GlobeLockIcon as VanillaGlobeLockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GlobeLockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGlobeLockIcon>
> = /*@__PURE__*/ build<VanillaGlobeLockIcon, SvgProperties>(VanillaGlobeLockIcon, "VanillaGlobeLockIcon")
export const GlobeLock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGlobeLockIcon>
> = GlobeLockIcon
    