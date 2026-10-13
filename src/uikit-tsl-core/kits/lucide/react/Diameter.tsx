
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DiameterIcon as VanillaDiameterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DiameterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiameterIcon>
> = /*@__PURE__*/ build<VanillaDiameterIcon, SvgProperties>(VanillaDiameterIcon)
export const Diameter: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiameterIcon>
> = DiameterIcon
    