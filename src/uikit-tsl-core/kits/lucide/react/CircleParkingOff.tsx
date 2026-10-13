
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleParkingOffIcon as VanillaCircleParkingOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleParkingOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleParkingOffIcon>
> = /*@__PURE__*/ build<VanillaCircleParkingOffIcon, SvgProperties>(VanillaCircleParkingOffIcon)
export const CircleParkingOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleParkingOffIcon>
> = CircleParkingOffIcon
    