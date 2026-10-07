import heroVilla from '../assets/images/hero_luxury_villa_lagos_1791382093541.jpg';
import penthouseInterior from '../assets/images/service_interior_penthouse_1791382106826.jpg';
import poolTerrace from '../assets/images/service_private_pool_terrace_1791382117419.jpg';
import luxuryKitchen from '../assets/images/service_luxury_fitted_kitchen_1791382135755.jpg';
import architecturalExterior from '../assets/images/gallery_architectural_exterior_1791382146005.jpg';
import conciergeLifestyle from '../assets/images/experience_concierge_lifestyle_1791382157214.jpg';

export interface PropertyItem {
  id: string;
  title: string;
  category: 'acquisition' | 'shortlet' | 'investment';
  categoryLabel: string;
  location: string;
  priceNGN: number;
  priceUSD: number;
  priceGBP: number;
  priceDisplayType: 'total' | 'per_night';
  beds: number;
  baths: number;
  areaSqM: number;
  image: string;
  titleDeed?: string;
  projectedROI?: string;
  tagline: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
  tag: string;
  description: string;
}

export const PROPERTIES: PropertyItem[] = [
  {
    id: 'prop-1',
    title: 'The Sovereign Villa: 5-Bed Contemporary Haven',
    category: 'acquisition',
    categoryLabel: 'For Acquisition',
    location: 'Lekki Phase 1, Lagos',
    priceNGN: 480000000,
    priceUSD: 330000,
    priceGBP: 260000,
    priceDisplayType: 'total',
    beds: 5,
    baths: 6,
    areaSqM: 620,
    image: heroVilla,
    titleDeed: "Governor's Consent",
    tagline: 'Private infinity pool, full automation & double-height atrium',
    description:
      'An architectural tour de force in prime Lekki Phase 1. Features expansive marble living spaces, Italian-fitted chef kitchen, rooftop lounge, maid quarters, and biometric access control.',
    features: [
      'Private Heated Pool',
      'Fully Fitted Italian Kitchen',
      'Smart Home Automation',
      'Cinema Room',
      'Governor’s Consent Verified',
    ],
    isFeatured: true,
  },
  {
    id: 'prop-2',
    title: 'The Riviera Terrace Duplex: 4-Bedroom Sanctuary',
    category: 'acquisition',
    categoryLabel: 'For Acquisition',
    location: 'Ajah / Chevron Corridor, Lagos',
    priceNGN: 240000000,
    priceUSD: 165000,
    priceGBP: 130000,
    priceDisplayType: 'total',
    beds: 4,
    baths: 5,
    areaSqM: 410,
    image: poolTerrace,
    titleDeed: 'Certificate of Occupancy (C of O)',
    tagline: 'Contemporary POP finishes, private courtyard & swimming pool',
    description:
      'Impeccably detailed modern terrace duplex nestled in a serene, gated enclave. Designed for elevated family living or high-yielding executive rental yield.',
    features: [
      'Private Swimming Pool',
      'Fitted Chef Kitchen',
      'Modern POP Ceilings',
      '24/7 Gated Security',
      'Ample 4-Car Parking',
    ],
    isFeatured: true,
  },
  {
    id: 'prop-3',
    title: 'The Skyview Penthouse & Private Lounge',
    category: 'shortlet',
    categoryLabel: 'Curated Short-Let',
    location: 'Victoria Island / Oniru, Lagos',
    priceNGN: 350000,
    priceUSD: 240,
    priceGBP: 190,
    priceDisplayType: 'per_night',
    beds: 3,
    baths: 4,
    areaSqM: 320,
    image: penthouseInterior,
    tagline: 'Panoramic Atlantic views, private plunge pool & dedicated chef',
    description:
      'The quintessential April Xperience short stay. Handcrafted for diaspora executives, international travelers, and luxury weekend getaways with 24/7 unmetered solar backup power.',
    features: [
      'Panoramic Ocean & Skyline Views',
      '24/7 Guaranteed Power & High-Speed WiFi',
      'Private Chef on Demand',
      'Bespoke Chauffeur Service',
      'Daily Concierge & Housekeeping',
    ],
    isFeatured: true,
  },
  {
    id: 'prop-4',
    title: 'The Onyx Suite: Designer Culinary Residence',
    category: 'shortlet',
    categoryLabel: 'Curated Short-Let',
    location: 'Ikoyi, Lagos',
    priceNGN: 280000,
    priceUSD: 195,
    priceGBP: 155,
    priceDisplayType: 'per_night',
    beds: 2,
    baths: 3,
    areaSqM: 210,
    image: luxuryKitchen,
    tagline: 'Bespoke marble kitchen, high acoustic insulation & serene terrace',
    description:
      'Immerse yourself in Ikoyi luxury. Features custom waterfall Calacatta marble, integrated wine cellar, ambient mood illumination, and private gym access.',
    features: [
      'Calacatta Marble Island Kitchen',
      'Sonos Smart Audio System',
      '24/7 Security Escort Option',
      'Infinity Pool & Wellness Access',
      'Dedicated Experience Butler',
    ],
    isFeatured: false,
  },
  {
    id: 'prop-5',
    title: 'The Haven Prime: 6-Unit Off-Plan Investment Portfolio',
    category: 'investment',
    categoryLabel: 'Investment Advisory',
    location: 'Lekki Peninsula Corridor, Lagos',
    priceNGN: 650000000,
    priceUSD: 450000,
    priceGBP: 355000,
    priceDisplayType: 'total',
    beds: 12,
    baths: 14,
    areaSqM: 1400,
    image: architecturalExterior,
    titleDeed: "Governor's Consent",
    projectedROI: '22.8% Annual ROI via Short-Let Strategy',
    tagline: 'Pre-vetted development with high capital appreciation trajectory',
    description:
      'Targeted for serious local and diaspora wealth builders. April Realty Trust provides complete end-to-end vetting, construction milestone audits, and turnkey short-let operational takeover.',
    features: [
      'Pre-Verified Legal Title & Gazette',
      'Turnkey Property Management Contract',
      'Guaranteed Minimum 18% Net Yield',
      'Milestone-Based Escrow Payments',
      'Full Diaspora Investor Oversight',
    ],
    isFeatured: true,
  },
  {
    id: 'prop-6',
    title: 'The Signature Club Rooftop Residence',
    category: 'shortlet',
    categoryLabel: 'Curated Short-Let',
    location: 'Banana Island Border, Ikoyi',
    priceNGN: 420000,
    priceUSD: 290,
    priceGBP: 230,
    priceDisplayType: 'per_night',
    beds: 4,
    baths: 5,
    areaSqM: 480,
    image: conciergeLifestyle,
    tagline: 'Private sunset terrace, fire feature & private boat slip access',
    description:
      'Where Lagos sophistication converges. Host intimate private dinners or unwind in effortless serenity overlooking the lagoon with white-glove April hospitality.',
    features: [
      'Private Lagoon Sunset Deck',
      'Ambient Fireplace & Lounge',
      'Boat Charter & Slip Access',
      '24/7 Armored Security Option',
      'VIP Airport Pickup Included',
    ],
    isFeatured: false,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Dusk Reflections at The Sovereign',
    subtitle: 'Private Pool & Facade Design',
    location: 'Lekki Phase 1',
    image: heroVilla,
    aspect: 'landscape',
    tag: 'Architectural Exterior',
    description:
      'Cantilevered upper volumes with seamless floor-to-ceiling double glazing, reflecting the twilight glow of Lagos.',
  },
  {
    id: 'gal-2',
    title: 'The Grand Living Chamber',
    subtitle: 'POP Linear Lighting & Italian Marble',
    location: 'Victoria Island Penthouse',
    image: penthouseInterior,
    aspect: 'landscape',
    tag: 'Interior Architecture',
    description:
      'Precision recessed lighting, seamless slab porcelain floors, and tailored champagne accents.',
  },
  {
    id: 'gal-3',
    title: 'Contemporary Monolith Elevation',
    subtitle: 'Geometric Concrete & Timber Louvers',
    location: 'Lekki Peninsula',
    image: architecturalExterior,
    aspect: 'portrait',
    tag: 'Modern Facades',
    description:
      'Striking vertical balance of pristine white stucco, tempered architectural glass, and tropical vegetation.',
  },
  {
    id: 'gal-4',
    title: 'Culinary Masterwork',
    subtitle: 'Matte Charcoal & Calacatta Island',
    location: 'Ikoyi Luxury Residence',
    image: luxuryKitchen,
    aspect: 'landscape',
    tag: 'Fitted Kitchens',
    description:
      'Integrated Bosch and Miele appliances with under-counter warm luminescence and custom brushed brass fixtures.',
  },
  {
    id: 'gal-5',
    title: 'The Courtyard Oasis',
    subtitle: 'Azure Lap Pool & Sun Deck',
    location: 'Ajah Enclave',
    image: poolTerrace,
    aspect: 'landscape',
    tag: 'Pool & Lifestyle',
    description:
      'Private enclosed pool courtyard providing total acoustic insulation and tranquil retreat.',
  },
  {
    id: 'gal-6',
    title: 'Lagoon Twilight Lounge',
    subtitle: 'Sunset Fire Terrace',
    location: 'Banana Island Border',
    image: conciergeLifestyle,
    aspect: 'landscape',
    tag: 'Lifestyle & Hospitality',
    description:
      'Curated evening ambiance designed for high-profile diaspora guests and executive unwinding.',
  },
];

export const SERVICES_SUMMARY = [
  {
    number: '01',
    title: 'Curated Luxury Acquisitions',
    badge: 'Residential Sales',
    description:
      'We source, vet, and negotiate prime residential acquisitions across Lekki Phase 1, Ikoyi, Victoria Island, and Ajah. Every single listing carries verified Governor’s Consent or C of O with clean root of title.',
    deliverables: [
      '100% Pre-verified title search & land registry validation',
      'Structural and MEP architectural due diligence',
      'Discreet off-market listings not found on public portals',
      'Tailored price negotiation and transparent closing',
    ],
  },
  {
    number: '02',
    title: 'The April Short-Let Xperience',
    badge: 'Bespoke Hospitality',
    description:
      'Ultra-serviced, private luxury residences engineered for diaspora returnees, visiting executives, and luxury holidaymakers who refuse generic hotel suites.',
    deliverables: [
      'Guaranteed 24/7 unmetered solar-hybrid power & high-speed Starlink',
      'Private swimming pools, cinemas & fitted chef kitchens',
      'White-glove concierge, on-demand private chefs & security detail',
      'Seamless frictionless mobile check-in and check-out',
    ],
  },
  {
    number: '03',
    title: 'Real Estate Wealth & Investment Advisory',
    badge: 'Capital Growth',
    description:
      'High-yield investment structuring for discerning local and international investors seeking double-digit returns through capital appreciation and short-let cash flow.',
    deliverables: [
      'Off-plan development vetting and milestone escrow auditing',
      'Targeted 18% – 25% annualized net short-let yields',
      'Complete hands-off diaspora portfolio oversight',
      'Quarterly financial statements and tax-efficient planning',
    ],
  },
  {
    number: '04',
    title: 'Property & Trust Asset Management',
    badge: 'Asset Preservation',
    description:
      'Preserve the value of your high-end real estate through April Realty Trust’s rigorous facility management, tenant screening, and preventive maintenance regimes.',
    deliverables: [
      'Comprehensive tenant background and liquidity vetting',
      'Routine MEP, pool, and structural preventative maintenance',
      'Automated rent disbursement with owner portal transparency',
      '24/7 emergency response and dedicated property managers',
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Government Pre-Verified Titles',
    tagline: 'Zero Legal Ambiguity',
    text: 'Every property represented by April Realty Trust undergoes stringent title verification before client presentation. We do not deal in unverified community land or encumbered certificates.',
  },
  {
    title: 'The True "Thrills of Life" Experience',
    tagline: 'Architectural Discernment',
    text: 'From bespoke POP linear ceilings and Italian marble to private infinity pools and smart home automation, we curate only residences that elevate your lifestyle standard.',
  },
  {
    title: 'Diaspora-First Transparency',
    tagline: 'Invest From Anywhere in the World',
    text: 'Based in London, Atlanta, Toronto, or Dubai? Experience our live virtual video walkthroughs, digital milestone contracts, and audited escrow disbursements without family stress.',
  },
  {
    title: 'Bespoke Turnkey Hospitality',
    tagline: 'Concierge-Grade Comfort',
    text: 'Our short-let stays are managed with Five-Star hospitality standards: private chefs, airport luxury transfers, unmetered clean power, and quiet discretion.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Acquiring our 5-bedroom villa in Lekki Phase 1 while living in London felt daunting until we engaged April Realty Trust. Their legal transparency, video updates, and Governor’s Consent verification gave us 100% peace of mind.',
    author: 'Dr. Babatunde & Folashade O.',
    role: 'Diaspora Property Owners · London, UK',
    detail: 'Acquired 5-Bed Contemporary Villa',
  },
  {
    quote:
      'The April Xperience short-let penthouse in Victoria Island exceeded five-star hotel standards. Flawless 24/7 power, private pool, modern kitchen, and an attentive concierge team that anticipated every need during my 3-week business trip.',
    author: 'Marcus Vance',
    role: 'Energy Infrastructure Executive · Houston, USA',
    detail: '3-Week Corporate Penthouse Stay',
  },
  {
    quote:
      'April Realty Trust helped me structure two off-plan duplex units in the Chevron corridor. Today, their team manages them as short-lets, generating over 22% net annual yield directly to my account.',
    author: 'Engr. Nnamdi K.',
    role: 'Portfolio Investor · Lagos, Nigeria',
    detail: '2 Terrace Duplex Portfolio',
  },
];

export const CONTACT_INFO = {
  instagram: 'https://www.instagram.com/aprilxperience/',
  instagramHandle: '@aprilxperience',
  whatsappNumber: '+2348124009021',
  whatsappLink:
    'https://wa.me/2348124009021?text=Hello%20April%20Xperience%2C%20I%20am%20interested%20in%20inquiring%20about%20a%20luxury%20residence%20%2F%20short-let%20stay.',
  phoneDisplay: '+234 (0) 812 400 9021',
  phoneAlt: '+234 (0) 803 000 4812',
  email: 'concierge@aprilxperience.com',
  location: 'Admiralty Way, Lekki Peninsula Phase 1, Lagos, Nigeria',
  officeHours: 'Monday – Saturday: 8:00 AM – 7:00 PM (24/7 Concierge for Guests)',
};
