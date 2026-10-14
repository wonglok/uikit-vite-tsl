
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TwitterIcon as VanillaTwitterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TwitterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTwitterIcon>
> = /*@__PURE__*/ build<VanillaTwitterIcon, SvgProperties>(VanillaTwitterIcon, "VanillaTwitterIcon")
export const Twitter: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTwitterIcon>
> = TwitterIcon
    