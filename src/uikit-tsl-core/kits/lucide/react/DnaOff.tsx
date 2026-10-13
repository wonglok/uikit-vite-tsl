
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DnaOffIcon as VanillaDnaOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DnaOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDnaOffIcon>
> = /*@__PURE__*/ build<VanillaDnaOffIcon, SvgProperties>(VanillaDnaOffIcon)
export const DnaOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDnaOffIcon>
> = DnaOffIcon
    