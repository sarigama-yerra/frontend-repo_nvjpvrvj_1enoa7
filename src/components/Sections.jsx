import { ShieldCheck, Heart, FileSpreadsheet, CreditCard, Newspaper, Image } from 'lucide-react';

function Section({ id, title, children, description }) {
  return (
    <section id={id} className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">{title}</h2>
          {description && <p className="mt-2 text-neutral-700">{description}</p>}
        </div>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  );
}

export function About({ t }) {
  return (
    <Section id="about" title={t.about.title} description={t.about.desc}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4 text-neutral-700">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <ul className="list-disc pl-5">
            <li>{t.about.values1}</li>
            <li>{t.about.values2}</li>
            <li>{t.about.values3}</li>
          </ul>
        </div>
        <div className="rounded-xl border border-neutral-200 p-5 bg-white shadow-sm">
          <h3 className="font-semibold text-neutral-900 mb-3">{t.about.orgTitle}</h3>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div><dt className="font-medium">{t.about.roles.ketua}</dt><dd>Ust. Ahmad</dd></div>
            <div><dt className="font-medium">{t.about.roles.wakil}</dt><dd>Ust. Bilal</dd></div>
            <div><dt className="font-medium">{t.about.roles.sekretaris}</dt><dd>Hana</dd></div>
            <div><dt className="font-medium">{t.about.roles.bendahara}</dt><dd>Raka</dd></div>
          </dl>
          <h4 className="font-semibold text-neutral-900 mt-4 mb-2">{t.about.deptsTitle}</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li>Agama</li>
            <li>Sosial</li>
            <li>HAL</li>
            <li>Keuangan</li>
            <li>Crew</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Programs({ t }) {
  const items = [
    { icon: Heart, title: t.programs.food, desc: t.programs.foodDesc },
    { icon: ShieldCheck, title: t.programs.orphan, desc: t.programs.orphanDesc },
    { icon: Newspaper, title: t.programs.education, desc: t.programs.educationDesc },
  ];
  return (
    <Section id="programs" title={t.programs.title} description={t.programs.desc}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-neutral-200 p-5 bg-white shadow-sm">
            <Icon className="w-6 h-6 text-emerald-600" aria-hidden />
            <h3 className="mt-3 font-semibold text-neutral-900">{title}</h3>
            <p className="mt-1 text-sm text-neutral-700">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Transparency({ t }) {
  const rows = [
    { date: '2025-10-01', type: t.transparency.ledger.donation, amount: 'Rp 1.500.000', note: 'QRIS' },
    { date: '2025-10-03', type: t.transparency.ledger.expense, amount: 'Rp 700.000', note: t.transparency.ledger.foodPack },
  ];
  return (
    <Section id="transparency" title={t.transparency.title} description={t.transparency.desc}>
      <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-neutral-700"><FileSpreadsheet className="w-4 h-4" /> {t.transparency.reportNote}</div>
          <a href="#" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">{t.transparency.download}</a>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-neutral-50 text-neutral-600">
              <tr>
                <th className="text-left px-5 py-2">{t.transparency.table.date}</th>
                <th className="text-left px-5 py-2">{t.transparency.table.type}</th>
                <th className="text-left px-5 py-2">{t.transparency.table.amount}</th>
                <th className="text-left px-5 py-2">{t.transparency.table.note}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="odd:bg-white even:bg-neutral-50">
                  <td className="px-5 py-2 whitespace-nowrap">{r.date}</td>
                  <td className="px-5 py-2">{r.type}</td>
                  <td className="px-5 py-2">{r.amount}</td>
                  <td className="px-5 py-2">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-neutral-200">
          <p className="text-sm text-neutral-600">{t.transparency.disclaimer}</p>
        </div>
      </div>
    </Section>
  );
}

export function Donate({ t }) {
  return (
    <Section id="donate" title={t.donate.title} description={t.donate.desc}>
      <form className="grid gap-4 max-w-xl" onSubmit={(e) => e.preventDefault()} aria-label={t.donate.aria}>
        <fieldset>
          <legend className="sr-only">{t.donate.type}</legend>
          <div className="inline-flex rounded-md border border-neutral-300 overflow-hidden" role="radiogroup">
            <label className="px-3 py-2 text-sm flex items-center gap-2 cursor-pointer">
              <input type="radio" name="plan" defaultChecked aria-label={t.donate.oneTime} /> {t.donate.oneTime}
            </label>
            <div className="w-px bg-neutral-300" />
            <label className="px-3 py-2 text-sm flex items-center gap-2 cursor-pointer">
              <input type="radio" name="plan" aria-label={t.donate.monthly} /> {t.donate.monthly}
            </label>
          </div>
        </fieldset>
        <label className="text-sm font-medium text-neutral-800">
          {t.donate.amount}
          <input type="number" min="10000" step="1000" defaultValue={50000} className="mt-1 w-full rounded-md border-neutral-300 focus:border-emerald-500 focus:ring-emerald-500" />
        </label>
        <label className="text-sm font-medium text-neutral-800">
          {t.donate.name}
          <input type="text" className="mt-1 w-full rounded-md border-neutral-300 focus:border-emerald-500 focus:ring-emerald-500" />
        </label>
        <label className="text-sm font-medium text-neutral-800">
          Email
          <input type="email" className="mt-1 w-full rounded-md border-neutral-300 focus:border-emerald-500 focus:ring-emerald-500" />
        </label>
        <label className="text-sm font-medium text-neutral-800">
          {t.donate.method}
          <select className="mt-1 w-full rounded-md border-neutral-300 focus:border-emerald-500 focus:ring-emerald-500">
            <option>QRIS</option>
            <option>VA BCA</option>
            <option>VA BNI</option>
            <option>OVO</option>
            <option>DANA</option>
          </select>
        </label>
        <button type="submit" className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
          {t.donate.pay}
        </button>
        <p className="text-xs text-neutral-600">{t.donate.security}</p>
      </form>
    </Section>
  );
}

export function Extras({ t }) {
  return (
    <Section id="extras" title={t.extras.title} description={t.extras.desc}>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-neutral-200 p-5 bg-white shadow-sm">
          <Newspaper className="w-6 h-6 text-emerald-600" aria-hidden />
          <h3 className="mt-3 font-semibold text-neutral-900">{t.extras.news}</h3>
          <p className="mt-1 text-sm text-neutral-700">{t.extras.newsDesc}</p>
          <a href="#" className="mt-3 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-800">{t.extras.view}</a>
        </div>
        <div className="rounded-xl border border-neutral-200 p-5 bg-white shadow-sm">
          <Image className="w-6 h-6 text-emerald-600" aria-hidden />
          <h3 className="mt-3 font-semibold text-neutral-900">{t.extras.gallery}</h3>
          <p className="mt-1 text-sm text-neutral-700">{t.extras.galleryDesc}</p>
          <a href="#" className="mt-3 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-800">{t.extras.view}</a>
        </div>
        <div id="contact" className="rounded-xl border border-neutral-200 p-5 bg-white shadow-sm">
          <CreditCard className="w-6 h-6 text-emerald-600" aria-hidden />
          <h3 className="mt-3 font-semibold text-neutral-900">{t.extras.contact}</h3>
          <p className="mt-1 text-sm text-neutral-700">{t.extras.contactDesc}</p>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-800">WhatsApp</a>
        </div>
      </div>
    </Section>
  );
}
