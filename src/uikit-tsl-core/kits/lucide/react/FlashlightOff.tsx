
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FlashlightOffIcon as VanillaFlashlightOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FlashlightOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlashlightOffIcon>
> = /*@__PURE__*/ build<VanillaFlashlightOffIcon, SvgProperties>(VanillaFlashlightOffIcon)
export const FlashlightOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlashlightOffIcon>
> = FlashlightOffIcon
    