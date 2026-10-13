
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SignatureIcon as VanillaSignatureIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SignatureIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignatureIcon>
> = /*@__PURE__*/ build<VanillaSignatureIcon, SvgProperties>(VanillaSignatureIcon)
export const Signature: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignatureIcon>
> = SignatureIcon
    