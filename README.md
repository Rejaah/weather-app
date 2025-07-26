# 🌦️ React Weather Forecast App

Aplikasi cuaca modern yang dibangun dengan React.js, menyediakan data cuaca real-time, ramalan per jam, dan harian dengan antarmuka yang bersih dan responsif.

### ✨ **[Lihat Aplikasi](https://weather-app-alpha-seven-44.vercel.app)** ✨

## 📝 Deskripsi

Proyek ini adalah sebuah aplikasi web yang memungkinkan pengguna untuk mencari dan melihat informasi cuaca untuk berbagai kota di seluruh dunia. Aplikasi ini menampilkan data cuaca saat ini, ramalan untuk beberapa jam ke depan, dan ramalan harian. Latar belakang aplikasi akan berubah secara dinamis sesuai dengan kondisi cuaca dan waktu (siang/malam) untuk memberikan pengalaman pengguna yang lebih imersif.

## 🚀 Fitur Utama

-   **Pencarian Kota Dinamis:** Cari kota di seluruh dunia dengan saran *autocomplete* yang cerdas.
-   **Data Cuaca Real-time:** Dapatkan informasi cuaca terkini, termasuk temperatur, kelembapan, kecepatan angin, dan tekanan udara.
-   **Lokasi Terkini:** Dapatkan data cuaca untuk lokasi Anda saat ini dengan sekali klik.
-   **Ramalan Cuaca Lengkap:**
    -   **Per Jam:** Tampilan *slider* untuk ramalan cuaca setiap 3 jam.
    -   **Harian:** Accordion interaktif untuk ramalan 5 hari ke depan beserta detailnya.
-   **UI Modern & Responsif:** Tampilan yang bersih dengan efek *glassmorphism* dan desain yang beradaptasi di berbagai ukuran layar, dari desktop hingga mobile.
-   **Latar Belakang Dinamis:** Latar belakang berubah warna sesuai kondisi cuaca (cerah, berawan, hujan) dan waktu (siang/malam).

## 🛠️ Teknologi yang Digunakan

-   **Frontend:** [React.js](https://reactjs.org/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** CSS3
-   **Icons:** [React Feather](https://feathericons.com/)
-   **API:**
    -   [OpenWeatherMap Geocoding API](https://openweathermap.org/api/geocoding-api)
    -   [OpenWeatherMap Forecast API](https://openweathermap.org/forecast5)
-   **Deployment:** [Vercel](https://vercel.com/)

## ⚙️ Instalasi & Menjalankan Proyek

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

**1. Clone Repository**
```bash
git clone [https://github.com/](https://github.com/)Rejaah/weather-app.git
cd weather-app
```
**2. Instal Dependensi**
```bash
npm install
```

**3. Setup Environment Variable**
```bash
# Ganti dengan kunci API OpenWeatherMap Anda
VITE_WEATHER_API_KEY="kunci_api_anda_di_sini"
```

**4. Jalankan Development Server**
```bash
npm run dev
```

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License.
