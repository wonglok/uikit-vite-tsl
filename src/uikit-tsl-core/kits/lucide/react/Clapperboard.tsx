
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClapperboardIcon as VanillaClapperboardIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClapperboardIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClapperboardIcon>
> = /*@__PURE__*/ build<VanillaClapperboardIcon, SvgProperties>(VanillaClapperboardIcon, "VanillaClapperboardIcon")
export const Clapperboard: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClapperboardIcon>
> = ClapperboardIcon
    