
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MarsStrokeIcon as VanillaMarsStrokeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MarsStrokeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMarsStrokeIcon>
> = /*@__PURE__*/ build<VanillaMarsStrokeIcon, SvgProperties>(VanillaMarsStrokeIcon)
export const MarsStroke: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMarsStrokeIcon>
> = MarsStrokeIcon
    