import { experiencesData, Experience } from "../data";
import { Briefcase, Calendar, ChevronRight, Terminal } from "lucide-react";

interface ExperienceProps {
  isDarkMode: boolean;
}

export default function ExperienceView({ isDarkMode }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 border-t border-slate-800/10 relative">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-500 mb-2">Career Journey</p>
          <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl uppercase ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Pengalaman Kerja
          </h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto mt-4 mb-6"></div>
          <p className={`text-sm font-light leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
            Sekilas perjalanan karir dan kontribusi teknis andal saya di berbagai industri fintech, e-commerce, 
            keamanan siber, dan sistem enterprise.
          </p>
        </div>

        {/* Timeline body wrapper */}
        <div className="relative border-l border-blue-500/20 ml-4 md:ml-32 md:pl-8 pl-6 space-y-12">
          {experiencesData.map((exp: Experience, idx: number) => {
            const isCurrent = exp.period.toLowerCase().includes("sekarang");

            return (
              <div key={exp.company + exp.period} className="relative group">
                {/* Period displayed on the left on desktop, or above the card on mobile */}
                <div className="absolute -left-[6px] md:-left-40 top-1.5 flex items-center md:justify-end md:w-32 pr-2 text-left md:text-right">
                  <div className={`hidden md:block text-xs font-bold font-mono tracking-wider ${
                    isCurrent ? "text-blue-400" : isDarkMode ? "text-slate-500" : "text-slate-500"
                  }`}>
                    {exp.period}
                  </div>
                </div>

                {/* Timeline node/dot with glow for current job */}
                <div className={`absolute -left-[31px] md:-left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded border transition-all ${
                  isCurrent
                    ? "bg-blue-600 border-blue-500 shadow-md shadow-blue-500/20 text-white"
                    : isDarkMode
                    ? "bg-slate-950 border-slate-800 text-slate-400"
                    : "bg-white border-slate-205 text-slate-500"
                }`}>
                  {isCurrent ? (
                    <span className="absolute h-4 w-4 rounded bg-blue-400 animate-ping opacity-75"></span>
                  ) : null}
                  <Briefcase className="h-3 w-3 shrink-0" />
                </div>

                {/* Experience Detail Card */}
                <div className={`rounded border p-6 transition-all hover:border-blue-500/30 ${
                  isDarkMode
                    ? "border-slate-800 bg-[#0a101f] hover:bg-slate-900/40"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow shadow-sm"
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 text-left">
                    <div>
                      {/* Company & Role */}
                      <span className={`block md:hidden text-[10px] font-bold font-mono uppercase tracking-wider mb-1 ${
                        isCurrent ? "text-blue-400" : "text-slate-500"
                      }`}>
                        {exp.period}
                      </span>
                      <h3 className={`text-lg font-bold uppercase tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                        {exp.role}
                      </h3>
                      <p className="text-sm font-mono tracking-wide text-blue-500 mt-1">{exp.company}</p>
                    </div>
                  </div>

                  {/* Core description block */}
                  <p className={`text-xs leading-relaxed mb-4 text-left font-light ${
                    isDarkMode ? "text-slate-350" : "text-slate-600"
                  }`}>
                    {exp.description}
                  </p>

                  {/* Achievements Highlights lists */}
                  <div className="space-y-2 mb-5">
                    <p className={`text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-left ${
                      isDarkMode ? "text-slate-500" : "text-slate-450"
                    }`}>Poin Kontribusi Utama</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((hil, hIdx) => (
                        <li key={hIdx} className="flex items-start text-xs text-left">
                          <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                          <span className={isDarkMode ? "text-slate-300 font-light" : "text-slate-600"}>{hil}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Platform/Deploy Stacks tags */}
                  <div className={`mt-4 pt-4 border-t flex flex-wrap gap-1.5 ${
                    isDarkMode ? "border-slate-805" : "border-slate-100"
                  }`}>
                    <Terminal className={`h-3.5 w-3.5 mr-1 self-center ${isDarkMode ? "text-slate-500" : "text-slate-400"}`} />
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className={`rounded px-2.5 py-1 text-[9px] font-bold font-mono uppercase tracking-wider ${
                          isDarkMode
                            ? "bg-slate-950 text-blue-400 border border-slate-800"
                            : "bg-slate-100 text-slate-600 border border-slate-205"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
