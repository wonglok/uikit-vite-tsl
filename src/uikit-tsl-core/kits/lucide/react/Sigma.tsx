
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SigmaIcon as VanillaSigmaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SigmaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSigmaIcon>
> = /*@__PURE__*/ build<VanillaSigmaIcon, SvgProperties>(VanillaSigmaIcon)
export const Sigma: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSigmaIcon>
> = SigmaIcon
    