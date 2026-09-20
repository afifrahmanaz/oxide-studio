import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const steps = [
  {
    num: "01",
    icon: "forum",
    title: "Konsultasi & Analisis",
    subtitle: "Sampaikan Visi dan Kendala Bisnis Anda",
    description:
      "Tahap awal yang krusial. Anda dapat menceritakan secara rinci apa yang menjadi tujuan maupun hambatan bisnis Anda melalui formulir resmi, sesi konsultasi WhatsApp, atau pertemuan langsung. Konsultan kami akan mendengarkan dan menganalisis kebutuhan spesifik Anda.",
    details: [
      "Pengisian formulir Permintaan Penawaran",
      "Sesi konsultasi mendalam",
      "Analisis kebutuhan bisnis",
      "Pemetaan solusi awal",
    ],
  },
  {
    num: "02",
    icon: "fact_check",
    title: "Kurasi Mitra & Solusi",
    subtitle: "Pemilihan Vendor dan Penyesuaian Strategi",
    description:
      "Berdasarkan analisis kebutuhan, tim OXIDE akan menyeleksi mitra profesional dari jaringan terkurasi kami yang memiliki kualifikasi paling tepat. Kami menyusun strategi eksekusi yang selaras dengan anggaran dan tenggat waktu Anda.",
    details: [
      "Seleksi mitra profesional terverifikasi",
      "Penyesuaian spesifikasi dengan anggaran",
      "Penyusunan timeline kerja",
      "Negosiasi dan penawaran transparan",
    ],
  },
  {
    num: "03",
    icon: "dashboard_customize",
    title: "Manajemen Proyek Tersentralisasi",
    subtitle: "Pengawasan Eksekusi Secara Menyeluruh",
    description:
      "Setelah penawaran disetujui, manajer proyek OXIDE mengambil alih seluruh proses operasional. Dari *briefing* teknis kepada mitra hingga kontrol kualitas berlapis, kami memastikan proyek berjalan sesuai standar tanpa merepotkan Anda.",
    details: [
      "Briefing teknis dan pengarahan mitra",
      "Pengawasan progres secara berkala",
      "Kontrol kualitas internal (Quality Control)",
      "Satu pintu komunikasi yang efisien",
    ],
  },
  {
    num: "04",
    icon: "workspace_premium",
    title: "Penyerahan Hasil (Handover)",
    subtitle: "Penyelesaian Proyek dan Serah Terima",
    description:
      "Proyek yang telah memenuhi standar kualitas terbaik akan diserahkan kepada Anda. Apabila terdapat penyesuaian akhir yang diperlukan, tim kami siap mengakomodasinya hingga hasil akhir benar-benar memuaskan ekspektasi bisnis Anda.",
    details: [
      "Review bersama atas hasil akhir",
      "Proses revisi yang terstruktur",
      "Serah terima aset dan dokumentasi",
      "Dukungan pasca-penyerahan",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-[-15%] top-[-15%] h-[60vh] w-[60vh] bg-blue-500/10 blur-[120px] rounded-full opacity-60" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-4 block">
            Metodologi Kerja
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Fokus Pada Visi Anda, <br />
            <span className="italic text-blue-400">Kami Eksekusi Sisanya.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Sistem operasional OXIDE dirancang untuk memberikan efisiensi maksimal. Dari identifikasi masalah hingga penyelesaian proyek akhir, seluruh proses dikelola oleh satu pintu.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-0 relative">
            {steps.map((step, i) => (
              <div key={step.num} className="group relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-px bg-slate-200 lg:left-[72px]" />
                )}

                <div className="relative grid lg:grid-cols-12 gap-8 py-16">
                  {/* Left: Number & Icon */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
                    <div className="size-16 flex items-center justify-center bg-white border border-slate-200 rounded-sm group-hover:border-blue-600 transition-all duration-500 relative z-10 shadow-sm">
                      <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-blue-600 transition-colors">
                        {step.icon}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-serif font-bold text-slate-400">{step.num}</span>
                      <h2 className="font-serif text-2xl md:text-3xl text-slate-900 mt-1">{step.title}</h2>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="lg:col-span-9 lg:pl-8">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-3">{step.subtitle}</p>
                    <p className="text-slate-600 font-light leading-relaxed text-lg mb-8">{step.description}</p>

                    {/* Detail points */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-3 bg-white p-5 rounded-sm border border-slate-100 shadow-sm">
                          <span className="material-symbols-outlined text-green-600 text-[18px] mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                            check_circle
                          </span>
                          <span className="text-sm text-slate-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {i < steps.length - 1 && <div className="border-b border-slate-200 ml-0 lg:ml-64" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-b border-slate-200 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-slate-500 text-lg font-light max-w-md mx-auto mb-10 leading-relaxed">
            Langkah pertama untuk mentransformasi bisnis Anda dimulai dengan sebuah diskusi sederhana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors text-xs font-bold uppercase tracking-widest rounded-sm"
            >
              Minta Penawaran Formal
            </Link>
            <a
              href="https://wa.me/message/D456YXRE63TPJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors text-xs font-bold uppercase tracking-widest rounded-sm"
            >
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
