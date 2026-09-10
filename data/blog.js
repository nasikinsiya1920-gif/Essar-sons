// Educational blog content. Each post's `content` is a list of typed blocks
// ([h2]/[h3]/[p]/[ul]) rendered by views/blog-post.ejs — kept structured
// rather than raw HTML so it renders consistently with the rest of the
// site's data-driven templates.
module.exports = [
  {
    slug: 'toughened-glass-vs-laminated-glass',
    title: 'Toughened Glass vs Laminated Glass: What’s the Difference?',
    excerpt: 'Both are safety glass, but they fail in opposite ways. Here’s how toughened and laminated glass actually differ, and how to choose between them.',
    description: 'Toughened glass vs laminated glass explained: how each is made, how they break, and which to choose for windows, facades, floors and balustrades.',
    publishedDate: '2026-09-10',
    relatedLinks: [
      { href: '/business/glass-wholesale', label: 'Glass Imports and Trading', heroImg: '/img/content/warehouse-space.png' },
      { href: '/business/architectural-glass', label: 'Architectural Glass Solutions', heroImg: '/img/content/architectural-hero-interior.jpg' },
    ],
    content: [
      { type: 'p', text: 'Toughened glass and laminated glass are both classed as "safety glass," but they behave in almost opposite ways when they fail: toughened glass shatters into small, blunt granules, while laminated glass cracks but stays bonded together as one sheet. Which one you need depends on whether your priority is impact strength, fall-through protection, sound control, or UV blocking.' },

      { type: 'img', src: 'https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?auto=format&fit=crop&w=1200&q=70', alt: 'Close-up of an angled glass facade panel system on a modern building', caption: 'Toughened and laminated glass are both common in large facade glazing — the right choice depends on the application.' },

      { type: 'h2', text: 'What Is Toughened Glass?' },
      { type: 'p', text: 'Toughened (tempered) glass is made by heating ordinary annealed glass to around 620–650°C and then cooling it rapidly with jets of air. This process, called quenching, puts the outer surfaces of the glass into permanent compression while the core remains in tension. The result is glass that is roughly four to five times stronger than annealed glass of the same thickness.' },
      { type: 'p', text: 'Because of the internal stress pattern, toughened glass cannot be cut, drilled or edge-worked after tempering — any such processing has to happen before the glass goes into the furnace. When it does break, the stored energy releases all at once, causing the whole pane to crumble into small, relatively blunt pieces rather than long dangerous shards.' },

      { type: 'h2', text: 'What Is Laminated Glass?' },
      { type: 'p', text: 'Laminated glass is made by bonding two or more layers of glass together with an interlayer — most commonly PVB (polyvinyl butyral), sometimes EVA — under heat and pressure. The interlayer is what does the work: it’s the same principle used in automotive windshields.' },
      { type: 'p', text: 'When laminated glass cracks, the glass itself can fracture, but the interlayer holds the pieces in place instead of letting them fall away. The pane may look "spider-webbed" but stays intact as a single sheet, which is why it’s the standard choice anywhere a broken pane still needs to hold its shape — overhead glazing, skylights, glass floors and balustrades.' },

      { type: 'img', src: 'https://images.unsplash.com/photo-1557411732-1797a9171fcf?auto=format&fit=crop&w=1200&q=70', alt: 'Crackled, shattered glass texture pattern', caption: 'A cracked pane\'s breakage pattern is the clearest visual difference between toughened and laminated glass.' },

      { type: 'h2', text: 'Key Differences at a Glance' },
      { type: 'ul', items: [
        'Breakage pattern: toughened crumbles into small pieces and falls away; laminated cracks but stays bonded in place.',
        'Fall-through protection: laminated glass can still bear load after cracking, which is why it’s specified for overhead and floor applications; toughened glass cannot.',
        'Sound insulation: the PVB interlayer in laminated glass damps sound significantly better than a single toughened pane of the same thickness.',
        'UV protection: standard PVB interlayers block around 99% of UV transmission, which toughened glass alone does not.',
        'Post-processing: toughened glass must be cut and drilled before tempering; laminated glass can sometimes be reworked at the edges depending on the interlayer and build.',
        'Typical cost: laminated glass is generally more expensive than toughened glass of equivalent thickness, due to the extra materials and lamination process.',
      ] },

      { type: 'h2', text: 'Where Each Type Is Typically Used' },
      { type: 'p', text: 'Toughened glass is the common choice wherever raw strength and safe breakage matter more than fall-through protection: shower enclosures, glass entrance doors, table tops, glass balustrades (usually paired with a handrail), and as the base layer in insulated glass units.' },
      { type: 'p', text: 'Laminated glass is specified wherever a broken pane still needs to hold together or hold weight: overhead glazing and skylights, glass floors and walkways, glass bridges, ground-floor storefronts in high-footfall or high-security areas, and facades facing heavy traffic noise or intense sun exposure.' },

      { type: 'img', src: 'https://images.unsplash.com/photo-1590490584637-f0f83a370a95?auto=format&fit=crop&w=1200&q=70', alt: 'Large reflective glass building facade', caption: 'Large-scale glazing on commercial buildings typically combines both types depending on the panel\'s position and load.' },

      { type: 'h2', text: 'Can the Two Be Combined?' },
      { type: 'p', text: 'Yes — laminated toughened glass, made by laminating two toughened panes together with a PVB interlayer, combines the impact strength of tempering with the cohesion of lamination. It costs more than either type alone but is often specified for high-security glazing, blast-resistant applications, and structural glass floors or bridges where both strength and fail-safe behaviour are required.' },

      { type: 'h2', text: 'How to Choose' },
      { type: 'p', text: 'As a starting point: if the glass is overhead, walked on, or needs to stay in place after a crack (skylights, floors, balustrade infill, high-rise facades), lean toward laminated. If the priority is impact resistance in a vertical application where blunt breakage is acceptable (shower doors, table tops, standard partitions), toughened is usually the more economical choice. Acoustic performance, UV exposure, and local building code requirements for safety glazing should all factor into the final specification — it’s worth confirming the exact requirement for your application with your glass supplier or structural consultant before ordering.' },

      { type: 'p', text: 'If you’re sourcing float glass, laminated glass or toughened glass in bulk for a project in Maharashtra, Essar Sons Group’s <a href="/business/glass-wholesale">Glass Imports and Trading</a> division supplies all three from established brands. For glass that needs to be processed and fitted to a specific design — fire-rated, modular, or decorative — our <a href="/business/architectural-glass">Architectural Glass Solutions</a> division can help.' },
    ],
  },
  {
    slug: 'aluminium-windows-vs-upvc-windows',
    title: 'Aluminium Windows vs UPVC Windows: Which Should You Choose?',
    excerpt: 'Aluminium and UPVC windows solve different problems. Here’s how they actually compare on strength, insulation, maintenance and cost.',
    description: 'Aluminium vs UPVC windows compared: strength, thermal performance, maintenance, cost and lifespan — and which suits your climate and building type.',
    publishedDate: '2026-09-10',
    relatedLinks: [
      { href: '/business/windoors', label: 'Facade and Fenestration', heroImg: '/img/content/office-partition.jpg' },
    ],
    content: [
      { type: 'p', text: 'Aluminium windows are stronger and slimmer-profiled, which suits large openings and contemporary facades; UPVC windows generally insulate better and cost less upfront. Neither is universally "better" — the right choice depends on your climate, budget, building type and the look you’re after.' },

      { type: 'h2', text: 'What Are Aluminium Windows?' },
      { type: 'p', text: 'Aluminium windows use frames extruded from aluminium alloy, which gives them a high strength-to-weight ratio. That strength allows for slimmer sightlines and larger glass panes than most other frame materials can support, which is why aluminium is the default choice for large glazed facades, sliding doors and contemporary architecture. Frames are typically powder-coated for finish and weather resistance, and aluminium is fully recyclable.' },
      { type: 'p', text: 'On its own, aluminium is a good conductor of heat, which historically made plain aluminium frames a weak point for insulation. Modern aluminium systems address this with a "thermal break" — a strip of insulating polymer between the inner and outer sections of the frame — which significantly narrows the insulation gap with other materials.' },

      { type: 'img', src: 'https://images.unsplash.com/photo-1512729462351-43b8d81cdeab?auto=format&fit=crop&w=1200&q=70', alt: 'Slim aluminium window and balcony frames on a contemporary apartment building', caption: 'Aluminium\'s strength allows for slimmer frame profiles and larger glazed openings.' },

      { type: 'h2', text: 'What Are UPVC Windows?' },
      { type: 'p', text: 'UPVC (unplasticized polyvinyl chloride) windows use a rigid plastic frame, usually built with multiple internal chambers. Those internal chambers trap air and act as insulation, which is the main reason UPVC windows are known for strong thermal and sound performance. UPVC doesn’t rust, rot or corrode, and it needs very little maintenance beyond regular cleaning — it’s never repainted the way timber or some metal frames are.' },
      { type: 'p', text: 'The trade-off is bulkier frame profiles than aluminium (since UPVC isn’t as strong per unit of thickness), a more limited range of finishes historically (though foiled/laminated colour finishes have expanded this in recent years), and a lower practical ceiling on pane size before the frame needs additional reinforcement.' },

      { type: 'img', src: 'https://images.unsplash.com/photo-1629712803507-cdf200278157?auto=format&fit=crop&w=1200&q=70', alt: 'Light-framed residential window with multi-chambered profile', caption: 'UPVC\'s multi-chamber profile is the main reason it insulates well against heat and sound.' },

      { type: 'h2', text: 'Key Comparison' },
      { type: 'ul', items: [
        'Strength & spans: aluminium supports larger, slimmer glazed openings; UPVC is better suited to standard residential window and door sizes.',
        'Thermal insulation: UPVC’s multi-chamber profile generally insulates better out of the box; thermally broken aluminium narrows this gap but usually doesn’t fully close it.',
        'Maintenance: both are low-maintenance compared to timber; UPVC never needs repainting, aluminium’s powder coating is also highly durable.',
        'Cost: UPVC is typically cheaper upfront for standard window sizes; aluminium costs more but can be the only practical option for large spans.',
        'Aesthetics: aluminium gives slimmer, more contemporary sightlines; UPVC frames are bulkier but finish options have improved significantly.',
        'Lifespan & recyclability: both last several decades with proper installation; aluminium is more readily recyclable at end of life.',
      ] },

      { type: 'h2', text: 'Which Suits the Indian Climate Better?' },
      { type: 'p', text: 'In coastal and high-UV conditions common across Maharashtra, powder-coated aluminium holds up well over decades without warping, discolouring or softening in heat — marine-grade coatings are commonly specified for coastal exposure. UPVC performs reliably too and offers a genuine insulation advantage in extreme heat or cold, but lower-grade UPVC can discolour or soften under prolonged intense sun, so profile quality matters more in hot climates than in temperate ones.' },
      { type: 'p', text: 'For high-rise facades, large sliding doors and glass-forward architectural elevations — common in commercial and premium residential builds — aluminium is generally the practical choice simply because of the spans involved. For standard home or apartment windows where insulation and budget are the priority, UPVC is a strong option.' },

      { type: 'img', src: 'https://images.unsplash.com/photo-1565261949232-3fcc78206c0c?auto=format&fit=crop&w=1200&q=70', alt: 'Large slim-framed aluminium sliding glass doors opening onto a coastal balcony view', caption: 'Large sliding doors and coastal-facing facades are where aluminium\'s spans and weather resistance matter most.' },

      { type: 'h2', text: 'Making the Decision' },
      { type: 'p', text: 'A quick way to frame the choice: if the project involves large glazed openings, a contemporary aesthetic, or facade-scale glazing, aluminium is usually the better fit. If the project is standard-sized residential windows where thermal insulation and upfront cost matter most, UPVC is worth serious consideration. Both are durable, low-maintenance upgrades over older timber or steel windows — the deciding factors are almost always span size, budget and the specific thermal performance you need.' },

      { type: 'p', text: 'If you’re weighing aluminium against UPVC for a project in the Mumbai Metropolitan Region, Essar Windoors — which manages Essar Sons Group’s <a href="/business/windoors">Facade and Fenestration</a> division — fabricates aluminium windows, doors, partitions and glazed facades built to your specification.' },
    ],
  },
  {
    slug: 'how-to-choose-the-right-lifting-belt',
    title: 'How to Choose the Right Lifting Belt',
    excerpt: 'Working load limit, sling angle, and material all affect which lifting belt is safe for your job. Here’s how to choose — and inspect — correctly.',
    description: 'How to choose the right lifting belt (webbing sling): working load limits, colour codes, materials, sling angles and safe inspection practices.',
    publishedDate: '2026-09-10',
    relatedLinks: [
      { href: '/business/lifters', label: 'Industrial Lifting, Material Handling and Rigging Solutions', heroImg: '/img/content/lifters-hero-chain-hoists.jpg' },
    ],
    content: [
      { type: 'p', text: 'The right lifting belt — more formally, a webbing sling — depends on three things: the working load limit (WLL) you need, the angle you’ll be lifting at, and the material being handled. Get any one of those wrong and you either risk an unsafe lift or pay for far more capacity than the job needs.' },

      { type: 'h2', text: 'What Is a Lifting Belt?' },
      { type: 'p', text: 'A lifting belt is a flat, woven textile sling used to cradle and lift a load, usually in combination with a crane, hoist or forklift attachment. Most are woven from polyester, valued for its low stretch and good resistance to UV and moisture; nylon slings offer more elasticity and shock absorption, which suits dynamic or jarring lifts; polypropylene is lighter and cheaper but generally lower in strength and durability, so it’s used for lighter-duty work.' },
      { type: 'p', text: 'A widely used industry colour-coding convention (based on the EN 1492-1 standard for textile slings) marks the working load limit by webbing colour: violet for 1 tonne, green for 2 tonnes, yellow for 3 tonnes, grey for 4 tonnes, red for 5 tonnes, brown for 6 tonnes, blue for 8 tonnes, and orange for 10 tonnes. This is a helpful visual reference on-site, but the sling’s rated label and tag should always be the final word on its actual capacity.' },

      { type: 'img', src: 'https://images.unsplash.com/photo-1761519609120-0f0a84a9932b?auto=format&fit=crop&w=1200&q=70', alt: 'Overhead crane and hoist inside an industrial warehouse', caption: 'Lifting belts are typically used with an overhead crane, hoist or forklift attachment.' },

      { type: 'h2', text: 'Common Types of Lifting Belts' },
      { type: 'ul', items: [
        'Flat (standard) webbing sling — a single flat strap with reinforced loop eyes at each end; the most common general-purpose type.',
        'Endless (round loop) webbing sling — a continuous loop of webbing, useful for choker hitches and for spreading wear across the sling by rotating the loop.',
        'Sling with soft or heavy-duty eyes — reinforced eye sections for use with hooks or shackles on heavier loads.',
        'Round slings — a related but distinct product: load-bearing yarns protected inside a woven outer sleeve, often used where extra flexibility around irregular loads is needed.',
      ] },

      { type: 'h2', text: 'Key Selection Criteria' },
      { type: 'p', text: 'Start with the working load limit your job actually requires, then apply a margin — webbing slings are typically manufactured with a safety factor around 7:1 against breaking strength, but that factor is built into the WLL rating itself, so never load a sling beyond its stated WLL regardless of the safety factor behind it.' },
      { type: 'p', text: 'Sling angle matters more than most people expect: as the angle between the sling legs and the horizontal decreases, the effective load on each leg increases sharply, even though the load itself hasn’t changed. A two-legged sling rated for a given WLL at a 90° (vertical) lift can lose a significant portion of that capacity once the legs are splayed out at a shallow angle — this is one of the most common causes of sling overload on site, so the intended rigging angle should always be factored into the sling selection, not just the raw load weight.' },
      { type: 'p', text: 'Beyond WLL and angle, match the material to the environment: polyester for general outdoor and UV-exposed use, nylon where shock-loading is likely, and check chemical compatibility if the load or the environment involves solvents, acids or high heat, since these can degrade webbing fibres. For loads with sharp edges or corners, use edge protection sleeves or corner pads — an unprotected webbing sling can be cut or abraded very quickly against a sharp edge.' },

      { type: 'img', src: 'https://images.unsplash.com/photo-1730584475949-a01e4663003a?auto=format&fit=crop&w=1200&q=70', alt: 'Overhead crane rigging and lifting a steel frame load in a warehouse', caption: 'Sling angle and load weight both affect the working load a lifting belt can safely handle.' },

      { type: 'h2', text: 'Inspection and Safe Use' },
      { type: 'p', text: 'Before every use, check the sling for cuts, fraying, embedded debris, chemical staining, UV degradation (a chalky or brittle feel), and damage to the stitching or eyes. Never knot a webbing sling to shorten it, never drag a loaded sling across rough or abrasive surfaces, and always keep the sling’s identification tag legible — it carries the WLL, material and manufacture details you need for safe use. Slings should be stored away from direct sunlight, moisture and chemical exposure, and retired immediately once damage is found rather than kept "for light duty."' },

      { type: 'h2', text: 'Choosing the Right One: A Quick Checklist' },
      { type: 'ul', items: [
        'Confirm the actual load weight and add an appropriate margin below the sling’s rated WLL.',
        'Account for the sling angle you’ll actually rig at, not just the vertical load weight.',
        'Match the material (polyester, nylon, polypropylene) to the environment and load type.',
        'Use edge protection for loads with sharp corners or abrasive surfaces.',
        'Inspect before every lift, and retire any sling showing cuts, fraying or chemical damage.',
      ] },

      { type: 'p', text: 'Excel Traders and Muzaf Enterprise, who manage Essar Sons Group’s <a href="/business/lifters">Industrial Lifting, Material Handling and Rigging Solutions</a> division, supply lifting belts alongside wire ropes, chain blocks and pallet trucks for lifting and material handling jobs across India.' },
    ],
  },
];
