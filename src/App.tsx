import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { examples } from "./examples-pages/registry";
import type { ExampleEntry } from "./examples-pages/registry";

/**
 * Every `*Example.tsx` in `examples-pages/`, eagerly enumerated but lazily
 * loaded. Using a glob rather than named imports means the router does not have
 * to change as examples are added, and a missing page is a runtime 404 rather
 * than a build failure.
 */
const modules = import.meta.glob("./examples-pages/*Example.tsx");

/** `ttf-react` -> `TtfReactExample.tsx`, matching the file naming convention. */
function moduleKeyFor(slug: string) {
  const pascal = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  return `./examples-pages/${pascal}Example.tsx`;
}

function useExampleComponent(slug: string) {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const loader = modules[moduleKeyFor(slug)];
    if (!loader) {
      setMissing(true);
      setComponent(null);
      return;
    }
    let cancelled = false;
    loader().then((module) => {
      if (cancelled) return;
      const resolved = module as Record<string, unknown>;
      const exported =
        (resolved.default as ComponentType | undefined) ??
        (Object.values(resolved).find(
          (value) => typeof value === "function",
        ) as ComponentType | undefined);
      setComponent(() => exported ?? null);
      setMissing(exported == null);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { Component, missing };
}

function ExamplePage() {
  const { slug = "" } = useParams();
  const entry = examples.find((candidate) => candidate.slug === slug);
  const { Component, missing } = useExampleComponent(slug);

  return (
    <div className="relative h-full w-full bg-neutral-950">
      <Link
        to="/"
        className="absolute left-4 top-4 z-10 rounded-lg border border-white/15 bg-black/60 px-3 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur transition hover:bg-white/10"
      >
        ← All examples
      </Link>

      {Component != null ? (
        <Component />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-8">
          <p className="max-w-md text-center text-sm text-neutral-400">
            {missing
              ? `No page implemented yet for “${entry?.title ?? slug}”.`
              : `Loading ${entry?.title ?? slug}…`}
          </p>
        </div>
      )}
    </div>
  );
}

function ExampleCard({ entry }: { entry: ExampleEntry }) {
  return (
    <Link
      to={`/example/${entry.slug}`}
      className="group flex flex-col gap-2 rounded-xl border border-white/10 bg-white/3 p-5 transition hover:border-white/25 hover:bg-white/7"
    >
      <h2 className="text-base font-semibold text-white">{entry.title}</h2>
      <p className="text-sm leading-relaxed text-neutral-400">
        {entry.description}
      </p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
        {entry.uses.map((pkg) => (
          <span
            key={pkg}
            className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-neutral-400"
          >
            {pkg}
          </span>
        ))}
      </div>
    </Link>
  );
}

function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          uikit-tsl examples
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
          The pmndrs uikit examples, ported to run on Three.js WebGPU via the
          Three.js Shading Language. Panels and MSDF text are rendered by TSL
          node materials rather than the original GLSL shader patches.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {examples.map((entry) => (
          <ExampleCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-full overflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example/:slug" element={<ExamplePage />} />
          <Route
            path="*"
            element={
              <div className="flex h-full items-center justify-center text-sm text-neutral-400">
                Not found ·{" "}
                <Link className="ml-1 underline" to="/">
                  back to examples
                </Link>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
