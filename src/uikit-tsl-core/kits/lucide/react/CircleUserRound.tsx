
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleUserRoundIcon as VanillaCircleUserRoundIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleUserRoundIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleUserRoundIcon>
> = /*@__PURE__*/ build<VanillaCircleUserRoundIcon, SvgProperties>(VanillaCircleUserRoundIcon, "VanillaCircleUserRoundIcon")
export const CircleUserRound: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleUserRoundIcon>
> = CircleUserRoundIcon
    