
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TypeIcon as VanillaTypeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TypeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTypeIcon>
> = /*@__PURE__*/ build<VanillaTypeIcon, SvgProperties>(VanillaTypeIcon, "VanillaTypeIcon")
export const Type: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTypeIcon>
> = TypeIcon
    