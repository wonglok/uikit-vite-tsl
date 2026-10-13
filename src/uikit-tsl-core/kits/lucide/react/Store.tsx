
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { StoreIcon as VanillaStoreIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const StoreIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStoreIcon>
> = /*@__PURE__*/ build<VanillaStoreIcon, SvgProperties>(VanillaStoreIcon)
export const Store: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStoreIcon>
> = StoreIcon
    