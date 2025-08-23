"use client";

import Link from "next/link";
import { Github, ArrowRight } from "lucide-react";
import portfolioData from '../data.json';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <main className="min-h-screen bg-[#18181c] text-gray-100 py-8 px-4 pt-25">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 text-white">
            My Projects
          </h1>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Explore my recent work and personal projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-[#21222c] shadow-lg transition hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            >
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 text-white">{project.title}</h2>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-2xl text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium transition hover:bg-blue-700"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-[#21222c] rounded-2xl py-12 px-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Interested in working together?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition hover:-translate-y-1"
          >
            <span>Contact Me</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}