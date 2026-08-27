// Data for the shared firm-template pages, rendered by views/firm.ejs via
// the :firm route param. The "Glass Retail" / Essar Traders firm has been
// removed from the group entirely — do not re-add a `traders` entry here.
// Images are Unsplash stock placeholders.
module.exports = {
  windoors: {
    key: 'windoors',
    divisionKey: 'windoors',
    name: 'Facade and Fenestration',
    managedBy: 'Essar Windoors',
    eyebrow: 'Division 03 · Essar Sons Group',
    tagline: 'Experts In Aluminum And Glass Architectural Solutions',
    intro:
      "We specialize in aluminum fabrication and glass façades, offering a wide range of products like windows, doors, partitions, louvers, and cubicles. Known for quality, strength, and durability, our solutions meet diverse needs with precision and trusted sourcing.",
    heroImg: '/img/content/office-partition.jpg',
    marquee: ['ALUMINIUM WINDOWS', 'GLAZED PARTITIONS', 'ACP WALL CLADDING', 'LOUVERS', 'SHOWER CUBICLES', 'OFFICE CUBICLES'],
    offerings: [
      { title: 'Aluminium Windows, Doors And Glazed Partitions', img: '/img/content/office-partition.jpg' },
      { title: 'Aluminium Composite Wall Cladding Panels', img: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=900&q=60' },
      { title: 'Shower And Office Cubicles', img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=60' },
    ],
    aboutHeadline: 'A decade of fabrication for Mumbai builders.',
    aboutBody:
      "Essar Windoors delivers expert aluminum fabrication and glass façade solutions tailored to modern needs. Backed by over a decade of experience, our team offers durable, high-quality windows, doors, partitions, louvers, and more. We have partnered with major builders across Mumbai and its suburbs, bringing precision, trusted sourcing, and versatile designs to every residential and commercial project.",
    aboutImg: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1600&q=70',
    stats: [
      ['Projects Completed', '50+'],
      ['Happy Clients', '50+'],
      ['Project Turnaround Time', '3 months'],
      ['Operating Since', '2022'],
    ],
    reachHeadline: 'Send us the elevation, we will quote the fabrication.',
    office: 'Aluminium Fabrication Unit',
    address: 'Essar Windoors, Divlaipada, Near Special Kids School, Bolinj, Virar West',
    contacts: ['Sakina Arsiwala: 9821191472'],
    email: 'sales@essarwindoors.com',
    tel: '+919821191472',
    map: 'https://www.google.com/maps/search/?api=1&query=Divlaipada+Bolinj+Virar+West',
  },
  lifters: {
    key: 'lifters',
    divisionKey: 'lifters',
    name: 'Industrial Lifting, Material Handling and Rigging Solutions',
    managedBy: 'Excel Traders and Muzaf Enterprise',
    eyebrow: 'Division 04 · Essar Sons Group',
    tagline: 'Nationwide Suppliers of Lifting Tackles and Material Handling Equipment',
    intro:
      "Excel Traders and Muzaf Enterprise provide dependable material and lifting equipment solutions—backed by trusted manufacturing, thoughtful quality control, and a commitment to fair pricing and nationwide service.",
    heroImg: '/img/content/crate-lift.png',
    marquee: ['HOISTS', 'WINCHES', 'LIFTING CLAMPS', 'SLINGS', 'MATERIAL HANDLING', 'PAN-INDIA DELIVERY'],
    offerings: [
      { title: 'Electric and Manual Hoist and Winches', img: '/img/content/crate-lift.png' },
      { title: 'Lifting Clamps and Slings', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=60' },
      { title: 'Material Handling Equipment', img: '/img/content/material-handling.png' },
    ],
    aboutHeadline: 'A large vendor base, a nationwide dispatch desk.',
    aboutBody:
      "We offer a wide range of high-quality material handling equipment in various specs to meet diverse client needs. Backed by a skilled team, strong warehousing, and ethical practices, we ensure smooth order processing, fast dispatch, and reliable nationwide delivery—striving always for customer satisfaction. Because of our large vendor base, we have been prominent suppliers pan India. Our primary goal is to make sure that our strong, durable and easy to use products are delivered to our customers at the most competitive rates in the country.",
    aboutImg: '/img/content/warehouse-crane.png',
    stats: [
      ['No. of Units Sold', '3000+'],
      ['Happy Clients', '1000+'],
      ['Total SKUs', '500+'],
      ['Operating Since', '2019'],
    ],
    team: [
      ['Fakhruddin Arsiwala', 'Director', '/img/team/fakhruddin.png'],
      ['Mohammadally Arsiwala', 'Director', '/img/team/mohammadally.png'],
    ],
    reachHeadline: 'Tell us the load, we will quote the tackle.',
    office: 'Lifting Business Sales Office',
    address: 'Alfa Enterprises, 94, Abdul Rehman Street, Mumbai — 400003',
    contacts: ['Mohammad Arsiwala: 8369882427'],
    email: 'sales@alfalifters.com',
    tel: '+918369882427',
    map: 'https://www.google.com/maps/search/?api=1&query=Abdul+Rehman+Street+Mumbai',
  },
  constructions: {
    key: 'constructions',
    divisionKey: 'constructions',
    name: 'Construction',
    managedBy: 'Arsiwala Constructions Private Limited',
    eyebrow: 'Division 05 · Essar Sons Group',
    tagline: 'Builders Of High-Rise Homes And Commercial Spaces In Mumbai',
    intro:
      "ACPL brings together expert professionals to deliver high-rise apartments and commercial spaces in Mumbai. Evolving from Essar Builders, we are a RERA-registered company committed to raising industry standards with quality and compliance.",
    heroImg: '/img/content/workers-installation.png',
    marquee: ['HIGH-RISE RESIDENTIAL', 'COMMERCIAL SPACES', 'RERA REGISTERED', 'ESSAR APEX', 'ESSAR VILLA', 'VIRAR, MUMBAI'],
    offerings: [
      { title: 'High-Rise Expertise', img: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=900&q=60' },
      { title: 'RERA Registered & Compliant', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=60' },
      { title: 'End-To-End Construction Solutions', img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=60' },
    ],
    aboutHeadline: 'From Essar Builders to a RERA-registered developer.',
    aboutBody:
      "Established in 2011, Arsiwala Constructions (ACPL) evolved from Essar Builders to bring a professional edge to real estate. Specializing in high-rise residential and commercial spaces in Mumbai, ACPL is a RERA-registered firm known for quality and compliance. Landmark projects in Virar include Essar Apex, Essar Villa, and other community-focused developments that reflect our commitment to excellence and growth.",
    aboutImg: '/img/content/workers-installation.png',
    stats: [
      ['Total sq. ft Constructed', '1,56,000+'],
      ['No. of Projects Completed', '04'],
      ['Years in the Industry', '12+'],
      ['Compliance and Safety', '100%'],
    ],
    reachHeadline: 'Talk to us about your plot or your next home.',
    office: 'Office and Showroom',
    address: 'Esssar, 11 Unique Rashmi Shopping Centre, Agashi Road, Virar West — 401303',
    contacts: ['Fakhruddin Arsiwala: 79 7713 7354', 'Zakir Arsiwala: 98600 78651'],
    email: 'essarsons@live.com',
    tel: '+917977137354',
    map: 'https://www.google.com/maps/search/?api=1&query=Agashi+Road+Virar+West',
  },
};
