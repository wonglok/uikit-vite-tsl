
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FrameIcon as VanillaFrameIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FrameIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFrameIcon>
> = /*@__PURE__*/ build<VanillaFrameIcon, SvgProperties>(VanillaFrameIcon, "VanillaFrameIcon")
export const Frame: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFrameIcon>
> = FrameIcon
    