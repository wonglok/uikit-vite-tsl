
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Columns3Icon as VanillaColumns3Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Columns3Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaColumns3Icon>
> = /*@__PURE__*/ build<VanillaColumns3Icon, SvgProperties>(VanillaColumns3Icon, "VanillaColumns3Icon")
export const Columns3: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaColumns3Icon>
> = Columns3Icon
    