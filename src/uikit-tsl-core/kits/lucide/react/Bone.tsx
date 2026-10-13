
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BoneIcon as VanillaBoneIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BoneIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBoneIcon>
> = /*@__PURE__*/ build<VanillaBoneIcon, SvgProperties>(VanillaBoneIcon)
export const Bone: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBoneIcon>
> = BoneIcon
    