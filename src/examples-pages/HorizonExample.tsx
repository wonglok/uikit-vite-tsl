/**
 * Port of upstream `examples/horizon`.
 *
 * The upstream project splits its demos across `src/components/*`; this port
 * inlines all of them into a single file so the page is self-contained.
 *
 * Adaptations (and why):
 *  - `nuqs` (`useQueryState`) is not installed in this repo, so the page's
 *    selected-component state is a plain `useState` seeded to the default
 *    (`avatar`) instead of a URL query param. Component switching still works.
 *  - `DropdownAvatar src="./avatar.png"` pointed at a local asset, which is
 *    not vendored; it reuses the same remote avatar URL as `AvatarDemo`.
 *  - `overflow="scroll"` on the `RadioGroup` is kept for layout, but
 *    per-instance clipping is disabled in the TSL port, so the tab strip does
 *    not clip/scroll its overflowing items.
 *  - No `Portal` is used (upstream does not use one here).
 */
import { UikitCanvas } from "./UikitCanvas";
import { Fullscreen, Text } from "../uikit-tsl-core/react";
import {
  Avatar,
  Badge,
  Button,
  ButtonIcon,
  ButtonLabel,
  ButtonLabelSubtext,
  Checkbox,
  Divider,
  Dropdown,
  DropdownAvatar,
  DropdownButton,
  DropdownIcon,
  DropdownList,
  DropdownListItem,
  DropdownTextValue,
  IconIndicator,
  Input,
  InputField,
  Panel,
  ProgressBar,
  ProgressBarStepper,
  ProgressBarStepperStep,
  RadioGroup,
  RadioGroupItem,
  Slider,
  Toggle,
} from "../uikit-tsl-core/kits/horizon/react";
import { Container } from "../uikit-tsl-core/react";
import { GithubIcon } from "../uikit-tsl-core/kits/lucide/react";
import { noEvents, PointerEvents } from "@react-three/xr/dist/events.js";
import { firaCode } from "@pmndrs/msdfonts/fira-code";
import { useState } from "react";
import { avatarPath } from "../sample-images/paths";

const avatarSrc = avatarPath("horizon");

function AvatarDemo() {
  return (
    <Container alignItems="center">
      <Avatar src={avatarSrc} size="lg" attributionActive />
    </Container>
  );
}

function BadgeDemo() {
  return (
    <Container alignItems="center">
      <Badge label="Badge" />
    </Container>
  );
}

function ButtonDemo() {
  return (
    <Button>
      <ButtonIcon>
        <GithubIcon />
      </ButtonIcon>
      <ButtonLabel>
        <Text>Label</Text>
        <ButtonLabelSubtext>
          <Text>Subtext</Text>
        </ButtonLabelSubtext>
      </ButtonLabel>
    </Button>
  );
}

function CheckboxDemo() {
  return (
    <Container flexDirection="row" gap={8} alignItems="center">
      <Checkbox />
      <Text>Accept terms and conditions</Text>
    </Container>
  );
}

function DividerDemo() {
  return (
    <Container flexDirection="column" gap={16}>
      {/* Horizontal divider separating a title and content */}
      <Container width={360} flexDirection="column" gap={8}>
        <Text>Profile</Text>
        <Divider height={2} />
        <Text color="rgba(255,255,255,0.75)">Name, email and other details appear below.</Text>
      </Container>

      {/* Vertical dividers between cards */}
      <Container flexDirection="row" alignItems="center" gap={12} height={80}>
        <Container
          alignItems="center"
          justifyContent="center"
          width={120}
          height={60}
          backgroundColor="rgba(255,255,255,0.06)"
          borderRadius={8}
        >
          <Text>A</Text>
        </Container>
        <Divider orientation="vertical" width={2} />
        <Container
          alignItems="center"
          justifyContent="center"
          width={120}
          height={60}
          backgroundColor="rgba(255,255,255,0.06)"
          borderRadius={8}
        >
          <Text>B</Text>
        </Container>
        <Divider orientation="vertical" width={2} />
        <Container
          alignItems="center"
          justifyContent="center"
          width={120}
          height={60}
          backgroundColor="rgba(255,255,255,0.06)"
          borderRadius={8}
        >
          <Text>C</Text>
        </Container>
      </Container>
    </Container>
  );
}

function DropdownDemo() {
  return (
    <Container gap={8}>
      <Dropdown>
        <DropdownAvatar src={avatarSrc} />
        <DropdownTextValue placeholder="Select option" />
        <DropdownIcon />
        <DropdownButton />
        <DropdownList>
          <DropdownListItem value="Option A">
            <Text>Option A</Text>
          </DropdownListItem>
          <DropdownListItem value="Option B">
            <Text>Option B</Text>
          </DropdownListItem>
          <DropdownListItem value="Option C">
            <Text>Option C</Text>
          </DropdownListItem>
        </DropdownList>
      </Dropdown>
    </Container>
  );
}

function IconIndicatorDemo() {
  return (
    <Container flexDirection="row" gap={8}>
      <IconIndicator variant="none" />
      <IconIndicator variant="good" />
      <IconIndicator variant="poor" />
      <IconIndicator variant="bad" />
    </Container>
  );
}

function InputFieldDemo() {
  return <InputField width={280} label="HelperText" placeholder="Enter something" />;
}

function InputDemo() {
  return <Input width={240} placeholder="Email" variant="text" textAlign="left" />;
}

function PanelDemo() {
  return (
    <Panel padding={16} width={300}>
      <Container>
        <Text>Panel content</Text>
      </Container>
    </Panel>
  );
}

function ProgressDemo() {
  return (
    <Container gap={16} alignItems="center">
      <ProgressBar width={240} value={66} />
      <ProgressBarStepper width={300}>
        <ProgressBarStepperStep value />
        <ProgressBarStepperStep />
        <ProgressBarStepperStep />
        <ProgressBarStepperStep />
      </ProgressBarStepper>
    </Container>
  );
}

function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <RadioGroupItem value="default">
        <Text>Default</Text>
      </RadioGroupItem>
      <RadioGroupItem value="comfortable">
        <Text>Comfortable</Text>
      </RadioGroupItem>
      <RadioGroupItem value="compact">
        <Text>Compact</Text>
      </RadioGroupItem>
    </RadioGroup>
  );
}

function SliderDemo() {
  return <Slider defaultValue={50} min={0} max={100} step={1} width={300} />;
}

function ToggleDemo() {
  return <Toggle defaultChecked />;
}

const componentPages = {
  avatar: AvatarDemo,
  badge: BadgeDemo,
  button: ButtonDemo,
  checkbox: CheckboxDemo,
  divider: DividerDemo,
  dropdown: DropdownDemo,
  "icon-indicator": IconIndicatorDemo,
  input: InputDemo,
  "input-field": InputFieldDemo,
  panel: PanelDemo,
  progress: ProgressDemo,
  "radio-group": RadioGroupDemo,
  slider: SliderDemo,
  toggle: ToggleDemo,
};

const defaultComponent = "avatar";

export function HorizonExample() {
  const [component, setComponent] = useState<string>(defaultComponent);

  const installCommand = "npm install @react-three/uikit @react-three/uikit-horizon";

  return (
    <UikitCanvas events={noEvents} style={{ height: "100dvh", touchAction: "none" }} gl={{ localClippingEnabled: true }}>
      <PointerEvents />
      <color attach="background" args={["black"]} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0} position={[5, 1, 10]} />
      <Fullscreen
        color="black"
        dark={{ color: "white" }}
        flexDirection="column"
        alignItems="center"
        padding={32}
        gap={32}
      >
        <Panel flexShrink={0} alignSelf="center" flexDirection="row">
          <RadioGroup
            overflow="scroll"
            padding={20}
            scrollbarColor="rgba(255, 255, 255, 0.1)"
            scrollbarBorderRadius={4}
            value={component}
            onValueChange={(value) => setComponent(value ?? defaultComponent)}
            flexDirection="row"
            maxWidth="100%"
            gap={8}
          >
            {Object.keys(componentPages).map((name) => (
              <RadioGroupItem flexShrink={0} value={name} key={name}>
                <Text>
                  {name[0]!.toUpperCase()}
                  {name.slice(1)}
                </Text>
              </RadioGroupItem>
            ))}
          </RadioGroup>
        </Panel>

        <Panel flexDirection="column" flexGrow={1} alignItems="center" justifyContent="center" alignSelf="stretch">
          {(() => {
            const Component = componentPages[component as keyof typeof componentPages] ?? AvatarDemo;
            return <Component />;
          })()}
        </Panel>

        <Panel padding={8} flexDirection="row" gap={12} alignItems="center">
          <Text
            backgroundColor="black"
            color="white"
            padding={8}
            borderRadius={12}
            marginLeft={4}
            fontFamilies={{ firaCode }}
            fontFamily="firaCode"
          >
            {installCommand}
          </Text>
          <Button onClick={() => navigator.clipboard.writeText(installCommand)}>
            <Text>Copy</Text>
          </Button>
        </Panel>
      </Fullscreen>
    </UikitCanvas>
  );
}
