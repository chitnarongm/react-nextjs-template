"use client";

import { useAppStore } from "@/stores/useAppStore";
import { Globe, LogOut, Menu, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const { locale, setLocale } = useAppStore();
  const t = useTranslations("Layout");
  const router = useRouter();
  const { data: session } = useSession();

  const handleLanguageChange = () => {
    const newLocale = locale === "en" ? "th" : "en";
    setLocale(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <div
      data-testid="navbar"
      className="navbar bg-base-100 border-b sticky top-0 z-40 px-4"
    >
      <div className="flex-none lg:hidden">
        <label
          htmlFor="main-drawer"
          className="btn btn-square btn-ghost drawer-button"
          data-testid="sidebar-toggle"
        >
          <Menu size={20} />
        </label>
      </div>

      <div className="flex-1">
        <span
          data-testid="app-name"
          className="text-xl font-bold px-2 lg:hidden"
        >
          {t("appName")}
        </span>
      </div>

      <div className="flex-none gap-2">
        <button
          onClick={handleLanguageChange}
          data-testid="language-toggle"
          className="btn btn-ghost btn-sm gap-2"
        >
          <Globe size={18} />
          <span className="uppercase">{locale}</span>
        </button>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar border border-base-200 shadow-sm"
            data-testid="user-menu-toggle"
          >
            <div className="w-10 rounded-full flex items-center justify-center bg-base-200">
              <User size={20} className="mx-auto mt-2" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200"
          >
            {session?.user ? (
              <>
                <li className="menu-title px-4 py-2 border-b border-base-200 mb-1">
                  <span data-testid="user-name" className="font-bold">
                    {session.user.name}
                  </span>
                </li>
                <li>
                  <button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    data-testid="logout-button"
                    className="text-error"
                  >
                    <LogOut size={16} />
                    {t("logout")}
                  </button>
                </li>
              </>
            ) : (
              <li>
                <span className="opacity-50 italic">{t("welcome")}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
