export const ROOMS = [
  {
    id: 1,
    name: 'Deluxe Room',
    badge: 'Popular',
    price: 320,
    icon: '◈',
    bg: 'linear-gradient(135deg, #1e1410, #2c1e14)',
    desc: 'Elegantly appointed with city views, featuring a king bed, marble bathroom, and curated amenities.',
    amenities: ['King Bed', 'City View', 'Marble Bath', 'Mini Bar'],
    features: [
      '48 sqm of living space',
      'Egyptian cotton linens',
      'Nespresso machine',
      '24-hour room service',
      'Daily housekeeping',
      'Complimentary WiFi',
      'Smart TV with streaming',
      'In-room safe',
    ],
  },
  {
    id: 2,
    name: 'Junior Suite',
    badge: 'Best Value',
    price: 560,
    icon: '◇',
    bg: 'linear-gradient(135deg, #14181e, #1a2028)',
    desc: 'A refined retreat with a separate living area, panoramic views, and premium spa bath products.',
    amenities: ['King Bed', 'Panoramic View', 'Separate Living', 'Bathtub'],
    features: [
      '75 sqm with living room',
      'Marble soaking tub',
      'Premium bar setup',
      'Priority check-in',
      'Pillow menu',
      'Butler service',
      'Complimentary breakfast',
      'Terrace access',
    ],
  },
  {
    id: 3,
    name: 'Penthouse Suite',
    badge: 'Exclusive',
    price: 1200,
    icon: '★',
    bg: 'linear-gradient(135deg, #1e1a10, #28241a)',
    desc: 'The pinnacle of luxury — a private sanctuary with a rooftop terrace, private pool, and bespoke service.',
    amenities: ['Private Pool', 'Rooftop Terrace', 'Butler', 'Grand Piano'],
    features: [
      '220 sqm private sanctuary',
      'Private plunge pool',
      'Dedicated butler 24/7',
      'Chef on request',
      'Rolls-Royce transfer',
      'Helipad access',
      'Personal shopper',
      'VIP lounge access',
    ],
  },
];

export const AMENITIES = [
  {
    id: 1,
    name: 'Spa & Wellness',
    desc: 'Award-winning spa with 12 treatment rooms, steam baths, and signature therapies.',
    iconPath: 'M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12',
    iconExtra: 'circle',
  },
  {
    id: 2,
    name: 'Fine Dining',
    desc: 'Three restaurants led by Michelin-starred chefs, from casual brasserie to haute cuisine.',
    iconPath: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3',
  },
  {
    id: 3,
    name: 'Rooftop Pool',
    desc: 'Heated infinity pool with panoramic city views, open year-round for guests.',
    iconPath: 'M2 20a2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1M22 16h-1a1 1 0 01-1-1V9a1 1 0 00-1-1h-4a1 1 0 00-1 1v6a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 00-1-1H4a1 1 0 00-1 1v6a1 1 0 01-1 1H1M2 12h20',
  },
  {
    id: 4,
    name: 'Fitness Center',
    desc: 'State-of-the-art gym with personal trainers, yoga studio, and wellness programs.',
    iconPath: 'M18 5H9M18 9H9M18 13H9M5 5v4M3 7h4M5 13v4M3 15h4',
  },
  {
    id: 5,
    name: 'Concierge',
    desc: 'Expert concierge team available 24/7 for reservations, tours, and special arrangements.',
    iconPath: 'M12 2a10 10 0 100 20A10 10 0 0012 2zM12 6v6l4 2',
  },
  {
    id: 6,
    name: 'Event Spaces',
    desc: 'Seven versatile event spaces accommodating up to 500 guests for any occasion.',
    iconPath: 'M3 10h18M3 6h18M3 14h18M3 18h18',
  },
  {
    id: 7,
    name: 'Valet Parking',
    desc: 'Complimentary valet parking for hotel guests with electric vehicle charging stations.',
    iconPath: 'M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3M13 21h8M13 17h8M16 13l3 4-3 4',
  },
  {
    id: 8,
    name: 'Bar & Lounge',
    desc: 'Sophisticated cocktail bar with an extensive cellar and live jazz performances nightly.',
    iconPath: 'M8 22h8M7 10h10l-1 8H8L7 10zM12 10V5M5 5h14',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'An extraordinary experience from beginning to end. The penthouse suite is unlike anything I have ever encountered — a true masterpiece of luxury.',
    author: 'Amelia Richardson',
    location: 'London, UK',
    initials: 'AR',
    stars: 5,
  },
  {
    id: 2,
    quote:
      'The spa team was exceptional, the cuisine divine, and the staff remembered our names from the moment we arrived. We will return without question.',
    author: 'François Beaumont',
    location: 'Lyon, Egypt',
    initials: 'FB',
    stars: 5,
  },
  {
    id: 3,
    quote:
      'Cairo is the standard against which all other hotels should be measured. Impeccable taste, impeccable service, impeccable in every way.',
    author: 'Yuki Nakamura',
    location: 'Tokyo, Japan',
    initials: 'YN',
    stars: 5,
  },
];

export const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Rooms',      href: '#rooms' },
  { label: 'Amenities',  href: '#amenities' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Contact',    href: '#contact' },
];

export const FOOTER_LINKS = {
  Navigate: [
    { label: 'About Us',   href: '#about' },
    { label: 'Rooms',      href: '#rooms' },
    { label: 'Amenities',  href: '#amenities' },
    { label: 'Gallery',    href: '#gallery' },
    { label: 'Contact',    href: '#contact' },
  ],
  Services: [
    { label: 'Spa & Wellness',   href: '#' },
    { label: 'Fine Dining',      href: '#' },
    { label: 'Concierge',        href: '#' },
    { label: 'Events',           href: '#' },
    { label: 'Airport Transfer', href: '#' },
  ],
  Policies: [
    { label: 'Booking Policy', href: '#' },
    { label: 'Cancellation',   href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use',   href: '#' },
  ],
};
