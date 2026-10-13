
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MagnetIcon as VanillaMagnetIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MagnetIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMagnetIcon>
> = /*@__PURE__*/ build<VanillaMagnetIcon, SvgProperties>(VanillaMagnetIcon)
export const Magnet: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMagnetIcon>
> = MagnetIcon
    