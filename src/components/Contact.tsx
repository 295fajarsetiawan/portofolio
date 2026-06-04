import React, { useState } from "react";
import { Mail, Phone, Github, Send, Terminal, ShieldCheck, CheckCircle2 } from "lucide-react";

interface ContactProps {
  isDarkMode: boolean;
  onCopyAction: (text: string, label: string) => void;
}

export default function Contact({ isDarkMode, onCopyAction }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitLogs, setSubmitLogs] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setSubmitLogs([]);

    // Custom simulated pipeline logs in terminal style to match the Backend Persona!
    const logs = [
      "Menginisialisasi SSL / TLS handshake...",
      "Menyusun muatan (payload) JSON...",
      "Mengompres data pesan (Gzip codec)...",
      "Mengenkripsi isi pesan dengan AES-256...",
      "Memasukkan ke dalam antrean RabbitMQ (routing_key: contact_inbox)...",
      "Pesan berhasil terkirim ke fajarsetiawan295@gmail.com!"
    ];

    logs.forEach((logLine, index) => {
      setTimeout(() => {
        setSubmitLogs((prev) => [...prev, logLine]);
        if (index === logs.length - 1) {
          setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setName("");
            setEmail("");
            setMessage("");
          }, 800);
        }
      }, (index + 1) * 450);
    });
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 border-t border-slate-800/10 relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-500 mb-2">Hubungi Saya</p>
          <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl uppercase ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Mari Bekerja Sama
          </h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto mt-4 mb-6"></div>
          <p className={`text-sm font-light leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
            Saya terbuka untuk freelance project, project-based development, konsultasi arsitektur microservices, 
            maupun kerja sama jangka panjang (Full-Time / Part-Time).
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start text-left">
          
          {/* Left Column: Direct Action cards for WhatsApp, Mail, and GitHub */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h3 className={`text-base font-bold uppercase tracking-wider ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
              Saluran Kontak Utama
            </h3>
            
            {/* WhatsApp card */}
            <a
              href="https://wa.me/6287785438713?text=Halo%20Fajar,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20bekerja%20sama."
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-start space-x-4 rounded border p-5 transition-all hover:border-emerald-500/30 ${
                isDarkMode
                  ? "border-slate-800 bg-[#0a101f] hover:bg-slate-900/40"
                  : "border-slate-200 bg-white hover:bg-slate-50 shadow-sm"
              }`}
            >
              <div className="rounded bg-emerald-500/10 p-3 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0 border border-emerald-500/5">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold font-mono uppercase tracking-wider text-emerald-500 mb-1">WhatsApp Chat</p>
                <p className={`text-sm font-bold font-mono ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>+62 877-8543-8713</p>
                <p className={`text-xs mt-1.5 leading-relaxed font-light ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Klik untuk langsung memulai diskusi proyek interaktif di WhatsApp (Tanggapan Instan).
                </p>
              </div>
            </a>

            {/* Email send card */}
            <a
              href="mailto:fajarsetiawan295@gmail.com?subject=Tawaran Kerjasama / Konsultasi TI&body=Halo Fajar,"
              className={`group flex items-start space-x-4 rounded border p-5 transition-all hover:border-blue-500/30 ${
                isDarkMode
                  ? "border-slate-800 bg-[#0a101f] hover:bg-slate-900/40"
                  : "border-slate-200 bg-white hover:bg-slate-50 shadow-sm"
              }`}
            >
              <div className="rounded bg-blue-600/10 p-3 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0 border border-blue-500/5">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold font-mono uppercase tracking-wider text-blue-500 mb-1">Kirim Email</p>
                <p className={`text-sm font-bold font-mono ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>fajarsetiawan295@gmail.com</p>
                <p className={`text-xs mt-1.5 leading-relaxed font-light ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Kirim rincian deskripsi sistem (RFP), dokumen penawaran kontrak, atau penjadwalan interview.
                </p>
              </div>
            </a>

            {/* GitHub profile card */}
            <a
              href="https://github.com/fajarsetiawan295"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-start space-x-4 rounded border p-5 transition-all hover:border-blue-500/30 ${
                isDarkMode
                  ? "border-slate-800 bg-[#0a101f] hover:bg-slate-900/40"
                  : "border-slate-200 bg-white hover:bg-slate-50 shadow-sm"
              }`}
            >
              <div className="rounded bg-blue-600/10 p-3 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0 border border-blue-500/5">
                <Github className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold font-mono uppercase tracking-wider text-blue-500 mb-1">GitHub Repository</p>
                <p className={`text-sm font-bold font-mono ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>github.com/fajarsetiawan295</p>
                <p className={`text-xs mt-1.5 leading-relaxed font-light ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Lihat bukti implementasi code microservices, parsing regex, benchmark engine, dan kontribusi open source.
                </p>
              </div>
            </a>
          </div>

          {/* Right Column: Simulated feedback submit console / Interactive Form */}
          <div className="lg:col-span-7">
            <div className={`rounded border p-6 shadow-xl relative overflow-hidden ${
              isDarkMode
                ? "border-slate-800 bg-slate-900/40 backdrop-blur-md"
                : "border-slate-205 bg-white shadow-sm"
            }`}>
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/10">
                <div className="flex items-center space-x-2">
                  <span className="h-4 w-4 rounded bg-blue-600 flex items-center justify-center">
                    <Terminal className="h-2 w-2 text-white" />
                  </span>
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                    visitor_inquiry_terminal.sh
                  </span>
                </div>
                <div className="flex space-x-1.5">
                  <span className="h-2 w-2 rounded-full bg-slate-300/80"></span>
                  <span className="h-2 w-2 rounded-full bg-slate-300/80"></span>
                </div>
              </div>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className={`block text-[10px] font-mono font-bold mb-1.5 uppercase tracking-wider ${
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      }`}>
                        Nama Anda
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className={`w-full rounded border px-4 py-2.5 text-xs font-mono font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                          isDarkMode
                            ? "border-slate-800 bg-slate-950/50 text-white placeholder-slate-600 focus:border-blue-500"
                            : "border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-450 focus:border-blue-500 focus:bg-white"
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-[10px] font-mono font-bold mb-1.5 uppercase tracking-wider ${
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      }`}>
                        Email Korespondensi
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className={`w-full rounded border px-4 py-2.5 text-xs font-mono font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                          isDarkMode
                            ? "border-slate-800 bg-slate-950/50 text-white placeholder-slate-600 focus:border-blue-500"
                            : "border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-450 focus:border-blue-500 focus:bg-white"
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-[10px] font-mono font-bold mb-1.5 uppercase tracking-wider ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}>
                      Rincian Pesan / Kebutuhan Sistem
                    </label>
                    <textarea
                      required
                      rows={4}
                      disabled={isSubmitting}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Halo Fajar, kami ingin menanyakan ketersediaan Anda untuk integrasi..."
                      className={`w-full rounded border px-4 py-2.5 text-xs font-mono font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                        isDarkMode
                          ? "border-slate-800 bg-slate-950/50 text-white placeholder-slate-600 focus:border-blue-500"
                          : "border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-450 focus:border-blue-500 focus:bg-white"
                      }`}
                    ></textarea>
                  </div>

                  {/* Submission logs dashboard console when submitting */}
                  {isSubmitting && (
                    <div className="rounded bg-slate-950 p-4 font-mono text-[10px] text-blue-400 space-y-1.5 border border-slate-900 text-left">
                      {submitLogs.map((logLine, idx) => (
                        <div key={idx} className="flex items-center space-x-1">
                          <span className="text-slate-600">&gt;</span>
                          <span className={idx === submitLogs.length - 1 ? "text-emerald-400 font-bold" : "font-light"}>
                            {logLine}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {!isSubmitting && (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-center space-x-2 rounded bg-blue-600 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/10 hover:bg-blue-500 transition-all cursor-pointer"
                    >
                      <span>Simulasikan Enkripsi & Kirim</span>
                      <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  )}
                </form>
              ) : (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="h-12 w-12 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 animate-bounce border border-emerald-500/10">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className={`text-base font-bold uppercase tracking-wide mb-1 ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>
                    Pesan Berhasil Terkirim!
                  </h4>
                  <p className={`text-xs max-w-sm mx-auto leading-relaxed mb-6 font-light ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}>
                    Terima kasih telah mencoba pengiriman pesan terenkripsi. Simulasi server andal Fajar berjalan sukses!
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    type="button"
                    className="rounded border border-blue-500/35 px-5 py-2 text-xs font-bold uppercase font-mono tracking-wider text-blue-500 hover:bg-blue-500/5 transition-colors cursor-pointer"
                  >
                    Kirim Pesan Baru
                  </button>
                </div>
              )}

              {/* Safety validation subtitle */}
              <div className="mt-5 flex items-center justify-center space-x-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                <span>Encryption engine: active & validated</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
