// ─────────────────────────────────────────────────────────
//  PRODUCTS.JS  —  Full product catalog
//  Images: replace null with real paths when client provides
//  e.g. mainImage: '/images/products/ct-single-dual/main.jpg'
// ─────────────────────────────────────────────────────────

import dualSlice from '../assets/images/2.jpg'
import slingleSlice from '../assets/images/CtScannerSingle.png';
import ge4slice from '../assets/images/ge4slice.png'
import ge8slice from '../assets/images/ge8slice.png'
import ge16slice from '../assets/images/GE 16 slice.png'
import ge32slice from '../assets/images/GECtScanner32slice.png'
import ge64slice from '../assets/images/ct64slice.png'
import ge128slice from '../assets/images/ge128slice.png'
import brivo385 from '../assets/images/brivo385.jpg'
import brivo325 from '../assets/images/Brivo325dualSLice2.jpeg'
import brivo325dual from '../assets/images/Brivo325.png';
import revolution4slice from '../assets/images/Revolution 4 slice.png'
import gerevolution4slicepart2 from '../assets/images/revolution4slice.png'
import revolution16slice from '../assets/images/Revolution16SLice.png'
import revolution16slicepart2 from '../assets/images/revolution16slice2.png'
import revolutionexpert64slice from '../assets/images/Revolution Expert 64 slice.png'
import revolutionaexpert64slice2 from '../assets/images/GeRevolution Expert 64 slice.png'
import GeMRI from '../assets/images/geMri.png'
export const PRODUCTS_CATALOG = [

  // ─────────────────────────────────────────
  //  SINGLE / DUAL SLICE
  // ─────────────────────────────────────────
  {
    id: 1,
    slug: 'ge-ct-scanner-single-dual-slice',
    category: 'CT Scanner',
    categoryLabel: 'GE CT Scanner',
    title: 'GE CT Scanner — Single & Dual Slice',
    tagline: 'Entry-level CT imaging for small clinics and diagnostic centres',
    badge: 'Available',
    badgeClass: 'badge--green',
    label: 'CT',
    mainImage: dualSlice,
    // gallery: ['/images/products/ct-single-dual/front.jpg', '/images/products/ct-single-dual/gantry.jpg'],
    gallery: [dualSlice, slingleSlice],
    description: `The GE Single and Dual Slice CT Scanner range offers hospitals and diagnostic centres
reliable, cost-effective CT imaging without compromising on clinical quality. These refurbished machines
are rigorously tested and restored to optimal working condition, making them ideal for facilities that
perform routine head, chest, abdomen, and extremity scans. With GE's proven engineering and our full
installation and AMC support, you get enterprise-grade imaging at a fraction of the cost.`,
    highlights: [
      'Tested and certified before delivery',
      'Ideal for routine diagnostic imaging',
      'Full installation included',
      'AMC / CMC contracts available',
      'Pan India delivery and service',
    ],
    applications: ['Head and brain scans', 'Chest and pulmonary imaging', 'Abdomen and pelvis', 'Extremity imaging', 'Emergency and trauma imaging'],
    variants: [
      {
        name: 'Single Slice',
        model: 'GE HiSpeed CT/i',
        image: null,
        specs: {
          'Slice configuration': 'Single slice',
          'Gantry aperture': '70 cm',
          'Scan time': '1 second per rotation',
          'Reconstruction time': '5 images/sec',
          'kVp range': '80, 120, 140 kVp',
          'mA range': '10–340 mA',
          'FOV': '48 cm',
          'Image matrix': '512 × 512',
        },
      },
      {
        name: 'Dual Slice',
        model: 'GE HiSpeed Dual / Brivo 325',
        image: null,
        specs: {
          'Slice configuration': 'Dual slice',
          'Gantry aperture': '70 cm',
          'Scan time': '0.8 seconds per rotation',
          'Reconstruction time': '8 images/sec',
          'kVp range': '80, 120, 140 kVp',
          'mA range': '10–380 mA',
          'FOV': '48 cm',
          'Image matrix': '512 × 512',
        },
      },
    ],
  },

  // ─────────────────────────────────────────
  //  4 / 8 SLICE
  // ─────────────────────────────────────────
  {
    id: 2,
    slug: 'ge-ct-scanner-4-8-slice',
    category: 'CT Scanner',
    categoryLabel: 'GE CT Scanner',
    title: 'GE CT Scanner — 4 & 8 Slice',
    tagline: 'Reliable mid-entry CT for growing diagnostic centres with moderate patient volumes',
    badge: 'Available',
    badgeClass: 'badge--green',
    label: 'CT',
    mainImage: ge4slice,
    gallery: [ge4slice, ge8slice],
    description: `The GE 4 and 8 Slice CT Scanner range delivers faster scan times and better image
coverage compared to single-slice systems, making them ideal for diagnostic centres with moderate
patient loads. These systems cover routine CT applications efficiently and are available with full
AMC and CMC support from our team. All units are tested, calibrated, and certified before delivery.`,
    highlights: [
      'Faster scan times than single-slice systems',
      'Better Z-axis coverage per rotation',
      'Suitable for routine multi-slice imaging',
      'DICOM workstation included',
      'Pan India delivery and installation',
      'AMC / CMC support available',
    ],
    applications: ['Routine head and body CT', 'Multi-phase abdominal CT', 'Chest and pulmonary imaging', 'Bone and joint imaging'],
    variants: [
      {
        name: '4 Slice',
        model: 'GE LightSpeed Plus / Revolutionary 4 Slice',
        image: null,
        specs: {
          'Slice configuration': '4 slice',
          'Gantry aperture': '70 cm',
          'Scan time': '0.8 seconds per rotation',
          'Reconstruction time': '10 images/sec',
          'kVp range': '80, 120, 140 kVp',
          'mA range': '10–440 mA',
          'FOV': '48 cm',
          'Coverage per rotation': '4 × 5 mm slices',
        },
      },
      {
        name: '8 Slice',
        model: 'GE LightSpeed Ultra',
        image: null,
        specs: {
          'Slice configuration': '8 slice',
          'Gantry aperture': '70 cm',
          'Scan time': '0.6 seconds per rotation',
          'Reconstruction time': '14 images/sec',
          'kVp range': '80, 120, 140 kVp',
          'mA range': '10–440 mA',
          'FOV': '50 cm',
          'Coverage per rotation': '8 × 5 mm slices',
        },
      },
    ],
  },

  // ─────────────────────────────────────────
  //  16 / 32 SLICE
  // ─────────────────────────────────────────
  {
    id: 3,
    slug: 'ge-ct-scanner-16-32-slice',
    category: 'CT Scanner',
    categoryLabel: 'GE CT Scanner',
    title: 'GE CT Scanner — 16 & 32 Slice',
    tagline: 'High-performance CT for busy hospitals and multi-specialty diagnostic centres',
    badge: 'Available',
    badgeClass: 'badge--green',
    label: 'CT',
    mainImage: ge32slice,
    gallery: [ge16slice, ge32slice],
    description: `The GE 16 and 32 Slice CT range delivers high-quality imaging at sub-second rotation
speeds, making them ideal for busy hospitals and multi-specialty diagnostic centres. These systems handle
a wide range of clinical applications including vascular, oncology, and emergency CT with excellent
throughput. Our refurbished units are fully calibrated and certified before dispatch.`,
    highlights: [
      'Sub-second gantry rotation speeds',
      'Suitable for vascular and oncology imaging',
      'Higher detector rows for better coverage',
      'DICOM compliant workstation included',
      'Full calibration and commissioning',
      'AMC / CMC support available',
    ],
    applications: ['Vascular and CT angiography', 'Oncology imaging', 'Emergency and trauma CT', 'Multi-phase liver and kidney studies', 'Paediatric imaging'],
    variants: [
      {
        name: '16 Slice',
        model: 'GE LightSpeed 16 / Brivo 385 / Revolutionary 16 Slice',
        image: null,
        specs: {
          'Slice configuration': '16 slice',
          'Gantry aperture': '70 cm',
          'Scan time': '0.5 seconds per rotation',
          'Reconstruction time': '20 images/sec',
          'kVp range': '80, 100, 120, 140 kVp',
          'mA range': '10–500 mA',
          'FOV': '50 cm',
          'Coverage per rotation': '16 × 1.25 mm',
        },
      },
      {
        name: '32 Slice',
        model: 'GE BrightSpeed Elite / BrightSpeed Excel',
        image: ge32slice,
        specs: {
          'Slice configuration': '32 slice',
          'Gantry aperture': '70 cm',
          'Scan time': '0.5 seconds per rotation',
          'Reconstruction time': '30 images/sec',
          'kVp range': '80, 100, 120, 140 kVp',
          'mA range': '10–500 mA',
          'FOV': '50 cm',
          'Coverage per rotation': '32 × 1.25 mm',
          'Z-axis resolution': '< 0.625 mm',
        },
      },
    ],
  },

  // ─────────────────────────────────────────
  //  64 / 128 SLICE
  // ─────────────────────────────────────────
  {
    id: 4,
    slug: 'ge-ct-scanner-64-128-slice',
    category: 'CT Scanner',
    categoryLabel: 'GE CT Scanner',
    title: 'GE CT Scanner — 64 & 128 Slice',
    tagline: 'Advanced imaging for large hospitals, cardiac centres, and oncology departments',
    badge: 'Available',
    badgeClass: 'badge--green',
    label: 'CT',
    mainImage: ge64slice,
    gallery: [ge64slice, ge128slice],
    description: `The GE 64 and 128 Slice CT Scanner range represents top-tier refurbished CT technology.
With ultra-fast sub-0.4 second rotation times and up to 128 simultaneous detector rows, these systems
deliver exceptional spatial and temporal resolution for advanced cardiac, vascular, and oncology
applications. Ideal for high-volume hospitals and advanced imaging labs. All units come with full
workstation setup, DICOM configuration, and site planning support.`,
    highlights: [
      'Ultra-fast sub-0.4 second rotation',
      'Full cardiac CT capability (64 & 128 slice)',
      'Advanced cardiac and perfusion imaging',
      'Low-dose CT protocols available',
      'PACS and RIS integration support',
      'Complete site planning assistance',
    ],
    applications: ['Cardiac CT angiography', 'CT perfusion studies', 'Advanced vascular imaging', 'Oncology and RT planning', 'High-volume trauma centres'],
    variants: [
      {
        name: '64 Slice',
        model: 'GE LightSpeed VCT / Revolutionary Expert',
        image: null,
        specs: {
          'Slice configuration': '64 slice',
          'Gantry aperture': '70 cm',
          'Scan time': '0.35 seconds per rotation',
          'Reconstruction time': '40 images/sec',
          'kVp range': '80, 100, 120, 140 kVp',
          'mA range': '10–800 mA',
          'FOV': '50 cm',
          'Coverage per rotation': '64 × 0.625 mm',
          'Cardiac capability': 'Full cardiac imaging',
        },
      },
      {
        name: '128 Slice',
        model: 'GE Discovery CT750 HD / Revolution EVO',
        image: null,
        specs: {
          'Slice configuration': '128 slice',
          'Gantry aperture': '70 cm',
          'Scan time': '0.28 seconds per rotation',
          'Reconstruction speed': '50+ images/sec',
          'kVp range': '80, 100, 120, 140 kVp',
          'mA range': '10–800 mA',
          'FOV': '50 cm',
          'Detector coverage': '40 mm per rotation',
          'Z-axis resolution': '0.625 mm isotropic',
          'Cardiac capability': 'Full cardiac + perfusion',
        },
      },
    ],
  },

  // ─────────────────────────────────────────
  //  BRIVO 325 DUAL SLICE
  // ─────────────────────────────────────────
  {
    id: 5,
    slug: 'ge-brivo-325-dual-slice',
    category: 'CT Scanner',
    categoryLabel: 'GE Brivo CT',
    title: 'GE Brivo CT 325 — Dual Slice',
    tagline: 'Compact and reliable dual-slice CT designed for high uptime in smaller facilities',
    badge: 'Available',
    badgeClass: 'badge--green',
    label: 'CT',
    mainImage: brivo325,
    gallery: [brivo325, brivo325dual],
    description: `The GE Brivo CT 325 is a compact, reliable dual-slice CT scanner designed for smaller
hospitals and diagnostic centres that need consistent uptime and easy serviceability. The Brivo 325
features a simplified system architecture that reduces maintenance complexity while delivering
quality diagnostic images for routine clinical applications.`,
    highlights: [
      'Compact footprint — fits smaller CT rooms',
      'Simple architecture for easy maintenance',
      'High uptime reliability',
      'Ideal for smaller diagnostic centres',
      'Full installation support',
      'AMC / CMC available',
    ],
    applications: ['Routine head and body CT', 'Chest and abdominal imaging', 'Orthopaedic and bone imaging', 'Emergency department CT'],
    variants: [
      {
        name: 'Dual Slice',
        model: 'GE Brivo CT 325',
        image:  brivo325dual,
        specs: {
          'Slice configuration': 'Dual slice',
          'Gantry aperture': '70 cm',
          'Scan time': '0.8 seconds per rotation',
          'kVp range': '80, 120, 140 kVp',
          'mA range': '10–370 mA',
          'FOV': '48 cm',
          'Image matrix': '512 × 512',
          'System type': 'Compact design',
        },
      },
    ],
  },

  // ─────────────────────────────────────────
  //  BRIVO 385 16 SLICE
  // ─────────────────────────────────────────
  {
    id: 6,
    slug: 'ge-brivo-385-16-slice',
    category: 'CT Scanner',
    categoryLabel: 'GE Brivo CT',
    title: 'GE Brivo CT 385 — 16 Slice',
    tagline: 'High-value 16-slice CT with a focus on ease of operation and long-term reliability',
    badge: 'Available',
    badgeClass: 'badge--green',
    label: 'CT',
    mainImage: brivo385,
    gallery: [brivo385,brivo385],
    description: `The GE Brivo CT 385 is a proven 16-slice CT scanner built for high reliability and
ease of operation in busy diagnostic centres. Its streamlined design and robust engineering make it
one of the most dependable 16-slice systems in the refurbished market. The Brivo 385 is an excellent
choice for centres that need consistent 16-slice performance with straightforward maintenance.`,
    highlights: [
      'Proven 16-slice reliability',
      'Streamlined, operator-friendly design',
      'Easy to maintain and service',
      'Excellent image quality for clinical use',
      'Full installation and calibration included',
      'AMC / CMC contracts available',
    ],
    applications: ['Multi-phase abdominal CT', 'Chest and vascular imaging', 'Oncology studies', 'Emergency and trauma CT'],
    variants: [
      {
        name: '16 Slice',
        model: 'GE Brivo CT 385',
        image: null,
        specs: {
          'Slice configuration': '16 slice',
          'Gantry aperture': '70 cm',
          'Scan time': '0.5 seconds per rotation',
          'Reconstruction time': '18 images/sec',
          'kVp range': '80, 100, 120, 140 kVp',
          'mA range': '10–440 mA',
          'FOV': '50 cm',
          'Coverage per rotation': '16 × 1.25 mm',
          'System type': 'Brivo platform',
        },
      },
    ],
  },

  // ─────────────────────────────────────────
  //  REVOLUTIONARY 4 SLICE
  // ─────────────────────────────────────────
  {
    id: 7,
    slug: 'ge-revolutionary-4-slice',
    category: 'CT Scanner',
    categoryLabel: 'GE Revolution CT',
    title: 'GE Revolution CT — 4 Slice',
    tagline: 'Entry-level Revolution series CT with GE\'s modern platform technology',
    badge: 'Available',
    badgeClass: 'badge--green',
    label: 'CT',
    mainImage: revolution4slice,
    gallery: [revolution4slice, gerevolution4slicepart2],
    description: `The GE Revolution 4 Slice CT brings the technology lineage of GE's Revolution platform
to entry-level CT imaging. Built on a modern architecture, it offers improved serviceability and
reliability compared to older single-slice systems, making it a smart upgrade for facilities
transitioning from legacy single-slice equipment.`,
    highlights: [
      'Modern Revolution platform technology',
      'Better serviceability than legacy systems',
      'Smart upgrade from single-slice',
      'Full DICOM and PACS integration',
      'Tested and certified before delivery',
      'Pan India delivery and installation',
    ],
    applications: ['Routine diagnostic CT', 'Head and brain imaging', 'Chest and abdominal studies', 'Orthopaedic imaging'],
    variants: [
      {
        name: '4 Slice',
        model: 'GE Revolution CT (4 Slice)',
        image: null,
        specs: {
          'Slice configuration': '4 slice',
          'Gantry aperture': '70 cm',
          'Scan time': '0.75 seconds per rotation',
          'kVp range': '80, 100, 120, 140 kVp',
          'mA range': '10–440 mA',
          'FOV': '50 cm',
          'Platform': 'GE Revolution series',
        },
      },
    ],
  },

  // ─────────────────────────────────────────
  //  REVOLUTIONARY 16 SLICE
  // ─────────────────────────────────────────
  {
    id: 8,
    slug: 'ge-revolutionary-16-slice',
    category: 'CT Scanner',
    categoryLabel: 'GE Revolution CT',
    title: 'GE Revolution CT — 16 Slice',
    tagline: 'Revolution platform 16-slice CT with advanced image quality and fast throughput',
    badge: 'Available',
    badgeClass: 'badge--green',
    label: 'CT',
    mainImage: revolution16slice,
    gallery: [revolution16slice, revolution16slicepart2],
    description: `The GE Revolution 16 Slice CT delivers the imaging performance of GE's Revolution
platform in a versatile 16-slice configuration. It offers excellent image quality for a broad
range of clinical applications, with faster reconstruction times and improved low-contrast
detectability compared to earlier 16-slice systems. Ideal for hospitals looking for a reliable,
high-quality refurbished 16-slice CT.`,
    highlights: [
      'Revolution platform image quality',
      'Faster reconstruction than older 16-slice',
      'Improved low-contrast detectability',
      'Wide clinical application range',
      'Full installation and AMC support',
      'Pan India service coverage',
    ],
    applications: ['CT angiography', 'Oncology and staging', 'Multi-organ multi-phase studies', 'Vascular imaging', 'Emergency CT'],
    variants: [
      {
        name: '16 Slice',
        model: 'GE Revolution CT (16 Slice)',
        image: null,
        specs: {
          'Slice configuration': '16 slice',
          'Gantry aperture': '70 cm',
          'Scan time': '0.5 seconds per rotation',
          'Reconstruction time': '22 images/sec',
          'kVp range': '80, 100, 120, 140 kVp',
          'mA range': '10–500 mA',
          'FOV': '50 cm',
          'Platform': 'GE Revolution series',
          'Coverage per rotation': '16 × 1.25 mm',
        },
      },
    ],
  },

  // ─────────────────────────────────────────
  //  REVOLUTIONARY EXPERT 64 SLICE
  // ─────────────────────────────────────────
  {
    id: 9,
    slug: 'ge-revolutionary-expert',
    category: 'CT Scanner',
    categoryLabel: 'GE Revolution CT',
    title: 'GE Revolution EXcel / Expert — 64 Slice',
    tagline: 'Premium 64-slice Revolution CT with advanced cardiac and low-dose capabilities',
    badge: 'Available',
    badgeClass: 'badge--green',
    label: 'CT',
    mainImage: revolutionexpert64slice,
    gallery: [revolutionexpert64slice, revolutionaexpert64slice2],
    description: `The GE Revolution EXcel and Expert represent the premium tier of the Revolution CT
platform at 64 slices. These systems deliver advanced cardiac imaging, high temporal resolution,
and GE's ASiR (Adaptive Statistical Iterative Reconstruction) for low-dose scanning without
compromising diagnostic image quality. A premium choice for cardiac centres, oncology departments,
and high-volume hospitals requiring top-tier 64-slice performance.`,
    highlights: [
      'Advanced cardiac CT capability',
      'ASiR low-dose reconstruction technology',
      'High temporal resolution for cardiac gating',
      'Spectral imaging capability (EXcel)',
      'Full PACS and RIS integration',
      'Site planning and AERB support',
    ],
    applications: ['Advanced cardiac CT angiography', 'Coronary artery calcium scoring', 'CT perfusion studies', 'Oncology staging and follow-up', 'High-volume emergency CT'],
    variants: [
      {
        name: 'Revolution EXcel',
        model: 'GE Revolution EXcel (64 Slice)',
        image: revolutionexpert64slice,
        specs: {
          'Slice configuration': '64 slice',
          'Gantry aperture': '70 cm',
          'Scan time': '0.35 seconds per rotation',
          'Reconstruction time': '40+ images/sec',
          'kVp range': '80, 100, 120, 140 kVp',
          'mA range': '10–800 mA',
          'FOV': '50 cm',
          'Low-dose tech': 'ASiR reconstruction',
          'Cardiac capability': 'Full cardiac imaging',
          'Platform': 'GE Revolution series',
        },
      },
      {
        name: 'Revolution Expert',
        model: 'GE Revolution Expert (64 Slice)',
        image: revolutionaexpert64slice2,
        specs: {
          'Slice configuration': '64 slice',
          'Gantry aperture': '70 cm',
          'Scan time': '0.28 seconds per rotation',
          'Reconstruction time': '50+ images/sec',
          'kVp range': '80, 100, 120, 140 kVp',
          'mA range': '10–800 mA',
          'FOV': '50 cm',
          'Low-dose tech': 'ASiR-V reconstruction',
          'Cardiac capability': 'Advanced cardiac + perfusion',
          'Platform': 'GE Revolution series',
        },
      },
    ],
  },

  // ─────────────────────────────────────────
  //  MRI SYSTEMS
  // ─────────────────────────────────────────
  {
    id: 10,
    slug: 'ge-mri-system',
    category: 'MRI',
    categoryLabel: 'MRI System',
    title: 'GE MRI Systems',
    tagline: 'Refurbished high-field MRI for hospitals requiring superior soft tissue imaging',
    badge: 'Coming Soon',
    badgeClass: 'badge--coming',
    label: 'MRI',
    mainImage: GeMRI,
    gallery: [GeMRI, null],
    description: `GE MRI Systems offer superior soft tissue contrast and diagnostic capability for
neurological, musculoskeletal, oncology, and cardiac applications. Our refurbished GE MRI units —
available in 1.5T and 3.0T configurations — undergo full RF calibration, gradient testing, and
image quality verification before delivery. We handle complete site preparation including RF shielding
assessment, magnet installation, helium fill, and shimming. Enquire for specific model availability,
field strength, and pricing.`,
    highlights: [
      '1.5T and 3.0T configurations available',
      'Full RF calibration and QA testing',
      'Site planning and RF shielding guidance',
      'Helium fill and magnet shimming included',
      'Zero helium boil-off magnets available',
      'AMC and service contracts available',
    ],
    applications: ['Neurological and brain imaging', 'Musculoskeletal and joint imaging', 'Oncology and whole body MRI', 'Cardiac MRI', 'Abdominal and pelvic imaging', 'MR spectroscopy'],
    variants: [
      {
        name: '1.5 Tesla',
        model: 'GE Signa HDe / Optima MR450w',
        image: null,
        specs: {
          'Field strength': '1.5 Tesla',
          'Bore diameter': '60 cm',
          'Gradient strength': '33 mT/m',
          'Slew rate': '120 T/m/s',
          'RF channels': '8 / 16 channel',
          'Helium volume': '~1500 litres',
          'Magnet type': 'Superconducting',
          'Status': 'Enquire for availability',
        },
      },
      {
        name: '3.0 Tesla',
        model: 'GE Signa HDxt / Discovery MR750',
        image: null,
        specs: {
          'Field strength': '3.0 Tesla',
          'Bore diameter': '60 cm',
          'Gradient strength': '50 mT/m',
          'Slew rate': '200 T/m/s',
          'RF channels': '32 channel',
          'Helium volume': '~1500 litres',
          'Magnet type': 'Superconducting',
          'Status': 'Enquire for availability',
        },
      },
    ],
  },

  // ─────────────────────────────────────────
  //  SPARE PARTS
  // ─────────────────────────────────────────
  {
    id: 11,
    slug: 'ge-ct-scan-spare-parts',
    category: 'Spare Parts',
    categoryLabel: 'Spare Parts',
    title: 'GE CT Scan Spare Parts',
    tagline: 'Genuine and compatible spare parts for all GE CT models — fast dispatch across India',
    badge: 'In Stock',
    badgeClass: 'badge--orange',
    label: '⚙',
    mainImage: null,
    gallery: [null, null],
    description: `SEE Imaging maintains one of the largest inventories of GE CT Scan
spare parts in central India. We supply genuine and compatible components for all major GE CT models
from the legacy HiSpeed to the Revolution series. Our in-house repair facility also refurbishes faulty
components as a cost-effective alternative to full replacement, with technical support included.`,
    highlights: [
      'Large inventory of GE CT parts',
      'Genuine and compatible components',
      'In-house repair and refurbishment',
      'Fast dispatch — same/next day',
      'Technical support with every part',
      'All GE CT models covered',
    ],
    applications: ['Scheduled preventive maintenance', 'Emergency breakdown replacement', 'System upgrades', 'Cost reduction vs OEM'],
    variants: [
      {
        name: 'X-Ray Tubes',
        model: 'GE CT X-Ray Tubes — All Models',
        image: null,
        specs: { 'Compatible models': 'HiSpeed, LightSpeed, BrightSpeed, Brivo, Revolution', 'Condition': 'Tested and certified', 'Warranty': 'Available on request' },
      },
      {
        name: 'Detector & DAS',
        model: 'Detector Array and DAS Boards',
        image: null,
        specs: { 'Compatible models': 'LightSpeed 4/8/16/64, BrightSpeed, Brivo 385', 'Testing': 'Full DAS calibration', 'Condition': 'Refurbished / tested' },
      },
      {
        name: 'HV Generator',
        model: 'High Voltage Generator Assembly',
        image: null,
        specs: { 'Compatible models': 'All GE CT series', 'Output': 'As per original spec', 'Condition': 'Tested and certified' },
      },
      {
        name: 'Slip Ring',
        model: 'GE CT Slip Ring Assembly',
        image: null,
        specs: { 'Compatible models': 'HiSpeed, LightSpeed series', 'Condition': 'Refurbished', 'Turnaround': '5–7 days for repair' },
      },
    ],
  },
]

export const PRODUCT_CATEGORIES = [
  { value: 'all',         label: 'All Products'  },
  { value: 'CT Scanner',  label: 'CT Scanners'   },
  { value: 'MRI',         label: 'MRI Systems'   },
  { value: 'Spare Parts', label: 'Spare Parts'   },
]
