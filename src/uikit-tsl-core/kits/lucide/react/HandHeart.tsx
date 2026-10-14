
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HandHeartIcon as VanillaHandHeartIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HandHeartIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandHeartIcon>
> = /*@__PURE__*/ build<VanillaHandHeartIcon, SvgProperties>(VanillaHandHeartIcon, "VanillaHandHeartIcon")
export const HandHeart: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandHeartIcon>
> = HandHeartIcon
    