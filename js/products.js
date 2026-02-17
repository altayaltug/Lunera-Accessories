// js/products.js
// Lunera Accessories demo catalog: 3 categories x 5 products (15 total)

function svgPlaceholder(text) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1100">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f6f2ee"/>
        <stop offset="1" stop-color="#efe9e3"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <rect x="70" y="70" width="760" height="960" rx="28" fill="#ffffff" opacity="0.65"/>
    <text x="50%" y="48%" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="44" fill="#111">
      ${text}
    </text>
    <text x="50%" y="54%" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#555">
      Placeholder image (replace later)
    </text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const CATEGORIES = [
  { id: "necklaces", name: "Necklaces", tagline: "Layered, minimal, everyday shine" },
  { id: "bracelets", name: "Bracelets", tagline: "Clean lines, soft sparkle" },
  { id: "earrings",  name: "Earrings",  tagline: "From subtle studs to hoops" },
];

export const PRODUCTS = [
  { id:"LNEC-001", category:"necklaces", name:"Luna Pearl Pendant", price:899, currency:"TRY", badge:"New",
    image: svgPlaceholder("Luna Pearl Pendant"),
    description:"A minimal pearl pendant designed for daily wear. Lightweight, clean, and timeless.",
    details:["Material: Stainless steel (gold tone)","Pendant: Pearl-style bead","Chain length: 42 cm + 5 cm extender","Nickel-free (demo claim)"] },
  { id:"LNEC-002", category:"necklaces", name:"Celeste Chain", price:749, currency:"TRY", badge:"",
    image: svgPlaceholder("Celeste Chain"),
    description:"A sleek chain that looks great on its own or stacked with your favorites.",
    details:["Material: Stainless steel (silver tone)","Chain type: Flat link","Length: 40 cm + 5 cm extender"] },
  { id:"LNEC-003", category:"necklaces", name:"Aurora Drop", price:969, currency:"TRY", badge:"Bestseller",
    image: svgPlaceholder("Aurora Drop"),
    description:"A delicate drop necklace with a soft sparkle—subtle from afar, striking up close.",
    details:["Material: Stainless steel (gold tone)","Charm: Crystal-style drop","Length: 44 cm + 5 cm extender"] },
  { id:"LNEC-004", category:"necklaces", name:"Nova Layered", price:1099, currency:"TRY", badge:"",
    image: svgPlaceholder("Nova Layered"),
    description:"Two layers, one piece. Instant styling with a clean, modern silhouette.",
    details:["Material: Stainless steel (gold tone)","Double-layer design","Lengths: 38 cm & 45 cm + extenders"] },
  { id:"LNEC-005", category:"necklaces", name:"Eclipse Choker", price:699, currency:"TRY", badge:"",
    image: svgPlaceholder("Eclipse Choker"),
    description:"A minimal choker that frames the neckline—sharp, simple, and versatile.",
    details:["Material: Stainless steel (silver tone)","Length: 32 cm + 8 cm extender"] },

  { id:"LBRC-001", category:"bracelets", name:"Solstice Cuff", price:799, currency:"TRY", badge:"New",
    image: svgPlaceholder("Solstice Cuff"),
    description:"A clean cuff bracelet—minimal statement, maximum versatility.",
    details:["Material: Stainless steel (gold tone)","Adjustable open cuff"] },
  { id:"LBRC-002", category:"bracelets", name:"Orbit Beads", price:649, currency:"TRY", badge:"",
    image: svgPlaceholder("Orbit Beads"),
    description:"Beaded comfort with a polished finish—easy to wear, easy to style.",
    details:["Material: Stainless steel beads","Elastic fit (one size)"] },
  { id:"LBRC-003", category:"bracelets", name:"Moonlink Bracelet", price:899, currency:"TRY", badge:"Bestseller",
    image: svgPlaceholder("Moonlink Bracelet"),
    description:"A refined link bracelet with a balanced shine—everyday luxury feel.",
    details:["Material: Stainless steel (silver tone)","Length: 16 cm + 4 cm extender"] },
  { id:"LBRC-004", category:"bracelets", name:"Starlit Charm", price:729, currency:"TRY", badge:"",
    image: svgPlaceholder("Starlit Charm"),
    description:"A subtle charm bracelet with a soft sparkle that catches the light.",
    details:["Material: Stainless steel (gold tone)","Length: 15 cm + 5 cm extender"] },
  { id:"LBRC-005", category:"bracelets", name:"Halo Minimal", price:599, currency:"TRY", badge:"",
    image: svgPlaceholder("Halo Minimal"),
    description:"Ultra-minimal bracelet with a smooth finish—perfect for stacking.",
    details:["Material: Stainless steel (silver tone)","Length: 16 cm + 4 cm extender"] },

  { id:"LEAR-001", category:"earrings", name:"Luna Hoops", price:699, currency:"TRY", badge:"New",
    image: svgPlaceholder("Luna Hoops"),
    description:"Classic hoops with a modern thickness—lightweight and clean.",
    details:["Material: Stainless steel (gold tone)","Diameter: ~22 mm","Closure: Click-lock"] },
  { id:"LEAR-002", category:"earrings", name:"Celeste Studs", price:529, currency:"TRY", badge:"",
    image: svgPlaceholder("Celeste Studs"),
    description:"Minimal studs for everyday wear—small, sharp, effortless.",
    details:["Material: Stainless steel (silver tone)","Size: ~6 mm"] },
  { id:"LEAR-003", category:"earrings", name:"Aurora Drops", price:799, currency:"TRY", badge:"Bestseller",
    image: svgPlaceholder("Aurora Drops"),
    description:"Delicate drop earrings with a refined sparkle—dress up or down.",
    details:["Material: Stainless steel (gold tone)","Drop length: ~25 mm"] },
  { id:"LEAR-004", category:"earrings", name:"Nova Mini Hoops", price:649, currency:"TRY", badge:"",
    image: svgPlaceholder("Nova Mini Hoops"),
    description:"Mini hoops designed for comfort—clean look, easy daily wear.",
    details:["Material: Stainless steel (silver tone)","Diameter: ~14 mm"] },
  { id:"LEAR-005", category:"earrings", name:"Eclipse Ear Cuff", price:499, currency:"TRY", badge:"",
    image: svgPlaceholder("Eclipse Ear Cuff"),
    description:"No piercing needed—minimal ear cuff with a polished finish.",
    details:["Material: Stainless steel (gold tone)","Adjustable fit"] },
];
