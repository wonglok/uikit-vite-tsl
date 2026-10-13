
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DiffIcon as VanillaDiffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DiffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiffIcon>
> = /*@__PURE__*/ build<VanillaDiffIcon, SvgProperties>(VanillaDiffIcon)
export const Diff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiffIcon>
> = DiffIcon
    