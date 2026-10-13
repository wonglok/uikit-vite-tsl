
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MicrochipIcon as VanillaMicrochipIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MicrochipIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMicrochipIcon>
> = /*@__PURE__*/ build<VanillaMicrochipIcon, SvgProperties>(VanillaMicrochipIcon)
export const Microchip: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMicrochipIcon>
> = MicrochipIcon
    