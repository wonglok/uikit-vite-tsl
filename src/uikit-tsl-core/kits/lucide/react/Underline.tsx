
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UnderlineIcon as VanillaUnderlineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UnderlineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUnderlineIcon>
> = /*@__PURE__*/ build<VanillaUnderlineIcon, SvgProperties>(VanillaUnderlineIcon)
export const Underline: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUnderlineIcon>
> = UnderlineIcon
    