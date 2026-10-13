
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ProjectorIcon as VanillaProjectorIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ProjectorIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaProjectorIcon>
> = /*@__PURE__*/ build<VanillaProjectorIcon, SvgProperties>(VanillaProjectorIcon)
export const Projector: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaProjectorIcon>
> = ProjectorIcon
    