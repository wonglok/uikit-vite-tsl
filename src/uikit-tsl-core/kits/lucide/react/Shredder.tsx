
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShredderIcon as VanillaShredderIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShredderIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShredderIcon>
> = /*@__PURE__*/ build<VanillaShredderIcon, SvgProperties>(VanillaShredderIcon)
export const Shredder: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShredderIcon>
> = ShredderIcon
    