
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileInputIcon as VanillaFileInputIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileInputIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileInputIcon>
> = /*@__PURE__*/ build<VanillaFileInputIcon, SvgProperties>(VanillaFileInputIcon)
export const FileInput: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileInputIcon>
> = FileInputIcon
    