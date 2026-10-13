
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BotMessageSquareIcon as VanillaBotMessageSquareIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BotMessageSquareIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBotMessageSquareIcon>
> = /*@__PURE__*/ build<VanillaBotMessageSquareIcon, SvgProperties>(VanillaBotMessageSquareIcon)
export const BotMessageSquare: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBotMessageSquareIcon>
> = BotMessageSquareIcon
    