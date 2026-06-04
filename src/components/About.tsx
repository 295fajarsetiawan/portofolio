import { motion } from "motion/react";
import { Server, Cpu, Database, Compass, CheckCircle } from "lucide-react";

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const philosophies = [
    {
      icon: <Server className="h-5 w-5 text-blue-500" />,
      title: "Microservices Architecture",
      desc: "Menyukai transisi monolith ke microservice untuk andal, scale-out horizontal, dan isolasi kegagalan modul.",
    },
    {
      icon: <Database className="h-5 w-5 text-emerald-500" />,
      title: "Database Optimization",
      desc: "Menguasai relational database index, normalisasi, pencarian teks Elasticsearch, dan caching state.",
    },
    {
      icon: <Cpu className="h-5 w-5 text-purple-500" />,
      title: "Clean Code & Security",
      desc: "Menerapkan standard pertahanan API, JWT, Kong Gateway, routing aman, dan penjaluran data biner gRPC.",
    },
    {
      icon: <Compass className="h-5 w-5 text-blue-500" />,
      title: "Continuous Exploration",
      desc: "Selalu antusias mempelajari ecosystem baru seperti Golang, .NET Core, Next.js, dan solusi enterprise modern.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8 border-t border-slate-800/10 relative">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Heading Branding */}
          <div className="lg:col-span-12 flex flex-col items-center text-center space-y-4 mb-8">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-500">About Me</p>
            <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl uppercase ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              Tentang Saya
            </h2>
            <div className="h-1 w-12 bg-blue-500"></div>
          </div>

          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            <p className={`text-lg font-light leading-relaxed ${
              isDarkMode ? "text-slate-300" : "text-slate-700"
            }`}>
              Saya adalah developer yang haus akan ilmu, pekerja keras, dan terus belajar dari setiap tantangan yang dihadapi. 
              Sebagai insinyur perangkat lunak, saya fokus untuk menjembatani logika bisnis dengan infrastruktur backend yang efisien.
            </p>
            <p className={`text-sm leading-relaxed font-light ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}>
              Memiliki rekam jejak sebagai Backend Developer, System Engineer, Trainer Robotic Education, hingga Full-Stack Developer pada various projects web portal, mobile API gateway, admin dashboard, e-commerce enterprise, dan integrasi finansial.
            </p>
          </div>

          {/* Right Column: Values Grid */}
          <div className="lg:col-span-7 text-left">
            <div className="grid gap-6 sm:grid-cols-2">
              {philosophies.map((phil, idx) => (
                <div
                  key={phil.title}
                  className={`rounded border p-5 transition-all hover:border-blue-500/30 ${
                    isDarkMode
                      ? "border-slate-800 bg-[#0a101f] hover:bg-slate-900/45"
                      : "border-slate-200 bg-white hover:bg-slate-50 shadow-sm"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600/5 mb-4 shrink-0 border border-blue-500/5">
                    {phil.icon}
                  </div>
                  <h3 className={`text-sm font-bold uppercase tracking-wider mb-1.5 ${
                    isDarkMode ? "text-slate-100" : "text-slate-800"
                  }`}>
                    {phil.title}
                  </h3>
                  <p className={`text-xs leading-relaxed font-light ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}>
                    {phil.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick trust banner */}
            <div className={`mt-8 rounded border p-4 flex items-start space-x-3 text-left ${
              isDarkMode ? "border-slate-800 bg-[#0a101f]" : "border-blue-200 bg-slate-50"
            }`}>
              <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className={`font-semibold uppercase tracking-wider text-[10px] block mb-1 ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>Penyelesaian Masalah Tangguh:</span>
                <span className={isDarkMode ? "text-slate-400" : "text-slate-600"}> Berpengalaman dan terbiasa bekerja di bawah tenggat waktu ketat untuk mengurai isu load server tinggi, query mati (deadlock), sinkronisasi inventory, atau integrasi pihak ketiga.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
