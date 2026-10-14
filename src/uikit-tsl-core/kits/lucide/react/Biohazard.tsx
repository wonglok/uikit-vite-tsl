
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BiohazardIcon as VanillaBiohazardIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BiohazardIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBiohazardIcon>
> = /*@__PURE__*/ build<VanillaBiohazardIcon, SvgProperties>(VanillaBiohazardIcon, "VanillaBiohazardIcon")
export const Biohazard: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBiohazardIcon>
> = BiohazardIcon
    