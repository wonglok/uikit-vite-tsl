
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ToyBrickIcon as VanillaToyBrickIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ToyBrickIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaToyBrickIcon>
> = /*@__PURE__*/ build<VanillaToyBrickIcon, SvgProperties>(VanillaToyBrickIcon)
export const ToyBrick: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaToyBrickIcon>
> = ToyBrickIcon
    