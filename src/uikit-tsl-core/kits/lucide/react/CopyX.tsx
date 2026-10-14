
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CopyXIcon as VanillaCopyXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CopyXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyXIcon>
> = /*@__PURE__*/ build<VanillaCopyXIcon, SvgProperties>(VanillaCopyXIcon, "VanillaCopyXIcon")
export const CopyX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyXIcon>
> = CopyXIcon
    