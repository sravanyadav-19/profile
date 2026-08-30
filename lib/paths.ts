// Prefixes an asset path with the GitHub Pages subpath in production.
// Use this for plain <img src> tags (next/image handles it automatically).
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
