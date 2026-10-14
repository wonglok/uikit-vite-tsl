
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EllipsisVerticalIcon as VanillaEllipsisVerticalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EllipsisVerticalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEllipsisVerticalIcon>
> = /*@__PURE__*/ build<VanillaEllipsisVerticalIcon, SvgProperties>(VanillaEllipsisVerticalIcon, "VanillaEllipsisVerticalIcon")
export const EllipsisVertical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEllipsisVerticalIcon>
> = EllipsisVerticalIcon
    