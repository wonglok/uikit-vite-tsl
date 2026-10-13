
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FlaskRoundIcon as VanillaFlaskRoundIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FlaskRoundIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlaskRoundIcon>
> = /*@__PURE__*/ build<VanillaFlaskRoundIcon, SvgProperties>(VanillaFlaskRoundIcon)
export const FlaskRound: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFlaskRoundIcon>
> = FlaskRoundIcon
    