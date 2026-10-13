
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PilcrowRightIcon as VanillaPilcrowRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PilcrowRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPilcrowRightIcon>
> = /*@__PURE__*/ build<VanillaPilcrowRightIcon, SvgProperties>(VanillaPilcrowRightIcon)
export const PilcrowRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPilcrowRightIcon>
> = PilcrowRightIcon
    