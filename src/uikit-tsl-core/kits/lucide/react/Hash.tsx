
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HashIcon as VanillaHashIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HashIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHashIcon>
> = /*@__PURE__*/ build<VanillaHashIcon, SvgProperties>(VanillaHashIcon, "VanillaHashIcon")
export const Hash: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHashIcon>
> = HashIcon
    