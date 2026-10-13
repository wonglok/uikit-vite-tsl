
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DramaIcon as VanillaDramaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DramaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDramaIcon>
> = /*@__PURE__*/ build<VanillaDramaIcon, SvgProperties>(VanillaDramaIcon)
export const Drama: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDramaIcon>
> = DramaIcon
    