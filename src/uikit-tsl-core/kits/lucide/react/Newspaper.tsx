
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NewspaperIcon as VanillaNewspaperIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NewspaperIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNewspaperIcon>
> = /*@__PURE__*/ build<VanillaNewspaperIcon, SvgProperties>(VanillaNewspaperIcon, "VanillaNewspaperIcon")
export const Newspaper: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNewspaperIcon>
> = NewspaperIcon
    