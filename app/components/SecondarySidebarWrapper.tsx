"use client";

import { usePathname } from "next/navigation";
import SecondarySidebar from "./SecondarySidebar";

interface SecondarySidebarWrapperProps {
  itemsMap: Record<string, string[]>;
}

export default function SecondarySidebarWrapper({ itemsMap }: SecondarySidebarWrapperProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const primary = segments[0] || null;
  const sub = segments[1] || null;

  // Only show secondary sidebar if a primary exists (i.e., not on homepage)
  if (!primary) return null;

  const subItems = itemsMap[primary] || [];

  return (
    <SecondarySidebar
      title={primary.toUpperCase()}
      subItems={subItems}
      currentSubItem={sub}
    />
  );
}