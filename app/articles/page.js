import Link from "next/link";
import { publications } from "../../data";

export const metadata = {
  title: "Articles — Charvi Batra",
  description: "Legal articles and case analyses by Charvi Batra.",
};

/* Inline SVG thumbnails for each category */
const categoryIcons = {
  "Constitutional Law": (
    <svg viewBox="0 0 80 80" className="w-10 h-10" fill="none">
      <rect x="15" y="8" width="50" height="8" rx="2" fill="#B87333" opacity="0.5"/>
      <rect x="20" y="16" width="6" height="44" rx="1" fill="#B87333" opacity="0.4"/>
      <rect x="32" y="16" width="6" height="44" rx="1" fill="#B87333" opacity="0.4"/>
      <rect x="44" y="16" width="6" height="44" rx="1" fill="#B87333" opacity="0.4"/>
      <rect x="56" y="16" width="6" height="44" rx="1" fill="#B87333" opacity="0.4"/>
      <rect x="15" y="60" width="50" height="8" rx="2" fill="#B87333" opacity="0.5"/>
    </svg>
  ),
  "Intellectual Property": (
    <svg viewBox="0 0 80 80" className="w-10 h-10" fill="none">
      <path d="M40 8L68 22V45C68 58 54 70 40 75C26 70 12 58 12 45V22Z" fill="#B87333" fillOpacity="0.1" stroke="#B87333" strokeWidth="1.5" opacity="0.6"/>
      <text x="40" y="48" textAnchor="middle" fontFamily="serif" fontSize="20" fill="#B87333" opacity="0.7">™</text>
    </svg>
  ),
  "Case Analysis": (
    <svg viewBox="0 0 80 80" className="w-10 h-10" fill="none">
      <circle cx="40" cy="12" r="4" fill="#B87333" opacity="0.7"/>
      <line x1="40" y1="16" x2="40" y2="66" stroke="#B87333" strokeWidth="2" opacity="0.5"/>
      <line x1="18" y1="28" x2="62" y2="28" stroke="#B87333" strokeWidth="2" opacity="0.6"/>
      <path d="M12 42 Q18 52 24 42" stroke="#B87333" strokeWidth="1.5" fill="#B87333" fillOpacity="0.1"/>
      <path d="M56 42 Q62 52 68 42" stroke="#B87333" strokeWidth="1.5" fill="#B87333" fillOpacity="0.1"/>
      <line x1="18" y1="28" x2="14" y2="42" stroke="#B87333" strokeWidth="1" opacity="0.4"/>
      <line x1="18" y1="28" x2="22" y2="42" stroke="#B87333" strokeWidth="1" opacity="0.4"/>
      <line x1="62" y1="28" x2="58" y2="42" stroke="#B87333" strokeWidth="1" opacity="0.4"/>
      <line x1="62" y1="28" x2="66" y2="42" stroke="#B87333" strokeWidth="1" opacity="0.4"/>
      <rect x="30" y="64" width="20" height="4" rx="1" fill="#B87333" opacity="0.4"/>
    </svg>
  ),
};

export default function ArticlesPage() {
  return (
    <div className="page-reveal pt-28 md:pt-36 pb-20 md:pb-28 bg-cream">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brown-900 mb-4">
            Published Articles
          </h1>
          <p className="font-body text-base text-brown-500 max-w-xl mx-auto leading-relaxed">
            A collection of legal research articles, case analyses, and
            scholarly work published on The Legal Quorum.
          </p>
          <div className="divider-bronze max-w-[60px] mx-auto mt-8" />
        </div>

        {/* Articles list */}
        <div className="space-y-6">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="group hover-lift bg-warm border border-brown-200/50 rounded-lg overflow-hidden"
            >
              <div className="flex">
                {/* Left icon panel */}
                <div className="hidden sm:flex w-40 shrink-0 bg-gradient-to-br from-brown-200 to-brown-300 items-center justify-center relative">
                  {categoryIcons[pub.category] || categoryIcons["Case Analysis"]}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block font-sans text-[8px] tracking-widest uppercase text-cream bg-bronze/80 px-2 py-0.5 rounded-full">
                      {pub.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-9 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze font-semibold">
                      {pub.category}
                    </span>
                    <span className="text-brown-300">·</span>
                    <span className="font-sans text-xs text-brown-400">
                      {pub.date}
                    </span>
                    <span className="text-brown-300">·</span>
                    <span className="font-sans text-xs text-brown-400">
                      {pub.readTime}
                    </span>
                  </div>

                  {/* Title links to external article */}
                  <a
                    href={pub.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h2 className="font-display text-xl md:text-2xl font-semibold text-brown-900 hover:text-bronze transition-colors leading-snug mb-2">
                      {pub.title}
                    </h2>
                  </a>

                  {/* Published on badge */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <svg className="w-3.5 h-3.5 text-brown-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    <span className="font-sans text-xs text-brown-400">
                      Published on{" "}
                      <a
                        href={pub.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bronze hover:text-brown-700 transition-colors underline underline-offset-2"
                      >
                        {pub.publishedOn}
                      </a>
                    </span>
                  </div>

                  <p className="font-body text-sm text-brown-500 leading-relaxed line-clamp-2">
                    {pub.excerpt}
                  </p>

                  {/* Two CTAs: read on site + read summary */}
                  <div className="flex flex-wrap items-center gap-5 mt-5">
                    <a
                      href={pub.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-[11px] text-bronze tracking-[0.15em] uppercase hover:text-brown-700 transition-colors"
                    >
                      Read Full Article
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                    <Link
                      href={`/articles/${pub.id}`}
                      className="inline-flex items-center gap-2 font-sans text-[11px] text-brown-400 tracking-[0.15em] uppercase hover:text-brown-700 transition-colors"
                    >
                      Read Summary
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
