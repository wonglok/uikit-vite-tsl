
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.400 1.044 C 14.559 1.138,13.667 1.502,12.963 2.038 C 12.779 2.178,11.165 3.792,8.897 6.105 C 3.844 11.257,3.652 11.458,3.328 11.909 C 1.319 14.707,1.627 18.508,4.060 20.940 C 6.536 23.417,10.371 23.686,13.215 21.582 C 13.636 21.271,14.142 20.766,18.204 16.600 C 22.084 12.622,21.999 12.718,21.999 12.300 C 21.999 11.930,21.730 11.523,21.391 11.382 C 21.173 11.291,20.783 11.302,20.571 11.405 C 20.441 11.467,19.355 12.555,16.360 15.619 C 11.949 20.134,11.892 20.187,11.056 20.552 C 10.317 20.876,9.815 20.980,9.000 20.980 C 8.331 20.980,7.958 20.922,7.400 20.732 C 5.209 19.986,3.797 17.804,4.034 15.531 C 4.137 14.548,4.458 13.723,5.031 12.973 C 5.261 12.671,13.630 4.101,14.080 3.707 C 14.371 3.451,14.746 3.245,15.139 3.125 C 15.412 3.042,15.542 3.027,16.000 3.027 C 16.628 3.027,16.982 3.112,17.461 3.378 C 17.836 3.586,18.414 4.164,18.622 4.539 C 18.888 5.018,18.973 5.372,18.973 6.000 C 18.973 6.458,18.958 6.588,18.875 6.861 C 18.753 7.261,18.549 7.629,18.277 7.939 C 18.058 8.190,10.602 15.814,9.921 16.485 C 9.605 16.796,9.489 16.884,9.320 16.940 C 8.585 17.184,7.867 16.539,8.035 15.786 C 8.062 15.668,8.125 15.514,8.177 15.444 C 8.228 15.374,10.185 13.364,12.525 10.976 C 14.865 8.588,16.822 6.564,16.873 6.479 C 17.170 5.983,16.893 5.255,16.333 5.064 C 16.097 4.983,15.950 4.983,15.679 5.064 C 15.420 5.141,15.835 4.731,10.636 10.040 C 8.514 12.207,6.700 14.078,6.605 14.198 C 6.391 14.469,6.235 14.775,6.114 15.161 C 6.033 15.418,6.020 15.539,6.023 16.020 C 6.026 16.508,6.039 16.620,6.128 16.887 C 6.441 17.833,7.166 18.558,8.113 18.873 C 8.386 18.963,8.485 18.975,9.000 18.975 C 9.515 18.975,9.614 18.963,9.887 18.873 C 10.263 18.747,10.635 18.542,10.900 18.313 C 11.078 18.159,18.320 10.787,19.480 9.578 C 20.124 8.907,20.459 8.379,20.723 7.619 C 20.922 7.044,20.980 6.678,20.980 6.000 C 20.980 5.321,20.922 4.954,20.722 4.381 C 20.449 3.596,20.028 2.941,19.434 2.378 C 18.358 1.357,16.902 0.876,15.400 1.044 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class PaperclipIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const Paperclip = PaperclipIcon
    