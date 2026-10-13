
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileVideo2Icon as VanillaFileVideo2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileVideo2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileVideo2Icon>
> = /*@__PURE__*/ build<VanillaFileVideo2Icon, SvgProperties>(VanillaFileVideo2Icon)
export const FileVideo2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileVideo2Icon>
> = FileVideo2Icon
    