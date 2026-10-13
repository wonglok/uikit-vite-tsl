
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-tv-minimal-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 2.043 C 2.380 2.232,1.461 3.048,1.114 4.160 L 1.020 4.460 1.020 10.000 L 1.020 15.540 1.114 15.840 C 1.422 16.827,2.173 17.578,3.160 17.886 L 3.460 17.980 12.000 17.980 L 20.540 17.980 20.840 17.886 C 21.827 17.578,22.578 16.827,22.886 15.840 L 22.980 15.540 22.980 10.000 L 22.980 4.460 22.886 4.160 C 22.581 3.182,21.832 2.428,20.861 2.121 L 20.540 2.020 12.120 2.014 C 7.489 2.011,3.609 2.024,3.499 2.043 M20.310 4.061 C 20.589 4.144,20.856 4.411,20.939 4.690 C 20.992 4.868,21.000 5.546,21.000 10.001 C 21.000 14.212,20.990 15.139,20.945 15.290 C 20.872 15.533,20.707 15.740,20.484 15.872 L 20.300 15.980 12.000 15.980 L 3.700 15.980 3.516 15.872 C 3.303 15.747,3.141 15.550,3.058 15.316 C 2.969 15.061,2.971 4.993,3.061 4.690 C 3.140 4.421,3.412 4.143,3.673 4.063 C 3.833 4.014,5.030 4.005,11.983 4.003 C 19.144 4.000,20.130 4.007,20.310 4.061 M10.340 6.053 C 9.826 6.185,9.404 6.536,9.168 7.030 L 9.020 7.340 9.009 9.894 C 8.999 12.027,9.007 12.484,9.055 12.674 C 9.317 13.689,10.430 14.263,11.380 13.873 C 11.782 13.708,15.424 11.448,15.652 11.223 C 15.776 11.099,15.905 10.912,15.995 10.723 C 16.133 10.434,16.140 10.400,16.140 10.000 C 16.140 9.600,16.133 9.566,15.995 9.277 C 15.905 9.087,15.777 8.901,15.651 8.777 C 15.429 8.558,11.688 6.241,11.345 6.111 C 11.094 6.015,10.599 5.987,10.340 6.053 M13.020 9.438 C 13.460 9.708,13.841 9.949,13.867 9.974 C 13.909 10.016,13.191 10.475,11.152 11.712 L 11.000 11.805 11.000 10.003 L 11.000 8.201 11.610 8.575 C 11.945 8.780,12.580 9.168,13.020 9.438 M6.695 20.057 C 6.466 20.129,6.256 20.299,6.128 20.516 C 6.037 20.672,6.020 20.746,6.020 21.000 C 6.020 21.256,6.036 21.328,6.131 21.489 C 6.256 21.702,6.449 21.864,6.670 21.943 C 6.792 21.987,7.774 21.996,12.000 21.996 C 16.226 21.996,17.208 21.987,17.330 21.943 C 17.551 21.864,17.744 21.702,17.869 21.489 C 17.964 21.328,17.980 21.256,17.980 21.000 C 17.980 20.746,17.963 20.672,17.872 20.516 C 17.740 20.293,17.533 20.128,17.290 20.055 C 17.028 19.976,6.946 19.978,6.695 20.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class TvMinimalPlayIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const TvMinimalPlay = TvMinimalPlayIcon
    