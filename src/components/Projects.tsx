import { ArrowUpRight, CheckCircle2, ExternalLink, Layers } from "lucide-react";
import { Project, projectsData } from "../data";
import React, { useState } from "react";

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<string>("Semua");

  const filterTabs = [
    "Semua",
    "Full-Stack",
    "Backend",
  ];

  const filteredProjects =
    activeTab === "Semua"
      ? projectsData
      : projectsData.filter((proj) => proj.category === activeTab);

  return (
    <section id="projects" className={`py-24 px-6 lg:px-8 border-t border-slate-800/10 ${
      isDarkMode ? "bg-slate-950/20" : "bg-slate-50/50"
    }`}>
      <div className="mx-auto max-w-7xl">
        
        {/* Header content section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-500 mb-2">Selected Projects</p>
          <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl uppercase ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Project Portfolio
          </h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto mt-4 mb-6"></div>
          <p className={`text-sm font-light leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
            Kumpulan proyek pilihan yang saya bangun, mencakup manajemen transaksi e-commerce, integrasi core banking, 
            aplikasi kuis milenial, serta microservices publik.
          </p>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              type="button"
              className={`rounded px-4.5 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/10"
                  : isDarkMode
                  ? "border border-slate-800 bg-[#0a101f] text-slate-400 hover:text-white hover:bg-slate-900"
                  : "border border-slate-205 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project: Project) => (
            <article
              key={project.title}
              className={`relative overflow-hidden rounded border p-6 flex flex-col transition-all hover:border-blue-500/30 ${
                project.featured
                  ? isDarkMode
                    ? "border-blue-500/30 bg-[#0c142c] shadow-blue-500/5"
                    : "border-blue-400/30 bg-blue-50/20"
                  : isDarkMode
                  ? "border-slate-800 bg-[#0a101f]"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {/* Highlight ribbon for top items */}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center space-x-1 border rounded bg-blue-500/10 border-blue-500/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Featured Project</span>
                </div>
              )}

              {/* Icon / Categorizer metadata */}
              <div className="mb-4 text-left">
                <span className={`rounded font-mono px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider ${
                  isDarkMode ? "bg-slate-950 text-slate-500 border border-slate-900" : "bg-slate-100 text-slate-500 border border-slate-200"
                }`}>
                  {project.category}
                </span>
              </div>

              {/* Project title description */}
              <div className="flex-1 text-left">
                <h3 className={`text-base font-bold uppercase tracking-wide mb-2 ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>
                  {project.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-6 font-light ${isDarkMode ? "text-slate-400" : "text-slate-650"}`}>
                  {project.description}
                </p>
              </div>

              {/* Technologies list */}
              <div className="flex flex-wrap gap-1.5 mb-5 shrink-0">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`rounded px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider border ${
                      isDarkMode
                        ? "bg-[#090d16] text-blue-450 border-slate-850"
                        : "bg-slate-105 text-slate-600 border-slate-205"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Visit Link and visual hover prompt */}
              <div className="text-left mt-auto shrink-0">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center space-x-1 text-xs font-bold font-mono uppercase tracking-wider text-blue-500 hover:text-blue-400 border-b border-blue-500/20 hover:border-blue-450 pb-0.5 transition-colors"
                  >
                    <span>Kunjungi Website</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className={`inline-flex w-fit items-center space-x-1.5 text-[10px] font-mono uppercase tracking-wider ${
                    isDarkMode ? "text-slate-500" : "text-slate-450"
                  }`}>
                    <Layers className="h-3.5 w-3.5" />
                    <span>Deployment Backend In-House</span>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
