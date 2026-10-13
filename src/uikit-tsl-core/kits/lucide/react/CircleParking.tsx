
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleParkingIcon as VanillaCircleParkingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleParkingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleParkingIcon>
> = /*@__PURE__*/ build<VanillaCircleParkingIcon, SvgProperties>(VanillaCircleParkingIcon)
export const CircleParking: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleParkingIcon>
> = CircleParkingIcon
    