import Link from "next/link";

const templates = [
 ["birthday-01","Birthday — Elegant","🎂","Tug‘ilgan kun"],
 ["birthday-02","Birthday — Romantic","🎈","Tug‘ilgan kun"],
 ["wedding-01","Wedding — Luxury","💍","To‘y"],
 ["love-01","Love — Letter","❤️","Sevgi"],
 ["sorry-01","Sorry — Minimal","🙏","Uzr"],
 ["cv-01","CV — Professional","📄","CV"]
];

export default function Templates(){
 return <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
  <div className="mx-auto max-w-6xl">
   <Link href="/" className="text-zinc-400">← EMORA</Link>
   <h1 className="mt-12 text-4xl font-bold">Template marketplace</h1>
   <p className="mt-3 text-zinc-400">Boshlanish uchun namunaviy katalog.</p>
   <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {templates.map(t=><Link href={`/editor/new?template=${t[0]}`} key={t[0]} className="rounded-3xl border border-white/10 bg-white/[.04] p-6">
      <div className="flex h-44 items-center justify-center rounded-2xl bg-white/[.06] text-6xl">{t[2]}</div>
      <h2 className="mt-5 text-xl font-semibold">{t[1]}</h2>
      <p className="mt-1 text-sm text-zinc-400">{t[3]}</p>
    </Link>)}
   </div>
  </div>
 </main>
}
