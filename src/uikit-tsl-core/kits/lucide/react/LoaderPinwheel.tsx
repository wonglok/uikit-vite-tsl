
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LoaderPinwheelIcon as VanillaLoaderPinwheelIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LoaderPinwheelIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLoaderPinwheelIcon>
> = /*@__PURE__*/ build<VanillaLoaderPinwheelIcon, SvgProperties>(VanillaLoaderPinwheelIcon)
export const LoaderPinwheel: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLoaderPinwheelIcon>
> = LoaderPinwheelIcon
    