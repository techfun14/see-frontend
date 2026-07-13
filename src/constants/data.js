// ─────────────────────────────────────────────
//  DATA.JS  —  ALL SITE CONTENT LIVES HERE
//  Update this file to change any text, number,
//  or contact detail on the website.
// ─────────────────────────────────────────────

// ── NAVIGATION ───────────────────────────────
export const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

// ── COMPANY INFO ─────────────────────────────
export const COMPANY = {
  name:     'SEE Imaging',
  tagline:  'Advanced Diagnostic Solutions',
  phone:    '+91-9424482233',
  email:    'info@seeimaging.com',
  address:  'Bhopal, Madhya Pradesh, India',
  whatsapp: 'https://wa.me/919424482233',
  hours:    'Mon–Sat, 10:00 AM – 6:30 PM',
}

// ── HERO STATS ───────────────────────────────
export const HERO_STATS = [
  { number: '100', suffix: '+', label: 'Installations'    },
  { number: '15',  suffix: '+', label: 'Years experience' },
  { number: '20',  suffix: '+', label: 'Cities covered'   },
]

// ── HERO EQUIPMENT LIST ──────────────────────
export const HERO_EQUIPMENT = [
  { name: 'GE CT Scan — Single to 128 Slice', badge: 'Available' },
  { name: 'GE PET-CT — Discovery 600 & 610',  badge: 'Available' },
  { name: 'GE MRI Systems',                   badge: 'Available' },
  { name: 'CT Spare Parts — All Models',       badge: 'In Stock'  },
  { name: 'AMC / CMC Service Contracts',       badge: 'Pan India' },
]

// ── WHAT WE DO ───────────────────────────────
// These 4 cards appear on the homepage summary section
export const WHAT_WE_DO = [
  {
    iconKey: 'cart',
    title: 'CT Scan & MRI Sales',
    desc: 'Refurbished GE CT Scan machines from Single Slice to 128 Slice, along with MRI systems. Quality tested, competitively priced.',
  },
  {
    iconKey: 'shield',
    title: 'AMC / CMC Contracts',
    desc: 'Annual and comprehensive maintenance contracts tailored to your equipment and budget. Full pan India coverage.',
  },
  {
    iconKey: 'tool',
    title: 'Installation & Dismantling',
    desc: 'End-to-end installation — site preparation, setup, calibration and safe dismantling when needed.',
  },
  {
    iconKey: 'parts',
    title: 'Spare Parts & Repair',
    desc: 'Wide inventory of GE CT Scan spare parts with fast dispatch across India. In-house repair service also available.',
  },
]

// ── PRODUCTS ─────────────────────────────────
export const PRODUCTS = [
  {
    id: 1,
    category: 'GE CT Scanner',
    title: 'Single / 4 / 8 Slice CT Scanner',
    description: 'Ideal for small clinics and diagnostic centres. Tested and certified. Pan India delivery and installation.',
    badge: 'Available',
    badgeClass: 'badge--green',
    label: 'CT',
    // image: '/images/ct-single.jpg',
  },
  {
    id: 2,
    category: 'GE CT Scanner',
    title: '16 / 32 / 64 Slice CT Scanner',
    description: 'Mid to high range CT systems for diagnostic centres with moderate to heavy patient loads. Full AMC support.',
    badge: 'Available',
    badgeClass: 'badge--green',
    label: 'CT',
    // image: '/images/ct-64.jpg',
  },
  {
    id: 3,
    category: 'GE CT Scanner',
    title: '128 Slice CT Scanner',
    description: 'Top-tier imaging capability at refurbished pricing. Suited for large hospitals and advanced imaging labs.',
    badge: 'Available',
    badgeClass: 'badge--green',
    label: 'CT',
    // image: '/images/ct-128.jpg',
  },
  {
    id: 4,
    category: 'MRI System',
    title: 'GE MRI Systems',
    description: 'Refurbished MRI units for hospitals requiring high-field imaging. Enquire for full specifications and pricing.',
    badge: 'Available',
    badgeClass: 'badge--green',
    label: 'MRI',
    // image: '/images/mri.jpg',
  },
  {
    id: 5,
    category: 'Spare Parts',
    title: 'GE CT Scan Spare Parts',
    description: 'Genuine and compatible spare parts for all GE CT models. Fast dispatch across India. Repair service available.',
    badge: 'In Stock',
    badgeClass: 'badge--orange',
    label: '⚙',
    // image: '/images/spare-parts.jpg',
  },
]

// ── WHY CHOOSE US ────────────────────────────
export const WHY_FEATURES = [
  {
    iconKey: 'team',
    title: 'Experienced technical support',
    desc: 'Our engineers have deep hands-on expertise with GE CT and MRI systems — from installation to the most complex repairs.',
  },
  {
    iconKey: 'shield',
    title: 'Tested & quality equipment',
    desc: 'Every machine is rigorously tested before delivery. You get reliability and peace of mind, not surprises.',
  },
  {
    iconKey: 'price',
    title: 'Competitive pricing',
    desc: 'Get the imaging capabilities your facility needs without stretching your budget. Refurbished done right.',
  },
  {
    iconKey: 'pin',
    title: 'Pan India service support',
    desc: 'Wherever you are in India, our service network covers you for maintenance, repairs, and spare parts.',
  },
]

// ── WHY STATS ────────────────────────────────
export const WHY_STATS = [
  { number: '100', suffix: '+', label: 'Successful installations', accent: true  },
  { number: '15',  suffix: '+', label: 'Years of experience',      accent: false },
  { number: '20',  suffix: '+', label: 'Cities covered',           accent: false },
  { number: '8',   suffix: '',  label: 'Service categories',       accent: false },
]

// ── SERVICES ─────────────────────────────────
// These are the exact 8 services the client listed
export const SERVICES = [
  {
    number: '01',
    title: 'Refurbished CT Scan & MRI Sales',
    desc: 'GE CT Scan machines from Single Slice to 128 Slice, along with MRI systems. Quality-tested, competitively priced, pan India delivery.',
  },
  {
    number: '02',
    title: 'Preventive Maintenance (PM)',
    desc: 'Scheduled preventive maintenance to keep your CT or MRI system at peak performance and prevent costly downtime.',
  },
  {
    number: '03',
    title: 'Service Support',
    desc: 'Reliable on-call service support for GE CT Scan and MRI systems. Our engineers respond quickly to minimise equipment downtime.',
  },
  {
    number: '04',
    title: 'AMC / CMC Contracts',
    desc: 'Annual and comprehensive maintenance contracts tailored to your equipment and budget. Full pan India coverage.',
  },
  {
    number: '05',
    title: 'Installation & Dismantling',
    desc: 'End-to-end installation including site preparation, setup, calibration and safe dismantling when needed.',
  },
  {
    number: '06',
    title: 'GE CT Scan Spare Parts Supply',
    desc: 'Wide inventory of genuine and compatible GE CT Scan spare parts. Fast dispatch across India for all models.',
  },
  {
    number: '07',
    title: 'Repair of GE CT Scan Spare Parts',
    desc: 'In-house repair of faulty GE CT Scan components — a cost-effective alternative to full part replacement. Fast turnaround.',
  },
  {
    number: '08',
    title: 'Technical Consultation',
    desc: 'Expert guidance on equipment selection, site readiness, compliance and upgrade planning — at no extra charge.',
  },
]

// ── TESTIMONIALS ─────────────────────────────
export const TESTIMONIALS = [
  {
    initials: 'RK',
    name: 'Dr. Rajesh Kumar',
    role: 'Director, Advanced Imaging Centre, MP',
    text: 'SEE Imaging provided us with a fully tested GE CT scanner at a very competitive price. Installation was smooth and their after-sales support has been excellent. Highly recommend to any diagnostic centre.',
  },
  {
    initials: 'SP',
    name: 'Dr. Sunita Patel',
    role: 'Owner, Modern Diagnostic Centre, Bhopal',
    text: 'The AMC contract we signed with SEE Imaging has saved us a lot of money. Their engineers respond quickly and know GE machines inside out. Very professional team overall.',
  },
  {
    initials: 'AM',
    name: 'Arun Mishra',
    role: 'Biomedical Engineer, City Hospital',
    text: 'We needed a critical CT spare part urgently and SEE Imaging delivered it the very next day. Their parts inventory is one of the best I have seen. Will always call them first.',
  },
]

// ── FOOTER ───────────────────────────────────
export const FOOTER_PRODUCTS = [
  'GE CT Scanner — Single & Dual Slice',
  'GE CT Scanner — 4 & 8 Slice',
  'GE CT Scanner — 16 & 32 Slice',
  'GE CT Scanner — 64 & 128 Slice',
  'GE Brivo CT 325 & 385',
  'GE Revolution CT Series',
  'GE Discovery 600 — PET-CT',       
  'GE Discovery 610 — PET-CT',       
  'GE MRI Systems (Coming Soon)',
  'GE CT Scan Spare Parts',
]

export const FOOTER_SERVICES = [
  'Refurbished CT Scan & MRI Sales',
  'Preventive Maintenance (PM)',
  'Service Support',
  'AMC / CMC Contracts',
  'Installation & Dismantling',
  'GE CT Scan Spare Parts Supply',
  'Repair of GE CT Scan Spare Parts',
  'Technical Consultation',
]
