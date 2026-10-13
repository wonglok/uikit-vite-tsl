
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-tickets" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.060 1.896 C 14.803 1.960,15.273 1.739,9.400 4.549 L 4.300 6.988 3.880 7.012 C 2.966 7.064,2.281 7.405,1.679 8.108 C 1.437 8.391,1.239 8.760,1.114 9.160 L 1.020 9.460 1.020 14.500 L 1.020 19.540 1.114 19.840 C 1.422 20.827,2.173 21.578,3.160 21.886 L 3.460 21.980 12.000 21.980 L 20.540 21.980 20.840 21.886 C 21.827 21.578,22.578 20.827,22.886 19.840 L 22.980 19.540 22.980 14.500 L 22.980 9.460 22.886 9.160 C 22.580 8.179,21.817 7.414,20.861 7.126 C 20.593 7.046,20.425 7.027,19.840 7.010 L 19.140 6.990 18.423 5.405 C 17.314 2.954,17.203 2.732,16.968 2.475 C 16.515 1.982,15.707 1.736,15.060 1.896 M16.259 5.493 C 16.627 6.303,16.920 6.973,16.910 6.983 C 16.901 6.993,15.107 6.996,12.924 6.990 L 8.955 6.980 12.227 5.415 C 15.393 3.901,15.501 3.853,15.545 3.935 C 15.570 3.982,15.892 4.683,16.259 5.493 M5.007 9.653 C 5.020 10.300,5.021 10.308,5.141 10.503 C 5.543 11.156,6.457 11.156,6.859 10.503 C 6.979 10.308,6.980 10.300,6.993 9.653 L 7.007 9.000 13.556 9.000 C 20.926 9.000,20.370 8.976,20.697 9.303 C 21.019 9.625,21.000 9.301,21.000 14.501 C 21.000 19.501,21.008 19.318,20.779 19.618 C 20.718 19.698,20.585 19.813,20.484 19.872 L 20.300 19.980 13.653 19.990 L 7.007 20.001 6.993 19.350 C 6.981 18.726,6.976 18.693,6.871 18.514 C 6.479 17.848,5.521 17.848,5.129 18.514 C 5.024 18.693,5.019 18.725,5.007 19.353 L 4.993 20.007 4.347 19.993 C 3.728 19.981,3.692 19.975,3.516 19.872 C 3.415 19.813,3.284 19.700,3.225 19.623 C 2.989 19.314,3.000 19.562,3.000 14.522 C 3.000 9.298,2.981 9.625,3.304 9.303 C 3.554 9.053,3.728 9.006,4.427 9.003 L 4.993 9.000 5.007 9.653 M5.695 13.057 C 5.466 13.129,5.256 13.299,5.128 13.516 C 5.020 13.699,5.020 13.703,5.020 14.503 L 5.020 15.306 5.141 15.503 C 5.543 16.156,6.457 16.156,6.859 15.503 L 6.980 15.306 6.980 14.503 C 6.980 13.703,6.980 13.699,6.872 13.516 C 6.628 13.101,6.150 12.915,5.695 13.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class TicketsIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const Tickets = TicketsIcon
    