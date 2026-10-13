
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PuzzleIcon as VanillaPuzzleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PuzzleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPuzzleIcon>
> = /*@__PURE__*/ build<VanillaPuzzleIcon, SvgProperties>(VanillaPuzzleIcon)
export const Puzzle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPuzzleIcon>
> = PuzzleIcon
    