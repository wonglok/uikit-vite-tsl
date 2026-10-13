
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileSlidersIcon as VanillaFileSlidersIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileSlidersIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileSlidersIcon>
> = /*@__PURE__*/ build<VanillaFileSlidersIcon, SvgProperties>(VanillaFileSlidersIcon)
export const FileSliders: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileSlidersIcon>
> = FileSlidersIcon
    