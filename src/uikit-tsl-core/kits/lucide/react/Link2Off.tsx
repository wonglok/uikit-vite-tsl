
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Link2OffIcon as VanillaLink2OffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Link2OffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLink2OffIcon>
> = /*@__PURE__*/ build<VanillaLink2OffIcon, SvgProperties>(VanillaLink2OffIcon)
export const Link2Off: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLink2OffIcon>
> = Link2OffIcon
    