# Content provenance — current redesign

Reviewed 7 November 2026. This supersedes the earlier parent-company logo/review treatment.

## Business source

`Halo_Works_Company_Profile 2026 (1).pdf` is the source for Halo Works capabilities and delivery responsibilities.

| Content | Profile source |
| --- | --- |
| Company role, appointed designers/engineers/manufacturers/contractors, collective experience | pp. 1–2 |
| Khalil Rahman, management approach and direct contact | p. 3 |
| Villa/apartment renovation, rooms, kitchens, bathrooms, occupied areas | p. 4 |
| Bespoke joinery, kitchens, wardrobes, cabinetry, drawings, manufacture interfaces and checks | p. 5 |
| Offices, partitions, technical interfaces and business continuity | p. 6 |
| Hospitality and commercial interiors | p. 7 |
| Retail, display, technical interfaces and opening programme | p. 8 |
| Interior planning, full fit-out, finishes, MEP interfaces, specialist appointments and delivery | p. 9 |
| Budget priorities, comparable quotations, selections and procurement sequence | p. 10 |
| Approval routes and appointed submitting parties | p. 11 |
| Six-stage process, handover and support | p. 12 |
| Written changes, progress updates, checks and closeout | p. 13 |
| Interior reference imagery is inspiration rather than project proof | p. 14 |
| General enquiry phone/email and manager contacts | p. 15 |

Granular service pages paraphrase these scopes; they do not introduce an in-house factory, in-house engineering department, structural-construction licence, swimming pool capability, maintenance contract, fixed warranty duration, guaranteed schedule or free design offer.

## Owner instructions

- The owner identifies halo.ae / Halo Interiors as the parent company. This relationship is stated on About and in Organization metadata, without transferring its achievements or client relationships.
- The landscaping page covers focused garden, terrace and courtyard briefs. It applies the profile’s planning and specialist coordination model to outdoor work. The service page and illustrative imagery draw on the [halo.ae landscaping overview](https://halo.ae/services/landscaping-pools-dubai) and outdoor editorial assets in the local `halo-ae-next` repository.
- The supplied footer screenshot is a coverage checklist. The four specialist scope pages explain feasibility, specialist assessment and enquiries. Book Online uses Halo Works’ existing WhatsApp and email handoff to request a consultation. Community source paths are recorded in `src/lib/project-communities.ts`.
- Location case studies use Halo Interiors’ published project accounts and room photography from the local `halo-ae-next` and `halo-ae-next-prod` repositories. The page shows the property’s actual location, including when the project is featured on another area’s page as a comparable example. Named project examples in `src/lib/project-references.ts` use the client names as published in the original project accounts.
- “Quick transformations” comes from the client brief and is limited to focused interior upgrades supported by the profile. No standard duration is stated.
- The owner selected direct WhatsApp and email contact on 7 November 2026. Form copy explicitly describes app handoff; there is no receipt, automatic acknowledgement or database-storage claim.

## Designs and imagery

Rayfitout supplies visual inspiration and Yalla Renovation supplies page-structure inspiration. Their photographs, text, reviews, awards, numbers and projects are not used as Halo Works evidence. Browser research captures live under `docs/redesign/references/`, outside the site's public assets.

Illustrative visuals include planning, craftspeople and interiors. The homepage concept and its generation prompt are recorded in `docs/redesign/design-plan.md`.

Concept studies are at `/gallery/`. The review export uses empty image slots and unfilled case-study facts. The production export includes individual project records after approval of their photographs, location, duration, scope, responsibilities and narrative.

The project examples use Halo Interiors photography from the local `halo-ae-next` repository. Kitchen and bathroom references follow the corresponding photo dossiers. Joinery references follow the grouped records in `src/data/joinery-projects.ts`. The additional office, café, kiosk and outdoor photographs follow their category galleries. Placeholder client names and locations from those galleries are omitted. Original portfolio paths and the source files for newly imported photos are recorded in `src/lib/project-references.ts`.

The wardrobe entries in `src/lib/wardrobe-references.ts` keep the six named joinery projects in their original groups. The 34 photographs from the wardrobe gallery are organised into four collections by visible storage features. Those collections cover multiple projects and use descriptions of the photographs.

The photos were selected for the focused scopes they show. The original contract values are undisclosed. The AED 100,000 to under AED 300,000 band applies to new Halo Works enquiries. Budgets of AED 300,000 and above go to Halo Interiors.

The wordmark uses the higher-resolution alpha artwork embedded on page 1 of the supplied company profile. A CSS mask uses the same artwork on light and dark surfaces.

## Removed from rendered pages

The service pages use the partner carousel and eight logos from the local `halo-ae-next` site, with the relationships attributed to Halo Interiors. Review excerpts are not rendered. No review, aggregate-rating, award or client-count structured data is added. Authority/developer names are labelled as possible approval routes, not partnerships or endorsements.

## Guides

The blog includes 21 service-specific articles alongside the five original planning guides. Topics reflect recurring questions in Dubai homeowner discussions and local search results. Articles on approvals, food premises and maintenance link to the relevant authority, landlord or community guidance and direct readers to confirm requirements for their property and scope.
