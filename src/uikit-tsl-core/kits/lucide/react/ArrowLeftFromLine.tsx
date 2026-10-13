
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowLeftFromLineIcon as VanillaArrowLeftFromLineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowLeftFromLineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowLeftFromLineIcon>
> = /*@__PURE__*/ build<VanillaArrowLeftFromLineIcon, SvgProperties>(VanillaArrowLeftFromLineIcon)
export const ArrowLeftFromLine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowLeftFromLineIcon>
> = ArrowLeftFromLineIcon
    