
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleArrowLeftIcon as VanillaCircleArrowLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleArrowLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleArrowLeftIcon>
> = /*@__PURE__*/ build<VanillaCircleArrowLeftIcon, SvgProperties>(VanillaCircleArrowLeftIcon)
export const CircleArrowLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleArrowLeftIcon>
> = CircleArrowLeftIcon
    