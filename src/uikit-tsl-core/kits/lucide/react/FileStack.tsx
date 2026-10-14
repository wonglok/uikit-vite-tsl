
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileStackIcon as VanillaFileStackIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileStackIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileStackIcon>
> = /*@__PURE__*/ build<VanillaFileStackIcon, SvgProperties>(VanillaFileStackIcon, "VanillaFileStackIcon")
export const FileStack: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileStackIcon>
> = FileStackIcon
    