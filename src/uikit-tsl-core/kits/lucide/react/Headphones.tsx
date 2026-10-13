
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HeadphonesIcon as VanillaHeadphonesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HeadphonesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeadphonesIcon>
> = /*@__PURE__*/ build<VanillaHeadphonesIcon, SvgProperties>(VanillaHeadphonesIcon)
export const Headphones: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeadphonesIcon>
> = HeadphonesIcon
    