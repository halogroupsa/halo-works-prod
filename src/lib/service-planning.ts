import { wardrobeReferences } from "./wardrobe-references";

type ServicePlanning = {
  outcome: [heading: string, description: string];
  quotation: string;
  checkpoint: string;
  question: [question: string, answer: string];
  examples?: string[];
};

export const servicePlanning: Record<string, ServicePlanning> = {
  "home-renovation": {
    outcome: ["Make the rooms work together", "Plan storage, lighting and finishes across the home so decisions in one room carry through to the next."],
    quotation: "The number of rooms, retained finishes, layout changes and work to existing services shape the quotation. An occupied home can also affect how the work is phased.",
    checkpoint: "Decide which rooms must stay usable and what you want to retain before comparing layouts and quotations.",
    question: ["Can we renovate the home in stages?", "Yes, where the site and scope allow it. We check how services, deliveries and work in later rooms could affect areas finished in an earlier phase."],
    examples: ["dubai-marina-apartment-kitchen", "dubai-hills-villa-kitchen", "burj-vista-bathroom-joinery"],
  },
  "villa-renovation": {
    outcome: ["Make the villa fit your household", "Coordinate the rooms you use most with quieter areas, circulation and storage before specifying individual finishes."],
    quotation: "Affected floor area, service upgrades, structural feasibility and the standard of fittings all influence cost. Check how much existing work can be retained before setting the budget.",
    checkpoint: "Walk the indoor and outdoor routes together. Check delivery access, rooms to protect and any changes to openings early.",
    question: ["Can we keep part of the villa occupied?", "It depends on how the work can be separated. Discuss access, noise, dust protection and whether utilities or essential rooms will be interrupted."],
    examples: [
      "dubai-hills-villa-kitchen",
      "meydan-bedroom-joinery",
      "emirates-living-shaker-kitchen",
    ],
  },
  "apartment-renovation": {
    outcome: ["Get more from the existing footprint", "Review furniture clearances, storage and light before choosing where a layout change would make a noticeable difference."],
    quotation: "The extent of strip-out, retained plumbing positions, joinery and finishes affect cost. Lift bookings, permitted working hours and common-area protection can affect the programme.",
    checkpoint: "Ask building management for its contractor access, protection and working-hour requirements before scheduling deliveries.",
    question: ["What if my building limits noisy work?", "Share the building’s rules at the start. The programme can account for permitted hours and lift bookings before the work and deliveries are scheduled."],
    examples: [
      "dubai-marina-apartment-kitchen",
      "dubai-creek-harbour-galley-kitchen",
      "burj-vista-bathroom-joinery",
      "downtown-taupe-galley-kitchen",
    ],
  },
  "kitchen-renovation": {
    outcome: ["Make everyday cooking easier", "Plan the route between preparation, cooking and washing, then give frequently used items storage within reach."],
    quotation: "Cabinet construction, hardware, worktop fabrication and appliance selections affect the price. Moving the sink, hob or extraction can add specialist work and lead time.",
    checkpoint: "Confirm appliance sizes, service points and extraction before releasing cabinet drawings for manufacture.",
    question: ["Can we keep our existing appliances?", "Share the model numbers and dimensions. We’ll check the fit, ventilation and connections against the cabinet drawings and proposed layout."],
    examples: [
      "dubai-marina-apartment-kitchen",
      "dubai-hills-villa-kitchen",
      "dubai-creek-harbour-galley-kitchen",
      "downtown-taupe-galley-kitchen",
      "emirates-living-shaker-kitchen",
    ],
  },
  "bathroom-renovation": {
    outcome: ["Resolve the wet-area details early", "Plan the shower, vanity and storage together so drainage, clearances and maintenance access work with the chosen finishes."],
    quotation: "Drain positions, waterproofing preparation, tile format, sanitaryware and custom vanities affect the scope. Allow time for the required checks before covering wet-area work.",
    checkpoint: "Agree drainage falls, waterproofing interfaces and access to concealed valves before tiling.",
    question: ["Can I replace a bath with a walk-in shower?", "The drain position, available floor depth and waterproofing details need to be checked. Those constraints inform the shower layout and threshold."],
    examples: ["burj-vista-bathroom-joinery", "jumeirah-living-microcement-vanity"],
  },
  "quick-transformations": {
    outcome: ["Focus on changes you will notice daily", "Prioritise a few connected improvements and decide which existing surfaces and fittings are worth keeping."],
    quotation: "Preparation, availability of selected items and the number of trades needed determine how much can fit within the budget and target date.",
    checkpoint: "Separate the changes that have a firm deadline from items that can wait for a later phase.",
    question: ["What can keep a focused refresh manageable?", "Choose a clearly defined area and agree retained finishes, available materials and access before adding optional work."],
  },
  "interior-fit-out": {
    outcome: ["Prepare the space for the way it will operate", "Check the layout, customer or staff routes and building services together before packages are priced separately."],
    quotation: "Shell condition, partitions, ceiling and service changes, joinery and the approval route affect both cost and timing.",
    checkpoint: "Confirm the base-build information and boundaries between landlord provisions and tenant works before pricing.",
    question: ["What should I obtain from the landlord before fit-out?", "Ask for available drawings, fit-out rules, service capacities and approval requirements. These help the appointed specialists confirm what can be delivered."],
    examples: [
      "almas-boardroom-joinery",
      "glazed-office-meeting-booth",
      "office-reception-slat-wall",
      "cafe-banquette-coffee-counter",
      "mall-dessert-display-kiosk",
    ],
  },
  "office-fit-out": {
    outcome: ["Plan for how the team actually works", "Balance shared desks, focused work, meetings and visitor routes with the acoustic, power and lighting needs of each area."],
    quotation: "Desk capacity, meeting room specifications, partitions, data and HVAC changes influence price. An occupied office may need a phased programme.",
    checkpoint: "Agree headcount, meeting-room requirements and any limits on downtime before the layout is fixed.",
    question: ["Can we keep operating during the fit-out?", "Share working hours and the areas that must remain accessible. We can review sequencing, protection and any temporary changes to services with the appointed team."],
    examples: [
      "almas-boardroom-joinery",
      "nshama-reception-workspace-joinery",
      "glazed-office-meeting-booth",
      "office-reception-slat-wall",
    ],
  },
  "hospitality-interiors": {
    outcome: ["Connect the guest experience with daily operations", "Test arrival, service and staff routes alongside the finishes and lighting guests will experience."],
    quotation: "Guest and back-of-house areas, finish durability, specialist equipment and operational constraints affect the proposal and programme.",
    checkpoint: "Review guest and service routes with the operator and confirm equipment interfaces before the layouts are issued.",
    question: ["Can we refurbish part of an operating venue?", "We first review access, guest separation, working hours and service interruptions with the operator. That determines whether phased work is practical."],
    examples: ["cafe-banquette-coffee-counter"],
  },
  "retail-fit-out": {
    outcome: ["Give the product the space it needs", "Plan display, lighting, stock movement and the point of sale around the merchandise and the customer journey."],
    quotation: "Display joinery, shopfront and signage requirements, lighting, services and landlord conditions influence the cost and opening programme.",
    checkpoint: "Confirm the display inventory and landlord fit-out pack before ordering fixtures or committing to an opening date.",
    question: ["When should signage and display fittings be specified?", "Include them during layout development so power, fixing points, sightlines and landlord submission requirements can be checked together."],
    examples: ["mall-dessert-display-kiosk"],
  },
  "bespoke-joinery": {
    outcome: ["Make the fitted detail belong to the room", "Resolve alignment, clearances, material transitions and the way doors and drawers open while changes are still easy to make."],
    quotation: "Dimensions, substrates, veneers, hardware and installation access affect cost. Samples and approved shop drawings determine when fabrication can begin.",
    checkpoint: "Measure the finished opening and sign off samples and hardware before fabrication.",
    question: ["Can I approve the finish before manufacture?", "Yes. Review the agreed sample, edging and hardware alongside the shop drawings so the specification is clear before manufacture."],
    examples: [
      "meydan-bedroom-joinery",
      "almas-boardroom-joinery",
      "nshama-reception-workspace-joinery",
      "nad-al-sheba-walk-in-wardrobes",
      "city-walk-glass-and-mirrored-wardrobes",
      "jumeirah-islands-panelled-wardrobes",
    ],
  },
  "wardrobes-cabinets": {
    outcome: ["Make the inside as useful as the outside", "Design the hanging, shelves and drawers around what you store, then check door clearance against the room layout."],
    quotation: "Overall size, internal fittings, doors, hardware and finish shape the quotation. Existing wall and floor levels can affect fitting work.",
    checkpoint: "Review the storage inventory and door swing or sliding clearance before the internal layout is finalised.",
    question: ["Can fitted storage work around a sloping ceiling?", "Often it can. Accurate site dimensions, opening clearances and service access determine where shelves, drawers and full-height doors will work."],
    examples: [
      "meydan-bedroom-joinery",
      "nad-al-sheba-walk-in-wardrobes",
      ...wardrobeReferences.map(({ slug }) => slug),
    ],
  },
  "flooring-finishes": {
    outcome: ["Choose a finish that works underfoot", "Compare feel, maintenance and room use while checking transitions, skirting and door clearances."],
    quotation: "Floor area, removal, subfloor repair or levelling, material choice and transition details affect cost. Preparation and curing can affect installation dates.",
    checkpoint: "Inspect the substrate and confirm finished floor heights before ordering materials.",
    question: ["Can new flooring go over the old finish?", "It depends on the stability and moisture condition of the existing floor, the chosen system and the available height at doors and thresholds."],
  },
  painting: {
    outcome: ["Get a finish that suits the surface", "Compare samples in the room’s light and match the coating to how the area is used and cleaned."],
    quotation: "Surface condition, repairs, access, protection and the chosen coating system determine the scope. Drying time and occupied areas can affect the sequence.",
    checkpoint: "Review cracks, stains and previous coatings before agreeing preparation and approving colour samples.",
    question: ["Can we choose the colour after testing samples?", "Yes. View test patches on the intended wall in daylight and under the room’s lighting before confirming the finish."],
  },
  "interior-design": {
    outcome: ["Resolve decisions before work starts", "Use layouts, materials and coordinated drawings to check how the space will work and give specialists a clearer basis for pricing."],
    quotation: "The number of spaces, drawing detail, specialist coordination and approval requirements determine the design scope and programme.",
    checkpoint: "Agree which drawings, specifications and sample reviews the project needs before setting the design deliverables.",
    question: ["Can I start with existing plans?", "Yes. Share any drawings or measurements you have. We can review what is usable and identify where a site survey or updated information is needed."],
  },
  "project-delivery": {
    outcome: ["Keep decisions visible as the work progresses", "Agree who owns each package and keep site changes, selections and handover requirements connected to the programme."],
    quotation: "The number of work packages, project duration, procurement responsibilities and site reporting requirements shape the delivery proposal.",
    checkpoint: "Record who approves changes and how long-lead items, specialist submissions and inspections fit the programme.",
    question: ["How are changes during the work handled?", "We record the proposed change and review its effect on scope, price and timing before the varied work proceeds."],
  },
  "villa-extensions-doors": {
    outcome: ["Check feasibility before committing to an opening", "Resolve the relationship between the wall, frame, threshold and adjoining spaces before finalising door sizes or drawings."],
    quotation: "The specialist considers existing structure, opening size, frame specification, making good and required drawings or permissions. Structural feasibility affects the programme.",
    checkpoint: "Ask the appropriate specialist to identify the wall construction and affected services before specifying a widened opening.",
    question: ["What should I photograph for a door review?", "Show the opening from both sides, including the head, frame, threshold and the surrounding wall and floor."],
  },
  "swimming-pools": {
    outcome: ["Make the pool and garden work together", "Plan circulation, shade, plant access and edge finishes alongside the pool specialist’s technical brief."],
    quotation: "The pool specialist assesses access, ground conditions, pool size, equipment and existing services. Paving, drainage and shade can be priced as separate landscape packages.",
    checkpoint: "Identify the proposed equipment location and access for servicing before committing to the surrounding layout.",
    question: ["Should paving and pool works be scoped together?", "Agree the interfaces together, including levels, drainage and edge details. Record which specialist is responsible for each part."],
    examples: ["curved-pool-edge-and-coping"],
  },
  "annual-maintenance": {
    outcome: ["Compare maintenance proposals on the same basis", "Use one equipment and coverage list so differences in visits, call-outs, parts and exclusions are easy to spot."],
    quotation: "Providers price against the systems covered, frequency of visits, call-out arrangements and what labour or parts are included. Ask when coverage starts and what the first visit includes.",
    checkpoint: "Separate building-managed equipment from items you maintain, and share existing service records with providers.",
    question: ["What records are useful when comparing providers?", "Collect equipment model numbers, warranties, past service reports and a list of recurring issues so providers can price against the same information."],
  },
  "ac-installation": {
    outcome: ["Coordinate cooling before ceilings close", "Check how the HVAC proposal meets the room layout, grilles, power, drainage and future service access."],
    quotation: "The HVAC specialist assesses equipment, capacity, duct routes, power and drainage requirements. Equipment lead times and ceiling work can affect the programme.",
    checkpoint: "Review access for installation and maintenance alongside the proposed grille positions and ceiling details.",
    question: ["When should the AC work be checked against the fit-out?", "Before ceilings and joinery are fixed. That gives the appointed specialists time to resolve ducts, grilles, condensate routes and access panels."],
  },
  landscaping: {
    outcome: ["Plan the garden around the hours you use it", "Match paving, shade, planting and lighting to the places where you want to sit, move and spend time."],
    quotation: "Area, ground preparation, what can stay, outdoor materials and specialist work affect the cost. Irrigation, lighting and drainage are checked before finishes are ordered.",
    checkpoint: "Walk the site to check sun, shade, thresholds, deliveries and drainage before agreeing levels and finishes.",
    question: ["Can landscaping be planned alongside a villa renovation?", "Yes. Include adjoining doors, thresholds and access routes in the brief so indoor and outdoor work can be sequenced together."],
    examples: ["shaded-dining-terrace", "curved-pool-edge-and-coping"],
  },
};
