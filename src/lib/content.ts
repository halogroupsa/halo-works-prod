import { serviceArticles, type Article } from "./service-articles";

export const company = {
  name: "Halo Works",
  email: "info@haloworks.ae",
  phone: "+971 56 644 2008",
  whatsapp: "971566442008",
};
export const services = [
  {
    slug: "home-renovation",
    title: "Homes, thoughtfully renewed.",
    short: "Villa & apartment renovation",
    category: "Residential",
    image: "living-natural",
    intro:
      "Villa and apartment renovation in Dubai, from a kitchen or bathroom upgrade to a coordinated home refurbishment. We define the work around your property, priorities and budget.",
    text: "Our home renovation services in Dubai cover selected rooms and wider villa or apartment refurbishment. Kitchen renovation, bathroom renovation, finishes and fitted storage are shaped around one agreed scope. Existing conditions, access and occupied rooms are considered before the quotation and programme are confirmed.",
    features: [
      [
        "Living, with intention",
        "Living and dining areas, bedrooms, family lounges, home offices, storage and dressing rooms, with finishes and lighting considered as one interior.",
      ],
      [
        "Kitchen & bathroom renovation",
        "Layout improvements, cabinetry, worktops, fittings and surfaces, coordinated with the specialist services behind them.",
      ],
      [
        "Planning around your home",
        "Access, protection of retained finishes, material deliveries and any occupied areas are considered when the work sequence is agreed.",
      ],
    ],
    note: "Your choices, made clear. Scope, materials, exclusions and programme assumptions are explained before commitment, so you can make informed decisions.",
    related: "the-courtyard-home",
  },
  {
    slug: "bespoke-joinery",
    title: "Made for the way you live.",
    short: "Bespoke joinery & kitchens",
    category: "Craft & detail",
    image: "kitchen-natural",
    intro:
      "Bespoke joinery in Dubai for custom wardrobes, fitted kitchens and cabinetry. We connect material selection, shop drawings, manufacture and installation in one coordinated package.",
    text: "Custom wardrobes, kitchens, vanities and fitted storage are developed around your Dubai property and the way it will be used. Dimensions, materials, hardware and installation requirements are agreed before the relevant manufacture. Share your drawings or photographs to discuss a bespoke joinery quotation.",
    features: [
      [
        "Custom wardrobes & fitted kitchens",
        "Kitchens, wardrobes, vanities, TV units, doors, wall panels, reception counters and selected custom furniture, developed around the actual space.",
      ],
      [
        "Materials that suit the purpose",
        "Appearance, intended use, maintenance, hardware, cost and lead time are reviewed together. Samples and drawings are agreed before relevant production.",
      ],
      [
        "Fit and finish",
        "Dimensions, service routes and installation interfaces are checked early. Completion checks cover alignment, operation, finish quality and agreed snag closure.",
      ],
    ],
    note: "Drawings and material samples are agreed before relevant production. The finished work is checked against these decisions.",
    related: "the-crafted-kitchen",
  },
  {
    slug: "office-fit-out",
    title: "Space to do your best work.",
    short: "Office fit-out & refurbishment",
    category: "Workplaces",
    image: "workplace-natural",
    intro:
      "Office fit-out and office refurbishment in Dubai, planned around your team, brand and operations. Layouts, specialist works and handover are brought into one coordinated scope.",
    text: "Halo Works is an office fit-out company in Dubai for new workplaces and the refurbishment of existing offices. Planning starts with your team, floor area and move-in priorities, then connects partitions, ceilings, joinery, data and HVAC. Scope, exclusions and programme assumptions are set out for your quotation.",
    features: [
      [
        "Workplace planning",
        "Reception, workstations, meeting rooms, private offices, breakout areas, pantries and storage, considered against the brief and available floor area.",
      ],
      [
        "Construction & services",
        "Partitions, ceilings, flooring, joinery and lighting, coordinated with electrical, data, HVAC and other specialist requirements.",
      ],
      [
        "Business continuity",
        "Where premises remain in use, access, noisy work, protection and phased installation are agreed with you and the building team.",
      ],
    ],
    note: "Move-in readiness. The programme brings material delivery, specialist works, inspections and snag clearance together around the agreed handover milestones.",
    related: "a-quieter-workplace",
  },
  {
    slug: "hospitality-interiors",
    title: "Places people return to.",
    short: "Hospitality & commercial interiors",
    category: "Hospitality",
    image: "hospitality-natural",
    intro:
      "Restaurant and café fit-out in Dubai, where customer experience, operational flow and brand identity work together. Guest areas and specialist interfaces are coordinated around your opening plans.",
    text: "Restaurants, cafés and dining environments each have their own rhythm. We connect design coordination with fit-out execution, joinery, finishes and the relevant technical services, around the way your guests move and your team works.",
    features: [
      [
        "Hospitality, food & beverage",
        "Restaurants, cafés and dining environments, including customer areas, reception, counters, seating and decorative finishes.",
      ],
      [
        "Kitchen & MEP interfaces",
        "Customer-facing interiors coordinated with the relevant kitchen and MEP specialists, with responsibilities agreed at the outset.",
      ],
      [
        "Brand & operational needs",
        "Material choices, lighting, circulation, maintenance and specialist service interfaces considered alongside the visual direction.",
      ],
    ],
    note: "A coordinated opening programme. Technical information, approvals, long-lead materials, specialist installation, testing and snag clearance are planned around the agreed opening.",
    related: "the-gathering-place",
  },
  {
    slug: "retail-fit-out",
    title: "Spaces that sell, quietly.",
    short: "Retail fit-out & showrooms",
    category: "Retail",
    image: "scope-retail-natural",
    intro:
      "Retail fit-out in Dubai for shops, boutiques and showrooms. We coordinate layouts, display joinery, finishes and technical works from design development to handover.",
    text: "Layouts, display fixtures, shelving, counters and lighting are developed around your product range, the way customers move and the way your retail team operates. Technical planning, procurement and installation follow one agreed scope.",
    features: [
      [
        "Customer journey & display",
        "Layouts, display fixtures, shelving, counters and lighting developed around the product range, customer circulation and your retail team.",
      ],
      [
        "Brand identity & finishes",
        "Shopfront interfaces, feature walls, branded elements, joinery and material selections coordinated into one consistent customer-facing environment.",
      ],
      [
        "Technical & operational",
        "Electrical, data and HVAC interfaces integrated with the fit-out, while stock rooms, service areas and point-of-sale locations support daily use.",
      ],
    ],
    note: "Ready for opening. Landlord requirements, applicable approvals, fabrication, site access, installation, testing and snag clearance are coordinated around the agreed opening programme.",
    related: "the-considered-boutique",
  },
  {
    slug: "interior-design",
    title: "Ideas, resolved.",
    short: "Interior design coordination",
    category: "Design",
    image: "journal-studio",
    intro:
      "Interior design coordination in Dubai for villas, apartments and commercial spaces. Your brief, layouts, finish selections and shop drawings are connected to practical site delivery.",
    text: "A good design needs to survive the journey to site. We develop the brief, coordinate layouts and finish selections, and bring specialist designers and engineers in where the scope requires them, with clear responsibilities from the start.",
    features: [
      [
        "Brief development",
        "Your priorities, site information and budget expectations recorded first, so every layout decision has a clear reason.",
      ],
      [
        "Layouts & finish selection",
        "Layout coordination, material and finish selections reviewed against appearance, use, maintenance, cost and lead time.",
      ],
      [
        "Shop drawings & interfaces",
        "Shop drawings and specialist design interfaces coordinated before procurement, so the design carries through into the work on site.",
      ],
    ],
    note: "Already working with a designer? We bring the design information, specialist appointments and site programme into one coordinated delivery plan.",
    related: "the-quiet-bathroom",
  },
  {
    slug: "project-delivery",
    title: "Every detail. One direction.",
    short: "Full project delivery",
    category: "Coordination",
    image: "process-hero",
    intro:
      "Commercial fit-out in Dubai with design coordination, technical information, procurement and site delivery in one agreed scope. Specialist responsibilities are clear from the start.",
    text: "As a commercial fit-out company in Dubai, Halo Works connects specialist designers, engineers, manufacturers and contractors around your premises and brief. Quotations identify the work packages, responsibilities and exclusions, with practical oversight through procurement, site execution and handover.",
    features: [
      [
        "Design & technical coordination",
        "Brief development, layout coordination, shop drawings, specifications and the relevant specialist design interfaces.",
      ],
      [
        "Materials & procurement",
        "Comparable supplier quotations, approved samples and orders aligned with manufacturing, delivery and site readiness.",
      ],
      [
        "Approvals & completion",
        "Coordination with appointed submitting specialists, followed by relevant inspections, testing, snag closure and handover records.",
      ],
    ],
    note: "Approval routes and submitting parties are confirmed for each property. Permissions remain subject to authority or developer review.",
    related: "a-quieter-workplace",
  },
];
export const spaces = [
  {
    slug: "the-courtyard-home",
    title: "The courtyard home",
    category: "Homes",
    image: "living-natural",
    secondary: "article-renovation",
    subtitle: "Warmth. Light. A little room to breathe.",
    description:
      "A residential interior connecting quiet living spaces with open air. Natural stone, soft linen and warm oak create a space that feels grounded from morning to evening.",
    brief:
      "Create a calm family living environment with intuitive circulation, generous daylight and a timeless material palette.",
    approach:
      "A restrained arrangement of furniture keeps the room open. Timber storage brings order to everyday life, while tactile surfaces soften the architectural lines.",
    materials: ["Honed limestone", "Slate blue fabric", "Natural oak"],
    service: "home-renovation",
  },
  {
    slug: "the-crafted-kitchen",
    title: "The crafted kitchen",
    category: "Joinery",
    image: "kitchen-natural",
    secondary: "scope-joinery-natural",
    subtitle: "A place for everything. Character in every detail.",
    description:
      "A bespoke kitchen built around the contrast between veined stone, sage tile and precise walnut cabinetry. Quiet detailing lets the materials speak.",
    brief:
      "Balance generous preparation space, concealed storage and an inviting place to gather within a coherent kitchen.",
    approach:
      "Walnut cabinetry and sage tile form a calm backdrop to the stone island. Hardware, service routes and worktop junctions are considered as part of the whole.",
    materials: ["Walnut", "Sage ceramic", "Brushed steel"],
    service: "bespoke-joinery",
  },
  {
    slug: "a-quieter-workplace",
    title: "A quieter workplace",
    category: "Workplaces",
    image: "workplace-natural",
    secondary: "article-workplace",
    subtitle: "Designed around people. Ready for possibility.",
    description:
      "A workplace with a clear, welcoming arrival. Pale ash joinery, comfortable blue seating and carefully considered materials set the tone.",
    brief:
      "Create a welcoming first impression while supporting clear circulation, focused work and everyday operational needs.",
    approach:
      "Glazed partitions share daylight, while pale joinery integrates storage. Blue upholstery and natural greenery bring character to the reception space.",
    materials: ["Natural ash timber", "Slate blue upholstery", "Brushed steel"],
    service: "office-fit-out",
  },
  {
    slug: "the-gathering-place",
    title: "The gathering place",
    category: "Hospitality",
    image: "hospitality-natural",
    secondary: "contact-studio",
    subtitle: "Stay a little longer.",
    description:
      "An intimate dining space where walnut, green upholstery and natural light encourage conversation. Built-in seating and considered circulation bring atmosphere and function together.",
    brief:
      "Develop a welcoming dining setting with a distinct character, comfortable seating and practical service circulation.",
    approach:
      "Upholstered banquettes create intimate settings without dividing the room. A consistent palette connects the joinery, lighting and tables into a cohesive interior.",
    materials: ["Walnut", "Forest green upholstery", "Brushed steel"],
    service: "hospitality-interiors",
  },
  {
    slug: "the-considered-boutique",
    title: "The considered boutique",
    category: "Retail",
    image: "scope-retail-natural",
    secondary: "article-materials",
    subtitle: "Room for the product. Space for the story.",
    description:
      "A boutique interior where open shelving, warm timber and a calm palette let the products lead. Display joinery and lighting guide customers gently through the space.",
    brief:
      "Create a welcoming retail interior with flexible display, a clear customer route and a counter that supports everyday service.",
    approach:
      "Floating shelves and low plinths keep sightlines open. A deep green counter anchors the room, while pale floors and white walls let the merchandise carry the colour.",
    materials: ["Natural oak", "Forest green lacquer", "Polished concrete"],
    service: "retail-fit-out",
  },
  {
    slug: "the-quiet-bathroom",
    title: "The quiet bathroom",
    category: "Homes",
    image: "scope-bathroom-natural",
    secondary: "detail-natural",
    subtitle: "A calm start. A gentle end to the day.",
    description:
      "A bathroom with terrazzo, sage tile and pale oak. Simple lines and concealed storage keep the room serene.",
    brief:
      "Upgrade a family bathroom with generous storage, durable surfaces and a softer, more natural atmosphere.",
    approach:
      "An oak vanity with integrated drawers sits beneath a terrazzo counter. Sage tile and brushed fittings add colour and texture without visual noise.",
    materials: ["Terrazzo", "Sage ceramic", "Natural oak"],
    service: "home-renovation",
  },
];
export const steps = [
  [
    "Discover",
    "We listen to your priorities, location, budget expectations and target date.",
    "Your photographs, drawings and aspirations give us a shared starting point. We discuss what matters most and where the project needs further investigation.",
  ],
  [
    "Define",
    "We review the site and establish the scope and specialist requirements.",
    "Existing conditions, material choices, building constraints and applicable approval routes inform a practical scope of work.",
  ],
  [
    "Agree",
    "A clear proposal brings scope, cost and programme together.",
    "Your quotation sets out inclusions, exclusions, payment milestones and programme assumptions. Decisions are recorded before commitments are made.",
  ],
  [
    "Deliver",
    "Drawings and selections become coordinated work on site.",
    "We connect sourcing, specialist appointments and installation sequencing. Progress updates keep you informed; changes are agreed in writing before varied work proceeds.",
  ],
  [
    "Refine",
    "We inspect, test and work through the finishing details.",
    "The agreed work is reviewed, outstanding items are recorded, and relevant testing and snag closure are coordinated.",
  ],
  [
    "Handover",
    "A considered finish, with the information you need next.",
    "Care guidance, relevant warranty details and handover records are compiled. Aftercare responsibilities follow your agreed project terms.",
  ],
];
/** The problems a client faces, and how one coordinated scope answers each. */
export const challenges = [
  [
    "Separate work packages",
    "One coordinated scope.",
    "Design, technical information, specialist appointments, procurement and site delivery are connected, with responsibilities and exclusions agreed from the outset.",
  ],
  [
    "Quotations you can’t compare",
    "A common scope, priced fairly.",
    "Suppliers and specialists price the same scope, so materials, inclusions, exclusions and lead times can be assessed on a consistent basis.",
  ],
  [
    "Approvals, NOCs and comments",
    "A coordinated technical response.",
    "We confirm the route that applies to your property and coordinate drawings, submissions and review comments with the appointed specialists.",
  ],
  [
    "Decisions lost on the way to site",
    "Choices carried through.",
    "Samples, drawings and changes are agreed in writing, then checked at the installation stages that matter, including before work is concealed.",
  ],
];
/** Every package that can sit within one Halo Works scope. */
export const capabilities = [
  {
    title: "Interior planning & design coordination",
    href: "/services/interior-design/",
    items: [
      "Brief development",
      "Site information",
      "Layout coordination",
      "Finish selection",
      "Shop drawings",
      "Specialist design interfaces",
    ],
  },
  {
    title: "Refurbishment & fit-out",
    items: [
      "Strip-out",
      "Reconfiguration",
      "Partitions",
      "Ceilings",
      "Flooring",
      "Painting",
      "Related building works",
    ],
  },
  {
    title: "Joinery & custom furniture",
    href: "/services/bespoke-joinery/",
    items: [
      "Kitchens",
      "Wardrobes",
      "Doors",
      "Cabinetry",
      "Panelling",
      "Counters",
      "Fitted storage",
      "Bespoke furniture",
    ],
  },
  {
    title: "Finishes & surface treatments",
    items: [
      "Decorative coatings",
      "Microcement",
      "Tile & stone installation",
      "Feature walls",
      "Specialist finish systems",
    ],
  },
  {
    title: "MEP & specialist interfaces",
    items: [
      "Electrical",
      "Plumbing",
      "HVAC",
      "Waterproofing",
      "Glazing",
      "Specialist packages",
    ],
  },
  {
    title: "Sourcing & project delivery",
    href: "/services/project-delivery/",
    items: [
      "Supplier comparisons",
      "Procurement",
      "Installation sequencing",
      "Progress reporting",
      "Inspections",
      "Snagging & handover",
    ],
  },
];
/** Value and materials: how a clear specification protects the budget. */
export const valuePoints = [
  [
    "Budget priorities",
    "We identify the areas that matter most to you, then review practical scope and specification options against the available budget.",
  ],
  [
    "Comparable quotations",
    "Suppliers and specialists price a common scope, so materials, inclusions, exclusions and lead times can be assessed on a consistent basis.",
  ],
  [
    "Selections before commitment",
    "Samples, dimensions, drawings and key interfaces are reviewed before relevant orders or production are released.",
  ],
  [
    "A programme-aware supply chain",
    "Manufacture, delivery, site readiness and installation are coordinated so that each package reaches the project in the right sequence.",
  ],
];
/** Client care during delivery. */
export const clientCare = [
  [
    "scope-planning-natural",
    "Progress you can follow",
    "An agreed update routine records completed work, upcoming activities, photographs and the decisions needed from you.",
  ],
  [
    "journal-studio",
    "Changes agreed in writing",
    "Scope, cost and programme implications are documented before varied work proceeds.",
  ],
  [
    "process-inspection",
    "Checks at the right stage",
    "Quality reviews cover drawings, approved samples and key installation stages, including checks before work is concealed.",
  ],
  [
    "scope-bathroom-natural",
    "A documented finish",
    "Snags, acceptance, care guidance and applicable warranty or specialist documents form part of the agreed closeout.",
  ],
];
/** Approval routes named in the company profile. Names identify routes, not partnerships. */
export const authorities = [
  ["Dubai Municipality", "Authority"],
  ["Dubai Development Authority", "Authority"],
  ["Trakhees / PCFC", "Authority"],
  ["DMCC", "Free zone"],
  ["Nakheel", "Master developer"],
  ["Emaar", "Master developer"],
  ["DAMAC", "Master developer"],
  ["Meraas", "Master developer"],
  ["Sobha Realty", "Master developer"],
  ["Azizi", "Master developer"],
];
export const approvalSteps = [
  [
    "Review the route",
    "Confirm jurisdiction, landlord NOCs and the required design disciplines.",
  ],
  [
    "Prepare and coordinate",
    "Coordinate architectural and MEP drawings and supporting documents with appointed specialists.",
  ],
  [
    "Resolve and close",
    "Follow technical comments, revisions and inspections through to relevant completion documents.",
  ],
];
/** Disciplines behind the 20+ years of collective industry experience. */
export const disciplines = [
  "Interior design & fit-out",
  "Bespoke joinery",
  "Villa & apartment renovation",
  "Office fit-out",
  "Hospitality interiors",
  "Retail fit-out",
];
export const articles: Article[] = [
  ...serviceArticles,
  {
    slug: "before-you-renovate",
    title: "A better renovation starts before the first drawing.",
    category: "Planning",
    serviceSlugs: ["home-renovation", "villa-renovation", "apartment-renovation"],
    image: "article-renovation",
    excerpt:
      "Five conversations worth having before your villa or apartment renovation begins.",
    sections: [
      [
        "Start with how you live",
        "A useful brief describes everyday life. Where does the family gather? What feels cramped? Which rooms need more storage? These answers provide a better foundation than a collection of beautiful images alone.",
      ],
      [
        "Separate priorities from possibilities",
        "Identify the changes that matter most, then the improvements you would like to explore. This gives your team a clear basis for balancing scope and budget.",
      ],
      [
        "Understand the existing space",
        "Site conditions, access and building requirements can influence the plan. Early assessment helps establish the specialist advice and approvals your property may require.",
      ],
      [
        "Make the quotation comparable",
        "Ask for clear inclusions, exclusions and material specifications. Comparing a common scope makes it easier to understand what different quotations actually provide.",
      ],
      [
        "Plan for life during the work",
        "Discuss retained finishes, occupied rooms, deliveries and noisy work. A practical sequence should reflect how you will use the property throughout the project.",
      ],
    ],
  },
  {
    slug: "understanding-your-approval-route",
    title: "Before the fit-out: understanding your approval route.",
    category: "Approvals",
    serviceSlugs: ["interior-fit-out", "office-fit-out", "retail-fit-out", "villa-renovation", "apartment-renovation", "villa-extensions-doors", "landscaping", "swimming-pools"],
    image: "scope-planning-natural",
    excerpt:
      "Four questions to settle early, so drawings, NOCs and inspections move with your programme rather than against it.",
    sections: [
      [
        "Confirm who reviews the work",
        "Depending on the property, the route may sit with an authority, a free zone or a master developer’s community team. Confirming the jurisdiction first shapes the drawings, documents and timing that follow.",
      ],
      [
        "Ask what the building requires",
        "Many properties need landlord or developer approval before work begins. Ask early which no-objection certificates apply and what information the building or community team expects to see.",
      ],
      [
        "Know which drawings are needed",
        "Submissions can call for architectural and MEP drawings with supporting documents. Establishing the required design disciplines early lets the right specialists be appointed in time.",
      ],
      [
        "Allow for comments and inspections",
        "Review comments, revisions and inspections are a normal part of the route. Building them into the programme keeps approvals and site work moving together through to completion documents.",
      ],
    ],
  },
  {
    slug: "materials-that-work",
    title: "Beautiful materials. Considered choices.",
    category: "Materials",
    serviceSlugs: ["flooring-finishes", "painting", "kitchen-renovation", "bathroom-renovation", "bespoke-joinery", "wardrobes-cabinets", "interior-design"],
    image: "article-materials",
    excerpt:
      "Looking beyond the sample to appearance, maintenance and the way a material will live.",
    sections: [
      [
        "See it in your light",
        "A sample changes under daylight and artificial lighting. Review the material in the setting where it will be used, alongside the other finishes in your palette.",
      ],
      [
        "Think about daily use",
        "A kitchen worktop, a wardrobe door and a reception counter face very different demands. Talk through maintenance, intended use and the finish you expect over time.",
      ],
      [
        "Details make the difference",
        "Hardware, edges, joints and installation interfaces shape the final result. Review these decisions alongside drawings, rather than leaving them until installation.",
      ],
      [
        "Connect selection to the programme",
        "Manufacture, delivery and site readiness need to work together. Confirm key selections before relevant orders are released and allow for the stated lead times.",
      ],
    ],
  },
  {
    slug: "a-workplace-with-purpose",
    title: "What makes a workplace work?",
    category: "Workplaces",
    serviceSlugs: ["office-fit-out", "interior-fit-out", "project-delivery"],
    image: "article-workplace",
    excerpt:
      "A practical approach to planning for people, focus and connection.",
    sections: [
      [
        "Map the working day",
        "Understand the balance between concentration, meetings, collaboration and informal conversations. A thoughtful plan gives each of these activities an appropriate place.",
      ],
      [
        "Design the arrival",
        "Reception sets expectations for visitors and staff. Clear wayfinding, comfortable waiting and useful storage support both the experience and the operation.",
      ],
      [
        "Coordinate the invisible",
        "Electrical, data, HVAC and lighting influence the way a workplace feels. Their requirements belong in the planning conversation from the beginning.",
      ],
      [
        "Prepare for the move",
        "Delivery schedules, inspections, testing and snag clearance all affect readiness. Agree handover milestones and discuss phased works if the office will remain in use.",
      ],
    ],
  },
  {
    slug: "planning-a-retail-fit-out",
    title: "Planning a retail fit-out around opening day.",
    category: "Retail",
    serviceSlugs: ["retail-fit-out", "interior-fit-out", "hospitality-interiors"],
    image: "scope-retail-natural",
    excerpt:
      "From product display to landlord requirements: what to settle before a shop, boutique or showroom opens its doors.",
    sections: [
      [
        "Start with the product",
        "The range, its sizes and how it is replenished should shape the layout. Display fixtures, shelving and counters work best when they are planned around what you sell and how customers browse.",
      ],
      [
        "Make the brand tangible",
        "Shopfront interfaces, feature walls, lighting and joinery are where a brand is felt. Agree the material direction early, so samples and lead times can be reviewed before production.",
      ],
      [
        "Plan the back-of-house",
        "Stock rooms, service areas and point-of-sale locations support every trading day. Electrical, data and HVAC requirements belong in the same conversation as the customer areas.",
      ],
      [
        "Work back from the opening date",
        "Landlord requirements, approvals, fabrication, site access, installation, testing and snag clearance all affect readiness. A programme built backwards from opening keeps them in sequence.",
      ],
    ],
  },
];
export const faqs = [
  [
    "What types of projects do you handle?",
    "Villa and apartment renovations, bespoke joinery and kitchens, office fit-outs, hospitality and commercial interiors, and retail and showroom fit-outs. Each package is defined around your property and requirements.",
  ],
  [
    "Can you work with my designer?",
    "Yes. Our delivery approach brings designers, engineers, manufacturers and contractors together around an agreed brief, with clear responsibilities.",
  ],
  [
    "Do you coordinate approvals?",
    "Yes. We help establish the applicable authority or community route, such as Dubai Municipality, Dubai Development Authority, Trakhees or the relevant master developer, and coordinate with appointed design and submitting specialists. Required permissions are confirmed for each property and remain subject to the relevant review.",
  ],
  [
    "How do I request a fit-out or renovation quote in Dubai?",
    "Share your Dubai property location, project type, photographs or drawings, priorities and indicative budget. The scope, existing conditions, materials and specialist requirements determine the cost. We confirm the assessment and quotation steps before you commit.",
  ],
  [
    "Can I remain in the property during the work?",
    "This depends on the scope and site conditions. Where spaces remain occupied, we agree access, protection and installation sequencing with you and the building team.",
  ],
  [
    "What happens after handover?",
    "Relevant care information, warranty details and handover records are compiled. Aftercare issues are handled under the agreed project terms.",
  ],
  [
    "Do you handle finishes such as microcement and decorative coatings?",
    "Yes. Decorative coatings, microcement, tile and stone installation, feature walls and selected specialist finish systems can form part of the agreed scope.",
  ],
  [
    "What should I compare between interior fit-out companies in Dubai?",
    "Compare quotations against the same scope, materials, inclusions, exclusions and lead times. Confirm who coordinates the designers, specialist contractors, approvals and handover. Halo Works brings these responsibilities into one agreed project scope before you commit.",
  ],
  [
    "Who coordinates all the different specialists?",
    "We do. Designers, engineers, manufacturers and contractors are appointed around one agreed scope, with clear responsibilities, an agreed update routine and practical oversight through to handover.",
  ],
];
