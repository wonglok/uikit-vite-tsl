
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileBadge2Icon as VanillaFileBadge2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileBadge2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileBadge2Icon>
> = /*@__PURE__*/ build<VanillaFileBadge2Icon, SvgProperties>(VanillaFileBadge2Icon, "VanillaFileBadge2Icon")
export const FileBadge2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileBadge2Icon>
> = FileBadge2Icon
    