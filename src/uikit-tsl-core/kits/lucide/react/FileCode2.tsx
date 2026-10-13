
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileCode2Icon as VanillaFileCode2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileCode2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileCode2Icon>
> = /*@__PURE__*/ build<VanillaFileCode2Icon, SvgProperties>(VanillaFileCode2Icon)
export const FileCode2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileCode2Icon>
> = FileCode2Icon
    