
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CornerUpRightIcon as VanillaCornerUpRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CornerUpRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCornerUpRightIcon>
> = /*@__PURE__*/ build<VanillaCornerUpRightIcon, SvgProperties>(VanillaCornerUpRightIcon, "VanillaCornerUpRightIcon")
export const CornerUpRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCornerUpRightIcon>
> = CornerUpRightIcon
    