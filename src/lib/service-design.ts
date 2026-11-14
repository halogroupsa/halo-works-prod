export type ServiceDesign = {
  searchTitle: string;
  heading: [string, string];
  description: string;
  motif:
    | "home"
    | "joinery"
    | "office"
    | "hospitality"
    | "retail"
    | "design"
    | "delivery";
  drawingTitle: string;
  drawingNote: string;
  points: [string, string, string];
  secondary: string;
  galleryTitle: string;
  galleryCopy: string;
  materials: { name: string; finish: string; kind: string; note: string }[];
  scope: [string, string, string];
  faqs: string[][];
};
export const serviceDesign: Record<string, ServiceDesign> = {
  "home-renovation": {
    searchTitle: "Villa & Apartment Renovation in Dubai",
    heading: ["Villa & apartment", "renovation in Dubai."],
    description:
      "Villa and apartment renovation in Dubai, including kitchen and bathroom renovation. Share your property details to discuss the scope and request a quote.",
    motif: "home",
    drawingTitle: "Room to live differently.",
    drawingNote: "Layout study · Adapted to your property",
    points: [
      "Open up the everyday",
      "Make room for storage",
      "Connect light & living",
    ],
    secondary: "kitchen-natural",
    galleryTitle: "From the first coffee to the last light.",
    galleryCopy:
      "Kitchens, living spaces and the details between them, considered as one home.",
    materials: [
      {
        name: "Natural oak",
        finish: "Warmth",
        kind: "wood",
        note: "A warm starting point for cabinetry and fitted storage. Finish and care requirements are agreed with your samples.",
      },
      {
        name: "Microcement & stone",
        finish: "Texture",
        kind: "stone",
        note: "A seamless or tactile direction for floors, walls and worktops. Microcement, tile and stone are selected around use, maintenance and budget.",
      },
      {
        name: "Slate blue upholstery",
        finish: "Comfort",
        kind: "linen",
        note: "Soft texture balances architectural surfaces. Colours and fabrics are reviewed in the light of your own home.",
      },
    ],
    scope: [
      "Villa & apartment refurbishment",
      "Kitchen & bathroom coordination",
      "Finishes, storage & lighting",
    ],
    faqs: [
      [
        "Do you renovate both villas and apartments in Dubai?",
        "Yes. We coordinate villa and apartment renovations, from selected rooms to a wider refurbishment, around your property and agreed scope.",
      ],
      [
        "Can I live at home during the renovation?",
        "It depends on the scope and site conditions. Access, protection, noisy work and occupied rooms are discussed before the programme is agreed.",
      ],
      [
        "How do I get a villa or apartment renovation quote in Dubai?",
        "Share your Dubai property location, photographs, any drawings, priorities and indicative budget. Existing conditions, materials and specialist requirements are assessed before the renovation scope and quotation are agreed.",
      ],
      [
        "Do you offer kitchen and bathroom renovation in Dubai?",
        "Yes. Kitchen renovation and bathroom renovation can be scoped individually or as part of a wider home refurbishment. Layouts, cabinetry, fittings and finishes are coordinated with the relevant specialist services.",
      ],
      [
        "Who coordinates building or community approvals?",
        "We establish the applicable approval route with the appointed specialists. Required permissions depend on the property and proposed work.",
      ],
    ],
  },
  "bespoke-joinery": {
    searchTitle: "Bespoke Joinery & Custom Wardrobes in Dubai",
    heading: ["Bespoke joinery", "in Dubai."],
    description:
      "Bespoke joinery in Dubai for custom wardrobes, fitted kitchens and cabinetry. Discuss drawings, materials and installation to request a project quote.",
    motif: "joinery",
    drawingTitle: "Precision you can feel.",
    drawingNote: "Joinery elevation · Final dimensions by survey",
    points: [
      "A place for everything",
      "Details that align",
      "Finishes that belong",
    ],
    secondary: "living-natural",
    galleryTitle: "A room, resolved in the details.",
    galleryCopy:
      "The grain, the edge, the meeting of two materials. Small decisions shape the whole interior.",
    materials: [
      {
        name: "Smoked timber",
        finish: "Grain",
        kind: "walnut",
        note: "A deeper timber direction for feature cabinetry. Grain matching and finish samples are reviewed before production.",
      },
      {
        name: "Brushed steel",
        finish: "Touch",
        kind: "steel",
        note: "A restrained accent for handles and metal details. Hardware is selected for its operation as well as its appearance.",
      },
      {
        name: "Honed stone",
        finish: "Surface",
        kind: "stone",
        note: "A calm counterpoint to timber. Edges, joints and interfaces are resolved alongside the shop drawings.",
      },
    ],
    scope: [
      "Kitchens, wardrobes & vanities",
      "Wall panels & fitted storage",
      "Shop drawings to installation",
    ],
    faqs: [
      [
        "What should I compare between joinery companies in Dubai?",
        "Compare the same drawings, dimensions, materials, hardware, finishes and installation scope. Ask who coordinates manufacture, site measurements and snag checks. Halo Works brings these decisions into one agreed joinery package, with samples approved before relevant production.",
      ],
      [
        "Which joinery pieces can you coordinate?",
        "Kitchens, wardrobes, vanities, TV units, doors, wall panelling, reception counters, fitted storage and selected custom furniture, developed around your space.",
      ],
      [
        "Can I review materials before manufacture?",
        "Yes. Relevant drawings, finishes and material samples are agreed before production is released.",
      ],
      [
        "How are joinery lead times established?",
        "The programme depends on design approval, material availability, manufacture and site readiness. These are coordinated before installation is scheduled.",
      ],
    ],
  },
  "office-fit-out": {
    searchTitle: "Office Fit-Out Company in Dubai",
    heading: ["Office fit-out", "in Dubai."],
    description:
      "Office fit-out company in Dubai for new workplaces and office refurbishment. Planning, joinery and specialist services coordinated around your agreed scope.",
    motif: "office",
    drawingTitle: "Every working mode, considered.",
    drawingNote: "Workplace zoning · Developed around your team",
    points: [
      "A considered arrival",
      "Space to concentrate",
      "Room to come together",
    ],
    secondary: "scope-office-natural",
    galleryTitle: "A welcome that feels like you.",
    galleryCopy:
      "Reception, meeting areas and the materials your visitors experience, connected to your identity.",
    materials: [
      {
        name: "Pale timber",
        finish: "Warmth",
        kind: "wood",
        note: "A welcoming direction for reception and storage. Surface specifications reflect everyday workplace use.",
      },
      {
        name: "Slate blue textile",
        finish: "Softness",
        kind: "linen",
        note: "Soft finishes bring comfort to meeting and breakout spaces. Acoustic needs are assessed with the relevant specialists.",
      },
      {
        name: "Mineral finish",
        finish: "Continuity",
        kind: "stone",
        note: "A restrained palette across shared areas. Maintenance and installation requirements are considered with your programme.",
      },
    ],
    scope: [
      "Reception & workstations",
      "Meeting & breakout spaces",
      "Partitions, joinery & services",
    ],
    faqs: [
      [
        "What should I compare between office fit-out companies in Dubai?",
        "Compare a common scope covering layouts, partitions, ceilings, flooring, joinery, electrical, data and HVAC interfaces. Confirm exclusions, approval responsibilities, material lead times and handover requirements. Share your floor plan and brief with Halo Works to discuss the assessment and quotation steps.",
      ],
      [
        "Can you refurbish an occupied office?",
        "Where site conditions allow, work can be phased around continued use. Access, noisy activities and protection are agreed with you and the building team.",
      ],
      [
        "Do you coordinate MEP and data requirements?",
        "Yes, electrical, data and HVAC requirements are coordinated with the appointed specialists as part of the agreed fit-out scope.",
      ],
      [
        "Can you work with our existing designer?",
        "Yes. We bring the design information, specialist appointments and site programme into a coordinated delivery plan.",
      ],
    ],
  },
  "hospitality-interiors": {
    searchTitle: "Restaurant & Café Fit-Out in Dubai",
    heading: ["Restaurant fit-out", "in Dubai."],
    description:
      "Restaurant and café fit-out in Dubai. Customer areas, counters and seating coordinated with kitchen and MEP specialists. Share your brief to request a quote.",
    motif: "hospitality",
    drawingTitle: "Designed around the experience.",
    drawingNote:
      "Guest journey · Subject to operational requirements",
    points: [
      "An inviting entrance",
      "A natural customer flow",
      "Service that works quietly",
    ],
    secondary: "kitchen-natural",
    galleryTitle: "Atmosphere, with purpose.",
    galleryCopy:
      "A memorable first impression. A comfortable place to linger. An interior that works behind the scenes.",
    materials: [
      {
        name: "Walnut",
        finish: "Depth",
        kind: "walnut",
        note: "A rich base for counters, displays and feature joinery. Durability and cleaning requirements help guide the specification.",
      },
      {
        name: "Forest green upholstery",
        finish: "Accent",
        kind: "green",
        note: "A tactile seating finish that brings character to the room. Fabric samples are reviewed for appearance, cleaning and everyday use.",
      },
      {
        name: "Decorative coating",
        finish: "Character",
        kind: "stone",
        note: "Decorative coatings and textured finishes create character. Suitability for food service, traffic and maintenance is reviewed for the intended application.",
      },
    ],
    scope: [
      "Restaurants, cafés & dining",
      "Reception, counters & seating",
      "Kitchen & MEP interfaces",
    ],
    faqs: [
      [
        "How do I request a restaurant fit-out quote in Dubai?",
        "Share your premises location, floor plan, restaurant or café requirements, indicative budget and target opening date. We review the customer areas, joinery, finishes and specialist interfaces before defining the fit-out scope, exclusions and quotation steps.",
      ],
      [
        "Which hospitality and commercial spaces do you work on?",
        "Restaurants, cafés, dining environments and branded customer areas, with each package tailored to the premises and operation. Shops and showrooms are covered by our retail fit-out service.",
      ],
      [
        "Do you account for landlord and approval requirements?",
        "Applicable landlord requirements and approval routes are identified with the appointed specialists and incorporated into the project programme.",
      ],
      [
        "Can you coordinate specialist kitchen interfaces?",
        "Yes. The fit-out scope can coordinate interfaces with appointed kitchen and building-services specialists. Responsibilities are agreed at the outset.",
      ],
    ],
  },
  "retail-fit-out": {
    searchTitle: "Retail & Shop Fit-Out in Dubai",
    heading: ["Retail fit-out", "in Dubai."],
    description:
      "Retail and shop fit-out in Dubai for boutiques and showrooms. Display joinery, finishes and technical work planned around your opening. Request a project quote.",
    motif: "retail",
    drawingTitle: "Designed around the customer journey.",
    drawingNote: "Shop layout · Developed around your product range",
    points: [
      "A shopfront that invites",
      "Display that sells quietly",
      "Back-of-house that works",
    ],
    secondary: "article-materials",
    galleryTitle: "Your brand, in every surface.",
    galleryCopy:
      "Feature walls, display joinery and lighting brought together into one consistent customer-facing environment.",
    materials: [
      {
        name: "Natural oak",
        finish: "Warmth",
        kind: "wood",
        note: "A warm, versatile base for shelving and display joinery. Durability and finish are reviewed against everyday handling and cleaning.",
      },
      {
        name: "Sage ceramic",
        finish: "Character",
        kind: "stone",
        note: "A tactile accent for feature walls and counters. Tile selection reflects the brand palette, traffic and maintenance needs.",
      },
      {
        name: "Brushed steel",
        finish: "Precision",
        kind: "steel",
        note: "A restrained detail for fixtures, rails and display hardware. Fixings and loads are considered with the joinery drawings.",
      },
    ],
    scope: [
      "Shops, boutiques & showrooms",
      "Display, counters & shelving",
      "Landlord & opening coordination",
    ],
    faqs: [
      [
        "What do you need for a retail fit-out quote in Dubai?",
        "Your shop or showroom location, floor plan, product range, brand brief, indicative budget and intended opening date help establish the scope. Landlord requirements, display fixtures, joinery and technical interfaces are reviewed before the quotation is prepared.",
      ],
      [
        "Do you fit out shops in malls and retail centres?",
        "Yes. Landlord requirements and applicable approvals are identified for the specific premises and incorporated into the fit-out programme.",
      ],
      [
        "Can you plan stock rooms and point of sale as well as display?",
        "Yes. Stock rooms, service areas and point-of-sale locations are planned alongside the customer areas, with electrical, data and HVAC interfaces integrated.",
      ],
      [
        "How is the opening date protected?",
        "Fabrication, long-lead materials, site access, installation, testing and snag clearance are sequenced backwards from the agreed opening programme.",
      ],
    ],
  },
  "interior-design": {
    searchTitle: "Interior Design Coordination in Dubai",
    heading: ["Interior design", "coordination in Dubai."],
    description:
      "Interior design coordination in Dubai for villas, apartments and commercial spaces. Briefs, layouts, finishes and shop drawings connected to site delivery.",
    motif: "design",
    drawingTitle: "From first sketch to shop drawing.",
    drawingNote: "Plan & finish study · Developed around your brief",
    points: [
      "The brief, before the layout",
      "Finishes chosen together",
      "Drawings ready for site",
    ],
    secondary: "living-natural",
    galleryTitle: "Ideas that carry through to site.",
    galleryCopy:
      "Layouts, finishes and specialist interfaces resolved early, so the space you agree is the space that is built.",
    materials: [
      {
        name: "Cotton paper",
        finish: "The plan",
        kind: "paper",
        note: "Every direction starts on paper. Your priorities, site information and budget expectations are recorded before layouts are developed.",
      },
      {
        name: "Natural oak",
        finish: "The sample",
        kind: "wood",
        note: "Physical samples make decisions tangible. Finishes are reviewed in context for appearance, use, maintenance, cost and lead time.",
      },
      {
        name: "Slate blue textile",
        finish: "The detail",
        kind: "linen",
        note: "Soft finishes complete the palette. Colours and fabrics are confirmed with the drawings before procurement is released.",
      },
    ],
    scope: [
      "Brief & layout development",
      "Finish & material selection",
      "Shop drawings & interfaces",
    ],
    faqs: [
      [
        "Do you design the space, or coordinate an existing design?",
        "Both are possible. We develop the brief, layouts and finish selections, and appoint specialist designers where the scope requires them. If you already have a designer, we coordinate their information into delivery.",
      ],
      [
        "How do I request a quote for residential interior design coordination in Dubai?",
        "Share your villa or apartment location, photographs, existing drawings, indicative budget and priorities. We confirm the design coordination scope and any specialist appointments before agreeing the quotation steps. A site review establishes existing conditions.",
      ],
      [
        "When are shop drawings prepared?",
        "Once layouts and selections are agreed, shop drawings and specialist interfaces are coordinated before relevant orders or production are released.",
      ],
    ],
  },
  "project-delivery": {
    searchTitle: "Commercial Fit-Out Company in Dubai",
    heading: ["Commercial fit-out", "in Dubai."],
    description:
      "Commercial fit-out company in Dubai, connecting design coordination, procurement, specialist works and site delivery. Discuss your scope and request a quote.",
    motif: "delivery",
    drawingTitle: "The whole picture. Held together.",
    drawingNote: "A coordinated delivery model · Scope agreed for each project",
    points: [
      "Decisions made clearly",
      "Specialists working together",
      "A documented handover",
    ],
    secondary: "workplace-natural",
    galleryTitle: "Good ideas deserve careful delivery.",
    galleryCopy:
      "Drawings, samples and site decisions connected by one agreed scope and a clear communication routine.",
    materials: [
      {
        name: "The brief",
        finish: "Intent",
        kind: "paper",
        note: "Your priorities, property and budget establish the direction. Responsibilities and exclusions are recorded early.",
      },
      {
        name: "The sample",
        finish: "Decision",
        kind: "wood",
        note: "Drawings and samples make decisions tangible. Relevant approvals are confirmed before procurement and production.",
      },
      {
        name: "The finish",
        finish: "Delivery",
        kind: "stone",
        note: "Inspections, snag records and care information connect the delivered work to what was agreed.",
      },
    ],
    scope: [
      "Design & specialist coordination",
      "Procurement & site sequencing",
      "Quality checks & handover",
    ],
    faqs: [
      [
        "What should I compare when choosing a commercial fit-out company in Dubai?",
        "Confirm the agreed scope, specialist appointments, technical responsibilities, procurement, approvals and handover records. Compare quotations using the same specifications and exclusions. Halo Works coordinates these work packages around one delivery plan.",
      ],
      [
        "What does full project delivery include?",
        "The agreed package can connect design development, technical information, specialist appointments, procurement and site execution. Responsibilities and exclusions are confirmed at the outset.",
      ],
      [
        "How are changes handled?",
        "The proposed scope, cost and programme implications are documented and agreed in writing before varied work proceeds.",
      ],
      [
        "What will I receive at handover?",
        "Relevant care guidance, warranty information and handover records are compiled, with snag closure and aftercare responsibilities following your agreed terms.",
      ],
    ],
  },
};

export const scopePhotography: Record<
  string,
  { image: string; alt: string }[]
> = {
  "home-renovation": [
    {
      image: "living-natural",
      alt: "Sunlit living room with tactile stone and natural oak finishes",
    },
    {
      image: "scope-bathroom-natural",
      alt: "Terrazzo bathroom vanity with oak drawers and sage tile",
    },
    {
      image: "scope-protection-natural",
      alt: "Careful protection of existing oak floors before renovation",
    },
  ],
  "bespoke-joinery": [
    {
      image: "kitchen-natural",
      alt: "Bespoke kitchen cabinetry and honed stone worktop",
    },
    {
      image: "scope-planning-natural",
      alt: "Timber, stone and metal samples reviewed alongside interior drawings",
    },
    {
      image: "scope-joinery-natural",
      alt: "Craftsperson checking the alignment of an ash drawer",
    },
  ],
  "office-fit-out": [
    {
      image: "scope-office-natural",
      alt: "Quiet meeting room with an oak table and textile finishes",
    },
    {
      image: "workplace-natural",
      alt: "Coordinated workplace reception with timber joinery and integrated lighting",
    },
    {
      image: "scope-planning-natural",
      alt: "Workplace planning drawings and material samples",
    },
  ],
  "hospitality-interiors": [
    {
      image: "hospitality-natural",
      alt: "Considered restaurant seating, counters and circulation",
    },
    {
      image: "kitchen-natural",
      alt: "Counter and kitchen interfaces resolved with stone and timber",
    },
    {
      image: "contact-studio",
      alt: "Lounge seating with green upholstery and a stone table",
    },
  ],
  "retail-fit-out": [
    {
      image: "scope-retail-natural",
      alt: "Boutique display shelving with warm lighting and a green counter",
    },
    {
      image: "article-materials",
      alt: "Timber, tile, stone and fabric samples for a brand palette",
    },
    {
      image: "process-hero",
      alt: "An interior fit-out in progress with drawings on a site table",
    },
  ],
  "interior-design": [
    {
      image: "scope-planning-natural",
      alt: "Interior layout drawings reviewed alongside material samples",
    },
    {
      image: "article-materials",
      alt: "Oak, walnut, marble, tile and fabric samples arranged together",
    },
    {
      image: "scope-joinery-natural",
      alt: "A fitted drawer checked against its shop drawing",
    },
  ],
  "project-delivery": [
    {
      image: "scope-planning-natural",
      alt: "Reviewing architectural drawings and interior materials",
    },
    {
      image: "scope-joinery-natural",
      alt: "Specialist joinery coordination and quality checks",
    },
    {
      image: "scope-bathroom-natural",
      alt: "Carefully resolved fittings and finishes at completion",
    },
  ],
};
export function textureForMaterial(name: string) {
  if (/ceramic|tile/i.test(name)) return "texture-sage-natural";
  if (/steel|stainless/i.test(name)) return "texture-steel-natural";
  if (/blue|slate|navy/i.test(name)) return "texture-blue-natural";
  if (/green/i.test(name)) return "texture-green-natural";
  if (/bronze/i.test(name)) return "texture-bronze";
  if (/smoked|dark|walnut/i.test(name)) return "texture-walnut";
  if (/oak|timber|sample/i.test(name)) return "texture-oak";
  if (/linen|textile|upholstery/i.test(name)) return "texture-linen";
  if (/brief|paper/i.test(name)) return "texture-paper";
  return "texture-stone";
}
