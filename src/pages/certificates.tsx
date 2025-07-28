import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const certificates = [
  {
    name: "Web Applications with ASP.NET",
    issuer: "Codecademy",
    category: "Backend Development"
  },
  {
    name: "Web Apps with React and Redux",
    issuer: "Codecademy",
    category: "Frontend Development"
  },
  {
    name: "Web Development Basics",
    issuer: "Codecademy",
    category: "Web Development"
  },
  {
    name: "API and API Test Certificate",
    issuer: "BTK Akademi",
    category: "API Development"
  },
  {
    name: "Git & Github",
    issuer: "BTK Akademi",
    category: "Version Control"
  },
  {
    name: "Game Development with Unity",
    issuer: "BTK Akademi",
    category: "Game Development"
  },
  {
    name: "Version Control Systems and Portfolio",
    issuer: "Global AI Hub",
    category: "Version Control"
  },
  {
    name: "Komple Uygulamalı Web Geliştirme Eğitimi",
    issuer: "Udemy",
    category: "Web Development"
  },
  {
    name: "Python & Data Analytics",
    issuer: "Cisco",
    category: "Data Science"
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco",
    category: "Data Science"
  },
  {
    name: "Introduction to Data Science",
    issuer: "Cisco",
    category: "Data Science"
  }
];

export default function Certificates() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">AG</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Hakkımda</Link>
              <Link href="/#experience" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Deneyim</Link>
              <Link href="/#skills" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Yetenekler</Link>
              <Link href="/#education" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Eğitim</Link>
              <Link href="/#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">İletişim</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Sertifikalarım
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Sürekli öğrenme ve gelişim odaklı yaklaşımım doğrultusunda edindiğim sertifikalar ve eğitimler.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-xl">🏆</span>
                  </div>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">
                    {cert.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Atilla Güngör. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
} 