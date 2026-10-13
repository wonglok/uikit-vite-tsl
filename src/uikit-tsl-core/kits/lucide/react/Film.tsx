
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FilmIcon as VanillaFilmIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FilmIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFilmIcon>
> = /*@__PURE__*/ build<VanillaFilmIcon, SvgProperties>(VanillaFilmIcon)
export const Film: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFilmIcon>
> = FilmIcon
    