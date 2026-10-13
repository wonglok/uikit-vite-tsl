
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScanFaceIcon as VanillaScanFaceIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScanFaceIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanFaceIcon>
> = /*@__PURE__*/ build<VanillaScanFaceIcon, SvgProperties>(VanillaScanFaceIcon)
export const ScanFace: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScanFaceIcon>
> = ScanFaceIcon
    