
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UmbrellaIcon as VanillaUmbrellaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UmbrellaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUmbrellaIcon>
> = /*@__PURE__*/ build<VanillaUmbrellaIcon, SvgProperties>(VanillaUmbrellaIcon)
export const Umbrella: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUmbrellaIcon>
> = UmbrellaIcon
    