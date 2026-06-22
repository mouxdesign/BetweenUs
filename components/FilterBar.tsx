"use client";

import { useRouter } from "next/navigation";
import { slugify } from "@/lib/slug";

interface FilterBarProps {
  geographies: string[];
  useCases: string[];
  active: { geography?: string; useCase?: string };
}

// Each dropdown navigates to a canonical, path-based listing page
// (/use-case/<topic>, /geography/<location>) — never a query string — so there
// is a single indexable URL per filter. "All" returns to /stories.
export default function FilterBar({ geographies, useCases, active }: FilterBarProps) {
  const router = useRouter();

  function goToUseCase(value: string) {
    router.push(value ? `/stories/use-case/${slugify(value)}` : "/stories");
  }

  function goToGeography(value: string) {
    router.push(value ? `/stories/geography/${slugify(value)}` : "/stories");
  }

  const hasActive = active.geography || active.useCase;

  const selectClass =
    "appearance-none border border-[#1A1A18] bg-transparent text-xs uppercase tracking-[0.1em] text-[#1A1A18] pl-4 pr-10 py-2 outline-none cursor-pointer";

  const chevron = (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#1A1A18]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative">
        <select
          value={active.useCase ?? ""}
          onChange={(e) => goToUseCase(e.target.value)}
          className={selectClass}
        >
          <option value="">All topics</option>
          {useCases.map((uc) => (
            <option key={uc} value={uc}>{uc}</option>
          ))}
        </select>
        {chevron}
      </div>
      <div className="relative">
        <select
          value={active.geography ?? ""}
          onChange={(e) => goToGeography(e.target.value)}
          className={selectClass}
        >
          <option value="">All locations</option>
          {geographies.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        {chevron}
      </div>
      {hasActive && (
        <button
          onClick={() => router.push("/stories")}
          className="text-xs uppercase tracking-[0.1em] text-[#888884] hover:text-[#1A1A18] transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
}
