
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CastleIcon as VanillaCastleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CastleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCastleIcon>
> = /*@__PURE__*/ build<VanillaCastleIcon, SvgProperties>(VanillaCastleIcon)
export const Castle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCastleIcon>
> = CastleIcon
    