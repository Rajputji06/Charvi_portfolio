import { documents } from "../../data";

export const metadata = {
  title: "Documents — Charvi Batra",
  description: "Download legal documents, CV, and published articles.",
};

export default function DocumentsPage() {
  return (
    <div className="page-reveal pt-28 md:pt-36 pb-20 md:pb-28 bg-cream">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brown-900 mb-4">
            Documents
          </h1>
          <p className="font-body text-base text-brown-500 max-w-xl mx-auto leading-relaxed">
            Download my CV, published articles, and case summaries. All
            documents are available in PDF format.
          </p>
          <div className="divider-bronze max-w-[60px] mx-auto mt-8" />
        </div>

        {/* Info Banner */}
        <div className="mb-10 p-5 bg-warm border border-bronze/20 rounded-lg">
          <p className="font-sans text-sm text-brown-600">
            <strong className="text-brown-800">Setup note:</strong> Place your PDF
            files in the{" "}
            <code className="bg-brown-200/50 px-1.5 py-0.5 rounded text-xs font-mono">
              /public/docs/
            </code>{" "}
            folder and update the file paths in{" "}
            <code className="bg-brown-200/50 px-1.5 py-0.5 rounded text-xs font-mono">
              data.js
            </code>{" "}
            to enable downloads.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {documents.map((doc, i) => (
            <a
              key={i}
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover-lift bg-warm border border-brown-200/50 rounded-lg p-7 flex gap-5 items-start"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-brown-200/60 flex items-center justify-center shrink-0 group-hover:bg-bronze/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-bronze" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {doc.icon === "cv" && (
                    <>
                      <path d="M16 4H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z" />
                      <path d="M12 11a2 2 0 100-4 2 2 0 000 4zM8 17c0-2 1.8-3 4-3s4 1 4 3" />
                    </>
                  )}
                  {doc.icon === "article" && (
                    <path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h4" />
                  )}
                  {doc.icon === "case" && (
                    <>
                      <path d="M12 3v18M3 7l9-4 9 4M5 7a2 2 0 002 2M19 7a2 2 0 01-2 2" />
                      <path d="M3 12l2-5M21 12l-2-5M3 12a3 3 0 003 3M21 12a3 3 0 01-3 3" />
                    </>
                  )}
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-semibold text-brown-900 group-hover:text-bronze transition-colors">
                  {doc.title}
                </h3>
                <p className="font-sans text-sm text-brown-500 mt-2 leading-relaxed">
                  {doc.description}
                </p>
                <div className="flex items-center gap-2 mt-4 font-sans text-[11px] tracking-[0.15em] uppercase text-bronze">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                  Download PDF
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
