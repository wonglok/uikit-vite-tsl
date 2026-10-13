
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ComputerIcon as VanillaComputerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ComputerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaComputerIcon>
> = /*@__PURE__*/ build<VanillaComputerIcon, SvgProperties>(VanillaComputerIcon)
export const Computer: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaComputerIcon>
> = ComputerIcon
    