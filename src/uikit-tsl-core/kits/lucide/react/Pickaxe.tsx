
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PickaxeIcon as VanillaPickaxeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PickaxeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPickaxeIcon>
> = /*@__PURE__*/ build<VanillaPickaxeIcon, SvgProperties>(VanillaPickaxeIcon, "VanillaPickaxeIcon")
export const Pickaxe: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPickaxeIcon>
> = PickaxeIcon
    