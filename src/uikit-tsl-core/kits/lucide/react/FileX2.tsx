
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileX2Icon as VanillaFileX2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileX2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileX2Icon>
> = /*@__PURE__*/ build<VanillaFileX2Icon, SvgProperties>(VanillaFileX2Icon, "VanillaFileX2Icon")
export const FileX2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileX2Icon>
> = FileX2Icon
    