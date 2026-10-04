'use client'

import { useState } from 'react'
import { ArrowLeft, ChevronDown, Filter, MoreHorizontal, Plus, Search, SlidersHorizontal, TrendingUp } from 'lucide-react'

const products = [
  { name: 'Robe Kô', category: 'Robes', price: '89 000 FCFA', stock: 24, status: 'Publié', image: '/product-indigo.png' },
  { name: 'Sac N’Zassa', category: 'Accessoires', price: '48 000 FCFA', stock: 8, status: 'Publié', image: '/collection-heritage.png' },
  { name: 'Ensemble Sassandra', category: 'Ensembles', price: '125 000 FCFA', stock: 4, status: 'Stock faible', image: '/hero-fashion.png' },
  { name: 'Chemise Lagune', category: 'Chemises', price: '62 000 FCFA', stock: 36, status: 'Publié', image: '/product-indigo.png' },
  { name: 'Pagne Baoulé moderne', category: 'Traditionnel', price: '54 000 FCFA', stock: 0, status: 'Épuisé', image: '/collection-heritage.png' },
]

export default function CataloguePage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Toutes les catégories')
  const filtered = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()) && (category === 'Toutes les catégories' || product.category === category))

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#171512]">
      <header className="border-b border-black/[.08] bg-white/65 px-5 py-5 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-4">
          <a href="/admin" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1b3d54]"><ArrowLeft className="size-4" /> Dashboard</a>
          <a href="/" className="font-display text-2xl tracking-tight">Revizit<span className="text-[#d39a54]">.</span></a>
          <button className="flex items-center gap-2 rounded-full bg-[#b85b3c] px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-[#b85b3c]/15 transition hover:-translate-y-0.5"><Plus className="size-4" /> Ajouter un produit</button>
        </div>
      </header>
      <div className="mx-auto max-w-[1380px] px-5 py-9 md:px-10 md:py-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#b85b3c]">Espace boutique</p><h1 className="mt-2 font-display text-4xl tracking-[-.04em] md:text-5xl">Votre catalogue.</h1><p className="mt-3 max-w-lg text-sm leading-6 text-black/50">Gérez vos créations, vos variantes et la disponibilité de chaque pièce depuis un seul espace.</p></div><div className="flex items-center gap-2 rounded-xl bg-[#d39a54]/20 px-4 py-3 text-xs font-semibold text-[#6b4b22]"><TrendingUp className="size-4" /> 12% de ventes sur les nouveautés</div></div>
        <div className="mt-9 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-black/[.07] bg-white/70 p-5"><p className="text-xs text-black/45">Produits actifs</p><p className="mt-3 font-display text-3xl">128</p></div><div className="rounded-2xl border border-black/[.07] bg-white/70 p-5"><p className="text-xs text-black/45">Stock faible</p><p className="mt-3 font-display text-3xl text-[#b85b3c]">8</p></div><div className="rounded-2xl border border-black/[.07] bg-white/70 p-5"><p className="text-xs text-black/45">Valeur du stock</p><p className="mt-3 font-display text-3xl">18,4M <span className="font-sans text-sm">FCFA</span></p></div></div>
        <section className="mt-6 overflow-hidden rounded-2xl border border-black/[.07] bg-white/70"><div className="flex flex-col gap-4 border-b border-black/[.07] p-5 md:flex-row md:items-center md:justify-between md:px-7"><div className="relative w-full max-w-sm"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-black/35" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher un produit..." className="w-full rounded-xl border border-black/10 bg-white/65 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#b85b3c]" /></div><div className="flex flex-wrap gap-2"><select value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-xl border border-black/10 bg-transparent px-3 py-3 text-xs font-semibold outline-none"><option>Toutes les catégories</option><option>Robes</option><option>Accessoires</option><option>Ensembles</option><option>Chemises</option><option>Traditionnel</option></select><button className="flex items-center gap-2 rounded-xl border border-black/10 px-3 py-3 text-xs font-semibold"><SlidersHorizontal className="size-4" /> Filtres</button></div></div><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left"><thead className="bg-black/[.025] text-[10px] font-bold uppercase tracking-widest text-black/40"><tr><th className="px-7 py-4">Produit</th><th className="px-7 py-4">Catégorie</th><th className="px-7 py-4">Prix</th><th className="px-7 py-4">Stock</th><th className="px-7 py-4">Statut</th><th className="px-7 py-4" /></tr></thead><tbody>{filtered.map((product) => <tr key={product.name} className="border-t border-black/[.06] transition hover:bg-black/[.02]"><td className="px-7 py-4"><div className="flex items-center gap-3"><img src={product.image} alt="" className="size-12 rounded-xl object-cover" /><span className="font-semibold">{product.name}</span></div></td><td className="px-7 py-4 text-sm text-black/50">{product.category}</td><td className="px-7 py-4 text-sm font-semibold">{product.price}</td><td className="px-7 py-4 text-sm">{product.stock === 0 ? <span className="text-[#b85b3c]">Épuisé</span> : product.stock < 10 ? <span className="font-semibold text-[#b85b3c]">{product.stock} restants</span> : `${product.stock} unités`}</td><td className="px-7 py-4"><span className={`rounded-full px-3 py-1 text-[10px] font-bold ${product.status === 'Publié' ? 'bg-emerald-100 text-emerald-800' : product.status === 'Épuisé' ? 'bg-black/10 text-black/50' : 'bg-amber-100 text-amber-800'}`}>{product.status}</span></td><td className="px-7 py-4 text-right"><button aria-label={`Options pour ${product.name}`} className="rounded-full p-2 hover:bg-black/5"><MoreHorizontal className="size-4" /></button></td></tr>)}</tbody></table></div>{filtered.length === 0 && <div className="p-12 text-center text-sm text-black/50">Aucun produit ne correspond à votre recherche.</div>}</section>
      </div>
    </main>
  )
}
