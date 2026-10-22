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

## 🚀 Yayın adresi

Site GitHub Pages üzerinden yayınlanır: https://batuhantnk.github.io/

GitHub deposu: https://github.com/BatuhanTNK/batuhantnk.github.io
Yayın kaynağı ve dağıtım ayarları deponun **Settings → Pages** bölümünden yönetilir.

## Google Analytics

- GA4 hesabı: **Batuhan Tonk Portfolyo**, mülk: **batuhantnk.github.io**.
- Web akışı: **Batuhan Tonk Portfolyo — Web**, ölçüm kimliği: `G-K2RYCW7V7J`.
- `analytics.js`, Analytics'i yalnızca `batuhantnk.github.io` üzerinde ve ziyaretçi izin verdikten sonra yükler. Yerel önizlemeler Google'a ölçüm göndermez.
- Türkçe/İngilizce sayfa geçişleri `page_view`, dış bağlantılar `click`, e-posta/telefon bağlantıları `contact_click`, başarılı Formspree yanıtları `generate_lead` olarak ölçülür. Form alanlarının içeriği Analytics'e gönderilmez; ölçüm URL'lerinden sorgu parametreleri çıkarılır.
- Sayfa görüntülemeleri uygulamanın hash yönlendiricisinden gönderilir. Çift sayımı ve otomatik form ölçümünü önlemek için web akışında **Geliştirilmiş ölçüm kapalıdır**; `send_page_view: false` kullanılır.
- Ziyaretçi, altbilgideki **Çerez tercihleri** düğmesinden iznini değiştirebilir. Ret durumunda ölçüm durur ve Analytics çerezleri temizlenir. Reklam kişiselleştirme ve Google Signals kodda kapalıdır.
- Davranış kontrolleri: `node tests/analytics.test.cjs`. Bu testler gerçek Analytics veya Formspree istekleri göndermez.


## Yerel önizleme

Proje klasöründe `python -m http.server 4173 --bind 127.0.0.1` çalıştırıp `http://127.0.0.1:4173` adresini açın.

Tasarım kuralları `DESIGN.md`, ürün bağlamı `PRODUCT.md`, değerlendirme ve doğrulamalar `DESIGN-REVIEW.md` içindedir.
