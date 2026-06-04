import { ArrowUp, Github, Mail, Phone } from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t py-12 px-6 lg:px-8 mt-10 transition-all ${
      isDarkMode
        ? "border-slate-805 bg-slate-950 text-slate-400"
        : "border-slate-200 bg-white text-slate-500"
    }`}>
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Author details */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold tracking-tight">
            © {currentYear} <span className={isDarkMode ? "text-slate-200" : "text-slate-800 font-bold"}>Fajar Setiawan</span>. 
            All rights reserved.
          </p>
          <p className="text-xs text-slate-500 font-light mt-1">
            Built with React, Vite, Tailwind CSS, & Motion layout triggers.
          </p>
        </div>

        {/* Floating elements & back to top */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <a
              href="mailto:295fajarsetiawan@gmail.com"
              className="hover:text-blue-500 transition-colors"
              title="Mail Fajar"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/6287785438713"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
              title="WhatsApp Fajar"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/295fajarsetiawan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              title="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          <a
            href="#navbar-header"
            className={`flex items-center space-x-1.5 rounded border px-3 py-1.5 text-xs font-bold uppercase tracking-wider font-mono transition-all ${
              isDarkMode
                ? "border-slate-800 bg-[#0a101f] text-slate-200 hover:bg-slate-900 hover:text-white"
                : "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>

      </div>
    </footer>
  );
}
