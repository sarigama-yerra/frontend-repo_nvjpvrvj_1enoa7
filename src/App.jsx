import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Programs, Transparency, Donate, Extras } from './components/Sections';

const translations = {
  id: {
    nav: {
      aria: 'Navigasi utama',
      about: 'Tentang',
      programs: 'Program',
      transparency: 'Transparansi',
      contact: 'Kontak',
      donate: 'Donasi',
      whatsapp: 'WhatsApp',
      switchLang: 'Ganti bahasa ke Inggris',
    },
    hero: {
      title: 'Yadufa — Yayasan Peduli Yatim dan Dhuafa',
      subtitle: 'Melayani anak yatim dan kaum dhuafa melalui program pendidikan, santunan, dan kepedulian sosial. Transparan, amanah, dan berdampak.',
      ctaDonate: 'Donasi Sekarang',
      ctaLearn: 'Pelajari Lebih Lanjut',
    },
    about: {
      title: 'Tentang Yadufa',
      desc: 'Profil singkat, nilai, dan struktur organisasi.',
      p1: 'Yadufa adalah yayasan Islam yang berkhidmat untuk anak yatim dan kaum dhuafa dengan asas amanah dan profesional.',
      p2: 'Kami berkomitmen pada transparansi dan akuntabilitas untuk memastikan setiap rupiah sampai pada yang berhak.',
      values1: 'Amanah & Transparan',
      values2: 'Berkelanjutan & Terukur',
      values3: 'Berbasis Sunnah & Kemaslahatan',
      orgTitle: 'Struktur Inti',
      deptsTitle: 'Departemen',
      roles: { ketua: 'Ketua', wakil: 'Wakil', sekretaris: 'Sekretaris', bendahara: 'Bendahara' },
    },
    programs: {
      title: 'Program',
      desc: 'Inisiatif utama yang sedang berjalan.',
      food: 'Paket Pangan',
      foodDesc: 'Distribusi paket sembako untuk keluarga dhuafa.',
      orphan: 'Bina Yatim',
      orphanDesc: 'Pembinaan karakter, beasiswa, dan kebutuhan dasar.',
      education: 'Beasiswa & Dakwah',
      educationDesc: 'Dukungan pendidikan dan kegiatan keagamaan.',
    },
    transparency: {
      title: 'Transparansi & Laporan',
      desc: 'Laporan bulanan, audit, dan buku besar publik sederhana.',
      reportNote: 'Laporan ringkas ditampilkan di bawah. Laporan lengkap tersedia untuk diunduh.',
      download: 'Unduh PDF',
      disclaimer: 'Data contoh. Sistem lengkap akan menampilkan transaksi real-time dan laporan terverifikasi.',
      table: { date: 'Tanggal', type: 'Jenis', amount: 'Jumlah', note: 'Catatan' },
      ledger: { donation: 'Donasi Masuk', expense: 'Pengeluaran', foodPack: 'Paket pangan 100 keluarga' },
    },
    donate: {
      title: 'Donasi Aman',
      desc: 'Satu kali atau bulanan. Metode pembayaran Indonesia (QRIS, VA, E-wallet).',
      aria: 'Formulir donasi',
      type: 'Jenis Donasi',
      oneTime: 'Satu Kali',
      monthly: 'Bulanan',
      amount: 'Nominal (IDR)',
      name: 'Nama Lengkap',
      method: 'Metode Pembayaran',
      pay: 'Lanjutkan Pembayaran',
      security: 'Pembayaran dienkripsi. Bukti donasi & tanda terima akan dikirim ke email Anda.',
    },
    extras: {
      title: 'Berita, Galeri, & Kontak',
      desc: 'Ikuti kabar terbaru atau hubungi kami.',
      news: 'Berita/Blog',
      newsDesc: 'Artikel kegiatan dan laporan.
',
      gallery: 'Galeri',
      galleryDesc: 'Dokumentasi foto & video program.',
      view: 'Lihat Selengkapnya',
      contact: 'Kontak',
      contactDesc: 'Tanyakan apapun via WhatsApp, kami siap membantu.',
    },
  },
  en: {
    nav: {
      aria: 'Main navigation',
      about: 'About',
      programs: 'Programs',
      transparency: 'Transparency',
      contact: 'Contact',
      donate: 'Donate',
      whatsapp: 'WhatsApp',
      switchLang: 'Switch language to Indonesian',
    },
    hero: {
      title: 'Yadufa — Islamic Foundation for Orphans and the Needy',
      subtitle: 'Serving orphans and the needy through education, relief, and social care. Transparent, trustworthy, and impactful.',
      ctaDonate: 'Donate Now',
      ctaLearn: 'Learn More',
    },
    about: {
      title: 'About Yadufa',
      desc: 'Quick profile, values, and organization structure.',
      p1: 'Yadufa is an Islamic foundation dedicated to serving orphans and the needy with trust and professionalism.',
      p2: 'We commit to transparency and accountability to ensure every donation reaches those in need.',
      values1: 'Trustworthy & Transparent',
      values2: 'Sustainable & Measurable',
      values3: 'Rooted in Sunnah & Public Good',
      orgTitle: 'Core Roles',
      deptsTitle: 'Departments',
      roles: { ketua: 'Chief', wakil: 'Deputy', sekretaris: 'Secretary', bendahara: 'Treasurer' },
    },
    programs: {
      title: 'Programs',
      desc: 'Our main ongoing initiatives.',
      food: 'Food Aid',
      foodDesc: 'Staple food packages for needy families.',
      orphan: 'Orphan Care',
      orphanDesc: 'Character building, scholarships, and basic needs.',
      education: 'Scholarship & Da’wah',
      educationDesc: 'Support for education and religious activities.',
    },
    transparency: {
      title: 'Transparency & Reports',
      desc: 'Monthly reports, audits, and a simple public ledger.',
      reportNote: 'A concise report is shown below. Full report is available to download.',
      download: 'Download PDF',
      disclaimer: 'Sample data. The full system will show real-time transactions and verified reports.',
      table: { date: 'Date', type: 'Type', amount: 'Amount', note: 'Note' },
      ledger: { donation: 'Incoming Donation', expense: 'Expense', foodPack: 'Food packs for 100 families' },
    },
    donate: {
      title: 'Secure Donation',
      desc: 'One-time or monthly. Indonesian payment methods (QRIS, VA, E-wallets).',
      aria: 'Donation form',
      type: 'Donation Type',
      oneTime: 'One-time',
      monthly: 'Monthly',
      amount: 'Amount (IDR)',
      name: 'Full Name',
      method: 'Payment Method',
      pay: 'Proceed to Payment',
      security: 'Payments are encrypted. Donation proof & receipt will be emailed to you.',
    },
    extras: {
      title: 'News, Gallery, & Contact',
      desc: 'Follow our latest updates or get in touch.',
      news: 'News/Blog',
      newsDesc: 'Activity stories and reports.',
      gallery: 'Gallery',
      galleryDesc: 'Photo & video documentation of programs.',
      view: 'View More',
      contact: 'Contact',
      contactDesc: 'Reach us via WhatsApp for any questions.',
    },
  },
};

export default function App() {
  const [lang, setLang] = useState('id');
  const t = useMemo(() => translations[lang], [lang]);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white border border-neutral-300 rounded px-3 py-2">Skip to content</a>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Programs t={t} />
        <Transparency t={t} />
        <Donate t={t} />
        <Extras t={t} />
      </main>
      <footer className="mt-16 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Yadufa. {lang === 'id' ? 'Hak cipta dilindungi.' : 'All rights reserved.'}</p>
          <nav className="flex items-center gap-4">
            <a href="#transparency" className="hover:text-neutral-900">{t.nav.transparency}</a>
            <a href="#donate" className="hover:text-neutral-900">{t.nav.donate}</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
