import Link from "next/link";

const plans = [
  {id:"basic", name:"BASIC", title:"Tayyor sayt", desc:"Shablondan tez yaratish", features:["10–15 template/kategoriya","Rang va foto almashtirish","Ism, sana, matn","Mobilga mos sayt","EMORA link"]},
  {id:"ai", name:"AI", title:"AI yordamida", desc:"AI matn va dizaynni moslaydi", features:["BASIC hammasi","AI matn generatori","AI dizayn o‘zgartirish","Gallery / video / music","Animatsiyalar"]},
  {id:"pro", name:"PRO AI", title:"0 dan yaratish", desc:"AI bilan suhbat orqali", features:["Erkin AI builder","Live preview","Custom sections","Custom domain","Kengaytirilgan funksiyalar"]}
];

export default function Create() {
 return <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
  <div className="mx-auto max-w-6xl">
   <Link href="/" className="text-zinc-400">← EMORA</Link>
   <h1 className="mt-12 text-4xl font-bold">Qanday sayt yaratamiz?</h1>
   <div className="mt-10 grid gap-5 md:grid-cols-3">
    {plans.map(p => <Link href={`/editor/new?mode=${p.id}`} key={p.id} className="rounded-3xl border border-white/10 bg-white/[.04] p-7 hover:border-pink-400/50">
      <div className="text-sm text-pink-300">{p.name}</div>
      <h2 className="mt-2 text-2xl font-semibold">{p.title}</h2>
      <p className="mt-2 text-zinc-400">{p.desc}</p>
      <ul className="mt-6 space-y-2 text-sm text-zinc-300">{p.features.map(f=><li key={f}>✓ {f}</li>)}</ul>
      <div className="mt-7 rounded-xl bg-white px-4 py-3 text-center font-semibold text-black">Boshlash</div>
    </Link>)}
   </div>
  </div>
 </main>
}
