import { Globe, MessageCircle } from 'lucide-react';

export default function Navbar({ lang, setLang, t }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label={t.nav.aria}>
        <a href="#home" className="font-semibold tracking-tight text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1">
          Yadufa
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#about" className="text-sm text-neutral-700 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1">{t.nav.about}</a>
          <a href="#programs" className="text-sm text-neutral-700 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1">{t.nav.programs}</a>
          <a href="#transparency" className="text-sm text-neutral-700 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1">{t.nav.transparency}</a>
          <a href="#contact" className="text-sm text-neutral-700 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1">{t.nav.contact}</a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-emerald-700 hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
            aria-label={t.nav.whatsapp}
          >
            <MessageCircle className="w-4 h-4" /> {t.nav.whatsapp}
          </a>
          <div className="w-px h-5 bg-neutral-300 mx-1" aria-hidden="true" />
          <button
            type="button"
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="inline-flex items-center gap-1 text-sm text-neutral-800 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
            aria-label={t.nav.switchLang}
          >
            <Globe className="w-4 h-4" /> {lang === 'id' ? 'EN' : 'ID'}
          </button>
          <a
            href="#donate"
            className="ml-1 inline-flex items-center justify-center px-3 py-1.5 rounded-md text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {t.nav.donate}
          </a>
        </div>
      </nav>
    </header>
  );
}
