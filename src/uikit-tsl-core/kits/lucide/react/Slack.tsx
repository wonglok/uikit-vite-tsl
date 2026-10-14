
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SlackIcon as VanillaSlackIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SlackIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSlackIcon>
> = /*@__PURE__*/ build<VanillaSlackIcon, SvgProperties>(VanillaSlackIcon, "VanillaSlackIcon")
export const Slack: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSlackIcon>
> = SlackIcon
    