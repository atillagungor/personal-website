import Image from "next/image";
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

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-slate-900 dark:text-white">AG</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Hakkımda</Link>
              <Link href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Deneyim</Link>
              <Link href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Yetenekler</Link>
              <Link href="#education" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Eğitim</Link>
              <Link href="/certificates" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Sertifikalar</Link>
              <Link href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">İletişim</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
                Merhaba, Ben{" "}
                <span className="text-blue-600 dark:text-blue-400">Atilla Güngör</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-slate-600 dark:text-slate-300 font-medium">
                Full Stack Developer
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                .NET & React teknolojileri ile verimli web çözümleri geliştiren, sürekli öğrenmeye odaklı bir yazılım geliştiricisiyim. Backend teknolojilerinde uzmanlaşmaya odaklanarak, gerçek etki yaratan yenilikçi projelerde yer almayı hedefliyorum.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  İletişime Geç
                </a>
                <a
                  href="https://github.com/atillagungor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Projelerimi Gör
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/profilepic.jpg"
                      alt="Atilla Güngör"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Hakkımda</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Profesyonel Profil</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                .NET & React Full Stack Developer olarak, backend geliştirmeye odaklanarak verimli web çözümleri oluşturmaya tutkulu bir geliştiriciyim. Sürekli öğrenmeye ve sektör trendlerini takip etmeye kararlıyım. Amacım, özellikle backend teknolojilerinde kapsamlı deneyim kazanmak ve gerçek etki yaratan yenilikçi projelerde yer almaktır.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Yıl Deneyim</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Sertifika</div>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:ml-auto lg:max-w-md">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Kişisel Bilgiler</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-sm">📧</span>
                  </div>
                  <span className="text-slate-600 dark:text-slate-400">atillaagungorr@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-sm">📍</span>
                  </div>
                  <span className="text-slate-600 dark:text-slate-400">Üsküdar / İstanbul</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-sm">🌍</span>
                  </div>
                  <span className="text-slate-600 dark:text-slate-400">İngilizce - C1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Deneyim</h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Software Developer</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">Ağustos 2024 - Günümüz</span>
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-medium mb-4">Mercanlar Otomotiv</div>
              <div className="space-y-3 text-slate-600 dark:text-slate-400">
                <p className="leading-relaxed">
                  Kapsamlı full-stack geliştirme deneyimi ile modern web uygulamaları geliştiriyorum. Backend&apos;de .NET Core ve C# kullanarak güçlü API&apos;ler tasarlıyor, Gateway yapıları ile mikroservis mimarisi oluşturuyorum.
                </p>
                <p className="leading-relaxed">
                  Frontend tarafında Next.js ve React teknolojileri ile kullanıcı dostu arayüzler geliştiriyor, veritabanı yönetiminde MsSQL ile performanslı veri işlemleri gerçekleştiriyorum.
                </p>
                <p className="leading-relaxed">
                  DevOps süreçlerinde Ubuntu sunucularında deployment işlemleri yapıyor, test süreçlerini yönetiyor ve sistem optimizasyonu için sürekli iyileştirmeler gerçekleştiriyorum.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">.NET Core</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">C#</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">Gateway</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">SQL Server</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">Ubuntu</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">DevOps</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Guest Experience Specialist</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">Temmuz 2021 - Mart 2022</span>
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">Etstur</div>
              <p className="text-slate-600 dark:text-slate-400">
                Müşteri deneyimi ve hizmet kalitesi konularında uzmanlaşarak, müşteri memnuniyetini artırmaya yönelik çalışmalar yaptım.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Yetenekler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Frontend Development</h3>
              <div className="space-y-2">
                {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React/Redux', 'Bootstrap/Tailwind', 'NextJS'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
                         <div className="space-y-4">
               <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Backend Development</h3>
               <div className="space-y-2">
                 {['.NET Core', 'C#', 'ASP.NET', 'Web API', 'CQRS', 'LINQ', 'Entity Framework', 'MsSQL', 'PostgreSQL', 'MySQL', 'Gateway', 'DevOps'].map((skill) => (
                   <div key={skill} className="flex items-center space-x-2">
                     <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                     <span className="text-slate-600 dark:text-slate-400">{skill}</span>
                   </div>
                 ))}
               </div>
             </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Tools & Methodologies</h3>
              <div className="space-y-2">
                {['Git', 'Scrum/Agile', 'Postman/Swagger', 'Filezilla', 'Docker', 'Kubernetes', 'Elasticsearch', 'Putty', 'VSCode', 'VS'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Eğitim</h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Fullstack Developer Education</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">Eylül 2023 - Mart 2024</span>
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">Tobeto</div>
              <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                <li>• 600 saatlik .NET & React eğitim programını tamamladım</li>
                <li>• Backend ve Frontend geliştirme alanlarında final projesi üzerinde çalıştım</li>
                <li>• LMS (Learning Management System) uygulaması geliştirdim</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Web Design and Coding</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">Eylül 2020 - Ağustos 2024</span>
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">Anadolu University</div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Tourist Guide</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">Eylül 2018 - Haziran 2020</span>
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">Kocaeli University</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">İletişim</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Benimle İletişime Geçin</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Projeleriniz için benimle iletişime geçebilir veya sadece merhaba demek isterseniz, aşağıdaki kanallardan ulaşabilirsiniz.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12">
                <a href="mailto:atillaagungorr@gmail.com" className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-6 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                  <span className="text-xl">📧</span>
                  <span>atillaagungorr@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/atilla-gungor/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-6 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                  <span className="text-xl">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/atillagungor" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-6 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                  <span className="text-xl">🐙</span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
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
