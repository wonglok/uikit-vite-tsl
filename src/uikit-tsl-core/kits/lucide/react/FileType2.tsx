
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileType2Icon as VanillaFileType2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileType2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileType2Icon>
> = /*@__PURE__*/ build<VanillaFileType2Icon, SvgProperties>(VanillaFileType2Icon)
export const FileType2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileType2Icon>
> = FileType2Icon
    