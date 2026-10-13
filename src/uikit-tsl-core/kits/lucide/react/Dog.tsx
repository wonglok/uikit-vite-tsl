
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DogIcon as VanillaDogIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DogIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDogIcon>
> = /*@__PURE__*/ build<VanillaDogIcon, SvgProperties>(VanillaDogIcon)
export const Dog: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDogIcon>
> = DogIcon
    