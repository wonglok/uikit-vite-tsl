
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SlashIcon as VanillaSlashIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SlashIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSlashIcon>
> = /*@__PURE__*/ build<VanillaSlashIcon, SvgProperties>(VanillaSlashIcon, "VanillaSlashIcon")
export const Slash: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSlashIcon>
> = SlashIcon
    