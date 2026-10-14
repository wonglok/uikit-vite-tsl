
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TowerControlIcon as VanillaTowerControlIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TowerControlIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTowerControlIcon>
> = /*@__PURE__*/ build<VanillaTowerControlIcon, SvgProperties>(VanillaTowerControlIcon, "VanillaTowerControlIcon")
export const TowerControl: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTowerControlIcon>
> = TowerControlIcon
    