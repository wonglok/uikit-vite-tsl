
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TypeOutlineIcon as VanillaTypeOutlineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TypeOutlineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTypeOutlineIcon>
> = /*@__PURE__*/ build<VanillaTypeOutlineIcon, SvgProperties>(VanillaTypeOutlineIcon, "VanillaTypeOutlineIcon")
export const TypeOutline: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTypeOutlineIcon>
> = TypeOutlineIcon
    