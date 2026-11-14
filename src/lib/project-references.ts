import { wardrobeReferences } from "./wardrobe-references";

type ReferencePhoto = {
  name: string;
  alt: string;
  portrait?: boolean;
  dimensions?: [width: number, height: number];
  sourceImage?: string;
};

export type ProjectReference = {
  slug: string;
  area?: string;
  parentArea?: string;
  location?: string;
  title: string;
  clientName?: string;
  category: string;
  description: string;
  sourcePath: string;
  scope: string[];
  photos: [ReferencePhoto, ...ReferencePhoto[]];
};

export const projectReferences: ProjectReference[] = [
  {
    slug: "dubai-marina-apartment-kitchen",
    area: "dubai-marina",
    title: "Open-plan apartment kitchen",
    clientName: "Samantha J.",
    category: "Apartment renovation",
    description:
      "White Shaker cabinetry, a breakfast island and woven pendants define the kitchen in this Dubai Marina apartment.",
    sourcePath: "/projects/marina-dubai/open-plan-kitchen-apartment-renovation",
    scope: [
      "Prioritise the kitchen cabinets, worktops, appliance housing and task lighting.",
      "Extend the refresh into the adjoining dining area with flooring and paint where needed.",
      "Check existing extraction and service positions before allowing for an island sink or moving appliances.",
    ],
    photos: [
      {
        name: "marina-kitchen",
        alt: "White Shaker kitchen with an island and woven pendant lights in Dubai Marina",
      },
    ],
  },
  {
    slug: "dubai-hills-villa-kitchen",
    area: "dubai-hills-estate",
    title: "Two-tone villa kitchen",
    clientName: "Meera J.",
    category: "Kitchen renovation",
    description:
      "A Dubai Hills Estate kitchen with two-tone cabinetry, a fluted island and lighting beneath the wall cabinets.",
    sourcePath:
      "/projects/dubai-hills-dubai/contemporary-villa-kitchen-renovation",
    scope: [
      "Price the main kitchen as a single room, including cabinetry, worktops, splashback and lighting.",
      "Use a measured cabinet plan to identify which appliances and service points can stay.",
      "Choose one feature finish for the island or splashback and price it separately from the essentials.",
    ],
    photos: [
      {
        name: "dubai-hills-kitchen",
        alt: "Two-tone villa kitchen with a fluted island and illuminated splashback in Dubai Hills Estate",
      },
    ],
  },
  {
    slug: "arabian-ranches-open-plan-kitchen",
    area: "arabian-ranches",
    title: "Open-plan villa kitchen and living area",
    clientName: "Natasha D.",
    category: "Villa renovation",
    description:
      "Halo Interiors connected the kitchen and living area around a six-seat island. Lit display shelving runs behind the kitchen, and sliding glass doors open the living space onto the terrace.",
    sourcePath: "/projects/arabian-ranches-dubai/open-plan-villa-kitchen-renovation",
    scope: [
      "Plan the kitchen island and living-room layout together so circulation stays clear between the main rooms and terrace.",
      "Coordinate integrated appliances, task lighting and illuminated shelving before approving the cabinet drawings.",
      "Confirm the scope of any changes to the glazing and existing services during the site assessment.",
    ],
    photos: [
      {
        name: "arabian-ranches-open-plan-kitchen",
        alt: "Arabian Ranches villa kitchen with a six-seat island, lit display joinery and a view into the living area",
        dimensions: [986, 740],
      },
    ],
  },
  {
    slug: "burj-vista-bathroom-joinery",
    area: "downtown-dubai",
    title: "Bathroom vanities and storage",
    category: "Bathroom renovation",
    description:
      "Fitted vanities, illuminated shelving and a curved powder-room cabinet at Burj Vista.",
    sourcePath: "/projects/downtown-dubai/burj-vista-bathroom-vanities-storage",
    scope: [
      "List the bathrooms to upgrade and separate cabinet-only work from rooms that need a full strip-out.",
      "Include waterproofing, drainage checks and plumbing access where wet areas are being rebuilt.",
      "Coordinate mirrors, lights and vanity storage before the cabinet drawings are finalised.",
    ],
    photos: [
      {
        name: "burj-vista-vanity",
        alt: "Bathroom vanity with illuminated open shelves at Burj Vista",
        portrait: true,
      },
      {
        name: "burj-vista-powder-room",
        alt: "Curved vanity cabinet in a Burj Vista powder room",
        portrait: true,
      },
      {
        name: "burj-vista-bathroom",
        alt: "Open shelving and shower enclosure in a Burj Vista bathroom",
        portrait: true,
      },
      {
        name: "burj-vista-mirrored-vanity",
        alt: "Bathroom vanity and mirrored wall at Burj Vista",
        sourceImage:
          "/images/joinery-projects/burj-vista/02-bathroom-vanity-and-mirrored-wall-burj-vista.webp",
        dimensions: [1200, 1600],
      },
      {
        name: "burj-vista-vanity-drawers",
        alt: "Vanity drawers and countertop at Burj Vista",
        sourceImage:
          "/images/joinery-projects/burj-vista/04-bathroom-vanity-drawers-and-countertop-burj-vista.webp",
        dimensions: [1200, 1600],
      },
      {
        name: "burj-vista-floating-vanity",
        alt: "Floating vanity and interior door at Burj Vista",
        sourceImage:
          "/images/joinery-projects/burj-vista/06-floating-vanity-cabinet-and-interior-door-burj-vista.webp",
        dimensions: [1200, 1600],
      },
    ],
  },
  {
    slug: "meydan-bedroom-joinery",
    area: "meydan",
    title: "Bedroom storage and study joinery",
    category: "Bespoke joinery",
    description:
      "A built-in bunk bed, a study desk with shelving and fluted wardrobe doors in Meydan.",
    sourcePath: "/projects/meydan-dubai/bedroom-study-kitchen-joinery",
    scope: [
      "Set the room list and brief the wardrobes, desk and storage around how each room is used.",
      "Measure skirtings, sockets and door swings before fixing cabinet depths and desk positions.",
      "Quote cabinet interiors, door finishes and integrated lighting separately so they can be prioritised.",
    ],
    photos: [
      {
        name: "meydan-bunk-bed",
        alt: "Built-in bunk bed and fitted bedroom storage in Meydan",
        portrait: true,
      },
      {
        name: "meydan-study",
        alt: "Fitted children’s study desk with display shelving in Meydan",
        portrait: true,
      },
      {
        name: "meydan-wardrobe",
        alt: "Fluted wardrobe doors in a Meydan bedroom",
        portrait: true,
      },
      {
        name: "meydan-fluted-cabinet-detail",
        alt: "Close view of a fluted cabinet panel in the Meydan joinery project",
        sourceImage:
          "/images/joinery-projects/mpr303-meydan/04-fluted-cabinet-panel-detail-mpr303-meydan.webp",
        dimensions: [1200, 1600],
      },
    ],
  },
  {
    slug: "dubai-creek-harbour-galley-kitchen",
    area: "dubai-creek-harbour",
    title: "Timber galley kitchen",
    clientName: "Isabella C.",
    category: "Kitchen renovation",
    description:
      "Tall timber cabinetry, integrated appliances and a pale work surface in a Dubai Creek Harbour kitchen.",
    sourcePath:
      "/projects/dubai-creek-harbour/oak-veneer-galley-kitchen-renovation",
    scope: [
      "Start with the existing galley footprint and compare a tall storage wall with a simpler cabinet run.",
      "Choose which appliances to retain and plan worktop lighting with the cabinet layout.",
      "Check the aisle and delivery dimensions before specifying an island or long worktop sections.",
    ],
    photos: [
      {
        name: "creek-harbour-kitchen",
        alt: "Timber galley kitchen with tall cabinets and a pale island worktop in Dubai Creek Harbour",
      },
    ],
  },
  {
    slug: "almas-boardroom-joinery",
    area: "almas",
    parentArea: "jumeirah-lakes-towers",
    location: "Almas Tower, Jumeirah Lakes Towers",
    title: "Boardroom cabinetry and wall panelling",
    category: "Office fit-out",
    description:
      "Fitted cabinetry, illuminated displays and fluted wall panelling in an Almas boardroom.",
    sourcePath: "/projects/almas-dubai/boardroom-cabinetry-wall-panelling",
    scope: [
      "Define a meeting-room or reception upgrade with a clear list of cabinetry and finishes.",
      "Confirm power, data and AV positions before panelling and cabinet manufacture.",
      "Agree installation hours and protection for routes shared with occupied offices.",
    ],
    photos: [
      {
        name: "almas-boardroom",
        alt: "Boardroom table and fitted wall cabinetry at Almas",
        portrait: true,
      },
      {
        name: "almas-panelling",
        alt: "Illuminated decorative wall panelling at Almas",
        portrait: true,
      },
      {
        name: "almas-lighting",
        alt: "Fluted wall panel and feature lighting in the Almas boardroom",
        portrait: true,
      },
      {
        name: "almas-metal-display",
        alt: "Metal display frame detail from the Almas boardroom",
        sourceImage:
          "/images/joinery-projects/almas-34-j/04-metal-display-frame-detail-almas-34-j.webp",
        dimensions: [1200, 1600],
      },
    ],
  },
  {
    slug: "nshama-reception-workspace-joinery",
    location: "USH / Nshama",
    title: "Reception and meeting-room joinery",
    category: "Office fit-out",
    description:
      "A curved reception desk, meeting-room cabinetry and illuminated display shelving from the same USH / Nshama workspace.",
    sourcePath: "/projects/nshama-dubai/ush-reception-workspace-joinery",
    scope: [
      "Separate the reception desk, meeting-room storage and display shelving into clear work packages.",
      "Check power, data and screen positions before approving cabinetry drawings.",
      "Coordinate drawer units and work surfaces with the way the desks will be used.",
    ],
    photos: [
      {
        name: "nshama-curved-reception",
        alt: "Curved reception desk and lounge seating at USH / Nshama",
        sourceImage:
          "/images/joinery-projects/ush-nshama/02-curved-reception-desk-and-lounge-furniture-ush-nshama.webp",
        dimensions: [1200, 1600],
      },
      {
        name: "nshama-meeting-joinery",
        alt: "Meeting table and fitted TV wall cabinetry at USH / Nshama",
        sourceImage:
          "/images/joinery-projects/ush-nshama/01-meeting-table-and-tv-wall-cabinetry-ush-nshama.webp",
        dimensions: [1200, 1600],
      },
      {
        name: "nshama-display-shelves",
        alt: "Curved illuminated display shelves at USH / Nshama",
        sourceImage:
          "/images/joinery-projects/ush-nshama/07-curved-illuminated-display-shelves-ush-nshama.webp",
        dimensions: [1200, 1600],
      },
      {
        name: "nshama-desk-storage",
        alt: "Office desk and drawer unit at USH / Nshama",
        sourceImage:
          "/images/joinery-projects/ush-nshama/08-office-desk-and-drawer-unit-ush-nshama.webp",
        dimensions: [1536, 1152],
      },
    ],
  },
  {
    slug: "glazed-office-meeting-booth",
    title: "Glazed office meeting booth",
    category: "Office fit-out",
    description:
      "A compact glass-fronted meeting space with white lounge chairs and an integrated screen wall.",
    sourcePath: "/commercial/offices",
    scope: [
      "Brief the booth as one room and confirm how many people it needs to seat.",
      "Review visual privacy, speech privacy and ventilation with the relevant specialists.",
      "Coordinate the screen, glazing, lighting and furniture clearances before ordering.",
    ],
    photos: [
      {
        name: "office-glazed-meeting-booth",
        alt: "Glazed office meeting booth with white chairs and a wall-mounted screen",
        sourceImage: "/images/offices_r2/21Off_halo.jpg",
        dimensions: [1536, 1152],
      },
    ],
  },
  {
    slug: "office-reception-slat-wall",
    title: "Office reception with timber slat walls",
    category: "Office fit-out",
    description:
      "A navy reception counter, timber slat walls and a small waiting area define this office entrance.",
    sourcePath: "/commercial/offices",
    scope: [
      "Set the reception counter, waiting seats and circulation route within the existing entrance.",
      "Review wall preparation and how new panelling meets the doors, windows and skirting.",
      "Agree lighting and desk power positions before specifying finishes.",
    ],
    photos: [
      {
        name: "office-navy-reception",
        alt: "Navy reception counter and timber slat walls in an office waiting area",
        sourceImage: "/images/offices_r2/corporate_spaces4.jpg",
        dimensions: [1010, 758],
      },
    ],
  },
  {
    slug: "downtown-taupe-galley-kitchen",
    area: "downtown-dubai",
    title: "Taupe apartment galley kitchen",
    clientName: "Rania F.",
    category: "Kitchen renovation",
    description:
      "Tall taupe cabinetry, integrated appliances and lit worktops frame a compact Downtown Dubai galley.",
    sourcePath: "/projects/downtown-dubai/taupe-galley-kitchen-renovation",
    scope: [
      "Start with the existing galley footprint and identify cabinet runs and appliances to retain or replace.",
      "Check worktop lengths, lighting and usable space between the cabinet runs.",
      "Agree delivery access and verify appliance clearances before manufacture.",
    ],
    photos: [
      {
        name: "downtown-taupe-galley",
        alt: "Taupe galley kitchen with integrated appliances and lit worktops in Downtown Dubai",
        sourceImage: "/images/kitchens_r2/Kitchen16_HALO.webp",
        dimensions: [1536, 1152],
      },
    ],
  },
  {
    slug: "emirates-living-shaker-kitchen",
    location: "Emirates Living",
    title: "Shaker kitchen and display joinery",
    category: "Kitchen renovation",
    description:
      "Pale Shaker cabinet fronts, a dark island and illuminated display joinery in an Emirates Living kitchen.",
    sourcePath: "/projects/emirates-living-dubai/modern-classic-villa-kitchen-renovation",
    scope: [
      "Separate the cabinet runs, island and display storage when comparing quotations.",
      "Confirm how worktops, appliance openings and lighting meet the cabinet drawings.",
      "Review the kitchen floor and thresholds before deciding how far the finish changes should extend.",
    ],
    photos: [
      {
        name: "emirates-living-shaker-kitchen",
        alt: "Pale Shaker cabinet fronts, a dark island and illuminated display joinery in Emirates Living",
        sourceImage: "/images/kitchens_r2/Kitchen20_HALO.webp",
        dimensions: [864, 648],
      },
    ],
  },
  {
    slug: "jumeirah-living-microcement-vanity",
    location: "Jumeirah Living WTC",
    title: "Microcement double vanity",
    category: "Bathroom renovation",
    description:
      "A continuous vanity surface, twin vessel basins and shaped mirrors form the focus of this Jumeirah Living WTC bathroom.",
    sourcePath: "/projects/jumeirah-living-wtc/microcement-bathroom-renovation",
    scope: [
      "Define whether the brief covers the vanity area or the full wet room.",
      "Check the surface specification and junctions at the basins, wall and floor.",
      "Confirm water connections, mirror lighting and access for maintenance.",
    ],
    photos: [
      {
        name: "jumeirah-living-double-vanity",
        alt: "Microcement double vanity with twin vessel basins and shaped mirrors at Jumeirah Living WTC",
        sourceImage: "/images/bathrooms_r2/Bathroom5_HALO.webp",
        dimensions: [1536, 1152],
      },
    ],
  },
  {
    slug: "nad-al-sheba-walk-in-wardrobes",
    location: "Nad Al Sheba",
    title: "Walk-in wardrobes and drawer island",
    category: "Bespoke joinery",
    description:
      "Glass-fronted wardrobes and a fitted drawer island are shown in the Nad Al Sheba joinery record.",
    sourcePath: "/projects/nad-al-sheba-dubai/walk-in-wardrobes-fitted-cabinetry",
    scope: [
      "List hanging, shelving and drawer needs before developing the cabinet elevations.",
      "Check clearances around a drawer island and the swing of the wardrobe doors.",
      "Compare glass, hardware and lighting samples with the adjoining finishes.",
    ],
    photos: [
      {
        name: "nad-al-sheba-wardrobe-island",
        alt: "Walk-in wardrobe with a fitted drawer island in Nad Al Sheba",
        sourceImage:
          "/images/joinery-projects/nas-349-nad-al-sheeba/01-walk-in-wardrobe-and-drawer-island-nas-349-nad-al-sheeba.webp",
        dimensions: [1536, 1152],
      },
      {
        name: "nad-al-sheba-wardrobe-mirror",
        alt: "Glass-fronted wardrobe and full-length mirror in Nad Al Sheba",
        sourceImage:
          "/images/joinery-projects/nas-349-nad-al-sheeba/02-glass-fronted-wardrobes-and-full-length-mirror-nas-349-nad-al-sheeba.webp",
        dimensions: [1536, 1152],
      },
      {
        name: "nad-al-sheba-wardrobe-doors",
        alt: "Walk-in wardrobe lined with black-framed glass doors in Nad Al Sheba",
        sourceImage:
          "/images/joinery-projects/nas-349-nad-al-sheeba/03-walk-in-wardrobe-with-glass-doors-nas-349-nad-al-sheeba.webp",
        dimensions: [1536, 1152],
      },
    ],
  },
  {
    slug: "cafe-banquette-coffee-counter",
    title: "Café banquette and coffee counter",
    category: "Hospitality interiors",
    description:
      "A café seating room with timber slats, pendant lights and a fitted banquette, photographed from the seating side and the coffee counter.",
    sourcePath: "/retail/cafes",
    scope: [
      "Confirm the number of seats and circulation between the entrance, tables and service counter.",
      "Separate front-of-house joinery, wall finishes and lighting from kitchen and equipment packages.",
      "Review cleanability, protection and connections at the counter before specifying finishes.",
    ],
    photos: [
      {
        name: "cafe-banquette-timber-wall",
        alt: "Café banquette under pendant lights beside a timber slat wall",
        sourceImage: "/images/cafes_r2/cafes1.jpg",
        dimensions: [768, 576],
      },
      {
        name: "cafe-counter-and-terrace-doors",
        alt: "Same café seating room viewed towards the coffee counter and terrace doors",
        sourceImage: "/images/cafes_r2/cafes2.jpg",
        dimensions: [768, 576],
      },
    ],
  },
  {
    slug: "mall-dessert-display-kiosk",
    title: "Mall dessert display kiosk",
    category: "Retail fit-out",
    description: "A compact mall kiosk with display counters, storage and a service position.",
    sourcePath: "/retail/kiosks",
    scope: [
      "Confirm the kiosk footprint and customer approach before laying out display units.",
      "Check the counter heights, service clearances and power requirements for equipment.",
      "Agree signage, storage and materials with the applicable mall fit-out requirements.",
    ],
    photos: [
      {
        name: "mall-dessert-display-kiosk",
        alt: "Dessert display counter and service position at a compact mall kiosk",
        sourceImage: "/images/kiosks_r2/kiosks1.jpg",
        dimensions: [1536, 1152],
      },
    ],
  },
  {
    slug: "shaded-dining-terrace",
    title: "Shaded dining terrace",
    category: "Landscaping",
    description:
      "A shaded outdoor dining area with a slatted overhead structure, pale paving and planted edges.",
    sourcePath: "/services/landscaping-pools-dubai",
    scope: [
      "Define the dining area, door clearance and circulation around the table.",
      "Check thresholds, drainage and the proposed shade structure before setting finished levels.",
      "Coordinate planter positions and upkeep access with the paving layout.",
    ],
    photos: [
      {
        name: "shaded-dining-terrace",
        alt: "Outdoor dining table under slatted shade beside planted borders",
        sourceImage: "/images/landscaping_pools_dubai_r2/ALP18_HALO.webp",
        dimensions: [1536, 1152],
      },
    ],
  },
  {
    slug: "curved-pool-edge-and-coping",
    title: "Curved pool edge and coping",
    category: "Pool surrounds",
    description:
      "A close view of a curved pool edge with submerged steps, pale coping and a pebble border.",
    sourcePath: "/services/landscaping-pools-dubai",
    scope: [
      "Identify which coping, paving and edge details need attention around the existing pool.",
      "Confirm the drainage, levels and junction with the pool shell with the pool specialist.",
      "Compare surface grip and maintenance before specifying the surrounding finish.",
    ],
    photos: [
      {
        name: "curved-pool-edge-and-coping",
        alt: "Curved swimming pool coping beside submerged steps and a white pebble border",
        sourceImage: "/images/landscaping_pools_dubai_r2/ALP9_HALO-1.webp",
        dimensions: [1536, 1152],
      },
    ],
  },
  ...wardrobeReferences,
];
