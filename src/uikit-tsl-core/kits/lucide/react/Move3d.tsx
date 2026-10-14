
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Move3dIcon as VanillaMove3dIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Move3dIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMove3dIcon>
> = /*@__PURE__*/ build<VanillaMove3dIcon, SvgProperties>(VanillaMove3dIcon, "VanillaMove3dIcon")
export const Move3d: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMove3dIcon>
> = Move3dIcon
    