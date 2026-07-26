// ─────────────────────────────────────────────────────────
//  BLOG.JS — Single source of truth for all blog posts
//  Add a new post object here; it appears everywhere.
// ─────────────────────────────────────────────────────────

export const BLOG_TAGS = [
  { value: 'all',     label: 'All Articles'  },
  { value: 'CT',      label: 'CT Scanners'   },
  { value: 'MRI',     label: 'MRI Systems'   },
  { value: 'PET-CT',  label: 'PET-CT'        },
  { value: 'Guide',   label: 'Buying Guides' },
  { value: 'Service', label: 'Service & AMC' },
]

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'what-is-a-ct-scanner',
    tag: 'CT',
    date: 'June 2025',
    readTime: '5 min read',
    title: 'What Is a CT Scanner? A Plain-Language Guide',
    summary: "CT (Computed Tomography) uses X-rays and a computer to build detailed cross-section images of the body. Here's how it works and what your facility should know before buying.",
    sections: [
      {
        heading: 'How a CT Scanner Works',
        body: `A CT scanner is a large, ring-shaped machine (gantry) through which a motorised table slides the patient. Inside the ring, an X-ray tube and a detector array rotate rapidly around the patient — typically completing a full 360° sweep in under a second on modern systems.

As the tube rotates it fires narrow X-ray beams through the body from hundreds of different angles. Tissues of different densities (bone, muscle, air, fat, blood vessels) absorb different amounts of radiation. The detector array measures precisely how much radiation passes through at every angle. A powerful computer then applies a mathematical process called back-projection reconstruction to combine all those readings into a sharp cross-sectional image — called a "slice".

On a 64-slice CT scanner, the system acquires 64 simultaneous slices in a single rotation, meaning a complete chest scan can be done in 3–5 seconds. A single-slice scanner acquires one slice per rotation and takes much longer for the same coverage.`,
      },
      {
        heading: 'CT vs MRI vs X-Ray — When to Use Which',
        body: `All three create images of the inside of the body, but they differ in what they show best and how they work:

**X-Ray** uses a single burst of radiation to produce a 2D shadow image. It is the fastest and cheapest option, excellent for bones and chest screening, but provides limited soft-tissue contrast.

**CT** rotates X-rays around the patient to build 3D images with far greater detail than plain X-ray. It excels at trauma, pulmonary embolism, stroke, abdominal emergencies, and cancer staging. A full chest-abdomen-pelvis scan takes seconds. The trade-off is a higher radiation dose than plain X-ray.

**MRI** uses a powerful magnetic field and radio waves — no radiation at all. It provides superior soft-tissue contrast, making it the modality of choice for brain, spine, joints, liver, and prostate imaging. However, MRI scans take 20–45 minutes and are considerably more expensive to purchase and maintain.

For most emergency departments and busy diagnostic centres in India, a CT scanner is the higher-priority first investment.`,
      },
      {
        heading: 'Slice Count: What Does It Actually Mean?',
        body: `The most common question buyers ask is: "How many slices do I need?"

Slice count refers to how many cross-sectional images the machine acquires per rotation of the X-ray tube. Higher slice count means:
- Wider coverage per rotation (faster scans)
- Thinner slices (better image detail)
- Better cardiac and vascular imaging capability

**Single / Dual Slice (1–2 slice):** Still viable for basic head, chest, and abdomen scanning where speed is not critical. The lowest cost of purchase and maintenance. Suitable for smaller clinics or towns with moderate patient volumes.

**4–16 Slice:** The workhouse of India's diagnostic centres. A 16-slice GE LightSpeed covers most routine indications with good image quality. Refurbished units are extremely affordable.

**32–64 Slice:** Required for cardiac CT (coronary CTA), trauma centres with high throughput, and centres wanting to offer advanced vascular studies. The GE LightSpeed VCT 64-slice is widely considered the reliability gold standard.

**128 Slice:** The GE Revolution EVO and Discovery CT750 HD sit at the top of GE's line. Sub-millimetre resolution, dual-energy capability, and sub-second rotation speeds. Best suited to large hospital radiology departments.

SEE Imaging stocks refurbished GE CT scanners across all slice ranges. All units are fully tested, calibrated, and delivered with complete installation support across India.`,
      },
      {
        heading: 'Site Requirements Before You Buy',
        body: `A CT scanner installation requires preparation well in advance:

**Room size:** A typical CT room needs a minimum of 5m × 6m for the gantry, console, and patient movement. The control area adds another 10–15 sq m.

**Radiation shielding:** Walls, floor, and ceiling must be lead-lined or concrete-shielded. The exact specification depends on your scanner's kVp output and anticipated patient load — a qualified radiation safety officer (RSO) must design this.

**Power supply:** Most GE CT systems require a dedicated 3-phase power supply at 380–415V / 50Hz. An uninterruptible power supply (UPS) or automatic voltage regulator (AVR) is strongly recommended.

**Air conditioning:** The gantry and associated electronics generate significant heat. A dedicated precision air-conditioning unit (typically 5–7 tonnes) is required, maintaining temperature between 18–22°C.

**AERB registration:** In India, all CT scanners must be registered with the Atomic Energy Regulatory Board (AERB) before clinical use. SEE Imaging assists with the documentation process.

Contact SEE Imaging before finalising your room design — our engineers will provide a detailed site layout plan at no charge as part of the purchase process.`,
      },
    ],
    ctaLabel: 'Enquire about CT Scanners',
    ctaLink: '/products',
  },

  {
    id: 2,
    slug: 'ct-scanner-slice-count-guide',
    tag: 'CT',
    date: 'May 2025',
    readTime: '4 min read',
    title: 'Single Slice to 128 Slice: How to Pick the Right CT Scanner',
    summary: 'Not every facility needs a 128-slice CT. This guide maps patient volume, clinical use cases, and budget to the right slice count — so you invest wisely.',
    sections: [
      {
        heading: 'Why Slice Count Matters',
        body: `Slice count is the single most important technical specification on a CT scanner. It determines scan speed, image resolution, and which clinical applications you can offer. Buying too few slices creates bottlenecks; buying too many locks capital into capability you may never use.

This guide maps common facility types to the appropriate slice range based on patient throughput and clinical use cases.`,
      },
      {
        heading: 'Single & Dual Slice (GE HiSpeed, Brivo 325)',
        body: `**Best for:** Small diagnostic centres, tier-3 towns, general screening

**Daily capacity:** 15–25 patients
**Typical scan time (chest):** 25–40 seconds
**Key limitations:** Cannot perform cardiac CT; slower throughput; thicker slices reduce fine detail

**Verdict:** For a clinic setting up its first CT scanner on a tight budget, a refurbished GE HiSpeed CT/i or Brivo 325 is a proven, reliable start. Operating and maintenance costs are the lowest in the GE range.`,
      },
      {
        heading: '4–8 Slice (GE LightSpeed Plus, LightSpeed Ultra)',
        body: `**Best for:** General diagnostics, moderate-volume centres

**Daily capacity:** 25–45 patients
**Typical scan time (chest):** 10–18 seconds
**Key limitations:** Cardiac CT not recommended; CTA possible with technique adjustment

**Verdict:** A solid step up from single-slice. The GE LightSpeed Plus (4-slice) and LightSpeed Ultra (8-slice) are extremely well-supported machines with wide availability of spare parts across India.`,
      },
      {
        heading: '16–32 Slice (GE LightSpeed 16, Brivo 385, BrightSpeed)',
        body: `**Best for:** Mid-size hospitals, trauma centres, busy diagnostic chains

**Daily capacity:** 40–70 patients
**Typical scan time (chest):** 5–8 seconds
**Key applications added:** Basic cardiac CT, trauma, pulmonary angiography (CTPA), brain perfusion

**Verdict:** The 16-slice is the most common CT in India's private hospitals and represents the best combination of capability, reliability, and refurbishment value. If your centre does trauma or pulmonary embolism workup, 16-slice is the minimum we recommend.`,
      },
      {
        heading: '64–128 Slice (GE LightSpeed VCT, Revolution EVO, Discovery CT750 HD)',
        body: `**Best for:** Tertiary hospitals, cardiac imaging centres, high-volume diagnostic labs

**Daily capacity:** 80–120+ patients
**Typical scan time (chest):** 2–4 seconds
**Key applications added:** Coronary CTA, 4D perfusion, spectral / dual-energy CT (on Discovery), dynamic vascular studies

**Verdict:** The GE LightSpeed VCT (64-slice) is the gold standard refurbished CT scanner in India — exceptional image quality, outstanding parts availability, and a long service life. The 128-slice systems add dual-energy and sub-millimetre speed but come at a significantly higher cost of ownership.

If cardiac CT is a core revenue stream for your centre, 64-slice is the minimum you should consider.`,
      },
      {
        heading: 'Quick Decision Matrix',
        body: `| Your situation | Recommended range |
|---|---|
| New centre, budget under ₹40L | 1–2 slice |
| General diagnostic, 30–50 patients/day | 16 slice |
| Trauma centre or surgery hospital | 16–32 slice |
| Cardiac CT programme | 64 slice |
| High-volume tertiary hospital | 64–128 slice |

SEE Imaging carries refurbished GE CT scanners across all of these ranges. Call or WhatsApp us to discuss which unit fits your specific clinical and financial requirements.`,
      },
    ],
    ctaLabel: 'Browse CT Scanner Catalog',
    ctaLink: '/products',
  },

  {
    id: 3,
    slug: 'refurbished-vs-new-ct-scanner',
    tag: 'Guide',
    date: 'April 2025',
    readTime: '5 min read',
    title: "Refurbished vs New CT Scanner: What's the Real Difference?",
    summary: 'A refurbished GE CT scanner can cost 60–75% less than new. But what exactly do you get — and what do you give up? An honest comparison for Indian buyers.',
    sections: [
      {
        heading: 'The Price Gap Is Real',
        body: `A brand-new GE Revolution EVO (128-slice) retails in India for approximately ₹3–4 crore, depending on configuration and dealer margins. A fully refurbished GE LightSpeed VCT (64-slice) — which delivers excellent image quality for the vast majority of clinical applications — can be purchased for ₹35–60 lakh.

That is not a minor difference. For most independent diagnostic centres and small hospitals in India, that gap is the difference between owning a CT scanner and not owning one.`,
      },
      {
        heading: 'What "Refurbished" Actually Means',
        body: `The word "refurbished" covers a wide spectrum. At the low end it means "wiped clean and repriced". At the high end it means a rigorously tested, reconditioned machine that is indistinguishable in performance from new.

SEE Imaging's refurbishment process includes:
- Complete disassembly and internal inspection
- Replacement of high-wear components: X-ray tube (if hours are high), slip rings, detector recalibration
- Full electrical safety testing to manufacturer standards
- Geometric and dose calibration verified with AERB-acceptable phantoms
- Commissioning and acceptance testing at your site

The critical question to ask any refurbished CT vendor is: **What is the X-ray tube age / anode heat capacity?** The X-ray tube is the most expensive consumable on a CT scanner — a replacement costs ₹8–20 lakh depending on the model. Always ask for tube hour documentation.`,
      },
      {
        heading: 'What You Gain with Refurbished',
        body: `**Cost:** The clearest advantage. ₹40–60 lakh for a 16 or 64-slice unit versus ₹1.5–4 crore for new.

**Proven reliability:** A GE LightSpeed VCT that has been in clinical service for 8 years has demonstrated its reliability. New platforms occasionally have teething problems in the first 12–18 months.

**Faster ROI:** Lower acquisition cost means your scanner reaches break-even much faster at standard per-scan pricing.

**Parts availability:** GE CT platforms from the LightSpeed and Revolution generation have extensive spare parts ecosystems in India. Finding parts for a 15-year-old GE scanner is straightforward.`,
      },
      {
        heading: 'What You Give Up',
        body: `**Warranty:** Most refurbished units come with a 6–12 month warranty versus 2–3 years on new equipment. However, a well-negotiated AMC (Annual Maintenance Contract) from day one closes this gap significantly.

**Latest software features:** A 2018 GE CT will not have 2024 AI-assisted protocols. For most routine diagnostic work this is irrelevant. For research or subspecialty applications it may matter.

**Brand-new tube:** Unless specifically replaced, a refurbished unit's X-ray tube has accumulated hours. Understand the remaining life and factor tube replacement cost into your total cost of ownership.

**Regulatory history:** Ensure the machine has documented service history and valid radiation safety records. SEE Imaging provides full documentation for every unit we supply.`,
      },
      {
        heading: 'Our Recommendation',
        body: `For the majority of Indian diagnostic centres and hospitals, a refurbished GE CT scanner from a reputable, service-capable vendor is the smarter financial decision. The clinical output — image quality, workflow, patient throughput — is comparable to new for routine indications.

The decision to buy new makes sense when: (1) you are purchasing the very latest clinical capability (e.g., photon-counting CT), (2) your institution requires a manufacturer warranty for governance reasons, or (3) the budget genuinely supports it.

Contact SEE Imaging to discuss your specific requirements. We will give you an honest recommendation — even if that means pointing you toward a new unit.`,
      },
    ],
    ctaLabel: 'View Our Refurbished CT Range',
    ctaLink: '/products',
  },

  {
    id: 4,
    slug: 'what-is-an-mri-scanner',
    tag: 'MRI',
    date: 'March 2025',
    readTime: '5 min read',
    title: 'What Is an MRI Scanner? How It Works and When You Need One',
    summary: 'MRI creates detailed images of soft tissue without any radiation. This guide explains the technology in plain language — and helps you decide if your facility needs one.',
    sections: [
      {
        heading: 'How MRI Works',
        body: `MRI — Magnetic Resonance Imaging — uses a powerful magnetic field and carefully tuned radio waves to generate detailed images of the inside of the body. Unlike CT scanning or X-ray, MRI involves no ionising radiation whatsoever.

The process works by exploiting a property of hydrogen atoms. The human body is roughly 60% water, and water molecules contain hydrogen. When a patient enters the MRI bore (the cylindrical tunnel), the scanner's powerful magnet — ranging from 0.5T in open systems to 3.0T in high-field systems — causes hydrogen protons to align with the magnetic field, much like compass needles aligning with the Earth's magnetic field.

The scanner then transmits a brief pulse of radio waves at a specific resonant frequency. This knocks the protons out of alignment. When the radio pulse stops, the protons "relax" back and emit their own radio signal as they realign. Different tissues (fat, water, muscle, tumour) relax at different rates. The scanner's receiver coils detect these signals and a computer reconstructs them into high-resolution images.

The different relaxation rates are described by two parameters — T1 and T2 — which is why you see references to "T1-weighted" and "T2-weighted" images in radiology reports.`,
      },
      {
        heading: '1.5T vs 3.0T MRI: Which Do You Need?',
        body: `The "T" stands for Tesla — the unit of magnetic field strength. Higher Tesla means a stronger magnetic field, which generally means better image quality and shorter scan times.

**1.5T MRI (GE Signa HDe, GE Optima MR450w):**
- The clinical workhorse for routine brain, spine, musculoskeletal, abdomen, and pelvic imaging
- Lower operating cost — lower power consumption, less complex maintenance
- More forgiving with metallic implants (some implants cleared only for 1.5T)
- The right choice for 85–90% of routine hospital and diagnostic centre applications
- Recommended for centres establishing their first MRI programme

**3.0T MRI (GE Signa HDxt, GE Discovery MR750):**
- Superior signal-to-noise ratio enables thinner slices and sharper detail
- Faster scan times — the same sequence that takes 5 minutes at 1.5T may take 3 minutes at 3.0T
- Significantly better for neurological research, epilepsy protocols, spectroscopy, and functional MRI
- Higher power consumption and magnet maintenance costs
- Some implants and devices are not approved for 3.0T
- Recommended when you have strong neurology, oncology, or research volumes

For most Indian hospitals adding MRI for the first time, a refurbished **GE Signa HDe or Optima MR450w (1.5T)** is the right starting point.`,
      },
      {
        heading: 'Key Clinical Applications of MRI',
        body: `MRI's strength over CT is soft-tissue contrast — it can distinguish between tissue types that look identical on CT. Priority applications include:

**Neurological imaging:** Brain tumours, stroke (DWI sequences), dementia workup, epilepsy, multiple sclerosis plaques, pituitary lesions. MRI is the gold standard for the brain.

**Spine:** Disc herniations, cord compression, spondylosis, infectious discitis. Every spine surgeon needs reliable MRI access.

**Musculoskeletal:** Ligament and tendon tears (ACL, rotator cuff), cartilage evaluation, bone marrow lesions. A single MSK MRI scan at private rates in India generates ₹3,000–8,000 revenue.

**Abdomen and pelvis:** Liver lesions (HCC detection), bile duct pathology (MRCP), rectal cancer staging, gynaecological tumours, prostate cancer.

**Cardiac MRI:** Available on 1.5T and 3.0T with the right cardiac coils and software — assessment of myocardial function, viability, and cardiomyopathies.`,
      },
      {
        heading: 'MRI Site Requirements in India',
        body: `MRI installation is more demanding than CT, primarily because of the magnetic field.

**RF shielding (Faraday cage):** The MRI room must be completely enclosed in a radiofrequency shield — typically copper sheet — to prevent external electromagnetic interference from degrading images.

**Magnet exclusion zone:** A 5 Gauss line defines where ferromagnetic objects (tools, oxygen cylinders, wheelchairs) become dangerous. This zone must be mapped and enforced with physical barriers and signage.

**Quench pipe:** In the unlikely event of a magnet quench (sudden loss of superconductivity), the cryogenic helium gas must vent safely outside the building via a quench pipe. Its route must be planned in the building design phase.

**Floor loading:** A 1.5T MRI system weighs 4,000–7,000 kg. The floor must be structurally certified for this load.

**Cryogen supply:** Superconducting MRI magnets require liquid helium for cooling. Modern GE systems use ZeroBoil-Off technology, dramatically reducing helium consumption, but helium refills are still needed periodically.

SEE Imaging provides a complete site survey and installation support as part of every MRI purchase.`,
      },
    ],
    ctaLabel: 'Enquire about MRI Systems',
    ctaLink: '/products',
  },

  {
    id: 5,
    slug: 'what-is-pet-ct-scan',
    tag: 'PET-CT',
    date: 'July 2025',
    readTime: '6 min read',
    title: 'What Is a PET-CT Scan? How It Works and Why It Matters for Cancer Diagnosis',
    summary: 'A PET-CT combines metabolic imaging with anatomical detail — making it the most powerful tool in oncology staging. This guide explains the technology in plain language.',
    sections: [
      {
        heading: 'Two Scanners in One',
        body: `A PET-CT scanner is two imaging systems built into a single gantry: a PET (Positron Emission Tomography) scanner and a CT (Computed Tomography) scanner. The patient passes through both in a single session, lying still on the same table. The result is two datasets — one showing metabolic activity, one showing anatomy — which are fused digitally into a single image.

This combination is what makes PET-CT uniquely powerful. CT tells you where something is. PET tells you whether it is metabolically active — i.e., whether cells in that region are consuming glucose at an elevated rate, which is a hallmark of cancer.

The GE Discovery 600 and Discovery 610 PET-CT systems supplied by SEE Imaging combine a 16-slice CT scanner with an advanced PET detector in a single integrated gantry.`,
      },
      {
        heading: 'How PET Imaging Works',
        body: `PET imaging relies on a radiotracer — a biologically active molecule tagged with a positron-emitting radioactive isotope. The most widely used tracer is FDG (Fluorodeoxyglucose), which is essentially glucose labelled with fluorine-18 (F-18), a radioactive isotope with a half-life of approximately 110 minutes.

Before the scan, a small dose of FDG is injected intravenously. The patient rests quietly for 45–60 minutes — the "uptake period" — while the FDG distributes through the body. Because cancer cells consume glucose at a much higher rate than normal tissue (the Warburg effect), FDG accumulates preferentially in tumour tissue.

As the F-18 in the FDG decays, it emits a positron. The positron almost immediately encounters an electron and the two annihilate, releasing two gamma rays (photons) in exactly opposite directions (180° apart) at the same instant. The PET scanner's ring of detectors surrounds the patient and detects these coincident photon pairs. By calculating where these pairs of photons originated, the scanner builds a three-dimensional map of FDG uptake — and therefore of metabolic activity.

The CT component, acquired immediately before or after the PET, provides the anatomical reference frame onto which the PET data is overlaid.`,
      },
      {
        heading: 'What Is Time-of-Flight (TOF) PET?',
        body: `Standard PET imaging calculates the origin of each annihilation event by detecting coincident photon pairs. Time-of-flight PET adds a further measurement: the precise time difference (measured in picoseconds) between the detection of each photon in the pair.

Since both photons travel at the speed of light, if they arrive at the detectors at exactly the same time, the annihilation event occurred at the midpoint between those two detectors. If one photon arrives slightly earlier, the event was closer to that detector. By measuring this tiny time difference, the scanner can localise the annihilation event much more precisely.

The practical benefits of TOF are real: better signal-to-noise ratio, improved image contrast, and better lesion detectability — particularly in larger patients where photon scatter is more pronounced. Both the GE Discovery 600 and Discovery 610 offer TOF capability.`,
      },
      {
        heading: 'Key Clinical Applications',
        body: `PET-CT has become indispensable in oncology, with significant applications in neurology and cardiology:

**Oncology (the primary use):**
- Initial staging: determining the extent of disease before treatment
- Restaging after treatment: assessing response to chemotherapy or radiation
- Detection of recurrence: identifying relapse before it is visible on CT alone
- Radiation therapy planning: delineating the metabolically active tumour volume for precise radiotherapy
- Lymphoma, lung cancer, colorectal cancer, cervical cancer, head and neck tumours, and melanoma are among the highest-volume indications

**Neurology:**
- Dementia differentiation: Alzheimer's vs frontotemporal dementia vs Lewy body dementia show distinct FDG uptake patterns
- Epilepsy: identifying seizure foci before surgery
- Brain tumour assessment and post-treatment evaluation

**Cardiology:**
- Myocardial viability: distinguishing hibernating (viable) myocardium from infarcted tissue before revascularisation decisions
- Cardiac sarcoidosis and infection imaging`,
      },
      {
        heading: "GE Discovery 600 vs Discovery 610: What's the Difference?",
        body: `Both systems share the same fundamental architecture — a 16-slice CT integrated with a TOF-capable PET detector — but the Discovery 610 represents the next generation with key improvements:

**PET sensitivity:** The Discovery 610 uses an enhanced LYSO scintillator detector with improved light output, resulting in higher PET sensitivity. In practical terms this means better image quality at the same injected FDG dose, or the same image quality at a lower dose.

**Scan speed:** The 610's improved sensitivity allows shorter acquisition times per bed position, making it better suited to high-volume oncology departments where throughput matters.

**Image quality in large patients:** TOF combined with improved sensitivity gives the 610 a particular advantage in heavier patients, where photon attenuation is highest.

For a smaller oncology centre or PET-CT programme establishing itself in a tier-2 city, the Discovery 600 is a highly capable, proven system. For a high-volume department (10+ patients per day), the Discovery 610's faster throughput and improved sensitivity make it the preferred choice.

Both systems are available through SEE Imaging as fully refurbished, calibrated, and commissioned units.`,
      },
      {
        heading: 'Infrastructure Requirements for PET-CT',
        body: `PET-CT installation is significantly more complex than CT alone, primarily because of the radiotracer:

**Radiation shielding:** PET emits 511 keV gamma rays — higher energy than diagnostic CT X-rays. Walls, ceiling, and floor of both the injection room and the scanning room require dedicated shielding designed by a qualified medical physicist or RSO.

**Radiopharmacy / FDG supply:** FDG must be produced in a cyclotron facility and delivered to your site within a narrow time window (due to the 110-minute half-life). Your site must be within reasonable driving distance of a cyclotron. Major Indian cities (Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, Kolkata) have cyclotron facilities.

**Hot lab:** A dedicated shielded room for handling and quality-control testing of the FDG dose before injection. Must be AERB-approved.

**AERB licensing:** Operating a PET-CT in India requires a specific AERB licence for the possession and use of unsealed radioactive sources, in addition to the standard radiation installation licence. SEE Imaging guides buyers through this process.

**Uptake room:** A shielded waiting room where patients rest for 45–60 minutes post-injection and pre-scan, away from other patients and staff.`,
      },
    ],
    ctaLabel: 'Enquire about PET-CT Systems',
    ctaLink: '/products/ge-discovery-pet-ct-600',
  },

  {
    id: 6,
    slug: 'amc-vs-cmc-which-service-contract',
    tag: 'Service',
    date: 'February 2025',
    readTime: '4 min read',
    title: 'AMC vs CMC: Which Service Contract Is Right for Your CT Scanner?',
    summary: "Annual Maintenance Contract vs Comprehensive Maintenance Contract — the difference matters more than you think. Here's how to choose based on your machine's age and your risk appetite.",
    sections: [
      {
        heading: 'Why a Service Contract Is Non-Negotiable',
        body: `A CT scanner or MRI system is not like a car that you can park and run without a regular service. These are precision instruments operating under extreme mechanical and thermal stress — the X-ray tube in a CT scanner rotates at over 100 km/h and is bombarded with electrical loads of 40–80 kW per scan. Components degrade, detectors drift out of calibration, and software requires regular patches.

In India, the average CT scanner downtime for a machine operating without a service agreement is 18–25 days per year. At ₹1,500–3,000 per scan and 40 scans per day, that represents ₹11–18 lakh in lost revenue annually — far exceeding the cost of a service contract.

Every CT scanner or MRI system purchased through SEE Imaging comes with a recommended service plan. Here is how to choose the right one.`,
      },
      {
        heading: 'AMC: Annual Maintenance Contract',
        body: `An Annual Maintenance Contract covers **labour and preventive maintenance visits only**. Spare parts are billed separately when needed.

**What's included:**
- Scheduled preventive maintenance visits (typically 2–4 per year)
- Engineer labour for breakdown calls
- Detector calibration and tube warm-up protocols
- Software updates where applicable

**What's not included:**
- Spare parts costs (X-ray tube, slip rings, collimators, high-voltage components)
- Emergency same-day response in all cases

**Typical annual cost:** ₹2–6 lakh depending on scanner model and age

**Best suited for:** Newer refurbished machines (under 5 years from manufacture), facilities with budget set aside for parts contingency, or operators with strong in-house biomedical engineering teams.`,
      },
      {
        heading: 'CMC: Comprehensive Maintenance Contract',
        body: `A Comprehensive Maintenance Contract covers both **labour and spare parts**. All costs — preventive maintenance, breakdown repairs, and replacement parts — are included in the fixed annual fee.

**What's included:**
- Everything in AMC
- All spare parts required for repairs (except X-ray tube in some contracts — confirm this explicitly)
- Priority response times — typically 4–8 hours to site

**What's not included:**
- Damage from misuse, floods, power surges beyond equipment spec
- X-ray tube (often carved out — this single component can cost ₹8–20 lakh)

**Typical annual cost:** ₹6–15 lakh depending on scanner model and age

**Best suited for:** Older machines (8+ years from manufacture), facilities in remote locations where sourcing emergency parts independently is difficult, high-volume centres where every day of downtime is extremely costly.`,
      },
      {
        heading: 'The X-Ray Tube Question',
        body: `The X-ray tube is the heart of a CT scanner and its most expensive consumable. A replacement tube costs ₹8–20 lakh depending on the GE model. This is the one line item that makes the difference between an AMC feeling like a bargain and a CMC feeling essential.

When negotiating any service contract, ask these specific questions:
- Is X-ray tube replacement included in the CMC or excluded?
- If excluded, what is the current tube age (hours) and estimated remaining life?
- Is there a prorated cost-sharing option if the tube fails within the contract period?

SEE Imaging documents tube hours for every refurbished scanner we supply and provides this information transparently as part of the purchase process.`,
      },
      {
        heading: 'SEE Imaging Service Territory',
        body: `SEE Imaging provides AMC and CMC service contracts for GE CT scanners and MRI systems across Madhya Pradesh, Chhattisgarh, Rajasthan, Uttar Pradesh, Maharashtra, and Gujarat.

Our engineering team is based in Bhopal and can reach most cities in central India within 4–8 hours. For remote locations, we work with regional partners to ensure coverage.

Contact us to get a service contract quotation for your existing machine — whether purchased from SEE Imaging or elsewhere.`,
      },
    ],
    ctaLabel: 'Get a Service Contract Quote',
    ctaLink: '/services',
  },

  {
    id: 7,
    slug: 'ct-scanner-site-preparation-checklist',
    tag: 'Guide',
    date: 'January 2025',
    readTime: '4 min read',
    title: 'CT Scanner Site Preparation: A Practical Checklist for Indian Facilities',
    summary: 'Poor site preparation is the #1 reason CT scanner installations are delayed or fail quality tests. This checklist covers everything from room dimensions to AERB documentation.',
    sections: [
      {
        heading: 'Start Site Prep 3–4 Months Before Delivery',
        body: `CT scanner site preparation must begin well before the machine is delivered. Civil work, electrical upgrades, radiation shielding, and AERB licensing all take time — and delays in any of these will delay your scanner going live.

The typical timeline from purchase order to first patient scan, when site work is done correctly, is 8–14 weeks. We have seen facilities take 6–9 months because civil work was started too late or radiation shielding drawings were not submitted to AERB on time.`,
      },
      {
        heading: 'Room Dimensions',
        body: `**Minimum room size for CT gantry:** 5.0m (L) × 4.5m (W) with a ceiling height of at least 2.8m. For 64-slice and above systems, 6.0m × 5.0m is recommended for comfortable patient and stretcher access.

**Control room:** A separate shielded control room of minimum 10 sq m is required for the operator console. The window between the control room and scan room must be lead-equivalent.

**Patient waiting/changing area:** Minimum 6–8 sq m adjacent to the scan room.

**Door width:** The main access door to the scan room must be at least 1.2m wide to allow entry of the gantry components (delivered in sections) and future servicing. A standard 0.9m door is insufficient.`,
      },
      {
        heading: 'Radiation Shielding',
        body: `This is the most critical and most commonly underestimated element of CT site preparation.

**Shielding calculation:** A qualified medical physicist must calculate the required shielding based on your specific scanner model (kVp, mA range), anticipated patient workload (patients per day, scan protocols), and the occupancy/use factors of adjacent areas.

**Typical specifications for a 16-slice GE CT:**
- Primary barrier (in the beam path): 1.5–2.0mm lead equivalent
- Secondary barriers: 1.0–1.5mm lead equivalent
- Floor and ceiling: calculated based on occupancy below/above

**Lead sheet or baryte concrete** are the most common shielding materials in India. Your civil contractor must follow the radiation physicist's drawings exactly.

**AERB approval:** Shielding drawings must be submitted to AERB and approved before installation begins. Do not proceed without written AERB approval.`,
      },
      {
        heading: 'Electrical Supply',
        body: `**Power requirement:** Most GE CT scanners require a dedicated 3-phase supply at 380–415V, 50Hz. Peak power draw ranges from 40 kW (single-slice) to 120 kW (128-slice Revolution).

**Dedicated circuit:** The CT scanner must be on its own dedicated electrical circuit, completely separate from other hospital loads. Voltage fluctuations from other equipment cause scan artifacts and can damage scanner electronics.

**UPS / AVR:** An Automatic Voltage Regulator is the minimum requirement. An online UPS is preferred — it protects against both voltage fluctuations and brief power outages.

**Earthing:** A dedicated earth pit with resistance under 1 ohm is required. A poor earth connection causes image artifacts and is a safety hazard.`,
      },
      {
        heading: 'Air Conditioning',
        body: `**Dedicated precision AC:** CT scanners require stable temperature and humidity. A general split AC is insufficient. A dedicated precision air conditioning unit maintaining 18–22°C and 40–60% relative humidity is required.

**Capacity:** 5 tonnes for most 16-slice systems; 7–10 tonnes for 64-slice and above.

**No shared zone with clinical areas:** The CT room AC must be independent of all other building zones.

**Pre-cooling:** The scan room should be brought to target temperature 2 hours before the scanner powers up each morning.`,
      },
      {
        heading: 'AERB Licensing Checklist',
        body: `Before your CT scanner can be used clinically, you need:

- Radiation Installation Licence (RIL) from AERB — applies to the facility/room
- Radiation Equipment Licence (REL) for the specific scanner model and serial number
- Radiation Safety Officer (RSO) appointment — a qualified person responsible for radiation safety at your facility
- Approved shielding drawings
- Acceptance test report from a qualified medical physicist
- Qualified radiographers — must hold AERB-recognised qualifications

SEE Imaging assists buyers with AERB documentation as part of our installation support. Our team has handled AERB licensing for CT installations across Madhya Pradesh, Chhattisgarh, and Rajasthan.`,
      },
    ],
    ctaLabel: 'Contact Us for Site Planning Support',
    ctaLink: '/contact',
  },
]
