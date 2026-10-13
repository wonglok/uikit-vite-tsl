
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BotIcon as VanillaBotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBotIcon>
> = /*@__PURE__*/ build<VanillaBotIcon, SvgProperties>(VanillaBotIcon)
export const Bot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBotIcon>
> = BotIcon
    