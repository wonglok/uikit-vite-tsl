
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HeadphoneOffIcon as VanillaHeadphoneOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HeadphoneOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeadphoneOffIcon>
> = /*@__PURE__*/ build<VanillaHeadphoneOffIcon, SvgProperties>(VanillaHeadphoneOffIcon)
export const HeadphoneOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeadphoneOffIcon>
> = HeadphoneOffIcon
    