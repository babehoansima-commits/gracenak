/* ═══════════════════════════════════════════
   MAISON PÉTALE — Catalogue
   ═══════════════════════════════════════════

   CHAQUE PRODUIT CONTIENT :
   - id        : identifiant unique (sert partout)
   - name      : nom affiché
   - image     : chemin de la photo
   - price     : prix barré (prix "normal")
   - promo     : prix payé (affiché en rose)
   - whatsapp  : numéro international, sans + ni espaces
   - category  : robes / hauts / bas / vestes / mailles
   - badge     : optionnel ("Coup de cœur", "Nouveauté"…)
   - sizes     : optionnel, tableau

   POUR AJOUTER UN PRODUIT :
   copiez un bloc, changez l'id et les infos. C'est tout.
   ═══════════════════════════════════════════ */

const SITE_URL = "https://maisonpetale.fr";

const CATEGORIES = [
  { id:"all",     label:"Tout" },
  { id:"robes",   label:"Robes" },
  { id:"hauts",   label:"Hauts" },
  { id:"bas",     label:"Bas" },
  { id:"maillots",  label:"maillots" },
  ];

const PRODUCTS = [
  {
    id: "1",
    name: "body blanc",
    image: "img1.jpg",
    price: 5000,
    promo: 4000,
    whatsapp: "243960298459",
    category: "hauts",
    badge: "Coup de cœur"
  },
  {
    id: "1",
    name: "body orange",
    image: "img2.jpg",
    price: 4500,
    promo: 4000,
    whatsapp: "243960298459",
    category: "hauts",
    badge: null
  },
  {
    id: "3",
    name: "body bleu",
    image: "img3.jpg",
    price: 4500,
    promo: 4000,
    whatsapp: "243960298459",
    category: "hauts",
    badge: null
  },
  {
    id: "4",
    name: "corset blanc",
    image: "img4.jpg",
    price: 5000,
    promo: 4000,
    whatsapp: "243960298459",
    category: "hauts",
    badge: null
  },
  {
    id: "5",
    name: "maillot rouge",
    image: "img5.jpg",
    price: 6000,
    promo: 5000,
    whatsapp: "243960298459",
    category: "maillots",
    badge: "Nouveauté"
  },
  {
    id: "6",
    name: "robe moulante",
    image: "img6.jpg",
    price: 11000,
    promo: 10000,
    whatsapp: "243960298459",
    category: "robes",
    badge: null
  },
  {
    id: "7",
    name: "maillot rose",
    image: "img7.jpg",
    price: 6000,
    promo: 5000,
    whatsapp: "243960298459",
    category: "maillots",
    badge: null
  },
  {
    id: "8",
    name: "maillot jaune",
    image: "img8.jpg",
    price: 5500,
    promo: 5000,
    whatsapp: "243960298459",
    category: "maillots",
    badge: null
  },
  {
    id: "9",
    name: "ensemble body et jupe",
    image: "img9.jpg",
    price: 11000,
    promo: 10000,
    whatsapp: "243960298459",
    category: "bas",
    badge: null
  },
  {
    id: "10",
    name: "maillot noir",
    image: "img10.jpg",
    price: 5500,
    promo: 5000,
    whatsapp: "243960298459",
    category: "maillots",
    badge: null
  },
  {
    id: "11",
    name: "body casual",
    image: "img11.jpg",
    price: 4500,
    promo: 4000,
    whatsapp: "243960298459",
    category: "hauts",
    badge: null
  },
  {
    id: "12",
    name: "maillot rose",
    image: "img12.jpg",
    price: 5500,
    promo: 5000,
    whatsapp: "243960298459",
    category: "maillots",
    badge: null
  }
];