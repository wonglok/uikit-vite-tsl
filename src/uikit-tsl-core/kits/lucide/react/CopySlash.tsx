
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CopySlashIcon as VanillaCopySlashIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CopySlashIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopySlashIcon>
> = /*@__PURE__*/ build<VanillaCopySlashIcon, SvgProperties>(VanillaCopySlashIcon, "VanillaCopySlashIcon")
export const CopySlash: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopySlashIcon>
> = CopySlashIcon
    