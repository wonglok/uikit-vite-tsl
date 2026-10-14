/**
 * Port of upstream `examples/dashboard` (App.tsx + src/components/*).
 *
 * The example is a multi-file demo, so every helper component (TeamSwitcher,
 * MainNav, Overview, RecentSales, CalendarDateRangePicker, UserNav and the
 * Highlighter wrapper) is inlined into this single file because the router
 * loads exactly one file per example.
 *
 * Omissions / adaptations vs. upstream:
 *  - The "It's a macbook" card rendered a local `./mac-draco.glb` through
 *    drei's `<Gltf>`. Local assets are not vendored here, so it is replaced by
 *    a remote `<Image>` placeholder.
 *  - The avatars pointed at local `/uikit/examples/dashboard/*.png` files;
 *    they now use remote avatar URLs.
 *  - The page is wrapped in `overflow="scroll"`. Scrolling layout still works,
 *    and clipping works in this TSL port, so the content is cut at the viewport.
 *  - `Portal` (upstream does not use it here) is avoided as instructed.
 */
import { useState } from "react";
import type {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from "react";
import type {} from "@pmndrs/pointer-events";
import { useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { UikitCanvas } from "./UikitCanvas";
import { create } from "zustand";
import { computed } from "@preact/signals-core";
import { Euler, Matrix4, Quaternion, Vector3 } from "three";
import { noEvents, PointerEvents } from "@react-three/xr/dist/events.js";
import { avatarPath, imagePath } from "../sample-images/paths";
import {
  Container,
  Content,
  Fullscreen,
  Text,
  readReactive,
  setPreferredColorScheme,
  type ContainerProperties,
  VanillaComponent,
  type VanillaContainer,
  Image,
} from "../uikit-tsl-core/react";
import { Activity, BellRing, Calendar, ChevronDown, CreditCard, DollarSign, Users } from "../uikit-tsl-core/kits/lucide/react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  colors,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  type VanillaDialog,
} from "../uikit-tsl-core/kits/default/react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { type BaseOutProperties } from "../uikit-tsl-core";

setPreferredColorScheme("light");

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export function DashboardExample() {
  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState<VanillaDialog | null>(null);
  return (
    <>
      <FrameCounter />
      <UikitCanvas
        events={noEvents}
        frameloop="demand"
        flat
        camera={{ position: [0, 0, 18], fov: 35 }}
        style={{ height: "100%", touchAction: "none" }}
      >
        <PerspectiveCamera fov={50} makeDefault={open} />
        <PerspectiveCamera fov={40} makeDefault={!open} />
        <Environment preset="studio" environmentIntensity={2} />
        <CountFrames />
        <PointerEvents />
        <Fullscreen distanceToCamera={100} backgroundColor={0xffffff} dark={{ backgroundColor: 0x0 }}>
          <Dialog renderOrder={1} depthTest={false} ref={(ref) => setDialog(ref)} open={open} onOpenChange={setOpen}>
            <DialogContent positionType="relative" sm={{ maxWidth: 425 }}>
              <DialogHeader>
                <DialogTitle>
                  <Text>Edit profile</Text>
                </DialogTitle>
                <DialogDescription>
                  <Text>Make changes to your profile here. Click save when you're done.</Text>
                </DialogDescription>
              </DialogHeader>
              <Container flexDirection="row" alignItems="center" gap={16} borderRadius={6} borderWidth={1} padding={16}>
                <BellRing />
                <Container gap={4}>
                  <Text fontWeight="medium" fontSize={14} lineHeight="100%">
                    Push Notifications
                  </Text>
                  <Text fontWeight="medium" fontSize={14} lineHeight="20px" color={colors.mutedForeground}>
                    Send notifications to device.
                  </Text>
                </Container>
                <Switch />
              </Container>
              <Container flexDirection="column">
                {notifications.map((notification, index) => (
                  <Container
                    key={index}
                    marginBottom={index === notifications.length - 1 ? 0 : 16}
                    paddingBottom={index === notifications.length - 1 ? 0 : 16}
                    alignItems="flex-start"
                    flexDirection="row"
                    gap={17}
                  >
                    <Container
                      height={8}
                      width={8}
                      transformTranslateY={4}
                      borderRadius={1000}
                      backgroundColor={0x0ea5e9}
                    />
                    <Container flexDirection="column" gap={4}>
                      <Text fontSize={14} lineHeight="100%">
                        {notification.title}
                      </Text>
                      <Text fontSize={14} lineHeight="20px" color={colors.mutedForeground}>
                        {notification.description}
                      </Text>
                    </Container>
                  </Container>
                ))}
              </Container>
              <DialogFooter>
                <Button onClick={() => setOpen(false)}>
                  <Text>Save changes</Text>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Highlighter>
            <Container flexDirection="column" width="100%" height="100%" overflow="scroll">
              <DashboardPage dialog={dialog} />
            </Container>
          </Highlighter>
        </Fullscreen>
      </UikitCanvas>
    </>
  );
}

const useFrameCounter = create(() => 0);

function CountFrames() {
  useFrame(() => useFrameCounter.setState(useFrameCounter.getState() + 1));
  return null;
}

function FrameCounter() {
  const counter = useFrameCounter();
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "black",
        fontSize: "2rem",
        padding: "0.5rem 1rem",
        color: "white",
        fontFamily: "sans-serif",
        zIndex: 100,
      }}
    >
      {counter}
    </div>
  );
}

function DashboardPage({ dialog }: { dialog: VanillaDialog | null }) {
  return (
    <Container flexShrink={0} flexDirection="column">
      <Container flexShrink={0} flexDirection="column" borderBottomWidth={1}>
        <Container height={64} alignItems="center" flexDirection="row" paddingX={16}>
          <TeamSwitcher />
          <MainNav marginX={24} />
          <Container marginLeft="auto" flexDirection="row" alignItems="center" gap={16}>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open("https://github.com/pmndrs/uikit/tree/main/examples/dashboard", "_blank")}
            >
              <Text>Source Code</Text>
            </Button>
            <UserNav dialog={dialog} />
          </Container>
        </Container>
      </Container>
      <Container flexDirection="column" flexGrow={1} gap={16} padding={32} paddingTop={24}>
        <Container flexShrink={0} flexDirection="row" justifyContent="space-between" gap={8}>
          <Text fontSize={30} lineHeight="100%">
            Dashboard
          </Text>
          <Container flexDirection="row" gap={8} alignItems="center">
            <CalendarDateRangePicker />
            <Button
              onClick={(e) => {
                // e has the correct types as specified in types/three-augmented.d.ts - PointerEvent from pmndrs/pointer-events
                console.log(e.pointerId);
              }}
            >
              <Text>Download</Text>
            </Button>
          </Container>
        </Container>
        <Tabs flexDirection="column" defaultValue="overview" gap={16}>
          <TabsList alignSelf="flex-start">
            <TabsTrigger value="overview">
              <Text>Overview</Text>
            </TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              <Text>Analytics</Text>
            </TabsTrigger>
            <TabsTrigger value="reports" disabled>
              <Text>Reports</Text>
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              <Text>Notifications</Text>
            </TabsTrigger>
          </TabsList>
          <TabsContent flexShrink={0} flexDirection="column" value="overview" gap={16}>
            <Container flexShrink={0} flexDirection="column" gap={16} lg={{ flexDirection: "row" }}>
              <Container flexGrow={1} gap={16} flexDirection="row">
                <Card flexDirection="column" flexBasis={0} flexGrow={1}>
                  <CardHeader
                    flexShrink={0}
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    paddingBottom={8}
                  >
                    <CardTitle>
                      <Text fontSize={14} lineHeight="20px">
                        It's a macbook
                      </Text>
                    </CardTitle>
                    <DollarSign width={16} height={16} color={colors.mutedForeground} />
                  </CardHeader>
                  <CardContent alignItems="center" flexShrink={0} flexDirection="column">
                    {/* Upstream rendered a local `mac-draco.glb`; local placeholder image instead. */}
                    <Image src={imagePath("dashboard-macbook")} width={280} height={200} maxWidth="50%" />
                  </CardContent>
                </Card>
                <Card flexDirection="column" flexBasis={0} flexGrow={1}>
                  <CardHeader
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    paddingBottom={8}
                    flexShrink={0}
                    gap={0}
                  >
                    <CardTitle>
                      <Text fontSize={14} lineHeight="20px">
                        Subscriptions
                      </Text>
                    </CardTitle>
                    <Users height={16} width={16} color={colors.mutedForeground} />
                  </CardHeader>
                  <CardContent flexShrink={0} flexDirection="column">
                    <Text fontSize={24} lineHeight="32px">
                      +2350
                    </Text>
                    <Text fontSize={12} lineHeight="16px" color={colors.mutedForeground}>
                      +180.1% from last month
                    </Text>
                  </CardContent>
                </Card>
              </Container>
              <Container flexGrow={1} gap={16} flexDirection="row">
                <Card flexDirection="column" flexBasis={0} flexGrow={1}>
                  <CardHeader
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    paddingBottom={2}
                    gap={0}
                    flexShrink={0}
                  >
                    <CardTitle>
                      <Text fontSize={14} lineHeight="20px">
                        Sales
                      </Text>
                    </CardTitle>
                    <CreditCard width={16} height={16} color={colors.mutedForeground} />
                  </CardHeader>
                  <CardContent flexShrink={0} flexDirection="column">
                    <Text fontSize={24} lineHeight="32px">
                      +12,234
                    </Text>
                    <Text fontSize={12} lineHeight="16px" color={colors.mutedForeground}>
                      +19% from last month
                    </Text>
                  </CardContent>
                </Card>
                <Card flexDirection="column" flexBasis={0} flexGrow={1}>
                  <CardHeader
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    paddingBottom={2}
                    gap={0}
                    flexShrink={0}
                  >
                    <CardTitle>
                      <Text fontSize={14} lineHeight="20px">
                        Active Now
                      </Text>
                    </CardTitle>
                    <Activity width={16} height={16} color={colors.mutedForeground} />
                  </CardHeader>
                  <CardContent flexShrink={0} flexDirection="column">
                    <Text fontSize={24} lineHeight="32px">
                      +573
                    </Text>
                    <Text fontSize={12} lineHeight="16px" color={colors.mutedForeground}>
                      +201 since last hour
                    </Text>
                  </CardContent>
                </Card>
              </Container>
            </Container>
            <Container flexShrink={0} lg={{ flexDirection: "row" }} flexDirection="column" gap={16}>
              <Card flexDirection="column" lg={{ flexGrow: 4 }} flexBasis={0}>
                <CardHeader>
                  <CardTitle>
                    <Text>Overview</Text>
                  </CardTitle>
                </CardHeader>
                <CardContent flexShrink={0} paddingLeft={8}>
                  <Overview />
                </CardContent>
              </Card>
              <Card flexDirection="column" lg={{ flexGrow: 3 }} flexBasis={0}>
                <CardHeader>
                  <CardTitle>
                    <Text>Recent Sales</Text>
                  </CardTitle>
                  <CardDescription>
                    <Text>You made 265 sales this month.</Text>
                  </CardDescription>
                </CardHeader>
                <CardContent flexDirection="column">
                  <RecentSales />
                </CardContent>
              </Card>
            </Container>
          </TabsContent>
        </Tabs>
      </Container>
    </Container>
  );
}

/* ------------------------------------------------------------------ *
 * Inlined from src/components/TeamSwitcher.tsx
 * ------------------------------------------------------------------ */
const groups = [
  {
    label: "Personal Account",
    teams: [
      {
        label: "Alicia Koch",
        value: "personal",
      },
    ],
  },
  {
    label: "Teams",
    teams: [
      {
        label: "Acme Inc.",
        value: "acme-inc",
      },
      {
        label: "Monsters Inc.",
        value: "monsters",
      },
    ],
  },
];

function TeamSwitcher(props: Omit<ComponentPropsWithoutRef<typeof Button>, "children">) {
  const selectedTeam = groups[0]?.teams[0];
  return (
    <Button variant="outline" width={200} justifyContent="space-between" {...props}>
      <Avatar
        marginRight={8}
        height={20}
        width={20}
        src={avatarPath(`${selectedTeam?.value}`)}
      />
      <Text>{selectedTeam?.label}</Text>
      <ChevronDown marginLeft="auto" height={20} width={20} flexShrink={0} opacity={0.5} />
    </Button>
  );
}

/* ------------------------------------------------------------------ *
 * Inlined from src/components/MainNav.tsx
 * ------------------------------------------------------------------ */
function MainNav(props: Omit<ComponentPropsWithoutRef<typeof Container>, "children">) {
  return (
    <Container alignItems="center" flexDirection="row" gap={16} lg={{ gap: 24 }} {...props}>
      <Text fontSize={14} lineHeight="20px" fontWeight="medium">
        Overview
      </Text>
      <Text color={colors.mutedForeground} fontSize={14} lineHeight="20px" fontWeight="medium">
        Customers
      </Text>
      <Text color={colors.mutedForeground} fontSize={14} lineHeight="20px" fontWeight="medium">
        Products
      </Text>
      <Text color={colors.mutedForeground} fontSize={14} lineHeight="20px" fontWeight="medium">
        Settings
      </Text>
    </Container>
  );
}

/* ------------------------------------------------------------------ *
 * Inlined from src/components/DateRangePicker.tsx
 * ------------------------------------------------------------------ */
function CalendarDateRangePicker() {
  return (
    <Button variant="outline" width={260} justifyContent="flex-start">
      <Calendar marginRight={8} width={16} height={16} />
      <Text fontWeight="normal">Jan 20, 2023 - Feb 09, 2023</Text>
    </Button>
  );
}

/* ------------------------------------------------------------------ *
 * Inlined from src/components/UserNav.tsx
 * ------------------------------------------------------------------ */
function UserNav({ dialog }: { dialog: VanillaDialog | null }) {
  return (
    <DialogTriggerWrapper dialog={dialog}>
      <Avatar
        cursor="pointer"
        src={avatarPath("Alicia")}
        height={32}
        width={32}
      />
    </DialogTriggerWrapper>
  );
}

/**
 * `DialogTrigger` from the default kit takes the target dialog via a `dialog`
 * prop. It is re-wrapped here so the `dialog ?? undefined` coercion lives in one
 * place (matching the upstream UserNav).
 */
function DialogTriggerWrapper({ dialog, children }: { dialog: VanillaDialog | null; children: ReactNode }) {
  return <DialogTrigger dialog={dialog ?? undefined}>{children}</DialogTrigger>;
}

/* ------------------------------------------------------------------ *
 * Inlined from src/components/Overview.tsx
 * ------------------------------------------------------------------ */
const overviewData = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
].map((name) => ({
  name,
  total: Math.floor(Math.random() * 5000) + 1000,
}));

const max = 6000;

const yAxisLabels = ["$6000", "$4500", "$3000", "$1500", "$0"];

function Overview() {
  return (
    <Container flexShrink={0} paddingX={16} gap={16} width="100%" height={350} flexDirection="row">
      <Container paddingBottom={12 * 1.333 + 8} flexDirection="column" alignItems="flex-end" justifyContent="space-between">
        {yAxisLabels.map((label) => (
          <Text color={colors.mutedForeground} fontSize={12} lineHeight="16px" key={label}>
            {label}
          </Text>
        ))}
      </Container>
      <Container gap={16} height="100%" flexGrow={1} flexDirection="row">
        {overviewData.map(({ name, total }) => (
          <Container flexDirection="column" gap={8} flexGrow={1} key={name} alignItems="center">
            <Container flexDirection="column" flexGrow={1} flexShrink={1} justifyContent="flex-end" width="100%">
              <Container
                borderTopRadius={4}
                height={`${Math.min(1, total / max) * 100}%`}
                backgroundColor={colors.primary}
                width="100%"
              />
            </Container>
            <Text color={colors.mutedForeground} fontSize={12} lineHeight="16px">
              {name}
            </Text>
          </Container>
        ))}
      </Container>
    </Container>
  );
}

/* ------------------------------------------------------------------ *
 * Inlined from src/components/RecentSales.tsx
 * ------------------------------------------------------------------ */
const recentSales = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", avatar: "olivia" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", avatar: "jackson" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00", avatar: "isabella" },
  { name: "William Kim", email: "will@email.com", amount: "+$99.00", avatar: "will" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00", avatar: "sofia" },
];

function RecentSales() {
  return (
    <Container flexDirection="column" gap={32}>
      {recentSales.map((sale) => (
        <Container key={sale.email} flexDirection="row" alignItems="center">
          <Avatar
            height={36}
            width={36}
            src={avatarPath(sale.avatar)}
          />
          <Container flexDirection="column" marginLeft={16} gap={4}>
            <Text fontSize={14} lineHeight="100%" fontWeight="medium">
              {sale.name}
            </Text>
            <Text fontSize={14} lineHeight="20px" color={colors.mutedForeground}>
              {sale.email}
            </Text>
          </Container>
          <Text marginLeft="auto" fontWeight="medium">
            {sale.amount}
          </Text>
        </Container>
      ))}
    </Container>
  );
}

/* ------------------------------------------------------------------ *
 * Inlined from src/components/Highlighter.tsx
 * ------------------------------------------------------------------ */
const matrixHelper = new Matrix4();
const quaternionHelper = new Quaternion();

/**
 * Must be placed inside the root component of the UI. Draws a red outline over
 * whatever uikit component the pointer is over.
 */
const Highlighter: ForwardRefExoticComponent<PropsWithoutRef<ContainerProperties> & RefAttributes<VanillaContainer>> =
  forwardRef<VanillaContainer, ContainerProperties>(({ onPointerOver, onPointerLeave, children, ...props }, ref) => {
    const internalRef = useRef<VanillaContainer | null>(null);
    const highlightRef = useRef<VanillaContainer | null>(null);
    useImperativeHandle(ref, () => internalRef.current!, []);
    // Adding width and height 100% to the highlighter container to make sure it
    // fills its parent, which is required for the highlighter to work.
    return (
      <Container
        ref={internalRef}
        width="100%"
        height="100%"
        {...props}
        onPointerOver={(e) => {
          if (!(e.object instanceof VanillaComponent) || highlightRef.current == null || internalRef.current == null) {
            return;
          }
          const { globalMatrix, properties, size } = e.object as VanillaComponent<BaseOutProperties>;
          const transformation = computed(() => {
            const { value } = globalMatrix;
            if (value == null) {
              return { translation: new Vector3(), scale: new Vector3(), rotation: new Euler() };
            }
            const baseMatrix = internalRef.current?.globalMatrix.value;
            if (baseMatrix != null) {
              matrixHelper.copy(baseMatrix).invert();
            } else {
              matrixHelper.identity();
            }
            matrixHelper.multiply(value);
            const translation = new Vector3();
            const scale = new Vector3();
            matrixHelper.decompose(translation, quaternionHelper, scale);
            const rotation = new Euler().setFromQuaternion(quaternionHelper);
            return { translation, scale, rotation };
          });
          const width = computed(() => transformation.value.scale.x * (size.value?.[0] ?? 0));
          const height = computed(() => transformation.value.scale.y * (size.value?.[1] ?? 0));
          highlightRef.current.setProperties({
            visibility: "visible",
            transformTranslateX: computed(
              () => transformation.value.translation.x / Number(properties.value.pixelSize) - 0.5 * width.value,
            ),
            transformTranslateY: computed(
              () => -transformation.value.translation.y / Number(properties.value.pixelSize) - 0.5 * height.value,
            ),
            transformTranslateZ: computed(
              () => transformation.value.translation.z / Number(properties.value.pixelSize),
            ),
            transformScaleZ: computed(() => transformation.value.scale.z),
            transformRotateX: computed(() => transformation.value.rotation.x),
            transformRotateZ: computed(() => transformation.value.rotation.y),
            transformRotateY: computed(() => transformation.value.rotation.z),
            width,
            height,
          });
          readReactive(onPointerOver)?.(e);
        }}
        onPointerLeave={(e) => {
          highlightRef.current?.setProperties({ visibility: "hidden" });
          readReactive(onPointerLeave)?.(e);
        }}
        onClick={(e) => {
          if (!(e.object instanceof VanillaComponent)) {
            return;
          }
          console.log(e.object);
        }}
      >
        {children}
        <Container
          ref={highlightRef}
          pointerEvents="none"
          positionType="absolute"
          positionLeft="50%"
          positionTop="50%"
          zIndex={20}
          borderColor="red"
          borderWidth={1}
        />
      </Container>
    );
  });
