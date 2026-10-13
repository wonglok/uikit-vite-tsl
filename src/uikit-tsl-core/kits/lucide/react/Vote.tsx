
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VoteIcon as VanillaVoteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VoteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVoteIcon>
> = /*@__PURE__*/ build<VanillaVoteIcon, SvgProperties>(VanillaVoteIcon)
export const Vote: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVoteIcon>
> = VoteIcon
    