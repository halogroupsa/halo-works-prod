import ServiceDetail from "@/components/service-detail";
import { pageMetadata } from "@/lib/seo";
import type { Service } from "@/lib/site-content";

const path = "/services/landscaping/";
const title = "Landscaping & outdoor living";
const intro =
  "Plan a garden, terrace or shaded seating area around the way you use it. Halo Works coordinates the agreed finishes, site work and specialist packages for your outdoor brief.";

export const metadata = pageMetadata(
  "Landscaping & Outdoor Living in Dubai",
  intro,
  path,
  "landscaping-hero",
);

const scenes = [
  {
    image: "landscaping-courtyard",
    label: "Courtyard finishes",
    alt: "Paved courtyard with a dining table, built-in bench and planted borders",
  },
  {
    image: "landscaping-shade",
    label: "Shade & seating",
    alt: "Slatted pergola over a terrace dining area beside raised planters",
  },
  {
    image: "landscaping-lighting",
    label: "Outdoor lighting",
    alt: "Low-level lighting along outdoor steps and a planted terrace",
  },
];

const scope = [
  [
    "Patios, paths & levels",
    "Plan outdoor paving, steps and edges around existing door thresholds, access routes and drainage. Compare surfaces for how they feel in direct sun and how easy they are to clean.",
  ],
  [
    "Planting & irrigation",
    "Decide what to keep and where planting should provide shade, privacy or softer edges. Review soil, water supply and ongoing care with the planting and irrigation specialists.",
  ],
  [
    "Shade, seating & lighting",
    "Lay out seating, screening and shade around the hours you use the space. Coordinate lighting and electrical routes before closing up paving or planter edges.",
  ],
];

const steps = [
  [
    "Walk the site",
    "Review the layout, sun and shade, access for deliveries, existing services and what can stay. Photos and a simple sketch help us start the conversation.",
  ],
  [
    "Agree the scope",
    "Choose finishes and set priorities. Confirm who will handle each work package and check any property-specific approval requirements before work is scheduled.",
  ],
  [
    "Coordinate the work",
    "Sequence the agreed packages so that preparation and any below-surface work come before finishes. At handover, review the agreed work and applicable care information.",
  ],
] as const;

const questions = [
  [
    "Can I update just one part of my garden?",
    "Yes. Tell us which area you want to improve and which features should stay. We’ll review how the proposed work connects to the existing paving, planting and services.",
  ],
  [
    "Will I need approvals for outdoor changes?",
    "It depends on your property and the work proposed. Tell us about any fixed structures, level changes or changes near a boundary so the right specialist can review the approval route for your site.",
  ],
  [
    "What should I send before a site review?",
    "Share your community or building, wide photos of the area and access route, approximate dimensions and what you want to keep or change. Include your target budget and timing if you have them.",
  ],
];

const service: Service = {
  slug: "landscaping",
  name: title,
  category: "Gardens, terraces & courtyards",
  intro,
  description:
    "Start with what you want to do outside. A shaded dining area might need a better route from the kitchen, while a garden refresh might start with privacy planting, a clearer path or a better-lit seating area.",
  scope,
  note:
    "Raised decks, fixed shade structures and changes to drainage may need specialist input. We confirm the requirements for your property when we review the brief.",
  source: "Halo Works outdoor planning guidance",
};

export default function Landscaping() {
  return (
    <ServiceDetail
      service={service}
      scenes={scenes}
      cover={{
        image: "landscaping-hero",
        label: "Garden seating",
        alt: "Shaded villa garden seating with stone paving, trees and planted borders",
      }}
      process={steps}
      questions={questions}
      relatedSlugs={["swimming-pools", "villa-renovation", "villa-extensions-doors"]}
      enquiryName="Landscaping"
      serviceType="Landscape planning and project coordination"
    />
  );
}
