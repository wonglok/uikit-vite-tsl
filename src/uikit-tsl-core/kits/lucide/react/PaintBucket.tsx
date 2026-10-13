
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PaintBucketIcon as VanillaPaintBucketIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PaintBucketIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPaintBucketIcon>
> = /*@__PURE__*/ build<VanillaPaintBucketIcon, SvgProperties>(VanillaPaintBucketIcon)
export const PaintBucket: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPaintBucketIcon>
> = PaintBucketIcon
    