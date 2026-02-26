"use client";

import { cn } from "@/lib/utils";
import { useAppStore } from "@/stores/useAppStore";
import { Settings, ShoppingBag } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Navbar } from "./Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { sidebarOpen } = useAppStore();
  const t = useTranslations("Layout");

  return (
    <div className="flex flex-col h-screen bg-base-200 overflow-hidden">
      {}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {}
        <aside
          data-testid="sidebar"
          className={cn(
            "bg-base-100 border-r transition-all duration-300 shadow-sm z-40",
            sidebarOpen ? "w-64" : "w-0 opacity-0 overflow-hidden",
          )}
        >
          <div className="p-4 h-full flex flex-col">
            <ul className="menu bg-base-100 w-full rounded-box gap-2">
              <li>
                <Link href="/products" className="font-medium">
                  <ShoppingBag size={18} />
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <a href="#" className="font-medium">
                  <Settings size={18} />
                  {t("nav.settings")}
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {}
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto p-4 md:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
