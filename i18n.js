const translations = {
  tr: {
    lang: "tr",
    langLabel: "TR",
    otherLang: "en",
    otherLangLabel: "EN",
    htmlLang: "tr",
    pageTitle: "Batuhan Tonk — Full Stack & Mobil Uygulama Geliştirici",
    metaDescription: "Batuhan Tonk'un kişisel portfolyo sitesi. Full Stack Yazılım Geliştirici, React, React Native, JavaScript, TypeScript ve modern web teknolojileri uzmanı.",

    // Route mappings
    routes: {
      anasayfa: "anasayfa",
      hakkimda: "hakkimda",
      yetenekler: "yetenekler",
      deneyimler: "deneyimler",
      sertifikalar: "sertifikalar",
      iletisim: "iletisim"
    },
    routeFromEN: {
      home: "anasayfa",
      about: "hakkimda",
      skills: "yetenekler",
      experience: "deneyimler",
      certificates: "sertifikalar",
      contact: "iletisim"
    },

    // Navigation
    nav: {
      anasayfa: "Ana Sayfa",
      hakkimda: "Hakkımda",
      yetenekler: "Yetenekler",
      deneyimler: "Projeler",
      sertifikalar: "Sertifikalar",
      iletisim: "İletişim"
    },

    // Home
    hero: {
      badge: "Full Stack & Mobil Geliştirici",
      titleLine1: "Fikirden",
      titleLine2: "çalışan ürüne.",
      description: "React ve React Native ile web ve mobil uygulamalar geliştiriyorum. Arayüzden backend'e, AI entegrasyonlarından veri tabanına kadar ürünün bütününü ele alıyorum.",
      ctaPrimary: "Tüm çalışmalar",
      ctaSecondary: "Birlikte çalışalım",
      availability: "Yeni proje ve iş birliklerine açığım",
      selectedTitle: "Seçili çalışmalar",
      aboutTitle: "Arayüzün ötesinde.",
      aboutText: "Yazılım mühendisliği eğitimimi React ekosistemiyle birleştiriyorum. Web ve mobil uygulamalarda arayüz, API ve veri katmanlarının birlikte çalışmasına odaklanıyorum.",
      aboutLink: "Beni daha yakından tanıyın",
      practiceTitle: "Uçtan uca geliştirme",
      practiceText: "Bir ekranın görünümünün yanında, arkasındaki veri akışını ve farklı platformlarda nasıl çalışacağını da düşünüyorum.",
      integrationLabel: "AI & API entegrasyonları",
      skillsLink: "Teknolojileri inceleyin"
    },

    // About
    about: {
      tag: "Hakkımda",
      title: "Ben Kimim?",
      paragraphs: [
        `<strong>Mehmet Akif Ersoy Üniversitesi</strong> Yazılım Mühendisliği bölümünden mezun oldum <span class="highlight">(2022 - 2026)</span>. <strong>React</strong> ekosistemiyle hem modern, performanslı web uygulamaları hem de <strong>React Native</strong> ile cross-platform mobil uygulamalar geliştiriyorum. Bu sayede tek bir teknoloji yığınıyla uçtan uca çözümler sunabiliyorum.`,
        `Profesyonel hedefim; modern web ve mobil teknolojilerini <strong>üretken yapay zeka (GenAI)</strong> çözümleriyle harmanlayarak, işletmeler ve girişimler için ölçeklenebilir, yüksek performanslı ve kullanıcı odaklı dijital ürünler geliştirmektir. Fikirleri konseptten alıp, yayınlanmaya hazır (production-ready) ürünler olarak hayata geçirerek iş ortaklarıma en yüksek katma değeri sağlamayı amaçlıyorum.`
      ],
      highlights: [
        { icon: "fas fa-graduation-cap", title: "Eğitim", text: "Yazılım Mühendisliği, MAKÜ" },
        { icon: "fas fa-briefcase", title: "Güncel Rol", text: "Full Stack Developer" },
        { icon: "fas fa-crosshairs", title: "Odak Alanı", text: "React Ekosistemi & AI" },
        { icon: "fas fa-map-marker-alt", title: "Konum", text: "Kocaeli / Darıca" }
      ]
    },

    // Skills
    skills: {
      tag: "Yetenekler",
      title: "Teknolojiler & Araçlar",
      categories: [
        {
          icon: "fas fa-code",
          title: "Programlama Dilleri",
          tags: [
            { icon: "fab fa-js", label: "JavaScript (ES6+)", color: "yellow" },
            { icon: "fab fa-js", label: "TypeScript (TSX)", color: "blue" },
            { icon: "fab fa-java", label: "Java", color: "red" },
            { icon: "fas fa-code", label: "Kotlin", color: "orange" },
            { icon: "fab fa-html5", label: "HTML", color: "orange" },
            { icon: "fab fa-css3-alt", label: "CSS", color: "purple" }
          ]
        },
        {
          icon: "fas fa-layer-group",
          title: "Web & Mobil Geliştirme",
          description: "React ve Next.js ile web; React Native, Expo ve Kotlin / Jetpack Compose ile mobil uygulamalar geliştiriyorum.",
          tags: [
            { icon: "fab fa-react", label: "React", color: "cyan" },
            { icon: "fab fa-react", label: "React Native", color: "cyan" },
            { icon: "fab fa-react", label: "Next.js", color: "cyan" },
            { icon: "fab fa-android", label: "Jetpack Compose", color: "green" },
            { icon: "fab fa-react", label: "Expo", color: "cyan" },
            { icon: "fab fa-node-js", label: "Node.js", color: "green" }
          ]
        },
        {
          icon: "fas fa-database",
          title: "Veri Tabanı",
          tags: [
            { icon: "fas fa-database", label: "MySQL", color: "blue" },
            { icon: "fas fa-database", label: "PostgreSQL", color: "indigo" },
            { icon: "fas fa-database", label: "Supabase", color: "green" },
            { icon: "fas fa-fire", label: "Firebase", color: "orange" }
          ]
        },
        {
          icon: "fas fa-robot",
          title: "Yapay Zeka & API Entegrasyonu",
          description: "AI servislerini projelere entegre ederek konseptten production-ready ürünlere dönüştürüyorum.",
          tags: [
            { icon: "fas fa-brain", label: "Gemini API", color: "green" },
            { icon: "fas fa-exchange-alt", label: "REST API", color: "green" },
            { icon: "fab fa-google", label: "Google API'ları", color: "red" }
          ]
        },
        {
          icon: "fas fa-brain",
          title: "AI & Vibe Coding",
          description: "Yapay zeka asistanlarını (Antigravity, Claude, Copilot vb.) kullanarak yüksek hız ve verimlilikte yazılım geliştirme.",
          tags: [
            { icon: "fas fa-bolt", label: "Vibe Coding", color: "orange" },
            { icon: "fas fa-atom", label: "Antigravity", color: "purple" },
            { icon: "fas fa-brain", label: "Claude", color: "red" },
            { icon: "fas fa-robot", label: "Copilot", color: "blue" }
          ]
        },
        {
          icon: "fas fa-tools",
          title: "Araçlar",
          tags: [
            { icon: "fab fa-git-alt", label: "Git", color: "orange" },
            { icon: "fas fa-tasks", label: "Agile/Scrum", color: "green" },
            { icon: "fas fa-project-diagram", label: "n8n Otomasyon", color: "pink" },
            { icon: "fas fa-book", label: "Jupyter Notebook", color: "yellow" }
          ]
        }
      ]
    },

    // Experience
    experience: {
      tag: "Deneyimler",
      title: "Projeler & Deneyim",
      items: [
        {
          icon: "fas fa-qrcode",
          badge: "Full Stack Proje",
          badgeCurrent: false,
          date: "Şubat 2026 - Haziran 2026",
          title: "Dinamik QR Kod Platformu",
          role: "Full Stack Developer",
          description: "Gelişmiş QR tasarım aracı, CSV ile toplu kod üretimi, rehbere doğrudan entegre olan dinamik dijital kartvizitler (vCard) ve tam teşekküllü bir admin yönetim/analiz paneli barındıran uçtan uca yönlendirme platformu.",
          tech: ["React", "Node.js", "MySQL", "Sequelize", "REST API"]
        },
        {
          icon: "fas fa-building",
          badge: "Staj",
          badgeCurrent: false,
          date: "Temmuz 2025 - Ağustos 2025",
          title: "Mobil Uygulama Geliştirici",
          role: "EDS BİLİŞİM — Stajyer",
          description: "React Native kullanarak Artırılmış Gerçeklik (AR), react-native-maps ve react-native-sensors ile konum tabanlı (LBS) mobil uygulama geliştirdim. API entegrasyonları ve modern React Hooks yapısını etkin bir şekilde kullandım.",
          tech: ["React Native", "AR", "Maps API", "React Hooks"]
        }
      ],
        "projectsHeader": "Geliştirdiğim projeler",
        "projectsSub": "Web, mobil ve yapay zeka projelerinden gerçek ekranlar.",
        "experienceHeading": "Deneyim",
        "imageLabel": "Ekran görüntüsünü aç",
        "codeLabel": "Kodu incele",
        "siteLabel": "Siteyi aç",
        "screenshotLabel": "Uygulama ekranı",
        "projects": [
          {
            "id": "gameskinai",
            "title": "GameSkinAI",
            "kind": "AI destekli web uygulaması",
            "desc": "Fotoğraf veya karakter konseptini seçilen oyun stiline göre dönüştüren bir AI platformu. Karakter görseli ve prompt üretimini; üretim geçmişi, prompt kütüphanesi ve topluluk galerisiyle bir araya getirir.",
            "features": [
              "Fotoğraf ve konseptten oyun stili dönüşümü",
              "Prompt kütüphanesi, geçmiş ve topluluk galerisi",
              "Supabase ile oturum ve veri yönetimi"
            ],
            "tech": [
              "React",
              "Vite",
              "Tailwind CSS",
              "Supabase",
              "Gemini"
            ],
            "href": "https://github.com/BatuhanTNK/GameSkinAI",
            "image": "image/projects/gameskinai.jpg",
            "imageAlt": "GameSkinAI ana sayfası; karakter dönüşümü örneği ve prompt önizlemesi",
            "format": "web",
            "lang": "React · AI",
            "langIcon": "fab fa-react",
            "icon": "fas fa-gamepad"
          },
          {
            "id": "click-count",
            "title": "Click & Count",
            "kind": "Mobil sayaç ve alışkanlık uygulaması",
            "desc": "Manuel sayaç, geri sayım ve kronometre modlarını birleştiren React Native uygulaması. Kategoriler ve gruplar, hedefler, hatırlatıcılar ve kullanım istatistikleriyle günlük aktivitelerin takibini sağlar.",
            "features": [
              "Manuel sayaç, zamanlayıcı ve kronometre",
              "Kategori, grup, hedef ve hatırlatıcılar",
              "İstatistikler, günlük görevler ve başarımlar"
            ],
            "tech": [
              "React Native",
              "Expo",
              "TypeScript",
              "Zustand"
            ],
            "href": "https://github.com/BatuhanTNK/click_count-",
            "image": "image/projects/click-count.png",
            "imageAlt": "Click & Count uygulamasında sayaç istatistikleri, günlük hedef ve sayaç grupları",
            "format": "mobile",
            "lang": "React Native · Expo",
            "langIcon": "fab fa-react",
            "icon": "fas fa-hand-pointer"
          },
          {
            "id": "falyeri",
            "title": "Falyeri",
            "kind": "Android · Eğlence ve astroloji",
            "desc": "Kotlin ve Jetpack Compose ile geliştirilen, eğlence odaklı bir Android uygulaması. Tarot, kahve falı, rüya ve burç yorumlarını Gemini entegrasyonu, yorum geçmişi ve AI sohbetiyle bir araya getirir.",
            "features": [
              "Tarot, kahve, rüya ve burç yorumları",
              "AI sohbeti ve geçmiş yorumlar",
              "Firebase hesabı, günlük kart ve bildirimler"
            ],
            "tech": [
              "Kotlin",
              "Jetpack Compose",
              "Firebase",
              "Gemini",
              "Room"
            ],
            "href": "https://github.com/BatuhanTNK/falyeri",
            "image": "image/projects/falyeri.png",
            "imageAlt": "Falyeri Android uygulamasının ana ekranında günlük tarot kartı ve giriş serisi",
            "format": "mobile",
            "lang": "Kotlin · Android",
            "langIcon": "fab fa-android",
            "icon": "fas fa-star"
          },
          {
            "id": "ilan-asistani",
            "title": "İlan Asistanı",
            "kind": "AI destekli emlak metni üretimi",
            "desc": "Mülk bilgilerini resmi, samimi ve sosyal medya tonlarında ilan metinlerine dönüştüren web uygulaması. Next.js arayüzünü Gemini ile metin üretimi, Supabase hesapları ve kaydedilen ilan geçmişiyle birleştirir.",
            "features": [
              "Mülk bilgilerinden üç farklı tonda ilan metni",
              "Kaydedilen ilanlar ve metin düzenleme akışı",
              "Supabase oturumları ve kullanım kotası"
            ],
            "tech": [
              "Next.js",
              "React",
              "TypeScript",
              "Supabase",
              "Gemini",
              "Tailwind CSS"
            ],
            "href": "https://github.com/BatuhanTNK/real-estate-assistant",
            "image": "image/projects/ilan-asistani.jpg",
            "imageAlt": "İlan Asistanı ana sayfası; üç farklı tonda emlak ilanı oluşturma tanıtımı",
            "format": "web",
            "lang": "Next.js · Gemini",
            "langIcon": "fab fa-react",
            "icon": "fas fa-house"
          },
          {
            "id": "qr-platform",
            "title": "Dinamik QR Kod Platformu",
            "kind": "Full Stack · QR yönetimi",
            "desc": "QR kod tasarımı, dinamik yönlendirme ve dijital kartvizit yönetimi için geliştirilen platform. CSV ile toplu üretim, tarama analitiği, kullanıcı paneli ve admin araçlarını React arayüzü ile Node.js API üzerinde toplar.",
            "features": [
              "Özelleştirilebilir QR tasarımı ve dinamik vCard",
              "CSV ile toplu üretim ve tarama analitiği",
              "Kullanıcı yönetimi ve admin paneli"
            ],
            "tech": [
              "React",
              "Node.js",
              "Express",
              "MySQL",
              "Sequelize"
            ],
            "href": "https://github.com/BatuhanTNK/qr_cODE",
            "image": "image/projects/qr-platform.jpg",
            "imageVersion": "header-v2",
            "imageAlt": "QR Kod Platformu ana sayfası; QR oluşturma, tarayıcı ve kullanıcı paneli bağlantıları",
            "format": "web",
            "lang": "React · Node.js",
            "langIcon": "fab fa-node-js",
            "icon": "fas fa-qrcode"
          },
          {
            "id": "nqc",
            "title": "NQC Bilişim",
            "kind": "Kurumsal web sitesi",
            "desc": "Yazılım hizmetlerini tanıtan, mobil uyumlu ve çok sayfalı kurumsal web sitesi. Hizmetler, hakkımızda ve iletişim sayfalarını; SEO meta verileri, yapılandırılmış veri ve doğrudan iletişim bağlantılarıyla sunar.",
            "features": [
              "Ana sayfa, hizmetler, hakkımızda ve iletişim",
              "Mobil uyum, SEO ve yapılandırılmış veri",
              "WhatsApp ve e-posta iletişim akışı"
            ],
            "tech": [
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap"
            ],
            "href": "https://github.com/BatuhanTNK/NQC",
            "site": "https://nqcbilisim.com.tr",
            "image": "image/projects/nqc.jpg",
            "imageAlt": "NQC Bilişim ana sayfası; web, mobil ve yazılım hizmetleri tanıtımı",
            "format": "web",
            "lang": "HTML · CSS · JavaScript",
            "langIcon": "fab fa-html5",
            "icon": "fas fa-globe"
          }
        ]
    },

    // CTA
    cta: {
      title: "Bir sonraki projeniz?",
      description: "Web, mobil veya AI entegrasyonu üzerine bir projeniz varsa detaylarını konuşalım.",
      button: "Projeyi konuşalım"
    },

    // Certificates
    certificates: {
      tag: "Sertifikalar",
      title: "Sertifikalar & Eğitimler",
      items: [
        {
          icon: "fas fa-award",
          date: "16 Şubat 2026",
          title: "Algoritma Programlama ve Veri Yapılarına Giriş",
          org: "BTK Akademi",
          desc: "Temel algoritma kavramları, veri yapıları ve problem çözme teknikleri üzerine kapsamlı eğitim.",
          tags: ["Algoritma", "Veri Yapıları", "Problem Çözme"]
        },
        {
          icon: "fas fa-brain",
          date: "10 Şubat 2026",
          title: "Yapay Zekaya Giriş",
          org: "BTK Akademi",
          desc: "Yapay zeka temel kavramları, makine öğrenmesi ve modern AI uygulamaları üzerine eğitim.",
          tags: ["Yapay Zeka", "Makine Öğrenmesi", "AI"]
        }
      ]
    },

    // Contact
    contact: {
      tag: "İletişim",
      title: "Benimle İletişime Geçin",
      intro: "Yeni projeler, iş birlikleri ya da sadece bir merhaba için bana ulaşabilirsiniz.",
      email: "Email",
      phone: "Telefon",
      location: "Konum",
      locationValue: "Kocaeli / Darıca",
      formName: "Adınız",
      formEmail: "Email adresiniz",
      formMessage: "Mesajınız",
      formButton: "Mesaj Gönder",
      formSending: "Gönderiliyor...",
      formSuccess: "Mesajınız gönderildi. İletişime geçtiğiniz için teşekkürler.",
      formError: "Mesaj gönderilemedi. Tekrar deneyin veya e-posta ile ulaşın."
    },

    // Footer
    footer: {
      text: "Tasarım & Geliştirme — Batuhan Tonk © 2026"
    }
  },

  en: {
    lang: "en",
    langLabel: "EN",
    otherLang: "tr",
    otherLangLabel: "TR",
    htmlLang: "en",
    pageTitle: "Batuhan Tonk — Full Stack & Mobile App Developer",
    metaDescription: "Batuhan Tonk's personal portfolio. Full Stack Developer specializing in React, React Native, JavaScript, TypeScript, and modern web technologies.",

    // Route mappings
    routes: {
      home: "home",
      about: "about",
      skills: "skills",
      experience: "experience",
      certificates: "certificates",
      contact: "contact"
    },
    routeFromTR: {
      anasayfa: "home",
      hakkimda: "about",
      yetenekler: "skills",
      deneyimler: "experience",
      sertifikalar: "certificates",
      iletisim: "contact"
    },

    // Navigation
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Projects",
      certificates: "Certificates",
      contact: "Contact"
    },

    // Home
    hero: {
      badge: "Full Stack & Mobile Developer",
      titleLine1: "From an idea",
      titleLine2: "to a working product.",
      description: "I build web and mobile applications with React and React Native. From interfaces and backends to AI integrations and databases, I work across the whole product.",
      ctaPrimary: "All work",
      ctaSecondary: "Let's work together",
      availability: "Open to new projects and collaborations",
      selectedTitle: "Selected work",
      aboutTitle: "Beyond the interface.",
      aboutText: "I combine my software engineering background with the React ecosystem, focusing on how interfaces, APIs, and data work together across web and mobile applications.",
      aboutLink: "A little more about me",
      practiceTitle: "End-to-end development",
      practiceText: "Alongside how a screen looks, I consider the data behind it and how it works across different platforms.",
      integrationLabel: "AI & API integrations",
      skillsLink: "Explore the technologies"
    },

    // About
    about: {
      tag: "About",
      title: "Who Am I?",
      paragraphs: [
        `I graduated with a degree in Software Engineering from <strong>Mehmet Akif Ersoy University</strong> <span class="highlight">(2022 - 2026)</span>. I develop both modern, high-performance web applications with <strong>React</strong> and cross-platform mobile apps with <strong>React Native</strong>, delivering end-to-end solutions using a single technology stack.`,
        `My professional goal is to blend modern web and mobile technologies with <strong>Generative AI</strong> solutions to build scalable, high-performance, and user-centric digital products for businesses and startups. I aim to deliver maximum value to my partners by taking ideas from concept to launch-ready (production-ready) products.`
      ],
      highlights: [
        { icon: "fas fa-graduation-cap", title: "Education", text: "Software Engineering, MAKU" },
        { icon: "fas fa-briefcase", title: "Current Role", text: "Full Stack Developer" },
        { icon: "fas fa-crosshairs", title: "Focus Area", text: "React Ecosystem & AI" },
        { icon: "fas fa-map-marker-alt", title: "Location", text: "Kocaeli / Darica, Turkey" }
      ]
    },

    // Skills
    skills: {
      tag: "Skills",
      title: "Technologies & Tools",
      categories: [
        {
          icon: "fas fa-code",
          title: "Programming Languages",
          tags: [
            { icon: "fab fa-js", label: "JavaScript (ES6+)", color: "yellow" },
            { icon: "fab fa-js", label: "TypeScript (TSX)", color: "blue" },
            { icon: "fab fa-java", label: "Java", color: "red" },
            { icon: "fas fa-code", label: "Kotlin", color: "orange" },
            { icon: "fab fa-html5", label: "HTML", color: "orange" },
            { icon: "fab fa-css3-alt", label: "CSS", color: "purple" }
          ]
        },
        {
          icon: "fas fa-layer-group",
          title: "Web & Mobile Development",
          description: "Building web apps with React and Next.js, and mobile apps with React Native, Expo, and Kotlin / Jetpack Compose.",
          tags: [
            { icon: "fab fa-react", label: "React", color: "cyan" },
            { icon: "fab fa-react", label: "React Native", color: "cyan" },
            { icon: "fab fa-react", label: "Next.js", color: "cyan" },
            { icon: "fab fa-android", label: "Jetpack Compose", color: "green" },
            { icon: "fab fa-react", label: "Expo", color: "cyan" },
            { icon: "fab fa-node-js", label: "Node.js", color: "green" }
          ]
        },
        {
          icon: "fas fa-database",
          title: "Database",
          tags: [
            { icon: "fas fa-database", label: "MySQL", color: "blue" },
            { icon: "fas fa-database", label: "PostgreSQL", color: "indigo" },
            { icon: "fas fa-database", label: "Supabase", color: "green" },
            { icon: "fas fa-fire", label: "Firebase", color: "orange" }
          ]
        },
        {
          icon: "fas fa-robot",
          title: "AI & API Integration",
          description: "Integrating AI services into projects, turning concepts into production-ready products.",
          tags: [
            { icon: "fas fa-brain", label: "Gemini API", color: "green" },
            { icon: "fas fa-exchange-alt", label: "REST API", color: "green" },
            { icon: "fab fa-google", label: "Google APIs", color: "red" }
          ]
        },
        {
          icon: "fas fa-brain",
          title: "AI & Vibe Coding",
          description: "Developing software at high speed and efficiency using AI assistants (Antigravity, Claude, Copilot, etc.).",
          tags: [
            { icon: "fas fa-bolt", label: "Vibe Coding", color: "orange" },
            { icon: "fas fa-atom", label: "Antigravity", color: "purple" },
            { icon: "fas fa-brain", label: "Claude", color: "red" },
            { icon: "fas fa-robot", label: "Copilot", color: "blue" }
          ]
        },
        {
          icon: "fas fa-tools",
          title: "Tools",
          tags: [
            { icon: "fab fa-git-alt", label: "Git", color: "orange" },
            { icon: "fas fa-tasks", label: "Agile/Scrum", color: "green" },
            { icon: "fas fa-project-diagram", label: "n8n Automation", color: "pink" },
            { icon: "fas fa-book", label: "Jupyter Notebook", color: "yellow" }
          ]
        }
      ]
    },

    // Experience
    experience: {
      tag: "Experience",
      title: "Projects & Experience",
      items: [
        {
          icon: "fas fa-qrcode",
          badge: "Full Stack Project",
          badgeCurrent: false,
          date: "February 2026 - June 2026",
          title: "Dynamic QR Code Platform",
          role: "Full Stack Developer",
          description: "An end-to-end redirection platform featuring an advanced QR designer, bulk code generation via CSV, dynamic digital business cards (vCards) with direct contact downloading, and a comprehensive admin management & analytics dashboard.",
          tech: ["React", "Node.js", "MySQL", "Sequelize", "REST API"]
        },
        {
          icon: "fas fa-building",
          badge: "Internship",
          badgeCurrent: false,
          date: "July 2025 - August 2025",
          title: "Mobile App Developer",
          role: "EDS BILISIM — Intern",
          description: "Developed a location-based (LBS) mobile application using React Native with Augmented Reality (AR), react-native-maps, and react-native-sensors. Effectively utilized API integrations and modern React Hooks patterns.",
          tech: ["React Native", "AR", "Maps API", "React Hooks"]
        }
      ],
        "projectsHeader": "Projects I have built",
        "projectsSub": "Real screens from web, mobile, and AI projects.",
        "experienceHeading": "Experience",
        "imageLabel": "Open screenshot",
        "codeLabel": "View code",
        "siteLabel": "Visit website",
        "screenshotLabel": "Application screenshot",
        "projects": [
          {
            "id": "gameskinai",
            "title": "GameSkinAI",
            "kind": "AI-powered web application",
            "desc": "An AI platform that transforms a photo or character concept into a selected game style. It combines character imagery and prompt generation with conversion history, a prompt library, and a community gallery.",
            "features": [
              "Photo and concept-based game-style conversion",
              "Prompt library, history, and community gallery",
              "Supabase authentication and data management"
            ],
            "tech": [
              "React",
              "Vite",
              "Tailwind CSS",
              "Supabase",
              "Gemini"
            ],
            "href": "https://github.com/BatuhanTNK/GameSkinAI",
            "image": "image/projects/gameskinai.jpg",
            "imageAlt": "GameSkinAI homepage with a character transformation example and prompt preview",
            "format": "web",
            "lang": "React · AI",
            "langIcon": "fab fa-react",
            "icon": "fas fa-gamepad"
          },
          {
            "id": "click-count",
            "title": "Click & Count",
            "kind": "Mobile counter & habit tracker",
            "desc": "A React Native application combining manual counters, countdown timers, and stopwatches. Categories and groups, targets, reminders, and usage statistics help users track everyday activities.",
            "features": [
              "Manual counters, countdowns, and stopwatches",
              "Categories, groups, goals, and reminders",
              "Statistics, daily challenges, and achievements"
            ],
            "tech": [
              "React Native",
              "Expo",
              "TypeScript",
              "Zustand"
            ],
            "href": "https://github.com/BatuhanTNK/click_count-",
            "image": "image/projects/click-count.png",
            "imageAlt": "Click & Count app showing counter statistics, a daily goal, and counter groups",
            "format": "mobile",
            "lang": "React Native · Expo",
            "langIcon": "fab fa-react",
            "icon": "fas fa-hand-pointer"
          },
          {
            "id": "falyeri",
            "title": "Falyeri",
            "kind": "Android · Entertainment & astrology",
            "desc": "An entertainment-focused Android app built with Kotlin and Jetpack Compose. It brings together tarot, coffee readings, dream interpretations, and horoscopes with Gemini integration, reading history, and AI chat.",
            "features": [
              "Tarot, coffee, dream, and horoscope readings",
              "AI chat and previous readings",
              "Firebase accounts, a daily card, and notifications"
            ],
            "tech": [
              "Kotlin",
              "Jetpack Compose",
              "Firebase",
              "Gemini",
              "Room"
            ],
            "href": "https://github.com/BatuhanTNK/falyeri",
            "image": "image/projects/falyeri.png",
            "imageAlt": "Falyeri Android home screen with a daily tarot card and check-in streak",
            "format": "mobile",
            "lang": "Kotlin · Android",
            "langIcon": "fab fa-android",
            "icon": "fas fa-star"
          },
          {
            "id": "ilan-asistani",
            "title": "Listing Assistant",
            "kind": "AI real estate copy assistant",
            "desc": "A web application that turns property details into formal, friendly, and social media listing copy. It combines a Next.js interface with Gemini text generation, Supabase accounts, and saved listing history.",
            "features": [
              "Three tones of listing copy from property details",
              "Saved listings and text editing workflow",
              "Supabase accounts and usage quotas"
            ],
            "tech": [
              "Next.js",
              "React",
              "TypeScript",
              "Supabase",
              "Gemini",
              "Tailwind CSS"
            ],
            "href": "https://github.com/BatuhanTNK/real-estate-assistant",
            "image": "image/projects/ilan-asistani.jpg",
            "imageAlt": "Listing Assistant homepage introducing real estate copy generation in three tones",
            "format": "web",
            "lang": "Next.js · Gemini",
            "langIcon": "fab fa-react",
            "icon": "fas fa-house"
          },
          {
            "id": "qr-platform",
            "title": "Dynamic QR Platform",
            "kind": "Full Stack · QR management",
            "desc": "A platform for QR design, dynamic redirects, and digital business cards. It brings CSV batch generation, scan analytics, user dashboards, and administration tools together with a React frontend and Node.js API.",
            "features": [
              "Custom QR design and dynamic vCards",
              "CSV batch generation and scan analytics",
              "User management and an admin dashboard"
            ],
            "tech": [
              "React",
              "Node.js",
              "Express",
              "MySQL",
              "Sequelize"
            ],
            "href": "https://github.com/BatuhanTNK/qr_cODE",
            "image": "image/projects/qr-platform.jpg",
            "imageVersion": "header-v2",
            "imageAlt": "QR Platform homepage with creation, scanner, and account navigation",
            "format": "web",
            "lang": "React · Node.js",
            "langIcon": "fab fa-node-js",
            "icon": "fas fa-qrcode"
          },
          {
            "id": "nqc",
            "title": "NQC Bilisim",
            "kind": "Corporate website",
            "desc": "A responsive, multi-page website presenting software development services. Service, about, and contact pages include SEO metadata, structured data, and direct contact links.",
            "features": [
              "Home, services, about, and contact pages",
              "Responsive layout, SEO, and structured data",
              "WhatsApp and email contact flows"
            ],
            "tech": [
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap"
            ],
            "href": "https://github.com/BatuhanTNK/NQC",
            "site": "https://nqcbilisim.com.tr",
            "image": "image/projects/nqc.jpg",
            "imageAlt": "NQC Bilisim homepage presenting web, mobile, and software services",
            "format": "web",
            "lang": "HTML · CSS · JavaScript",
            "langIcon": "fab fa-html5",
            "icon": "fas fa-globe"
          }
        ]
    },

    // CTA
    cta: {
      title: "What are you building next?",
      description: "Have a web, mobile, or AI integration project in mind? Let's talk about the details.",
      button: "Get In Touch"
    },

    // Certificates
    certificates: {
      tag: "Certificates",
      title: "Certificates & Training",
      items: [
        {
          icon: "fas fa-award",
          date: "February 16, 2026",
          title: "Introduction to Algorithm Programming and Data Structures",
          org: "BTK Academy",
          desc: "Comprehensive training on fundamental algorithm concepts, data structures, and problem-solving techniques.",
          tags: ["Algorithms", "Data Structures", "Problem Solving"]
        },
        {
          icon: "fas fa-brain",
          date: "February 10, 2026",
          title: "Introduction to Artificial Intelligence",
          org: "BTK Academy",
          desc: "Training on fundamental AI concepts, machine learning, and modern AI applications.",
          tags: ["Artificial Intelligence", "Machine Learning", "AI"]
        }
      ]
    },

    // Contact
    contact: {
      tag: "Contact",
      title: "Get In Touch",
      intro: "Feel free to reach out for new projects, collaborations, or just to say hello.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Kocaeli / Darica, Turkey",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      formButton: "Send Message",
      formSending: "Sending...",
      formSuccess: "Your message was sent. Thanks for getting in touch.",
      formError: "Could not send your message. Please try again or contact me by email."
    },

    // Footer
    footer: {
      text: "Design & Development — Batuhan Tonk © 2026"
    }
  }
};

// Canonical route key mapping (language-agnostic keys)
const routeKeys = ["home", "about", "skills", "experience", "certificates", "contact"];

const routeNamesByLang = {
  tr: ["anasayfa", "hakkimda", "yetenekler", "deneyimler", "sertifikalar", "iletisim"],
  en: ["home", "about", "skills", "experience", "certificates", "contact"]
};

// Convert a route slug to its canonical index
function getRouteIndex(slug) {
  const trIdx = routeNamesByLang.tr.indexOf(slug);
  if (trIdx !== -1) return trIdx;
  const enIdx = routeNamesByLang.en.indexOf(slug);
  if (enIdx !== -1) return enIdx;
  return -1;
}

// Get translated route slug by canonical index
function getRouteSlug(lang, index) {
  return routeNamesByLang[lang][index];
}
