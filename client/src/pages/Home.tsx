import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

/* ─── rotating words in the hero ─── */
const ROLES = [
  "Full-Stack Engineer",
  "Cloud Architect",
  "DevOps Engineer",
  "AI Engineer",
];

const Home: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    const ctx = gsap.context(() => {
      /* ── Hero entrance ── */
      const intro = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      // Name slides up with a clip-path reveal
      intro
        .fromTo(
          "[data-anim=name]",
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 1 },
        )
        .fromTo(
          "[data-anim=line]",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power2.inOut" },
          "-=0.4",
        )
        .fromTo(
          "[data-anim=headline]",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.3",
        )
        .fromTo(
          "[data-anim=sub]",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.35",
        )
        .fromTo(
          "[data-anim=cta]",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.5 },
          "-=0.25",
        )
        .fromTo(
          "[data-anim=social]",
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.4 },
          "-=0.2",
        );

      /* ── Rotating role text ── */
      let roleIdx = 0;
      let isAnimating = false;

      const cycleRole = () => {
        const el = roleRef.current;
        if (!el || isAnimating) return;
        isAnimating = true;

        gsap.killTweensOf(el);
        gsap.to(el, {
          y: -10,
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
          onComplete: () => {
            roleIdx = (roleIdx + 1) % ROLES.length;
            el.textContent = ROLES[roleIdx];
            gsap.fromTo(
              el,
              { y: 10, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.35,
                ease: "power2.out",
                onComplete: () => {
                  isAnimating = false;
                },
              },
            );
          },
        });
      };

      interval = setInterval(cycleRole, 3000);

      /* ── About section scroll reveal ── */
      gsap.fromTo(
        "[data-anim=about-text]",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-anim=about-text]",
            start: "top 85%",
          },
        },
      );

      /* ── Skill cards stagger on scroll ── */
      ScrollTrigger.batch("[data-skill]", {
        start: "top 88%",
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: 50, opacity: 0, scale: 0.96 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.4)",
            },
          ),
      });

      /* ── Bottom CTA parallax-style float ── */
      gsap.fromTo(
        "[data-anim=bottom-cta]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-anim=bottom-cta]",
            start: "top 90%",
          },
        },
      );
    }, pageRef);

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  const skillsGroups = [
    {
      title: "DevOps & Cloud",
      items: [
        "AWS (S3 · EKS · Lambda · Bedrock)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
        "ArgoCD",
        "Nginx / ALB",
      ],
    },
    {
      title: "AI & Data",
      items: [
        "Python",
        "FastAPI",
        "LangChain / LangGraph",
        "MCP",
        "RAG Pipelines",
        "Agentic AI",
        "OpenSearch",
        "Airflow",
        "Redshift",
      ],
    },
    {
      title: "Full-Stack",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "NestJS",
        ".NET Core",
        "Django",
        "Kafka",
        "RabbitMQ",
        "WebSockets",
      ],
    },
  ];

  return (
    <main ref={pageRef} className="min-h-screen bg-slate-950 text-slate-200">
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(99,102,241,0.18),transparent)]" />
          <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        </div>

        <div className="mx-auto max-w-4xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
          <h1
            data-anim="name"
            className="font-[family-name:var(--font-sans)] text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ clipPath: "inset(100% 0 0 0)" }}
          >
            Gisselle Rodriguez
          </h1>

          <div
            data-anim="line"
            className="mt-4 h-px w-24 origin-left bg-indigo-500"
            style={{ transform: "scaleX(0)" }}
          />

          <p
            data-anim="headline"
            className="mt-6 text-lg text-slate-400 sm:text-xl lg:text-2xl"
            style={{ opacity: 0 }}
          >
            <span
              ref={roleRef}
              className="inline-block font-[family-name:var(--font-mono)] font-bold text-indigo-400"
            >
              {ROLES[0]}
            </span>{" "}
            who turns complex systems into polished, production-ready products.
          </p>

          <p
            data-anim="sub"
            className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base lg:text-lg"
            style={{ opacity: 0 }}
          >
            Designing and delivering cloud-native and AI-powered software
            systems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              data-anim="cta"
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              style={{ opacity: 0 }}
            >
              View Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              data-anim="cta"
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-slate-300 ring-1 ring-slate-700 transition hover:bg-slate-800/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
              style={{ opacity: 0 }}
            >
              Resume
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              data-anim="social"
              href="https://github.com/Gisselle546"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-white"
              style={{ opacity: 0 }}
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
            </a>
            <a
              data-anim="social"
              href="https://linkedin.com/in/gissellerodriguez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-white"
              style={{ opacity: 0 }}
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="relative border-t border-slate-800/60">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <p
            data-anim="about-text"
            className="text-lg leading-relaxed text-slate-400 sm:text-xl"
          >
            With experience spanning{" "}
            <span className="text-slate-200">React</span>,{" "}
            <span className="text-slate-200">AWS</span>,{" "}
            <span className="text-slate-200">Kubernetes</span>, and{" "}
            <span className="text-slate-200">AI/ML pipelines</span>, I work
            across the entire stack from crafting responsive interfaces,
            designing resilient cloud architectures, to AI systems design. I
            care about clean abstractions, developer experience, and shipping
            things that actually work at scale.
          </p>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="relative border-t border-slate-800/60">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <h2 className="mb-14 font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-slate-500">
            Technical Toolkit
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {skillsGroups.map((group) => (
              <div key={group.title} data-skill style={{ opacity: 0 }}>
                <h3 className="mb-5 font-[family-name:var(--font-mono)] text-xs md:text-sm font-bold uppercase tracking-widest text-indigo-400">
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm md:text-md text-slate-400"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800/60">
        <div
          data-anim="bottom-cta"
          className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28"
          style={{ opacity: 0 }}
        >
          <h2 className="font-[family-name:var(--font-sans)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Interested in working together?
          </h2>
          <p className="mt-4 text-slate-500">
            I'm open to full-time roles, contract work, and interesting
            collaborations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Get in Touch
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-slate-300 ring-1 ring-slate-700 transition hover:bg-slate-800/60 hover:text-white"
            >
              See My Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
