
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EarthLockIcon as VanillaEarthLockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EarthLockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEarthLockIcon>
> = /*@__PURE__*/ build<VanillaEarthLockIcon, SvgProperties>(VanillaEarthLockIcon)
export const EarthLock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEarthLockIcon>
> = EarthLockIcon
    