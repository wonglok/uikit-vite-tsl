
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-milestone" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.695 2.057 C 11.466 2.129,11.256 2.299,11.128 2.516 L 11.020 2.700 11.008 3.850 L 10.995 5.000 7.368 5.002 C 3.323 5.005,3.455 4.996,2.983 5.281 C 2.703 5.449,2.354 5.816,2.219 6.083 C 2.000 6.515,2.000 6.512,2.000 9.500 C 2.000 12.501,1.999 12.484,2.225 12.930 C 2.361 13.199,2.801 13.639,3.070 13.775 C 3.525 14.006,3.419 14.000,7.368 14.000 L 10.998 14.000 11.009 17.653 L 11.020 21.306 11.141 21.503 C 11.543 22.156,12.457 22.156,12.859 21.503 L 12.980 21.306 12.991 17.653 L 13.002 14.000 15.143 14.000 C 17.484 14.000,17.624 13.989,18.166 13.762 C 18.509 13.619,22.142 11.171,22.417 10.899 C 22.774 10.545,23.000 10.002,23.000 9.500 C 23.000 9.012,22.779 8.467,22.441 8.122 C 22.231 7.908,18.667 5.485,18.280 5.294 C 17.731 5.022,17.776 5.027,15.272 5.010 L 13.004 4.996 12.992 3.848 L 12.980 2.700 12.872 2.516 C 12.628 2.101,12.150 1.915,11.695 2.057 M17.311 7.057 C 17.437 7.101,20.114 8.876,20.847 9.402 L 20.994 9.507 19.228 10.701 C 18.257 11.358,17.399 11.918,17.321 11.946 C 17.210 11.986,15.787 11.997,10.590 11.998 L 4.000 12.000 4.000 9.500 L 4.000 7.000 10.575 7.000 C 16.157 7.000,17.174 7.009,17.311 7.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class MilestoneIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const Milestone = MilestoneIcon
    