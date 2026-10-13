
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-square-check-big" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.381 2.232,2.461 3.048,2.114 4.160 L 2.020 4.460 2.020 12.000 L 2.020 19.540 2.114 19.840 C 2.422 20.827,3.173 21.578,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.816 21.582,21.554 20.851,21.886 19.860 L 21.980 19.580 21.991 14.960 C 22.004 9.803,22.023 10.158,21.724 9.828 C 21.530 9.612,21.319 9.522,21.009 9.521 C 20.581 9.519,20.280 9.710,20.095 10.100 L 20.001 10.300 20.000 14.704 C 20.000 19.484,20.007 19.318,19.779 19.618 C 19.718 19.698,19.585 19.813,19.484 19.872 L 19.300 19.980 12.000 19.980 L 4.700 19.980 4.516 19.872 C 4.415 19.813,4.284 19.700,4.225 19.623 C 3.986 19.309,4.000 19.795,4.000 12.022 C 4.000 4.006,3.975 4.631,4.303 4.303 C 4.630 3.977,4.091 4.000,11.297 4.000 L 17.700 3.999 17.900 3.905 C 18.281 3.724,18.488 3.405,18.488 3.000 C 18.488 2.615,18.293 2.297,17.940 2.106 L 17.780 2.020 11.240 2.014 C 7.643 2.011,4.609 2.024,4.499 2.043 M21.640 3.068 C 21.483 3.121,20.851 3.738,16.731 7.853 L 12.001 12.577 10.771 11.355 C 9.688 10.279,9.516 10.124,9.343 10.066 C 8.863 9.905,8.382 10.084,8.128 10.516 C 8.037 10.672,8.020 10.746,8.020 11.000 C 8.020 11.254,8.036 11.328,8.127 11.480 C 8.261 11.704,11.368 14.804,11.560 14.905 C 11.754 15.006,12.246 15.007,12.440 14.905 C 12.633 14.805,22.737 4.708,22.873 4.480 C 22.964 4.327,22.980 4.254,22.980 4.000 C 22.980 3.746,22.963 3.672,22.872 3.516 C 22.617 3.083,22.122 2.903,21.640 3.068 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class SquareCheckBigIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
        constructor(
          inputProperties?: InProperties<OutProperties>,
          initialClasses?: Array<SvgProperties | string>,
          config?: {
            renderContext?: RenderContext
            defaultOverrides?: InProperties<OutProperties>
            defaults?: WithSignal<OutProperties>
          },
        ) {
          super(inputProperties, initialClasses, {
            ...config,
            defaultOverrides: {
              content,
              width: 24,
              height: 24,
              ...config?.defaultOverrides
            } as InProperties<OutProperties>,
          })
        }
      }
      export const SquareCheckBig = SquareCheckBigIcon
    