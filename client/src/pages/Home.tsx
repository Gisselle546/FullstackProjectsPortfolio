import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import devrigUrl from "../assets/hero-art-devrig.svg?url";

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  function Badge({ label }: { label: string }) {
    return (
      <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 dark:text-slate-200">
        {label}
      </span>
    );
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro timeline
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from("[data-hero=eyebrow]", { y: 8, opacity: 0, duration: 0.5 })
        .from(
          "[data-hero=title]",
          { y: 10, opacity: 0, duration: 0.6 },
          "-=0.2"
        )
        .from("[data-hero=sub]", { y: 10, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(
          "[data-hero=art]",
          { y: 10, opacity: 0, duration: 0.4, stagger: 0.08 },
          "-=0.2"
        );

      ScrollTrigger.batch("[data-skill]", {
        start: "top 85%",
        onEnter: (els) =>
          gsap.to(els, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.03,
            ease: "power2.out",
          }),
      });

      // Projects section fade
      ScrollTrigger.create({
        trigger: projectsRef.current,
        start: "top 80%",
        onEnter: () =>
          gsap.to("[data-projects=container]", {
            opacity: 1,
            y: 0,
            duration: 0.6,
          }),
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const skillsGroups: { title: string; items: string[] }[] = [
    {
      title: "DevOps & Cloud",
      items: [
        "AWS (S3, EKS, Lambda)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
        "ArgoCD",
        "Nginx / ALB",
      ],
    },
    {
      title: "Data & ML",
      items: [
        "Python",
        "Airflow",
        "Redshift",
        "Pandas",
        "OpenSearch",
        "RAG pipelines",
      ],
    },
    {
      title: "Full stack development",
      items: [
        "Kafka",
        "RabbitMQ",
        "WebSockets",
        "Node.js",
        "Express",
        "Next.js",
        "React",
        "Django",
        "Nest.js",
        ".NET Core",
      ],
    },
  ];

  return (
    <main ref={heroRef} className="min-h-screen bg-slate-900 text-slate-100">
      <section className="relative isolate overflow-hidden flex">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.20),transparent_60%)]" />
          <svg
            className="absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,white,transparent)]"
            aria-hidden
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0H0V40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-slate-700"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute left-1/2 top-[-8rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <p
              data-hero="eyebrow"
              className="mb-3 text-sm font-semibold tracking-wide text-sky-300"
            >
              FullStack Developer · React · AWS · DevOps
            </p>
            <h1
              data-hero="title"
              className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
            >
              Building fast, accessible products and resilient cloud
              infrastructures.
            </h1>
            <p
              data-hero="sub"
              className="mx-auto mt-4 max-w-2xl text-lg text-slate-300"
            >
              From UIs to production EKS deployments, I turn complex ideas into
              reliable software.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                data-hero="cta"
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-medium text-white ring-1 ring-sky-700/20 transition hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                  <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
                </svg>
              </a>
              <a
                data-hero="cta"
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Download Resume
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7 7-7Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <aside
            data-hero-art
            className="relative mt-12 hidden md:block lg:mt-0 lg:col-span-6 place-self-center select-none"
            aria-hidden="true"
          >
            <div className="pointer-events-none absolute -top-10 -right-8 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-6 -left-10 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl" />
            <img
              src={devrigUrl}
              alt="Abstract dev workstation with floating tech chips"
              className="relative z-10 w-[540px] drop-shadow-[0_28px_88px_rgba(56,189,248,0.25)] transition-transform duration-500 hover:-translate-y-0.5"
            />
          </aside>
        </div>
      </section>
      <section
        ref={skillsRef}
        className="mx-auto max-w-7xl px-6 pb-12 sm:pb-16 lg:pb-20"
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold">Skills & Tooling</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsGroups.map((group) => (
            <div
              key={group.title}
              className="translate-y-3 opacity-0 rounded-2xl border border-white/10 bg-slate-800/60 p-5 ring-1 ring-black/5 backdrop-blur"
              data-skill
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((label) => (
                  <Badge key={label} label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
