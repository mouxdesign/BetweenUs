const IK_ORIGIN = "https://ik.imagekit.io/betweenus";

export function getImageKitUrl(
  path: string,
  options?: { width?: number; height?: number; quality?: number }
): string {
  const { width, height, quality = 80 } = options ?? {};
  const transforms: string[] = [`q-${quality}`, "f-auto"];
  if (width) transforms.push(`w-${width}`);
  if (height) transforms.push(`h-${height}`, "fo-auto", "c-maintain_ratio");

  const trStr = `tr:${transforms.join(",")}`;

  // Full ImageKit URL — inject transformation segment after the origin
  if (path.startsWith(IK_ORIGIN)) {
    const imagePath = path.slice(IK_ORIGIN.length); // e.g. /Brenda/photo.jpeg
    return `${IK_ORIGIN}/${trStr}${imagePath}`;
  }

  // Local paths or other full URLs — pass through unchanged
  if (path.startsWith("/") || path.startsWith("http")) return path;

  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ?? "";
  return `${endpoint}/${trStr}/${path}`;
}
