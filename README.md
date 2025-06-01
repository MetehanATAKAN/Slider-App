# 📸 Fotoğraf Slider Uygulaması

Bu proje, [Picsum API](https://picsum.photos/) üzerinden çekilen rastgele fotoğrafları kullanıcıya kaydırılabilir bir arayüzle sunan modern bir React uygulamasıdır. Uygulama **React**, **TypeScript**, **React Query**, **MUI**, **Axios**, **React Toastify** ve **Vitest** teknolojileriyle geliştirilmiştir.

## 🚀 Özellikler

- ✅ Fotoğraflar REST API ile dinamik olarak çekilir
- ✅ Manuel ve Otomatik geçiş modları arasında geçiş yapılabilir
- ✅ Yumuşak geçişli sol/sağ animasyonlar
- ✅ Yüklenme sırasında tam sayfa spinner gösterimi
- ✅ Router yapısı
- ✅ Axios interceptor ile hata yönetimi ve toast bildirimleri
- ✅ Modüler ve yeniden kullanılabilir bileşen yapısı
- ✅ Vitest ile kapsamlı birim testleri

## 🧱 Kullanılan Teknolojiler

| Teknoloji         | Açıklama                                      |
|-------------------|-----------------------------------------------|
| React + TypeScript| Arayüz geliştirme ve tür güvenliği             |
| React Query       | Veri çekme, cache ve otomatik güncellemeler   |
| MUI               | Modern arayüz bileşen kütüphanesi             |
| Axios             | API ile iletişim                              |
| React Toastify    | Kullanıcıya bildirim mesajları gösterme       |
| Vitest            | Hızlı ve modern test çatısı                   |
| Testing Library   | Kullanıcı odaklı test senaryoları              |


## 📁 Klasör Yapısı

src/
├── components/
│ ├── LoadingOutlet.tsx # Yüklenme ekranı bileşeni
│ └── PhotoSlider.tsx # Slider ana bileşeni
├── hooks/
│ └── usePhotos.ts # Fotoğraf verisini çeken özel hook
├── pages/
│ └── Home.tsx # Uygulama ana sayfası
│ └── NotFound.tsx # Notfound hata sayfası
├── services/
│ ├── api.ts # Axios instance ve interceptor
│ └── PhotoService/
│ └── photoService.ts # Fotoğraf verisini çeken servis
├── types/
│ └── photo.ts # Fotoğraf tip tanımı
├── router/
│ └── routes.ts # Sayfa rotaları
└── App.tsx # Ana uygulama bileşeni


## 🧪 Testler

**Vitest** ve **React Testing Library** kullanılarak aşağıdaki bileşenlerin testleri yazılmıştır:

- `PhotoSlider`: Butonlar, mod değişimi, görsel yüklenmesi
- `LoadingOutlet`: Yüklenme ekranının doğru gösterilmesi
- `Home`: Doğru bileşenlerin koşullu render edilmesi
- `NotFound`: Olmayan bir sayfaya gidilmesi 
- `photoService`: API isteklerinin mock ile test edilmesi

## 🚀 Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Uygulamayı çalıştır
npm run dev

# Testleri çalıştır
npx vitest run --coverage


