'use client'

import { useMemo, useState } from 'react'
import { ArrowLeft, MoreHorizontal, Plus, Search, SlidersHorizontal, TrendingUp, X } from 'lucide-react'

type Product = { id: number; name: string; category: string; price: string; stock: number; status: string; image: string }

const initialProducts: Product[] = [
  { id: 1, name: 'Robe Kô', category: 'Robes', price: '89 000 FCFA', stock: 24, status: 'Publié', image: '/product-indigo.png' },
  { id: 2, name: 'Sac N’Zassa', category: 'Accessoires', price: '48 000 FCFA', stock: 8, status: 'Publié', image: '/collection-heritage.png' },
  { id: 3, name: 'Ensemble Sassandra', category: 'Ensembles', price: '125 000 FCFA', stock: 4, status: 'Stock faible', image: '/hero-fashion.png' },
  { id: 4, name: 'Chemise Lagune', category: 'Chemises', price: '62 000 FCFA', stock: 36, status: 'Publié', image: '/product-indigo.png' },
  { id: 5, name: 'Pagne Baoulé moderne', category: 'Traditionnel', price: '54 000 FCFA', stock: 0, status: 'Épuisé', image: '/collection-heritage.png' },
]

const categories = ['Robes', 'Accessoires', 'Ensembles', 'Chemises', 'Traditionnel']

export default function CataloguePage() {
  const [products, setProducts] = useState(initialProducts)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Toutes les catégories')
  const [status, setStatus] = useState('Tous les statuts')
  const [menuId, setMenuId] = useState<number | null>(null)
  const [editing, setEditing] = useState<Product | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [toast, setToast] = useState('')

  const filtered = useMemo(() => products.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = category === 'Toutes les catégories' || product.category === category
    const matchesStatus = status === 'Tous les statuts' || product.status === status
    return matchesQuery && matchesCategory && matchesStatus
  }), [products, query, category, status])

  function saveProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    if (!name) return
    const next = { name, category: String(data.get('category')), price: String(data.get('price')), stock: Number(data.get('stock')) || 0, status: String(data.get('status')), image: editing?.image || '/product-indigo.png' }
    setProducts((current) => editing ? current.map((product) => product.id === editing.id ? { ...product, ...next } : product) : [...current, { id: Date.now(), ...next }])
    setEditing(null)
    setIsCreating(false)
    setToast(editing ? 'Produit mis à jour.' : 'Produit ajouté au catalogue.')
    window.setTimeout(() => setToast(''), 2800)
  }

  function removeProduct(id: number) {
    setProducts((current) => current.filter((product) => product.id !== id))
    setMenuId(null)
    setToast('Produit supprimé du catalogue.')
    window.setTimeout(() => setToast(''), 2800)
  }

  return <main className="min-h-screen bg-[#f7f4ef] text-[#171512]">
    <header className="border-b border-black/[.08] bg-white/65 px-5 py-5 backdrop-blur md:px-10"><div className="mx-auto flex max-w-[1380px] items-center justify-between gap-4"><a href="/admin" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1b3d54]"><ArrowLeft className="size-4" /> Dashboard</a><a href="/" className="font-display text-2xl tracking-tight">Revizit<span className="text-[#d39a54]">.</span></a><button onClick={() => { setEditing(null); setIsCreating(true) }} className="flex items-center gap-2 rounded-full bg-[#b85b3c] px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-[#b85b3c]/15 transition hover:-translate-y-0.5"><Plus className="size-4" /> Ajouter un produit</button></div></header>
    <div className="mx-auto max-w-[1380px] px-5 py-9 md:px-10 md:py-12">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#b85b3c]">Espace boutique</p><h1 className="mt-2 font-display text-4xl tracking-[-.04em] md:text-5xl">Votre catalogue.</h1><p className="mt-3 max-w-lg text-sm leading-6 text-black/50">Gérez vos créations, vos variantes et la disponibilité de chaque pièce depuis un seul espace.</p></div><div className="flex items-center gap-2 rounded-xl bg-[#d39a54]/20 px-4 py-3 text-xs font-semibold text-[#6b4b22]"><TrendingUp className="size-4" /> 12% de ventes sur les nouveautés</div></div>
      <div className="mt-9 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-black/[.07] bg-white/70 p-5"><p className="text-xs text-black/45">Produits affichés</p><p className="mt-3 font-display text-3xl">{filtered.length}</p></div><div className="rounded-2xl border border-black/[.07] bg-white/70 p-5"><p className="text-xs text-black/45">Stock faible</p><p className="mt-3 font-display text-3xl text-[#b85b3c]">{products.filter((product) => product.stock > 0 && product.stock <= 8).length}</p></div><div className="rounded-2xl border border-black/[.07] bg-white/70 p-5"><p className="text-xs text-black/45">Valeur du stock</p><p className="mt-3 font-display text-3xl">18,4M <span className="font-sans text-sm">FCFA</span></p></div></div>
      <section className="mt-6 overflow-hidden rounded-2xl border border-black/[.07] bg-white/70"><div className="flex flex-col gap-4 border-b border-black/[.07] p-5 md:flex-row md:items-center md:justify-between md:px-7"><div className="relative w-full max-w-sm"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-black/35" /><input aria-label="Rechercher un produit" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher un produit..." className="w-full rounded-xl border border-black/10 bg-white/65 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#b85b3c]" /></div><div className="flex flex-wrap gap-2"><select aria-label="Filtrer par catégorie" value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-xl border border-black/10 bg-transparent px-3 py-3 text-xs font-semibold outline-none"><option>Toutes les catégories</option>{categories.map((item) => <option key={item}>{item}</option>)}</select><select aria-label="Filtrer par statut" value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-xl border border-black/10 bg-transparent px-3 py-3 text-xs font-semibold outline-none"><option>Tous les statuts</option><option>Publié</option><option>Stock faible</option><option>Épuisé</option></select><button onClick={() => { setQuery(''); setCategory('Toutes les catégories'); setStatus('Tous les statuts') }} className="flex items-center gap-2 rounded-xl border border-black/10 px-3 py-3 text-xs font-semibold"><SlidersHorizontal className="size-4" /> Réinitialiser</button></div></div><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left"><thead className="bg-black/[.025] text-[10px] font-bold uppercase tracking-widest text-black/40"><tr><th className="px-7 py-4">Produit</th><th className="px-7 py-4">Catégorie</th><th className="px-7 py-4">Prix</th><th className="px-7 py-4">Stock</th><th className="px-7 py-4">Statut</th><th className="px-7 py-4" /></tr></thead><tbody>{filtered.map((product) => <tr key={product.id} className="border-t border-black/[.06] transition hover:bg-black/[.02]"><td className="px-7 py-4"><div className="flex items-center gap-3"><img src={product.image} alt={product.name} className="size-12 rounded-xl object-cover" /><span className="font-semibold">{product.name}</span></div></td><td className="px-7 py-4 text-sm text-black/50">{product.category}</td><td className="px-7 py-4 text-sm font-semibold">{product.price}</td><td className="px-7 py-4 text-sm">{product.stock} unités</td><td className="px-7 py-4"><span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold ${product.status === 'Publié' ? 'bg-emerald-100 text-emerald-800' : product.status === 'Épuisé' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'}`}>{product.status}</span></td><td className="relative px-7 py-4 text-right"><button onClick={() => setMenuId(menuId === product.id ? null : product.id)} aria-label={`Actions pour ${product.name}`} className="rounded-lg p-2 transition hover:bg-black/5"><MoreHorizontal className="size-4" /></button>{menuId === product.id && <div className="absolute right-5 top-14 z-10 w-40 rounded-xl border border-black/10 bg-white p-1 text-left text-xs font-semibold shadow-xl"><button onClick={() => { setEditing(product); setMenuId(null) }} className="w-full rounded-lg px-3 py-2.5 text-left hover:bg-black/5">Modifier</button><button onClick={() => removeProduct(product.id)} className="w-full rounded-lg px-3 py-2.5 text-left text-[#b85b3c] hover:bg-[#b85b3c]/10">Supprimer</button></div>}</td></tr>)}</tbody></table>{filtered.length === 0 && <p className="px-7 py-12 text-center text-sm text-black/50">Aucun produit ne correspond à votre recherche.</p>}</div></section>
    </div>
    {(editing !== null || isCreating) && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-5" onClick={() => { setEditing(null); setIsCreating(false); setToast('') }}><div className="w-full max-w-lg rounded-3xl bg-[#f7f4ef] p-6 shadow-2xl md:p-8" onClick={(event) => event.stopPropagation()}><div className="flex items-start justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#b85b3c]">Catalogue Revizit</p><h2 className="mt-2 font-display text-3xl">{editing ? 'Modifier la pièce' : 'Nouvelle pièce'}</h2></div><button aria-label="Fermer" onClick={() => { setEditing(null); setIsCreating(false); setToast('') }} className="rounded-full p-2 hover:bg-black/5"><X className="size-5" /></button></div><form onSubmit={saveProduct} className="mt-6 flex flex-col gap-4"><input name="name" defaultValue={editing?.name} required placeholder="Nom du produit" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#b85b3c]" /><div className="grid gap-4 sm:grid-cols-2"><select name="category" defaultValue={editing?.category || categories[0]} className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none">{categories.map((item) => <option key={item}>{item}</option>)}</select><input name="price" defaultValue={editing?.price || '0 FCFA'} placeholder="Prix" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#b85b3c]" /></div><div className="grid gap-4 sm:grid-cols-2"><input name="stock" type="number" min="0" defaultValue={editing?.stock ?? 0} placeholder="Stock" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#b85b3c]" /><select name="status" defaultValue={editing?.status || 'Publié'} className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none"><option>Publié</option><option>Stock faible</option><option>Épuisé</option></select></div><button type="submit" className="mt-2 rounded-full bg-[#b85b3c] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white">{editing ? 'Enregistrer les modifications' : 'Ajouter au catalogue'}</button></form></div></div>}
    {toast && toast !== '__new__' && <div role="status" className="fixed bottom-6 right-6 z-50 rounded-xl bg-[#1b3d54] px-5 py-3 text-sm font-semibold text-white shadow-xl">{toast}</div>}
  </main>
}
