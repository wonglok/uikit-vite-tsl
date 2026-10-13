
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DeleteIcon as VanillaDeleteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DeleteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDeleteIcon>
> = /*@__PURE__*/ build<VanillaDeleteIcon, SvgProperties>(VanillaDeleteIcon)
export const Delete: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDeleteIcon>
> = DeleteIcon
    