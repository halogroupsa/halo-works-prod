type LocationCasePhoto = { file: string; alt: string; room?: string };

export type LocationCaseStudy = {
  slug: string;
  area: string;
  location?: string;
  title: string;
  description: string;
  clientName?: string;
  property: string;
  scope: string;
  sourcePath: string;
  photos: [LocationCasePhoto, ...LocationCasePhoto[]];
};

// Completed residential work documented by Halo Interiors. Include a client name only when cleared for publication.
export const locationCaseStudies: LocationCaseStudy[] = [
  {
    slug: "downtown-forte",
    area: "downtown-dubai",
    title: "Forte Tower apartment",
    description:
      "A bronze-framed screen divides the dining room from the kitchen while keeping the two spaces visually connected. The renovation pairs matte black fittings with stone-effect porcelain in the bathrooms and a fluted bedroom headboard. Halo Interiors furnished and styled the apartment for handover.",
    property: "Forte Tower",
    scope: "Renovation & styling",
    sourcePath: "/projects/downtown-dubai#case-studies",
    photos: [
      {
        file: "downtown-forte-01-living-dining.webp",
        alt: "Open-plan living and dining room with a sculptural chandelier and bronze-framed screen",
      },
      {
        file: "downtown-forte-02-kitchen.webp",
        alt: "Handleless galley kitchen in white with integrated black appliances",
        room: "Kitchen",
      },
      {
        file: "downtown-forte-03-living.webp",
        alt: "Living room with a curved boucle sofa and a round black coffee table",
        room: "Living room",
      },
      {
        file: "downtown-forte-04-bedroom.webp",
        alt: "Bedroom with a fluted upholstered headboard and a dropped glass pendant",
        room: "Principal bedroom",
      },
      {
        file: "downtown-forte-05-vanity.webp",
        alt: "Stone vanity with a counter-top basin and matte black wall-mounted tap",
        room: "Ensuite",
      },
      {
        file: "downtown-forte-06-shower.webp",
        alt: "Walk-in shower behind a black-framed glass screen with a lit niche",
        room: "Shower room",
      },
      {
        file: "downtown-forte-07-dressing.webp",
        alt: "Dressing nook with lit display shelving and a wall-hung desk",
        room: "Dressing nook",
      },
    ],
  },
  {
    slug: "downtown-boulevard",
    area: "downtown-dubai",
    title: "Boulevard Point apartment",
    description:
      "The renovation carries warm stone and oak through the apartment. A freestanding bath sits against a full-height stone wall, and two basins share a walnut vanity. Fluted panelling and pendant lights frame the bed in the principal bedroom.",
    property: "Boulevard Point",
    scope: "Full apartment renovation",
    sourcePath: "/projects/downtown-dubai#case-studies",
    photos: [
      {
        file: "downtown-boulevard-01-bedroom.webp",
        alt: "Principal bedroom with fluted wall panelling and pendants dropped either side of the bed",
      },
      {
        file: "downtown-boulevard-02-kitchen.webp",
        alt: "Kitchen worktop with an undermounted sink and a stone splashback",
        room: "Kitchen",
      },
      {
        file: "downtown-boulevard-03-dining.webp",
        alt: "Dining table and upholstered chairs in front of a handleless kitchen run",
        room: "Dining room",
      },
      {
        file: "downtown-boulevard-04-bath.webp",
        alt: "Freestanding oval bath against a full-height stone wall with a lit niche",
        room: "Principal bathroom",
      },
      {
        file: "downtown-boulevard-05-vanity.webp",
        alt: "Twin counter-top basins on a walnut vanity beneath two arched backlit mirrors",
        room: "Ensuite",
      },
      {
        file: "downtown-boulevard-06-shower.webp",
        alt: "Walk-in shower lined in warm stone behind a frameless glass screen",
        room: "Shower room",
      },
      {
        file: "downtown-boulevard-07-guest-bedroom.webp",
        alt: "Guest bedroom with a fluted wall panel behind an upholstered headboard",
        room: "Guest bedroom",
      },
    ],
  },
  {
    slug: "marina-paloma",
    area: "dubai-marina",
    title: "Paloma Tower apartment",
    description:
      "Halo Interiors stripped back and renovated the apartment. Herringbone oak connects the living spaces, lighting beneath the stone island picks out the kitchen, and book-matched marble lines the principal bathroom.",
    property: "Paloma Tower",
    scope: "Full apartment renovation",
    sourcePath: "/projects/marina-dubai#case-studies",
    photos: [
      {
        file: "marina-paloma-01-living.webp",
        alt: "Living room with herringbone oak floor and full-height glazing over Dubai Marina",
      },
      {
        file: "marina-paloma-02-kitchen.webp",
        alt: "Stone kitchen island lit from the plinth with integrated appliances behind",
        room: "Kitchen",
      },
      {
        file: "marina-paloma-03-dining.webp",
        alt: "Round dining table and sculptural pendant against Marina glazing",
        room: "Dining room",
      },
      {
        file: "marina-paloma-04-bedroom.webp",
        alt: "Principal bedroom with an upholstered bed and herringbone oak floor",
        room: "Principal bedroom",
      },
      {
        file: "marina-paloma-05-bathroom.webp",
        alt: "Bathroom lined in book-matched marble with a lit niche",
        room: "Principal bathroom",
      },
      {
        file: "marina-paloma-06-vanity.webp",
        alt: "Microcement vanity wall with an arc-shaped backlit mirror",
        room: "Guest bathroom",
      },
      {
        file: "marina-paloma-07-guest-bedroom.webp",
        alt: "Guest bedroom with an olive green feature wall and timber bedsides",
        room: "Guest bedroom",
      },
    ],
  },
  {
    slug: "palm-stone-and-onyx-villa",
    area: "palm-jumeirah",
    title: "Stone and onyx villa fit-out",
    description:
      "Travertine, onyx and brass carry from the entrance into the main rooms. Backlit glass cabinets sit in bronze frames, and the solid timber staircase has lighting at each riser. The photographs show the fit-out at handover.",
    property: "Palm Jumeirah",
    scope: "Turnkey fit-out",
    sourcePath: "/projects/palm-jumeirah-dubai#case-studies",
    photos: [
      {
        file: "palm-stone-and-onyx-villa-01-joinery.webp",
        alt: "Backlit onyx display joinery in bronze-framed glass beside a timber staircase in a Palm Jumeirah villa",
      },
      {
        file: "palm-stone-and-onyx-villa-02-stair.webp",
        alt: "Floating timber staircase with lit risers against a timber-panelled wall",
        room: "Staircase",
      },
      {
        file: "palm-stone-and-onyx-villa-03-brass-inlay.webp",
        alt: "Travertine feature wall with a curved brass inlay and backlit arched niche",
        room: "Entrance hall",
      },
      {
        file: "palm-stone-and-onyx-villa-04-vanity.webp",
        alt: "Green marble vanity with brass tap and a backlit round mirror",
        room: "Ensuite",
      },
      {
        file: "palm-stone-and-onyx-villa-05-marble-vanity.webp",
        alt: "Twin marble vanities under brass-framed mirrors",
        room: "Principal bathroom",
      },
      {
        file: "palm-stone-and-onyx-villa-06-onyx-shelving.webp",
        alt: "Backlit onyx panel behind slim bronze shelves",
        room: "Living room",
      },
      {
        file: "palm-stone-and-onyx-villa-07-wardrobe.webp",
        alt: "Walk-in wardrobe with bronze-tinted glass doors and internal lighting",
        room: "Dressing room",
      },
    ],
  },
  {
    slug: "palm-waterfront-villa",
    area: "palm-jumeirah",
    title: "Waterfront family villa fit-out",
    description:
      "Halo Interiors fitted the joinery, wall panelling and stone in this waterfront family home. Lit display niches frame the dining room, a marble media wall anchors the lounge, and the gym faces the water.",
    property: "Palm Jumeirah",
    scope: "Full villa fit-out",
    sourcePath: "/projects/palm-jumeirah-dubai#case-studies",
    photos: [
      {
        file: "palm-waterfront-villa-01-dining.webp",
        alt: "Dining room with a marble table between two walls of backlit display niches",
      },
      {
        file: "palm-waterfront-villa-02-kitchen.webp",
        alt: "Kitchen island with a stone top in front of a backlit display wall",
        room: "Kitchen",
      },
      {
        file: "palm-waterfront-villa-03-living.webp",
        alt: "Living room with a long sofa, backlit wall panelling and a cluster pendant",
        room: "Living room",
      },
      {
        file: "palm-waterfront-villa-04-tv-wall.webp",
        alt: "Marble media wall with a recessed television and concealed lighting",
        room: "Media room",
      },
      {
        file: "palm-waterfront-villa-05-bedroom.webp",
        alt: "Principal bedroom with a tufted headboard wall and mirrored wardrobe doors",
        room: "Principal bedroom",
      },
      {
        file: "palm-waterfront-villa-06-gym.webp",
        alt: "Home gym with full-height glazing looking out to the sea",
        room: "Gym",
      },
      {
        file: "palm-waterfront-villa-07-study.webp",
        alt: "Study with fluted timber joinery and lit display shelving",
        room: "Study",
      },
    ],
  },
  {
    slug: "meydan-polo",
    area: "meydan",
    title: "Meydan Polo Residences apartment",
    description:
      "Stone-effect porcelain, fluted cabinetry and brushed brass fittings run through the apartment. In the children’s room, Halo Interiors built a bed alcove with an upholstered back and steps integrated into the joinery.",
    property: "Meydan",
    scope: "Full apartment renovation",
    sourcePath: "/projects/damac-hills-dubai#case-studies",
    photos: [
      {
        file: "meydan-polo-01-kitchen.webp",
        alt: "Handleless kitchen in pale gloss with black built-in appliances and a window over the greens",
      },
      {
        file: "meydan-polo-02-bed-alcove.webp",
        alt: "Built-in bed nook with an upholstered velvet back panel and integrated steps",
        room: "Children’s room",
      },
      {
        file: "meydan-polo-03-vanity.webp",
        alt: "Fluted vanity unit under a backlit mirror with matte black taps",
        room: "Ensuite",
      },
      {
        file: "meydan-polo-04-bath.webp",
        alt: "Sunken bath set into a stone-effect surround beneath a backlit mirror",
        room: "Principal bathroom",
      },
      {
        file: "meydan-polo-05-fluted-joinery.webp",
        alt: "Fluted joinery door with a slim brass pull",
        room: "Joinery",
      },
      {
        file: "meydan-polo-06-shower.webp",
        alt: "Walk-in shower behind a frameless screen with brushed gold fittings",
        room: "Shower room",
      },
      {
        file: "meydan-polo-07-wardrobe.webp",
        alt: "Fluted wardrobe doors beside a lit dressing table with drawers",
        room: "Dressing area",
      },
    ],
  },
  {
    slug: "mjl-madinat",
    area: "madinat-jumeirah-living",
    location: "Madinat Jumeirah Living, Umm Suqeim",
    title: "Madinat Jumeirah Living apartment",
    description:
      "Halo Interiors renovated the kitchen, living spaces and bathrooms in this apartment. White marble and warm metal fittings carry through the wet areas, with backlit arched mirrors and a full-height walnut headboard wall in the principal bedroom.",
    property: "Madinat Jumeirah Living",
    scope: "Full apartment renovation",
    sourcePath: "/projects/jebel-ali-dubai#case-studies",
    photos: [
      {
        file: "mjl-madinat-01-living-dining.webp",
        alt: "Open-plan living and dining room with cove lighting and a balcony beyond",
      },
      {
        file: "mjl-madinat-02-kitchen.webp",
        alt: "Handleless kitchen in soft grey with a lit plinth and integrated appliances",
        room: "Kitchen",
      },
      {
        file: "mjl-madinat-03-bathroom.webp",
        alt: "Bathroom in white marble with a blue-grey marble feature panel and gold taps",
        room: "Principal bathroom",
      },
      {
        file: "mjl-madinat-04-vanity.webp",
        alt: "Marble vanity with an arched mirror backlit into the stone wall",
        room: "Ensuite",
      },
      {
        file: "mjl-madinat-05-bedroom.webp",
        alt: "Principal bedroom with a full-height walnut headboard wall",
        room: "Principal bedroom",
      },
      {
        file: "mjl-madinat-06-living.webp",
        alt: "Living room with a sectional sofa, track lighting and balcony glazing",
        room: "Living room",
      },
      {
        file: "mjl-madinat-07-dining.webp",
        alt: "Round dining table beside a pass-through opening to the kitchen",
        room: "Dining room",
      },
    ],
  },
  {
    slug: "jumeirah-islands-villa",
    area: "jumeirah-islands",
    location: "Jumeirah Islands",
    title: "Whole-villa renovation in Jumeirah Islands",
    description:
      "Halo Interiors stripped the villa back and replaced the existing services. Walnut and cane joinery run from the kitchen through the bedrooms, while green zellige tiles and travertine give the bathrooms their own finishes.",
    property: "Jumeirah Islands",
    scope: "Strip-out & rebuild",
    sourcePath: "/projects/jumeirah-golf-estates-dubai#case-studies",
    photos: [
      {
        file: "jumeirah-islands-01-kitchen.webp",
        alt: "Walnut kitchen with island and green zellige splashback in a Jumeirah Islands villa",
      },
      {
        file: "jumeirah-islands-02-zellige.webp",
        alt: "Kitchen run with handmade green zellige splashback and walnut cabinetry",
        room: "Kitchen",
      },
      {
        file: "jumeirah-islands-03-bathroom.webp",
        alt: "Family bathroom with green zellige to dado height and a walnut vanity",
        room: "Family bathroom",
      },
      {
        file: "jumeirah-islands-04-wardrobe.webp",
        alt: "Full-height walnut and cane wardrobe wall in a bedroom",
        room: "Bedroom",
      },
      {
        file: "jumeirah-islands-05-stone-basin.webp",
        alt: "Carved stone basin on a travertine shelf beneath an arched mirror",
        room: "Ensuite",
      },
      {
        file: "jumeirah-islands-06-bedroom.webp",
        alt: "Bedroom with cane screen, walnut joinery and timber flooring",
        room: "Bedroom",
      },
      {
        file: "jumeirah-islands-07-joinery.webp",
        alt: "Landing with walnut shelving and glazed walnut doors",
        room: "Landing",
      },
    ],
  },
];
