"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const services = [
  "Boudoir",
  "Family",
  "Senior Portraits",
  "Newborn",
  "Maternity",
  "Headshots & Branding",
  "Vue Studio",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#c9b99a] py-3 font-sans text-[14px] text-[#1a1a1a] placeholder-[#c9b99a] focus:outline-none focus:border-[#8b6f5e] transition-colors duration-200";

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 px-6 bg-[#faf9f7]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#8b6f5e] mb-6">
              Let&rsquo;s Connect
            </p>
            <h1 className="font-serif text-6xl md:text-7xl text-[#1a1a1a] mb-8 leading-tight italic">
              Start the Conversation
            </h1>
            <p className="font-sans text-[15px] text-[#6b6b6b] leading-relaxed">
              Every session begins here — with a conversation. No pressure, no obligation.
              Just Samantha, and you, talking about what this could look like.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 px-6 bg-[#f5f0ea]">
          <div className="max-w-2xl mx-auto">
            {status === "success" ? (
              <div className="text-center py-20">
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#8b6f5e] mb-6">
                  Received
                </p>
                <h2 className="font-serif text-4xl text-[#1a1a1a] mb-6 italic">
                  Thank you.
                </h2>
                <p className="font-sans text-[15px] text-[#6b6b6b]">
                  Samantha will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-sans text-[10px] tracking-[0.3em] uppercase text-[#8b6f5e] mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-[10px] tracking-[0.3em] uppercase text-[#8b6f5e] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-sans text-[10px] tracking-[0.3em] uppercase text-[#8b6f5e] mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block font-sans text-[10px] tracking-[0.3em] uppercase text-[#8b6f5e] mb-2"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" className="text-[#6b6b6b]">
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-[10px] tracking-[0.3em] uppercase text-[#8b6f5e] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell Samantha a little about what you have in mind..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="font-sans text-[13px] text-red-500">{errorMessage}</p>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full md:w-auto inline-block font-sans text-[11px] tracking-[0.2em] uppercase bg-[#1a1a1a] text-[#faf9f7] px-10 py-4 hover:bg-[#8b6f5e] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Additional info */}
        <section className="py-20 px-6 bg-[#1a1a1a]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                label: "Location",
                value: "Steiner Ranch, Austin, TX",
                sub: "Serving Austin & surrounding areas",
              },
              {
                label: "Response Time",
                value: "Within 24 Hours",
                sub: "Samantha personally responds to every inquiry",
              },
              {
                label: "Sessions By",
                value: "Appointment Only",
                sub: "Every experience is intentional and personal",
              },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c9b99a] mb-3">
                  {item.label}
                </p>
                <p className="font-serif text-2xl text-[#faf9f7] mb-2">{item.value}</p>
                <p className="font-sans text-[12px] text-[#6b6b6b]">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
