
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileJson2Icon as VanillaFileJson2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileJson2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileJson2Icon>
> = /*@__PURE__*/ build<VanillaFileJson2Icon, SvgProperties>(VanillaFileJson2Icon, "VanillaFileJson2Icon")
export const FileJson2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileJson2Icon>
> = FileJson2Icon
    