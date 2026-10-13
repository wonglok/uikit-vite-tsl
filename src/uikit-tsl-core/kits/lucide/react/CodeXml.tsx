
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CodeXmlIcon as VanillaCodeXmlIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CodeXmlIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCodeXmlIcon>
> = /*@__PURE__*/ build<VanillaCodeXmlIcon, SvgProperties>(VanillaCodeXmlIcon)
export const CodeXml: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCodeXmlIcon>
> = CodeXmlIcon
    