
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FingerprintIcon as VanillaFingerprintIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FingerprintIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFingerprintIcon>
> = /*@__PURE__*/ build<VanillaFingerprintIcon, SvgProperties>(VanillaFingerprintIcon, "VanillaFingerprintIcon")
export const Fingerprint: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFingerprintIcon>
> = FingerprintIcon
    