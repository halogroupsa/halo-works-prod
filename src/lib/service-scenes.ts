import type { Scene } from "@/components/service-gallery";

const living = {
  image: "living",
  label: "Living spaces",
  alt: "Living room with fitted timber shelving and soft furnishings",
};
const kitchen = {
  image: "kitchen",
  label: "Fitted kitchens",
  alt: "Kitchen with a stone island and walnut cabinets",
};
const bathroom = {
  image: "scope-bathroom",
  label: "Bathroom finishes",
  alt: "Bathroom with a stone vanity and bronze fittings",
};
const joinery = {
  image: "scope-joinery",
  label: "Joinery detail",
  alt: "Specialist checking the fit of a timber drawer",
};
const planning = {
  image: "scope-planning",
  label: "Drawings & samples",
  alt: "Material samples being reviewed over a set of drawings",
};
const worksite = {
  image: "process-hero",
  label: "Site planning",
  alt: "Fit-out in progress with tools and drawings set out on a workbench",
};
const workplace = {
  image: "workplace",
  label: "Reception",
  alt: "Workplace with a curved stone reception desk and timber detailing",
};
const meeting = {
  image: "scope-office",
  label: "Meeting spaces",
  alt: "Workplace with a glazed meeting room and fitted lighting",
};
const hospitality = {
  image: "hospitality",
  label: "Guest areas",
  alt: "Restaurant with timber finishes and warm lighting",
};
const retail = {
  image: "retail-boutique",
  label: "Boutique fit-out",
  alt: "Clothing boutique with freestanding racks, fitted wall displays and track lighting",
};
const inspection = {
  image: "process-inspection",
  label: "Installation checks",
  alt: "Specialist inspecting cabinet hardware",
};
const protection = {
  image: "scope-protection",
  label: "Site protection",
  alt: "Specialist protecting an existing floor before work",
};
const finishes = {
  image: "detail",
  label: "Surface finishes",
  alt: "Interior with a tactile plaster wall and a pale stone plinth",
};

export const serviceScenes: Record<string, Scene[]> = {
  "home-renovation": [living, kitchen, bathroom],
  "villa-renovation": [
    {
      image: "hero-natural",
      label: "Villa exterior",
      alt: "Modern villa with full-height glazing beside a pool terrace",
    },
    kitchen,
    bathroom,
  ],
  "apartment-renovation": [
    {
      image: "living-natural",
      label: "Apartment living",
      alt: "Apartment living room with integrated shelving and natural light",
    },
    kitchen,
    bathroom,
  ],
  "kitchen-renovation": [kitchen, joinery, planning],
  "bathroom-renovation": [bathroom, finishes, planning],
  "quick-transformations": [protection, finishes, inspection],
  "interior-fit-out": [workplace, worksite, planning],
  "office-fit-out": [meeting, workplace, worksite],
  "hospitality-interiors": [hospitality, joinery, planning],
  "retail-fit-out": [retail, joinery, planning],
  "bespoke-joinery": [joinery, kitchen, inspection],
  "wardrobes-cabinets": [
    {
      image: "about-craft",
      label: "Fitted cabinetry",
      alt: "Specialist checking the alignment of built-in cabinet doors",
    },
    joinery,
    planning,
  ],
  "flooring-finishes": [
    {
      image: "article-materials",
      label: "Flooring and finish samples",
      alt: "Wood, glazed tile and marble samples laid out together",
    },
    planning,
    protection,
  ],
  painting: [finishes, protection, worksite],
  "interior-design": [planning, living, kitchen],
  "project-delivery": [worksite, planning, inspection],
  "villa-extensions-doors": [
    {
      image: "scope-villa-doors",
      label: "Garden openings",
      alt: "Folding doors opening a villa living room onto a paved terrace",
    },
    {
      image: "landscaping-courtyard",
      label: "Courtyard layout",
      alt: "Paved courtyard with seating and planted borders",
    },
    planning,
  ],
  "swimming-pools": [
    {
      image: "scope-swimming-pool",
      label: "Pool and paving",
      alt: "Villa garden with a pool, steps and paved seating area",
    },
    {
      image: "landscaping-shade",
      label: "Shade and seating",
      alt: "Slatted pergola over a terrace beside planted borders",
    },
    {
      image: "landscaping-lighting",
      label: "Outdoor lighting",
      alt: "Low-level lighting along outdoor steps",
    },
  ],
  "annual-maintenance": [inspection, planning, protection],
  "ac-installation": [
    {
      image: "scope-ac-installation",
      label: "Ceiling services",
      alt: "Open ceiling showing air conditioning ducts and a recessed supply grille",
    },
    planning,
    worksite,
  ],
};
