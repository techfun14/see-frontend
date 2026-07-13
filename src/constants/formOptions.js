// ─────────────────────────────────────────────────────────
//  FORM_OPTIONS.JS
//  Single source of truth for all dropdowns used in
//  service schedule forms, enquiry forms, admin panels.
//  Add new machines here and they appear everywhere.
// ─────────────────────────────────────────────────────────

export const ALL_MACHINES = [
  // ── GE CT — Entry Level ──
  { value: 'GE HiSpeed CT/i (Single Slice)',         label: 'GE HiSpeed CT/i — Single Slice',         group: 'GE CT Scanner' },
  { value: 'GE HiSpeed Dual (Dual Slice)',           label: 'GE HiSpeed Dual — Dual Slice',           group: 'GE CT Scanner' },
  { value: 'GE Brivo CT 325 (Dual Slice)',           label: 'GE Brivo CT 325 — Dual Slice',           group: 'GE Brivo CT'   },
  // ── GE CT — 4 / 8 Slice ──
  { value: 'GE LightSpeed Plus (4 Slice)',           label: 'GE LightSpeed Plus — 4 Slice',           group: 'GE CT Scanner' },
  { value: 'GE Revolution CT (4 Slice)',             label: 'GE Revolution CT — 4 Slice',             group: 'GE Revolution' },
  { value: 'GE LightSpeed Ultra (8 Slice)',          label: 'GE LightSpeed Ultra — 8 Slice',          group: 'GE CT Scanner' },
  // ── GE CT — 16 / 32 Slice ──
  { value: 'GE LightSpeed 16 (16 Slice)',            label: 'GE LightSpeed 16 — 16 Slice',            group: 'GE CT Scanner' },
  { value: 'GE Brivo CT 385 (16 Slice)',             label: 'GE Brivo CT 385 — 16 Slice',             group: 'GE Brivo CT'   },
  { value: 'GE Revolution CT (16 Slice)',            label: 'GE Revolution CT — 16 Slice',            group: 'GE Revolution' },
  { value: 'GE BrightSpeed Elite (32 Slice)',        label: 'GE BrightSpeed Elite — 32 Slice',        group: 'GE CT Scanner' },
  { value: 'GE BrightSpeed Excel (32 Slice)',        label: 'GE BrightSpeed Excel — 32 Slice',        group: 'GE CT Scanner' },
  // ── GE CT — 64 / 128 Slice ──
  { value: 'GE LightSpeed VCT (64 Slice)',           label: 'GE LightSpeed VCT — 64 Slice',           group: 'GE CT Scanner' },
  { value: 'GE Revolution EXcel (64 Slice)',         label: 'GE Revolution EXcel — 64 Slice',         group: 'GE Revolution' },
  { value: 'GE Revolution Expert (64 Slice)',        label: 'GE Revolution Expert — 64 Slice',        group: 'GE Revolution' },
  { value: 'GE Discovery CT750 HD (128 Slice)',      label: 'GE Discovery CT750 HD — 128 Slice',      group: 'GE CT Scanner' },
  { value: 'GE Revolution EVO (128 Slice)',          label: 'GE Revolution EVO — 128 Slice',          group: 'GE Revolution' },
  // ── GE PET-CT ──
  { value: 'GE Discovery 600 (PET-CT)',               label: 'GE Discovery 600 — PET-CT',             group: 'GE PET-CT'     },
  { value: 'GE Discovery 610 (PET-CT)',               label: 'GE Discovery 610 — PET-CT',             group: 'GE PET-CT'     },
  // ── GE MRI ──
  { value: 'GE Signa HDe (1.5T MRI)',               label: 'GE Signa HDe — 1.5T MRI',               group: 'GE MRI System' },
  { value: 'GE Optima MR450w (1.5T MRI)',           label: 'GE Optima MR450w — 1.5T MRI',           group: 'GE MRI System' },
  { value: 'GE Signa HDxt (3.0T MRI)',              label: 'GE Signa HDxt — 3.0T MRI',              group: 'GE MRI System' },
  { value: 'GE Discovery MR750 (3.0T MRI)',         label: 'GE Discovery MR750 — 3.0T MRI',         group: 'GE MRI System' },
  
  // ── Other ──
  { value: 'Other / Not listed',                    label: 'Other / Not listed',                    group: 'Other'         },
]

export const ALL_MACHINE_GROUPS = [
  'GE CT Scanner',
  'GE Brivo CT',
  'GE Revolution',
  'GE PET-CT',
  'GE MRI System',
  'Other',
]

// For product enquiry dropdown (what product are you interested in)
export const PRODUCT_ENQUIRY_OPTIONS = [
  { value: 'GE CT Scanner — Single & Dual Slice',   label: 'GE CT Scanner — Single & Dual Slice'   },
  { value: 'GE CT Scanner — 4 & 8 Slice',           label: 'GE CT Scanner — 4 & 8 Slice'           },
  { value: 'GE CT Scanner — 16 & 32 Slice',         label: 'GE CT Scanner — 16 & 32 Slice'         },
  { value: 'GE CT Scanner — 64 & 128 Slice',        label: 'GE CT Scanner — 64 & 128 Slice'        },
  { value: 'GE Brivo CT 325 — Dual Slice',          label: 'GE Brivo CT 325 — Dual Slice'          },
  { value: 'GE Brivo CT 385 — 16 Slice',            label: 'GE Brivo CT 385 — 16 Slice'            },
  { value: 'GE Revolution CT — 4 Slice',            label: 'GE Revolution CT — 4 Slice'            },
  { value: 'GE Revolution CT — 16 Slice',           label: 'GE Revolution CT — 16 Slice'           },
  { value: 'GE Revolution EXcel / Expert — 64 Slice', label: 'GE Revolution EXcel / Expert — 64 Slice' },
  { value: 'GE Discovery 600 — PET-CT',             label: 'GE Discovery 600 — PET-CT'             },  // ADD
  { value: 'GE Discovery 610 — PET-CT',             label: 'GE Discovery 610 — PET-CT'             },
  { value: 'GE MRI System (1.5T / 3.0T)',           label: 'GE MRI System (1.5T / 3.0T)'           },
  { value: 'GE CT Scan Spare Parts',                label: 'GE CT Scan Spare Parts'                },
  { value: 'AMC Contract',                          label: 'AMC — Annual Maintenance Contract'      },
  { value: 'CMC Contract',                          label: 'CMC — Comprehensive Maintenance Contract' },
  { value: 'Other / Multiple items',                label: 'Other / Multiple items'                },
]

export const ALL_SERVICES = [
  { value: 'Breakdown Repair & Service Support',    label: 'Breakdown Repair & Service Support'    },
  { value: 'Preventive Maintenance (PM)',           label: 'Preventive Maintenance (PM)'           },
  { value: 'Annual Maintenance Contract (AMC)',     label: 'Annual Maintenance Contract (AMC)'     },
  { value: 'Comprehensive Maintenance Contract (CMC)', label: 'Comprehensive Maintenance Contract (CMC)' },
  { value: 'Installation & Dismantling',            label: 'Installation & Dismantling'            },
  { value: 'GE CT Scan Spare Parts Supply',         label: 'GE CT Scan Spare Parts Supply'         },
  { value: 'Repair of GE CT Scan Spare Parts',      label: 'Repair of GE CT Scan Spare Parts'      },
  { value: 'Technical Consultation',               label: 'Technical Consultation'               },
]

export const INDIAN_STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh',
  'Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka',
  'Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram',
  'Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',
  'Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
  'Delhi','Jammu & Kashmir','Ladakh','Chandigarh','Puducherry',
]
