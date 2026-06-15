import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrimarySidebar from "./components/PrimarySidebar";
import SecondarySidebarWrapper from "./components/SecondarySidebarWrapper";
import { PRIMARY_ITEMS, SECONDARY_ITEMS_MAP } from "./lib/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Platinum RX Dashboard",
  description: "SPA with routing and hover highlights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen w-full overflow-hidden bg-white">
          <PrimarySidebar items={PRIMARY_ITEMS} />
          <SecondarySidebarWrapper itemsMap={SECONDARY_ITEMS_MAP} />
          <main className="flex-1 overflow-y-auto text-gray-800">{children}</main>
        </div>
      </body>
    </html>
  );
}