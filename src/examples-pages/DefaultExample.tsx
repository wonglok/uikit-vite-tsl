/**
 * Port of upstream `examples/default` — a tabbed gallery of the
 * `@react-three/uikit-default` component demos.
 *
 * Omitted:
 *  - The `video` demo (`<Video src="./example.mp4" controls />`): the local mp4 asset is
 *    not vendored and `Video` is unverified in this port.
 *  - The `label` demo, which upstream also leaves commented out.
 *
 * Per-instance clipping is implemented in this port (`panel/instance/group.ts`), so the
 * `TabsList` `overflow="scroll"` clips as upstream intends. Every demo component below
 * is inlined from `examples/default/src/components/*`.
 *
 * The upstream `useState` calls (tab selection + preferred color scheme, and the progress
 * demo's animated value) are held in `zustand` stores instead, per this project's state
 * management convention. Behavior is otherwise identical.
 */
import { useEffect, useMemo } from "react";
import { create } from "zustand";
import { UikitCanvas } from "./UikitCanvas";
import {
  Container,
  Fullscreen,
  Text,
  getPreferredColorScheme,
  setPreferredColorScheme,
} from "../uikit-tsl-core/react";
import {
  BellRing,
  Bold,
  Check,
  ChevronRight,
  Copy,
  Italic,
  Moon,
  Sun,
  SunMoon,
  Terminal,
  Underline,
} from "../uikit-tsl-core/kits/lucide/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionTriggerIcon,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertIcon,
  AlertTitle,
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  colors,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Separator,
  Skeleton,
  Slider,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  VanillaDialog,
} from "../uikit-tsl-core/kits/default/react";
import { signal } from "@preact/signals-core";
import { noEvents, PointerEvents } from "@react-three/xr/dist/events.js";
import { avatarPath } from "../sample-images/paths";

function AccordionDemo() {
  return (
    <Container flexDirection="column" width={300}>
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Text>Is it accessible?</Text>
            <AccordionTriggerIcon />
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <Text>Is it styled?</Text>
            <AccordionTriggerIcon />
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. It comes with default styles that matches the other components&apos; aesthetic.</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <Text>Is it animated?</Text>
            <AccordionTriggerIcon />
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. It&apos;s animated by default, but you can disable it if you prefer.</Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

function AlertDemo() {
  return (
    <Alert maxWidth={500}>
      <AlertIcon>
        <Terminal width={16} height={16} />
      </AlertIcon>
      <AlertTitle>
        <Text>Error</Text>
      </AlertTitle>
      <AlertDescription>
        <Text>You can add components to your app using the cli.</Text>
      </AlertDescription>
    </Alert>
  );
}

function AlertDialogDemo() {
  const ref = useMemo(() => signal<VanillaDialog | undefined>(undefined), []);
  return (
    <>
      <AlertDialogTrigger dialog={ref}>
        <Button variant="outline">
          <Text>Show Dialog</Text>
        </Button>
      </AlertDialogTrigger>
      <AlertDialog ref={(dialog) => void (ref.value = dialog ?? undefined)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <Text>Are you absolutely sure?</Text>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <Text>
                This action cannot be undone. This will permanently delete your account and remove your data from our
                servers.
              </Text>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              <Text>Cancel</Text>
            </AlertDialogCancel>
            <AlertDialogAction>
              <Text>Continue</Text>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function AvatarDemo() {
  return (
    <Container alignItems="center">
      <Avatar src={avatarPath("default-avatar")} />
    </Container>
  );
}

function BadgeDemo() {
  return (
    <Badge>
      <Text>Badge</Text>
    </Badge>
  );
}

function ButtonDemo() {
  return (
    <Button variant="outline" size="icon">
      <ChevronRight width={16} height={16} />
    </Button>
  );
}

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

function CardDemo() {
  return (
    <Card width={380}>
      <CardHeader>
        <CardTitle>
          <Text>Notifications</Text>
        </CardTitle>
        <CardDescription>
          <Text>You have 3 unread messages.</Text>
        </CardDescription>
      </CardHeader>
      <CardContent flexDirection="column" gap={16}>
        <Container flexDirection="row" alignItems="center" gap={16} borderRadius={6} borderWidth={1} padding={16}>
          <BellRing />
          <Container flexDirection="column" gap={4}>
            <Text fontSize={14} lineHeight="100%">
              Push Notifications
            </Text>
            <Text fontSize={14} lineHeight="20px" color={colors.mutedForeground}>
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
              <Container height={8} width={8} transformTranslateY={4} borderRadius={1000} backgroundColor={0x0ea5e9} />
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
      </CardContent>
      <CardFooter>
        <Button flexDirection="row" width="100%">
          <Check marginRight={8} height={16} width={16} />
          <Text>Mark all as read</Text>
        </Button>
      </CardFooter>
    </Card>
  );
}

function CheckboxDemo() {
  return (
    <Container flexDirection="row" gap={8} alignItems="center">
      <Checkbox />
      <Label>
        <Text>Accept terms and conditions</Text>
      </Label>
    </Container>
  );
}

function DialogDemo() {
  const ref = useMemo(() => signal<VanillaDialog | undefined>(undefined), []);
  return (
    <>
      <DialogTrigger dialog={ref}>
        <Button variant="outline">
          <Text>Edit Profile</Text>
        </Button>
      </DialogTrigger>
      <Dialog ref={(dialog) => void (ref.value = dialog ?? undefined)}>
        <DialogContent sm={{ maxWidth: 425 }}>
          <DialogHeader>
            <DialogTitle>
              <Text>Edit profile</Text>
            </DialogTitle>
            <DialogDescription>
              <Text>Make changes to your profile here. Click save when you're done.</Text>
            </DialogDescription>
          </DialogHeader>
          <Container flexDirection="column" alignItems="center" gap={16} paddingY={16}>
            <Container alignItems="center" gap={16}>
              <Label>
                <Text textAlign="right">Name</Text>
              </Label>
            </Container>
            <Container alignItems="center" gap={16}>
              <Label>
                <Text textAlign="right">Username</Text>
              </Label>
            </Container>
          </Container>
          <DialogFooter>
            <Button>
              <Text>Save changes</Text>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>
            <Text>1</Text>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>
            <Text>2</Text>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>
            <Text>3</Text>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

const useProgressDemoStore = create(() => ({ progress: 13 }));

function ProgressDemo() {
  const progress = useProgressDemoStore((state) => state.progress);

  useEffect(() => {
    const timer = setTimeout(() => useProgressDemoStore.setState({ progress: 66 }), 1000);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} width={200} />;
}

function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <RadioGroupItem value="default">
        <Label>
          <Text>Default</Text>
        </Label>
      </RadioGroupItem>
      <RadioGroupItem value="comfortable">
        <Label>
          <Text>Comfortable</Text>
        </Label>
      </RadioGroupItem>
      <RadioGroupItem value="compact">
        <Label>
          <Text>Compact</Text>
        </Label>
      </RadioGroupItem>
    </RadioGroup>
  );
}

function SeparatorDemo() {
  return (
    <Container width={300} flexDirection="column">
      <Container flexDirection="column" gap={4}>
        <Text fontSize={14} lineHeight="100%">
          Radix Primitives
        </Text>
        <Text fontSize={14} lineHeight="20px" color={colors.mutedForeground}>
          An open-source UI component library.
        </Text>
      </Container>
      <Separator marginY={16} />
      <Container
        flexDirection="row"
        height={20}
        alignItems="center"
        gap={16}
        {...{ "*": { fontSize: 14, lineHeight: "20px" } }}
      >
        <Text>Blog</Text>
        <Separator orientation="vertical" />
        <Text>Docs</Text>
        <Separator orientation="vertical" />
        <Text>Source</Text>
      </Container>
    </Container>
  );
}

function SkeletonDemo() {
  return (
    <Container flexDirection="row" alignItems="center" gap={16}>
      <Skeleton borderRadius={1000} height={48} width={48} />
      <Container flexDirection="column" gap={8}>
        <Skeleton height={16} width={250} />
        <Skeleton height={16} width={200} />
      </Container>
    </Container>
  );
}

function SliderDemo() {
  return <Slider defaultValue={50} max={100} step={1} width={300} />;
}

function SwitchDemo() {
  return (
    <Container flexDirection="row" alignItems="center" gap={8}>
      <Switch />
      <Label>
        <Text>Airplane Mode</Text>
      </Label>
    </Container>
  );
}

function TabsDemo() {
  return (
    <Tabs defaultValue="account" width={400}>
      <TabsList width="100%">
        <TabsTrigger flexGrow={1} value="account">
          <Text>Account</Text>
        </TabsTrigger>
        <TabsTrigger flexGrow={1} value="password">
          <Text>Password</Text>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>
              <Text>Account</Text>
            </CardTitle>
            <CardDescription>
              <Text>Make changes to your account here. Click save when you're done.</Text>
            </CardDescription>
          </CardHeader>
          <CardContent flexDirection="column" gap={8}>
            <Container flexDirection="column" gap={4}>
              <Label>
                <Text>Name</Text>
              </Label>
              <Text>Pedro Duarte</Text>
            </Container>
            <Container flexDirection="column" gap={4}>
              <Label>
                <Text>Username</Text>
              </Label>
              <Text>@peduarte</Text>
            </Container>
          </CardContent>
          <CardFooter>
            <Button>
              <Text>Save changes</Text>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>
              <Text>Password</Text>
            </CardTitle>
            <CardDescription>
              <Text>Change your password here. After saving, you'll be logged out.</Text>
            </CardDescription>
          </CardHeader>
          <CardContent flexDirection="column" gap={8}>
            <Container flexDirection="column" gap={4}>
              <Label>
                <Text>Current password</Text>
              </Label>
              <Text>password</Text>
            </Container>
            <Container flexDirection="column" gap={4}>
              <Label>
                <Text>New password</Text>
              </Label>
              <Text>password</Text>
            </Container>
          </CardContent>
          <CardFooter>
            <Button>
              <Text>Save password</Text>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

function ToggleDemo() {
  return (
    <Toggle>
      <Bold height={16} width={16} />
    </Toggle>
  );
}

function ToggleGroupDemo() {
  return (
    <ToggleGroup>
      <ToggleGroupItem aria-label="Toggle bold">
        <Bold height={16} width={16} />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle italic">
        <Italic height={16} width={16} />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle underline">
        <Underline width={16} height={16} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline">
          <Text>Hover</Text>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <Text>Add to library</Text>
      </TooltipContent>
    </Tooltip>
  );
}

function InputDemo() {
  return <Input width={200} placeholder="Email" />;
}

function TextareaDemo() {
  return <Textarea width={200} placeholder="Email" />;
}

const componentPages = {
  accordion: AccordionDemo,
  alert: AlertDemo,
  "alert-dialog": AlertDialogDemo,
  avatar: AvatarDemo,
  badge: BadgeDemo,
  button: ButtonDemo,
  card: CardDemo,
  checkbox: CheckboxDemo,
  dialog: DialogDemo,
  pagination: PaginationDemo,
  progress: ProgressDemo,
  "radio-group": RadioGroupDemo,
  separator: SeparatorDemo,
  skeleton: SkeletonDemo,
  slider: SliderDemo,
  switch: SwitchDemo,
  tabs: TabsDemo,
  toggle: ToggleDemo,
  "toggle-group": ToggleGroupDemo,
  tooltip: TooltipDemo,
  input: InputDemo,
  textarea: TextareaDemo,
};

const defaultComponent: keyof typeof componentPages = "card";

type PreferredColorScheme = ReturnType<typeof getPreferredColorScheme>;

function readInitialComponent(): keyof typeof componentPages {
  const params = new URLSearchParams(window.location.search);
  const selected = params.get("component");
  if (selected == null || !(selected in componentPages)) {
    return defaultComponent;
  }
  return selected as keyof typeof componentPages;
}

const useDefaultExampleStore = create<{
  component: keyof typeof componentPages;
  pcs: PreferredColorScheme;
  setComponent: (value: keyof typeof componentPages) => void;
  cycleColorScheme: () => void;
}>()((set, get) => ({
  component: readInitialComponent(),
  pcs: getPreferredColorScheme(),
  setComponent: (value) => {
    const params = new URLSearchParams(window.location.search);
    params.set("component", value);
    history.replaceState(null, "", "?" + params.toString());
    set({ component: value });
  },
  cycleColorScheme: () => {
    const { pcs } = get();
    setPreferredColorScheme(pcs === "light" ? "dark" : pcs === "dark" ? "system" : "light");
    set({ pcs: getPreferredColorScheme() });
  },
}));

export function DefaultExample() {
  const component = useDefaultExampleStore((state) => state.component);
  const setComponent = useDefaultExampleStore((state) => state.setComponent);
  const pcs = useDefaultExampleStore((state) => state.pcs);
  const cycleColorScheme = useDefaultExampleStore((state) => state.cycleColorScheme);
  return (
    <UikitCanvas events={noEvents} style={{ height: "100dvh", touchAction: "none" }} gl={{ localClippingEnabled: true }}>
      <PointerEvents />
      <color attach="background" args={["black"]} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0} position={[5, 1, 10]} />
      <Fullscreen flexDirection="column" backgroundColor={colors.background} alignItems="center" padding={32}>
        <Tabs alignSelf="stretch" flexGrow={1} value={component} onValueChange={(value) => setComponent(value as any)}>
          <TabsList height={55} paddingBottom={10} overflow="scroll" maxWidth="100%">
            {Object.keys(componentPages).map((name) => (
              <TabsTrigger flexShrink={0} value={name} key={name}>
                <Text>
                  {name[0]!.toUpperCase()}
                  {name.slice(1)}
                </Text>
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(componentPages).map(([name, Component]) => (
            <TabsContent
              flexDirection="column"
              flexGrow={1}
              alignItems="center"
              justifyContent="center"
              value={name}
              key={name}
            >
              <Component />
            </TabsContent>
          ))}
        </Tabs>
        <Card padding={8} flexDirection="row" gap={8} alignItems="center">
          <Button size="icon" variant="ghost" onClick={cycleColorScheme}>
            {pcs === "dark" ? <Moon /> : pcs === "system" ? <SunMoon /> : <Sun />}
          </Button>
          <Separator orientation="vertical" />
          <Text padding={8}>
            import {"{"} {`${component[0]!.toUpperCase()}${component.slice(1)}`} {"}"} from
            "@react-three/uikit-default";
          </Text>
          <Button
            onClick={() =>
              navigator.clipboard.writeText(
                `import { ${component[0]!.toUpperCase()}${component.slice(1)} } from "@react-three/uikit-default"`,
              )
            }
            size="icon"
            variant="secondary"
          >
            <Copy />
          </Button>
        </Card>
      </Fullscreen>
    </UikitCanvas>
  );
}
