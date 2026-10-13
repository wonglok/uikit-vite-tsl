
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-cloud-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.420 3.026 C 7.840 3.092,7.531 3.139,7.240 3.205 C 3.566 4.047,0.997 7.288,1.000 11.080 C 1.001 11.767,1.158 12.718,1.394 13.460 C 2.031 15.471,3.535 17.214,5.442 18.152 C 5.948 18.401,6.808 18.720,6.974 18.720 C 7.399 18.720,7.871 18.352,7.961 17.950 C 8.027 17.655,7.984 17.405,7.828 17.172 C 7.663 16.927,7.532 16.843,7.031 16.660 C 5.849 16.227,4.918 15.545,4.195 14.580 C 3.056 13.062,2.713 11.027,3.287 9.200 C 4.238 6.178,7.424 4.407,10.488 5.197 C 11.909 5.563,13.165 6.449,13.974 7.657 C 14.246 8.063,14.448 8.465,14.648 8.996 C 14.841 9.511,14.884 9.593,15.026 9.725 C 15.297 9.977,15.299 9.977,16.760 10.004 C 17.942 10.026,18.136 10.038,18.405 10.111 C 19.390 10.379,20.233 11.096,20.678 12.046 C 20.906 12.532,20.978 12.881,20.978 13.500 C 20.978 14.119,20.906 14.468,20.678 14.954 C 20.230 15.910,19.428 16.596,18.420 16.885 C 18.218 16.943,17.945 16.974,17.440 16.997 C 17.055 17.014,16.689 17.049,16.627 17.074 C 16.435 17.152,16.241 17.325,16.128 17.516 C 16.037 17.672,16.020 17.746,16.020 18.000 C 16.020 18.256,16.036 18.328,16.131 18.489 C 16.367 18.891,16.619 18.996,17.350 18.998 C 18.940 19.004,20.309 18.455,21.382 17.382 C 22.966 15.798,23.426 13.473,22.570 11.376 C 22.033 10.062,20.895 8.946,19.539 8.403 C 18.802 8.108,18.140 8.001,17.052 7.999 L 16.420 7.998 16.174 7.489 C 15.756 6.623,15.257 5.935,14.566 5.271 C 13.217 3.977,11.604 3.228,9.766 3.042 C 9.379 3.003,8.694 2.994,8.420 3.026 M11.695 11.057 C 11.466 11.129,11.256 11.299,11.128 11.516 L 11.020 11.700 11.020 14.003 L 11.020 16.306 11.141 16.503 C 11.209 16.613,11.346 16.756,11.452 16.828 C 11.923 17.144,12.554 16.999,12.859 16.503 L 12.980 16.306 12.980 14.003 L 12.980 11.700 12.872 11.516 C 12.628 11.101,12.150 10.915,11.695 11.057 M11.695 19.055 C 11.464 19.130,11.255 19.300,11.128 19.516 C 11.037 19.672,11.020 19.746,11.020 20.000 C 11.020 20.257,11.036 20.327,11.133 20.492 C 11.651 21.374,12.998 21.018,12.998 20.000 C 12.998 19.623,12.792 19.281,12.463 19.112 C 12.265 19.010,11.911 18.984,11.695 19.055 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class CloudAlertIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const CloudAlert = CloudAlertIcon
    