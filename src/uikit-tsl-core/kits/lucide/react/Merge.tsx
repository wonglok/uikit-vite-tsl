
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MergeIcon as VanillaMergeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MergeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMergeIcon>
> = /*@__PURE__*/ build<VanillaMergeIcon, SvgProperties>(VanillaMergeIcon, "VanillaMergeIcon")
export const Merge: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMergeIcon>
> = MergeIcon
    