
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PoundSterlingIcon as VanillaPoundSterlingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PoundSterlingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPoundSterlingIcon>
> = /*@__PURE__*/ build<VanillaPoundSterlingIcon, SvgProperties>(VanillaPoundSterlingIcon)
export const PoundSterling: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPoundSterlingIcon>
> = PoundSterlingIcon
    