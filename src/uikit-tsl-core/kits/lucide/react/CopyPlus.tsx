
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CopyPlusIcon as VanillaCopyPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CopyPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyPlusIcon>
> = /*@__PURE__*/ build<VanillaCopyPlusIcon, SvgProperties>(VanillaCopyPlusIcon, "VanillaCopyPlusIcon")
export const CopyPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCopyPlusIcon>
> = CopyPlusIcon
    