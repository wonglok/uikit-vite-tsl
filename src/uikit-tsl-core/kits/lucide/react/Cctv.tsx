
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CctvIcon as VanillaCctvIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CctvIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCctvIcon>
> = /*@__PURE__*/ build<VanillaCctvIcon, SvgProperties>(VanillaCctvIcon)
export const Cctv: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCctvIcon>
> = CctvIcon
    