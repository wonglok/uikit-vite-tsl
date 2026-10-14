
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CopyleftIcon as VanillaCopyleftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CopyleftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyleftIcon>
> = /*@__PURE__*/ build<VanillaCopyleftIcon, SvgProperties>(VanillaCopyleftIcon, "VanillaCopyleftIcon")
export const Copyleft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyleftIcon>
> = CopyleftIcon
    