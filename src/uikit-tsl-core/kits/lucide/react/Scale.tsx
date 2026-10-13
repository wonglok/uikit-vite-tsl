
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScaleIcon as VanillaScaleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScaleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScaleIcon>
> = /*@__PURE__*/ build<VanillaScaleIcon, SvgProperties>(VanillaScaleIcon)
export const Scale: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScaleIcon>
> = ScaleIcon
    