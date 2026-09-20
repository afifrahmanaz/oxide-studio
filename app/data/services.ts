export interface Package {
  slug: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  packages: Package[];
}

export const categories: Category[] = [
  {
    slug: "website",
    name: "Pengembangan Website",
    description: "Infrastruktur digital berkinerja tinggi untuk skala bisnis yang berbeda.",
    packages: [
      {
        slug: "web-starter",
        name: "Starter",
        price: "Rp 1.500.000",
        description: "Landing page elegan untuk kampanye atau produk spesifik.",
        features: [
          "1 Halaman Landing Page",
          "Desain Premium (UI/UX)",
          "Responsif Mobile & Desktop",
          "Integrasi Tombol WhatsApp",
          "Optimasi Kecepatan",
          "Revisi 2x",
        ]
      },
      {
        slug: "web-business",
        name: "Bisnis",
        price: "Rp 4.500.000",
        description: "Website company profile profesional untuk membangun otoritas.",
        isPopular: true,
        features: [
          "Hingga 5 Halaman Utama",
          "Custom Desain Premium",
          "Panel Admin Content Management",
          "Setup Domain & Hosting (1 Tahun)",
          "Integrasi Formulir Kontak",
          "Basic SEO Setup",
          "Revisi 4x",
        ]
      },
      {
        slug: "web-commerce",
        name: "E-Commerce",
        price: "Rp 9.500.000",
        description: "Toko online lengkap untuk operasional ritel otomatis.",
        features: [
          "Kapasitas Hingga 500+ Produk",
          "Sistem Keranjang Belanja & Checkout",
          "Integrasi Payment Gateway",
          "Perhitungan Ongkos Kirim Otomatis",
          "Dashboard Manajemen Produk & Pesanan",
          "Dukungan SSL Security",
          "Revisi Unlimited (Fase Desain)",
        ]
      }
    ]
  },
  {
    slug: "branding",
    name: "Branding & Identitas Visual",
    description: "Sistem identitas visual yang solid untuk memposisikan merek Anda secara superior.",
    packages: [
      {
        slug: "brand-essential",
        name: "Esensial",
        price: "Rp 2.000.000",
        description: "Identitas dasar untuk meluncurkan merek Anda dengan benar.",
        features: [
          "Desain Logo Utama & Alternatif",
          "Panduan Palet Warna",
          "Panduan Tipografi Dasar",
          "Mockup 3D (3 Variasi)",
          "File Resolusi Tinggi (Vector)",
          "Revisi 3x",
        ]
      },
      {
        slug: "brand-comprehensive",
        name: "Komprehensif",
        price: "Rp 5.500.000",
        description: "Sistem merek lengkap untuk perusahaan berskala menengah ke atas.",
        isPopular: true,
        features: [
          "Seluruh fitur paket Esensial",
          "Buku Panduan Merek (Brand Guidelines)",
          "Desain Kartu Nama & Kop Surat",
          "Template Media Sosial (9 Post)",
          "Desain Seragam/ID Card",
          "Revisi Unlimited (Masa Pengerjaan)",
        ]
      }
    ]
  },
  {
    slug: "legality",
    name: "Legalitas Korporat",
    description: "Infrastruktur hukum yang kokoh untuk melindungi operasional dan aset bisnis Anda.",
    packages: [
      {
        slug: "legal-pt-basic",
        name: "PT Perorangan",
        price: "Rp 1.500.000",
        description: "Pendirian badan usaha untuk pendiri tunggal dengan proses cepat.",
        features: [
          "Sertifikat PT Perorangan",
          "NIB (Nomor Induk Berusaha)",
          "NPWP Perusahaan",
          "Surat Pernyataan Mandiri",
          "Proses 2-3 Hari Kerja",
        ]
      },
      {
        slug: "legal-pt-umum",
        name: "PT Umum",
        price: "Rp 5.000.000",
        description: "Pendirian PT Standar (Minimal 2 pendiri) untuk kredibilitas maksimal.",
        isPopular: true,
        features: [
          "Pengecekan & Pemesanan Nama PT",
          "Akta Pendirian dari Notaris",
          "SK Kemenkumham",
          "NIB (Nomor Induk Berusaha)",
          "NPWP Perusahaan",
          "Proses 7-10 Hari Kerja",
        ]
      },
      {
        slug: "legal-trademark",
        name: "Pendaftaran HAKI",
        price: "Rp 3.500.000",
        description: "Perlindungan hukum mutlak atas nama dan logo merek Anda.",
        features: [
          "Pengecekan Potensi Kelas Merek",
          "Pengajuan Pendaftaran ke DJKI",
          "Sertifikat Bukti Pendaftaran",
          "Pemantauan Status Sertifikat",
        ]
      }
    ]
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    description: "Strategi pemasaran berbasis data untuk mendominasi pasar dan meningkatkan konversi.",
    packages: [
      {
        slug: "marketing-seo",
        name: "SEO & Organik",
        price: "Rp 3.500.000 / bln",
        description: "Optimasi mesin pencari untuk trafik gratis jangka panjang.",
        features: [
          "Riset Kata Kunci (Keyword) Mendalam",
          "Optimasi On-Page & Off-Page",
          "Pembuatan 4 Artikel SEO / Bulan",
          "Audit Teknis Website",
          "Laporan Peringkat & Trafik Bulanan",
        ]
      },
      {
        slug: "marketing-ads",
        name: "Performance Ads",
        price: "Rp 5.000.000 / bln",
        description: "Manajemen iklan berbayar (Meta & Google) untuk hasil instan.",
        isPopular: true,
        features: [
          "Setup Meta Ads & Google Ads",
          "Strategi Penargetan Audiens Spesifik",
          "Pembuatan Copywriting Iklan",
          "A/B Testing Konversi",
          "Laporan & Optimasi ROAS Bulanan",
        ]
      }
    ]
  },
  {
    slug: "ai-business",
    name: "AI for Business",
    description: "Implementasi kecerdasan buatan untuk mengotomatisasi alur kerja dan efisiensi perusahaan.",
    packages: [
      {
        slug: "ai-chatbot",
        name: "AI Chatbot",
        price: "Rp 3.000.000",
        description: "Asisten virtual cerdas untuk melayani pelanggan 24/7 otomatis.",
        features: [
          "Integrasi LLM (ChatGPT/Claude) ke WhatsApp",
          "Training Data dengan Profil Perusahaan",
          "Prompt Engineering Khusus",
          "Setup Flow Percakapan Dasar",
          "Pemeliharaan 1 Bulan Pertama",
        ]
      },
      {
        slug: "ai-automation",
        name: "Workflow Automation",
        price: "Rp 8.500.000",
        description: "Otomatisasi operasional internal bisnis tingkat lanjut dengan AI.",
        isPopular: true,
        features: [
          "Audit Proses Bisnis & Titik Bottleneck",
          "Setup Zapier/Make Integrations",
          "AI Document Processing & Extraction",
          "Otomatisasi Laporan & Email",
          "Sesi Training Penggunaan untuk Tim",
        ]
      }
    ]
  }
];

export const budgetRanges = [
  "Kurang dari Rp 5.000.000",
  "Rp 5.000.000 - Rp 15.000.000",
  "Rp 15.000.000 - Rp 50.000.000",
  "Lebih dari Rp 50.000.000",
];

export const deadlineOptions = [
  "Secepatnya (Kurang dari 2 Minggu)",
  "Bulan Ini (2 - 4 Minggu)",
  "Kuartal Ini (1 - 3 Bulan)",
  "Fleksibel",
];
