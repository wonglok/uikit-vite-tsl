
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PilcrowIcon as VanillaPilcrowIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PilcrowIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPilcrowIcon>
> = /*@__PURE__*/ build<VanillaPilcrowIcon, SvgProperties>(VanillaPilcrowIcon, "VanillaPilcrowIcon")
export const Pilcrow: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPilcrowIcon>
> = PilcrowIcon
    