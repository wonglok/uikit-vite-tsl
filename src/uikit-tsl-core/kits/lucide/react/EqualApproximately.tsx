
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EqualApproximatelyIcon as VanillaEqualApproximatelyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EqualApproximatelyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEqualApproximatelyIcon>
> = /*@__PURE__*/ build<VanillaEqualApproximatelyIcon, SvgProperties>(VanillaEqualApproximatelyIcon)
export const EqualApproximately: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEqualApproximatelyIcon>
> = EqualApproximatelyIcon
    