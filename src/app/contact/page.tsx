"use client";

import { Mail, Phone, Github, Linkedin, Twitter, Instagram, MapPin, ArrowRight } from "lucide-react";
import portfolioData from '../data.json'; // Import the data

export default function Contact() {
  const { email, phone, location, resumeUrl, socials } = portfolioData.contactInfo;

  return (
    <main className="max-w-6xl mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Feel free to reach out through any of the following channels. I'm always open to discussing new projects,
          creative ideas, or opportunities to be part of your vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg transition hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-400 mb-4">
              <Mail className="text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900">Email</h3>
            <a href={`mailto:${email}`} className="block text-violet-600 break-all font-medium mb-1 hover:underline">{email}</a>
            <p className="text-xs text-gray-400">I usually respond within 24 hours</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg transition hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-400 mb-4">
              <Phone className="text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900">Phone</h3>
            <a href={`tel:${phone}`} className="block text-violet-600 font-medium mb-1 hover:underline">{phone}</a>
            <p className="text-xs text-gray-400">Available weekdays 9 AM - 6 PM</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg transition hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-400 mb-4">
              <MapPin className="text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900">Location</h3>
            <p className="block text-violet-600 font-medium mb-1">{location}</p>
            <p className="text-xs text-gray-400">Open to remote & relocation</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">Connect With Me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-5 shadow-lg flex flex-col transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-violet-500/10 mb-3">
                  {social.name === 'GitHub' && <Github className="text-violet-500" />}
                  {social.name === 'LinkedIn' && <Linkedin className="text-violet-500" />}
                  {social.name === 'Twitter' && <Twitter className="text-violet-500" />}
                  {social.name === 'Instagram' && <Instagram className="text-violet-500" />}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{social.name}</h3>
                <p className="text-sm text-gray-500 mb-3 flex-grow">Follow my work and updates on {social.name}</p>
                <span className="flex items-center gap-2 text-sm text-violet-600 font-medium">
                  {social.handle} <ArrowRight size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Resume */}
      <div className="mt-8 bg-gradient-to-br from-violet-500/10 to-purple-200/10 rounded-2xl py-12 px-8 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">Looking for my resume?</h2>
          <p className="text-gray-600 mb-6">
            Download my complete resume to learn more about my skills, experience, and education.
          </p>
          <a
            href={resumeUrl}
            download
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition hover:-translate-y-1"
          >
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
}