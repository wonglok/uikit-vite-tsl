
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-chart-no-axes-combined" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.640 2.068 C 21.483 2.121,20.909 2.680,17.231 6.354 L 13.001 10.578 11.449 9.031 C 10.031 7.617,9.875 7.473,9.627 7.357 C 9.387 7.245,9.315 7.230,9.003 7.230 C 8.706 7.230,8.612 7.248,8.396 7.342 C 8.155 7.447,7.938 7.655,4.687 10.897 C 2.700 12.878,1.189 14.416,1.127 14.520 C 1.036 14.672,1.020 14.746,1.020 15.000 C 1.020 15.257,1.036 15.327,1.133 15.492 C 1.263 15.714,1.502 15.901,1.736 15.965 C 1.938 16.019,2.266 15.989,2.445 15.899 C 2.519 15.862,4.024 14.390,5.789 12.627 L 8.999 9.422 10.569 10.982 C 11.718 12.123,12.190 12.567,12.328 12.633 C 12.744 12.833,13.254 12.833,13.672 12.634 C 13.817 12.565,14.881 11.526,18.313 8.102 C 20.895 5.526,22.811 3.584,22.873 3.480 C 22.964 3.328,22.980 3.254,22.980 3.000 C 22.980 2.746,22.963 2.672,22.872 2.516 C 22.617 2.083,22.122 1.903,21.640 2.068 M19.695 9.057 C 19.466 9.129,19.256 9.299,19.128 9.516 L 19.020 9.700 19.020 15.503 L 19.020 21.306 19.141 21.503 C 19.543 22.156,20.457 22.156,20.859 21.503 L 20.980 21.306 20.980 15.503 L 20.980 9.700 20.872 9.516 C 20.628 9.101,20.150 8.915,19.695 9.057 M7.695 13.057 C 7.466 13.129,7.256 13.299,7.128 13.516 L 7.020 13.700 7.020 17.503 L 7.020 21.306 7.141 21.503 C 7.543 22.156,8.457 22.156,8.859 21.503 L 8.980 21.306 8.980 17.503 L 8.980 13.700 8.872 13.516 C 8.628 13.101,8.150 12.915,7.695 13.057 M15.695 13.057 C 15.466 13.129,15.256 13.299,15.128 13.516 L 15.020 13.700 15.020 17.503 L 15.020 21.306 15.141 21.503 C 15.543 22.156,16.457 22.156,16.859 21.503 L 16.980 21.306 16.980 17.503 L 16.980 13.700 16.872 13.516 C 16.628 13.101,16.150 12.915,15.695 13.057 M11.695 15.057 C 11.466 15.129,11.256 15.299,11.128 15.516 L 11.020 15.700 11.020 18.503 L 11.020 21.306 11.141 21.503 C 11.543 22.156,12.457 22.156,12.859 21.503 L 12.980 21.306 12.980 18.503 L 12.980 15.700 12.872 15.516 C 12.628 15.101,12.150 14.915,11.695 15.057 M3.695 17.057 C 3.466 17.129,3.256 17.299,3.128 17.516 L 3.020 17.700 3.020 19.503 L 3.020 21.306 3.141 21.503 C 3.209 21.613,3.346 21.756,3.452 21.828 C 3.923 22.144,4.554 21.999,4.859 21.503 L 4.980 21.306 4.980 19.503 L 4.980 17.700 4.872 17.516 C 4.628 17.101,4.150 16.915,3.695 17.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class ChartNoAxesCombinedIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const ChartNoAxesCombined = ChartNoAxesCombinedIcon
    