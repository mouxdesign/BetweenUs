"use client";

import { useSearchParams } from "next/navigation";
import SearchBox from "./SearchBox";

type NavSearchProps = React.ComponentProps<typeof SearchBox>;

// Wraps SearchBox and seeds it with the current ?q= value so the nav search
// field reflects the active query (e.g. on the /search page). The `key` forces
// a re-init when the query changes. Must be rendered inside a <Suspense>
// boundary because it reads useSearchParams().
export default function NavSearch(props: NavSearchProps) {
  const q = useSearchParams().get("q") ?? "";
  return <SearchBox key={q} {...props} defaultValue={q} />;
}
