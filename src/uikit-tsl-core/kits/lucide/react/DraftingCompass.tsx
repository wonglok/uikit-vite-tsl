
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DraftingCompassIcon as VanillaDraftingCompassIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DraftingCompassIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDraftingCompassIcon>
> = /*@__PURE__*/ build<VanillaDraftingCompassIcon, SvgProperties>(VanillaDraftingCompassIcon, "VanillaDraftingCompassIcon")
export const DraftingCompass: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDraftingCompassIcon>
> = DraftingCompassIcon
    