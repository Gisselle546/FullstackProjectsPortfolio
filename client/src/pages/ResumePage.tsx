import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// ✅ Vite-friendly worker URL (bundled locally)
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import Spinner from "../components/Spinner/Spinner";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

// Put resume in /public/resume.pdf
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const ResumePage: React.FC = () => {
  const [numPages, setNumPages] = React.useState<number>(0);
  const [width, setWidth] = React.useState<number>(700);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Auto-fit PDF width to container
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      // tweak max width cap to taste
      setWidth(Math.min(920, el.clientWidth));
    });
    ro.observe(el);
    // set initial width
    setWidth(Math.min(920, el.clientWidth));
    return () => ro.disconnect();
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-100">
          My Résumé
        </h1>
        <a
          href={resumeUrl}
          download="resume.pdf"
          className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-medium text-white
                     ring-1 ring-sky-700/20 transition hover:bg-sky-500 focus:outline-none
                     focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Download PDF
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7 7-7Z"
            />
          </svg>
        </a>
      </div>

      <div
        ref={containerRef}
        className="mt-6 rounded-2xl bg-slate-900/40 p-4 ring-1 ring-white/10 backdrop-blur-xl overflow-auto"
      >
        <Document
          file={resumeUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <div className="p-8 text-slate-300">
              <Spinner size="lg" />
            </div>
          }
          error={
            <div className="p-8 text-rose-300">Couldn’t load the PDF.</div>
          }
          onLoadError={(err) => console.error("PDF load error:", err)}
        >
          {Array.from({ length: numPages }, (_, i) => (
            <Page
              key={`page_${i + 1}`}
              pageNumber={i + 1}
              width={width - 32} // subtract padding so it fits nicely
              renderTextLayer
              renderAnnotationLayer
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default ResumePage;
