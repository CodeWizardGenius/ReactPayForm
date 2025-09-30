# Payment Form (React + Tailwind, Vite)

Görsele birebir uyumlu bir **Ödeme Bilgileri** formu.

## Özellikler
- React + Tailwind
- Controlled inputs (`useState`)
- Ay/Yıl `select` alanları (Ay: 01–12, Yıl: mevcut yıl + 9)
- **Şimdi Öde** butonunda girilen verileri `alert(JSON.stringify(...))` ile gösterir
- `preventDefault` ile sayfa yenilenmesini engeller

## Kurulum
```bash
npm install
npm run dev
```
Ardından tarayıcıda gösterilen yerel adresi açın.

## Proje Yapısı
```
payment-form-react-tailwind/
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ src/
   ├─ index.css
   ├─ main.jsx
   └─ App.jsx
```

## Notlar
- Tasarımda temel Tailwind yardımcı sınıfları kullanılmıştır.
- Validasyon ve kart numarası maskesi basit tutulmuştur; isterseniz Luhn kontrolü ve otomatik boşluklandırma eklenebilir.
