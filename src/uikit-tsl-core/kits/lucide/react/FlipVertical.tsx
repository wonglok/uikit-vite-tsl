
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FlipVerticalIcon as VanillaFlipVerticalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FlipVerticalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlipVerticalIcon>
> = /*@__PURE__*/ build<VanillaFlipVerticalIcon, SvgProperties>(VanillaFlipVerticalIcon, "VanillaFlipVerticalIcon")
export const FlipVertical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlipVerticalIcon>
> = FlipVerticalIcon
    