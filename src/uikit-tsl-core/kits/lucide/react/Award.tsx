
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AwardIcon as VanillaAwardIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AwardIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAwardIcon>
> = /*@__PURE__*/ build<VanillaAwardIcon, SvgProperties>(VanillaAwardIcon)
export const Award: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAwardIcon>
> = AwardIcon
    