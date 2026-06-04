import { ArrowRight, Copy, Github, Mail, MapPin, Phone, ShieldCheck, Terminal as TerminalIcon } from "lucide-react";

import { motion } from "motion/react";

interface HeroProps {
  isDarkMode: boolean;
  onCopyAction: (text: string, label: string) => void;
}

export default function Hero({ isDarkMode, onCopyAction }: HeroProps) {
  // Stats summary for the right-hand elegant developer widget
  const stats = [
    { label: "Tahun Pengalaman", val: "7+" },
    { label: "Project Berhasil", val: "10+" },
    { label: "Teknologi Core", val: "15+" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-16 lg:px-8 border-b border-slate-800/10"
    >
      {/* Background glow in theme context */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-[120px] animate-pulse-glow-1"></div>
        <div className="absolute bottom-[10%] right-[5%] h-[450px] w-[450px] rounded-full bg-emerald-500/5 blur-[120px] animate-pulse-glow-2"></div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center relative z-10 w-full">
        {/* Left Column: Title & Intro */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex w-fit items-center space-x-2 rounded border px-3.5 py-1.5 text-[10px] font-mono font-bold tracking-[0.2em] uppercase ${
              isDarkMode 
                ? "border-blue-500/20 bg-blue-500/5 text-blue-400"
                : "border-blue-250 bg-blue-50 text-blue-600"
            }`}
          >
            <ShieldCheck className="h-4 w-4 text-blue-500" />
            <span>Full-Stack & Backend Expert</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className={`text-2xl font-bold uppercase tracking-widest ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}>
              Hi, saya <span className={`font-extrabold ${isDarkMode ? "text-white" : "text-slate-900"}`}>Fajar Setiawan</span>
            </h1>
            <p className={`text-4xl font-light leading-tight tracking-tight sm:text-5xl ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              Building robust <span className="font-bold italic text-blue-500">backend</span> systems with modern architecture.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-base leading-relaxed sm:text-lg max-w-2xl font-light ${
              isDarkMode ? "text-slate-400" : "text-slate-655"
            }`}
          >
            Specializing in REST APIs, microservices, and high-performance database design with Go, Laravel, React, and Next.js.
          </motion.p>

          {/* Quick Actions Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              className="group flex items-center space-x-2 rounded bg-blue-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/10 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
            >
              <span>Lihat Project</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className={`rounded border px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 ${
                isDarkMode
                  ? "border-slate-800 bg-slate-900/30 text-slate-200 hover:bg-slate-800 hover:border-slate-700"
                  : "border-slate-200 bg-white text-slate-750 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
              }`}
            >
              Hubungi Saya
            </a>
          </motion.div>

          {/* Direct Copies Interface - Unmistakably shows phone number, email and github as requested */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`mt-6 rounded-xl border p-6 ${
              isDarkMode 
                ? "border-slate-800 bg-slate-950/45" 
                : "border-slate-200 bg-slate-50/80 shadow-inner"
            }`}
          >
            <p className={`text-xs font-bold uppercase tracking-[0.22em] font-mono mb-4 flex items-center gap-1.5 ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}>
              <TerminalIcon className="h-3.5 w-3.5 text-blue-500 shrink-0" />
              <span>Connect Directly (Klik untuk menyalin)</span>
            </p>

            <div className="grid gap-3.5 sm:grid-cols-2 md:grid-cols-3">
              {/* WhatsApp copy tile */}
              <button
                type="button"
                onClick={() => onCopyAction("+6287785438713", "WhatsApp")}
                className={`group flex items-center justify-between rounded border p-3.5 text-left transition-all hover:scale-[1.01] ${
                  isDarkMode
                    ? "border-slate-800 bg-slate-900/60 hover:bg-slate-850 hover:border-blue-500/40 text-white"
                    : "border-slate-200 bg-white hover:bg-slate-50 hover:border-blue-600/40 text-slate-800 shadow-sm"
                }`}
              >
                <div className="flex items-center space-x-3 truncate">
                  <div className="rounded bg-blue-600/10 p-2 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    ☏
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Phone & WhatsApp</p>
                    <p className="text-xs font-bold font-mono">+62 877 8543 8713</p>
                  </div>
                </div>
                <Copy className="h-3.5 w-3.5 text-slate-500 group-hover:text-blue-500 shrink-0" />
              </button>

              {/* Email copy tile */}
              <button
                type="button"
                onClick={() => onCopyAction("295fajarsetiawan@gmail.com", "Email")}
                className={`group flex items-center justify-between rounded border p-3.5 text-left transition-all hover:scale-[1.01] ${
                  isDarkMode
                    ? "border-slate-800 bg-slate-900/60 hover:bg-slate-850 hover:border-blue-500/40 text-white"
                    : "border-slate-200 bg-white hover:bg-slate-50 hover:border-blue-600/40 text-slate-800 shadow-sm"
                }`}
              >
                <div className="flex items-center space-x-3 truncate">
                  <div className="rounded bg-blue-600/10 p-2 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    ✉
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Email Address</p>
                    <p className="text-xs font-bold font-mono">295fajarsetiawan@gmail.com</p>
                  </div>
                </div>
                <Copy className="h-3.5 w-3.5 text-slate-500 group-hover:text-blue-500 shrink-0" />
              </button>

              {/* Github link tile */}
              <a
                href="https://github.com/295fajarsetiawan"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between rounded border p-3.5 text-left transition-all hover:scale-[1.01] sm:col-span-2 md:col-span-1 ${
                  isDarkMode
                    ? "border-slate-800 bg-slate-900/60 hover:bg-slate-850 hover:border-blue-500/40 text-white"
                    : "border-slate-200 bg-white hover:bg-slate-50 hover:border-blue-600/40 text-slate-800 shadow-sm"
                }`}
              >
                <div className="flex items-center space-x-3 truncate">
                  <div className="rounded bg-blue-600/10 p-2 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    ⌥
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">GitHub Profile</p>
                    <p className="text-xs font-bold font-mono">295fajarsetiawan</p>
                  </div>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-blue-500 transform group-hover:translate-x-0.5 shrink-0" />
              </a>
            </div>

            <div className="mt-4 flex items-center space-x-1.5 text-xs text-slate-500 text-left">
              <MapPin className="h-3.5 w-3.5 text-blue-500 shrink-0" />
              <span>Lokasi Kerja: <strong>Depok, Jawa Barat, Indonesia</strong> (Terbuka untuk Freelance & Fulltime)</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Premium Interactive Developer Card (Dashboard Vibe) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className={`relative overflow-hidden rounded-xl border p-6 transition-all shadow-xl ${
            isDarkMode
              ? "border-slate-800 bg-slate-900/40 backdrop-blur-md"
              : "border-slate-200 bg-white shadow-slate-100"
          }`}>
            {/* Header circles */}
            <div className="flex items-center justify-between mb-6 border-b pb-4 border-slate-800/10">
              <div className="flex space-x-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
                <span className="h-3 w-3 rounded-full bg-green-400/80"></span>
              </div>
              <span className={`text-[10px] font-mono rounded px-2 py-0.5 ${
                isDarkMode ? "bg-slate-950 text-blue-400 border border-slate-900" : "bg-slate-100 text-blue-600"
              }`}>
                status: available
              </span>
            </div>

            {/* Profile badge avatar in card */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-blue-600 font-bold text-white text-xl shadow-md">
                FS
              </div>
              <div className="text-left">
                <h3 className={`text-lg font-bold tracking-tight uppercase ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>Fajar Setiawan</h3>
                <p className={`text-xs font-mono uppercase tracking-wider ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Full-stack Developer</p>
                <p className="text-[10px] text-blue-500 font-mono mt-0.5">Laravel • Golang • React • NextJS</p>
              </div>
            </div>

            {/* Simulated Live Backend Status Monitor */}
            <div className={`rounded border p-4 mb-6 ${
              isDarkMode ? "bg-[#0a101f] border-slate-800" : "bg-[#f8fafc] border-slate-200"
            }`}>
              <div className="flex items-center justify-between text-xs font-semibold mb-3 tracking-wider uppercase font-mono">
                <span className={isDarkMode ? "text-slate-400" : "text-slate-600"}>Live Environment</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              
              <div className="space-y-2 font-mono text-[11px] text-left">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">api_gateway</span>
                  <span className="text-blue-400 shrink-0">Kong [Routing OK]</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">core_service_golang</span>
                  <span className="text-emerald-400 shrink-0">gRPC channel active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">payment_zip_service</span>
                  <span className="text-purple-400 shrink-0">Lumen / ZIPPAY bound</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">search_cluster</span>
                  <span className="text-amber-500 shrink-0">Elasticsearch state</span>
                </div>
              </div>
            </div>

            {/* Dynamic Numeric Statistics blocks */}
            <div className="grid grid-cols-3 gap-3 border-t pt-5 border-slate-800/10">
              {stats.map((st) => (
                <div key={st.label} className="text-center p-2 rounded bg-blue-600/5 border border-blue-500/5">
                  <p className="text-2xl font-mono font-bold tracking-tight text-blue-500">
                    {st.val}
                  </p>
                  <p className={`text-[9px] font-mono uppercase tracking-wider ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
                    {st.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
