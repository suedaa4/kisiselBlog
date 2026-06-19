# 📝 Kişisel Blog / Not API Projesi

Bu proje, **Node.js** ve **Express.js** kullanılarak geliştirilmiş, en temel seviyede dinamik rota (route) ve parametre mantığını anlamayı amaçlayan basit bir backend web servisidir (API).

## 🚀 Özellikler
* Tüm notları listeleme (`GET /notlar`)
* Adres çubuğu üzerinden dinamik olarak yeni not ekleme (`GET /not-ekle/:baslik/:icerik`)
* ID numarasına göre tek bir notu süzerek getirme (`GET /notlar/:id`)

## 🛠️ Kullanılan Teknolojiler
* **Node.js** (Çalışma Ortamı)
* **Express.js** (Web Framework)
* **Nodemon** (Otomatik Yeniden Başlatma Geliştirici Aracı)

---

## 💻 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları sırasıyla takip edebilirsiniz:

1. **Projeyi Klonlayın veya İndirin**
2. **Gerekli Paketleri Yükleyin**
   Proje klasörünün içinde bir terminal açın ve gerekli tüm bağımlılıkları (Express vb.) otomatik yüklemek için şu komutu çalıştırın:
   ```bash
   npm install
   ```
3. **Projeyi Başlatın**
   Sunucuyu `nodemon` ile canlı olarak ayağa kaldırmak için:
   ```bash
   npx nodemon app.js
   ```
4. Tarayıcınızdan `http://localhost:3000/notlar` adresine giderek test etmeye başlayabilirsiniz!

---

## 🔗 Örnek API Kullanımları

| İşlem | URL / Adres | Açıklama |
| :--- | :--- | :--- |
| **Tüm Notları Gör** | `http://localhost:3000/notlar` | Hafızadaki tüm notları JSON formatında listeler. |
| **Yeni Not Ekle** | `http://localhost:3000/not-ekle/Ders/Nodejs` | `Ders` başlığıyla `Nodejs` içerikli yeni bir not oluşturur. |
| **Tek Not Getir** | `http://localhost:3000/notlar/1` | Sadece 1 ID'sine sahip olan notun detayını getirir. |

---
💡 *Bu proje yazılım geliştirme yolculuğunda backend temellerini atmak için hazırlanmıştır.*
