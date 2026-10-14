
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LocateOffIcon as VanillaLocateOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LocateOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLocateOffIcon>
> = /*@__PURE__*/ build<VanillaLocateOffIcon, SvgProperties>(VanillaLocateOffIcon, "VanillaLocateOffIcon")
export const LocateOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLocateOffIcon>
> = LocateOffIcon
    