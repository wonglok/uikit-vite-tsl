
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LecternIcon as VanillaLecternIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LecternIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLecternIcon>
> = /*@__PURE__*/ build<VanillaLecternIcon, SvgProperties>(VanillaLecternIcon, "VanillaLecternIcon")
export const Lectern: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLecternIcon>
> = LecternIcon
    