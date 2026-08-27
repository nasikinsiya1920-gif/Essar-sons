// Data backing the two bespoke flagship division templates
// (architectural-glass.ejs and glass-wholesale.ejs), which are richer
// than the shared firm.ejs template. Images are Unsplash stock placeholders.

const storefront = {
  headline: 'Where it started.',
  body:
    "Long before the group grew to six businesses, it started as a single storefront on Agashi Road in Virar West — a small showroom where the family sold and fitted glass by hand. That same address is still the group's front desk today: the place customers walk into first, samples in hand, before any order ever reaches a processing unit.",
  img: '/img/content/essar-door-sign.png',
};

module.exports = {
  architectural: {
    key: 'architectural',
    name: 'Architectural Glass Solutions',
    managedBy: 'Alfa Enterprises',
    eyebrow: 'Division 01 · Essar Sons Group',
    tagline: 'Premium processed and specialty glass — engineered to spec, priced fairly, delivered on time.',
    heroImg: '/img/content/architectural-hero-interior.jpg',
    catalogueUrl: 'https://www.essarsons.in/',
    marquee: ['PROCESSED GLASS', 'MODULAR SYSTEM GLASS', 'GLASS BRICKS', 'GLASS PILLARS', 'FIRE RATED GLASS', 'RADIATION SHIELD GLASS'],
    offerings: [
      { title: 'Designer Mirror & Glass', desc: 'Decorative mirror and processed glass ranges for interiors and retail.', img: '/img/content/mirror-lounge.png' },
      { title: 'Fire Rated & Radiation Shield', desc: 'Certified fire rated and radiation shielding glass, specified to code.', img: '/img/content/fire-glass.jpg' },
      { title: 'Modular Glass Systems', desc: 'Glass bricks, pillars and modular system glass for partitions and displays.', img: '/img/content/commercial-facade.jpg' },
    ],
    aboutHeadline: 'Top-grade material, long service life, fair prices.',
    aboutBody:
      "Our Architectural Glass unit offers a wide range of processed glass, modular system glass, glass bricks, glass pillars, fire rated and radiation shield glasses which are made using top-grade resources. In adding to this, owing to their strong construction, premium quality, long service life, and affordable prices, these designer mirror and glass ranges are highly appreciated among our patrons.",
    aboutImg: '/img/content/warehouse-space.png',
    stats: [
      ['No. of Units Sold', '3000+'],
      ['Happy Clients', '1000+'],
      ['Total SKUs', '500+'],
      ['Operating Since', '2019'],
    ],
    whereWeWork: [
      { title: 'Residential', desc: 'Bungalows and homes — from single windows to full glass facades.', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=60' },
      { title: 'Commercial Buildings', desc: 'Facades and interiors for offices and developments, built with builders like Lodha.', img: '/img/content/commercial-facade.jpg' },
      { title: 'Signature Structures', desc: "Rare builds like glass bridges and skywalks — engineered for what others won't attempt.", img: '/img/content/meril-glass-bridge.png' },
    ],
    storefront,
    reachHeadline: "Bungalow, building, or something nobody's built before.",
    reachIntro: "Tell us the scope and we will match it to the right glass, the right finish and the right unit within the group.",
    office: 'Glass Processing Unit',
    address: 'Alfa Enterprises, Plot no. 674, Raipada, Opp. Siddhesh Garage, Veer Savarkar Marg, Virar East — 401305',
    contacts: ['Mohammad Arsiwala: 8369882427', 'Fakhruddin Arsiwala'],
    email: 'enquiries@essarsons.com',
    tel: '+918369882427',
    map: 'https://www.google.com/maps/place/Alfa+Enterprises+-+Lifters/@19.4511663,72.8041197,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7aa381ff3e6ff:0x7ec8b3b0e091a4ad!8m2!3d19.4511663!4d72.8066946!16s%2Fg%2F11j2_vlgzm?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D',
  },
  wholesale: {
    key: 'wholesale',
    name: 'Glass Imports and Trading',
    managedBy: 'Essar and Hakimi Trading Company',
    eyebrow: 'Division 02 · Essar Sons Group',
    tagline: 'Wholesale supplier of architectural glass across Maharashtra — top brands, delivered swiftly.',
    heroImg: '/img/content/warehouse-space.png',
    marquee: ['FLOAT GLASS', 'LAMINATED GLASS', 'PROCESSED GLASS', 'MIRROR', 'TOP BRANDS', 'BULK SUPPLY'],
    offerings: [
      { title: 'Ample Warehouse Space', desc: 'Deep inventory held ready across brands and thicknesses.', img: '/img/content/warehouse-space.png' },
      { title: 'Mechanised Loading and Unloading', desc: 'Handled with equipment, not guesswork — less breakage, faster turnaround.', img: '/img/content/warehouse-crane.png' },
      { title: 'In-House Transport Fleet and Prompt Delivery', desc: 'Our own vehicles to Mumbai, Pune, Surat, Nashik and beyond.', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=60' },
    ],
    aboutHeadline: 'A trusted partner for bulk glass solutions.',
    aboutBody:
      "Essar is a leading wholesaler of architectural glass in Maharashtra, catering to retailers across Mumbai, Pune, Surat, Nashik, and more. We take pride in our prompt delivery system, mechanised loading and unloading, ample warehouse capacity, and in-house transport fleet — ensuring efficiency at every step. With top-brand glass, streamlined logistics, and a professional team, we are your trusted partner for bulk glass solutions.",
    aboutImg: '/img/content/material-handling.png',
    stats: [
      ['On-Time Delivery Rate', '100%'],
      ['Warehouse Capacity', '5000 sq.ft'],
      ['Avg. Orders Fulfilled Per Day', '100+'],
      ['No. of Cities We Serve In', '10+'],
    ],
    whereWeWork: [
      { title: 'Retailers', desc: 'Glass retailers across Mumbai, Pune, Surat and Nashik stocked on schedule.', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=60' },
      { title: 'Fabricators', desc: 'Bulk float, laminated and processed glass supplied to fabrication units.', img: '/img/content/crate-lift.png' },
      { title: 'Builders & Contractors', desc: 'Project-volume supply coordinated to site timelines.', img: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=900&q=60' },
    ],
    storefront,
    reachHeadline: 'Tell us the volume, we will quote the load.',
    reachIntro: 'Share the brand, thickness and quantity — our desk will turn around a quote the same day.',
    office: 'Glass Processing Unit',
    address: 'Alfa Enterprises, Plot no. 674, Raipada, Opp. Siddhesh Garage, Veer Savarkar Marg, Virar East — 401305',
    contacts: ['Ali Arsiwala: 9594364561'],
    email: 'glassiers@outlook.com',
    tel: '+919594364561',
    map: 'https://www.google.com/maps/search/?api=1&query=Veer+Savarkar+Marg+Virar+East',
  },
};
