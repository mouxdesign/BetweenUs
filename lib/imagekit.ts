export function getImageKitUrl(
  path: string,
  options?: { width?: number; height?: number; quality?: number }
): string {
  // Pass through full URLs and local paths unchanged
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("/")) return path;

  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ?? "";
  const { width, height, quality = 80 } = options ?? {};
  const transforms: string[] = [`q-${quality}`, "f-auto"];
  if (width) transforms.push(`w-${width}`);
  if (height) transforms.push(`h-${height}`, "c-maintain_ratio");
  return `${endpoint}/tr:${transforms.join(",")}/${path}`;
}
