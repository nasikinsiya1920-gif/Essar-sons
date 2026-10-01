// Real projects supplied by the client, with real photography/video.
// Each project carries a `slug` for its /projects/:slug detail page.
// Older projects only have the basic fields below; richer detail fields
// (scope, challenge, approach, differentiator, gallery, keywords, etc.)
// are optional — views/project-detail.ejs renders gracefully without them.
const PROJECTS = [
  {
    slug: 'jivdani-glass-skywalk-virar',
    title: 'Jivdani Glass Skywalk, Virar',
    desc: 'A glass walkway suspended over a mountain — one of the rarest structures the group has engineered, and proof of what 40 years of specialised glasswork can deliver.',
    video: '/img/content/jivdhani-project.mp4',
    img: '/img/content/jivdani-skywalk-still.webp',
    client: 'Jivdani Mata Mandir Trust',
    location: 'Virar, Maharashtra',
    year: '2022',
    divisions: ['architectural'],
    divisionSlug: 'architectural-glass',
  },
  {
    slug: 'glass-bridge-meril-life-sciences',
    title: 'Glass Bridge Floor Construction at Meril Life Sciences',
    desc: 'A structural glass floor for the connecting bridge between towers — first of its kind for an office building in India.',
    img: '/img/content/meril-glass-bridge.png',
    client: 'Meril Life Sciences',
    location: 'Vapi, Gujarat',
    year: '2023',
    divisions: ['architectural'],
    divisionSlug: 'architectural-glass',
  },
  {
    slug: 'glass-facade-indian-model-school-ulwe',
    title: 'Glass Facade at Indian Model School, Ulwe',
    desc: 'The facade features high-performance 6mm Topaz bronze reflective toughened glass from Saint Gobain, renowned for its excellent solar control and clean appearance.',
    img: '/img/content/modern-school-ulwe.png',
    client: 'Indian Model School',
    location: 'Ulwe, Navi Mumbai',
    year: '2023',
    divisions: ['architectural', 'wholesale'],
    divisionSlug: 'architectural-glass',
  },
  {
    slug: 'mumbai-metro-stations-glass',
    title: 'Toughened Backpainted Glass Across 9 Mumbai Metro Stations — Dahisar to Bhayander',
    metaTitle: 'Toughened Glass for Mumbai Metro Stations — Dahisar, Mira Road & Bhayander',
    metaDescription: 'Essar Sons supplied and installed 6mm toughened backpainted glass across 9 Mumbai Metro stations — Dahisar, Mira Road and Bhayander — plus retail glass partitions and railings, with exact shade-matching on a tight timeline.',
    desc: 'Wall glazing supplied and installed for Mumbai Metro, along with toughened glass partitions and railings for the retail stores inside each station.',
    img: '/img/projects/mumbai-metro-stations/mumbai-metro-stations-kashigaon-01.webp',
    location: 'Dahisar, Mira Road & Bhayander, Mumbai',
    division: 'Architectural Glass',
    divisionSlug: 'architectural-glass',
    client: 'Mumbai Metro',
    clientNameConfirmed: true,
    year: '2025',
    completedDate: '2025-10-15',
    divisions: ['architectural'],
    scope: '6mm toughened backpainted glass (station walls) + toughened glass partitions and railings (retail stores)',
    stationsCovered: 9,
    outcome: 'Wall glazing supplied and installed for Mumbai Metro, along with toughened glass partitions and railings for the retail stores inside each station.',
    challenge: "Backpainted glass shade has to match exactly, panel to panel — and this job meant holding that same shade consistent across nine separate stations, not just one wall. On top of that, the retail fit-out inside each station was on a tight schedule, so there was no room for a batch mismatch or a delay that held up site readiness.",
    approach: [
      "Backpainted glass processed on our automated lacquered glass line, set to the client's exact required shade",
      '6mm toughened glass fabricated to spec for the station wall panels',
      'Supply and installation carried out across all nine stations — Dahisar, Mira Road, and Bhayander',
      'Toughened glass partitions and railings fabricated and installed separately for the retail stores inside the stations',
    ],
    differentiator: "An automated lacquered glass line let us hold the exact same shade across all nine stations — the kind of consistency that's hard to guarantee panel by panel with manual processing — while still delivering fast enough to keep the retail fit-out on schedule.",
    bannerImage: '/img/projects/mumbai-metro-stations/mumbai-metro-stations-kashigaon-01.webp',
    gallery: [
      {
        src: '/img/projects/mumbai-metro-stations/mumbai-metro-stations-kashigaon-01.webp',
        alt: 'Toughened backpainted glass wall cladding at Kashigaon metro station',
      },
    ],
    videoUrl: null,
    keywords: [
      'toughened glass Mumbai Metro',
      'backpainted glass Mumbai',
      'glass facade metro station',
      'toughened glass partition Mumbai',
      'glass railing supplier Mumbai',
      'architectural glass Dahisar Mira Road Bhayander',
      'Kashigaon metro station glass',
    ],
  },
];

function projectsFor(divisionKey) {
  if (!divisionKey || divisionKey === 'all') return PROJECTS;
  return PROJECTS.filter((p) => p.divisions.includes(divisionKey));
}

function projectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}

module.exports = { PROJECTS, projectsFor, projectBySlug };
