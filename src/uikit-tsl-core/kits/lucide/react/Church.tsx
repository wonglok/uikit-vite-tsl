
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChurchIcon as VanillaChurchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChurchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChurchIcon>
> = /*@__PURE__*/ build<VanillaChurchIcon, SvgProperties>(VanillaChurchIcon)
export const Church: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChurchIcon>
> = ChurchIcon
    