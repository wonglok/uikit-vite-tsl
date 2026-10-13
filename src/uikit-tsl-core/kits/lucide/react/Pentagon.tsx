
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PentagonIcon as VanillaPentagonIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PentagonIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPentagonIcon>
> = /*@__PURE__*/ build<VanillaPentagonIcon, SvgProperties>(VanillaPentagonIcon)
export const Pentagon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPentagonIcon>
> = PentagonIcon
    