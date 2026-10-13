
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FlashlightIcon as VanillaFlashlightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FlashlightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlashlightIcon>
> = /*@__PURE__*/ build<VanillaFlashlightIcon, SvgProperties>(VanillaFlashlightIcon)
export const Flashlight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlashlightIcon>
> = FlashlightIcon
    