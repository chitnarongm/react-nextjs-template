"use client";

import { Button } from "@/components/ui/Button";
import { AlertCircle, Lock, User } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const t = useTranslations("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError(t("invalidCredentials"));
      setLoading(false);
    } else {
      router.push("/products");
      router.refresh();
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-md shadow-2xl border border-base-200">
      <form
        data-testid="login-form"
        onSubmit={handleSubmit}
        className="card-body p-8 lg:p-10"
      >
        <h2 className="card-title text-3xl font-black mb-6 justify-center uppercase tracking-tight">
          {t("title")}
        </h2>

        {error && (
          <div
            data-testid="login-error"
            className="alert alert-error mb-6 py-3 shadow-md"
          >
            <AlertCircle size={20} />
            <span className="text-sm font-medium">{error}</span>
          </div>
        )}

        <div className="form-control">
          <label className="label" htmlFor="username">
            <span className="label-text font-bold text-base uppercase tracking-wide opacity-70">
              {t("username")}
            </span>
          </label>
          <div className="relative">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30"
              size={18}
            />
            <input
              data-testid="username-input"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input input-bordered w-full pl-12 focus:input-primary"
              placeholder="Enter username"
              required
            />
          </div>
        </div>

        <div className="form-control mt-4">
          <label className="label" htmlFor="password">
            <span className="label-text font-bold text-base uppercase tracking-wide opacity-70">
              {t("password")}
            </span>
          </label>
          <div className="relative">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30"
              size={18}
            />
            <input
              data-testid="password-input"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full pl-12 focus:input-primary"
              placeholder="Enter password"
              required
            />
          </div>
        </div>

        <div className="form-control mt-10">
          <Button
            data-testid="login-submit-button"
            type="submit"
            disabled={loading}
            className="btn-primary h-14 text-lg font-bold shadow-lg"
          >
            {loading ? t("signingIn") : t("signIn")}
          </Button>
        </div>

        <div className="divider mt-10 opacity-30 uppercase text-xs font-bold tracking-widest">
          Demo Access
        </div>
        <div className="bg-base-200 rounded-xl p-4 flex justify-center gap-6 text-sm">
          <div className="flex flex-col items-center">
            <span className="opacity-40 uppercase text-[10px] font-bold">
              User
            </span>
            <span className="font-mono font-bold">admin</span>
          </div>
          <div className="w-[1px] bg-base-300"></div>
          <div className="flex flex-col items-center">
            <span className="opacity-40 uppercase text-[10px] font-bold">
              Pass
            </span>
            <span className="font-mono font-bold">password</span>
          </div>
        </div>
      </form>
    </div>
  );
};
