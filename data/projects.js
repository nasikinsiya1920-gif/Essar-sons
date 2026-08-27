// Real projects supplied by the client, with real photography/video.
const PROJECTS = [
  {
    title: 'Jivdhani Glass Skywalk, Virar',
    desc: 'A glass walkway suspended over a mountain — one of the rarest structures the group has engineered, and proof of what 20 years of specialised glasswork can deliver.',
    video: '/img/content/jivdhani-project.mp4',
    client: 'Jivdani Mata Mandir Trust',
    location: 'Virar, Maharashtra',
    year: '2022',
    divisions: ['architectural'],
  },
  {
    title: 'Glass Bridge Floor Construction at Meril Life Sciences',
    desc: 'A structural glass floor for the connecting bridge between towers — engineered for full walkable load while keeping the span visually open across the facade.',
    img: '/img/content/meril-glass-bridge.png',
    client: 'Meril Life Sciences',
    location: 'Vapi, Gujarat',
    year: '2023',
    divisions: ['architectural'],
  },
  {
    title: 'Glass Facade at Indian Model School, Ulwe',
    desc: 'The facade features high-performance 6mm Topaz bronze reflective toughened glass from Saint Gobain, renowned for its excellent solar control and clean appearance.',
    img: '/img/content/modern-school-ulwe.png',
    client: 'Indian Model School',
    location: 'Ulwe, Navi Mumbai',
    year: '2023',
    divisions: ['architectural', 'wholesale'],
  },
];

function projectsFor(divisionKey) {
  if (!divisionKey || divisionKey === 'all') return PROJECTS;
  return PROJECTS.filter((p) => p.divisions.includes(divisionKey));
}

module.exports = { PROJECTS, projectsFor };
