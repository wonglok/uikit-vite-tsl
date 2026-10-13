
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TabletSmartphoneIcon as VanillaTabletSmartphoneIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TabletSmartphoneIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTabletSmartphoneIcon>
> = /*@__PURE__*/ build<VanillaTabletSmartphoneIcon, SvgProperties>(VanillaTabletSmartphoneIcon)
export const TabletSmartphone: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTabletSmartphoneIcon>
> = TabletSmartphoneIcon
    