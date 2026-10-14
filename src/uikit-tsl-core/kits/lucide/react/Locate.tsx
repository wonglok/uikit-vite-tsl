
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LocateIcon as VanillaLocateIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LocateIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLocateIcon>
> = /*@__PURE__*/ build<VanillaLocateIcon, SvgProperties>(VanillaLocateIcon, "VanillaLocateIcon")
export const Locate: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLocateIcon>
> = LocateIcon
    