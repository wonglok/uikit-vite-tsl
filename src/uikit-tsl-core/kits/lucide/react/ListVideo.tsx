
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListVideoIcon as VanillaListVideoIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListVideoIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListVideoIcon>
> = /*@__PURE__*/ build<VanillaListVideoIcon, SvgProperties>(VanillaListVideoIcon, "VanillaListVideoIcon")
export const ListVideo: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListVideoIcon>
> = ListVideoIcon
    