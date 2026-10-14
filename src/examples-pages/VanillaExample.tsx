/**
 * Port of upstream `examples/vanilla` (the vanilla, non-React API).
 *
 * Omitted:
 *  - `OrbitHandles` from `@pmndrs/handle`: not installed in this repo, so the
 *    orbit/zoom interaction is removed (upstream `orbit.bind(scene)` /
 *    `orbit.update`). The scene is static apart from the animated progress bars.
 *  - The `window.__uikitPerf` perf harness (URL-driven config, startup timing,
 *    per-frame sampling, `report()` and the `panelGroupManager` /
 *    `glyphGroupManager` startup probes): it reaches into internals of the TSL
 *    port and is diagnostics, not UI. The layout, controls and motion are kept,
 *    using upstream's default config (rows 160, cards 8, tags 3, boxes 32,
 *    motion on). Nav buttons log instead of reloading the page.
 *
 * The imperative setup is re-expressed as R3F: the vanilla construction runs in
 * an effect inside an inner component that reads the renderer, camera and scene
 * from `useThree()`. R3F owns the render loop (no manual `WebGLRenderer`,
 * `setAnimationLoop` or resize handling), and `forwardHtmlEvents` is pumped from
 * `useFrame`. `overflow="scroll"` clips and scrolls normally.
 *
 * The scene renders through `UikitCanvas` (WebGPURenderer) — the port's TSL
 * materials have no GLSL fallback.
 */
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { noEvents } from "@react-three/xr/dist/events.js";
import { forwardHtmlEvents } from "@pmndrs/pointer-events";
import {
  AmbientLight,
  BoxGeometry,
  Color,
  DirectionalLight,
  Group,
  Mesh,
  MeshStandardMaterial,
  PointLight,
  type PerspectiveCamera,
} from "three";
import {
  Container,
  Fullscreen,
  type InProperties,
  reversePainterSortStable,
  Text,
  type TextOutProperties,
} from "../uikit-tsl-core";
import { PlusIcon } from "../uikit-tsl-core/kits/lucide";
import {
  Badge,
  Button,
  ButtonIcon,
  ButtonLabel,
  Checkbox,
  Panel,
  ProgressBar,
  Toggle,
} from "../uikit-tsl-core/kits/horizon/core";
import { UikitCanvas } from "./UikitCanvas";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "positive"
  | "onMedia";

/** Upstream reads these from the URL query string; the port uses the defaults. */
const config = { rows: 160, cards: 8, tags: 3, motion: true, boxes: 32 };

function VanillaScene() {
  const gl = useThree((state) => state.gl);
  const camera = useThree((state) => state.camera);
  const scene = useThree((state) => state.scene);
  const fullscreenRef = useRef<Fullscreen | null>(null);
  const updateEventsRef = useRef<(() => void) | null>(null);
  const animatedBarsRef = useRef<Array<ProgressBar>>([]);

  useEffect(() => {
    scene.background = new Color(0xf6f8fb);
    gl.localClippingEnabled = true;
    gl.setTransparentSort(reversePainterSortStable);

    const { update } = forwardHtmlEvents(
      gl.domElement,
      camera as PerspectiveCamera,
      scene,
    );
    updateEventsRef.current = update;

    scene.add(new AmbientLight(undefined, 1.5));

    const directionalLight = new DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new PointLight(0xffffff, 12, 12);
    pointLight.position.set(-4, 3, 3);
    scene.add(pointLight);

    const backdrop = createBackdrop(config.boxes);
    scene.add(backdrop);

    const fullscreen = new Fullscreen(gl, {
      distanceToCamera: 3.2,
      flexDirection: "row",
      gap: 18,
      padding: 24,
      backgroundColor: 0xf7f9fc,
      color: 0x101828,
      fontSize: 13,
    });
    // Upstream calls `scene.add(camera)` before `camera.add(fullscreen)`.
    // That line is load-bearing: a Fullscreen must be a child of the camera
    // (its `update()` looks for a Camera ancestor), but a camera that is not
    // itself in the scene graph is never traversed by the renderer — so the
    // whole uikit subtree would stay invisible. R3F's default camera is not
    // part of the scene, so we have to add it, unlike upstream's own camera.
    scene.add(camera);
    camera.add(fullscreen);
    fullscreenRef.current = fullscreen;

    const animatedBars: Array<ProgressBar> = [];
    animatedBarsRef.current = animatedBars;

    const addText = (
      parent: Container,
      text: string,
      properties?: InProperties<TextOutProperties>,
    ) => {
      const element = new Text({ text, ...properties });
      parent.add(element);
      return element;
    };

    const ui = <T extends Container>(
      ComponentClass: new (properties?: any) => T,
      properties: any,
      parent?: Container,
    ): T => {
      const element = new ComponentClass(properties);
      parent?.add(element);
      return element;
    };

    const makeButton = (
      labelText: string,
      variant: ButtonVariant,
      onClick: () => void,
    ) => {
      const button = new Button({ size: "sm", variant, onClick });
      const label = new ButtonLabel({ flexDirection: "row" });
      label.add(new Text({ text: labelText }));
      button.add(label);
      return button;
    };

    const makeIconButton = () => {
      const button = new Button({
        icon: true,
        size: "sm",
        variant: "tertiary",
      });
      const icon = new ButtonIcon();
      icon.add(new PlusIcon());
      button.add(icon);
      return button;
    };

    const makeMetricCard = (index: number) => {
      const card = ui(Container, {
        width: 112,
        height: 98,
        flexDirection: "column",
        gap: 10,
        padding: 14,
        backgroundColor: [0xffffff, 0xf0f9ff, 0xfef7ed, 0xf0fdf4][index % 4]!,
        borderColor: 0xd8dee8,
        borderWidth: 1,
        borderRadius: 8,
      });
      addText(
        card,
        ["Latency", "Throughput", "Backlog", "Health"][index % 4]!,
        { color: 0x475467, fontSize: 12 },
      );
      addText(
        card,
        `${Math.round(38 + ((index * 17) % 61))}${index % 2 === 0 ? "ms" : "%"}`,
        {
          fontSize: 22,
          fontWeight: 700,
          lineHeight: "100%",
        },
      );
      const bar = new ProgressBar({
        width: "100%",
        value: 25 + ((index * 11) % 70),
      });
      animatedBars.push(bar);
      card.add(bar);
      return card;
    };

    const makeRow = (index: number) => {
      const row = ui(Container, {
        height: 58,
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingX: 12,
        backgroundColor: index % 2 === 0 ? 0xffffff : 0xf9fafb,
        borderColor: 0xe4e7ec,
        borderWidth: 1,
        borderRadius: 7,
        hover: { backgroundColor: 0xecfeff, borderColor: 0x06b6d4 },
      });

      row.add(
        new Checkbox({ variant: index % 3 === 0 ? "onMedia" : "normal" }),
      );

      ui(
        Container,
        {
          width: 10,
          height: 10,
          borderRadius: 10,
          backgroundColor: [0x12b76a, 0xf79009, 0xf04438, 0x06b6d4][index % 4]!,
          flexShrink: 0,
        },
        row,
      );

      const title = ui(
        Container,
        { width: 250, flexShrink: 0, flexDirection: "column", gap: 2 },
        row,
      );
      addText(title, `Cluster ${String(index + 1).padStart(4, "0")}`, {
        fontWeight: 700,
        fontSize: 13,
        lineHeight: "100%",
      });
      addText(
        title,
        ["API gateway", "Billing worker", "Media service", "Search shard"][
          index % 4
        ]!,
        {
          color: 0x667085,
          fontSize: 11,
        },
      );

      const tagWrap = ui(
        Container,
        { width: 260, flexShrink: 0, flexDirection: "row", gap: 6 },
        row,
      );
      for (let i = 0; i < config.tags; i++) {
        tagWrap.add(
          new Badge({
            variant: (["secondary", "positive", "negative"] as const)[i % 3]!,
            label: `p${(index + i) % 9}`,
          }),
        );
      }

      const progressColumn = ui(
        Container,
        { flexGrow: 1, minWidth: 120, flexDirection: "column", gap: 4 },
        row,
      );
      const bar = new ProgressBar({ width: "100%", value: (index * 13) % 100 });
      animatedBars.push(bar);
      progressColumn.add(bar);
      addText(progressColumn, `${40 + (index % 49)} jobs/min`, {
        color: 0x667085,
        fontSize: 10,
      });

      row.add(new Toggle({ defaultChecked: index % 5 === 0 }));
      row.add(makeIconButton());
      return row;
    };

    const buildSidebar = (parent: Container) => {
      const sidebar = ui(
        Container,
        {
          width: 236,
          height: "100%",
          flexShrink: 0,
          flexDirection: "column",
          gap: 16,
          padding: 18,
          backgroundColor: 0x111827,
          color: 0xffffff,
          borderRadius: 8,
        },
        parent,
      );
      addText(sidebar, "UIKit Ops", {
        fontSize: 22,
        fontWeight: 700,
        lineHeight: "110%",
      });
      addText(sidebar, "Vanilla Three.js stress surface", {
        color: 0xa7b0c0,
        fontSize: 12,
      });

      const tiers = [
        ["Light", 80],
        ["Normal", 160],
        ["Busy", 480],
        ["Heavy", 1200],
        ["Extreme", 2400],
      ] as const;

      const nav = ui(Container, { flexDirection: "column", gap: 8 }, sidebar);
      for (const [label, rows] of tiers) {
        nav.add(
          makeButton(label, rows === config.rows ? "positive" : "onMedia", () =>
            console.log("tier", label, rows),
          ),
        );
      }

      const meters = ui(
        Container,
        { flexDirection: "column", gap: 8, marginTop: "auto" },
        sidebar,
      );
      addText(meters, `Rows ${config.rows}`, { color: 0xd1d5db, fontSize: 12 });
      addText(meters, `Cards ${config.cards}`, {
        color: 0xd1d5db,
        fontSize: 12,
      });
      addText(meters, `Animated ${config.motion ? "yes" : "no"}`, {
        color: 0xd1d5db,
        fontSize: 12,
      });
      meters.add(
        makeButton(
          config.motion ? "Pause motion" : "Start motion",
          "tertiary",
          () => console.log("toggle motion"),
        ),
      );
    };

    const buildWorkspace = (parent: Container) => {
      const workspace = ui(
        Container,
        {
          height: "100%",
          flexGrow: 1,
          flexShrink: 1,
          flexDirection: "column",
          gap: 12,
        },
        parent,
      );

      const header = ui(
        Container,
        { flexDirection: "row", alignItems: "center", gap: 12, flexShrink: 0 },
        workspace,
      );
      const headline = ui(
        Container,
        { flexDirection: "column", gap: 2, flexGrow: 1 },
        header,
      );
      addText(headline, "Operations Console", {
        fontSize: 21,
        fontWeight: 700,
        lineHeight: "110%",
      });
      addText(
        headline,
        "Synthetic but dashboard-shaped: cards, controls, rows, tags, and progress.",
        {
          color: 0x667085,
          fontSize: 12,
        },
      );
      header.add(
        makeButton("Open issue", "primary", () => console.log("open issue")),
      );
      header.add(
        makeButton("Export", "secondary", () => console.log("export")),
      );

      const cards = ui(
        Container,
        {
          height: 102,
          flexShrink: 0,
          flexDirection: "row",
          flexWrap: "no-wrap",
          gap: 10,
        },
        workspace,
      );
      for (let i = 0; i < config.cards; i++) {
        cards.add(makeMetricCard(i));
      }

      const table = ui(
        Container,
        {
          flexGrow: 1,
          flexShrink: 1,
          minHeight: 0,
          flexDirection: "column",
          overflow: "scroll",
          scrollbarWidth: 8,
          scrollbarColor: 0x98a2b3,
          scrollbarBorderRadius: 8,
          gap: 6,
          padding: 8,
          backgroundColor: 0xeef2f6,
          borderRadius: 8,
        },
        workspace,
      );

      for (let i = 0; i < config.rows; i++) {
        table.add(makeRow(i));
      }
    };

    const shell = ui(
      Panel,
      {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        padding: 14,
        gap: 14,
        backgroundColor: 0xffffff,
        borderColor: 0xd8dee8,
        borderWidth: 1,
        borderRadius: 8,
      },
      fullscreen,
    );

    buildSidebar(shell);
    buildWorkspace(shell);

    return () => {
      camera.remove(fullscreen);
      scene.remove(camera);
      scene.remove(backdrop);
      scene.remove(directionalLight);
      scene.remove(pointLight);
      fullscreenRef.current = null;
      updateEventsRef.current = null;
      animatedBarsRef.current = [];
    };
  }, [gl, camera, scene]);

  useFrame((_, delta) => {
    updateEventsRef.current?.();
    fullscreenRef.current?.update(delta * 1000);
    if (config.motion) {
      const bars = animatedBarsRef.current;
      const time = performance.now();
      for (let i = 0; i < bars.length; i++) {
        bars[i]!.setProperties({ value: (20 + i * 7 + time * 0.018) % 100 });
      }
    }
  });

  return null;
}

function createBackdrop(count: number) {
  const group = new Group();
  const geometry = new BoxGeometry(0.28, 0.28, 0.28);
  const materials = [
    new MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.55,
      metalness: 0.1,
    }),
    new MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.55,
      metalness: 0.1,
    }),
    new MeshStandardMaterial({
      color: 0x22c55e,
      roughness: 0.55,
      metalness: 0.1,
    }),
  ];
  for (let i = 0; i < count; i++) {
    const mesh = new Mesh(geometry, materials[i % materials.length]!);
    mesh.position.set(
      (i % 8) - 3.5,
      -1.8 + Math.floor(i / 8) * 0.34,
      -2.5 - (i % 4) * 0.18,
    );
    mesh.rotation.set(i * 0.12, i * 0.07, 0);
    group.add(mesh);
  }
  return group;
}

export function VanillaExample() {
  return (
    <UikitCanvas
      events={noEvents}
      style={{ height: "100%", touchAction: "none" }}
    >
      <VanillaScene />
    </UikitCanvas>
  );
}
