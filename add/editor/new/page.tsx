'use client';
import {useState} from 'react';
import Link from 'next/link';

export default function Editor(){
 const [messages,setMessages]=useState<string[]>([]);
 const [input,setInput]=useState("");
 const send=()=>{if(!input.trim())return;setMessages(m=>[...m, input]);setInput("")};
 return <main className="min-h-screen bg-zinc-950 text-white">
  <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
   <Link href="/" className="font-bold">EMORA</Link>
   <button className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black">Publish</button>
  </header>
  <div className="grid min-h-[calc(100vh-65px)] lg:grid-cols-[380px_1fr]">
   <aside className="border-r border-white/10 p-5">
    <div className="text-sm text-zinc-400">AI ASSISTANT</div>
    <h1 className="mt-2 text-2xl font-semibold">Saytingizni yarating</h1>
    <div className="mt-6 space-y-3">
     {messages.map((m,i)=><div key={i} className="rounded-2xl bg-white/10 p-3 text-sm">{m}</div>)}
    </div>
    <div className="mt-6 flex gap-2">
     <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Masalan: fonni qora qil..." className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-3 outline-none"/>
     <button onClick={send} className="rounded-xl bg-pink-500 px-4">→</button>
    </div>
   </aside>
   <section className="p-5">
    <div className="mx-auto h-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white text-zinc-900">
      <div className="flex min-h-[650px] flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-100 p-10 text-center">
       <div className="text-6xl">🎂</div>
       <h2 className="mt-6 text-5xl font-bold">Happy Birthday</h2>
       <p className="mt-4 max-w-lg text-zinc-600">Bu joyda foydalanuvchi tanlagan yoki AI yaratgan real sayt preview qilinadi.</p>
       <button className="mt-8 rounded-full bg-black px-6 py-3 text-white">Open invitation</button>
      </div>
    </div>
   </section>
  </div>
 </main>
}
