
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { InstagramIcon as VanillaInstagramIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const InstagramIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaInstagramIcon>
> = /*@__PURE__*/ build<VanillaInstagramIcon, SvgProperties>(VanillaInstagramIcon, "VanillaInstagramIcon")
export const Instagram: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaInstagramIcon>
> = InstagramIcon
    