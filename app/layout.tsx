import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrimarySidebar from "./components/PrimarySidebar";
import SecondarySidebarWrapper from "./components/SecondarySidebarWrapper";
import { PRIMARY_ITEMS, SECONDARY_ITEMS_MAP } from "./lib/navigation";
import { UserDropdown } from "../components/user-dropdown"; // or correct relative path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Platinum RX Enterprise Suite",
  description: "Shared layout navigation for Platinum RX Enterprise Suite",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col bg-white">
          <header className="flex items-center justify-between h-14 px-6 border-b border-gray-200 bg-white shadow-sm shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-orange-600">Platinum RX</span>
              <span className="text-xs text-gray-400 hidden sm:inline">Enterprise Suite</span>
            </div>
            <UserDropdown />
          </header>
          <div className="flex flex-1 overflow-hidden">
            <PrimarySidebar items={PRIMARY_ITEMS} />
            <SecondarySidebarWrapper itemsMap={SECONDARY_ITEMS_MAP} />
            <main className="flex-1 overflow-y-auto text-gray-800">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}