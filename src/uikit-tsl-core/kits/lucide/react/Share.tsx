
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShareIcon as VanillaShareIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShareIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShareIcon>
> = /*@__PURE__*/ build<VanillaShareIcon, SvgProperties>(VanillaShareIcon, "VanillaShareIcon")
export const Share: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShareIcon>
> = ShareIcon
    