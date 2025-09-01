import React, { useEffect } from "react";
import { useStore } from "../context/sites";
import type { Site } from "../types/site";

const Project: React.FC = () => {
  const { state, getSites } = useStore();

  useEffect(() => {
    getSites();
  }, [getSites]);

  if (state.sites.length === 0) {
    return <div>Loading...</div>;
  }

  const handleClick = (data: string) => {
    window.location.href = data;
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2
        className="text-center text-4xl lg:text-5xl font-semibold tracking-tight 
                 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent"
      >
        Showcase
      </h2>

      <ul className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
        {state.sites.map((site: Site) => (
          <li key={site.url} className="h-full">
            <article
              className="group relative h-full overflow-hidden rounded-2xl
                   bg-slate-900/40 backdrop-blur-xl
                   ring-1 ring-white/10 shadow-2xl
                   transition-transform duration-300 hover:-translate-y-1
                   flex flex-col"
            >
              {/* image */}
              {site.images.length > 0 ? (
                <img
                  src={site.images[0]}
                  alt={`${site.name} preview`}
                  className="aspect-[16/9] w-full object-cover rounded-b-none rounded-2xl
                       ring-0"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div
                  className="aspect-[16/9] w-full grid place-items-center
                          bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.10),rgba(2,6,23,0.6))]"
                >
                  Preview coming soon
                </div>
              )}

              {/* content */}
              <div className="flex flex-col gap-3 p-6 lg:p-8 flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-100 capitalize">
                  {site.name}
                </h3>

                {/* Clamp to keep heights uniform across the row */}
                <p className="text-slate-300 line-clamp-3">
                  {site.description}
                </p>

                <div className="mt-auto pt-2">
                  <button
                    onClick={() => handleClick(site.url)}
                    className="inline-flex items-center gap-2 rounded-xl
                         bg-sky-600 px-4 py-2 text-sm font-medium text-white
                         ring-1 ring-sky-700/20 transition hover:bg-sky-500
                         focus:outline-none focus:ring-2 focus:ring-sky-500
                         focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    Experience it
                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M13 5l7 7-7 7v-4H4v-6h9V5z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* subtle cyan glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0
                        group-hover:opacity-100 transition-opacity duration-300
                        [mask-image:radial-gradient(60%_80%_at_80%_10%,black,transparent)]
                        bg-[radial-gradient(60%_80%_at_80%_10%,rgba(56,189,248,0.15),transparent_60%)]"
              />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
