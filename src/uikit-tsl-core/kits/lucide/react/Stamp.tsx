
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { StampIcon as VanillaStampIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const StampIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStampIcon>
> = /*@__PURE__*/ build<VanillaStampIcon, SvgProperties>(VanillaStampIcon)
export const Stamp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStampIcon>
> = StampIcon
    