
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Scale3dIcon as VanillaScale3dIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Scale3dIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScale3dIcon>
> = /*@__PURE__*/ build<VanillaScale3dIcon, SvgProperties>(VanillaScale3dIcon)
export const Scale3d: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScale3dIcon>
> = Scale3dIcon
    