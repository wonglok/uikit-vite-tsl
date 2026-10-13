
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WheatIcon as VanillaWheatIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WheatIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWheatIcon>
> = /*@__PURE__*/ build<VanillaWheatIcon, SvgProperties>(VanillaWheatIcon)
export const Wheat: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWheatIcon>
> = WheatIcon
    