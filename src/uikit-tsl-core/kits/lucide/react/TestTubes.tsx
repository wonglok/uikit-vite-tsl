
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TestTubesIcon as VanillaTestTubesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TestTubesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTestTubesIcon>
> = /*@__PURE__*/ build<VanillaTestTubesIcon, SvgProperties>(VanillaTestTubesIcon)
export const TestTubes: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTestTubesIcon>
> = TestTubesIcon
    