"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl shadow-xl">
        {/* LOGO */}
        <Link href="#inicio" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Image
              src="/letra-j.png"
              alt="Logo Jonathan"
              width={28}
              height={28}
              priority
            />
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-300 hover:text-violet-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <Link
          href="#contato"
          className="hidden md:flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-500 transition"
        >
          Vamos conversar
          <ArrowRight size={18} />
        </Link>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-black/90 p-5 shadow-xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-violet-400 transition"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-500 transition"
            >
              Vamos conversar
              <ArrowRight size={18} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}