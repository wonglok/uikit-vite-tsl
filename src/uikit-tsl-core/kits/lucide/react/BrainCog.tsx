
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BrainCogIcon as VanillaBrainCogIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BrainCogIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrainCogIcon>
> = /*@__PURE__*/ build<VanillaBrainCogIcon, SvgProperties>(VanillaBrainCogIcon)
export const BrainCog: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBrainCogIcon>
> = BrainCogIcon
    