
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DropletOffIcon as VanillaDropletOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DropletOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDropletOffIcon>
> = /*@__PURE__*/ build<VanillaDropletOffIcon, SvgProperties>(VanillaDropletOffIcon)
export const DropletOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDropletOffIcon>
> = DropletOffIcon
    