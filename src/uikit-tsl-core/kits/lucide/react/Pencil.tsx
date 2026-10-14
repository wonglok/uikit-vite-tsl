
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PencilIcon as VanillaPencilIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PencilIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPencilIcon>
> = /*@__PURE__*/ build<VanillaPencilIcon, SvgProperties>(VanillaPencilIcon, "VanillaPencilIcon")
export const Pencil: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPencilIcon>
> = PencilIcon
    