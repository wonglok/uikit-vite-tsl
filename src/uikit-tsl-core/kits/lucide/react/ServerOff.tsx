
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ServerOffIcon as VanillaServerOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ServerOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaServerOffIcon>
> = /*@__PURE__*/ build<VanillaServerOffIcon, SvgProperties>(VanillaServerOffIcon, "VanillaServerOffIcon")
export const ServerOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaServerOffIcon>
> = ServerOffIcon
    