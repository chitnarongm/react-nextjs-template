"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, ShoppingBag, Star, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col min-h-screen">
      {}
      <section className="hero min-h-[70vh] bg-base-100 rounded-3xl overflow-hidden shadow-2xl border border-base-200 mt-4 relative">
        <div className="hero-content text-center z-10">
          <div className="max-w-3xl">
            <div className="badge badge-primary badge-outline mb-6 gap-2 py-3 px-4 animate-bounce">
              <Star size={14} className="fill-primary" />
              <span className="text-xs font-bold uppercase tracking-widest leading-none">
                {t("newCollectionBadge")}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl opacity-70 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="gap-2 px-10 shadow-lg">
                  {t("exploreCta")}
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="px-10">
                {t("viewCollections")}
              </Button>
            </div>
          </div>
        </div>

        {}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
      </section>

      {}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-primary/30 transition-all group">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h2 className="card-title text-2xl font-bold">
                {t("features.shippingTitle")}
              </h2>
              <p className="opacity-60">{t("features.shippingDesc")}</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-primary/30 transition-all group">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                <ShoppingBag size={32} />
              </div>
              <h2 className="card-title text-2xl font-bold">
                {t("features.qualityTitle")}
              </h2>
              <p className="opacity-60">{t("features.qualityDesc")}</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-primary/30 transition-all group">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h2 className="card-title text-2xl font-bold">
                {t("features.securityTitle")}
              </h2>
              <p className="opacity-60">{t("features.securityDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="pb-20">
        <div className="stats stats-vertical lg:stats-horizontal shadow-xl w-full bg-base-100 border border-base-200 rounded-3xl">
          <div className="stat place-items-center">
            <div className="stat-title">{t("stats.customersTitle")}</div>
            <div className="stat-value text-primary">50K+</div>
            <div className="stat-desc">{t("stats.customersDesc")}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">{t("stats.itemsTitle")}</div>
            <div className="stat-value text-secondary">2,500+</div>
            <div className="stat-desc text-secondary">
              {t("stats.itemsDesc")}
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">{t("stats.storesTitle")}</div>
            <div className="stat-value">120</div>
            <div className="stat-desc">{t("stats.storesDesc")}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
