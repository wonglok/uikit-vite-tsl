
      /* eslint-disable no-shadow-restricted-names */
      import { RenderContext, Svg, SvgProperties, SvgOutProperties, InProperties, WithSignal } from '../../index'
      const content = `<svg class="lucide lucide-kanban" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.695 4.057 C 5.466 4.129,5.256 4.299,5.128 4.516 L 5.020 4.700 5.020 10.503 L 5.020 16.306 5.141 16.503 C 5.543 17.156,6.457 17.156,6.859 16.503 L 6.980 16.306 6.980 10.503 L 6.980 4.700 6.872 4.516 C 6.628 4.101,6.150 3.915,5.695 4.057 M11.695 4.057 C 11.466 4.129,11.256 4.299,11.128 4.516 L 11.020 4.700 11.020 8.003 L 11.020 11.306 11.141 11.503 C 11.543 12.156,12.457 12.156,12.859 11.503 L 12.980 11.306 12.980 8.003 L 12.980 4.700 12.872 4.516 C 12.628 4.101,12.150 3.915,11.695 4.057 M17.695 4.057 C 17.466 4.129,17.256 4.299,17.128 4.516 L 17.020 4.700 17.020 12.003 L 17.020 19.306 17.141 19.503 C 17.543 20.156,18.457 20.156,18.859 19.503 L 18.980 19.306 18.980 12.003 L 18.980 4.700 18.872 4.516 C 18.628 4.101,18.150 3.915,17.695 4.057 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export class KanbanIcon<OutProperties extends SvgOutProperties = SvgOutProperties> extends Svg<OutProperties> {
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
      export const Kanban = KanbanIcon
    