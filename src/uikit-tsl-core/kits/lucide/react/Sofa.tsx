
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SofaIcon as VanillaSofaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SofaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSofaIcon>
> = /*@__PURE__*/ build<VanillaSofaIcon, SvgProperties>(VanillaSofaIcon)
export const Sofa: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSofaIcon>
> = SofaIcon
    