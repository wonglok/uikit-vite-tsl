
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CigaretteIcon as VanillaCigaretteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CigaretteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCigaretteIcon>
> = /*@__PURE__*/ build<VanillaCigaretteIcon, SvgProperties>(VanillaCigaretteIcon)
export const Cigarette: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCigaretteIcon>
> = CigaretteIcon
    