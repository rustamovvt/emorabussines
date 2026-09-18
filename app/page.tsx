import Link from "next/link";

const categories = ["🎂 Tug‘ilgan kun","💍 To‘y","❤️ Sevgi","🙏 Uzr so‘rash","📄 CV / Resume","🎁 Surprise"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            EMORA 2.0
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Oddiy link emas.<br/>O‘ziga xos <span className="text-pink-400">website</span>.
          </h1>
          <p className="mt-6 text-lg text-zinc-400">
            Tug‘ilgan kun, to‘y, sevgi izhori, uzr, CV va boshqa vaziyatlar uchun
            bir necha daqiqada interaktiv mini-sayt yarating.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/create" className="rounded-xl bg-white px-6 py-3 font-semibold text-black">
              Sayt yaratish
            </Link>
            <Link href="/templates" className="rounded-xl border border-white/15 px-6 py-3">
              Shablonlarni ko‘rish
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["BASIC","Tayyor shablon","10–15 ta template / kategoriya"],
            ["AI","AI yordamida","Matn, dizayn va funksiyalarni AI boshqaradi"],
            ["PRO AI","0 dan yaratish","AI bilan suhbatlashib butun saytni yarating"]
          ].map(([title,sub,desc]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[.04] p-7">
              <div className="text-sm text-pink-300">{title}</div>
              <h2 className="mt-3 text-2xl font-semibold">{sub}</h2>
              <p className="mt-3 text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-24 mb-6 text-2xl font-semibold">Nima uchun sayt?</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {categories.map(c => <div key={c} className="rounded-2xl border border-white/10 p-5">{c}</div>)}
        </div>
      </section>
    </main>
  );
}
