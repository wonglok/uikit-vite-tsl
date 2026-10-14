
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileAxis3dIcon as VanillaFileAxis3dIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileAxis3dIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileAxis3dIcon>
> = /*@__PURE__*/ build<VanillaFileAxis3dIcon, SvgProperties>(VanillaFileAxis3dIcon, "VanillaFileAxis3dIcon")
export const FileAxis3d: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileAxis3dIcon>
> = FileAxis3dIcon
    