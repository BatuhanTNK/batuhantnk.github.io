# Batuhan Tonk - Kişisel Portfolyo Web Sitesi

Bu proje, Batuhan Tonk'un yeteneklerini, projelerini ve deneyimlerini sergileyen modern, duyarlı (responsive) bir kişisel portfolyo web sitesidir.

## 🚀 Proje Hakkında

Tamamen HTML, CSS ve Vanilla JavaScript kullanılarak geliştirilmiş, proje odaklı bir arayüze sahiptir. Açık/koyu tema ilk açılışta sistem tercihini izler.

### 🌟 Özellikler

- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarla tam uyumlu.
- **Dinamik Tema**: Kullanıcı tercihine göre renk temasını değiştirme özelliği (açık/koyu tema).
- **Formspree Entegrasyonu**: Çalışan bir iletişim formu altyapısı.
- **Erişilebilirlik**: Klavye odağı, içeriğe geç bağlantısı, azaltılmış hareket desteği ve görünür form etiketleri.
- **Proje Odaklı Tasarım**: Seçili çalışmalar, tipografik proje kapakları ve sade içerik hiyerarşisi.

### 🛠️ Kullanılan Teknolojiler

- HTML5
- CSS3 (Vanilla / CSS Değişkenleri)
- JavaScript (ES6+)
- FontAwesome (İkonlar)
- Google Fonts (Bricolage Grotesque ve Manrope)

## 📁 Proje Yapısı

```
MyWebSite/
├── image/        ← Site içerisinde kullanılan görseller ve ikonlar
├── index.html    ← Ana yapıyı oluşturan belge
├── script.js     ← Etkileşimler, animasyonlar ve dinamik menü kontrolleri
└── style.css     ← Web sitesi tema renkleri, tasarımları ve stil dosyası
```

## 🚀 Otomatik Dağıtım (Auto-Deploy)

Bu repoya `main` branch'ine push yaptığınızda site otomatik olarak canlıya alınır:
GitHub Webhook → `hook.batutnk.com.tr` → sunucuda `git pull` → Caddy `batutnk.com.tr` üzerinden servis.


## Yerel önizleme

Proje klasöründe `python -m http.server 4173 --bind 127.0.0.1` çalıştırıp `http://127.0.0.1:4173` adresini açın.

Tasarım kuralları `DESIGN.md`, ürün bağlamı `PRODUCT.md`, değerlendirme ve doğrulamalar `DESIGN-REVIEW.md` içindedir.
