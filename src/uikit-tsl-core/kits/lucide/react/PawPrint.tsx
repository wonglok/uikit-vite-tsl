
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PawPrintIcon as VanillaPawPrintIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PawPrintIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPawPrintIcon>
> = /*@__PURE__*/ build<VanillaPawPrintIcon, SvgProperties>(VanillaPawPrintIcon, "VanillaPawPrintIcon")
export const PawPrint: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPawPrintIcon>
> = PawPrintIcon
    