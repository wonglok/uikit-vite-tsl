
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CornerRightDownIcon as VanillaCornerRightDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CornerRightDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCornerRightDownIcon>
> = /*@__PURE__*/ build<VanillaCornerRightDownIcon, SvgProperties>(VanillaCornerRightDownIcon)
export const CornerRightDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCornerRightDownIcon>
> = CornerRightDownIcon
    