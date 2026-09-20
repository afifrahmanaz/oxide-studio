export interface WebPortfolioItem {
  id: string;
  clientName: string;
  title: string;
  category: string;
  image: string;
  url: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const webPortfolio: WebPortfolioItem[] = [
  {
    id: "ohh-web",
    clientName: "One Hundred Honey",
    title: "E-Commerce Website",
    category: "Web Development",
    image: "/website/ONEHUNDRED.png",
    url: "https://onehundredhoney-web.vercel.app/",
    testimonial: {
      quote: "Desain website kami berhasil meningkatkan nilai jual produk secara instan. Alur pembelanjaan mulus, performa super cepat.",
      author: "Manajemen OHH",
      role: "Direktur Produk",
    }
  },
  {
    id: "maimon-web",
    clientName: "Maimon",
    title: "Platform Penjualan Digital",
    category: "Produk Digital",
    image: "/images/portfolio/maimon.png",
    url: "https://maimon-eosin.vercel.app/",
    testimonial: {
      quote: "Sistem distribusi produk digital kami menjadi sangat mulus. Desainnya intuitif dan proses checkout terintegrasi sempurna.",
      author: "Maimon",
      role: "Kreator Produk",
    }
  },
  {
    id: "trl-web",
    clientName: "Taman Ramah Lansia",
    title: "Portal Informasi Publik",
    category: "Web Development",
    image: "/images/portfolio/taman-ramah-lansia.png",
    url: "https://taman-ramah-lansia.vercel.app/",
    testimonial: {
      quote: "Website yang sangat informatif dan ramah lansia. Eksekusi OXIDE sangat memuaskan dan tepat sasaran audiens kami.",
      author: "Humas Yayasan",
      role: "Divisi Komunikasi",
    }
  },
  {
    id: "anjayo-web",
    clientName: "Anjayo Residence",
    title: "Company Profile Properti",
    category: "Web Development",
    image: "/images/portfolio/anjayoresidence.png",
    url: "https://anjayoresidence.vercel.app/",
    testimonial: {
      quote: "OXIDE berhasil menerjemahkan kemewahan hunian kami ke dalam desain elegan. Sangat mempermudah tim sales kami.",
      author: "Manajemen Anjayo",
      role: "Direktur Marketing",
    }
  },
  {
    id: "salad-web",
    clientName: "Salad Sayur Fresh",
    title: "Landing Page Kuliner",
    category: "Web Development",
    image: "/website/SALAD SAYUR BELL.png",
    url: "https://salad-sayur-new.vercel.app/#salad",
    testimonial: {
      quote: "Konversi pesanan dari landing page ini meningkat drastis berkat copywriting dan tata letak strategis dari OXIDE.",
      author: "Tim Salad Sayur",
      role: "Manajer Operasional",
    }
  },
  {
    id: "smpn2-web",
    clientName: "SMPN 2 Pangkalpinang",
    title: "Portal Akademik Sekolah",
    category: "Web Development",
    image: "/images/portfolio/smpn2.png",
    url: "https://smpn2-pkp.vercel.app/",
    testimonial: {
      quote: "Siswa dan guru kini bisa mengakses informasi akademik melalui antarmuka yang sangat modern dan cepat.",
      author: "Humas SMPN 2",
      role: "Kepala Informasi",
    }
  }
];

export interface BrandingClientGroup {
  clientName: string;
  images: string[];
}

export const brandingPortfolio: BrandingClientGroup[] = [
  {
    clientName: "One Hundred Honey",
    images: [
      "/Branding/onehundredbrand/Logo.jpg",
      "/Branding/onehundredbrand/REKOM.png",
      "/Branding/onehundredbrand/23.png",
      "/Branding/onehundredbrand/24.png",
      "/Branding/onehundredbrand/25.png",
      "/Branding/onehundredbrand/26.png",
      "/Branding/onehundredbrand/ONEHUNDRED. (1).png",
      "/Branding/onehundredbrand/ONEHUNDRED..png",
    ]
  },
  {
    clientName: "Maimon",
    images: [
      "/Branding/maimonbrand/maimon logo.png",
      "/Branding/maimonbrand/1.png",
      "/Branding/maimonbrand/4.png",
      "/Branding/maimonbrand/8.png",
    ]
  },
  {
    clientName: "Taman Ramah Lansia",
    images: [
      "/Branding/ramahtamanlansia/logo_taman_ramah_lansia_1768937159444.png",
      "/Branding/ramahtamanlansia/Flyer Taman Ramah Lansia.jpg",
      "/Branding/ramahtamanlansia/TAMAN RAMAH LANSIA (1).png",
      "/Branding/ramahtamanlansia/Taman ramahh.png",
    ]
  }
];
