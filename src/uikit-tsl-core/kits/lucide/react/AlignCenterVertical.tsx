
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlignCenterVerticalIcon as VanillaAlignCenterVerticalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlignCenterVerticalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignCenterVerticalIcon>
> = /*@__PURE__*/ build<VanillaAlignCenterVerticalIcon, SvgProperties>(VanillaAlignCenterVerticalIcon)
export const AlignCenterVertical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlignCenterVerticalIcon>
> = AlignCenterVerticalIcon
    