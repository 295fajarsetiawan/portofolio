import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Mail, Phone, Sun, Moon, Menu, X, Copy, Check } from "lucide-react";

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onCopyAction: (text: string, label: string) => void;
}

export default function Header({ isDarkMode, onToggleTheme, onCopyAction }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedHeaderItem, setCopiedHeaderItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyHeader = (text: string, label: string) => {
    onCopyAction(text, label);
    setCopiedHeaderItem(label);
    setTimeout(() => setCopiedHeaderItem(null), 2000);
  };

  const navLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Kemampuan", href: "#skills" },
    { name: "Pengalaman", href: "#experience" },
    { name: "Project", href: "#projects" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? isDarkMode
              ? "border-b border-slate-800 bg-[#0f172a]/95 shadow-md backdrop-blur-md"
              : "border-b border-slate-250 bg-white/95 shadow-md backdrop-blur-md"
            : isDarkMode
            ? "bg-transparent border-b border-slate-800/20"
            : "bg-transparent border-b border-slate-200/20"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-6">
          {/* Brand Logo & Title with Geometric square block */}
          <a
            href="#home"
            className="group flex items-center gap-3.5 select-none"
          >
            <div className={`w-11 h-11 flex items-center justify-center font-bold text-lg text-white rounded-lg transition-transform group-hover:scale-105 duration-250 ${
              isDarkMode ? "bg-blue-600" : "bg-blue-600"
            }`}>
              FS
            </div>
            <div className="flex flex-col text-left">
              <span className={`text-lg font-extrabold tracking-tight uppercase leading-none ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}>
                Fajar <span className="text-blue-500">Setiawan</span>
              </span>
              <span className={`text-[9px] font-mono tracking-[0.2em] uppercase mt-1 ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}>
                Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-205 ${
                  isDarkMode
                    ? "text-slate-400 hover:text-blue-400"
                    : "text-slate-500 hover:text-blue-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Direct Copy & Theme Controls (Desktop) */}
          <div className={`hidden lg:flex items-center space-x-4 border-l pl-4 ${
            isDarkMode ? "border-slate-800" : "border-slate-205"
          }`}>
            {/* Quick Email */}
            <div className="relative group">
              <button
                onClick={() => handleCopyHeader("fajarsetiawan295@gmail.com", "Email")}
                className={`flex items-center space-x-1.5 rounded bg-slate-900/50 p-6 rounded-xl border px-3 py-1.5 text-xs font-mono transition-all ${
                  isDarkMode
                    ? "border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                    : "border-slate-200 bg-slate-100 text-slate-700 hover:border-slate-300 hover:bg-slate-200"
                }`}
                title="Salin fajarsetiawan295@gmail.com"
              >
                <Mail className={`h-3.5 w-3.5 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                <span className="text-[11px]">fajarsetiawan295@gmail.com</span>
                {copiedHeaderItem === "Email" ? (
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                  <Copy className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ml-1 text-slate-500" />
                )}
              </button>
            </div>

            {/* Quick Phone */}
            <button
              onClick={() => handleCopyHeader("+6287785438713", "WhatsApp")}
              className={`flex items-center space-x-1.5 rounded bg-slate-900/50 p-6 rounded-xl border px-3 py-1.5 text-xs font-mono transition-all ${
                isDarkMode
                  ? "border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                  : "border-slate-200 bg-slate-100 text-slate-700 hover:border-slate-300 hover:bg-slate-200"
              }`}
              title="Salin +6287785438713"
            >
              <Phone className={`h-3.5 w-3.5 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
              <span className="text-[11px]">+6287785438713</span>
              {copiedHeaderItem === "WhatsApp" ? (
                <Check className="h-3.5 w-3.5 text-emerald-500" />
              ) : (
                <Copy className="h-3 w-3 opacity-0 hover:opacity-100 transition-opacity ml-1 text-slate-500" />
              )}
            </button>

            {/* Quick GitHub Links */}
            <a
              href="https://github.com/fajarsetiawan295"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded p-1.5 border transition-all ${
                isDarkMode
                  ? "border-slate-800 bg-slate-950/40 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900"
                  : "border-slate-200 bg-slate-100 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-200"
              }`}
              title="Kunjungi GitHub Fajar Setiawan"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              type="button"
              className={`rounded-lg p-2.5 transition-all border ${
                isDarkMode
                  ? "border-slate-800 bg-slate-950/40 text-yellow-400 hover:bg-slate-900"
                  : "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
              aria-label="Ubah Tema"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className={`md:hidden rounded-lg p-2.5 transition-all border ${
                isDarkMode
                  ? "border-slate-800 bg-slate-950/40 text-slate-300"
                  : "border-slate-200 bg-slate-100 text-slate-700"
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`fixed top-[73px] left-0 right-0 z-30 border-b md:hidden shadow-xl ${
              isDarkMode
                ? "border-slate-850 bg-slate-950/95 backdrop-blur-lg"
                : "border-slate-200 bg-white/95 backdrop-blur-lg"
            }`}
          >
            <div className="flex flex-col space-y-4 px-6 py-6 text-left">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isDarkMode ? "text-slate-300 hover:text-blue-400" : "text-slate-800 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Quick Contacts inside Hamburger menu for superb mobile access */}
              <div className={`mt-4 pt-4 border-t flex flex-col space-y-3 ${
                isDarkMode ? "border-slate-800" : "border-slate-100"
              }`}>
                <p className={`text-[10px] font-bold uppercase tracking-wider font-mono ${
                  isDarkMode ? "text-slate-500" : "text-slate-400"
                }`}>Info Kontak Cepat</p>
                
                <button
                  onClick={() => {
                    handleCopyHeader("fajarsetiawan295@gmail.com", "Email");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 text-xs font-mono text-left ${
                    isDarkMode ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <Mail className="h-4 w-4 text-blue-500 shrink-0" />
                  <span className="truncate">fajarsetiawan295@gmail.com</span>
                </button>

                <button
                  onClick={() => {
                    handleCopyHeader("+6287785438713", "WhatsApp");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 text-xs font-mono text-left ${
                    isDarkMode ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>+6287785438713</span>
                </button>

                <a
                  href="https://github.com/fajarsetiawan295"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 text-xs font-mono ${
                    isDarkMode ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <Github className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>github.com/fajarsetiawan295</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
