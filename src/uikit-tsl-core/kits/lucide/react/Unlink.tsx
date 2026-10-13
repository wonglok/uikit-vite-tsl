
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UnlinkIcon as VanillaUnlinkIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UnlinkIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUnlinkIcon>
> = /*@__PURE__*/ build<VanillaUnlinkIcon, SvgProperties>(VanillaUnlinkIcon)
export const Unlink: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUnlinkIcon>
> = UnlinkIcon
    