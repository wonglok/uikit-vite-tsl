
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UmbrellaOffIcon as VanillaUmbrellaOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UmbrellaOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUmbrellaOffIcon>
> = /*@__PURE__*/ build<VanillaUmbrellaOffIcon, SvgProperties>(VanillaUmbrellaOffIcon, "VanillaUmbrellaOffIcon")
export const UmbrellaOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUmbrellaOffIcon>
> = UmbrellaOffIcon
    