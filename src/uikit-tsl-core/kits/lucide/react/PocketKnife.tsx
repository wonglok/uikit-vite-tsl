
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PocketKnifeIcon as VanillaPocketKnifeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PocketKnifeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPocketKnifeIcon>
> = /*@__PURE__*/ build<VanillaPocketKnifeIcon, SvgProperties>(VanillaPocketKnifeIcon, "VanillaPocketKnifeIcon")
export const PocketKnife: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPocketKnifeIcon>
> = PocketKnifeIcon
    