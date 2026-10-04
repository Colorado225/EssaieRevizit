Oui. Ton projet mérite d’être pensé comme un **véritable commerce digital ivoirien**, pas comme une simple boutique avec quelques pages produits.

Le point le plus important dans ton cahier des charges est celui-ci : **Wave ne doit jamais être directement couplé au reste de l’application**. On va construire une couche `PaymentProvider` interchangeable. Ainsi, aujourd’hui tu peux fonctionner avec un mode de paiement manuel/validation Wave, puis demain brancher l’API officielle Wave sans refaire le checkout.

Je te propose donc un **Master Prompt V1 production-ready** que tu peux donner directement à ton agent IA de développement.

---

# MASTER PROMPT — E-COMMERCE MODE AFRICAINE / IVOIRIENNE

```text
Tu es un architecte logiciel senior, Lead Full-Stack Engineer, expert e-commerce,
UX/UI Designer, expert en conversion, expert React/Next.js, expert TypeScript,
expert PostgreSQL/ORM, expert en architecture modulaire et expert des systèmes
de paiement Mobile Money en Afrique de l'Ouest.

Tu travailles également comme :
- Product Designer senior
- UX Researcher
- Conversion Rate Optimization Specialist
- Motion Designer
- Expert SEO
- Expert sécurité web
- Expert architecture SaaS/e-commerce
- Expert des réalités commerciales et digitales de Côte d'Ivoire

============================================================
                    CONTEXTE DU PROJET
============================================================

Nous voulons construire une plateforme e-commerce moderne spécialisée dans :

- vêtements africains
- mode ivoirienne
- vêtements traditionnels
- créations artisanales
- mode contemporaine inspirée de la culture ivoirienne
- accessoires africains
- produits de créateurs et artisans locaux

Le marché principal est la Côte d'Ivoire.

La plateforme doit être pensée Mobile First, responsive et optimisée
pour les utilisateurs ivoiriens.

Le produit ne doit surtout pas ressembler à un template e-commerce générique.

Il doit transmettre :

- identité africaine
- élégance
- artisanat
- authenticité
- modernité
- premium
- confiance
- culture ivoirienne
- désir d'achat

L'objectif principal est la CONVERSION.

============================================================
                OBJECTIFS BUSINESS
============================================================

La plateforme doit permettre :

1. présenter les collections
2. vendre les produits
3. gérer les stocks
4. gérer les commandes
5. gérer les clients
6. gérer les paiements
7. gérer les livraisons
8. gérer les promotions
9. gérer les catégories
10. gérer les variantes produits
11. gérer les images
12. gérer le contenu marketing
13. gérer les pages CMS
14. gérer les carrousels
15. gérer les sections Hero
16. gérer les campagnes commerciales
17. suivre les performances
18. administrer entièrement la boutique depuis un dashboard

IMPORTANT :

L'administrateur ne doit PAS avoir besoin de modifier le code pour modifier
le contenu commercial du site.

Tout ce qui est contenu marketing doit être administrable depuis le dashboard.

============================================================
                  STACK TECHNIQUE
============================================================

Utilise une architecture moderne basée sur :

Frontend :

- Next.js récent
- React
- TypeScript
- App Router
- Server Components lorsque pertinent
- Client Components uniquement lorsque nécessaire

UI :

- Chakra UI
- Framer Motion
- système de design personnalisé
- composants réutilisables
- responsive design
- Mobile First

IMPORTANT :

Si "Chakra CDN" est incompatible ou non recommandé avec l'architecture
Next.js/React de production, NE FORCE PAS son utilisation.

Privilégie Chakra UI installé proprement comme dépendance npm/package,
avec une architecture production-ready.

Utilise Framer Motion pour les animations complexes.

Backend :

- API proprement structurée
- architecture modulaire
- validation stricte
- gestion centralisée des erreurs
- authentication
- authorization
- RBAC

Base de données :

- PostgreSQL
- ORM moderne
- migrations
- seed
- indexes
- contraintes d'intégrité

Stockage média :

Prévoir une abstraction permettant d'utiliser :

- Cloudinary
- S3 compatible
- autre provider

sans coupler le domaine métier à un fournisseur particulier.

============================================================
                  ARCHITECTURE
============================================================

Utilise une architecture modulaire.

Sépare clairement :

/app
/components
/features
/lib
/services
/repositories
/domain
/hooks
/types
/config
/public

ou une structure équivalente si elle est plus pertinente.

Ne mélange jamais :

- UI
- logique métier
- accès base de données
- paiement
- authentification
- CMS

Chaque domaine métier doit être isolé.

Exemples :

products
orders
customers
payments
shipping
inventory
promotions
cms
analytics
users
auth

============================================================
                   CATALOGUE PRODUITS
============================================================

Créer un système produit complet.

Un produit peut avoir :

- nom
- slug
- description courte
- description complète
- prix
- prix promotionnel
- devise
- SKU
- référence
- marque
- artisan
- collection
- catégorie
- sous-catégorie
- images
- vidéos
- tailles
- couleurs
- matières
- origine
- disponibilité
- stock
- poids
- dimensions
- tags
- statut
- produit vedette
- nouveau produit
- produit tendance
- date de publication

Supporter les variantes.

Exemple :

Robe traditionnelle ivoirienne

Variantes :

Taille :
- XS
- S
- M
- L
- XL
- XXL

Couleur :
- bleu
- rouge
- jaune
- vert

Chaque variante peut avoir :

- SKU
- stock
- prix
- image
- poids

============================================================
                   CATÉGORIES
============================================================

Créer une hiérarchie flexible.

Catégories principales :

FEMME

- robes
- ensembles
- jupes
- pantalons
- chemises
- tops
- vestes
- vêtements traditionnels
- vêtements modernes inspirés d'Afrique

HOMME

- chemises
- pantalons
- ensembles
- costumes
- boubous
- vêtements traditionnels
- vestes
- t-shirts
- tenues modernes africaines

ENFANTS

- filles
- garçons
- bébés
- tenues traditionnelles
- ensembles

ACCESSOIRES

- sacs
- chaussures
- sandales
- ceintures
- foulards
- bijoux
- chapeaux
- pochettes
- accessoires cheveux
- autres

Créer un système de catégories administrable.

L'admin doit pouvoir :

- créer
- modifier
- supprimer
- réorganiser
- activer/désactiver
- modifier l'image
- modifier le SEO
- modifier le slug

============================================================
                   HOMEPAGE
============================================================

Créer une homepage premium et extrêmement travaillée.

Sections potentielles :

1. Announcement bar
2. Header
3. Navigation
4. Hero
5. Collections principales
6. Nouveautés
7. Best sellers
8. Collection traditionnelle
9. Collection artisanale
10. Section créateurs
11. Storytelling culturel
12. Lookbook
13. Produits populaires
14. Promotion
15. Avis clients
16. Instagram/social proof
17. Newsletter
18. Footer

IMPORTANT :

Toutes ces sections doivent être administrables depuis le dashboard.

L'administrateur doit pouvoir :

- afficher/cacher une section
- changer son titre
- changer son sous-titre
- changer son image
- changer le bouton
- changer le lien
- changer l'ordre
- modifier le background
- modifier les produits associés
- programmer une date de publication

============================================================
                     HERO CMS
============================================================

Créer un véritable Hero CMS.

L'admin peut créer plusieurs slides.

Chaque slide possède :

- titre
- sous-titre
- description
- image desktop
- image mobile
- CTA principal
- CTA secondaire
- lien
- position
- animation
- durée
- statut

Possibilité de :

- programmer un hero
- définir une date de début
- définir une date de fin
- activer/désactiver
- choisir le type d'animation

============================================================
                  CARROUSELS
============================================================

Créer un système de carrousels configurable.

L'admin peut choisir :

- titre
- description
- produits
- catégorie
- collection
- nombre de produits
- ordre
- autoplay
- vitesse
- affichage mobile
- affichage desktop

============================================================
                  PAGE PRODUIT
============================================================

Créer une page produit extrêmement optimisée pour conversion.

Elle doit contenir :

- galerie images
- zoom
- vidéos
- titre
- prix
- ancien prix
- promotion
- disponibilité
- sélection taille
- sélection couleur
- quantité
- ajout panier
- achat immédiat
- wishlist
- partage
- description
- détails
- composition
- origine
- guide des tailles
- informations livraison
- retours
- avis
- produits similaires
- produits récemment consultés

Créer également :

- sticky add-to-cart sur mobile
- sticky product information sur desktop si pertinent
- feedback visuel lors de l'ajout au panier
- animations fluides

============================================================
                     PANIER
============================================================

Créer un panier complet.

Fonctionnalités :

- ajouter
- supprimer
- modifier quantité
- modifier variante
- sous-total
- réduction
- frais livraison
- total
- sauvegarde panier
- panier invité
- panier utilisateur

Le panier doit être persistant.

============================================================
                    CHECKOUT
============================================================

Créer un checkout simple et rapide.

Étapes :

1. informations client
2. adresse
3. livraison
4. paiement
5. confirmation

Minimiser le nombre de champs.

Mobile First.

Prévoir :

- invité
- compte utilisateur
- téléphone ivoirien
- adresse
- commune
- ville
- instructions de livraison

============================================================
                  PAIEMENT WAVE
============================================================

ARCHITECTURE CRITIQUE.

NE JAMAIS COUPLER LE CHECKOUT DIRECTEMENT À WAVE.

Créer une abstraction :

PaymentProvider

avec une interface similaire à :

createPayment()
getPaymentStatus()
verifyPayment()
refundPayment()
cancelPayment()

Créer :

WavePaymentProvider

mais avec une implémentation initiale permettant de fonctionner
sans API Wave officielle.

Exemple :

PaymentProvider
    |
    +-- MockPaymentProvider
    |
    +-- ManualWavePaymentProvider
    |
    +-- WavePaymentProvider

Le système doit utiliser :

PAYMENT_PROVIDER=manual_wave

aujourd'hui.

Plus tard :

PAYMENT_PROVIDER=wave

et les clés :

WAVE_API_KEY
WAVE_SECRET_KEY
WAVE_MERCHANT_ID

etc.

IMPORTANT :

Le reste de l'application ne doit PAS savoir quel fournisseur est utilisé.

Le changement du fournisseur doit être limité à la configuration et
à l'implémentation du provider.

NE JAMAIS mettre les clés Wave dans le frontend.

============================================================
                MODE PAIEMENT INITIAL
============================================================

Puisque l'API Wave officielle n'est pas encore disponible :

implémenter un paiement manuel compatible avec Wave.

Exemple :

Le checkout génère :

- montant
- numéro marchand
- référence commande
- instructions
- identifiant transaction

Le client effectue le paiement Wave.

Il fournit :

- référence transaction
- numéro utilisé
- éventuellement capture/preuve

L'admin peut ensuite :

- confirmer
- refuser
- demander vérification

Statuts :

PENDING
PROCESSING
PAID
FAILED
CANCELLED
REFUNDED
REQUIRES_VERIFICATION

Lorsque l'API officielle sera disponible, remplacer le provider
manuel par WavePaymentProvider sans modifier le checkout.

============================================================
                     LIVRAISON
============================================================

Créer un système de livraison adapté à la Côte d'Ivoire.

Prévoir :

- Abidjan
- autres villes
- communes
- zones
- tarifs
- livraison gratuite
- retrait en boutique
- livraison express
- livraison standard

L'admin peut gérer :

- zones
- tarifs
- délais
- transporteurs
- statut livraison

============================================================
                    COMMANDES
============================================================

Créer un système complet.

Statuts :

PENDING
CONFIRMED
PROCESSING
READY_TO_SHIP
SHIPPED
OUT_FOR_DELIVERY
DELIVERED
CANCELLED
RETURN_REQUESTED
RETURNED
REFUNDED

L'admin doit pouvoir :

- voir la commande
- modifier son statut
- voir le client
- voir les produits
- voir le paiement
- voir la livraison
- ajouter une note interne
- imprimer une facture
- imprimer un bon de préparation
- gérer les retours

============================================================
                    COMPTE CLIENT
============================================================

Créer :

/account

Avec :

- profil
- commandes
- détails commande
- wishlist
- adresses
- préférences
- notifications

============================================================
                    AUTHENTIFICATION
============================================================

Prévoir :

- inscription
- connexion
- déconnexion
- récupération mot de passe
- changement mot de passe
- vérification email si pertinent
- session sécurisée

RBAC :

CUSTOMER
ADMIN
STAFF
SUPER_ADMIN

============================================================
                      WISHLIST
============================================================

Créer :

- ajout produit
- suppression
- liste persistante
- ajout panier
- disponibilité

============================================================
                    RECHERCHE
============================================================

Créer une recherche e-commerce moderne.

Supporter :

- recherche texte
- suggestions
- produits
- catégories
- collections

Filtres :

- catégorie
- prix
- taille
- couleur
- disponibilité
- matière
- collection
- marque/artisan

Tri :

- pertinence
- nouveauté
- prix croissant
- prix décroissant
- popularité

============================================================
                   PROMOTIONS
============================================================

Créer :

- codes promo
- réduction %
- réduction fixe
- montant minimum
- catégories
- produits
- dates
- limites d'utilisation
- usage par client

Prévoir également :

- ventes flash
- promotions automatiques
- bundles

============================================================
                       CMS
============================================================

Créer un mini CMS intégré.

Administrable :

- homepage
- pages statiques
- hero
- carrousels
- collections
- banners
- textes
- images
- CTA
- FAQ
- politique de retour
- conditions
- mentions légales
- politique confidentialité

L'admin doit pouvoir créer des sections dynamiques.

============================================================
                DASHBOARD ADMIN
============================================================

Créer un dashboard professionnel.

Navigation :

Dashboard
Catalogue
Produits
Catégories
Collections
Stocks
Commandes
Clients
Paiements
Livraisons
Promotions
CMS
Homepage
Media
Avis
Analytics
Marketing
Paramètres
Utilisateurs
Logs

============================================================
                 ADMIN DASHBOARD
============================================================

Dashboard principal :

- chiffre d'affaires
- commandes
- panier moyen
- taux de conversion
- clients
- produits vendus
- produits faibles en stock
- commandes en attente
- paiements en attente

Graphiques :

- revenus
- commandes
- visiteurs
- conversion
- ventes par catégorie
- produits populaires
- évolution quotidienne/hebdomadaire/mensuelle

Filtres :

- aujourd'hui
- 7 jours
- 30 jours
- 3 mois
- 12 mois
- période personnalisée

============================================================
                 GESTION DU CONTENU
============================================================

L'admin doit pouvoir modifier sans code :

HERO
- images
- textes
- CTA
- liens

BANNERS
- image
- titre
- description
- CTA

COLLECTIONS
- nom
- description
- image
- produits

SECTIONS
- titre
- description
- image
- ordre
- visibilité

Créer un système de drag-and-drop pour réordonner les sections
si cela améliore l'UX.

============================================================
                    GESTION MEDIA
============================================================

Créer une Media Library.

Fonctions :

- upload
- suppression
- recherche
- filtre
- dossiers
- preview
- alt text
- titre
- compression
- optimisation

Prévoir responsive images.

============================================================
                      AVIS
============================================================

Créer :

- avis clients
- note
- photos
- modération
- publication
- réponse admin

============================================================
                     SEO
============================================================

Chaque page doit pouvoir gérer :

- title
- meta description
- slug
- canonical
- Open Graph
- Twitter/X cards
- structured data
- sitemap
- robots.txt

Produits :

Product structured data.

Organization :

Organization schema.

Breadcrumb :

Breadcrumb schema.

============================================================
                 PERFORMANCE
============================================================

Objectif :

Lighthouse excellent.

Optimiser :

- images
- lazy loading
- code splitting
- caching
- server rendering
- fonts
- animations
- bundle size

Les animations ne doivent jamais dégrader les performances.

Utiliser :

transform
opacity
layout animations

Éviter les animations coûteuses.

Respecter :

prefers-reduced-motion.

============================================================
                   DESIGN SYSTEM
============================================================

Créer un design system cohérent.

Le design doit être :

- premium
- africain contemporain
- élégant
- minimaliste
- chaleureux
- éditorial
- mobile first

NE PAS tomber dans :

- surcharge visuelle
- clichés graphiques africains
- couleurs excessives
- motifs partout

L'identité africaine doit être subtile et premium.

Utiliser la culture textile ivoirienne comme inspiration.

Palette :

Créer une palette cohérente à partir de tons naturels :

- terre
- sable
- ivoire
- noir
- brun
- touches de couleurs textiles africaines

Mais ne pas imposer une palette arbitraire sans justification.

============================================================
                 MOTION DESIGN
============================================================

Utiliser Framer Motion intensivement mais intelligemment.

Animations :

- page transitions
- reveal on scroll
- image reveal
- parallax léger
- hover
- product cards
- cart animation
- buttons
- navigation
- modal
- drawer
- filters
- hero
- carousels

Créer des animations cohérentes.

Exemples :

Hero :

image avec reveal progressif.

Texte :

opacity + translateY.

Produit :

image scale très léger au hover.

Cards :

élévation subtile.

Sections :

stagger animation.

IMPORTANT :

Les animations doivent servir la conversion.

Pas d'animations gratuites.

============================================================
                 MOBILE FIRST
============================================================

Priorité :

1. smartphone
2. tablette
3. desktop

Navigation mobile :

- menu drawer
- recherche
- panier
- compte

Créer un bottom navigation uniquement si pertinent.

Le checkout doit être extrêmement simple sur mobile.

============================================================
                ACCESSIBILITÉ
============================================================

Respecter WCAG.

Prévoir :

- navigation clavier
- focus visible
- aria-label
- contraste
- textes alternatifs
- reduced motion

============================================================
                    SÉCURITÉ
============================================================

Implémenter :

- validation input
- sanitization
- rate limiting
- CSRF lorsque nécessaire
- XSS protection
- SQL injection protection
- secure cookies
- password hashing
- RBAC
- audit logs

Les secrets doivent être uniquement côté serveur.

============================================================
                  ANALYTICS
============================================================

Prévoir une architecture permettant d'intégrer :

- Google Analytics
- Meta Pixel
- TikTok Pixel
- événements e-commerce

Événements :

view_item
add_to_cart
remove_from_cart
begin_checkout
add_payment_info
purchase
search
wishlist_add

Ne pas hardcoder les analytics.

============================================================
                 MARKETING
============================================================

Prévoir :

- newsletter
- campagnes promotionnelles
- codes promo
- banners
- ventes flash
- recommandations produits
- produits similaires
- abandon panier

Architecture prête pour intégration future :

- WhatsApp
- email
- SMS
- notifications push

============================================================
                 WHATSAPP
============================================================

Prévoir une intégration future avec WhatsApp.

Exemples :

"Commander via WhatsApp"

"Contacter le vendeur"

"Partager le produit"

Mais ne pas rendre WhatsApp obligatoire pour le checkout.

============================================================
                  INVENTAIRE
============================================================

Gestion stock :

- stock disponible
- stock réservé
- stock vendu
- seuil minimum
- alerte stock faible
- rupture

Éviter les oversells.

Les modifications de stock doivent être transactionnelles.

============================================================
                RETOURS / REMBOURSEMENTS
============================================================

Prévoir :

- demande retour
- motif
- statut
- validation admin
- réception
- remboursement

Le système doit être compatible avec le futur provider Wave.

============================================================
                     EMAIL
============================================================

Prévoir des templates pour :

- bienvenue
- commande
- paiement
- préparation
- expédition
- livraison
- annulation
- retour
- remboursement
- récupération mot de passe

Ne pas coupler le système à un fournisseur email.

Créer :

EmailProvider

============================================================
                  NOTIFICATIONS
============================================================

Architecture :

NotificationService

avec providers interchangeables.

Canaux :

- email
- SMS
- WhatsApp
- push

============================================================
                   LOGGING
============================================================

Créer des logs structurés.

Administrateur doit pouvoir consulter :

- actions admin
- modifications produits
- changements prix
- changements stock
- changements commandes
- actions paiement

============================================================
                DATABASE
============================================================

Concevoir un schéma PostgreSQL robuste.

Entités minimales :

User
Role
Permission
Customer
Address
Product
ProductVariant
Category
Collection
ProductImage
Inventory
InventoryTransaction
Cart
CartItem
Wishlist
WishlistItem
Order
OrderItem
Payment
PaymentTransaction
PaymentProvider
Shipment
ShippingZone
ShippingRate
Coupon
Promotion
Review
Media
HomepageSection
HeroSlide
Banner
Campaign
Notification
AuditLog

Ajouter toutes les relations nécessaires.

Utiliser :

- UUID
- timestamps
- soft delete lorsque pertinent
- indexes
- unique constraints
- foreign keys

============================================================
                 API
============================================================

Créer une API propre.

Exemples :

/api/products
/api/categories
/api/cart
/api/orders
/api/payments
/api/customers
/api/reviews
/api/coupons
/api/admin/products
/api/admin/orders
/api/admin/cms
/api/admin/analytics

Toutes les routes admin doivent être protégées.

============================================================
                 TESTS
============================================================

Ne pas considérer le projet terminé sans tests.

Créer :

Unit tests
Integration tests
API tests
Authentication tests
Payment tests
Checkout tests
Inventory tests
Order tests

Tests critiques :

- ajout panier
- checkout
- paiement
- confirmation commande
- stock
- coupon
- permissions admin

============================================================
              SEED DATA
============================================================

Créer des données de démonstration réalistes.

Exemples :

- vêtements homme
- vêtements femme
- vêtements enfants
- accessoires
- produits traditionnels
- produits modernes africains

Créer suffisamment de données pour tester correctement :

- catalogue
- filtres
- dashboard
- analytics
- commandes
- promotions

============================================================
               DONNÉES IVOIRIENNES
============================================================

Le système doit supporter :

- Côte d'Ivoire
- XOF / FCFA
- numéros ivoiriens
- communes d'Abidjan
- villes ivoiriennes
- zones de livraison

Ne pas supposer que le marché est américain ou européen.

============================================================
                  UX CONVERSION
============================================================

Appliquer les principes CRO.

Créer :

- CTA visibles
- social proof
- avis
- stock faible
- nouveautés
- promotions
- recommandations
- confiance
- informations livraison
- politique retour claire

Mais éviter les dark patterns.

============================================================
                  ARCHITECTURE FUTURE
============================================================

Le projet doit pouvoir évoluer vers :

- marketplace
- plusieurs vendeurs
- artisans indépendants
- commissions
- multi-boutiques
- application mobile
- PWA
- recommandations IA
- recherche avancée
- personnalisation
- fidélité
- programme ambassadeurs

Ne pas implémenter inutilement ces fonctionnalités maintenant.

Mais ne pas construire une architecture qui empêcherait leur ajout.

============================================================
                    QUALITÉ CODE
============================================================

Le code doit être :

- TypeScript strict
- propre
- modulaire
- documenté
- maintenable
- testable
- scalable

Éviter :

- any inutile
- duplication
- logique métier dans les composants UI
- secrets dans le frontend
- composants gigantesques
- fonctions de plusieurs centaines de lignes
- dépendances inutiles

============================================================
                DESIGN / UI QUALITY
============================================================

Ne construis PAS un simple CRUD avec des couleurs.

Le produit doit donner l'impression d'une vraie marque de mode africaine
haut de gamme.

Chaque écran doit être travaillé :

- spacing
- typography
- hierarchy
- motion
- responsive
- micro-interactions
- empty states
- loading states
- error states
- skeletons
- success states

Créer des composants :

ProductCard
ProductGrid
ProductGallery
PriceDisplay
AddToCartButton
CartDrawer
CheckoutStepper
HeroSection
CollectionSection
ProductCarousel
ReviewSection
NewsletterSection
Header
MobileNavigation
Footer
AdminSidebar
AdminDataTable
AdminMetricCard
AdminChart
MediaPicker
HeroEditor
SectionEditor
etc.

============================================================
                ADMIN CMS EXPERIENCE
============================================================

Le dashboard doit permettre de construire la homepage
comme un véritable page builder simplifié.

Exemple :

Homepage
    |
    + Hero
    + Collection
    + Product Carousel
    + Banner
    + Story
    + Testimonials
    + Newsletter

Chaque section possède :

- enabled
- position
- configuration JSON structurée
- publication status

L'admin peut réorganiser les sections.

============================================================
                  IMPORTANT
============================================================

NE PAS simplement générer plusieurs pages statiques.

Toutes les pages doivent être fonctionnelles.

NE PAS simuler les fonctionnalités avec de faux boutons.

Chaque bouton doit avoir une action réelle.

NE PAS écrire :

TODO
Coming soon
Implement later

pour les fonctionnalités demandées.

Si une intégration externe n'est pas encore disponible
(exemple API Wave), créer une abstraction fonctionnelle et un provider
local/manual permettant de tester le workflow complet.

============================================================
              ENVIRONNEMENTS
============================================================

Prévoir :

.env.example

Variables :

DATABASE_URL=
NEXTAUTH_SECRET=

PAYMENT_PROVIDER=
WAVE_API_KEY=
WAVE_SECRET_KEY=
WAVE_MERCHANT_ID=

STORAGE_PROVIDER=
STORAGE_API_KEY=
STORAGE_SECRET=

EMAIL_PROVIDER=
EMAIL_API_KEY=

ANALYTICS_ID=

etc.

Aucune clé secrète dans Git.

============================================================
                 DEPLOYMENT
============================================================

Préparer le projet pour :

- développement local
- staging
- production

Prévoir :

Docker lorsque pertinent.

README complet avec :

installation
variables environnement
database
migrations
seed
tests
build
deployment
configuration paiement
configuration stockage
configuration analytics

============================================================
                LIVRABLES
============================================================

À la fin, fournir :

1. architecture complète
2. code source
3. schema database
4. migrations
5. seed
6. API
7. frontend
8. dashboard admin
9. CMS
10. système paiement abstrait
11. provider Wave manuel
12. tests
13. documentation
14. .env.example
15. README
16. scripts de développement
17. scripts de production

============================================================
                 RÈGLE ABSOLUE
============================================================

Tu ne dois jamais considérer une fonctionnalité comme terminée
simplement parce que son interface existe.

Une fonctionnalité est considérée TERMINÉE uniquement si :

UI
+
logique métier
+
API
+
base de données
+
validation
+
gestion erreurs
+
états loading
+
états success
+
états failure
+
permissions
+
tests

sont correctement implémentés lorsque pertinents.

============================================================
                MÉTHODE DE TRAVAIL
============================================================

Avant de coder :

1. analyser l'architecture
2. identifier les dépendances
3. définir le modèle de données
4. définir les domaines métier
5. définir les contrats API
6. définir le design system
7. définir les composants
8. définir le workflow paiement
9. définir le CMS
10. définir le dashboard

Puis implémenter progressivement.

À chaque étape :

- vérifier TypeScript
- vérifier lint
- vérifier build
- vérifier migrations
- vérifier tests
- corriger les erreurs

Ne jamais masquer une erreur.

============================================================
                 CRITÈRE FINAL
============================================================

Le résultat final doit être une véritable plateforme e-commerce
ivoirienne moderne, exploitable commercialement.

Elle doit être :

FAST
BEAUTIFUL
ACCESSIBLE
SECURE
SCALABLE
SEO FRIENDLY
MOBILE FIRST
CONVERSION ORIENTED
CMS DRIVEN
PAYMENT PROVIDER AGNOSTIC

Et surtout :

L'administrateur doit pouvoir gérer sa boutique et son contenu
sans modifier le code.
```

### Architecture que je recommande particulièrement

Pour ton cas, je ferais **3 grands blocs** :

```text
                    ┌─────────────────────────┐
                    │       STOREFRONT        │
                    │     Next.js / React     │
                    │ Chakra UI + Framer      │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │      APPLICATION        │
                    │                         │
                    │ Products                │
                    │ Orders                  │
                    │ Customers               │
                    │ Cart                    │
                    │ Checkout                │
                    │ CMS                     │
                    │ Promotions              │
                    │ Inventory               │
                    │ Analytics               │
                    └────────────┬────────────┘
                                 │
                ┌────────────────┼─────────────────┐
                ▼                ▼                 ▼
        ┌─────────────┐  ┌─────────────┐  ┌──────────────┐
        │ PostgreSQL  │  │ Media       │  │ Providers    │
        │             │  │ Storage     │  │              │
        │ Products    │  │ Images      │  │ Wave         │
        │ Orders      │  │ Videos      │  │ Email        │
        │ Customers   │  │             │  │ SMS          │
        │ Inventory   │  │             │  │ WhatsApp     │
        └─────────────┘  └─────────────┘  └──────────────┘
```

Et surtout, pour **Wave**, je veux que ton agent respecte cette architecture :

```text
Checkout
   ↓
PaymentService
   ↓
PaymentProvider interface
   ↓
 ┌─────────────────────────────┐
 │                             │
 ▼                             ▼
ManualWaveProvider       WaveAPIProvider
      │                         │
      │ aujourd'hui             │ plus tard
      ▼                         ▼
Validation admin          API officielle Wave
```

Ainsi, **tu ne reconstruis pas ton système de paiement dans six mois**.

Autre point important : je ne te conseille pas de mettre littéralement Chakra via un simple CDN dans une application Next.js de production. **Chakra UI comme dépendance du projet**, avec son système de thème, est beaucoup plus propre et te donnera une meilleure maîtrise du SSR, du responsive et du design system. Framer Motion peut ensuite piloter la couche motion.

Enfin, je pousserais particulièrement le **CMS Homepage + Media Library + Page Builder** : c'est ce qui transformera ton dashboard d'un simple panneau d'administration en véritable **outil de pilotage commercial**. Tu pourras lancer une nouvelle collection le matin, changer le Hero l'après-midi, mettre une promotion le soir et réorganiser complètement la homepage sans toucher une ligne de code.
