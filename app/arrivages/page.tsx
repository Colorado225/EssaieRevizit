'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag } from 'lucide-react'

const arrivals = [
  { name: 'Robe Kô', detail: 'Coton tissé · Indigo', price: '89 000 FCFA', image: '/hero-fashion.png' },
  { name: 'Ensemble Sassandra', detail: 'Lin & bazin · Terre cuite', price: '125 000 FCFA', image: '/product-indigo.png' },
  { name: 'Sac N’Zassa', detail: 'Cuir végétal · Fait main', price: '48 000 FCFA', image: '/collection-heritage.png' },
]

export default function ArrivagesPage() {
  return <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]"><header className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-6 md:px-10"><Link href="/" className="font-display text-2xl">Revizit<span className="text-[var(--rust)]">.</span></Link><Link href="/" className="text-xs font-bold uppercase tracking-[.18em]">Accueil</Link></header><section className="mx-auto max-w-[1320px] px-5 pb-16 pt-10 md:px-10"><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[var(--rust)]">Le nouveau chapitre</p><h1 className="mt-3 max-w-2xl font-display text-5xl leading-[.95] tracking-[-.04em] md:text-7xl">Les derniers<br /><i className="font-normal text-[var(--rust)]">arrivages.</i></h1><p className="mt-5 max-w-md text-sm leading-6 text-black/55">Des pièces fraîchement imaginées, fabriquées en petites séries et prêtes à rejoindre votre quotidien.</p></motion.div><div className="mt-12 grid gap-5 md:grid-cols-3">{arrivals.map((item, index) => <motion.article key={item.name} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .1 }} className="group"><div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-[var(--cobalt)]"><Image src={item.image} alt={item.name} fill className="object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-[var(--gold)] px-3 py-1 text-[9px] font-bold uppercase tracking-widest">Nouveau</span><button aria-label={`Ajouter ${item.name}`} className="absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-full bg-white text-[var(--ink)] transition hover:scale-110"><ShoppingBag size={16} /></button></div><div className="flex items-start justify-between gap-4 pt-4"><div><h2 className="font-display text-xl">{item.name}</h2><p className="mt-1 text-xs text-black/50">{item.detail}</p></div><p className="text-xs font-bold">{item.price}</p></div></motion.article>)}</div><Link href="/" className="mt-12 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-6 py-3 text-xs font-bold uppercase tracking-[.18em] text-white">Voir toute la boutique <ArrowRight size={15} /></Link></section></main>
}
