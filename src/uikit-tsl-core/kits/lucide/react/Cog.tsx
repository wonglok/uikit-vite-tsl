
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CogIcon as VanillaCogIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CogIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCogIcon>
> = /*@__PURE__*/ build<VanillaCogIcon, SvgProperties>(VanillaCogIcon, "VanillaCogIcon")
export const Cog: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCogIcon>
> = CogIcon
    