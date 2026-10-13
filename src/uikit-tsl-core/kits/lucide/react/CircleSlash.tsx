
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleSlashIcon as VanillaCircleSlashIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleSlashIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleSlashIcon>
> = /*@__PURE__*/ build<VanillaCircleSlashIcon, SvgProperties>(VanillaCircleSlashIcon)
export const CircleSlash: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleSlashIcon>
> = CircleSlashIcon
    