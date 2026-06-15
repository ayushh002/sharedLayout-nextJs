"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface PrimaryItem {
  id: string;
  label: string;
}

interface PrimarySidebarProps {
  items: PrimaryItem[];
}

export default function PrimarySidebar({ items }: PrimarySidebarProps) {
  const pathname = usePathname();
  // Extract the first segment of the path, e.g., "/dashboard/inbox" -> "dashboard"
  const currentPrimary = pathname.split("/")[1] || null;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
      <div className="p-5 border-b border-gray-100">
        <h1 className="text-xl font-bold text-orange-600">Platinum RX</h1>
        <p className="text-xs text-gray-500 mt-1">Enterprise Suite</p>
      </div>
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-3">
          {items.map((item) => {
            const isActive = currentPrimary === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={`/${item.id}`}
                  className={`
                    w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200
                    flex items-center gap-3 text-gray-700 font-medium
                    hover:bg-orange-50 hover:text-orange-600
                    ${isActive
                      ? "bg-orange-50 text-orange-600 border-l-4 border-orange-500"
                      : "border-l-4 border-transparent"
                    }
                  `}
                >
                  <span className="text-lg">
                    {item.id === "dashboard" && "📊"}
                    {item.id === "messages" && "✉️"}
                    {item.id === "analytics" && "📈"}
                    {item.id === "tasks" && "✅"}
                    {item.id === "settings" && "⚙️"}
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-100 text-xs text-gray-400">
        v1.0 • Platinum RX
      </div>
    </aside>
  );
}