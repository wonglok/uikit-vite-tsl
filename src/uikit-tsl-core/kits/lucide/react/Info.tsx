
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { InfoIcon as VanillaInfoIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const InfoIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaInfoIcon>
> = /*@__PURE__*/ build<VanillaInfoIcon, SvgProperties>(VanillaInfoIcon)
export const Info: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaInfoIcon>
> = InfoIcon
    