
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TrelloIcon as VanillaTrelloIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TrelloIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrelloIcon>
> = /*@__PURE__*/ build<VanillaTrelloIcon, SvgProperties>(VanillaTrelloIcon, "VanillaTrelloIcon")
export const Trello: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrelloIcon>
> = TrelloIcon
    