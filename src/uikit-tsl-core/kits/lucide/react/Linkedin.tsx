
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LinkedinIcon as VanillaLinkedinIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LinkedinIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLinkedinIcon>
> = /*@__PURE__*/ build<VanillaLinkedinIcon, SvgProperties>(VanillaLinkedinIcon)
export const Linkedin: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLinkedinIcon>
> = LinkedinIcon
    