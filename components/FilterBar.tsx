"use client";

import { useRouter, usePathname } from "next/navigation";

interface FilterBarProps {
  geographies: string[];
  useCases: string[];
  active: { geography?: string; useCase?: string };
}

export default function FilterBar({ geographies, useCases, active }: FilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();

  function setFilter(key: string, value: string) {
    const params = new URLSearchParams();
    if (key !== "geography" && active.geography) params.set("geography", active.geography);
    if (key !== "useCase" && active.useCase) params.set("useCase", active.useCase);
    if (value) params.set(key, value);
    router.push(`${pathname}?${params.toString()}`);
  }

  function clearFilters() {
    router.push(pathname);
  }

  const hasActive = active.geography || active.useCase;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        value={active.useCase ?? ""}
        onChange={(e) => setFilter("useCase", e.target.value)}
        className="rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <option value="">All topics</option>
        {useCases.map((uc) => (
          <option key={uc} value={uc}>{uc}</option>
        ))}
      </select>
      <select
        value={active.geography ?? ""}
        onChange={(e) => setFilter("geography", e.target.value)}
        className="rounded border border-gray-200 px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <option value="">All locations</option>
        {geographies.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
      {hasActive && (
        <button
          onClick={clearFilters}
          className="text-sm text-gray-400 hover:text-gray-700 transition-colors underline"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
