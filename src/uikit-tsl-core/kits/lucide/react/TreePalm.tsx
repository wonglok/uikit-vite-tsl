
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TreePalmIcon as VanillaTreePalmIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TreePalmIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTreePalmIcon>
> = /*@__PURE__*/ build<VanillaTreePalmIcon, SvgProperties>(VanillaTreePalmIcon, "VanillaTreePalmIcon")
export const TreePalm: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTreePalmIcon>
> = TreePalmIcon
    