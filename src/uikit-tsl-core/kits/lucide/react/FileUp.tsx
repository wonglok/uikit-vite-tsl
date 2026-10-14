
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileUpIcon as VanillaFileUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileUpIcon>
> = /*@__PURE__*/ build<VanillaFileUpIcon, SvgProperties>(VanillaFileUpIcon, "VanillaFileUpIcon")
export const FileUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileUpIcon>
> = FileUpIcon
    