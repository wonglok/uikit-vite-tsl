
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CornerRightUpIcon as VanillaCornerRightUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CornerRightUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCornerRightUpIcon>
> = /*@__PURE__*/ build<VanillaCornerRightUpIcon, SvgProperties>(VanillaCornerRightUpIcon)
export const CornerRightUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCornerRightUpIcon>
> = CornerRightUpIcon
    