"use client";

import Image from "next/image";

const contacts = [
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

export function Contact() {
  return (
    <section
      id="contato"
      className="px-4 py-24 text-white bg-[#030307] scroll-mt-32"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl font-bold md:text-4xl">
          Let’s connect
        </h2>

        <p className="mt-4 text-zinc-400">
          Feel free to reach out for collaborations, projects or opportunities.
        </p>

        {/* LINKS */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {contacts.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-500/40 hover:bg-white/5"
            >
              <div className="relative h-10 w-10 mb-3">
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  className="object-contain invert"
                />
              </div>

              <span className="text-sm text-zinc-300 group-hover:text-violet-400">
                {item.name}
              </span>
            </a>
          ))}
        </div>

        {/* WHATSAPP */}
        <div className="mt-12">
          <a
            href="https://wa.me/351910125200"
            target="_blank"
            className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-500"
          >
            💬 Contact me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}