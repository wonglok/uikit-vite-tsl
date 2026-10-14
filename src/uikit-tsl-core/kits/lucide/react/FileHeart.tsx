
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileHeartIcon as VanillaFileHeartIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileHeartIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileHeartIcon>
> = /*@__PURE__*/ build<VanillaFileHeartIcon, SvgProperties>(VanillaFileHeartIcon, "VanillaFileHeartIcon")
export const FileHeart: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileHeartIcon>
> = FileHeartIcon
    