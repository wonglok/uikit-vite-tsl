
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileImageIcon as VanillaFileImageIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileImageIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileImageIcon>
> = /*@__PURE__*/ build<VanillaFileImageIcon, SvgProperties>(VanillaFileImageIcon, "VanillaFileImageIcon")
export const FileImage: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileImageIcon>
> = FileImageIcon
    