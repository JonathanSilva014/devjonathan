"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const COOKIE_NAME = "cookie-consent";
const ONE_HOUR = 60 * 60 * 1000; // 1h em ms

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_NAME);

    if (!stored) {
      setShowBanner(true);
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      const now = Date.now();

      // verifica se expirou (1h)
      if (now - parsed.timestamp > ONE_HOUR) {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem(
      COOKIE_NAME,
      JSON.stringify({
        status: "accepted",
        timestamp: Date.now(),
      })
    );
    setShowBanner(false);
  }

  function rejectCookies() {
    localStorage.setItem(
      COOKIE_NAME,
      JSON.stringify({
        status: "rejected",
        timestamp: Date.now(),
      })
    );
    setShowBanner(false);
  }

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-4xl rounded-2xl border border-white/10 bg-black/90 p-5 text-white shadow-2xl backdrop-blur-xl md:flex md:items-center md:justify-between md:gap-6">
      <button
        onClick={rejectCookies}
        className="absolute right-4 top-4 text-zinc-400 transition hover:text-white"
        aria-label="Fechar aviso de cookies"
      >
        <X size={18} />
      </button>

      <div className="pr-8">
        <h3 className="text-lg font-semibold">Siga as Políticas de Cookies</h3>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          Jonathan Silva esta utiliza cookies para melhorar sua experiência, analisar
          acessos e oferecer conteúdos mais relevantes. Você pode aceitar ou
          recusar.
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0">
        <button
          onClick={rejectCookies}
          className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/10 hover:text-white"
        >
          Recusar
        </button>

        <button
          onClick={acceptCookies}
          className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          Aceitar cookies
        </button>
      </div>
    </div>
  );
}