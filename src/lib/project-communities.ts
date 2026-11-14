export type ProjectCommunity = {
  slug: string;
  name: string;
  propertyType: "Apartments" | "Villas & townhouses" | "Workplaces";
  focus: string;
  scope: string;
  access: string;
  brief: string;
  sourcePath: string;
  comparableCaseStudy?: string;
  relatedReference?: string;
};

// Scope and site checks are Halo Works planning guidance. Source paths record
// the relevant halo.ae or developer community material.
export const projectCommunities: ProjectCommunity[] = [
  {
    slug: "al-furjan",
    name: "Al Furjan",
    propertyType: "Villas & townhouses",
    focus: "Kitchen, utility and storage upgrades",
    scope:
      "Plan the kitchen and adjoining utility together. Decide where appliance housing, laundry storage and an entry cabinet would help most, then list the flooring and finishes that need to connect the spaces.",
    access:
      "Confirm the community or building’s requirements and the route for long cabinet panels and appliances. Check the existing water, power and extraction positions before finalising the layout.",
    brief:
      "Share the development or building, kitchen and utility photos, approximate dimensions and the appliances you plan to keep.",
    sourcePath:
      "https://www.nakheel.com/en/media-centre/press-releases/news-detail/2021/05/19/nakheel-launches-418-new-homes-at-al-furjan",
    comparableCaseStudy: "jumeirah-park-fitted-wardrobe-and-study",
  },
  {
    slug: "almas",
    name: "Almas",
    propertyType: "Workplaces",
    focus: "Boardroom joinery and office refreshes",
    scope:
      "Start with a boardroom, reception or a defined set of rooms. List the fitted storage, lighting and finishes to update, and identify desks and equipment that will stay.",
    access:
      "Confirm the building’s contractor access, freight-lift arrangements and noisy-work windows. Agree how the office will stay accessible during installation.",
    brief:
      "Share the office plan, areas that need to remain in use, and the locations of screens, data points and power outlets.",
    sourcePath: "/projects/almas-dubai",
  },
  {
    slug: "arabian-ranches",
    name: "Arabian Ranches",
    propertyType: "Villas & townhouses",
    focus: "Kitchen and family-room renovations",
    scope:
      "Brief the kitchen and adjoining family room as one zone. Prioritise cabinetry, worktops and lighting, then decide where flooring or paint needs to continue into the next room.",
    access:
      "Check which alterations the community will review and agree a contractor access route. Have a specialist assess any proposed wall opening before it goes into the scope.",
    brief:
      "Send the sub-community, villa type or floor plan, photographs of the kitchen and family room, and a list of fixtures you want to retain.",
    sourcePath: "/projects/arabian-ranches-dubai",
    relatedReference: "dubai-hills-villa-kitchen",
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    propertyType: "Apartments",
    focus: "Apartment kitchens and floor finishes",
    scope:
      "Set a clear room list for the refresh. If the kitchen can keep its footprint, compare cabinetry, worktops and lighting first, then decide which adjoining floors need to be renewed together.",
    access:
      "Ask the building manager about submissions, service-lift slots and common-area protection. Check the route for worktops and flooring deliveries before ordering.",
    brief:
      "Share the tower name, unit plan, photos of the areas involved and when the unit will be available for work.",
    sourcePath: "/projects/business-bay-dubai",
    comparableCaseStudy: "downtown-boulevard",
  },
  {
    slug: "damac-hills",
    name: "DAMAC Hills",
    propertyType: "Villas & townhouses",
    focus: "Ground-floor finishes and fitted storage",
    scope:
      "Brief the ground floor as a group of rooms. Check whether the flooring can be retained, then prioritise entry storage, living-room cabinetry and the finishes that connect the rooms.",
    access:
      "Check contractor access and where materials can be staged. If the brief touches a garden door, terrace or exterior finish, confirm the community’s process before ordering.",
    brief:
      "Send the cluster, property type, ground-floor photos and a list of the floors and fitted pieces you want to keep or replace.",
    sourcePath: "/projects/damac-hills-dubai",
    comparableCaseStudy: "meydan-polo",
  },
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    propertyType: "Apartments",
    focus: "Bathroom upgrades and apartment storage",
    scope:
      "Group the bathrooms or storage areas that need work. Decide which bathrooms need new finishes and waterproofing, and where a replacement vanity or fitted cabinet would be enough.",
    access:
      "Confirm the building’s wet-work requirements and service-lift dimensions. Plan how stone, cabinets and removed materials will travel between the apartment and loading area.",
    brief:
      "Send the building name, photos of each bathroom, and a list of fittings and storage you’d like to change.",
    sourcePath: "/projects/downtown-dubai",
  },
  {
    slug: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    propertyType: "Apartments",
    focus: "Galley kitchens and fitted storage",
    scope:
      "Use the existing kitchen footprint to plan appliance housing, pantry storage and worktop space. Include an entry cabinet or other fitted storage only where it solves a specific need.",
    access:
      "Confirm the tower’s loading arrangements and work hours. Measure lift and doorway clearances before deciding how cabinetry and worktops will be delivered.",
    brief:
      "Send the tower name, a kitchen plan or rough dimensions, appliance sizes and a list of storage priorities.",
    sourcePath: "/projects/dubai-creek-harbour",
  },
  {
    slug: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    propertyType: "Villas & townhouses",
    focus: "Family kitchens and selected rooms",
    scope:
      "Price a kitchen-led upgrade with the island, cabinets, worktops and lighting as one package. Set a separate priority for any adjoining dining-room finishes or built-in storage.",
    access:
      "Confirm the community’s renovation process and where materials can be staged. Ask the project team to check the existing electrical, water and extraction points.",
    brief:
      "Share the villa layout, appliance list and photos of the kitchen, plus the rooms that need to stay usable during the works.",
    sourcePath: "/projects/dubai-hills-dubai",
  },
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    propertyType: "Apartments",
    focus: "Apartment kitchen and living-area refreshes",
    scope:
      "Plan the kitchen first, then decide how far the refresh should extend into the living area. Retaining usable service positions can simplify a brief that also includes flooring, lighting or selected bathroom work.",
    access:
      "Ask the tower manager about fit-out submissions, service-lift bookings, protection and working hours. Check extraction, drainage and access before moving services.",
    brief:
      "Share the tower and unit layout, photos of the kitchen and adjoining rooms, and whether the apartment will be occupied.",
    sourcePath: "/projects/marina-dubai",
  },
  {
    slug: "jumeirah-lakes-towers",
    name: "Jumeirah Lakes Towers",
    propertyType: "Workplaces",
    focus: "Office refreshes and apartment upgrades",
    scope:
      "For an office, start with the reception, meeting rooms or work zones that need to change and list the furniture and services staying in place. For an apartment, focus on the kitchen, bathroom or storage priorities.",
    access:
      "Confirm the tower and cluster before checking contractor access, freight-lift sizes, delivery bookings and fit-out submissions. Flag any work that could interrupt occupied areas.",
    brief:
      "Share the tower and cluster, a floor plan or photos, the areas that need to stay operational and the changes you want to make.",
    sourcePath: "https://dmcc.ae/members/property-portfolio",
  },
  {
    slug: "jumeirah-village-circle",
    name: "Jumeirah Village Circle",
    propertyType: "Apartments",
    focus: "Kitchens, bathrooms and durable finishes",
    scope:
      "For an apartment refresh, choose the kitchen and bathroom priorities first. Group flooring and repainting where it simplifies the programme, and specify hard-wearing finishes for rental properties.",
    access:
      "Confirm the process with the management team for your particular building. Agree debris removal, work hours and delivery access before scheduling work.",
    brief:
      "Send the building name, room list, the date the property becomes available and which fixtures you plan to keep.",
    sourcePath: "/projects/jumeirah-village-circle-dubai",
    comparableCaseStudy: "mjl-madinat",
  },
  {
    slug: "meydan",
    name: "Meydan",
    propertyType: "Villas & townhouses",
    focus: "Wardrobes, study areas and fitted furniture",
    scope:
      "Build a room-by-room joinery list. Prioritise everyday wardrobes and storage, then decide whether to include a fitted desk, display shelves or bedroom panelling.",
    access:
      "Check delivery access for long panels and confirm whether installation needs to be phased around an occupied home. Set out sockets and switches before manufacture.",
    brief:
      "Share the development name, room measurements or plans, and examples of what the storage needs to accommodate.",
    sourcePath: "/projects/meydan-dubai",
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    propertyType: "Villas & townhouses",
    focus: "Selected villa rooms and fitted joinery",
    scope:
      "Choose a defined area, such as a family kitchen, a dressing room or a living-room joinery package. Decide which fixtures and finishes stay before specifying new cabinets or surfaces.",
    access:
      "Check the property’s access and delivery route. Flag any changes at terrace doors, façades or external areas early so the relevant specialists can review them.",
    brief:
      "Share the villa or building location, photos of the rooms in scope and any items you want to retain or reuse.",
    sourcePath: "/projects/palm-jumeirah-dubai",
    relatedReference: "dubai-hills-villa-kitchen",
  },
  {
    slug: "the-meadows",
    name: "The Meadows",
    propertyType: "Villas & townhouses",
    focus: "Phased kitchen and bathroom renovations",
    scope:
      "Compare doing the kitchen and selected bathrooms together with working room by room. Identify which cabinets, service points and flooring can stay, and which wet areas need a full assessment.",
    access:
      "Plan around the rooms the household needs to keep using. Confirm delivery access, dust protection and any proposed changes to walls or services before agreeing a sequence.",
    brief:
      "Send the villa type or plan, photos of the kitchen and bathrooms, and any dates when particular rooms must be available.",
    sourcePath: "/projects/meadows-dubai",
    comparableCaseStudy: "jumeirah-islands-villa",
  },
  {
    slug: "the-springs",
    name: "The Springs",
    propertyType: "Villas & townhouses",
    focus: "Townhouse kitchen and ground-floor upgrades",
    scope:
      "Start with the kitchen, dining area and ground-floor finishes. A kitchen that stays in its current footprint is a useful baseline to compare with a layout change.",
    access:
      "Have a qualified specialist assess any wall alteration and confirm the community’s approval route. Agree how deliveries and work zones will be separated from occupied rooms.",
    brief:
      "Send the townhouse type or floor plan, ground-floor photos and a note on any layout changes you’re considering.",
    sourcePath: "/projects/springs-dubai",
    comparableCaseStudy: "arabian-ranches-open-plan-kitchen",
  },
];
