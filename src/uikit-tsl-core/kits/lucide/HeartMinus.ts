
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-heart-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.842 2.041 C 4.203 2.318,1.996 4.160,1.261 6.700 C 1.069 7.362,1.022 7.722,1.024 8.520 C 1.025 9.131,1.041 9.333,1.115 9.680 C 1.398 11.005,1.944 12.059,3.021 13.361 C 3.460 13.891,11.297 21.740,11.520 21.873 C 11.672 21.964,11.746 21.980,12.000 21.980 C 12.254 21.980,12.328 21.963,12.480 21.873 C 12.579 21.814,13.033 21.391,13.488 20.933 C 14.093 20.324,14.338 20.050,14.398 19.914 C 14.695 19.242,14.230 18.518,13.502 18.521 C 13.137 18.522,12.968 18.620,12.451 19.130 L 11.998 19.578 8.477 16.059 C 6.541 14.123,4.804 12.360,4.617 12.140 C 3.885 11.278,3.394 10.445,3.180 9.700 C 2.805 8.395,3.068 6.933,3.872 5.857 C 4.863 4.528,6.338 3.879,8.018 4.034 C 9.246 4.147,10.028 4.523,11.087 5.511 C 11.542 5.935,11.626 5.978,12.000 5.978 C 12.374 5.978,12.458 5.935,12.913 5.511 C 13.505 4.959,14.106 4.544,14.615 4.337 C 15.394 4.020,16.477 3.926,17.377 4.098 C 19.597 4.523,21.192 6.662,20.959 8.901 C 20.889 9.569,20.896 9.691,21.020 9.943 C 21.147 10.202,21.355 10.372,21.657 10.461 C 21.920 10.540,22.141 10.506,22.408 10.346 C 22.850 10.081,22.978 9.665,22.977 8.500 C 22.976 7.732,22.931 7.392,22.735 6.700 C 22.359 5.372,21.523 4.158,20.403 3.317 C 19.961 2.984,19.177 2.559,18.680 2.381 C 17.892 2.100,16.980 1.971,16.103 2.017 C 14.579 2.096,13.433 2.521,12.250 3.446 L 12.000 3.641 11.750 3.446 C 10.827 2.724,9.895 2.297,8.856 2.119 C 8.309 2.026,7.343 1.988,6.842 2.041 M14.695 14.057 C 14.466 14.129,14.256 14.299,14.128 14.516 C 14.037 14.672,14.020 14.746,14.020 15.000 C 14.020 15.256,14.036 15.328,14.131 15.489 C 14.256 15.702,14.449 15.864,14.670 15.943 C 14.891 16.022,21.109 16.022,21.330 15.943 C 21.551 15.864,21.744 15.702,21.869 15.489 C 21.964 15.328,21.980 15.256,21.980 15.000 C 21.980 14.746,21.963 14.672,21.872 14.516 C 21.740 14.293,21.533 14.128,21.290 14.055 C 21.030 13.977,14.945 13.979,14.695 14.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class HeartMinusIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const HeartMinus = HeartMinusIcon
    