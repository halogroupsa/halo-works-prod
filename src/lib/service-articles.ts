import { haloWorksBudgetBand } from "./project-budget";

export type Article = {
  slug: string;
  title: string;
  category: string;
  image: string;
  imageAlt?: string;
  publishedAt?: string;
  excerpt: string;
  sections: readonly (readonly [heading: string, body: string])[];
  serviceSlugs: readonly [primary: string, ...related: string[]];
  sources?: readonly { label: string; href: string }[];
};

const communityRules = {
  label: "Emaar Community Management home modification FAQs",
  href: "https://www.emaar.com/en/faq",
};
const fitOutPermit = {
  label: "Dubai Development Authority fit-out permit",
  href: "https://dda.gov.ae/planning-development/construction/permits-nocs/fit-out-permit",
};
const maintenanceGuide = {
  label: "Emaar Community Management home maintenance guide",
  href: "https://www.ecm.ae/wp-content/uploads/2024/11/Property-Maintenance-new.pdf",
};

export const serviceArticles: Article[] = [
  {
    slug: "office-meeting-pod-checklist-dubai",
    publishedAt: "2026-11-27",
    title: "What to check before adding a meeting pod to a Dubai office",
    category: "Commercial fit-out",
    image: "project-references/office-glazed-meeting-booth",
    imageAlt: "Glazed office meeting booth with upholstered chairs",
    excerpt: "Check placement, delivery access, ventilation, power and acoustic expectations before ordering an office meeting pod in Dubai.",
    serviceSlugs: ["office-fit-out", "interior-fit-out"],
    sources: [{ label: "Dubai Development Authority fit-out permit guidance", href: "https://dda.gov.ae/en/planning-development/construction/permits-nocs/fit-out-permit" }],
    sections: [
      [
        "Start with the conversation the pod will host",
        "Before buying a meeting pod, agree who will use it, how many people need to fit and how private the conversation should be. A place for short video calls has different needs from a room for two people reviewing a confidential contract. Ask the supplier what its acoustic test measured and how the installed pod will ventilate.",
      ],
      [
        "Mark the occupied footprint on the office plan",
        "Show the door swing, the access needed for assembly and the space needed for servicing. Walk the nearby route when the pod door is open. Give facilities the pod dimensions and proposed position so it can review circulation and any effects on building services, including the existing fire and life safety layout.",
      ],
      [
        "Check what the proposal needs from the building",
        "Ask what power and data connections the model requires and how the components will reach the office. Have the landlord or building manager and appointed fit-out team confirm the review or approval route before ordering. Record which changes the fit-out team will price and which tasks the supplier covers.",
      ],
      [
        "Agree on a handover check",
        "At the briefing, send the pod specification, the proposed location and photos of the approach to the room. Ask the team to include assembly access, commissioning and the person responsible for confirming the pod is ready to use. Sit inside during the handover and try a call with the door closed and the ventilation running.",
      ],
    ],
  },
  {
    slug: "occupied-commercial-fit-out-tenant-access-dubai",
    publishedAt: "2026-11-26",
    title: "Planning fit-out work around a tenant who needs to stay operational",
    category: "Commercial fit-out",
    image: "workplace",
    excerpt: "Plan an occupied commercial fit-out in Dubai with agreed tenant access, shutdown windows and a clear process for reopening each area.",
    serviceSlugs: ["interior-fit-out", "office-fit-out", "project-delivery"],
    sources: [{
      label: "Dubai Development Authority fit-out permit",
      href: "https://dda.gov.ae/en/planning-development/construction/permits-nocs/fit-out-permit",
    }],
    sections: [
      [
        "Walk the site with the tenant before you set the dates",
        "Plan an occupied fit-out by dividing the work into areas the tenant can give up in turn. Agree which access routes must stay open, when noisy work or service interruptions can happen, and who signs off each area before reopening. In a showroom that opens at nine, walk the customer route and the delivery route to the service lift with the tenant and building manager. Where they cross, agree a delivery window and name the person who will meet the crew.",
      ],
      [
        "Agree which interruptions the tenant can absorb",
        "For the showroom, the first phase could keep the desk in use while materials come in through a booked service lift slot. Plan the reception work for an agreed closing window only after the building manager signs off the access plan. Release the reception back to the tenant before moving to the corridor. Put deliveries, noisy work and any service interruption on the same schedule, with a start time, an expected return time and the person who confirms that the service is back.",
      ],
      [
        "Get permissions and a workable access plan together",
        "Have the appointed team check the building’s work rules, permit route and access requirements before the first phase is booked. Where DDA is the relevant authority, it has a fit-out permit service for applicable commercial spaces. Ask building management how it will review site separation and circulation during each phase. If the team cannot maintain the agreed routes, revisit the sequence or arrange a temporary closure for that part of the work.",
      ],
      [
        "Give each party a reason to pause the work",
        "Agree one point of contact each for the tenant, building management and contractor. Decide who can call a pause if a delivery blocks the agreed route, an outage runs over or the work area affects customers. Record who has to agree to the revised plan, then tell the people due on site before they set off.",
      ],
      [
        "Agree who releases a space back to the tenant",
        "Put time in the programme for a joint walk-through ahead of reopening. Ask the responsible trades and facilities team to confirm the agreed checks for services, access and cleaning, and record any outstanding items. Bring the tenancy layout, operating hours and likely interruption windows to the fit-out briefing so they can be planned into the quote.",
      ],
    ],
  },
  {
    slug: "move-in-refresh-service-lift-bookings-dubai",
    publishedAt: "2026-11-25",
    title: "Planning a 2027 move-in refresh with only two lift bookings",
    category: "Renovation",
    image: "scope-protection-natural",
    imageAlt: "Worker protecting timber flooring before a home refresh",
    excerpt: "Use two service lift bookings to plan a Dubai apartment refresh, from the contractor’s first load to moving in after the work is ready.",
    serviceSlugs: ["quick-transformations","apartment-renovation","painting"],
    sources: [
      {"label":"Emaar South move-in permit guidance","href":"https://www.ecm.ae/en/communities/emaar-south/lifestyle/faqs/moving-in-emaar-south/"},
    ],
    sections: [
      [
        "Confirm what each booking allows",
        "Ask building management whether building access, a move-in permit and a service lift reservation are separate for your apartment. Emaar South, for example, has its own move-in permit process. Confirm which slot can be used by contractors, how they can remove waste and whether the move-in slot can be shared by more than one company. Ask for the permitted loading route, time window, lift size and protection requirements in writing.",
      ],
      [
        "Use the first slot to get the work started",
        "List what needs the lift and give the contractor the packed sizes and quantities before the booking. A small wall refresh might only need protection, paint and tools. Changes that need bulky flooring, joinery or large waste loads may need another access plan. For each load, give the supplier a person to call from the loading bay and enough time to move through security. Agree where materials can go without blocking access or covering surfaces the contractor needs to inspect.",
      ],
      [
        "Give the flat a handover of its own",
        "Between bookings, schedule a walkthrough and a clean before the movers arrive. Ask the contractor when the specified finishes are ready for normal use and when furniture can go against new paint or onto renewed flooring. Check the areas the sofa, bed or wardrobe will cover while they are still visible. If something is unfinished, identify one safe drop zone for boxes and make sure the delivery crew knows how to reach it.",
      ],
      [
        "Use the second slot for the move",
        "Send the mover a short unload order. Bring in the large items that need the clear route first, then bring boxes that can go straight into their rooms. Keep traffic away from any work that is still drying. If a replacement door frame or built-in unit needs its own crew, agree a different delivery plan before counting it in the same window. Give the people at the loading bay and inside the flat the same list.",
      ],
      [
        "Decide in advance what can wait",
        "A late material or shorter slot should trigger a decision. List the work that must be ready before sleeping in the apartment and the items you can finish after moving. That could mean completing the bedroom walls and leaving a replacement cabinet front until its hardware arrives. If you are briefing Halo Works, send the building’s written rules, both booking windows and the rooms that need to be usable on move-in day.",
      ],
    ],
  },
  {
    slug: "where-to-start-home-renovation",
    title: "Renovating more than one room? Start here",
    category: "Renovation",
    image: "living-natural",
    imageAlt: "Living room with fitted timber shelves and glazed doors facing a garden",
    excerpt: "Decide what to keep, what to do first and which rooms can stay usable while the work goes on.",
    serviceSlugs: ["home-renovation", "villa-renovation", "apartment-renovation"],
    sections: [
      [
        "Take a lap around the house",
        "Go from the front door to the room you use most and notice what you do along the way. Where do bags land? Which switch do you reach for in the dark? Then do the same at the time of day the house is busiest. Those observations make a useful starting brief because you can tell a designer exactly what you would like to do differently.",
      ],
      [
        "Decide what earns its place",
        "Walk through with three lists of things to keep, repair and replace. A floor you still like can stay if its condition and the new layout allow it. Put the kitchen units you are unsure about on the inspection list. Ask the surveyor to check condition and service routes before you spend money on drawings that assume everything comes out.",
      ],
      [
        "Plan around one ordinary weekday",
        "If you want to stay at home, work through breakfast, showers, calls and bedtime with the contractor. Agree which routes stay open, when water or power may be interrupted and which room stays usable. A sequence that looks fine on paper can fall apart if the only working bathroom is across the work zone.",
      ],
      [
        "Ask for a price you can trim",
        "Ask for the base scope and optional upgrades to be priced separately. You might keep the bedroom floor and spend the difference on kitchen storage you use every day. Before splitting the work into phases, check whether wiring, flooring levels or deliveries for the later rooms would disturb the rooms you finish first.",
      ],
    ],
  },
  {
    slug: "villa-renovation-budget-and-phasing",
    title: "How to set a villa renovation budget room by room",
    category: "Renovation",
    image: "hero-natural",
    imageAlt: "Villa exterior with timber screens, glazed doors and a swimming pool",
    excerpt: "A practical way to separate essentials from upgrades and find the decisions that can push a villa quote up.",
    serviceSlugs: ["villa-renovation", "home-renovation", "villa-extensions-doors"],
    sources: [communityRules],
    sections: [
      [
        "Write down what each room needs",
        `Halo Works plans projects in the ${haloWorksBudgetBand} range. To see what fits your budget, write down what has to work better in each room, what stays and which finish you would happily change if the numbers come back high. Give repairs, everyday improvements and optional upgrades their own lines so you can discuss trade-offs against a measured scope.`,
      ],
      [
        "Give shared work its own line",
        "A lighting circuit, a floor that runs through several rooms and an AC route can each cross the boundaries on your list. Ask the team to show the shared work separately. If a price includes floor replacement in the living room but stops at the corridor, you can then see where the transition and making good sit in the quote.",
      ],
      [
        "Find the items that need a decision early",
        "A bigger garden opening, altered exterior or fixed shade can bring specialist drawings and community review into the plan. Get the rules for your community and have the proposed changes assessed before you price them as definite work. Emaar’s home modification FAQs illustrate why the exact scope matters when checking what approvals and access arrangements apply.",
      ],
      [
        "Read the allowances before you sign",
        "Look for allowances on tile, sanitaryware, hardware and appliances. Ask what happens if you choose something above the allowance or if strip-out exposes a repair. Agree who can approve an extra and how it is recorded. Keep money for things the site survey cannot confirm, and choose the upgrades you would drop first if that money is needed.",
      ],
    ],
  },
  {
    slug: "apartment-renovation-building-checklist-dubai",
    title: "Renovating a Dubai apartment? Call building management first",
    category: "Renovation",
    image: "living",
    imageAlt: "Apartment living room with a fitted shelving wall",
    excerpt: "Ask about approvals, lift bookings and shared services before you fix the start date or order anything bulky.",
    serviceSlugs: ["apartment-renovation", "home-renovation", "flooring-finishes"],
    sources: [communityRules],
    sections: [
      [
        "Send a real scope with your first email",
        "Tell management the unit number and list what you plan to remove, move and keep. “Replace kitchen fronts, keep the sink” gives them a better basis to respond than “renovate kitchen.” Ask which forms, drawings and contractor documents apply, who approves them and how your contractor books access once permission is in place.",
      ],
      [
        "Check the route from the truck to the flat",
        "Get the service-lift dimensions and ask about booking windows, parking, protection for common areas and waste removal. Measure the tight turns as well as the lift door. A stone worktop may need to be delivered in sections even though it fits perfectly on the plan. Agree who pays for protection or deposits if the building requires them.",
      ],
      [
        "Put shared services on the survey list",
        "Before moving a bathroom or putting new lights and cabinetry into a ceiling, ask the specialists to identify what connects to shared building systems. Keep required inspection points accessible. If part of the design depends on changing a service, ask what the plan would look like with that service left in place.",
      ],
      [
        "Keep access and work dates separate",
        "The date the team can start removing finishes depends on more than its availability. Put approvals, access bookings, noisy-work hours and long-lead deliveries on the same calendar. If you are moving in, agree which parts have to be usable and which can be finished later. Check these points before handing in notice on another flat.",
      ],
    ],
  },
  {
    slug: "kitchen-renovation-keep-or-replace-cabinets",
    title: "New kitchen or new cabinet fronts? How to decide",
    category: "Renovation",
    image: "kitchen-natural",
    imageAlt: "Fitted kitchen with an island and timber cabinets",
    excerpt: "Check the cabinet boxes, layout and appliances before paying for a full kitchen replacement.",
    serviceSlugs: ["kitchen-renovation", "bespoke-joinery", "home-renovation", "bathroom-renovation"],
    sections: [
      [
        "Open the doors before you open a catalogue",
        "Empty the unit under the sink and look for swollen edges, staining or doors that will no longer line up. Pull out the heaviest drawer and see how it runs. If the boxes are sound and you like where everything sits, ask for a refresh option. Have the joiner check whether the new fronts and hinges suit the existing units.",
      ],
      [
        "Price the layout before falling for the island",
        "Put the fridge, sink, hob and bins on a sketch, then draw the doors open. Could someone get past while the dishwasher is being unloaded? If an island needs power, plumbing or extraction, have the route checked and priced separately. An island for serving and storage may solve your problem while keeping services where they are.",
      ],
      [
        "Bring model numbers to the design meeting",
        "A fridge that fits the width on paper can still need room for its door to open fully. Confirm the appliance specifications, ventilation and service access with the designer before ordering the cabinets. Ask who supplies the sink and taps, who makes the cut-outs and when the fitted cabinets will be ready for the worktop measurement.",
      ],
      [
        "Compare the things missing from the quote",
        "Check whether removal, disposal, wall repairs, splashback, lighting, connections and appliance fitting are included. Ask for hardware and cabinet interiors to be named. If you are choosing between a refresh and a full replacement, ask for both prices to describe the kitchen you get at the end, down to the last connection.",
      ],
    ],
  },
  {
    slug: "bathroom-renovation-waterproofing-checklist",
    title: "What to check before your bathroom gets tiled",
    category: "Renovation",
    image: "scope-bathroom-natural",
    imageAlt: "Stone bathroom vanity with a metal tap and green wall tiles",
    excerpt: "Agree how drainage, waterproofing and concealed fittings will be checked while you can still see them.",
    serviceSlugs: ["bathroom-renovation", "apartment-renovation", "flooring-finishes", "home-renovation"],
    sections: [
      [
        "Start with the puddle you already know about",
        "Show the team where water collects, where the grout discolours or where a smell appears after a shower. Those clues help them decide what to inspect. If you want a walk-in shower or a relocated drain, ask the specialist to confirm the available floor depth and the connection route before choosing a tray or ordering tile.",
      ],
      [
        "Agree the inspection while the floor is open",
        "Ask what waterproofing system the installer intends to use, who is responsible for the corners and pipe penetrations, and what checks the system and building require. Make those checks a written step before tiles go down. Ask for photos of the concealed work and the result of any agreed tests to keep with the handover records.",
      ],
      [
        "Check the small parts you will have to reach later",
        "Ask how you would reach a concealed cistern, shut-off valve or fan after the walls are finished. Then take the chosen tile sizes and vanity dimensions back to the plan. A small change to a mirror, niche or screen position now can avoid awkward cuts or a handle that clashes with the shower door later.",
      ],
      [
        "Try the bathroom before calling it finished",
        "Run the shower and basin, watch how water leaves the floor and open the vanity drawers with the bathroom door in its usual position. Check the fan, sealant and fittings with the installer present. If this is the household’s only bathroom, arrange an alternative before strip-out and ask when the room can actually be used again.",
      ],
    ],
  },
  {
    slug: "quick-home-refresh-before-move-in",
    title: "What can you realistically refresh before move-in?",
    category: "Renovation",
    image: "scope-protection-natural",
    imageAlt: "Worker taping protective paper over a timber floor at a doorway",
    excerpt: "A short move-in window works best when you prioritise available finishes, targeted repairs and a proper clean.",
    serviceSlugs: ["quick-transformations", "painting", "apartment-renovation", "flooring-finishes"],
    sections: [
      [
        "Start with the keys and the furniture date",
        "Write down the first day you can get contractors in and the day your furniture arrives. Take out any days the building restricts work and leave time for cleaning and touch-ups. If you only have a narrow window, make one room genuinely ready instead of leaving a little work unfinished in every room.",
      ],
      [
        "Walk the flat with two lists",
        "The first list covers the work that makes the place feel ready, such as patching damaged walls, repainting marked rooms or replacing worn handles. The second is anything that depends on investigating a leak, changing a layout or waiting for made-to-measure parts. Price and schedule that work separately so the simple jobs can go ahead.",
      ],
      [
        "Pick finishes you can check in person",
        "Ask the supplier to confirm that the quantity and batch you need are available before you build a programme around a sample. Try the paint against the flooring in the actual room. Agree how the contractor will protect the rooms you are keeping and who puts back switches, curtains or fittings taken down for the work.",
      ],
      [
        "Have a plan if something is still drying",
        "Ask when each finish can take foot traffic, furniture or cleaning under its installation instructions. Decide where the movers can put boxes if a room is still off limits. Keep a short list of repairs to walk through with the contractor before you bring in the sofa and cover the areas you need to inspect.",
      ],
    ],
  },
  {
    slug: "shell-and-core-vs-fitted-space-dubai",
    title: "Shell and core or already fitted? Compare the real cost",
    category: "Commercial fit-out",
    image: "workplace",
    imageAlt: "Commercial reception with a curved stone desk and timber detailing",
    excerpt: "Two units with similar rent can need very different work. Here is what to ask for before choosing one.",
    serviceSlugs: ["interior-fit-out", "office-fit-out", "retail-fit-out", "hospitality-interiors", "project-delivery"],
    sources: [fitOutPermit],
    sections: [
      [
        "Ask what the landlord is actually handing over",
        "One agent’s “fitted” can mean carpet, a ceiling and a few lights. Another unit may already have meeting rooms and usable services. Ask for a written handover list and any available drawings, then have the fit-out team compare them with what is on site. Mark the items you can reuse, the ones you must test and what needs removing.",
      ],
      [
        "Take your intended layout to the first inspection",
        "Show where you want enclosed rooms, specialist equipment or a busy reception. Ask the relevant specialists to check whether cooling, electrical capacity, fire systems and drainage can support the plan. A good-looking ceiling may have to come down if the proposed partitions or services cannot work with it.",
      ],
      [
        "Put the handover requirements on the calendar",
        "Find out which submissions, access arrangements, inspections and completion records apply to the address. Dubai Development Authority, for example, has a fit-out permit and completion route for properties under its remit. Ask the building team who will confirm your route and who has to lodge each submission.",
      ],
      [
        "Compare the cost of reaching opening day",
        "Ask for comparable scopes for both spaces. Include any strip-out, new services, fabrication, testing and the time you will pay rent before the space can operate. A fitted unit can be a good choice when what is already installed suits your needs. The value disappears quickly if you have to pull most of it out.",
      ],
    ],
  },
  {
    slug: "office-fit-out-while-team-is-working",
    title: "Can you fit out an office while the team is still working?",
    category: "Commercial fit-out",
    image: "scope-office-natural",
    imageAlt: "Office meeting room with glazed partitions and fitted lighting",
    excerpt: "Plan desks, IT cutovers, noisy work and temporary meeting space before agreeing to a phased office fit-out.",
    serviceSlugs: ["office-fit-out", "interior-fit-out", "project-delivery", "ac-installation"],
    sources: [fitOutPermit],
    sections: [
      [
        "Count how many desks the team needs",
        "Ask each team how many desks they actually need on the busiest day and which functions cannot move. A reception desk, a server cupboard and a quiet place for calls may matter more than a few spare workstations. Put those needs on the plan and ask where they will sit during each phase.",
      ],
      [
        "Give IT its own move plan",
        "A temporary desk still needs power and a usable network. Ask IT to list what must stay connected, when services can switch over and who will test them. Schedule a check of Wi-Fi, door access and meeting-room equipment with time to recover before people are expected back at their desks.",
      ],
      [
        "Get the building constraints in writing",
        "Ask facilities management about permitted hours, access and how work areas will be separated. Confirm the approval route for partitions, services or other changes before dates are promised. Where Dubai Development Authority is the relevant authority, its fit-out permit page is a starting point. Have the team check what applies to the work you are proposing.",
      ],
      [
        "Define what ready means for each phase",
        "Walk the phase before the team returns. Test doors, lights, cooling, data and the equipment people will actually use, and give each outstanding item an owner. If there is nowhere for the team to work safely during noisy or disruptive stages, compare a short temporary move with the cost and complexity of staying put.",
      ],
    ],
  },
  {
    slug: "cafe-restaurant-fit-out-before-signing-lease",
    title: "Opening a café in Dubai? What to check before signing",
    category: "Commercial fit-out",
    image: "hospitality-natural",
    imageAlt: "Restaurant dining space with timber finishes and warm lighting",
    excerpt: "Take the menu and equipment list to the first site visit, and find out what the unit can support.",
    serviceSlugs: ["hospitality-interiors", "interior-fit-out", "retail-fit-out", "project-delivery"],
    sources: [
      {
        label: "Dubai Municipality guidance for food establishments",
        href: "https://www.dm.gov.ae/municipality-business/food-traders-establishments/",
      },
      fitOutPermit,
    ],
    sections: [
      [
        "Take the busiest order through the room",
        "Picture a Saturday rush. Where does someone order, where does the barista work, and where do delivery riders wait? Sketch the route of a tray, a food delivery and the rubbish. If those routes cross at one narrow door, change the plan on paper while the decision is still cheap.",
      ],
      [
        "Let the menu decide what the unit needs",
        "Coffee and delivered pastries use a space differently from a menu that needs cooking, washing and more cold storage. Share the equipment schedule with a qualified specialist and ask them to check power, water, drainage, extraction and maintenance access. Ask the landlord what routes and connection points they will allow before assuming the unit can support the menu.",
      ],
      [
        "Find the review route before paying for fabrication",
        "Ask for the landlord’s fit-out pack and have your appointed team confirm which building and food-establishment reviews apply to your activity and address. Dubai Municipality publishes food-establishment guidance worth sharing with your designer. Agree who submits what and when you need a decision before committing to counters or equipment.",
      ],
      [
        "Leave a rehearsal between handover and opening",
        "Walk the space as a shift team. Fill the ice bin, run a mock order, collect a tray and clean down the counter. Make time for testing, training and any required closeout before advertising a date. These tasks are easier to schedule when they are treated as part of opening rather than a favour after the fit-out ends.",
      ],
    ],
  },
  {
    slug: "retail-fit-out-landlord-pack-checklist",
    title: "What to ask the landlord before designing your shop",
    category: "Commercial fit-out",
    image: "scope-retail",
    imageAlt: "Timber shelving and stone display plinths in a shop",
    excerpt: "A shopfront, sign or display can look right in a drawing and still miss the building’s requirements.",
    serviceSlugs: ["retail-fit-out", "interior-fit-out", "hospitality-interiors"],
    sources: [
      {
        label: "Central Park Towers retail fit-out manual",
        href: "https://www.centralparktowers.ae/wp-content/uploads/2024/01/Retail-Fitout-Manual_new.pdf",
      },
    ],
    sections: [
      [
        "Request the fit-out pack and a current plan",
        "Find out where the shopfront line is, how signs may be fixed, and which landlord finishes need to remain. Ask about loading, work hours and the steps for opening. Central Park Towers publishes an example of a landlord manual. Get your own building’s current pack, since its rules and approval sequence may differ.",
      ],
      [
        "Plan around a delivery as well as a sale",
        "Take the largest carton you expect to receive and follow its route from the loading bay to the shelf. Think about who will restock while customers are in the store. On the sales floor, draw out a queue and mark the return point, card terminal and wrapping station. Give the busy spots enough room before the fixtures are made.",
      ],
      [
        "Decide what comes from the brand and what is made locally",
        "Draw up a list of supplied fixtures, items the contractor makes and equipment that needs a connection or bracket. Include lead times, final site measurements and who checks each piece on delivery. Confirm the light and power positions with the display team before walls and counters close.",
      ],
      [
        "Ask who releases the shop to trade",
        "Agree which inspections, records and sign-offs have to happen after installation. Put them on the same schedule as merchandising, staff training and stock delivery. If the landlord comments on a shopfront detail, you want to see which order is affected and who can approve a revision without losing the rest of the programme.",
      ],
    ],
  },
  {
    slug: "how-to-compare-bespoke-joinery-quotes",
    title: "Why two bespoke joinery quotes can be so different",
    category: "Materials",
    image: "scope-joinery-natural",
    imageAlt: "Joiner checking the fit of a timber drawer",
    excerpt: "Compare what goes inside the cabinet, what the installer will do on site and what happens after fitting.",
    serviceSlugs: ["bespoke-joinery", "wardrobes-cabinets", "kitchen-renovation", "interior-design"],
    sections: [
      [
        "Ask for a drawing that opens the doors",
        "An elevation shows what a cabinet looks like from across the room. Ask for another view that shows what is inside, including fixed and adjustable shelves, drawer sizes and any cables or pipework that have to pass through. A low quote for the outside of a unit is hard to compare with a price that includes fitted interiors.",
      ],
      [
        "Get specific about the parts you touch",
        "Check the finish on the door face, the edge you will grab, the material on the inside and the hardware that carries the weight. Try a drawer with something in it. If two quotes both say “soft close,” ask for the proposed hinge or runner and whether the same specification applies to every unit.",
      ],
      [
        "Ask what happens at an uneven wall",
        "Bring the joiner to site before manufacture. Ask how the cabinet meets the skirting, floor and ceiling, and how the fitters will deal with walls that are out of line. If the unit contains lighting, a tap or an appliance, agree who provides the connection and who makes good after installation.",
      ],
      [
        "Compare the installed result",
        "Ask each supplier to price the same drawings, finishes and fittings. Check what they include for delivery and installation, then compare the exclusions. Request a sample of the actual finish, then confirm when you will sign it off. At handover, open every drawer, switch on the lighting and ask who to call if a door needs adjustment.",
      ],
    ],
  },
  {
    slug: "fitted-wardrobe-layout-drawers-and-doors",
    title: "Design a fitted wardrobe around what you actually own",
    category: "Materials",
    image: "about-craft",
    imageAlt: "Specialist checking the alignment of built-in cabinet doors",
    excerpt: "Measure the things going inside first. Then settle the door style, drawers, lighting and clearances.",
    serviceSlugs: ["wardrobes-cabinets", "bespoke-joinery", "interior-design", "apartment-renovation"],
    sections: [
      [
        "Count the things that need a home",
        "Pick five items that are awkward to put away now. Maybe it is a suitcase, a long dress, a stack of folded linen and two pairs of boots. Measure those first. Then look at how many clothes you hang and how often you use each group. This gives the joiner a more useful brief than a photograph of somebody else’s wardrobe.",
      ],
      [
        "Try the doors and drawers on the floor plan",
        "Mark the position of the bed and any bedside furniture. Draw the swing of a hinged door and the full depth of a drawer when it is open. Sliding doors can help in a tight room, but check which sections can be reached at the same time. Make sure a drawer can clear the door where the panels overlap.",
      ],
      [
        "Make room for the awkward bits",
        "Show the surveyor the skirting, switches, sockets, ceiling steps and any access hatch. If you want integrated lighting, decide where it turns on and where its power supply can be reached later. Ask for an internal elevation with dimensions you can check against your belongings before the cabinet is ordered.",
      ],
      [
        "Put the useful storage within reach",
        "Keep everyday clothes and shoes where they are easy to see. Use higher shelves for things you take down a few times a year. If your storage needs are likely to change, ask which shelves and rails can be moved later. Check one sample of the door and handle in the bedroom’s evening light before you sign off the finish.",
      ],
    ],
  },
  {
    slug: "can-you-lay-new-flooring-over-tiles",
    title: "Can you put new flooring over old tiles?",
    category: "Materials",
    image: "scope-protection",
    imageAlt: "Installer taping floor protection beside an existing doorway",
    excerpt: "Check the old floor, door clearance and the installation instructions before choosing an overlay.",
    serviceSlugs: ["flooring-finishes", "bathroom-renovation", "painting", "quick-transformations"],
    sections: [
      [
        "Find out what the old floor is telling you",
        "Point out cracked grout, loose tiles, damp patches and places that feel uneven underfoot. Ask the installer to assess the substrate and explain which problems can be prepared for an overlay and which need investigating first. Covering a damp or moving floor can hide the symptom while leaving the reason for it in place.",
      ],
      [
        "Measure the finished height at every edge",
        "Take the total thickness of the proposed system, including any underlay or preparation layers, to the doors and transitions. Check the balcony threshold, adjacent bathroom and the space under a dishwasher or fitted wardrobe. A sample held on top of a tile gives a rough idea. The installer should confirm the finished levels before you order.",
      ],
      [
        "Ask for the installation instructions",
        "Show the installer the product name and installation sheet. Ask what the manufacturer permits over tile and what it requires for flatness, moisture and expansion. If the plan involves a wet room, agree the drainage and waterproofing implications separately with the relevant specialist.",
      ],
      [
        "Compare both routes with the same finish",
        "Ask for overlay and removal prices with preparation, trims, skirting, disposal and any door adjustments shown separately. Check how long each route leaves the room out of use and when furniture can go back. You can then decide whether keeping the tiles saves meaningful time or moves the cost to another part of the work.",
      ],
    ],
  },
  {
    slug: "painting-preparation-and-colour-samples",
    title: "Repainting a room? Look at the wall before choosing the colour",
    category: "Materials",
    image: "detail",
    imageAlt: "A textured interior wall beside a pale stone plinth",
    excerpt: "Work out why the old finish is failing, then test paint where the room is brightest and darkest.",
    serviceSlugs: ["painting", "quick-transformations", "flooring-finishes"],
    sections: [
      [
        "Photograph the places that keep marking up",
        "A rubbed patch beside a dining chair needs a different conversation from a stain that comes back after every shower. Show the painter where the finish is peeling, where cracks return and when stains appeared. If a leak or movement is suspected, arrange the appropriate inspection before paying to repaint the area.",
      ],
      [
        "Put two samples on the actual wall",
        "Paint a test patch near the window and another on the wall you see when you walk in. Look at both in daylight and with the lights you normally use at night. Keep a piece of the flooring or curtain nearby. A white that looks clean on a small card can look cold next to warm timber across an entire room.",
      ],
      [
        "Ask what the preparation price covers",
        "Get repairs, sanding, sealing or priming and the proposed coating system described in the quote. Check whether ceilings, doors, skirting and touch-ups are included. In an occupied home, agree who moves furniture and which rooms will be clear for how long, including time for ventilation and drying under the product instructions.",
      ],
      [
        "Keep a record for the next touch-up",
        "Before the furniture goes back, check the finish in the light the room normally gets. Look around sockets, corners and the line where the walls meet the ceiling. Keep the paint name, colour code, sheen and room list. A labelled leftover tin is much easier to identify later than a row of nearly identical whites.",
      ],
    ],
  },
  {
    slug: "interior-design-drawings-before-construction",
    title: "Which interior design drawings do you need before work starts?",
    category: "Planning",
    image: "scope-planning",
    imageAlt: "Interior material samples laid out over drawings",
    excerpt: "Use the layout, finish schedule and service drawings to settle the details that a render leaves open.",
    serviceSlugs: ["interior-design", "bespoke-joinery", "project-delivery", "interior-fit-out", "wardrobes-cabinets"],
    sections: [
      [
        "Start with what you need to decide",
        "A rendered room helps you see how the finishes work together. For pricing, the team also needs to know which walls and fittings stay, how large the furniture is and where doors open. Ask for a measured plan you can walk through with the designer and note the spots that need checking on site.",
      ],
      [
        "Take the room through an evening",
        "Imagine coming home, cooking, turning on a reading light and plugging in a charger. Mark each switch and socket you reach for. Ask the designer and relevant specialists to coordinate these points with joinery, ceiling details and cooling. It is much easier to move a socket on a drawing than to relocate it behind a fitted cabinet.",
      ],
      [
        "Ask who draws the pieces that get made",
        "Clarify who produces the measured joinery and installation drawings, who checks them against the design and who signs off samples. For each quoted finish, record the chosen material and the alternative if it becomes unavailable. Keep the revision dates visible so a supplier can tell which drawing is current.",
      ],
      [
        "Check what the design appointment includes",
        "Ask which rooms, drawing stages, revision rounds, site visits and specialist coordination are in the proposal. Confirm who handles any approval drawings or technical design that sits outside it. You should know what information goes to contractors for a quote and what still needs to be decided before anyone starts on site.",
      ],
    ],
  },
  {
    slug: "renovation-change-orders-and-snagging",
    title: "How to handle renovation extras and snagging without losing track",
    category: "Planning",
    image: "process-hero",
    imageAlt: "Drawings and tools set out on a fit-out workbench",
    excerpt: "Use a simple record to keep site discoveries, cost changes and handover items from getting buried in messages.",
    serviceSlugs: ["project-delivery", "office-fit-out", "villa-renovation", "interior-design"],
    sections: [
      [
        "Agree what counts as a change before site starts",
        "A change can be your decision to add a cupboard or a repair discovered once a wall is opened. Keep the original quotation and drawings together so the team can show what is different. Give one person the job of approving changes, and tell the team what to do if that person cannot be reached.",
      ],
      [
        "Ask for three things before saying yes",
        "What changes on site, what does it cost, and does it move another date? Get the answer and your approval in the same place. If a sink change also delays the worktop template, put the revised date in the programme. That saves the plumber and cabinet fitter from working to two different versions of the job.",
      ],
      [
        "Walk the rooms with the list open",
        "Describe each item by room, location and what needs to happen. “Adjust left vanity drawer so it clears the door” is more useful than “fix bathroom.” Add a photo where it helps, agree who owns the item and set a date to recheck it. Keep safety and operating issues visible ahead of cosmetic touch-ups.",
      ],
      [
        "Collect what you will need once the team leaves",
        "Ask for the relevant care instructions, warranties, test records and drawings showing installed work. Find out how to reach the people who look after different packages. Keep the final change log with those records so you can see what was supplied if you need a replacement hinge, a matching tile or a service visit later.",
      ],
    ],
  },
  {
    slug: "villa-garden-doors-widening-an-opening",
    title: "Widening a villa opening for garden doors? Check these first",
    category: "Outdoor living",
    image: "scope-villa-doors",
    imageAlt: "Folding villa doors opening onto a paved terrace",
    excerpt: "Review structure, clear opening and the indoor–outdoor threshold before ordering sliding or folding doors.",
    serviceSlugs: ["villa-extensions-doors", "villa-renovation", "landscaping", "swimming-pools"],
    sources: [communityRules],
    sections: [
      [
        "Start with the opening you already have",
        "Photograph the wall and frame from both sides, including the head of the opening, floor level and any nearby grilles or switches. Share available drawings with an appointed specialist. Ask them to confirm whether the work affects the structure or services. Get that assessment before agreeing to remove masonry or ordering a frame to a proposed size.",
      ],
      [
        "Draw the doors open and closed",
        "Ask where folding panels stack and how much clear opening a sliding system leaves. Think about the dining table, curtains and the route someone takes to the garden with a tray. Check which way the door opens and whether handles or raised tracks affect that route. Compare systems against the usable opening you need.",
      ],
      [
        "Resolve the threshold with the terrace plan",
        "A flush-looking threshold needs a coordinated detail for rainwater, drainage and the two finished floor levels. Ask the door supplier and landscape team to review the junction together and confirm who handles sealing and making good. If you are changing the paving later, show the final proposed level now.",
      ],
      [
        "Find out what can be approved before ordering",
        "Exterior changes may be reviewed by the community and other relevant parties, depending on the property and scope. Ask for the current modification requirements and confirm who will prepare any necessary drawings. Allow time for the final site measurement and for the finish or frame detail to be accepted before releasing the order.",
      ],
    ],
  },
  {
    slug: "villa-pool-planning-before-paving",
    title: "Planning a villa pool? Think beyond the waterline",
    category: "Outdoor living",
    image: "scope-swimming-pool",
    imageAlt: "Villa pool with steps and a paved seating area",
    excerpt: "Work out how people, water and service teams move around the pool before committing to the surrounding paving.",
    serviceSlugs: ["swimming-pools", "landscaping", "villa-extensions-doors", "annual-maintenance"],
    sources: [communityRules],
    sections: [
      [
        "Walk the garden with the proposed pool marked out",
        "Mark the edge and steps on the ground, then walk from the house to the seating area. Could someone carry food outside while another person gets out of the pool? Leave room for the furniture you expect to use and discuss safety measures with the pool specialist. Let those routes shape the pool position before you settle on a shape.",
      ],
      [
        "Give the equipment a place you can reach",
        "Ask the pool specialist to show where equipment, services and maintenance access would sit. Check the route for bringing equipment in and replacing it later. A screen can make the area tidier, but it still needs to work for servicing, ventilation and any requirements the specialist identifies. Keep the access out of the main seating route where possible.",
      ],
      [
        "Get the edge and drainage agreed together",
        "Have the pool and landscape teams mark finished levels, coping, paving and drainage on the same drawing. Ask who builds each part and which sample is suitable for the wet area under its product specification. Review the proposed surface in the sun as well. You will notice the feel of the paving every time you walk out barefoot.",
      ],
      [
        "Separate installation from getting the pool ready",
        "Ask which permissions, access arrangements and inspections apply before any digging is scheduled. Then check what the quote includes at handover, such as commissioning, a demonstration of the controls, care instructions and ongoing service. Ask who to call if the pump or lighting needs attention after handover.",
      ],
    ],
  },
  {
    slug: "dubai-home-maintenance-contract-what-to-check",
    title: "What should a home maintenance contract actually cover?",
    category: "Maintenance",
    image: "process-inspection",
    imageAlt: "A specialist inspecting fitted hardware",
    excerpt: "Compare scheduled visits, call-outs, labour and parts on one list before choosing an annual plan.",
    serviceSlugs: ["annual-maintenance", "ac-installation", "painting"],
    sources: [maintenanceGuide],
    sections: [
      [
        "Make a list of the equipment you look after",
        "Walk the property and note the systems, their model numbers if available and anything that keeps going wrong. Check with the building team which systems they manage and which sit with you. In a rental, read the maintenance terms and agree who can authorise work before buying a plan that might duplicate existing cover.",
      ],
      [
        "Make the visits comparable",
        "Give each provider the same list and ask what will be checked on each scheduled visit, how often they come and what they leave in writing. Emaar Community Management’s maintenance guide shows the range of checks that can sit behind a broad label like AC maintenance. Ask the provider to describe the actual work on your equipment.",
      ],
      [
        "Ask about the call you might make after hours",
        "Ask what happens if the bedroom stops cooling on a Friday night. Who answers, when can someone attend, and are the visit, diagnosis and labour all covered? Check how parts, specialist equipment and issues found on the first inspection are priced. Get any response targets and exclusions recorded with the quote.",
      ],
      [
        "Look at the record after the first visit",
        "Ask for the date, equipment checked, work done and items that need a decision. If a fault returns, you want the next technician to know what was tried last time. Keep the service reports and warranties together so you can compare a repair recommendation with the equipment’s history instead of starting the conversation from scratch.",
      ],
    ],
  },
  {
    slug: "ac-replacement-during-renovation",
    title: "Replacing AC during a renovation? Decide before the ceiling closes",
    category: "Maintenance",
    image: "scope-ac-installation",
    imageAlt: "Open ceiling showing cooling ducts and a recessed supply grille",
    excerpt: "Ask an HVAC specialist what can stay and coordinate ducts, grilles, drainage and future access with the fit-out.",
    serviceSlugs: ["ac-installation", "annual-maintenance", "office-fit-out", "interior-fit-out"],
    sources: [maintenanceGuide],
    sections: [
      [
        "Describe what is wrong in each room",
        "Note when the room feels warm, when the unit is noisy and where you see any dripping. Give the specialist the system type, past service records and the proposed new layout. Ask them to diagnose the cause and explain which existing equipment, if any, can stay. A replacement quote should describe what problem the new work is meant to solve.",
      ],
      [
        "Put cooling on the ceiling drawing",
        "Mark the grilles alongside lights, bulkheads, tall cabinets and curtain tracks. Ask where the ducts, power and condensate route will run, and which parts the building team needs to review. If a grille or access panel would land above a wardrobe, solve it with the design and HVAC teams before the cabinet drawings are signed off.",
      ],
      [
        "Ask how the technician will get to it next year",
        "Stand under the proposed access point and imagine opening it with the room furnished. Ask which filters, drains and equipment need regular attention and what clearance the specialist requires. In an apartment, confirm where your system meets building-managed equipment before choosing work that depends on altering the shared side.",
      ],
      [
        "Agree what will be checked at handover",
        "Ask the specialist to describe the installation checks and commissioning records included in the scope. Walk the rooms together and try the controls. Ask for model numbers, warranties and the recommended service routine. Keep the location of shut-offs and service access panels with the rest of your handover information.",
      ],
    ],
  },
  {
    slug: "dubai-garden-shade-drainage-and-lighting",
    title: "Planning a Dubai garden you will actually use",
    category: "Outdoor living",
    image: "landscaping-shade",
    imageAlt: "Slatted pergola above an outdoor dining area and planted borders",
    excerpt: "Plan shade around the hours you sit outside and settle irrigation, drainage and lighting before paving.",
    serviceSlugs: ["landscaping", "swimming-pools", "villa-extensions-doors", "villa-renovation"],
    sources: [communityRules],
    sections: [
      [
        "Visit the garden when you would normally use it",
        "Take a photo in the morning and one in the late afternoon. Mark where the sun reaches the seating and where the wind comes through. If you mostly eat outdoors in the evening, put the table where getting to it from the kitchen feels easy. Use the photos to decide where shade and privacy would make the biggest difference.",
      ],
      [
        "Watch where water goes",
        "Show the landscape team any spots where irrigation leaves puddles or stains. Ask them to review levels around doors, paths and planted areas before choosing paving. Agree where irrigation and lighting will run and where they can be reached for maintenance. Installing a new line after the paving is finished may mean lifting work you have just paid for.",
      ],
      [
        "Choose planting around the care you can give it",
        "Ask a planting specialist what suits the light, soil, water supply and space available at maturity. Use that information to decide where you want shade, screening or something low along a path. If keeping the garden simple matters to you, ask what the proposed planting needs in the hottest months as well as when it first goes in.",
      ],
      [
        "Get the built elements checked early",
        "Tell the community team about any fixed pergola, raised deck or change near a boundary. Ask which documents are needed for the scope before booking installation. Agree how the lights and irrigation will be demonstrated at handover, and keep a note of where the lines are before adding pots, furniture or more planting later.",
      ],
    ],
  },
];
