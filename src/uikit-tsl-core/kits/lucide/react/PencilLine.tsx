
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PencilLineIcon as VanillaPencilLineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PencilLineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPencilLineIcon>
> = /*@__PURE__*/ build<VanillaPencilLineIcon, SvgProperties>(VanillaPencilLineIcon)
export const PencilLine: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPencilLineIcon>
> = PencilLineIcon
    