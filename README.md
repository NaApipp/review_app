# Review App

Aplikasi web untuk menampilkan produk dan memberikan ulasan secara sederhana, aman, dan modern. Review App dirancang sebagai platform ulasan multi-kategori yang memungkinkan pengguna untuk menelusuri produk, membaca ulasan pengguna lain, serta memberikan penilaian dan komentar secara langsung.

Aplikasi ini juga dilengkapi dengan sistem anotasi ulasan yang memungkinkan tim anotator untuk memberi label pada setiap ulasan berdasarkan kategori produk, menjadikannya cocok digunakan sebagai bagian dari pipeline pengolahan data atau penelitian berbasis sentimen.

**Demo Development:** https://mini-review-dev.vercel.app/

**Website Utama:** https://mini-review-app.vercel.app/

---

## Latar Belakang

Banyak platform ulasan yang tersedia saat ini bersifat kompleks dan sulit diintegrasikan ke dalam proses penelitian atau pengumpulan dataset. Review App hadir sebagai solusi ringan yang menggabungkan fungsionalitas ulasan produk dengan sistem anotasi data, sehingga cocok digunakan untuk keperluan akademik, riset sentimen, maupun pengembangan dataset NLP berbasis ulasan produk konsumen.

---

## Fitur Utama

### Fitur Pengguna

- Login dan logout dengan sistem token berbasis sesi
- Melihat daftar produk dengan pagination (9 produk per halaman)
- Melihat detail produk secara lengkap
- Memberikan ulasan dan penilaian (rating) pada produk
- Auto logout otomatis jika pengguna tidak aktif selama 15 menit
- Menambahkan produk baru (khusus Admin)

### Fitur Teknis

- Server Side Rendering (SSR) untuk performa dan SEO yang lebih baik
- Protected Route menggunakan Layout untuk keamanan halaman
- Context API untuk manajemen state autentikasi
- REST API dibangun di atas Next.js API Routes
- Koneksi database menggunakan MongoDB Native Driver
- Sistem multi-sektor: Handphone, Laptop, dan Fashion
- Sistem anotasi ulasan dengan dua level pengguna anotator per sektor

---

## Teknologi yang Digunakan

| Teknologi        | Fungsi                                  |
| ---------------- | --------------------------------------- |
| **Next.js 14+**  | Fullstack React Framework               |
| **TypeScript**   | Konsistensi tipe data dan keamanan kode |
| **MongoDB**      | Database NoSQL                          |
| **Tailwind CSS** | Styling antarmuka pengguna              |
| **Context API**  | State Management untuk autentikasi      |
| **Vercel**       | Platform deployment                     |

### Library Tambahan

| Library                  | Fungsi                    |
| ------------------------ | ------------------------- |
| **Lucide React**         | Ikon antarmuka            |
| **react-type-animation** | Animasi teks bertik       |
| **Mongoose**             | ODM untuk koneksi MongoDB |

---

## Instalasi

### Prasyarat

Pastikan perangkat Anda telah menginstal:

- Node.js versi 18 atau lebih baru
- npm atau yarn
- Akun MongoDB Atlas atau instance MongoDB lokal

### Langkah Instalasi

**1. Clone repository**

```bash
git clone https://github.com/NaApipp/review_app.git
cd review_app
```

**2. Instal dependensi**

```bash
npm install
```

**3. Konfigurasi environment variable**

Buat file `.env.local` di root direktori project dan isi dengan variabel berikut:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret_key
```

**4. Jalankan server pengembangan**

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`.

---

## Cara Penggunaan

### Sebagai Pengguna (Reviewer)

1. Akses halaman login sesuai kategori produk yang ingin diulas:
   - Handphone: `/login-handphone`
   - Laptop: `/login-laptop`
   - Fashion: `/login-fashion`
2. Masukkan kredensial yang telah diberikan.
3. Telusuri daftar produk pada halaman beranda.
4. Klik produk untuk melihat detail dan ulasan yang sudah ada.
5. Isi formulir ulasan untuk memberikan penilaian.

### Sebagai Admin

1. Login melalui halaman dashboard admin.
2. Tambahkan produk baru melalui menu **Add Product**.
3. Data produk akan otomatis tersedia untuk semua pengguna di sektor terkait.

### Sebagai Anotator

1. Login melalui halaman login anotator sesuai sektor dan level pengguna.
2. Akses daftar seluruh ulasan yang telah masuk.
3. Beri label pada setiap ulasan melalui formulir kuesioner yang tersedia.

### Contoh Request API

**Login pengguna (Sektor Handphone)**

```http
POST /api/main/auth/login
Content-Type: application/json

{
  "username": "nama_pengguna",
  "password": "kata_sandi"
}
```

**Mengambil daftar produk**

```http
GET /api/main/product
```

**Menambahkan ulasan**

```http
POST /api/main/review
Content-Type: application/json
Authorization: Bearer <token>

{
  "productId": "id_produk",
  "rating": 4,
  "comment": "Produk ini sangat bagus dan sesuai harapan."
}
```

---

## Struktur Folder

```
review_app/
├── public/                          # Aset statis (gambar, favicon, dll)
├── src/
│   └── app/
│       ├── (dashboard)/             # Halaman tambah produk (Admin)
│       │   └── add-product/
│       ├── (dataset)/               # Halaman tampilan dataset per kategori
│       │   └── dataset/
│       ├── (handphoneSector)/       # Fitur ulasan sektor Handphone
│       │   ├── beranda-handphone/
│       │   └── login-handphone/
│       ├── (laptopSector)/          # Fitur ulasan sektor Laptop
│       │   ├── beranda-laptop/
│       │   └── login-laptop/
│       ├── (fashionSector)/         # Fitur ulasan sektor Fashion
│       │   ├── beranda-fashion/
│       │   └── login-fashion/
│       ├── (Anotatorhandphone)/     # Anotator sektor Handphone - User 1
│       ├── (AnotatorhandphoneUser2)/# Anotator sektor Handphone - User 2
│       ├── (Anotatorlaptop)/        # Anotator sektor Laptop - User 1
│       ├── (AnotatorlaptopUser2)/   # Anotator sektor Laptop - User 2
│       ├── (Anotatorfashion)/       # Anotator sektor Fashion - User 1
│       └── (AnotatorfashionUser2)/  # Anotator sektor Fashion - User 2
│
├── hooks/
│   ├── useAddProduct.ts             # Custom hook untuk manajemen tambah produk
│   └── useAddLaptop.ts              # Custom hook untuk manajemen tambah laptop
│
├── lib/
│   ├── AuthAnotator.ts              # Logika autentikasi anotator
│   ├── AuthDashboard.ts             # Logika autentikasi admin
│   ├── AuthReview.ts                # Logika autentikasi pengguna reviewer
│   ├── mongodb.ts                   # Koneksi MongoDB
│   ├── userAdmin.ts                 # Data kredensial admin
│   ├── userAnotator.ts              # Data kredensial anotator V1
│   ├── userAnotatorV2.ts            # Data kredensial anotator V2
│   └── userReview.ts                # Data kredensial pengguna reviewer
│
├── models/
│   ├── Products.ts                  # Skema validasi data produk
│   └── Reviews.ts                   # Skema validasi data ulasan
│
├── next.config.ts
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## Konfigurasi

Buat file `.env.local` di root direktori project dengan isi sebagai berikut:

```env
# Koneksi database MongoDB
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority

# Secret key untuk JWT
JWT_SECRET=your_secret_key_here
```

> **Catatan:** Jangan pernah menyertakan file `.env.local` ke dalam version control. File ini sudah terdaftar di `.gitignore` secara default oleh Next.js.

---

## Sistem Autentikasi

- Setelah login berhasil, pengguna menerima **token** yang disimpan di **sessionStorage** browser.
- Data pengguna diambil secara otomatis dari endpoint `/api/.../auth/me`.
- Halaman-halaman tertentu dilindungi oleh **Protected Layout** sehingga tidak dapat diakses tanpa token yang valid.
- Jika pengguna tidak aktif selama **15 menit**, sistem akan melakukan **auto logout** secara otomatis.

---

## Dokumentasi API

Dokumentasi API lengkap tersedia dalam file `API Documentation (Mini Review App).docx` di root repository.

### Ringkasan Endpoint

**Sektor Handphone**

| Endpoint                        | Method | Fungsi                         |
| ------------------------------- | ------ | ------------------------------ |
| `/api/main/auth/login`          | POST   | Login pengguna                 |
| `/api/main/auth/logout`         | POST   | Logout pengguna                |
| `/api/main/auth/me`             | GET    | Ambil data pengguna aktif      |
| `/api/main/product`             | GET    | Ambil daftar produk            |
| `/api/main/product/[productId]` | GET    | Ambil detail produk dan ulasan |
| `/api/main/review`              | GET    | Ambil daftar ulasan            |
| `/api/main/review`              | POST   | Tambah ulasan baru             |
| `/api/dashboard/product`        | POST   | Tambah produk (Admin)          |

**Sektor Laptop**

| Endpoint                          | Method | Fungsi                         |
| --------------------------------- | ------ | ------------------------------ |
| `/api/laptop/auth/login`          | POST   | Login pengguna                 |
| `/api/laptop/product`             | GET    | Ambil daftar produk            |
| `/api/laptop/product/[productId]` | GET    | Ambil detail produk dan ulasan |
| `/api/laptop/review`              | POST   | Tambah ulasan baru             |

**Sektor Fashion**

| Endpoint                           | Method | Fungsi                         |
| ---------------------------------- | ------ | ------------------------------ |
| `/api/fashion/auth/login`          | POST   | Login pengguna                 |
| `/api/fashion/product`             | GET    | Ambil daftar produk            |
| `/api/fashion/product/[productId]` | GET    | Ambil detail produk dan ulasan |
| `/api/fashion/review`              | POST   | Tambah ulasan baru             |

**Endpoint Anotator (User 1)**

| Endpoint                                          | Method | Fungsi                         |
| ------------------------------------------------- | ------ | ------------------------------ |
| `/api/anotator-handphone/get-all-review`          | GET    | Ambil seluruh ulasan Handphone |
| `/api/anotator-handphone/review/[reviewId]/label` | PATCH  | Beri label ulasan              |
| `/api/anotator-laptop/get-all-review`             | GET    | Ambil seluruh ulasan Laptop    |
| `/api/anotator-fashion/get-all-review`            | GET    | Ambil seluruh ulasan Fashion   |

**Endpoint Anotator (User 2)**

| Endpoint                                                | Method | Fungsi                         |
| ------------------------------------------------------- | ------ | ------------------------------ |
| `/api/anotator-user2/anotator-handphone/get-all-review` | GET    | Ambil seluruh ulasan Handphone |
| `/api/anotator-user2/anotator-laptop/get-all-review`    | GET    | Ambil seluruh ulasan Laptop    |
| `/api/anotator-user2/anotator-fashion/get-all-review`   | GET    | Ambil seluruh ulasan Fashion   |

**Endpoint Universal / Dataset**

| Endpoint                      | Method    | Fungsi                             |
| ----------------------------- | --------- | ---------------------------------- |
| `/api/dataset/data-laptop`    | GET, POST | Ambil dan tambah dataset Laptop    |
| `/api/dataset/data-handphone` | GET, POST | Ambil dan tambah dataset Handphone |
| `/api/dataset/data-fashion`   | GET, POST | Ambil dan tambah dataset Fashion   |

---

## Deployment

Aplikasi ini dioptimalkan untuk deployment di **Vercel**.

### Langkah Deployment ke Vercel

**1. Push kode ke GitHub**

```bash
git add .
git commit -m "feat: initial deployment"
git push origin main
```

**2. Import project di Vercel**

- Buka https://vercel.com dan login.
- Klik **Add New Project** dan import repository ini.

**3. Tambahkan environment variables**

Di halaman konfigurasi project Vercel, tambahkan variabel berikut pada bagian **Environment Variables**:

```
MONGODB_URI=<nilai_mongodb_uri>
JWT_SECRET=<nilai_jwt_secret>
```

**4. Deploy**

Klik **Deploy**. Vercel akan membangun dan mempublikasikan aplikasi secara otomatis.

Setiap push ke branch `main` akan memicu deployment ulang secara otomatis.

---

## Keamanan dan Praktik Terbaik

- Query database hanya dilakukan di Server Component, bukan di sisi klien.
- State autentikasi diisolasi di Client Component menggunakan Context API.
- Tidak ada akses langsung ke database dari browser pengguna.
- Struktur project dirancang agar mudah diperluas (scalable).

---

## Konvensi Commit

Format pesan commit yang digunakan dalam project ini:

```
type(scope): deskripsi singkat
```

**Tipe yang tersedia:**

| Tipe       | Penggunaan                                     |
| ---------- | ---------------------------------------------- |
| `feat`     | Menambahkan fitur baru                         |
| `fix`      | Memperbaiki bug                                |
| `docs`     | Memperbarui dokumentasi                        |
| `style`    | Memperbaiki format atau gaya kode              |
| `refactor` | Refaktor kode tanpa mengubah fungsionalitas    |
| `test`     | Menambahkan atau memperbaiki pengujian         |
| `chore`    | Perubahan konfigurasi atau task non-fungsional |

**Contoh:**

```
feat(navbar): tambahkan dropdown menu
fix(auth): perbaiki bug auto logout yang terlalu cepat
docs(readme): perbarui panduan instalasi
```

---

## Kontribusi

Kontribusi sangat diterima dan diapresiasi. Berikut langkah-langkah untuk berkontribusi:

1. Fork repository ini.
2. Buat branch baru untuk fitur atau perbaikan Anda:

```bash
git checkout -b feat/nama-fitur
```

3. Lakukan perubahan dan commit sesuai konvensi yang berlaku.
4. Push ke branch Anda:

```bash
git push origin feat/nama-fitur
```

5. Buat Pull Request ke branch `main` dan sertakan deskripsi perubahan yang jelas.

Pastikan kode Anda telah diuji secara lokal sebelum mengajukan Pull Request.

---

## Lisensi

Lisensi untuk project ini belum ditentukan secara eksplisit. Untuk keperluan penggunaan atau distribusi, silakan hubungi pemilik repository secara langsung.

---

## Kontak dan Informasi Pembuat

**Project:** Review App

**Repository:** https://github.com/NaApipp/review_app

**GitHub:** [@NaApipp](https://github.com/NaApipp)

**Demo:** https://mini-review-app.vercel.app/
