
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HdmiPortIcon as VanillaHdmiPortIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HdmiPortIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHdmiPortIcon>
> = /*@__PURE__*/ build<VanillaHdmiPortIcon, SvgProperties>(VanillaHdmiPortIcon)
export const HdmiPort: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHdmiPortIcon>
> = HdmiPortIcon
    