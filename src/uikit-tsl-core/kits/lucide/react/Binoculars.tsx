
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BinocularsIcon as VanillaBinocularsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BinocularsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBinocularsIcon>
> = /*@__PURE__*/ build<VanillaBinocularsIcon, SvgProperties>(VanillaBinocularsIcon)
export const Binoculars: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBinocularsIcon>
> = BinocularsIcon
    