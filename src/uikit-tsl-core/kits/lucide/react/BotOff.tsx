
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BotOffIcon as VanillaBotOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BotOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBotOffIcon>
> = /*@__PURE__*/ build<VanillaBotOffIcon, SvgProperties>(VanillaBotOffIcon, "VanillaBotOffIcon")
export const BotOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBotOffIcon>
> = BotOffIcon
    