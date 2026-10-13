
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-ruler-dimension-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.695 3.057 C 3.466 3.129,3.256 3.299,3.128 3.516 L 3.020 3.700 3.020 6.003 L 3.020 8.306 3.141 8.503 C 3.543 9.156,4.457 9.156,4.859 8.503 C 4.979 8.308,4.980 8.300,4.993 7.653 L 5.007 7.000 12.000 7.000 L 18.993 7.000 19.007 7.653 C 19.020 8.300,19.021 8.308,19.141 8.503 C 19.543 9.156,20.457 9.156,20.859 8.503 L 20.980 8.306 20.980 6.003 L 20.980 3.700 20.871 3.514 C 20.479 2.848,19.521 2.848,19.129 3.514 C 19.024 3.693,19.019 3.726,19.007 4.350 L 18.993 5.000 12.000 5.000 L 5.007 5.000 4.993 4.350 C 4.981 3.728,4.975 3.692,4.872 3.516 C 4.628 3.101,4.150 2.915,3.695 3.057 M3.477 11.073 C 2.806 11.249,2.238 11.823,2.060 12.508 C 2.010 12.700,2.000 13.180,2.000 15.500 C 2.000 18.501,1.999 18.484,2.225 18.930 C 2.361 19.199,2.801 19.639,3.070 19.775 C 3.542 20.014,2.983 20.000,12.000 20.000 C 21.017 20.000,20.458 20.014,20.930 19.775 C 21.196 19.640,21.638 19.200,21.771 18.937 C 22.000 18.485,22.000 18.489,21.999 15.514 C 21.999 12.558,21.995 12.505,21.781 12.083 C 21.646 11.816,21.297 11.449,21.017 11.281 C 20.523 10.983,21.217 11.005,12.000 11.005 C 4.321 11.005,3.721 11.009,3.477 11.073 M7.008 14.153 L 7.020 15.307 7.141 15.503 C 7.209 15.613,7.346 15.756,7.452 15.828 C 7.923 16.144,8.554 15.999,8.859 15.503 L 8.980 15.307 8.992 14.153 L 9.005 13.000 10.000 13.000 L 10.995 13.000 11.008 14.153 L 11.020 15.307 11.141 15.503 C 11.543 16.156,12.457 16.156,12.859 15.503 L 12.980 15.307 12.992 14.153 L 13.005 13.000 14.000 13.000 L 14.995 13.000 15.008 14.153 L 15.020 15.307 15.141 15.503 C 15.543 16.156,16.457 16.156,16.859 15.503 L 16.980 15.307 16.992 14.153 L 17.005 13.000 18.502 13.000 L 20.000 13.000 20.000 15.500 L 20.000 18.000 12.000 18.000 L 4.000 18.000 4.000 15.500 L 4.000 13.000 5.498 13.000 L 6.995 13.000 7.008 14.153 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class RulerDimensionLineIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const RulerDimensionLine = RulerDimensionLineIcon
    