
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PencilOffIcon as VanillaPencilOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PencilOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPencilOffIcon>
> = /*@__PURE__*/ build<VanillaPencilOffIcon, SvgProperties>(VanillaPencilOffIcon)
export const PencilOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPencilOffIcon>
> = PencilOffIcon
    