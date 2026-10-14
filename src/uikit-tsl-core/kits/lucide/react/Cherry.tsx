
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CherryIcon as VanillaCherryIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CherryIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCherryIcon>
> = /*@__PURE__*/ build<VanillaCherryIcon, SvgProperties>(VanillaCherryIcon, "VanillaCherryIcon")
export const Cherry: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCherryIcon>
> = CherryIcon
    