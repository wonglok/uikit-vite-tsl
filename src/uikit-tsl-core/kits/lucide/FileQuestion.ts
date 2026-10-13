
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-file-question" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.499 1.043 C 4.380 1.232,3.461 2.048,3.114 3.160 L 3.020 3.460 3.020 12.000 L 3.020 20.540 3.114 20.840 C 3.422 21.827,4.173 22.578,5.160 22.886 L 5.460 22.980 12.000 22.980 L 18.540 22.980 18.840 22.886 C 19.816 22.582,20.554 21.851,20.886 20.860 L 20.980 20.580 20.991 13.723 C 21.001 7.466,20.996 6.848,20.936 6.663 C 20.876 6.475,20.673 6.262,18.225 3.816 C 16.452 2.043,15.527 1.147,15.420 1.096 C 15.266 1.023,15.085 1.020,10.480 1.014 C 7.851 1.011,5.609 1.024,5.499 1.043 M16.790 5.210 L 19.000 7.420 19.000 13.764 C 19.000 19.023,18.991 20.138,18.945 20.290 C 18.872 20.533,18.707 20.740,18.484 20.872 L 18.300 20.980 12.000 20.980 L 5.700 20.980 5.516 20.872 C 5.415 20.813,5.284 20.700,5.225 20.623 C 4.985 20.308,5.000 20.888,5.000 12.022 C 5.000 2.888,4.974 3.632,5.304 3.303 C 5.619 2.988,5.320 3.006,10.220 3.003 L 14.580 3.000 16.790 5.210 M11.055 6.120 C 10.019 6.354,9.032 7.056,8.514 7.926 C 8.129 8.573,8.025 9.022,8.176 9.380 C 8.377 9.854,8.963 10.117,9.426 9.940 C 9.720 9.828,9.906 9.629,10.100 9.222 C 10.321 8.758,10.649 8.428,11.100 8.214 C 11.364 8.088,11.455 8.066,11.778 8.049 C 12.437 8.015,12.932 8.209,13.366 8.672 C 13.685 9.014,13.832 9.327,13.887 9.787 C 13.927 10.114,13.924 10.157,13.841 10.373 C 13.631 10.923,12.770 11.592,11.764 11.989 C 11.486 12.098,11.335 12.185,11.216 12.303 C 11.039 12.479,10.920 12.759,10.920 13.000 C 10.920 13.531,11.393 14.000,11.927 14.000 C 12.350 14.000,13.565 13.410,14.292 12.851 C 15.450 11.961,15.974 10.956,15.906 9.760 C 15.818 8.226,14.761 6.804,13.319 6.277 C 12.658 6.036,11.716 5.971,11.055 6.120 M11.695 16.055 C 11.464 16.130,11.255 16.300,11.128 16.516 C 11.037 16.672,11.020 16.746,11.020 17.000 C 11.020 17.257,11.036 17.327,11.133 17.492 C 11.651 18.374,12.998 18.018,12.998 17.000 C 12.998 16.623,12.792 16.281,12.463 16.112 C 12.265 16.010,11.911 15.984,11.695 16.055 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class FileQuestionIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const FileQuestion = FileQuestionIcon
    