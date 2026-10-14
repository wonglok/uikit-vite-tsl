
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileKey2Icon as VanillaFileKey2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileKey2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileKey2Icon>
> = /*@__PURE__*/ build<VanillaFileKey2Icon, SvgProperties>(VanillaFileKey2Icon, "VanillaFileKey2Icon")
export const FileKey2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileKey2Icon>
> = FileKey2Icon
    