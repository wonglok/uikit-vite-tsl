
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RecycleIcon as VanillaRecycleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RecycleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRecycleIcon>
> = /*@__PURE__*/ build<VanillaRecycleIcon, SvgProperties>(VanillaRecycleIcon)
export const Recycle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRecycleIcon>
> = RecycleIcon
    