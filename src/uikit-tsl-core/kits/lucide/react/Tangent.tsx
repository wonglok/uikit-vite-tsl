
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TangentIcon as VanillaTangentIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TangentIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTangentIcon>
> = /*@__PURE__*/ build<VanillaTangentIcon, SvgProperties>(VanillaTangentIcon)
export const Tangent: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTangentIcon>
> = TangentIcon
    