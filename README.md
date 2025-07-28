# Atilla Güngör - Kişisel Portföy Sitesi

Bu proje, Atilla Güngör'ün kişisel portföy sitesidir. Modern web teknolojileri kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Modern Tasarım**: Tailwind CSS ile responsive ve modern tasarım
- **Dark Mode**: Otomatik dark mode desteği
- **Performans**: Next.js ile optimize edilmiş performans
- **SEO Dostu**: Arama motoru optimizasyonu
- **Mobil Uyumlu**: Tüm cihazlarda mükemmel görünüm

## 📋 Sayfalar

### Ana Sayfa
- **Hero Section**: Tanıtım ve çağrı butonları
- **Hakkımda**: Profesyonel profil ve kişisel bilgiler
- **Deneyim**: İş deneyimleri ve çalışma geçmişi
- **Yetenekler**: Teknik beceriler ve teknolojiler
- **Eğitim**: Eğitim geçmişi ve sertifikalar
- **İletişim**: İletişim bilgileri ve sosyal medya linkleri

### Sertifikalar Sayfası
- Tüm sertifikaların detaylı listesi
- Kategorilere ayrılmış düzen
- Görsel kartlar ile modern görünüm

## 🛠️ Teknolojiler

- **Next.js 15**: React framework
- **TypeScript**: Tip güvenliği
- **Tailwind CSS 4**: Modern CSS framework
- **Geist Font**: Google Fonts entegrasyonu

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone [repository-url]
cd personal-website
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🚀 Deployment

### Vercel (Önerilen)
1. [Vercel](https://vercel.com) hesabı oluşturun
2. GitHub repository'nizi bağlayın
3. Otomatik deployment başlayacaktır

### Netlify
1. [Netlify](https://netlify.com) hesabı oluşturun
2. GitHub repository'nizi bağlayın
3. Build komutu: `npm run build`
4. Publish directory: `.next`

### Diğer Platformlar
- **GitHub Pages**: Static export kullanın
- **AWS S3**: Static hosting
- **Firebase Hosting**: Google'ın hosting servisi

## 📁 Proje Yapısı

```
personal-website/
├── src/
│   ├── pages/
│   │   ├── index.tsx          # Ana sayfa
│   │   ├── certificates.tsx   # Sertifikalar sayfası
│   │   └── _app.tsx          # App wrapper
│   └── styles/
│       └── globals.css        # Global stiller
├── public/                    # Statik dosyalar
├── package.json
└── README.md
```

## 🎨 Özelleştirme

### Renkler
Ana renk paleti `src/styles/globals.css` dosyasında tanımlanmıştır:
- Primary: Blue (#3B82F6)
- Background: Slate gradients
- Text: Slate variations

### İçerik Güncelleme
- Ana sayfa içeriği: `src/pages/index.tsx`
- Sertifikalar: `src/pages/certificates.tsx`
- Kişisel bilgiler: Her iki dosyada da güncellenebilir

## 📱 Responsive Tasarım

Site aşağıdaki breakpoint'lerde optimize edilmiştir:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Geliştirme Komutları

```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Production build
npm run start    # Production sunucusu
npm run lint     # ESLint kontrolü
```

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Email**: atillaagungorr@gmail.com
- **LinkedIn**: [Atilla Güngör](https://www.linkedin.com/in/atilla-gungor/)
- **GitHub**: [atillagungor](https://github.com/atillagungor)

---

© 2024 Atilla Güngör. Tüm hakları saklıdır.
