import type { Service } from "./site-content";

export const specialistScopes: Service[] = [
  {
    slug: "villa-extensions-doors",
    name: "Villa extensions & doors",
    category: "Specialist scope review",
    intro:
      "Review a proposed villa extension, a new garden opening or replacement doors before committing to drawings or orders.",
    description:
      "Start with the change you want to make and how it affects the rooms around it. We can review door choices and their fit with the renovation brief. A proposed extension or change to a structural opening starts with a feasibility review by the appropriate specialist.",
    scope: [
      [
        "Layout and feasibility",
        "Share the existing plans and intended use of the extra space. Identify which walls, openings, rooflines and services the proposal would affect.",
      ],
      [
        "Door and frame choices",
        "Compare the opening size, swing or sliding direction, frame, hardware and threshold. Check how the selected door meets existing walls and floors.",
      ],
      [
        "Permissions and sequence",
        "Identify the required drawings, responsible specialists and any community or authority submissions before planning structural work.",
      ],
    ],
    note: "A structural extension and its delivery scope depend on specialist assessment, property constraints and applicable permissions.",
    source: "Company profile, pp. 9–12; project scope review",
    review: {
      brief:
        "Send the villa community, existing plans if available, photographs from both sides of any affected wall or opening, and a short description of what you want to change.",
      faqs: [
        [
          "Can I replace the doors without extending the villa?",
          "Yes. Tell us which openings you want to retain and whether the scope includes internal doors, garden doors, frames or hardware.",
        ],
        [
          "What happens if I want to widen a door opening?",
          "The existing wall, services and drawings need to be reviewed first. The appropriate specialist can assess feasibility and confirm what information is needed before the work is scoped.",
        ],
      ],
    },
  },
  {
    slug: "swimming-pools",
    name: "Swimming pools",
    category: "Specialist scope review",
    intro:
      "Plan how a new or existing swimming pool fits with your garden, paving and outdoor living areas.",
    description:
      "Start with where people will enter, sit and move around the garden. Halo Works can review how the pool and surrounding landscape fit together. Pool construction, refurbishment and equipment require a separate assessment and proposal from a pool specialist.",
    scope: [
      [
        "Garden layout and access",
        "Identify the pool area, walking routes, shade, steps and access for deliveries. Keep room for the equipment and future servicing.",
      ],
      [
        "Surrounding finishes",
        "Compare the paving and edge details around the pool. Review drainage, levels and how the deck connects to the rest of the garden.",
      ],
      [
        "Pool specialist assessment",
        "For an existing pool, share its condition and any known problems. For a new pool, share the intended use and plot plan so a specialist can assess the site and technical scope.",
      ],
    ],
    note: "The pool specialist establishes the pool scope, including technical design, equipment, approvals and delivery responsibilities.",
    source:
      "Outdoor planning guidance based on the halo.ae landscaping and pools overview",
    review: {
      brief:
        "Send the villa community, garden photos, the approximate area and whether the pool is new or existing. Tell us if the brief also covers paving, planting or shade.",
      faqs: [
        [
          "Can I refresh the garden around an existing pool?",
          "Yes. Share the surfaces and seating areas you want to change. We can review the landscaping scope and identify where the work meets the existing pool edge and services.",
        ],
        [
          "Who assesses the pool itself?",
          "A pool specialist should assess the shell, water systems and equipment. The assessment informs the scope and responsibilities before any work is agreed.",
        ],
      ],
    },
  },
  {
    slug: "annual-maintenance",
    name: "Annual maintenance for villas & apartments",
    category: "Maintenance enquiries",
    intro:
      "Define what an annual maintenance contract should cover for your villa or apartment and what to ask when comparing providers.",
    description:
      "Start with the equipment and fixtures you are responsible for, past faults and any handover records you have. A clear list helps you separate scheduled servicing from repairs and compare like-for-like annual maintenance contracts.",
    scope: [
      [
        "Systems and responsibilities",
        "List the AC units, plumbing fixtures and other items to cover. In an apartment, confirm which systems are managed by the building and which belong to the unit.",
      ],
      [
        "Visits and call-outs",
        "Ask providers to state the frequency of planned visits, how faults are reported, and what call-out availability is included.",
      ],
      [
        "Parts and exclusions",
        "Check how labour, parts, consumables and repeat visits are priced. Record any exclusions and who approves extra work.",
      ],
    ],
    note: "The maintenance provider confirms visit schedules, response terms, inclusions and pricing in its proposal.",
    source:
      "Maintenance enquiry guidance; company profile, pp. 12–13, for handover records",
    review: {
      brief:
        "Share the building or community, property type, equipment list and known issues. Include any existing maintenance agreement or handover records you want the provider to work from.",
      faqs: [
        [
          "What does AMC mean?",
          "AMC means annual maintenance contract. The provider’s proposal should specify the systems it covers, planned visits, how call-outs work and what costs extra.",
        ],
        [
          "Can I compare annual plans for an apartment?",
          "Yes. First ask building management which equipment and services are your responsibility. Compare providers against the same list of equipment and coverage.",
        ],
      ],
    },
  },
  {
    slug: "ac-installation",
    name: "AC installation",
    category: "Specialist scope review",
    intro:
      "Plan an AC installation or replacement alongside your Dubai renovation, with the system and installation details assessed by an HVAC specialist.",
    description:
      "A change to cooling can affect ceilings, grilles, controls, electrical connections and drainage. We help coordinate those interfaces with the renovation so the appointed HVAC specialist can assess what can stay and what needs to change.",
    scope: [
      [
        "Existing system and requirements",
        "Record which rooms need attention and how the current system is set up. Share equipment details, recurring faults and the proposed room layout with the specialist.",
      ],
      [
        "Routes and access",
        "Review plant access, ceiling space, grille positions, power, drainage and the clearances needed for installation and servicing.",
      ],
      [
        "Testing and handover",
        "Ask the appointed specialist to define what testing, commissioning and equipment documentation are included before the work is scheduled.",
      ],
    ],
    note: "System selection, sizing, installation and commissioning are confirmed by the appointed HVAC specialist for the property.",
    source: "Company profile, pp. 6, 9, 11–13",
    review: {
      brief:
        "Send the property location, affected rooms, photos of the existing equipment or grilles, and any drawings you have. Tell us whether the AC change is part of a wider renovation.",
      faqs: [
        [
          "Can existing AC equipment stay during a renovation?",
          "The HVAC specialist can assess the equipment and whether it suits the revised layout. Identify any comfort or reliability issues before the ceilings and finishes are specified.",
        ],
        [
          "What should an installation quotation include?",
          "Ask for the equipment specification, the installation scope, any electrical or ceiling interfaces, and the testing and handover items the specialist will provide.",
        ],
      ],
    },
  },
];
