
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CornerUpLeftIcon as VanillaCornerUpLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CornerUpLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCornerUpLeftIcon>
> = /*@__PURE__*/ build<VanillaCornerUpLeftIcon, SvgProperties>(VanillaCornerUpLeftIcon)
export const CornerUpLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCornerUpLeftIcon>
> = CornerUpLeftIcon
    