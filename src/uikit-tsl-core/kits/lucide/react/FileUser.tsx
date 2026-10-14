
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileUserIcon as VanillaFileUserIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileUserIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileUserIcon>
> = /*@__PURE__*/ build<VanillaFileUserIcon, SvgProperties>(VanillaFileUserIcon, "VanillaFileUserIcon")
export const FileUser: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileUserIcon>
> = FileUserIcon
    