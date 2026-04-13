import React, { useEffect } from "react";
import { useStore } from "../context/sites";
import type { Site } from "../types/site";
import Spinner from "../components/Spinner/Spinner";

const Project: React.FC = () => {
  const { state, getSites } = useStore();

  useEffect(() => {
    getSites();
  }, [getSites]);

  if (state.sites.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  const handleClick = (data: string) => {
    window.location.href = data;
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-center text-4xl lg:text-5xl font-bold tracking-tight text-white">
        Showcase
      </h2>

      <ul className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
        {state.sites.map((site: Site) => (
          <li key={site.url} className="h-full">
            <article
              className="group relative h-full overflow-hidden rounded-xl
                   bg-slate-900/70 border border-slate-800
                   shadow-lg
                   transition-transform duration-300 hover:-translate-y-1
                   flex flex-col"
            >
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
                          bg-slate-800 text-slate-500"
                >
                  Preview coming soon
                </div>
              )}

              <div className="flex flex-col justify-between gap-6 p-6 lg:p-8 h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-100 capitalize">
                  {site.name}
                </h3>

                <p className="text-slate-300 line-clamp-3">
                  {site.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:justify-around gap-3 sm:gap-0 sm:space-x-3">
                  <button
                    onClick={() => handleClick(site.url)}
                    className="inline-flex items-center gap-2 rounded-lg
                         bg-indigo-600 px-4 py-2 text-sm font-semibold text-white
                         transition hover:bg-indigo-500
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-indigo-500"
                  >
                    Experience it
                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M13 5l7 7-7 7v-4H4v-6h9V5z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleClick(site.githuburl)}
                    className="inline-flex items-center gap-2 rounded-lg
                         bg-indigo-600 px-4 py-2 text-sm font-semibold text-white
                         transition hover:bg-indigo-500
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-indigo-500"
                  >
                    View on GitHub
                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M13 5l7 7-7 7v-4H4v-6h9V5z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-0 opacity-0
                        group-hover:opacity-100 transition-opacity duration-300
                        [mask-image:radial-gradient(60%_80%_at_80%_10%,black,transparent)]
                        bg-[radial-gradient(60%_80%_at_80%_10%,rgba(99,102,241,0.12),transparent_60%)]"
              />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
