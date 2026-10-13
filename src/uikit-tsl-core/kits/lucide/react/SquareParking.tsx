
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareParkingIcon as VanillaSquareParkingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareParkingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareParkingIcon>
> = /*@__PURE__*/ build<VanillaSquareParkingIcon, SvgProperties>(VanillaSquareParkingIcon)
export const SquareParking: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareParkingIcon>
> = SquareParkingIcon
    