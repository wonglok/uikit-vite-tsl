
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PartyPopperIcon as VanillaPartyPopperIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PartyPopperIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPartyPopperIcon>
> = /*@__PURE__*/ build<VanillaPartyPopperIcon, SvgProperties>(VanillaPartyPopperIcon, "VanillaPartyPopperIcon")
export const PartyPopper: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPartyPopperIcon>
> = PartyPopperIcon
    