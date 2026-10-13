
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-pencil-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.420 2.029 C 17.005 2.086,16.549 2.260,16.170 2.504 C 15.902 2.677,3.705 14.835,3.413 15.220 C 3.087 15.650,2.978 15.932,2.475 17.652 C 2.008 19.251,1.994 19.309,2.014 19.596 C 2.066 20.343,2.660 20.934,3.410 20.986 C 3.689 21.006,3.762 20.988,5.300 20.539 C 6.887 20.076,7.295 19.928,7.667 19.679 C 7.907 19.518,20.000 7.450,20.324 7.048 C 20.587 6.722,20.799 6.310,20.905 5.920 C 20.995 5.589,21.006 4.721,20.924 4.400 C 20.616 3.192,19.637 2.267,18.445 2.059 C 18.130 2.004,17.693 1.991,17.420 2.029 M18.353 4.116 C 18.594 4.239,18.733 4.374,18.861 4.607 C 18.961 4.789,18.978 4.864,18.978 5.120 C 18.977 5.528,18.885 5.696,18.395 6.185 L 17.999 6.579 17.210 5.790 L 16.421 5.001 16.780 4.637 C 17.162 4.251,17.347 4.110,17.566 4.043 C 17.757 3.985,18.170 4.023,18.353 4.116 M15.800 7.220 L 16.580 8.000 11.560 13.020 C 8.605 15.976,6.482 18.068,6.400 18.107 C 6.264 18.172,4.272 18.765,4.253 18.747 C 4.233 18.727,4.833 16.729,4.898 16.599 C 4.957 16.481,14.942 6.440,15.000 6.440 C 15.012 6.440,15.371 6.791,15.800 7.220 M11.695 19.057 C 11.466 19.129,11.256 19.299,11.128 19.516 C 11.037 19.672,11.020 19.746,11.020 20.000 C 11.020 20.256,11.036 20.328,11.131 20.489 C 11.256 20.702,11.449 20.864,11.670 20.943 C 11.892 21.022,21.108 21.022,21.330 20.943 C 21.551 20.864,21.744 20.702,21.869 20.489 C 21.964 20.328,21.980 20.256,21.980 20.000 C 21.980 19.746,21.963 19.672,21.872 19.516 C 21.740 19.293,21.533 19.128,21.290 19.055 C 21.029 18.976,11.946 18.978,11.695 19.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class PencilLineIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const PencilLine = PencilLineIcon
    