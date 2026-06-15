"use client";

import Link from "next/link";

interface SecondarySidebarProps {
  title: string;
  subItems: string[];
  currentSubItem: string | null;
}

export default function SecondarySidebar({
  title,
  subItems,
  currentSubItem,
}: SecondarySidebarProps) {
  const primary = title.toLowerCase(); // used to build href

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col shadow-sm animate-in slide-in-from-left duration-200">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
            {title}
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">context menu</p>
        </div>
        <Link
          href="/"
          className="text-gray-400 hover:text-orange-500 transition-colors p-1 rounded-full hover:bg-orange-50"
          aria-label="Close secondary sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <nav className="flex-1 py-4">
        <ul className="space-y-3 px-3">
          {subItems.map((subItem) => {
            // Convert "Analytics Hub" to slug "analytics-hub" for URL
            const subSlug = subItem.toLowerCase().replace(/\s+/g, "-");
            const href = `/${primary}/${subSlug}`;
            const isActive = currentSubItem === subSlug;
            return (
              <li key={subItem}>
                <Link
                  href={href}
                  className={`
                    w-full text-left px-4 py-2.5 rounded-lg transition-all duration-150
                    text-gray-600 text-sm font-medium
                    hover:bg-orange-50 hover:text-orange-600
                    ${isActive
                      ? "bg-orange-100 text-orange-700 font-semibold"
                      : ""
                    }
                  `}
                >
                  {subItem}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}