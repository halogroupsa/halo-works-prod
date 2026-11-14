import Link from "next/link";
import PageHero from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";
import { EnquirySection, SectionHeading } from "@/components/site-sections";
import { Icon } from "@/components/icons";

const guides = [
  {
    id: "home",
    title: "Home renovation",
    href: "/services/home-renovation/",
    copy: "The number of rooms, work that can be retained, access and protection of occupied areas all shape the scope. Agree priorities room by room before pricing the work.",
  },
  {
    id: "kitchen",
    title: "Kitchen renovation",
    href: "/services/kitchen-renovation/",
    copy: "Compare cabinetry, worktop materials, fittings and hardware. Check whether each quotation includes appliances, the removal of existing units and changes to plumbing or electrical points.",
  },
  {
    id: "bathroom",
    title: "Bathroom renovation",
    href: "/services/bathroom-renovation/",
    copy: "Identify the condition of the existing floor and walls, waterproofing and drainage requirements, and the fixtures and surfaces you want to retain or replace.",
  },
];
export const metadata = pageMetadata(
  "Planning Your Renovation & Fit-Out Budget",
  "Understand the scope, materials, specialist works and programme decisions behind a Halo Works renovation or fit-out quotation.",
  "/cost-guide/",
  "article-materials",
);
export default function Costs() {
  return (
    <>
      <PageHero
        label="Cost guidance"
        title="Renovation & fit-out costs"
        description="Build a budget around the work your property needs. Compare inclusions, exclusions, materials and specialist responsibilities when you review a quotation."
        image="article-materials"
        alt="Material samples for an interior project"
        path="/cost-guide/"
        crumb="Cost guide"
      />
      <section className="wrap section-pad">
        <SectionHeading
          label="What shapes the quotation"
          title="What affects your budget"
        />
        <ul className="document-grid">
          {[
            [
              "Existing conditions",
              "Assessment establishes access, retained finishes, preparation and specialist requirements.",
            ],
            [
              "Scope & priorities",
              "Separate essential work from options so the budget is directed towards the areas that matter most.",
            ],
            [
              "Materials & hardware",
              "Review appearance, use, maintenance and lead time alongside the material or product price.",
            ],
            [
              "Specialist work",
              "Design, engineering and technical packages are identified with responsibilities and exclusions.",
            ],
            [
              "Programme & procurement",
              "Manufacture, delivery, site readiness and installation need to follow a workable sequence.",
            ],
            [
              "Changes & payment milestones",
              "The proposal records payment milestones. Changes are documented with scope, cost and timing implications before varied work proceeds.",
            ],
          ].map(([h, p]) => (
            <li key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="budget-guide-section">
        <div className="wrap section-pad">
          <SectionHeading title="Costs by renovation type" />
          <div className="budget-guide-list">
            {guides.map(({ id, title, copy, href }) => (
              <article key={id} id={id}>
                <h3>{title}</h3>
                <p>{copy}</p>
                <Link href={href} className="text-link">
                  Explore the scope <Icon name="diagonal" size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="budget-section">
        <div className="wrap">
          <h2>What to send for an assessment</h2>
          <div>
            <p>
              Property location, photographs or drawings, the rooms or work
              packages you want to improve, your indicative budget and the
              required completion date.
            </p>
          </div>
        </div>
      </section>
      <EnquirySection />
    </>
  );
}
