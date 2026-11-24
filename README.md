# nku-durum

NKÜ sınıf sunucusunun (yoklama ve uygulama performansı) **kampüs dışından salt okunur görüntüleme** sayfası.

- `index.html`: görüntüleme sayfası. Hiçbir yere veri göndermez; yalnızca `durum.json` dosyasını indirir.
- `durum.json`: sınıf sunucusunun ürettiği dosya. Her öğrencinin satırı, o öğrenciye özel koddan türetilen
  anahtarla AES-256-GCM ile şifrelidir; dosyada öğrenci numarası, ad ya da ders adı açık yazmaz.

Öğrenci, kişisel bağlantısını kampüs ağındayken sınıf sunucusundaki sayfasından alır. Bu depoda giriş,
yoklama ya da katsayı girişi yapılamaz.
