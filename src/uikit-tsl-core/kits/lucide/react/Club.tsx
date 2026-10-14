
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClubIcon as VanillaClubIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClubIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClubIcon>
> = /*@__PURE__*/ build<VanillaClubIcon, SvgProperties>(VanillaClubIcon, "VanillaClubIcon")
export const Club: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClubIcon>
> = ClubIcon
    