import Link from "next/link";

interface TagBadgeProps {
  label: string;
  type: "tag" | "geography" | "useCase";
}

export default function TagBadge({ label, type }: TagBadgeProps) {
  const href =
    type === "tag"
      ? `/tags/${encodeURIComponent(label)}`
      : type === "geography"
      ? `/geography/${encodeURIComponent(label)}`
      : `/use-case/${encodeURIComponent(label)}`;

  const colors =
    type === "tag"
      ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
      : type === "geography"
      ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
      : "bg-amber-50 text-amber-700 hover:bg-amber-100";

  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-3 py-0.5 text-xs font-medium transition-colors ${colors}`}
    >
      {label}
    </Link>
  );
}
