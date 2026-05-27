"use client";

import { useState } from "react";

// ─────────────────────────────────────────────────────────────
//  HOW TO SET UP (one-time, takes 30 seconds):
//
//  1. Go to https://web3forms.com/
//  2. Enter the email where you want to receive enquiries
//     (e.g. Charvibatra15@gmail.com)
//  3. You'll receive an access key via email
//  4. Paste it below replacing "YOUR_ACCESS_KEY_HERE"
//
//  That's it — every form submission will be emailed to you.
// ─────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Portfolio Enquiry",
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="bg-warm border border-brown-200/50 rounded-lg p-8 md:p-10">
      <h2 className="font-display text-2xl font-semibold text-brown-900 mb-2">
        Send a Message
      </h2>
      <p className="font-sans text-sm text-brown-400 mb-8">
        Fill out the form and I&apos;ll get back to you shortly.
      </p>

      {/* ── Success State ── */}
      {status === "success" ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-display text-xl font-semibold text-brown-900 mb-2">
            Message Sent!
          </h3>
          <p className="font-body text-sm text-brown-500 mb-6">
            Thank you for reaching out. I&apos;ll get back to you as soon as
            possible.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="inline-block font-sans text-[11px] tracking-[0.2em] uppercase text-bronze border-b-2 border-bronze pb-1 hover:text-brown-700 hover:border-brown-700 transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        /* ── Form ── */
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-brown-500 mb-2">
                Name <span className="text-bronze">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full px-4 py-3 bg-cream border border-brown-200/70 rounded-lg font-body text-base text-brown-800 placeholder:text-brown-300 focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 transition-all"
              />
            </div>
            <div>
              <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-brown-500 mb-2">
                Email <span className="text-bronze">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 bg-cream border border-brown-200/70 rounded-lg font-body text-base text-brown-800 placeholder:text-brown-300 focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-brown-500 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this regarding?"
              className="w-full px-4 py-3 bg-cream border border-brown-200/70 rounded-lg font-body text-base text-brown-800 placeholder:text-brown-300 focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 transition-all"
            />
          </div>

          <div>
            <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-brown-500 mb-2">
              Message <span className="text-bronze">*</span>
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your inquiry..."
              required
              className="w-full px-4 py-3 bg-cream border border-brown-200/70 rounded-lg font-body text-base text-brown-800 placeholder:text-brown-300 focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/30 transition-all resize-none"
            />
          </div>

          {/* Error Message */}
          {status === "error" && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200/60 rounded-lg">
              <svg
                className="w-5 h-5 text-red-500 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              <p className="font-sans text-sm text-red-700">{errorMsg}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-4 bg-brown-700 text-cream font-sans text-[12px] tracking-[0.2em] uppercase hover:bg-bronze transition-colors duration-300 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {status === "sending" ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
