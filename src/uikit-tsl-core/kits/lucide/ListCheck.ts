
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-list-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.695 5.057 C 2.466 5.129,2.256 5.299,2.128 5.516 C 2.037 5.672,2.020 5.746,2.020 6.000 C 2.020 6.256,2.036 6.328,2.131 6.489 C 2.256 6.702,2.449 6.864,2.670 6.943 C 2.893 7.022,16.107 7.022,16.330 6.943 C 16.551 6.864,16.744 6.702,16.869 6.489 C 16.964 6.328,16.980 6.256,16.980 6.000 C 16.980 5.746,16.963 5.672,16.872 5.516 C 16.740 5.293,16.533 5.128,16.290 5.055 C 16.028 4.976,2.947 4.978,2.695 5.057 M2.695 11.057 C 2.466 11.129,2.256 11.299,2.128 11.516 C 2.037 11.672,2.020 11.746,2.020 12.000 C 2.020 12.256,2.036 12.328,2.131 12.489 C 2.256 12.702,2.449 12.864,2.670 12.943 C 2.793 12.987,4.021 12.996,9.500 12.996 C 14.979 12.996,16.207 12.987,16.330 12.943 C 16.551 12.864,16.744 12.702,16.869 12.489 C 16.964 12.328,16.980 12.256,16.980 12.000 C 16.980 11.746,16.963 11.672,16.872 11.516 C 16.740 11.293,16.533 11.128,16.290 11.055 C 16.028 10.976,2.947 10.978,2.695 11.057 M20.640 15.068 C 20.488 15.121,20.196 15.394,18.731 16.853 L 17.002 18.575 16.271 17.855 C 15.655 17.247,15.509 17.123,15.343 17.067 C 14.865 16.905,14.383 17.083,14.128 17.516 C 14.036 17.672,14.020 17.745,14.021 18.000 C 14.021 18.213,14.043 18.341,14.095 18.440 C 14.197 18.633,16.297 20.740,16.520 20.873 C 16.673 20.964,16.745 20.980,17.000 20.979 C 17.212 20.979,17.341 20.957,17.440 20.905 C 17.632 20.805,21.739 16.705,21.873 16.480 C 21.964 16.328,21.980 16.254,21.980 16.000 C 21.980 15.746,21.963 15.672,21.872 15.516 C 21.617 15.083,21.121 14.903,20.640 15.068 M2.695 17.057 C 2.466 17.129,2.256 17.299,2.128 17.516 C 2.037 17.672,2.020 17.746,2.020 18.000 C 2.020 18.256,2.036 18.328,2.131 18.489 C 2.256 18.702,2.449 18.864,2.670 18.943 C 2.892 19.022,11.108 19.022,11.330 18.943 C 11.551 18.864,11.744 18.702,11.869 18.489 C 11.964 18.328,11.980 18.256,11.980 18.000 C 11.980 17.746,11.963 17.672,11.872 17.516 C 11.740 17.293,11.533 17.128,11.290 17.055 C 11.029 16.976,2.946 16.979,2.695 17.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class ListCheckIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const ListCheck = ListCheckIcon
    