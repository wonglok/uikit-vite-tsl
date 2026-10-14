
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileSearch2Icon as VanillaFileSearch2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileSearch2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileSearch2Icon>
> = /*@__PURE__*/ build<VanillaFileSearch2Icon, SvgProperties>(VanillaFileSearch2Icon, "VanillaFileSearch2Icon")
export const FileSearch2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileSearch2Icon>
> = FileSearch2Icon
    