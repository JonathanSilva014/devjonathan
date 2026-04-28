import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Download } from "lucide-react";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";

const techs = [
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030307] px-4 pt-32 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(124,58,237,0.28),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.16),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        {/* INÍCIO */}
        <div
          id="inicio"
          className="grid min-h-[720px] scroll-mt-32 items-center gap-12 lg:grid-cols-2"
        >
          {/* LEFT */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <Code2 size={18} className="text-violet-400" />
              Developer Web
            </div>

            <h1 className="text-5xl font-bold leading-tight md:text-3xl">
              Front-end developer focused on Next.js, creating modern interfaces
              with a coding vibe,{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                always seeking evolution and new challenges.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-400">
              Sou Jonathan Silva, desenvolvedor focado em criar aplicações
              modernas, performáticas e com experiência profissional.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#projetos"
                className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-7 py-4 font-semibold text-white transition hover:bg-violet-500"
              >
                Ver projetos
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/curriculo.pdf"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-glow"
              >
                Currículo
                <Download size={20} />
              </Link>
            </div>
          </div>

          {/* RIGHT - IMAGEM MANTIDA */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-violet-600/20 blur-3xl md:h-96 md:w-96" />

            <div className="relative h-48 w-40 overflow-hidden rounded-full border-4 border-violet-500/40 shadow-2xl md:h-72 md:w-72 lg:h-80 lg:w-60">
              <Image
                src="/jonny.jpg"
                alt="Jonathan Silva"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* SOBRE */}
        <div
          id="sobre"
          className="mx-auto max-w-3xl scroll-mt-32 py-24 text-center"
        >
          <span className="text-sm font-semibold text-violet-400">
            About me
          </span>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Front-end Developer focused on real solutions
          </h2>

          <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
            I have strong expertise in Front-end development with a focus on{" "}
            <span className="font-semibold text-violet-400">Next.js</span>,
            building modern, responsive, and high-performance interfaces. In
            addition, I have experience integrating APIs such as{" "}
            <span className="font-semibold text-violet-400">REST</span> and{" "}
            <span className="font-semibold text-violet-400">GraphQL</span>,
            ensuring efficient communication between systems and contributing to
            scalable and well-structured applications.
          </p>
        </div>

        {/* SKILLS */}
        <div id="skills" className="scroll-mt-32 pb-24">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <p className="mb-6 text-center text-sm text-zinc-300">
              Technologies I use daily
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="group rounded-xl border border-white/10 p-4 text-center text-sm text-zinc-300 transition hover:border-violet-500/40 hover:bg-white/5"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="relative h-10 w-10 transition group-hover:scale-110">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}