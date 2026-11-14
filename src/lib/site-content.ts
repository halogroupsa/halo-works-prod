import {
  services as profileServices,
  steps,
  faqs,
  articles,
  spaces,
} from "./content";
import { specialistScopes } from "./specialist-scopes";

export { steps, faqs, articles, spaces };
export type Service = {
  slug: string;
  name: string;
  category: string;
  intro: string;
  description: string;
  scope: string[][];
  note: string;
  source: string;
  review?: { brief: string; faqs: string[][] };
};
const names: Record<string, string> = {
  "home-renovation": "Home renovation",
  "bespoke-joinery": "Bespoke joinery",
  "office-fit-out": "Office fit-out",
  "hospitality-interiors": "Hospitality interiors",
  "retail-fit-out": "Retail fit-out",
  "interior-design": "Interior design & planning",
  "project-delivery": "Project management & delivery",
};
export const services: Service[] = profileServices.map((s) => ({
  slug: s.slug,
  name: names[s.slug],
  category: s.slug === "project-delivery" ? "Project management" : s.category,
  intro: s.intro,
  description: s.text,
  scope: s.features,
  note: s.note,
  source: "Company profile, pp. 4–10",
}));
services.push(
  {
    slug: "interior-fit-out",
    name: "Interior fit-out",
    category: "Fit-out",
    intro:
      "Prepare an empty or existing space for the way you need it to work. We manage the fit-out scope, specialist appointments, procurement and site delivery.",
    description:
      "We establish what can be retained, what needs to change and which work packages must fit together. Approved drawings, finishes and technical requirements guide the sequence through installation and handover.",
    scope: [
      [
        "Layout & building works",
        "Review strip-out, reconfiguration, partitions, ceilings and interfaces with the existing property.",
      ],
      [
        "Joinery & finishes",
        "Agree shop drawings, samples and specifications for cabinetry, flooring, wall finishes and other interior elements.",
      ],
      [
        "Specialist packages",
        "Bring in the required electrical, plumbing, HVAC, glazing and other specialists. Agree their responsibilities and checks before work begins.",
      ],
    ],
    note: "Access, the required approvals and the appointed submitting party are confirmed for each property.",
    source: "Company profile, pp. 9–12",
  },
  {
    slug: "villa-renovation",
    name: "Villa renovation",
    category: "Residential",
    intro:
      "Bring the rooms, finishes and everyday details of your villa into one practical renovation plan.",
    description:
      "We organise interior improvements around your household and the existing property. From living areas and bedrooms to kitchens, bathrooms and storage, specialist packages follow an agreed scope, budget and work sequence.",
    scope: [
      [
        "Living spaces",
        "Living rooms, dining areas, bedrooms and family lounges, with finishes and lighting considered together.",
      ],
      [
        "Kitchens, bathrooms & storage",
        "Cabinetry, worktops, fittings and surfaces planned with the relevant plumbing, electrical and other specialists.",
      ],
      [
        "An occupied home",
        "Access, protection of retained finishes, material deliveries and occupied areas considered before site work is sequenced.",
      ],
    ],
    note: "Structural changes or exterior works require a separate assessment of feasibility, specialist appointments and permissions; they are not assumed in an interior renovation quotation.",
    source: "Company profile, pp. 4, 9, 12",
  },
  {
    slug: "apartment-renovation",
    name: "Apartment renovation",
    category: "Residential",
    intro:
      "Make better use of your apartment, with improvements planned around the way you live and the building you share.",
    description:
      "We bring layout decisions, finishes, fitted storage and specialist works together. Building access, deliveries, retained finishes and the relevant management requirements shape the programme before work begins.",
    scope: [
      [
        "Room improvements",
        "Living and dining areas, bedrooms, home offices and storage developed around your priorities.",
      ],
      [
        "Kitchens & bathrooms",
        "Layout improvements, cabinetry, worktops and fittings connected to the required specialist service interfaces.",
      ],
      [
        "Building requirements",
        "Access, occupied areas, protection and the applicable NOC or approval route reviewed with the building team.",
      ],
    ],
    note: "The permitted scope and work sequence are established for your apartment; completion dates follow site assessment and the agreed selections.",
    source: "Company profile, pp. 4, 11–12",
  },
  {
    slug: "kitchen-renovation",
    name: "Kitchen renovation",
    category: "Residential",
    intro:
      "A kitchen planned around preparation, storage and daily use, with every specialist working from the same brief.",
    description:
      "Halo Works connects kitchen layouts, cabinetry, worktops, hardware and fittings with shop drawings, manufacture and installation. Dimensions and service routes are checked before the relevant orders are released.",
    scope: [
      [
        "Layout & cabinetry",
        "Base and wall cabinetry, fitted storage and worktop arrangements developed around the actual space.",
      ],
      [
        "Samples & shop drawings",
        "Materials and hardware reviewed for use, maintenance, appearance, cost and lead time before production.",
      ],
      [
        "Installation & checks",
        "Plumbing and electrical interfaces brought together with checks for alignment, operation, finish quality and agreed snag closure.",
      ],
    ],
    note: "Appliances, specialist services and any retained items are identified in the quotation so responsibilities are clear.",
    source: "Company profile, pp. 4–5, 9–10",
  },
  {
    slug: "bathroom-renovation",
    name: "Bathroom renovation",
    category: "Residential",
    intro:
      "Improve the layout, storage and finish of your bathroom with the technical details considered from the start.",
    description:
      "We bring bathroom fittings, surfaces and made-to-measure vanities into an agreed renovation package. Plumbing, electrical and waterproofing specialists are appointed to suit the requirements, with checks planned at the relevant stages.",
    scope: [
      [
        "Layout & fittings",
        "The arrangement of fittings and storage reviewed against the existing room and your priorities.",
      ],
      [
        "Surfaces & joinery",
        "Tile, stone, selected finishes and vanities connected through approved selections and drawings.",
      ],
      [
        "Specialist interfaces",
        "Service routes and relevant waterproofing work reviewed before finishes conceal the installation.",
      ],
    ],
    note: "Existing conditions, specialist testing and exclusions are established for the property before the work is confirmed.",
    source: "Company profile, pp. 4–5, 9, 13",
  },
  {
    slug: "wardrobes-cabinets",
    name: "Wardrobes & cabinets",
    category: "Joinery",
    intro:
      "Made-to-measure storage, planned from the first dimension to the final installation check.",
    description:
      "We bring your storage requirements to specialist manufacturers through a clear set of dimensions, drawings and material selections. Wardrobes, dressing rooms, TV units, vanities and fitted cabinets are developed around the space and intended use.",
    scope: [
      [
        "Storage planning",
        "Internal arrangements, doors and hardware considered against what you need to store and how you use the room.",
      ],
      [
        "Production information",
        "Shop drawings, dimensions and samples agreed before the relevant manufacture begins.",
      ],
      [
        "Fit & finish",
        "Installation interfaces checked early; alignment, operation and finish quality reviewed at completion.",
      ],
    ],
    note: "Manufacture is delivered through appointed specialists. Halo Works connects specification, procurement and installation within the agreed package.",
    source: "Company profile, pp. 2, 5, 9",
  },
  {
    slug: "flooring-finishes",
    name: "Flooring & surface finishes",
    category: "Interior improvements",
    intro:
      "Choose surfaces that work together—and suit the way the space will be used.",
    description:
      "Flooring, tile and stone installation, decorative coatings, microcement and selected specialist systems can form part of your fit-out. We connect selection, procurement and installation with the condition of the site and the overall programme.",
    scope: [
      [
        "Material selection",
        "Appearance, intended use, maintenance, cost and lead time considered alongside samples.",
      ],
      [
        "Specialist finishes",
        "Tile, stone, decorative coatings, microcement and feature-wall systems assessed for the agreed application.",
      ],
      [
        "Installation planning",
        "Site readiness, adjacent finishes and the sequence of specialist work brought into the delivery plan.",
      ],
    ],
    note: "Suitability, preparation and the exact finish system are confirmed with the appointed specialist for your property.",
    source: "Company profile, pp. 9–10",
  },
  {
    slug: "painting",
    name: "Painting & decorative finishes",
    category: "Interior improvements",
    intro:
      "Refresh the feel of your interior with a carefully defined painting and finishes package.",
    description:
      "We plan painting and decorative coatings around the existing surfaces, retained finishes and intended use of the space. Selections and access arrangements are agreed before the relevant specialist work proceeds.",
    scope: [
      [
        "Finish selection",
        "Colours, samples and decorative options reviewed in relation to the wider interior.",
      ],
      [
        "Protection & access",
        "Occupied rooms, retained surfaces and deliveries considered in the work sequence.",
      ],
      [
        "Review & completion",
        "Finish quality and outstanding items recorded against the agreed scope before closeout.",
      ],
    ],
    note: "Preparation, product specifications, inclusions and exclusions are confirmed after assessment.",
    source: "Company profile, pp. 4, 9–10, 13",
  },
  {
    slug: "quick-transformations",
    name: "Quick transformations",
    category: "Focused upgrades",
    intro:
      "A focused interior upgrade, with the scope and timing made clear before you commit.",
    description:
      "You may need a room refreshed, storage improved or selected finishes renewed. We help define a manageable package and bring the right specialists together, checking access, material availability and the required completion date first.",
    scope: [
      [
        "A focused brief",
        "Identify the room or detail that needs to change and separate essential work from optional improvements.",
      ],
      [
        "Practical selections",
        "Review finishes, fitted storage or selected kitchen and bathroom improvements against budget and lead times.",
      ],
      [
        "An agreed sequence",
        "Plan access, protection, deliveries, installation and completion checks around the property.",
      ],
    ],
    note: "Quick describes a focused scope, not a guaranteed turnaround. Feasibility and duration are confirmed after assessment, selections and any required approvals.",
    source: "Company profile, pp. 4, 9–10, 12; client brief terminology",
  },
  ...specialistScopes,
);

export const featuredServices = [
  "villa-renovation",
  "apartment-renovation",
  "office-fit-out",
  "interior-fit-out",
  "kitchen-renovation",
  "bathroom-renovation",
  "flooring-finishes",
  "wardrobes-cabinets",
  "painting",
  "bespoke-joinery",
  "quick-transformations",
  "interior-design",
  "project-delivery",
  "hospitality-interiors",
  "retail-fit-out",
];
export const serviceGroups = [
  {
    id: "renovation",
    title: "Renovation",
    summary: "Refurbish a home or improve the rooms you use every day.",
    image: "living",
    slugs: [
      "home-renovation",
      "villa-renovation",
      "apartment-renovation",
      "kitchen-renovation",
      "bathroom-renovation",
      "quick-transformations",
    ],
  },
  {
    id: "fit-out",
    title: "Interior fit-out",
    summary:
      "Plan layouts, finishes and specialist work around the way the space needs to operate.",
    image: "workplace",
    slugs: [
      "interior-fit-out",
      "office-fit-out",
      "hospitality-interiors",
      "retail-fit-out",
    ],
  },
  {
    id: "joinery",
    title: "Joinery & finishes",
    summary:
      "Develop fitted details around your space, from drawings and samples to installation.",
    image: "scope-joinery",
    slugs: [
      "bespoke-joinery",
      "wardrobes-cabinets",
      "flooring-finishes",
      "painting",
    ],
  },
  {
    id: "design-delivery",
    title: "Design & delivery",
    summary:
      "Bring layouts, specifications and specialist teams into an agreed programme.",
    image: "scope-planning",
    slugs: ["interior-design", "project-delivery"],
  },
  {
    id: "specialist-scopes",
    title: "Specialist scope reviews",
    summary:
      "Define the brief for villa extensions and doors, swimming pools, annual maintenance or AC installation.",
    slugs: specialistScopes.map(({ slug }) => slug),
  },
];
export const commitments = [
  [
    "A clear scope",
    "Inclusions, exclusions and specialist responsibilities agreed before commitment.",
  ],
  [
    "The right specialists",
    "Designers, engineers, manufacturers and contractors appointed around the work.",
  ],
  [
    "Visible progress",
    "Agreed updates, recorded decisions and changes confirmed in writing.",
  ],
  [
    "A documented handover",
    "Inspections, snag closure, care guidance and relevant warranty information.",
  ],
];
export const enquiryServices = [
  ...services.map((s) => s.name),
  "Landscaping",
  "Approvals & submissions",
  "Not sure yet",
];

export type ProjectImage = { src: string; alt: string };
export type Project = {
  slug: string;
  title: string;
  clientName?: string;
  category: string;
  status: "draft" | "published";
  approved: boolean;
  services: string[];
  location: string;
  area?: { slug: string; name: string };
  scope: string;
  duration: string;
  role: string;
  brief: string;
  delivery: string;
  outcome: string;
  before: ProjectImage | null;
  after: ProjectImage | null;
  gallery: ProjectImage[];
};
// Supply verified project facts and owned/approved photographs here. Publishing is gated below.
const draftProject: Omit<Project, "slug" | "category" | "services"> = {
  title: "",
  status: "draft",
  approved: false,
  location: "",
  scope: "",
  duration: "",
  role: "",
  brief: "",
  delivery: "",
  outcome: "",
  before: null,
  after: null,
  gallery: [],
};
export const projects: Project[] = [
  {
    ...draftProject,
    slug: "villa-renovation",
    category: "Villa renovation",
    services: ["villa-renovation", "home-renovation"],
  },
  {
    ...draftProject,
    slug: "apartment-renovation",
    category: "Apartment renovation",
    services: ["apartment-renovation", "home-renovation"],
  },
  {
    ...draftProject,
    slug: "office-fit-out",
    category: "Office fit-out",
    services: ["office-fit-out", "interior-fit-out"],
  },
  {
    ...draftProject,
    slug: "bespoke-kitchen",
    category: "Bespoke kitchen",
    services: ["kitchen-renovation", "bespoke-joinery"],
  },
];
export function isPublishedProject(p: Project) {
  return (
    p.status === "published" &&
    p.approved &&
    [
      p.title,
      p.location,
      p.scope,
      p.duration,
      p.role,
      p.brief,
      p.delivery,
      p.outcome,
      p.before?.src,
      p.before?.alt,
      p.after?.src,
      p.after?.alt,
    ].every((value) => Boolean(value?.trim()))
  );
}
export const publishedProjects = projects.filter(isPublishedProject);
