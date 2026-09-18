import Link from "next/link";
export default function Pricing(){
 const p=[["BASIC","29 000 so‘m","Template asosida"],["AI","59 000 so‘m","AI yordamida"],["PRO AI","149 000 so‘m","0 dan AI builder"]];
 return <main className="min-h-screen bg-zinc-950 text-white px-6 py-20"><div className="mx-auto max-w-5xl"><Link href="/" className="text-zinc-400">← EMORA</Link><h1 className="mt-12 text-5xl font-bold">Tariflar</h1><div className="mt-10 grid gap-5 md:grid-cols-3">{p.map(x=><div className="rounded-3xl border border-white/10 p-7" key={x[0]}><div className="text-pink-300">{x[0]}</div><div className="mt-5 text-3xl font-bold">{x[1]}</div><p className="mt-2 text-zinc-400">{x[2]}</p><Link href="/create" className="mt-8 block rounded-xl bg-white px-4 py-3 text-center font-semibold text-black">Tanlash</Link></div>)}</div></div></main>
}
