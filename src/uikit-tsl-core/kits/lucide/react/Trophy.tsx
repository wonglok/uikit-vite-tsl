
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TrophyIcon as VanillaTrophyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TrophyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrophyIcon>
> = /*@__PURE__*/ build<VanillaTrophyIcon, SvgProperties>(VanillaTrophyIcon)
export const Trophy: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrophyIcon>
> = TrophyIcon
    