
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileCheck2Icon as VanillaFileCheck2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileCheck2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileCheck2Icon>
> = /*@__PURE__*/ build<VanillaFileCheck2Icon, SvgProperties>(VanillaFileCheck2Icon, "VanillaFileCheck2Icon")
export const FileCheck2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileCheck2Icon>
> = FileCheck2Icon
    