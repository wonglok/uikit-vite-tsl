
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WholeWordIcon as VanillaWholeWordIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WholeWordIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWholeWordIcon>
> = /*@__PURE__*/ build<VanillaWholeWordIcon, SvgProperties>(VanillaWholeWordIcon)
export const WholeWord: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWholeWordIcon>
> = WholeWordIcon
    