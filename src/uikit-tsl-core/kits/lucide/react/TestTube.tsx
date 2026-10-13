
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TestTubeIcon as VanillaTestTubeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TestTubeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTestTubeIcon>
> = /*@__PURE__*/ build<VanillaTestTubeIcon, SvgProperties>(VanillaTestTubeIcon)
export const TestTube: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTestTubeIcon>
> = TestTubeIcon
    