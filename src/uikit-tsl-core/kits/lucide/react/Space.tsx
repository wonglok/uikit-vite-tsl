
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SpaceIcon as VanillaSpaceIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SpaceIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSpaceIcon>
> = /*@__PURE__*/ build<VanillaSpaceIcon, SvgProperties>(VanillaSpaceIcon)
export const Space: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSpaceIcon>
> = SpaceIcon
    