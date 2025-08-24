"use client";

import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Twitter, Instagram, MapPin, ArrowRight } from "lucide-react";
import portfolioData from '../data.json';

export default function Contact() {
  const { email, phone, location, resumeUrl, socials } = portfolioData.contactInfo;

  // Form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Form submit handler
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setSuccess("Your message has been sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to send message.");
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#18181c] text-gray-100 py-8 px-4 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3 text-white">Contact Me</h1>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Reach out for collaborations, questions, or just to say hi!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#21222c] rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 mb-4">
                <Mail className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <a href={`mailto:${email}`} className="block text-blue-400 break-all font-medium hover:underline">{email}</a>
            </div>
            <div className="bg-[#21222c] rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 mb-4">
                <Phone className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Phone</h3>
              <a href={`tel:${phone}`} className="block text-blue-400 font-medium hover:underline">{phone}</a>
            </div>
            <div className="bg-[#21222c] rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 mb-4">
                <MapPin className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Location</h3>
              <p className="block text-blue-400 font-medium">{location}</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-[#21222c] rounded-2xl p-8 shadow-lg flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <h2 className="text-xl font-semibold text-white mb-2">Send a Message</h2>
            <input
              type="text"
              className="bg-[#18181c] border border-blue-500/40 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              className="bg-[#18181c] border border-blue-500/40 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              className="bg-[#18181c] border border-blue-500/40 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && <p className="text-green-400">{success}</p>}
            {error && <p className="text-red-400">{error}</p>}
          </form>
        </div>

        {/* Socials */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-white text-center">Connect With Me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#21222c] rounded-2xl p-5 shadow-lg flex flex-col transition hover:-translate-y-1 hover:shadow-xl text-center"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 mb-3 mx-auto">
                  {social.name === 'GitHub' && <Github className="text-blue-500" />}
                  {social.name === 'LinkedIn' && <Linkedin className="text-blue-500" />}
                  {social.name === 'Twitter' && <Twitter className="text-blue-500" />}
                  {social.name === 'Instagram' && <Instagram className="text-blue-500" />}
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{social.name}</h3>
                <span className="flex items-center gap-2 justify-center text-sm text-blue-400 font-medium">
                  {social.handle} <ArrowRight size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Resume */}
        <div className="mt-8 bg-[#21222c] rounded-2xl py-12 px-8 text-center shadow-lg">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-2 text-white">Looking for my resume?</h2>
            <p className="text-gray-400 mb-6">
              Download my complete resume to learn more about my skills, experience, and education.
            </p>
            <a
              href={resumeUrl}
              download
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition hover:-translate-y-1"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}