import React, { useState } from "react";
import { skillsData, Skill } from "../data";
import {
  Server,
  Database,
  Terminal,
  Cpu,
  Binary,
  Radio,
  Search,
  GitBranch,
  Smartphone,
  Palette,
  Layers,
  Code,
  Zap,
  Network,
  ShieldAlert,
  HelpCircle
} from "lucide-react";

interface SkillsProps {
  isDarkMode: boolean;
}

// Icon rendering helper map based on skill definitions
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Server":
      return <Server className="h-4 w-4" />;
    case "Database":
      return <Database className="h-4 w-4" />;
    case "Terminal":
      return <Terminal className="h-4 w-4" />;
    case "Cpu":
      return <Cpu className="h-4 w-4" />;
    case "Binary":
      return <Binary className="h-4 w-4" />;
    case "Radio":
      return <Radio className="h-4 w-4" />;
    case "Search":
      return <Search className="h-4 w-4" />;
    case "GitBranch":
      return <GitBranch className="h-4 w-4" />;
    case "Smartphone":
      return <Smartphone className="h-4 w-4" />;
    case "Palette":
      return <Palette className="h-4 w-4" />;
    case "Layers":
      return <Layers className="h-4 w-4" />;
    case "Code":
      return <Code className="h-4 w-4" />;
    case "Zap":
      return <Zap className="h-4 w-4 text-amber-500" />;
    case "Network":
      return <Network className="h-4 w-4 text-indigo-400" />;
    case "ShieldAlert":
      return <ShieldAlert className="h-4 w-4 text-red-400" />;
    default:
      return <HelpCircle className="h-4 w-4" />;
  }
};

export default function Skills({ isDarkMode }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const categories = ["Semua", "Backend", "Frontend", "Database & Tools"];

  const filteredSkills =
    activeCategory === "Semua"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className={`py-24 px-6 lg:px-8 border-t border-slate-800/10 ${
      isDarkMode ? "bg-slate-950/20" : "bg-slate-50/50"
    }`}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-500 mb-2">Technical Skills</p>
          <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl uppercase ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Kemampuan Teknologi
          </h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto mt-4 mb-6"></div>
          <p className={`text-sm font-light leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
            Bekerja dengan berbagai kerangka kerja backend tingkat lanjut, manajemen routing, database performa tinggi, 
            dan development frontend modern.
          </p>
        </div>

        {/* Category Toggles */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              className={`rounded px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/10"
                  : isDarkMode
                  ? "border border-slate-800 bg-[#0a101f] text-slate-400 hover:text-white hover:bg-slate-900"
                  : "border border-slate-205 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Tag Grid */}
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-left">
          {filteredSkills.map((skill: Skill) => (
            <div
              key={skill.name}
              className={`group flex flex-col items-center justify-center rounded border p-4 text-center transition-all hover:border-blue-500/30 ${
                isDarkMode
                  ? "border-slate-800 bg-[#0a101f] hover:bg-slate-900/40"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 shadow-sm"
              }`}
            >
              <div className={`mb-2.5 flex h-9 w-9 items-center justify-center rounded-md border transition-transform group-hover:scale-105 ${
                isDarkMode 
                  ? "bg-[#090d16] border-slate-800 text-blue-400" 
                  : "bg-slate-100 border-slate-200 text-blue-600"
              }`}>
                {getIconComponent(skill.icon)}
              </div>
              
              <h3 className={`text-xs font-bold uppercase tracking-wide leading-tight ${
                isDarkMode ? "text-slate-200 group-hover:text-white" : "text-slate-800 group-hover:text-slate-950"
              }`}>
                {skill.name}
              </h3>
              
              <span className={`text-[8px] font-mono tracking-wider uppercase mt-2 px-2 py-0.5 rounded ${
                isDarkMode ? "bg-slate-950 text-slate-500" : "bg-slate-100 text-slate-400"
              }`}>
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
