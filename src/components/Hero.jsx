import Spline from '@splinetool/react-spline';

export default function Hero({ t }) {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0zJ3j1N0s5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl bg-white/70 backdrop-blur rounded-2xl p-6 sm:p-8 shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-neutral-700 text-base sm:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#donate" className="px-5 py-2.5 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
              {t.hero.ctaDonate}
            </a>
            <a href="#about" className="px-5 py-2.5 rounded-md bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
              {t.hero.ctaLearn}
            </a>
          </div>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  );
}
