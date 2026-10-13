
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TreePineIcon as VanillaTreePineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TreePineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTreePineIcon>
> = /*@__PURE__*/ build<VanillaTreePineIcon, SvgProperties>(VanillaTreePineIcon)
export const TreePine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTreePineIcon>
> = TreePineIcon
    