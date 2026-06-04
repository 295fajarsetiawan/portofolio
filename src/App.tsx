import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ExperienceView from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function App() {
  // Default to sleek premium dark mode as it embodies premium backend backend developer systems, 
  // but allow users to easily toggle to high-contrast white themes.
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("fajar-portfolio-theme");
    return saved !== null ? saved === "dark" : true;
  });

  const [toastMessage, setToastMessage] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("fajar-portfolio-theme", isDarkMode ? "dark" : "light");
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleCopyAction = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setToastMessage(`${label} "${text}" telah berhasil disalin ke clipboard!`);
        setIsToastOpen(true);
      })
      .catch((err) => {
        console.error("Gagal menyalin text: ", err);
      });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${
        isDarkMode 
          ? "bg-slate-950 text-slate-100" 
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Premium Header/Navigation bar */}
      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        onCopyAction={handleCopyAction}
      />

      {/* Main layout contents */}
      <main className="relative">
        {/* Hero Section holding primary visual card and swift clipboard triggers */}
        <Hero 
          isDarkMode={isDarkMode} 
          onCopyAction={handleCopyAction} 
        />

        {/* About Fajar */}
        <About 
          isDarkMode={isDarkMode} 
        />

        {/* Dynamic skills grid tabs */}
        <Skills 
          isDarkMode={isDarkMode} 
        />

        {/* Work experience timeline */}
        <ExperienceView 
          isDarkMode={isDarkMode} 
        />

        {/* Portfolio projects catalog */}
        <Projects 
          isDarkMode={isDarkMode} 
        />

        {/* Unified Contact Hub and mock message transmitter */}
        <Contact 
          isDarkMode={isDarkMode} 
          onCopyAction={handleCopyAction} 
        />
      </main>

      {/* Footer component */}
      <Footer 
        isDarkMode={isDarkMode} 
      />

      {/* Stateful animated confirmation alert */}
      <Toast
        message={toastMessage}
        isOpen={isToastOpen}
        onClose={() => setIsToastOpen(false)}
      />
    </div>
  );
}
