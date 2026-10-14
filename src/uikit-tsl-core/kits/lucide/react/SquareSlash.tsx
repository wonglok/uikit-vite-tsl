
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareSlashIcon as VanillaSquareSlashIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareSlashIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareSlashIcon>
> = /*@__PURE__*/ build<VanillaSquareSlashIcon, SvgProperties>(VanillaSquareSlashIcon, "VanillaSquareSlashIcon")
export const SquareSlash: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareSlashIcon>
> = SquareSlashIcon
    