
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PilcrowLeftIcon as VanillaPilcrowLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PilcrowLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPilcrowLeftIcon>
> = /*@__PURE__*/ build<VanillaPilcrowLeftIcon, SvgProperties>(VanillaPilcrowLeftIcon, "VanillaPilcrowLeftIcon")
export const PilcrowLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPilcrowLeftIcon>
> = PilcrowLeftIcon
    