import Link from "next/link";
import { siteConfig, profile } from "../data";

export default function Footer() {
  return (
    <footer className="bg-brown-800 text-cream/70">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-full bg-bronze text-cream flex items-center justify-center font-display text-xs font-bold">
                {siteConfig.logo}
              </span>
              <h3 className="font-display text-xl text-cream font-semibold">
                {siteConfig.title}
              </h3>
            </div>
            <p className="font-sans text-sm leading-relaxed text-cream/40 max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-sans text-[11px] tracking-[0.25em] uppercase text-bronze mb-5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Articles", href: "/articles" },
                { label: "Documents", href: "/documents" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm text-cream/50 hover:text-bronze transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[11px] tracking-[0.25em] uppercase text-bronze mb-5">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 font-sans text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="text-cream/50 hover:text-bronze transition-colors"
              >
                {profile.email}
              </a>
              <span className="text-cream/30">{profile.phone}</span>
              <span className="text-cream/30">{profile.location}</span>
            </div>
          </div>
        </div>

        <div className="divider-bronze mt-10 mb-6 opacity-20" />

        <p className="text-center font-sans text-xs text-cream/25 tracking-wider">
          &copy; {new Date().getFullYear()} {siteConfig.title}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
