
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScanHeartIcon as VanillaScanHeartIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScanHeartIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanHeartIcon>
> = /*@__PURE__*/ build<VanillaScanHeartIcon, SvgProperties>(VanillaScanHeartIcon)
export const ScanHeart: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanHeartIcon>
> = ScanHeartIcon
    