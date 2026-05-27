import Image from "next/image";
import Link from "next/link";
import {
  profile,
  education,
  experience,
  practiceFocuses,
  skills,
  publications,
  mootCourt,
  activities,
  testimonials,
} from "../data";

/* ═══════════════════════════════════════════
   SVG ILLUSTRATION COMPONENTS
   Legal-themed decorative visuals
   ═══════════════════════════════════════════ */

const ScaleOfJustice = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="16" r="6" fill="#B87333" opacity="0.8"/>
    <line x1="60" y1="22" x2="60" y2="100" stroke="#B87333" strokeWidth="2.5" opacity="0.6"/>
    <line x1="25" y1="36" x2="95" y2="36" stroke="#B87333" strokeWidth="2.5" opacity="0.7"/>
    <line x1="25" y1="36" x2="20" y2="60" stroke="#B87333" strokeWidth="1.5" opacity="0.5"/>
    <line x1="25" y1="36" x2="30" y2="60" stroke="#B87333" strokeWidth="1.5" opacity="0.5"/>
    <path d="M14 60 Q25 72 36 60" stroke="#B87333" strokeWidth="1.5" fill="#B87333" fillOpacity="0.1"/>
    <line x1="95" y1="36" x2="90" y2="60" stroke="#B87333" strokeWidth="1.5" opacity="0.5"/>
    <line x1="95" y1="36" x2="100" y2="60" stroke="#B87333" strokeWidth="1.5" opacity="0.5"/>
    <path d="M84 60 Q95 72 106 60" stroke="#B87333" strokeWidth="1.5" fill="#B87333" fillOpacity="0.1"/>
    <rect x="48" y="96" width="24" height="6" rx="2" fill="#B87333" opacity="0.5"/>
  </svg>
);

const GavelIcon = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="15" width="40" height="14" rx="4" transform="rotate(35 60 15)" fill="#B87333" opacity="0.7"/>
    <rect x="30" y="50" width="40" height="14" rx="4" transform="rotate(35 30 50)" fill="#B87333" opacity="0.5"/>
    <line x1="52" y1="38" x2="68" y2="58" stroke="#B87333" strokeWidth="3" opacity="0.6" strokeLinecap="round"/>
    <rect x="20" y="90" width="80" height="10" rx="4" fill="#B87333" opacity="0.3"/>
    <rect x="30" y="84" width="60" height="8" rx="3" fill="#B87333" opacity="0.2"/>
  </svg>
);

const BookLawIcon = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="20" width="70" height="85" rx="4" fill="#B87333" fillOpacity="0.1" stroke="#B87333" strokeWidth="1.5" opacity="0.6"/>
    <rect x="30" y="15" width="65" height="85" rx="4" fill="#B87333" fillOpacity="0.08" stroke="#B87333" strokeWidth="1.5" opacity="0.5"/>
    <rect x="35" y="10" width="60" height="85" rx="4" fill="#FDF8F3" stroke="#B87333" strokeWidth="1.5" opacity="0.7"/>
    <text x="65" y="42" textAnchor="middle" fontFamily="serif" fontSize="11" fill="#B87333" opacity="0.8">§</text>
    <line x1="45" y1="52" x2="85" y2="52" stroke="#B87333" strokeWidth="1" opacity="0.3"/>
    <line x1="45" y1="60" x2="80" y2="60" stroke="#B87333" strokeWidth="1" opacity="0.2"/>
    <line x1="45" y1="68" x2="82" y2="68" stroke="#B87333" strokeWidth="1" opacity="0.2"/>
    <line x1="45" y1="76" x2="75" y2="76" stroke="#B87333" strokeWidth="1" opacity="0.2"/>
  </svg>
);

const PillarIcon = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="10" width="80" height="10" rx="2" fill="#B87333" opacity="0.5"/>
    <rect x="15" y="18" width="90" height="6" rx="1" fill="#B87333" opacity="0.3"/>
    <rect x="28" y="24" width="10" height="70" rx="2" fill="#B87333" opacity="0.4"/>
    <rect x="46" y="24" width="10" height="70" rx="2" fill="#B87333" opacity="0.4"/>
    <rect x="64" y="24" width="10" height="70" rx="2" fill="#B87333" opacity="0.4"/>
    <rect x="82" y="24" width="10" height="70" rx="2" fill="#B87333" opacity="0.4"/>
    <rect x="15" y="94" width="90" height="6" rx="1" fill="#B87333" opacity="0.3"/>
    <rect x="20" y="100" width="80" height="10" rx="2" fill="#B87333" opacity="0.5"/>
  </svg>
);

const ScrollIcon = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 25 C30 18 38 12 48 12 L85 12 C85 12 90 12 90 18 L90 92 C90 98 85 102 80 102 L40 102 C34 102 30 98 30 92 Z" fill="#B87333" fillOpacity="0.08" stroke="#B87333" strokeWidth="1.5" opacity="0.6"/>
    <circle cx="34" cy="25" r="8" fill="#FDF8F3" stroke="#B87333" strokeWidth="1.5" opacity="0.6"/>
    <circle cx="34" cy="95" r="8" fill="#FDF8F3" stroke="#B87333" strokeWidth="1.5" opacity="0.6"/>
    <line x1="45" y1="35" x2="80" y2="35" stroke="#B87333" strokeWidth="1" opacity="0.3"/>
    <line x1="45" y1="45" x2="78" y2="45" stroke="#B87333" strokeWidth="1" opacity="0.25"/>
    <line x1="45" y1="55" x2="75" y2="55" stroke="#B87333" strokeWidth="1" opacity="0.2"/>
    <line x1="45" y1="65" x2="80" y2="65" stroke="#B87333" strokeWidth="1" opacity="0.2"/>
    <line x1="45" y1="75" x2="70" y2="75" stroke="#B87333" strokeWidth="1" opacity="0.15"/>
  </svg>
);

const ShieldIcon = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 10 L100 30 L100 65 C100 85 80 105 60 112 C40 105 20 85 20 65 L20 30 Z" fill="#B87333" fillOpacity="0.08" stroke="#B87333" strokeWidth="1.5" opacity="0.6"/>
    <path d="M60 30 L60 90" stroke="#B87333" strokeWidth="1.5" opacity="0.3"/>
    <path d="M40 55 L60 55" stroke="#B87333" strokeWidth="1.5" opacity="0.3"/>
    <path d="M60 55 L80 55" stroke="#B87333" strokeWidth="1.5" opacity="0.3"/>
    <text x="60" y="50" textAnchor="middle" fontFamily="serif" fontSize="16" fill="#B87333" opacity="0.6">⚖</text>
  </svg>
);

const CorporateIcon = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="35" width="60" height="65" rx="4" fill="#B87333" fillOpacity="0.08" stroke="#B87333" strokeWidth="1.5" opacity="0.6"/>
    <rect x="42" y="15" width="36" height="24" rx="3" fill="#B87333" fillOpacity="0.12" stroke="#B87333" strokeWidth="1.5" opacity="0.5"/>
    <line x1="60" y1="39" x2="60" y2="28" stroke="#B87333" strokeWidth="1.5" opacity="0.4"/>
    <rect x="40" y="48" width="16" height="12" rx="2" fill="#B87333" fillOpacity="0.15" stroke="#B87333" strokeWidth="1" opacity="0.5"/>
    <rect x="64" y="48" width="16" height="12" rx="2" fill="#B87333" fillOpacity="0.15" stroke="#B87333" strokeWidth="1" opacity="0.5"/>
    <rect x="40" y="68" width="16" height="12" rx="2" fill="#B87333" fillOpacity="0.15" stroke="#B87333" strokeWidth="1" opacity="0.5"/>
    <rect x="64" y="68" width="16" height="12" rx="2" fill="#B87333" fillOpacity="0.15" stroke="#B87333" strokeWidth="1" opacity="0.5"/>
    <rect x="52" y="85" width="16" height="15" rx="2" fill="#B87333" fillOpacity="0.2" stroke="#B87333" strokeWidth="1" opacity="0.6"/>
    <line x1="25" y1="100" x2="95" y2="100" stroke="#B87333" strokeWidth="2" opacity="0.3"/>
  </svg>
);

/* Gallery thumbnail illustrations */
const ConstitutionThumb = () => (
  <div className="w-full h-full bg-gradient-to-br from-brown-200 to-brown-300 flex items-center justify-center relative">
    <PillarIcon className="w-20 h-20 opacity-80" />
    <div className="absolute top-3 left-3 font-display text-[40px] font-bold text-brown-700/10">§</div>
  </div>
);

const TrademarkThumb = () => (
  <div className="w-full h-full bg-gradient-to-br from-brown-300 to-brown-400 flex items-center justify-center relative">
    <ShieldIcon className="w-20 h-20 opacity-80" />
    <div className="absolute bottom-3 right-3 font-display text-[36px] font-bold text-brown-700/10">™</div>
  </div>
);

const CaseThumb = () => (
  <div className="w-full h-full bg-gradient-to-br from-brown-100 to-brown-200 flex items-center justify-center relative">
    <ScaleOfJustice className="w-20 h-20 opacity-80" />
    <div className="absolute top-3 right-3 font-display text-[32px] font-bold text-brown-600/10">⚖</div>
  </div>
);

const MootThumb = ({ num }) => (
  <div className="w-full h-full bg-gradient-to-br from-brown-400/80 to-brown-500/80 flex items-center justify-center relative">
    <GavelIcon className="w-16 h-16 opacity-60" />
    <div className="absolute top-2 left-3 font-display text-[28px] font-bold text-cream/10">{num}</div>
  </div>
);

const pubThumbs = {
  federalism: <ConstitutionThumb />,
  trademark: <TrademarkThumb />,
  "ir-coelho": <CaseThumb />,
};

export default function Home() {
  return (
    <div className="page-reveal">

      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-20 bg-cream text-center">
        <div className="flex justify-center mb-8 animate-fade-up opacity-0">
          <div className="w-16 h-16 rounded-full bg-brown-700 text-cream flex items-center justify-center font-display text-xl font-bold shadow-lg">
            CB
          </div>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brown-900 mb-6 animate-fade-up opacity-0 delay-100">
          Hello, <span className="font-script font-normal text-bronze">I am {profile.firstName}!</span>
        </h1>

        <p className="font-body text-base md:text-lg text-brown-600 max-w-xl mx-auto px-6 leading-relaxed mb-8 animate-fade-up opacity-0 delay-200">
          {profile.heroTagline}
        </p>

        <div className="animate-fade-up opacity-0 delay-300">
          <Link
            href="/contact"
            className="inline-block font-sans text-[11px] tracking-[0.25em] uppercase text-bronze border-b-2 border-bronze pb-1 hover:text-brown-700 hover:border-brown-700 transition-colors"
          >
            Hire me
          </Link>
        </div>
      </section>

      {/* ══════════ ICON BANNER (replaces image grid) ══════════ */}
      <section className="bg-brown-700 py-8 md:py-10 pattern-overlay">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 items-center justify-items-center">
            <div className="flex flex-col items-center gap-2">
              <ScaleOfJustice className="w-14 h-14 md:w-16 md:h-16" />
              <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-cream/40">Justice</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <GavelIcon className="w-14 h-14 md:w-16 md:h-16" />
              <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-cream/40">Advocacy</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BookLawIcon className="w-14 h-14 md:w-16 md:h-16" />
              <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-cream/40">Research</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <PillarIcon className="w-14 h-14 md:w-16 md:h-16" />
              <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-cream/40">Constitution</span>
            </div>
            <div className="flex flex-col items-center gap-2 hidden md:flex">
              <ScrollIcon className="w-14 h-14 md:w-16 md:h-16" />
              <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-cream/40">Drafting</span>
            </div>
            <div className="flex flex-col items-center gap-2 hidden md:flex">
              <ShieldIcon className="w-14 h-14 md:w-16 md:h-16" />
              <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-cream/40">Protection</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <h2 className="font-script text-3xl md:text-4xl text-brown-800 mb-6">
                About {profile.name}
              </h2>
              <p className="font-body text-base md:text-lg text-brown-600 leading-[1.95]">
                {profile.bio}
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-sm shadow-xl">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BACKGROUND ══════════ */}
      <section className="py-20 md:py-28 bg-warm">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Background
          </h2>
          <div className="divider-bronze max-w-[60px] mx-auto mb-14" />

          <div className="grid md:grid-cols-3 gap-10">
            {education.map((edu, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-2 border-bronze/40 flex items-center justify-center mb-5">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-bronze" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {edu.icon === "scale" && <path d="M12 3v18M3 7l9-4 9 4M5 7a2 2 0 002 2M19 7a2 2 0 01-2 2M3 12l2-5M21 12l-2-5" />}
                    {edu.icon === "book" && <path d="M4 4h16v16H4zM4 12h16M12 4v16" />}
                    {edu.icon === "award" && <><circle cx="12" cy="9" r="5" /><path d="M9 14l-2 7 5-3 5 3-2-7" /></>}
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold text-brown-900 mb-1">
                  {edu.institution}
                </h3>
                <p className="font-sans text-sm text-bronze mb-1">{edu.detail}</p>
                <p className="font-sans text-xs text-brown-500">
                  {edu.degree}{edu.year ? `, ${edu.year}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ EXPERIENCE ══════════ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-900 mb-4">
              Experience
            </h2>
            <div className="divider-bronze max-w-[60px] mx-auto" />
          </div>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="group hover-lift bg-warm border border-brown-200/60 rounded-lg p-7 md:p-9"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div className="flex items-start gap-4">
                    {/* Icon per experience */}
                    <div className="w-10 h-10 rounded-full bg-brown-200/60 flex items-center justify-center shrink-0 mt-1 group-hover:bg-bronze/20 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-bronze" fill="none" stroke="currentColor" strokeWidth="1.5">
                        {i === 0 && <path d="M3 7l9-4 9 4M12 3v18M5 7a2 2 0 002 2M19 7a2 2 0 01-2 2M3 12l2-5M21 12l-2-5" />}
                        {i === 1 && <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/></>}
                        {i === 2 && <><path d="M12 3v18M3 7l9-4 9 4"/><circle cx="12" cy="14" r="3"/></>}
                        {i === 3 && <><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h8M8 14h5"/></>}
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-brown-900 group-hover:text-bronze transition-colors">
                        {exp.role}
                      </h3>
                      <p className="font-sans text-sm text-brown-500 mt-1">
                        {exp.organization}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-14 md:ml-0">
                    <span className="font-sans text-[10px] tracking-widest uppercase px-3 py-1 border border-bronze/40 text-bronze rounded-full">
                      {exp.type}
                    </span>
                    <span className="font-sans text-xs text-brown-400">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2.5 ml-14 md:ml-14">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-2 shrink-0" />
                      <span className="font-body text-[15px] text-brown-600 leading-relaxed">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PRACTICE FOCUSES ══════════ */}
      <section className="py-20 md:py-28 bg-warm">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Practice Focuses
          </h2>
          <div className="divider-bronze max-w-[60px] mx-auto mb-14" />

          <div className="grid md:grid-cols-3 gap-10">
            {practiceFocuses.map((focus, i) => {
              const icons = [
                <CorporateIcon key="c" className="w-16 h-16" />,
                <BookLawIcon key="b" className="w-16 h-16" />,
                <ScrollIcon key="s" className="w-16 h-16" />,
              ];
              return (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-brown-200 to-brown-300 mb-6 shadow-md flex items-center justify-center group-hover:from-brown-300 group-hover:to-brown-400 transition-all duration-300">
                    {icons[i]}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-brown-900 mb-3">
                    {focus.title}
                  </h3>
                  <p className="font-body text-sm text-brown-500 leading-relaxed max-w-[260px]">
                    {focus.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ PUBLICATIONS GALLERY ══════════ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-900 mb-2">
              Publication Gallery
            </h2>
            <p className="font-body text-base text-brown-500">
              Here are some of the articles I have published
            </p>
          </div>
          <div className="divider-bronze max-w-[60px] mx-auto mb-14" />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {publications.map((pub) => (
              <a
                key={pub.id}
                href={pub.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover-lift block"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative">
                  {pubThumbs[pub.id]}
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block font-sans text-[9px] tracking-widest uppercase text-cream/90 bg-bronze/80 px-2 py-0.5 rounded-full mb-1">
                      {pub.category}
                    </span>
                  </div>
                </div>
                <p className="font-sans text-sm text-brown-700 group-hover:text-bronze transition-colors leading-snug mb-1">
                  {pub.title}
                </p>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-brown-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  <span className="font-sans text-[10px] text-brown-400 group-hover:text-bronze transition-colors">
                    {pub.publishedOn}
                  </span>
                </div>
              </a>
            ))}

            {/* Moot court gallery items */}
            {mootCourt.slice(0, 3).map((m, i) => (
              <div key={i} className="block">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative">
                  <MootThumb num={i + 1} />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block font-sans text-[9px] tracking-widest uppercase text-cream/90 bg-brown-600/80 px-2 py-0.5 rounded-full mb-1">
                      Moot Court
                    </span>
                  </div>
                </div>
                <p className="font-sans text-sm text-brown-700 leading-snug">
                  {m.event} — <span className="text-brown-400">{m.role}, {m.year}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SKILLS ══════════ */}
      <section className="py-16 md:py-20 bg-brown-700 pattern-overlay">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-cream mb-10">
            Skills &amp; Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="font-sans text-sm px-5 py-2.5 border border-cream/20 text-cream/70 rounded-full hover:border-bronze hover:text-bronze transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-900 mb-4">
              Client Testimonials
            </h2>
            <div className="divider-bronze max-w-[60px] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => {
              const avatarIcons = [
                <ScaleOfJustice key="s" className="w-8 h-8" />,
                <PillarIcon key="p" className="w-8 h-8" />,
                <BookLawIcon key="b" className="w-8 h-8" />,
              ];
              return (
                <div key={i} className="text-center px-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-brown-200/60 flex items-center justify-center mx-auto mb-4">
                    {avatarIcons[i]}
                  </div>
                  <h3 className="font-script text-2xl text-brown-800 mb-4">
                    &ldquo;{t.headline}&rdquo;
                  </h3>
                  <p className="font-body text-sm text-brown-500 leading-relaxed mb-5">
                    {t.quote}
                  </p>
                  <p className="font-sans text-xs font-semibold text-bronze tracking-wider uppercase">
                    {t.name}
                  </p>
                  <p className="font-sans text-[11px] text-brown-400 mt-0.5">
                    {t.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ ACTIVITIES ══════════ */}
      <section className="py-16 md:py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-900 mb-4">
              Beyond the Courtroom
            </h2>
            <div className="divider-bronze max-w-[60px] mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((act, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-cream border border-brown-200/40 rounded-lg"
              >
                <div className="w-2 h-2 rounded-full bg-bronze mt-1.5 shrink-0" />
                <span className="font-body text-sm text-brown-600 leading-relaxed">
                  {act}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-24 md:py-32 bg-brown-700 pattern-overlay text-center relative">
        <div className="max-w-3xl mx-auto px-6">
          {/* Decorative scale */}
          <div className="flex justify-center mb-6 opacity-40">
            <ScaleOfJustice className="w-16 h-16" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream leading-tight mb-8">
            Reach out if you want<br />to create meaningful<br />
            <span className="font-script font-normal text-bronze">legal impact together.</span>
          </h2>

          <div className="divider-bronze max-w-[80px] mx-auto mb-8 opacity-40" />

          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 mb-10">
            <div className="text-center">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-cream/40 mb-1">
                Phone
              </p>
              <p className="font-sans text-sm text-cream/70">{profile.phone}</p>
            </div>
            <div className="text-center">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-cream/40 mb-1">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="font-sans text-sm text-cream/70 hover:text-bronze transition-colors"
              >
                {profile.email}
              </a>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-bronze text-espresso font-sans text-[12px] tracking-[0.2em] uppercase font-semibold rounded-full hover:bg-bronze-light transition-colors duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
