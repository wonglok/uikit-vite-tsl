
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PandaIcon as VanillaPandaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PandaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPandaIcon>
> = /*@__PURE__*/ build<VanillaPandaIcon, SvgProperties>(VanillaPandaIcon)
export const Panda: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPandaIcon>
> = PandaIcon
    