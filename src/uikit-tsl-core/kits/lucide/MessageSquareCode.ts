
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-message-square-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.390 2.230,2.488 3.024,2.114 4.140 L 2.020 4.420 2.009 12.779 C 1.998 21.900,1.983 21.306,2.224 21.621 C 2.283 21.700,2.415 21.813,2.516 21.872 C 2.672 21.964,2.745 21.980,3.000 21.979 C 3.212 21.979,3.341 21.957,3.440 21.905 C 3.517 21.865,4.444 20.970,5.500 19.917 L 7.420 18.002 13.500 17.991 L 19.580 17.980 19.860 17.886 C 20.851 17.554,21.582 16.816,21.886 15.840 L 21.980 15.540 21.980 10.000 L 21.980 4.460 21.886 4.160 C 21.581 3.182,20.832 2.428,19.861 2.121 L 19.540 2.020 12.120 2.014 C 8.039 2.011,4.609 2.024,4.499 2.043 M19.310 4.061 C 19.589 4.144,19.856 4.411,19.939 4.690 C 19.992 4.868,20.000 5.546,20.000 10.001 C 20.000 14.212,19.990 15.139,19.945 15.290 C 19.872 15.533,19.707 15.740,19.484 15.872 L 19.300 15.980 13.020 16.000 C 6.931 16.019,6.735 16.022,6.580 16.097 C 6.480 16.145,5.963 16.627,5.210 17.375 L 4.000 18.577 4.000 11.736 C 4.000 5.728,4.007 4.870,4.061 4.690 C 4.140 4.421,4.412 4.143,4.673 4.063 C 4.964 3.974,19.009 3.971,19.310 4.061 M9.641 6.565 C 9.587 6.586,9.482 6.650,9.409 6.706 C 9.267 6.814,7.254 9.304,7.107 9.553 C 6.983 9.762,6.983 10.238,7.107 10.447 C 7.210 10.622,9.227 13.142,9.365 13.268 C 9.597 13.481,10.065 13.557,10.363 13.431 C 10.563 13.346,10.789 13.137,10.891 12.944 C 10.994 12.745,11.010 12.331,10.921 12.120 C 10.889 12.043,10.506 11.535,10.071 10.990 L 9.280 10.000 10.071 9.010 C 10.506 8.466,10.889 7.957,10.921 7.880 C 11.010 7.669,10.994 7.255,10.891 7.056 C 10.791 6.866,10.563 6.654,10.374 6.575 C 10.224 6.512,9.788 6.506,9.641 6.565 M13.617 6.575 C 13.142 6.789,12.885 7.367,13.060 7.826 C 13.105 7.943,13.427 8.382,13.926 9.006 L 14.720 10.000 13.926 10.994 C 13.427 11.618,13.105 12.057,13.060 12.174 C 12.883 12.637,13.146 13.223,13.620 13.424 C 13.935 13.557,14.397 13.486,14.635 13.268 C 14.773 13.142,16.790 10.622,16.893 10.447 C 17.028 10.218,17.017 9.761,16.871 9.520 C 16.656 9.165,14.703 6.783,14.527 6.661 C 14.376 6.556,14.314 6.539,14.047 6.530 C 13.849 6.523,13.696 6.539,13.617 6.575 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class MessageSquareCodeIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const MessageSquareCode = MessageSquareCodeIcon
    