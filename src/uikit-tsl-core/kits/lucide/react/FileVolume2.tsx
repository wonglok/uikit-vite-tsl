
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileVolume2Icon as VanillaFileVolume2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileVolume2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileVolume2Icon>
> = /*@__PURE__*/ build<VanillaFileVolume2Icon, SvgProperties>(VanillaFileVolume2Icon, "VanillaFileVolume2Icon")
export const FileVolume2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileVolume2Icon>
> = FileVolume2Icon
    