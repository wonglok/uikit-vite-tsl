
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Settings2Icon as VanillaSettings2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Settings2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSettings2Icon>
> = /*@__PURE__*/ build<VanillaSettings2Icon, SvgProperties>(VanillaSettings2Icon)
export const Settings2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSettings2Icon>
> = Settings2Icon
    