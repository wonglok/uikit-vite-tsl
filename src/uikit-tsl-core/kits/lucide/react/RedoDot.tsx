
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RedoDotIcon as VanillaRedoDotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RedoDotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRedoDotIcon>
> = /*@__PURE__*/ build<VanillaRedoDotIcon, SvgProperties>(VanillaRedoDotIcon)
export const RedoDot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRedoDotIcon>
> = RedoDotIcon
    