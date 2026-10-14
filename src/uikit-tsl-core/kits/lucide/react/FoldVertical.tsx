
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FoldVerticalIcon as VanillaFoldVerticalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FoldVerticalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFoldVerticalIcon>
> = /*@__PURE__*/ build<VanillaFoldVerticalIcon, SvgProperties>(VanillaFoldVerticalIcon, "VanillaFoldVerticalIcon")
export const FoldVertical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFoldVerticalIcon>
> = FoldVerticalIcon
    