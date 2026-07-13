"use client";

import React, { useState } from "react";
import { Section } from "./Section";
import { Button } from "./ui/Button";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <Section id="contact" title="Contact" subtitle="GET IN TOUCH">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Contact Info */}
        <div className="md:col-span-2 space-y-6">
          <p className="text-sm md:text-base text-stone-600 leading-relaxed">
            I am always open to discussing research collaborations, teaching opportunities, or open-source projects. Feel free to reach out via the form or through the academic channels below.
          </p>

          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-stone-400 mt-1 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h4 className="text-sm font-bold text-stone-850 font-mono">EMAIL</h4>
                <p className="text-sm text-stone-500 mt-0.5">
                  <a href="mailto:s.ghasvarian@gmail.com" className="hover:text-stone-900 transition-colors focus-visible:underline">
                    s.ghasvarian@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-stone-400 mt-1 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2.93a2 2 0 01-.586 1.414L7.66 11.45a9 9 0 005.54 5.54l1.455-1.454a2 2 0 011.414-.586H18a2 2 0 012 2V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h4 className="text-sm font-bold text-stone-850 font-mono">PHONE</h4>
                <p className="text-sm text-stone-500 mt-0.5">
                  <a href="tel:+15512920388" className="hover:text-stone-900 transition-colors focus-visible:underline">
                    +1 (551) 292-0388
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono font-bold text-stone-500 mb-1"
                >
                  NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-md text-sm text-stone-900 focus:outline-none focus:border-brand-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono font-bold text-stone-500 mb-1"
                >
                  EMAIL <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-md text-sm text-stone-900 focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block text-xs font-mono font-bold text-stone-500 mb-1"
              >
                SUBJECT
              </label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration, Research, Teaching..."
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-md text-sm text-stone-900 focus:outline-none focus:border-brand-primary"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-mono font-bold text-stone-500 mb-1"
              >
                MESSAGE <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-md text-sm text-stone-900 focus:outline-none focus:border-brand-primary resize-y"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <Button type="submit" disabled={isSubmitting} variant="primary">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {isSubmitted && (
                <div
                  role="alert"
                  className="text-xs md:text-sm text-teal-700 bg-teal-50 border border-teal-200 px-3.5 py-2 rounded-md font-medium"
                >
                  ✓ Thank you! Your mock message has been sent.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};
