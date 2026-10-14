
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WheatOffIcon as VanillaWheatOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WheatOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWheatOffIcon>
> = /*@__PURE__*/ build<VanillaWheatOffIcon, SvgProperties>(VanillaWheatOffIcon, "VanillaWheatOffIcon")
export const WheatOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWheatOffIcon>
> = WheatOffIcon
    