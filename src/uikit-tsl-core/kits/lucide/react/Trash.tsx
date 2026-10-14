
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TrashIcon as VanillaTrashIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TrashIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrashIcon>
> = /*@__PURE__*/ build<VanillaTrashIcon, SvgProperties>(VanillaTrashIcon, "VanillaTrashIcon")
export const Trash: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrashIcon>
> = TrashIcon
    