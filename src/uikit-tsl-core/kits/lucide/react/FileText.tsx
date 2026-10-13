
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileTextIcon as VanillaFileTextIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileTextIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileTextIcon>
> = /*@__PURE__*/ build<VanillaFileTextIcon, SvgProperties>(VanillaFileTextIcon)
export const FileText: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileTextIcon>
> = FileTextIcon
    