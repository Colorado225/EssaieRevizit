'use client'

import { useState } from 'react'
import {
  Bell,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  Image,
  LayoutDashboard,
  Menu,
  Package,
  Search,
  Settings,
  ShoppingBag,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

const orders = [
  { id: '#RV-1048', customer: 'Aminata K.', item: 'Robe Kô', amount: '89 000 FCFA', status: 'En préparation', date: 'Aujourd’hui, 09:42', tone: 'amber' },
  { id: '#RV-1047', customer: 'Nadia Yao', item: 'Sac N’Zassa', amount: '48 000 FCFA', status: 'Expédiée', date: 'Aujourd’hui, 08:16', tone: 'blue' },
  { id: '#RV-1046', customer: 'Clara Bamba', item: 'Ensemble Sassandra', amount: '125 000 FCFA', status: 'Livrée', date: 'Hier, 17:28', tone: 'green' },
  { id: '#RV-1045', customer: 'Mariam Fofana', item: 'Robe Kô', amount: '89 000 FCFA', status: 'À confirmer', date: 'Hier, 14:05', tone: 'rose' },
]

const bars = [42, 58, 48, 76, 61, 84, 72, 94, 68, 88, 79, 100]

const nav = [
  { label: 'Vue d’ensemble', icon: LayoutDashboard, active: true },
  { label: 'Commandes', icon: ClipboardList, count: '24', href: '/admin/commandes' },
  { label: 'Catalogue', icon: Package, href: '/admin/catalogue' },
  { label: 'Stocks', icon: Package, href: '/admin/stocks' },
  { label: 'Contenus', icon: Sparkles, href: '/admin/cms' },
  { label: 'Médiathèque', icon: Image, href: '/admin/media' },
  { label: 'Clients', icon: Users, href: '/admin' },
]

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [range, setRange] = useState('30 jours')

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#171512]">
      <div className="flex min-h-screen">
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-40 flex w-[264px] flex-col border-r border-black/[.08] bg-[#1b3d54] px-5 py-6 text-white transition-transform duration-300 lg:static lg:translate-x-0`}>
          <div className="flex items-center justify-between px-3">
            <a href="/" className="font-display text-[29px] tracking-tight">Revizit<span className="text-[#d39a54]">.</span></a>
            <button className="rounded-full p-2 text-white/60 hover:bg-white/10 lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Fermer le menu"><X /></button>
          </div>
          <div className="mt-14 px-3 text-[10px] font-bold uppercase tracking-[.24em] text-white/40">Espace boutique</div>
          <nav className="mt-4 flex flex-col gap-1" aria-label="Navigation d’administration">
            {nav.map(({ label, icon: Icon, active, count, href }) => <a key={label} href={href || '/admin'} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${active ? 'bg-white text-[#1b3d54] shadow-lg shadow-black/10' : 'text-white/65 hover:bg-white/10 hover:text-white'}`}><Icon className="size-[18px]" /><span className="flex-1">{label}</span>{count && <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${active ? 'bg-[#d39a54]/20' : 'bg-white/10'}`}>{count}</span>}</a>)}
          </nav>
          <div className="mt-auto flex flex-col gap-1">
            <a href="#" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/65 transition hover:bg-white/10 hover:text-white"><Settings className="size-[18px]" /> Paramètres</a>
            <div className="mt-5 flex items-center gap-3 border-t border-white/10 px-3 pt-5"><div className="flex size-9 items-center justify-center rounded-full bg-[#d39a54] text-xs font-bold text-[#1b3d54]">AM</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">Awa M’Bengue</p><p className="truncate text-xs text-white/45">Administratrice</p></div><ChevronDown className="size-4 text-white/40" /></div>
          </div>
        </aside>
        {sidebarOpen && <button className="fixed inset-0 z-30 bg-black/30 lg:hidden" aria-label="Fermer la navigation" onClick={() => setSidebarOpen(false)} />}

        <section className="min-w-0 flex-1">
          <header className="flex h-[76px] items-center justify-between border-b border-black/[.08] bg-[#f7f4ef]/90 px-5 backdrop-blur md:px-10">
            <div className="flex items-center gap-4"><button className="rounded-full border border-black/10 p-2 lg:hidden" onClick={() => setSidebarOpen(true)} aria-label="Ouvrir le menu"><Menu /></button><div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#b85b3c]">Mardi 07 octobre 2026</p><h1 className="mt-1 font-display text-2xl md:text-[28px]">Bonjour, Awa.</h1></div></div>
            <div className="flex items-center gap-2 md:gap-4"><button className="hidden items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2.5 text-xs text-black/45 md:flex"><Search className="size-4" /> Rechercher <kbd className="rounded bg-black/5 px-1.5 py-0.5 text-[10px]">⌘ K</kbd></button><button className="relative rounded-full border border-black/10 p-2.5" aria-label="Notifications"><Bell className="size-[18px]" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#b85b3c]" /></button></div>
          </header>

          <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-10 md:py-10">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.22em] text-[#b85b3c]"><Sparkles className="size-3" /> Votre activité</p><h2 className="font-display text-4xl tracking-[-.04em] md:text-5xl">Tout est en mouvement.</h2></div><button className="flex items-center gap-2 self-start rounded-full bg-[#b85b3c] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-[#b85b3c]/20 transition hover:-translate-y-0.5 md:self-auto">Exporter le rapport <ChevronRight className="size-4" /></button></div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[['Chiffre d’affaires', '2 840 500 FCFA', '+18,4%', CircleDollarSign], ['Commandes', '84', '+12,8%', ShoppingBag], ['Panier moyen', '74 250 FCFA', '+6,2%', CircleDollarSign], ['Clients actifs', '1 248', '+24,1%', Users]].map(([label, value, trend, Icon]) => <article key={label as string} className="group rounded-2xl border border-black/[.07] bg-white/70 p-5 shadow-[0_12px_40px_rgba(30,25,18,.03)] transition hover:-translate-y-1 hover:bg-white"><div className="flex items-start justify-between"><p className="text-xs font-medium text-black/50">{label as string}</p><span className="rounded-lg bg-[#1b3d54]/[.08] p-2 text-[#1b3d54]"><Icon className="size-4" /></span></div><p className="mt-5 font-display text-[28px] tracking-tight">{value as string}</p><p className="mt-2 text-xs font-semibold text-emerald-700">{trend as string} <span className="font-normal text-black/40">vs mois dernier</span></p></article>)}
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-[1.45fr_.8fr]">
              <article className="rounded-2xl border border-black/[.07] bg-white/70 p-5 md:p-7"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start"><div><h3 className="font-display text-2xl">Revenus</h3><p className="mt-1 text-xs text-black/45">Performance de votre boutique</p></div><select value={range} onChange={(event) => setRange(event.target.value)} className="rounded-full border border-black/10 bg-transparent px-3 py-2 text-xs font-semibold outline-none"><option>30 jours</option><option>90 jours</option><option>Cette année</option></select></div><div className="mt-8 flex h-48 items-end gap-2 border-b border-black/10 sm:gap-3">{bars.map((height, index) => <div key={index} className="group/bar flex flex-1 flex-col items-center gap-2"><div className="relative w-full rounded-t-lg bg-[#1b3d54]/[.12] transition hover:bg-[#b85b3c]" style={{ height: `${height}%` }}><span className="absolute -top-7 left-1/2 hidden -translate-x-1/2 rounded bg-[#171512] px-2 py-1 text-[9px] text-white group-hover/bar:block">{Math.round(height * 31)}k</span></div><span className="text-[9px] text-black/35">{['Mai','Juin','Juil','Août','Sep','Oct'][index % 6]}</span></div>)}</div></article>
              <article className="rounded-2xl bg-[#d39a54] p-6 text-[#171512] md:p-7"><div className="flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] opacity-60">À ne pas manquer</p><h3 className="mt-3 font-display text-3xl leading-none">Votre stock<br /><i className="font-normal">mérite un regard.</i></h3></div><Package className="size-6 opacity-60" /></div><p className="mt-8 max-w-[240px] text-sm leading-6 opacity-70">8 références arrivent bientôt à épuisement. Anticipez les prochains best-sellers.</p><a href="/admin/stocks" className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest">Voir les stocks <ChevronRight className="size-4" /></a></article>
            </div>

            <article className="mt-5 overflow-hidden rounded-2xl border border-black/[.07] bg-white/70"><div className="flex flex-col justify-between gap-4 border-b border-black/[.07] p-5 md:flex-row md:items-center md:px-7"><div><h3 className="font-display text-2xl">Commandes récentes</h3><p className="mt-1 text-xs text-black/45">Les dernières transactions de Revizit</p></div><button className="flex items-center gap-2 self-start text-xs font-bold uppercase tracking-widest text-[#b85b3c]">Voir toutes les commandes <ChevronRight className="size-4" /></button></div><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-black/[.025] text-[10px] font-bold uppercase tracking-widest text-black/40"><tr><th className="px-7 py-4">Commande</th><th className="px-7 py-4">Client</th><th className="px-7 py-4">Article</th><th className="px-7 py-4">Montant</th><th className="px-7 py-4">Statut</th><th className="px-7 py-4">Date</th></tr></thead><tbody>{orders.map((order) => <tr key={order.id} className="border-t border-black/[.06] transition hover:bg-black/[.02]"><td className="px-7 py-4 font-semibold">{order.id}</td><td className="px-7 py-4">{order.customer}</td><td className="px-7 py-4 text-black/55">{order.item}</td><td className="px-7 py-4 font-semibold">{order.amount}</td><td className="px-7 py-4"><span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold ${order.tone === 'amber' ? 'bg-amber-100 text-amber-800' : order.tone === 'blue' ? 'bg-blue-100 text-blue-800' : order.tone === 'green' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>{order.status}</span></td><td className="px-7 py-4 text-xs text-black/45">{order.date}</td></tr>)}</tbody></table></div></article>
          </div>
        </section>
      </div>
    </main>
  )
}
