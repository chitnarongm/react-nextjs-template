"use client";

import { LoginForm } from "@/features/authentication/components/LoginForm";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("Login");

  return (
    <div className="hero min-h-screen bg-base-200 py-12 px-4">
      <div className="hero-content flex-col lg:flex-row gap-16 lg:gap-32 w-full max-w-6xl">
        <div className="text-center lg:text-left">
          <h1
            data-testid="login-page-title"
            className="text-5xl lg:text-7xl font-black tracking-tight mb-6"
          >
            {t("hintTitle")}
          </h1>
          <p
            data-testid="login-page-subtitle"
            className="text-lg lg:text-xl opacity-70 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            <span data-testid="login-page-hint">{t("hintTry")}</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <div className="badge badge-lg badge-primary py-4 px-6 font-bold uppercase tracking-widest text-xs">
              Professional
            </div>
            <div className="badge badge-lg badge-secondary badge-outline py-4 px-6 font-bold uppercase tracking-widest text-xs">
              Secure
            </div>
            <div className="badge badge-lg badge-accent badge-outline py-4 px-6 font-bold uppercase tracking-widest text-xs">
              Global
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
