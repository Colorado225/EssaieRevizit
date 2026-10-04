'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { ArrowRight, Check, Heart, Instagram, Mail, Menu, ShoppingBag, Star, Truck, X, ChevronRight } from 'lucide-react'

type Product = { 
  name: string
  detail: string
  price: number
  image: string
  tag: string
  category: string
  description: string
  new?: boolean
}

const products: Product[] = [
  { name: 'Robe Kô', detail: 'Coton tissé · Indigo', price: 89000, image: '/hero-fashion.png', tag: 'Édition limitée', category: 'Vêtements', description: 'Une silhouette fluide et sculpturale, taillée dans un coton indigo tissé par notre atelier partenaire à Abidjan.', new: true },
  { name: 'Ensemble Sassandra', detail: 'Lin & bazin · Terre cuite', price: 125000, image: '/product-indigo.png', tag: 'Nouveau', category: 'Vêtements', description: 'Le tailoring décontracté de Revizit : un ensemble pensé pour passer du jour à la nuit avec naturel.' },
  { name: 'Sac N\'Zassa', detail: 'Cuir végétal · Fait main', price: 48000, image: '/collection-heritage.png', tag: 'Artisan local', category: 'Accessoires', description: 'Un sac compact aux textures généreuses, réalisé à la main et conçu pour accompagner tous vos mouvements.' },
]

const testimonials = [
  { author: 'Ama K.', role: 'Avocate', text: 'Revizit, c\'est porter sa culture avec fierté. Chaque pièce raconte une histoire.', rating: 5 },
  { author: 'Kwesi A.', role: 'Designer', text: 'La qualité et l\'éthique sont au cœur de chaque création. Je reviens toujours.', rating: 5 },
  { author: 'Zara M.', role: 'Entrepreneur', text: 'C\'est l\'élégance consciente que j\'attendais. Merci Revizit.', rating: 5 },
]

const money = (value: number) => `${value.toLocaleString('fr-FR')} FCFA`

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Home() {
  const [cart, setCart] = useState<Record<string, number>>({})
  const [menu, setMenu] = useState(false)
  const [liked, setLiked] = useState<string[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [selected, setSelected] = useState<Product | null>(null)

  const filteredProducts = useMemo(() => products, [])
  const cartItems = products.filter((product) => cart[product.name])
  const cartCount = Object.values(cart).reduce((sum, value) => sum + value, 0)
  const cartTotal = cartItems.reduce((sum, product) => sum + product.price * cart[product.name], 0)
  const addToCart = (product: Product) => setCart((current) => ({ ...current, [product.name]: (current[product.name] || 0) + 1 }))
  const removeFromCart = (name: string) => setCart((current) => { const next = { ...current, [name]: current[name] - 1 }; if (next[name] <= 0) delete next[name]; return next })

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--paper)]">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
      </div>

      {/* Announcement bar */}
      <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="relative z-20 bg-[var(--cobalt)] px-5 py-2 text-center text-[10px] font-bold uppercase tracking-[.25em] text-white">
        Livraison offerte à Abidjan dès 75 000 FCFA <span className="mx-2 text-[var(--gold)]">✦</span>
      </motion.div>

      {/* Header */}
      <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="relative z-20 mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 md:px-10 md:py-6">
        <button aria-label="Menu" onClick={() => setMenu(!menu)} className="flex size-10 items-center justify-center rounded-full border border-black/10 md:hidden">
          {menu ? <X /> : <Menu />}
        </button>
        <a href="/" className="font-display text-2xl font-semibold tracking-tight">
          Revizit<span className="text-[var(--rust)]">.</span>
        </a>
        <nav className={`${menu ? 'flex' : 'hidden'} absolute left-4 right-4 top-16 flex-col gap-4 rounded-2xl bg-[var(--ink)] p-5 text-white md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:text-[var(--ink)]`}>
          <a href="/arrivages" onClick={() => setMenu(false)} className="text-xs font-bold uppercase tracking-[.18em]">Arrivages</a>
          <a href="/collections" onClick={() => setMenu(false)} className="text-xs font-bold uppercase tracking-[.18em]">Collections</a>
          <a href="/boutique" onClick={() => setMenu(false)} className="text-xs font-bold uppercase tracking-[.18em]">Boutique</a>
        </nav>
        <button aria-label="Panier" onClick={() => setCartOpen(true)} className="relative flex size-10 items-center justify-center rounded-full bg-[var(--ink)] text-white transition hover:scale-110">
          <ShoppingBag size={18} />
          {cartCount > 0 && <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-[var(--rust)] text-[8px] font-bold">{cartCount}</span>}
        </button>
      </motion.header>

      {/* ========== HERO SECTION ========== */}
      <motion.section variants={containerVariants} initial="hidden" animate="visible" className="mx-auto grid max-w-[1320px] gap-8 px-5 py-12 md:grid-cols-[1.1fr_.9fr] md:items-center md:px-10 md:py-16">
        <motion.div variants={itemVariants} className="relative z-10 space-y-6">
          <motion.p variants={textVariants} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.3em] text-[var(--rust)]">
            <span className="size-1.5 rounded-full bg-[var(--rust)]" /> Collection 01 · Héritage
          </motion.p>
          <motion.h1 variants={textVariants} className="font-display text-5xl leading-[.9] tracking-[-.04em] md:text-6xl">
            L'Afrique<br /><i className="font-normal text-[var(--rust)]">en mouvement.</i>
          </motion.h1>
          <motion.p variants={textVariants} className="max-w-sm text-sm leading-6 text-black/60">
            Des pièces qui racontent nos terres, nos gestes et celles et ceux qui les font vivre.
          </motion.p>
          <motion.a href="#shop" variants={textVariants} className="inline-flex items-center gap-3 rounded-full bg-[var(--rust)] px-6 py-3 text-xs font-bold uppercase tracking-[.18em] text-white transition hover:scale-105">
            Découvrir <ArrowRight size={16} />
          </motion.a>
        </motion.div>
        <motion.div variants={itemVariants} className="relative h-80 md:h-96">
          <motion.div className="absolute inset-4 rotate-2 rounded-[40px] bg-[var(--gold)]/25" />
          <div className="relative h-full overflow-hidden rounded-[40px] bg-[var(--cobalt)]">
            <Image src="/hero-fashion.png" fill priority className="object-cover object-center opacity-90 transition hover:scale-105" alt="Modèle Revizit" />
          </div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="absolute -bottom-2 -left-3 flex size-24 items-center justify-center rounded-full bg-[var(--gold)] text-center text-[9px] font-bold uppercase leading-3 tracking-widest text-[var(--ink)]">
            Fait en<br />Côte d'Ivoire
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ========== MARQUEE ========== */}
      <div className="overflow-hidden border-y border-black/10 bg-[var(--cream)]">
        <motion.div animate={{ x: -500 }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }} className="flex w-max gap-8 py-3 whitespace-nowrap text-[10px] font-bold uppercase tracking-[.25em]">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className="flex items-center gap-8">
              Design conscient <b className="text-[var(--rust)]">✦</b> Créé en Côte d'Ivoire <b className="text-[var(--rust)]">✦</b>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ========== ARRIVALS SECTION ========== */}
      <motion.section id="arrivals" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: '-100px' }} className="mx-auto max-w-[1320px] px-5 py-12 md:px-10 md:py-16">
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[var(--rust)]">Dernières arrivées</p>
          <h2 className="font-display text-4xl leading-[.9] tracking-[-.04em] md:text-5xl">Nouvelles pièces<br /><i className="font-normal">chaque semaine.</i></h2>
        </motion.div>
        <motion.div variants={containerVariants} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((p) => (
            <motion.div key={p.name} variants={itemVariants} className="group">
              <div className="relative aspect-[.85] overflow-hidden rounded-2xl bg-[var(--cream)]">
                <Image src={p.image} fill className="object-cover transition duration-700 group-hover:scale-105" alt={p.name} />
                <span className="absolute left-3 top-3 rounded-full bg-[var(--paper)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider">{p.tag}</span>
                <motion.button whileHover={{ scale: 1.1 }} onClick={() => setLiked(liked.includes(p.name) ? liked.filter((n) => n !== p.name) : [...liked, p.name])} className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-[var(--paper)] transition">
                  <Heart size={16} className={liked.includes(p.name) ? 'fill-[var(--rust)] text-[var(--rust)]' : ''} />
                </motion.button>
              </div>
              <div className="mt-3">
                <h3 className="font-display text-lg">{p.name}</h3>
                <p className="text-xs text-black/50">{p.detail}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold">{money(p.price)}</span>
                  <motion.button whileHover={{ scale: 1.05 }} onClick={() => addToCart(p)} className="rounded-full bg-[var(--rust)] px-3 py-2 text-xs font-bold text-white transition">
                    <ShoppingBag size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ========== COLLECTIONS SECTION ========== */}
      <motion.section id="collections" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: '-100px' }} className="mx-auto max-w-[1320px] px-5 py-12 md:px-10 md:py-16">
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[var(--rust)]">Explorer</p>
          <h2 className="font-display text-4xl leading-[.9] tracking-[-.04em] md:text-5xl">Univers <i className="font-normal">à découvrir.</i></h2>
        </motion.div>
        <motion.div variants={containerVariants} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { name: 'Femme', detail: 'Robes · Ensembles', image: '/hero-fashion.png' },
            { name: 'Homme', detail: 'Chemises · Boubous', image: '/product-indigo.png' },
            { name: 'Enfants', detail: 'Cérémonie · Quotidien', image: '/collection-heritage.png' },
            { name: 'Accessoires', detail: 'Sacs · Bijoux', image: '/collection-heritage.png' },
            { name: 'Ongles', detail: 'Press-on · Nail art', image: '/product-indigo.png' },
          ].map((item, idx) => (
            <motion.a href="#shop" key={item.name} variants={itemVariants} className="group relative min-h-56 overflow-hidden rounded-2xl bg-[var(--ink)] text-white">
              <Image src={item.image} fill className="object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-75" alt={item.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="text-[8px] font-bold tracking-widest text-[var(--gold)]">0{idx + 1}</span>
                <h3 className="font-display text-2xl">{item.name}</h3>
                <p className="text-xs text-white/60">{item.detail}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* ========== PRODUCTS SECTION ========== */}
      <motion.section id="shop" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: '-100px' }} className="mx-auto max-w-[1320px] px-5 py-12 md:px-10 md:py-16">
        <motion.div variants={itemVariants} className="mb-10 grid gap-6 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[var(--rust)]">Sélection</p>
            <h2 className="font-display text-4xl leading-[.9] tracking-[-.04em] md:text-5xl">Pièces <i className="font-normal">singulières.</i></h2>
          </div>
          <div className="relative min-h-40 overflow-hidden rounded-2xl bg-[var(--cobalt)]">
            <Image src="/product-indigo.png" fill className="object-cover opacity-50" alt="Featured" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gold)]">Coup de cœur</p>
              <h3 className="mt-2 font-display text-2xl">L'indigo revient en force</h3>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <motion.section initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: '-100px' }} className="bg-[var(--cream)] px-5 py-12 md:px-10 md:py-16">
        <motion.div variants={itemVariants} className="mx-auto max-w-[1320px]">
          <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[var(--rust)]">Avis clients</p>
          <h2 className="font-display text-4xl leading-[.9] tracking-[-.04em] md:text-5xl">Celles et ceux qui<br /><i className="font-normal">portent Revizit.</i></h2>
        </motion.div>
        <motion.div variants={containerVariants} className="mx-auto grid max-w-[1320px] gap-4 px-5 pt-10 sm:grid-cols-2 lg:grid-cols-3 md:px-10">
          {testimonials.map((t) => (
            <motion.div key={t.author} variants={itemVariants} className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="flex gap-1">
                {Array.from({ length: t.rating }, (_, i) => <Star key={i} size={14} className="fill-[var(--rust)] text-[var(--rust)]" />)}
              </div>
              <p className="mt-3 text-sm leading-6">"{t.text}"</p>
              <p className="mt-4 font-bold text-sm">{t.author}</p>
              <p className="text-xs text-black/50">{t.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ========== NEWSLETTER SECTION ========== */}
      <motion.section initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: '-100px' }} className="bg-[var(--rust)] px-5 py-14 text-white md:px-10 md:py-18">
        <motion.div variants={itemVariants} className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr] md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[var(--gold)]">Lettre Revizit</p>
              <h2 className="mt-2 font-display text-4xl leading-[.9] tracking-[-.04em] md:text-5xl">Recevez le<br /><i className="font-normal text-[var(--gold)]">prochain mouvement.</i></h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">Soyez les premiers à découvrir nos nouvelles pièces et nos histoires.</p>
            </div>
            <motion.form variants={textVariants} className="flex w-full gap-2 border-b border-white/40 pb-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="votre@email.com" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/50" />
              <button type="submit" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--gold)]">
                S'inscrire <ArrowRight size={14} />
              </button>
            </motion.form>
          </div>
        </motion.div>
      </motion.section>

      {/* ========== FOOTER ========== */}
      <motion.footer initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }} className="border-t border-black/10 px-5 py-10 md:px-10 md:py-12">
        <div className="mx-auto grid max-w-[1320px] gap-8 md:grid-cols-4">
          <motion.div variants={itemVariants}>
            <p className="font-display text-2xl">Revizit<span className="text-[var(--rust)]">.</span></p>
            <p className="mt-2 text-xs leading-5 text-black/50">La mode, en héritage. Des pièces conscientes, créées en Côte d'Ivoire.</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Boutique</p>
            <div className="mt-4 flex flex-col gap-2 text-xs">
              <a href="#" className="transition hover:text-[var(--rust)]">Nouveautés</a>
              <a href="#" className="transition hover:text-[var(--rust)]">Vêtements</a>
              <a href="#" className="transition hover:text-[var(--rust)]">Accessoires</a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Support</p>
            <div className="mt-4 flex flex-col gap-2 text-xs">
              <a href="mailto:bonjour@revizit.ci" className="transition hover:text-[var(--rust)]">Contact</a>
              <a href="#" className="transition hover:text-[var(--rust)]">Livraison</a>
              <a href="#" className="transition hover:text-[var(--rust)]">Retours</a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Suivez-nous</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="transition hover:text-[var(--rust)]"><Instagram size={16} /></a>
              <a href="#" className="transition hover:text-[var(--rust)]"><Mail size={16} /></a>
            </div>
            <p className="mt-4 text-xs text-black/40">@revizit.ci</p>
          </motion.div>
        </div>
        <motion.div variants={textVariants} className="mt-8 border-t border-black/10 pt-6 text-center text-xs text-black/40">
          © 2024 Revizit. Tous droits réservés. • Design & Code by v0
        </motion.div>
      </motion.footer>

      {/* ========== CART DRAWER ========== */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCartOpen(false)} className="fixed inset-0 z-50 bg-black/40">
            <motion.div initial={{ x: 400 }} animate={{ x: 0 }} exit={{ x: 400 }} transition={{ type: 'spring', damping: 25 }} onClick={(e) => e.stopPropagation()} className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-[var(--paper)]">
              <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
                <h2 className="font-display text-2xl">Panier</h2>
                <button onClick={() => setCartOpen(false)} className="rounded-full hover:bg-black/5 p-2">
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 p-6">
                {cartItems.length === 0 ? (
                  <p className="text-center text-sm text-black/50 py-10">Votre panier est vide</p>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((p) => (
                      <motion.div key={p.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 border-b border-black/10 pb-4">
                        <div className="relative h-20 w-16 overflow-hidden rounded-lg bg-[var(--cream)]">
                          <Image src={p.image} fill className="object-cover" alt={p.name} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold">{p.name}</h3>
                          <p className="text-xs text-black/50">{money(p.price)}</p>
                          <div className="mt-2 flex items-center gap-2">
                            <button onClick={() => removeFromCart(p.name)} className="rounded-full bg-[var(--cream)] px-2 py-1 text-xs">−</button>
                            <span className="text-xs font-bold">{cart[p.name]}</span>
                            <button onClick={() => addToCart(p)} className="rounded-full bg-[var(--cream)] px-2 py-1 text-xs">+</button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
              {cartItems.length > 0 && (
                <div className="border-t border-black/10 p-6 space-y-3">
                  <div className="flex justify-between text-sm font-bold">
                    <span>Total</span>
                    <span>{money(cartTotal)}</span>
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full rounded-full bg-[var(--rust)] py-3 text-xs font-bold uppercase tracking-widest text-white">
                    Commander
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== PRODUCT MODAL ========== */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-5">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[var(--paper)]">
              <button onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 transition hover:scale-110">
                <X size={20} />
              </button>
              <div className="grid gap-6 p-6 md:grid-cols-[1fr_1.2fr]">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--cream)]">
                  <Image src={selected.image} fill className="object-cover" alt={selected.name} />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-[var(--cream)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">{selected.tag}</span>
                  <h2 className="mt-3 font-display text-4xl">{selected.name}</h2>
                  <p className="mt-2 text-sm text-black/60">{selected.detail}</p>
                  <p className="mt-4 font-display text-2xl text-[var(--rust)]">{money(selected.price)}</p>
                  <p className="mt-4 text-sm leading-6 text-black/60">{selected.description}</p>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => { addToCart(selected); setCartOpen(true); setSelected(null); }} className="mt-6 w-full rounded-full bg-[var(--rust)] py-3 text-xs font-bold uppercase tracking-widest text-white">
                    Ajouter au panier
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
