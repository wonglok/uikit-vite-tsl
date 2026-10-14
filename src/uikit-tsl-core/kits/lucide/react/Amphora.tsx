
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AmphoraIcon as VanillaAmphoraIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AmphoraIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAmphoraIcon>
> = /*@__PURE__*/ build<VanillaAmphoraIcon, SvgProperties>(VanillaAmphoraIcon, "VanillaAmphoraIcon")
export const Amphora: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAmphoraIcon>
> = AmphoraIcon
    