"use client";

import Image from "next/image";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jonathan-rosa/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/JonathanSilva014",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/jonathan_rosa014/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030307] px-4 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">

        {/* ÍCONES */}
        <div className="flex items-center gap-6">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className="object-contain invert opacity-70 group-hover:opacity-100 transition"
              />
            </a>
          ))}
        </div>

        {/* TEXTO */}
        <p className="text-sm text-zinc-500 text-center">
          © {new Date().getFullYear()} Jonathan Silva. All rights reserved.
        </p>
      </div>
    </footer>
  );
}