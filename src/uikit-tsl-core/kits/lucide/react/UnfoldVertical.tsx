
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UnfoldVerticalIcon as VanillaUnfoldVerticalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UnfoldVerticalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUnfoldVerticalIcon>
> = /*@__PURE__*/ build<VanillaUnfoldVerticalIcon, SvgProperties>(VanillaUnfoldVerticalIcon, "VanillaUnfoldVerticalIcon")
export const UnfoldVertical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUnfoldVerticalIcon>
> = UnfoldVerticalIcon
    