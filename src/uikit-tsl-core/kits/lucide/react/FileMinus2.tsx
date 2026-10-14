
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileMinus2Icon as VanillaFileMinus2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileMinus2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileMinus2Icon>
> = /*@__PURE__*/ build<VanillaFileMinus2Icon, SvgProperties>(VanillaFileMinus2Icon, "VanillaFileMinus2Icon")
export const FileMinus2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileMinus2Icon>
> = FileMinus2Icon
    