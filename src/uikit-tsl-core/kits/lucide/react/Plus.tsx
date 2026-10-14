
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PlusIcon as VanillaPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlusIcon>
> = /*@__PURE__*/ build<VanillaPlusIcon, SvgProperties>(VanillaPlusIcon, "VanillaPlusIcon")
export const Plus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlusIcon>
> = PlusIcon
    