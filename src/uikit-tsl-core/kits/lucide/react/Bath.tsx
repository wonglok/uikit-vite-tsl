
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BathIcon as VanillaBathIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BathIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBathIcon>
> = /*@__PURE__*/ build<VanillaBathIcon, SvgProperties>(VanillaBathIcon)
export const Bath: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBathIcon>
> = BathIcon
    