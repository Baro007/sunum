# Yaşlılarda Kırılganlık

Birinci basamakta erken tespit ve müdahale üzerine 15 dakikalık tıp sunumu.

🌐 **Canlı sunum:** [kirilganlik.netlify.app](https://kirilganlik.netlify.app/)

## Sunum Bilgileri

- **Konuşmacı:** Dr. Sadık Barış Adıgüzel
- **Kurum:** Antalya Eğitim ve Araştırma Hastanesi, Aile Hekimliği A.B.D.
- **Danışman:** Uzm. Dr. Nadire Karsavuran
- **Tarih:** 7 Mayıs 2026

## Yapı

13 slayttan oluşur (~15 dk + Q&A buffer):

1. Kapak
2. Açılış Vakası — "Hatice Teyze, 85"
3. Tanım + Komorbidite/Disabilite/Kırılganlık üçgeni
4. Çarpıcı Gerçek (epidemiyoloji)
5. Inflammaging mekanizması + biyobelirteçler
6. Sarkopeni + Yatak Başı Performans Testleri
7. Ayırıcı Tanı: "Bunu Kırılganlık Sanma!"
8. FRAIL Skalası
9. CFS Skalası (Rockwood)
10. Müdahale: Ekle / Çıkar / Reçete Şelalesi
11. Sürpriz Soru → Palyatif Geçiş
12. Cep Algoritması + Hatice Teyze'ye Uygulama + Take-home
13. Kapanış (Atatürk alıntısı)

## Kullanım

### Yerel önizleme

```bash
python3 -m http.server 8000
# Tarayıcıda http://localhost:8000 aç
```

### Klavye kısayolları

| Tuş | İşlev |
|---|---|
| `←` / `→` / `Space` | Slayt değiştir |
| `Home` / `End` | Başa / sona git |
| `N` | Konuşmacı notlarını aç/kapat |

## Bilimsel Kaynaklar

- UpToDate · Frailty (2026), Deprescribing, Drug Prescribing for Older Adults, Approach to the Adult Patient with Fatigue
- ICFSR 2024 International Clinical Practice Guidelines
- BGS Pragmatic Prescribing 2025
- Rockwood K. Clinical Frailty Scale (CMAJ 2005)
- Morley JE. FRAIL Scale (J Nutr Health Aging 2012)
- EWGSOP2 Sarcopenia Guidelines (Cruz-Jentoft 2019)
- AWGS 2025 Consensus

PDF kaynakları repo içinde mevcuttur.

## Teknik

Saf HTML + CSS + JavaScript — bağımlılık yok. Netlify'da statik olarak yayınlanır.
