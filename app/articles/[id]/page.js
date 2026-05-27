import Link from "next/link";
import { publications } from "../../../data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return publications.map((pub) => ({ id: pub.id }));
}

export function generateMetadata({ params }) {
  const article = publications.find((p) => p.id === params.id);
  if (!article) return {};
  return {
    title: `${article.title} — Charvi Batra`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }) {
  const article = publications.find((p) => p.id === params.id);
  if (!article) notFound();

  return (
    <div className="page-reveal pt-28 md:pt-36 pb-20 md:pb-28 bg-cream">
      <article className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Back link */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 font-sans text-sm text-brown-500 hover:text-bronze transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All Articles
        </Link>

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream bg-bronze px-3 py-1.5 rounded-full font-medium">
              {article.category}
            </span>
            <span className="font-sans text-xs text-brown-400">{article.date}</span>
            <span className="text-brown-300">·</span>
            <span className="font-sans text-xs text-brown-400">{article.readTime}</span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-brown-900 leading-tight mb-4">
            {article.title}
          </h1>

          {/* Published on link */}
          {article.externalUrl && (
            <div className="flex items-center justify-center gap-2 mb-6">
              <svg className="w-4 h-4 text-bronze" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              <span className="font-sans text-sm text-brown-500">
                Published on{" "}
                <a
                  href={article.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze hover:text-brown-700 transition-colors underline underline-offset-2 font-medium"
                >
                  {article.publishedOn}
                </a>
              </span>
            </div>
          )}

          <p className="font-body text-lg text-brown-500 leading-relaxed max-w-2xl mx-auto">
            {article.excerpt}
          </p>

          {/* Read full article CTA */}
          {article.externalUrl && (
            <a
              href={article.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3 bg-brown-700 text-cream font-sans text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-bronze transition-colors duration-300"
            >
              Read Full Article on {article.publishedOn}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}

          <div className="divider-bronze mt-10" />
        </header>

        {/* Summary body */}
        <div className="mb-6">
          <h3 className="font-sans text-[11px] tracking-[0.2em] uppercase text-bronze font-semibold mb-6">
            Article Summary
          </h3>
        </div>

        <div
          className="article-prose font-body text-brown-800"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Bottom CTA to read full article */}
        {article.externalUrl && (
          <div className="mt-12 p-7 bg-warm border border-brown-200/50 rounded-lg text-center">
            <p className="font-body text-base text-brown-600 mb-4">
              Want to read the complete article with full citations and references?
            </p>
            <a
              href={article.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-bronze text-espresso font-sans text-[11px] tracking-[0.2em] uppercase font-semibold rounded-full hover:bg-bronze-light transition-colors duration-300"
            >
              Read on {article.publishedOn}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        )}

        {/* Author card */}
        <div className="mt-10 p-8 bg-warm border border-brown-200/50 rounded-lg flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-brown-700 text-cream flex items-center justify-center font-display text-lg font-bold shrink-0">
            CB
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-brown-900">
              Charvi Batra
            </p>
            <p className="font-sans text-sm text-brown-500 mt-1">
              B.A. LL.B. (Hons.) · Amity University Haryana
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
