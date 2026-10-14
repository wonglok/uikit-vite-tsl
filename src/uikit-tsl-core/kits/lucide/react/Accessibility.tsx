
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AccessibilityIcon as VanillaAccessibilityIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AccessibilityIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAccessibilityIcon>
> = /*@__PURE__*/ build<VanillaAccessibilityIcon, SvgProperties>(VanillaAccessibilityIcon, "VanillaAccessibilityIcon")
export const Accessibility: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAccessibilityIcon>
> = AccessibilityIcon
    