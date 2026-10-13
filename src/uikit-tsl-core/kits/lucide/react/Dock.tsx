
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DockIcon as VanillaDockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDockIcon>
> = /*@__PURE__*/ build<VanillaDockIcon, SvgProperties>(VanillaDockIcon)
export const Dock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDockIcon>
> = DockIcon
    