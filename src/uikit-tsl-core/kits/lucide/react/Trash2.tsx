
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Trash2Icon as VanillaTrash2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Trash2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrash2Icon>
> = /*@__PURE__*/ build<VanillaTrash2Icon, SvgProperties>(VanillaTrash2Icon, "VanillaTrash2Icon")
export const Trash2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrash2Icon>
> = Trash2Icon
    