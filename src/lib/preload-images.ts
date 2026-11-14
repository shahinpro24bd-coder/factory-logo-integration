// Warms the browser cache with every bundled site image right after the first page loads,
// so later pages and sliders show their pictures instantly.
const pointers = import.meta.glob("../assets/*.{webp,jpg,jpeg,png}.asset.json", { eager: true, import: "default" }) as Record<string, { url: string }>;
const all = Object.values(pointers).map((p) => p.url);

export function preloadSiteImages(extra: string[] = []) {
  const urls = [...all, ...extra];
  const run = () => urls.forEach((u) => { const i = new Image(); i.decoding = "async"; i.src = u; });
  if ("requestIdleCallback" in window) (window as any).requestIdleCallback(run, { timeout: 800 });
  else setTimeout(run, 200);
}
