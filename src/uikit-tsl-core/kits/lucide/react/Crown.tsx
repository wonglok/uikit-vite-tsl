
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CrownIcon as VanillaCrownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CrownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCrownIcon>
> = /*@__PURE__*/ build<VanillaCrownIcon, SvgProperties>(VanillaCrownIcon)
export const Crown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCrownIcon>
> = CrownIcon
    