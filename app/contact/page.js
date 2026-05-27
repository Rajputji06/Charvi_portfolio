import { profile } from "../../data";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact — Charvi Batra",
  description: "Get in touch with Charvi Batra for legal consultations and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="page-reveal pt-28 md:pt-36 pb-20 md:pb-28 bg-cream">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-5 gap-14">
          {/* Left column */}
          <div className="lg:col-span-2">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-brown-900 mb-2">
              Let&apos;s Talk
            </h1>
            <p className="font-script text-2xl text-bronze mb-6">Get in touch</p>
            <p className="font-body text-base text-brown-500 leading-relaxed mb-10">
              I&apos;m open to internship opportunities, legal research
              collaborations, and academic discussions. Feel free to reach out.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-warm border border-brown-200/60 flex items-center justify-center text-bronze shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8l9-4 9 4" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown-400 mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-body text-lg text-brown-800 hover:text-bronze transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-warm border border-brown-200/60 flex items-center justify-center text-bronze shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.73-1.25a2 2 0 012.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown-400 mb-1">
                    Phone
                  </p>
                  <span className="font-body text-lg text-brown-800">
                    {profile.phone}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-warm border border-brown-200/60 flex items-center justify-center text-bronze shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown-400 mb-1">
                    Location
                  </p>
                  <span className="font-body text-lg text-brown-800">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Functional Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
