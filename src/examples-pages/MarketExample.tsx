/**
 * Port of upstream `examples/market`.
 *
 * Omitted: the `<Video src="example.mp4" />` tile in the "Made By You" row — the local mp4
 * asset is not vendored and `Video` is unverified in this port. Everything else is inlined
 * from `examples/market/src/*` (data + `Menu`/`Sidebar`/`AlbumArtwork` components).
 *
 * Per-instance clipping is disabled in this port, so the `overflow="scroll"` containers do
 * not actually clip; layout is otherwise unchanged.
 */
import { useFrame } from "@react-three/fiber";
import { UikitCanvas } from "./UikitCanvas";
import {
  Container,
  Fullscreen,
  Image,
  Text,
  Svg,
  getPreferredColorScheme,
  setPreferredColorScheme,
} from "../uikit-tsl-core/react";
import {
  CirclePlus,
  Eclipse,
  Image as ImageIcon,
  Moon,
  Package,
  Star,
  Sun,
  SunMoon,
  User,
} from "../uikit-tsl-core/kits/lucide/react";
import {
  Button,
  colors,
  defaults,
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../uikit-tsl-core/kits/default/react";
import { create } from "zustand";
import { noEvents, PointerEvents } from "@react-three/xr/dist/events.js";

interface Album {
  name: string;
  artist: string;
  cover: string;
}

const listenNowAlbums: Album[] = [
  {
    name: "React Rendezvous",
    artist: "Ethan Byte",
    cover: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    artist: "Nina Netcode",
    cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    artist: "Lena Logic",
    cover: "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    artist: "Beth Binary",
    cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
];

const madeForYouAlbums: Album[] = [
  {
    name: "Thinking Components",
    artist: "Lena Logic",
    cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    name: "Functional Fury",
    artist: "Beth Binary",
    cover: "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
  },
  {
    name: "React Rendezvous",
    artist: "Ethan Byte",
    cover: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    artist: "Beth Binary",
    cover: "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    artist: "Nina Netcode",
    cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    artist: "Lena Logic",
    cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
];

const playlists = [
  "Recently Added",
  "Recently Played",
  "Top Songs",
  "Top Albums",
  "Top Artists",
  "Logic Discography",
  "Bedtime Beats",
  "Feeling Happy",
  "I miss Y2K Pop",
  "Runtober",
  "Mellow Days",
  "Eminem Essentials",
];

type Playlist = (typeof playlists)[number];

function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  ...props
}: {
  album: Album;
  aspectRatio?: "portrait" | "square";
} & Omit<React.ComponentPropsWithoutRef<typeof Container>, "aspectRatio">) {
  return (
    <Container flexShrink={0} flexDirection="column" gap={12} {...props}>
      <Image
        borderRadius={6}
        src={album.cover}
        width={width}
        height={height}
        objectFit="cover"
        aspectRatio={aspectRatio === "portrait" ? 3 / 4 : 1}
      />
      <Container flexDirection="column" gap={4}>
        <Text fontWeight="medium" fontSize={14} lineHeight="100%">
          {album.name}
        </Text>
        <Text fontSize={12} lineHeight="16px" color={colors.mutedForeground}>
          {album.artist}
        </Text>
      </Container>
    </Container>
  );
}

function Sidebar({
  playlists,
  ...props
}: React.ComponentPropsWithoutRef<typeof Container> & {
  playlists: Playlist[];
}) {
  return (
    <Container flexDirection="column" overflow="scroll" paddingRight={20} paddingBottom={48} {...props}>
      <Container flexShrink={0} flexDirection="column" paddingBottom={16} gap={16}>
        <Container flexDirection="column" paddingX={12} paddingY={8}>
          <Text
            marginBottom={8}
            paddingX={16}
            fontWeight="semi-bold"
            fontSize={18}
            lineHeight="28px"
            letterSpacing={-0.4}
          >
            Discover
          </Text>
          <Container flexDirection="column" gap={4}>
            <Button variant="secondary" justifyContent="flex-start">
              <Package marginRight={8} width={16} height={16} />
              <Text>Models</Text>
            </Button>
            <Button variant="ghost" justifyContent="flex-start">
              <Eclipse marginRight={8} width={16} height={16} />
              <Text>Materials</Text>
            </Button>
            <Button variant="ghost" justifyContent="flex-start">
              <ImageIcon marginRight={8} width={16} height={16} />
              <Text>HDRIS</Text>
            </Button>
          </Container>
        </Container>
        <Container flexDirection="column" paddingX={12} paddingY={8}>
          <Text
            marginBottom={8}
            paddingX={16}
            fontWeight="semi-bold"
            fontSize={18}
            lineHeight="28px"
            letterSpacing={-0.4}
          >
            Collections
          </Text>
          <Container flexDirection="column" gap={4}>
            <Button variant="ghost" justifyContent="flex-start">
              <Star marginRight={8} width={16} height={16} />
              <Text>Favorites</Text>
            </Button>
            <Button variant="ghost" justifyContent="flex-start">
              <Package marginRight={8} width={16} height={16} />
              <Text>Models</Text>
            </Button>
            <Button variant="ghost" justifyContent="flex-start">
              <Eclipse marginRight={8} width={16} height={16} />
              <Text>Materials</Text>
            </Button>
            <Button variant="ghost" justifyContent="flex-start">
              <ImageIcon marginRight={8} width={16} height={16} />
              <Text>HDRIs</Text>
            </Button>
            <Button variant="ghost" justifyContent="flex-start">
              <User marginRight={8} width={16} height={16} />
              <Text>Creators</Text>
            </Button>
          </Container>
        </Container>
        <Container flexDirection="column" paddingY={8}>
          <Text paddingX={28} fontSize={18} lineHeight="28px" fontWeight="semi-bold" letterSpacing={-0.4}>
            Favorites
          </Text>
          <Container paddingX={4} flexDirection="column" gap={4} padding={8}>
            {playlists?.map((playlist, i) => (
              <Button key={`${playlist}-${i}`} variant="ghost" justifyContent="flex-start">
                <Star marginRight={8} width={16} height={16} />
                <Text fontWeight="normal">{playlist}</Text>
              </Button>
            ))}
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

function Menu() {
  const pcs = useMarketMenuStore((state) => state.pcs);
  const cycleColorScheme = useMarketMenuStore((state) => state.cycleColorScheme);
  return (
    <Menubar borderRadius={0} paddingX={8} lg={{ paddingX: 16 }}>
      <MenubarMenu>
        <MenubarTrigger>
          <Svg
            content={`<svg xmlns="http://www.w3.org/2000/svg" width="70" height="50" fill="none" viewBox="0 0 194 50"><path fill="black" d="M17.5 35h15v15h-15V35zm0-17.5h15v15h-15v-15zM0 17.5h15v15H0v-15z"></path><path fill="black" d="M35 0H17.5v15H35v17.5h15V0H35zM77.51 12.546V38h4.425V20.475h.236l7.035 17.45h3.306l7.035-17.413h.236V38h4.425V12.546h-5.643L91.01 30.99h-.299l-7.557-18.444h-5.642zm37.014 25.84c2.996 0 4.785-1.405 5.606-3.009h.149V38h4.325V25.223c0-5.046-4.114-6.563-7.756-6.563-4.014 0-7.097 1.79-8.091 5.27l4.201.597c.448-1.305 1.715-2.424 3.915-2.424 2.088 0 3.232 1.07 3.232 2.946v.075c0 1.292-1.355 1.354-4.723 1.715-3.704.398-7.246 1.504-7.246 5.804 0 3.754 2.746 5.742 6.388 5.742zm1.168-3.307c-1.876 0-3.219-.857-3.219-2.51 0-1.728 1.504-2.449 3.518-2.735 1.181-.161 3.542-.46 4.126-.932v2.25c0 2.125-1.715 3.927-4.425 3.927zM129.128 38h4.499V26.777c0-2.424 1.828-4.14 4.301-4.14.758 0 1.703.137 2.088.262v-4.14a10.817 10.817 0 00-1.616-.123c-2.187 0-4.014 1.243-4.71 3.455h-.199v-3.182h-4.363V38zm13.877 0h4.499v-6.413l1.641-1.753L154.987 38h5.381l-7.83-10.85 7.395-8.24h-5.257l-6.861 7.668h-.311V12.546h-4.499V38zm27.592.373c4.45 0 7.508-2.175 8.303-5.494l-4.201-.472c-.609 1.616-2.1 2.46-4.039 2.46-2.909 0-4.835-1.913-4.873-5.182h13.299v-1.38c0-6.699-4.027-9.645-8.725-9.645-5.468 0-9.036 4.015-9.036 9.906 0 5.991 3.518 9.807 9.272 9.807zm-4.797-11.72c.137-2.437 1.939-4.487 4.623-4.487 2.586 0 4.326 1.889 4.351 4.486H165.8zm26.626-7.744h-3.766v-4.574h-4.499v4.574h-2.71v3.48h2.71v10.615c-.025 3.592 2.585 5.356 5.966 5.257 1.28-.037 2.162-.286 2.647-.447l-.758-3.518a5.616 5.616 0 01-1.318.174c-1.131 0-2.038-.398-2.038-2.212v-9.869h3.766v-3.48z"></path></svg>`}
            width={70}
          />
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Text>File</Text>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Text>Edit</Text>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Text>View</Text>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Text>Account</Text>
        </MenubarTrigger>
      </MenubarMenu>
      <Container flexGrow={1} />
      <MenubarMenu>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.open("https://github.com/pmndrs/uikit/tree/main/examples/market", "_blank")}
        >
          <Text>Source Code</Text>
        </Button>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger onClick={cycleColorScheme}>
          {pcs === "dark" ? <Moon /> : pcs === "system" ? <SunMoon /> : <Sun />}
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}

type PreferredColorScheme = ReturnType<typeof getPreferredColorScheme>;

const useMarketMenuStore = create<{
  pcs: PreferredColorScheme;
  cycleColorScheme: () => void;
}>()((set, get) => ({
  pcs: getPreferredColorScheme(),
  cycleColorScheme: () => {
    const { pcs } = get();
    setPreferredColorScheme(pcs === "light" ? "dark" : pcs === "dark" ? "system" : "light");
    set({ pcs: getPreferredColorScheme() });
  },
}));

export function MarketPage() {
  return (
    <Container height="100%" flexDirection="column" {...defaults}>
      <Menu />
      <Container flexBasis={0} flexGrow={1} borderTopWidth={1} backgroundColor={colors.background} flexDirection="row">
        <Sidebar marginTop={16} playlists={playlists} />
        <Separator orientation="vertical" />
        <Container
          marginTop={16}
          overflow="scroll"
          flexGrow={1}
          flexBasis={0}
          paddingX={16}
          paddingBottom={24}
          paddingTop={8}
          lg={{ paddingX: 32 }}
          flexDirection="column"
        >
          <Tabs defaultValue="music" height="100%" gap={24}>
            <Container flexShrink={0} flexDirection="row" justifyContent="space-between" alignItems="center">
              <TabsList>
                <TabsTrigger value="music">
                  <Text>Models</Text>
                </TabsTrigger>
                <TabsTrigger value="podcasts" disabled>
                  <Text>HDRIS</Text>
                </TabsTrigger>
                <TabsTrigger value="live" disabled>
                  <Text>Materials</Text>
                </TabsTrigger>
              </TabsList>
              <Button marginRight={16}>
                <CirclePlus marginRight={8} height={16} width={16} />
                <Text>Request Model</Text>
              </Button>
            </Container>
            <TabsContent flexShrink={0} flexDirection="column" value="music" borderWidth={0} padding={0}>
              <Container flexDirection="row" alignItems="center" justifyContent="space-between">
                <Container flexDirection="column" gap={4}>
                  <Text fontWeight="semi-bold" letterSpacing={-0.4} fontSize={18} lineHeight="28px">
                    Trending
                  </Text>
                  <Text color={colors.mutedForeground} fontSize={14} lineHeight="20px">
                    Top picks for you. Updated daily.
                  </Text>
                </Container>
              </Container>
              <Separator marginY={16} />
              <Container flexDirection="row" overflow="scroll" gap={16} paddingBottom={16}>
                {listenNowAlbums.map((album) => (
                  <AlbumArtwork key={album.name} album={album} width={250} height={330} aspectRatio="portrait" />
                ))}
              </Container>
              <Container flexDirection="column" marginTop={24} gap={4}>
                <Text fontWeight="semi-bold" letterSpacing={-0.4} fontSize={18} lineHeight="28px">
                  Made By You
                </Text>
                <Text color={colors.mutedForeground} fontSize={14} lineHeight="20px">
                  Your personal models.
                </Text>
              </Container>
              <Separator marginY={16} />
              <Container flexShrink={1} flexDirection="row" overflow="scroll" gap={16} paddingBottom={16}>
                {madeForYouAlbums.map((album) => (
                  <AlbumArtwork key={album.name} album={album} aspectRatio="square" width={150} height={150} />
                ))}
              </Container>
            </TabsContent>
          </Tabs>
        </Container>
      </Container>
    </Container>
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
        top: 0,
        right: 0,
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

export function MarketExample() {
  return (
    <>
      <FrameCounter />
      <UikitCanvas
        flat
        events={noEvents}
        frameloop="demand"
        camera={{ position: [0, 0, 18], fov: 35 }}
        style={{ height: "100dvh", touchAction: "none" }}
        gl={{ localClippingEnabled: true }}
      >
        <PointerEvents />
        <CountFrames />
        <Fullscreen flexDirection="column">
          <MarketPage />
        </Fullscreen>
      </UikitCanvas>
    </>
  );
}
