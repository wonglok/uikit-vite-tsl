
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PillBottleIcon as VanillaPillBottleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PillBottleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPillBottleIcon>
> = /*@__PURE__*/ build<VanillaPillBottleIcon, SvgProperties>(VanillaPillBottleIcon, "VanillaPillBottleIcon")
export const PillBottle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPillBottleIcon>
> = PillBottleIcon
    