
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LaughIcon as VanillaLaughIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LaughIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLaughIcon>
> = /*@__PURE__*/ build<VanillaLaughIcon, SvgProperties>(VanillaLaughIcon)
export const Laugh: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLaughIcon>
> = LaughIcon
    