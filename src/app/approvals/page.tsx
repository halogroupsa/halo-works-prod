import Link from "next/link";
import { Icon } from "@/components/icons";
import PageHero from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";
import { EnquirySection, SectionHeading } from "@/components/site-sections";
import FAQ from "@/components/faq";
export const metadata = pageMetadata(
  "Authority & Community Approval Support",
  "Halo Works brings clients, designers, engineers and submitting specialists together to establish and follow the approval route for each Dubai property.",
  "/approvals/",
  "scope-planning-natural",
);
export default function Approvals() {
  return (
    <>
      <PageHero
        label="Technical & approval support"
        title="Authority & community approvals"
        description="We bring you, your designers, engineers and submitting specialists together to prepare information, resolve review comments and follow the approval route that applies to the work."
        image="scope-planning-natural"
        alt="Interior drawings and material specifications"
        path="/approvals/"
        crumb="Approvals"
      />
      <section className="wrap section-pad">
        <SectionHeading
          label="Property-specific requirements"
          title="First, establish who reviews the work."
          copy="The applicable authority, submitting party and required permissions are confirmed for each property. Permits and NOCs remain subject to authority or developer review."
        />
        <div className="authority-list">
          {[
            "Dubai Municipality",
            "Dubai Development Authority",
            "Trakhees / PCFC",
            "DMCC",
            "Nakheel",
            "Emaar",
            "DAMAC",
            "Meraas",
            "Sobha Realty",
            "Azizi",
          ].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
        <p className="fine-print">
          Examples of authorities and developers that may review the work,
          depending on the property.
        </p>
      </section>
      <section className="process-section section-pad">
        <div className="wrap">
          <SectionHeading
            label="Engineering & submission support"
            title="From route review to closeout."
          />
          <ol className="process-grid">
            {[
              [
                "Review the route",
                "Confirm jurisdiction, landlord NOCs and the required design disciplines.",
              ],
              [
                "Prepare the information",
                "Bring architectural and MEP drawings and supporting documents together with appointed specialists.",
              ],
              [
                "Resolve & close",
                "Follow technical comments, revisions and relevant inspections through to completion documents.",
              ],
            ].map(([h, p], i) => (
              <li key={h}>
                <span className="step-number">0{i + 1}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="wrap section-pad scope-layout">
        <div>
          <p className="eyebrow">Connected to delivery</p>
          <h2>
            Drawings, permissions
            <br />
            and the programme.
          </h2>
        </div>
        <div className="prose">
          <p>
            The required design information, review stages and specialist
            obligations are established alongside procurement and site delivery.
            This helps the team plan decisions and material commitments around
            the agreed milestones.
          </p>
          <p>
            Halo Works manages the interfaces. The appointed submitting party
            and each specialist’s obligations are recorded for the specific
            project.
          </p>
          <Link
            className="text-link"
            href="/blog/understanding-your-approval-route/"
          >
            Read the approval planning guide <Icon name="diagonal" size={16} />
          </Link>
        </div>
      </section>
      <FAQ
        title="Approvals, explained."
        tone="panel"
        items={[
          [
            "Does Halo Works grant approvals?",
            "The relevant authority or developer grants permissions. Halo Works brings the required parties and documents together and follows up on review comments.",
          ],
          [
            "Who submits the drawings?",
            "The appointed submitting party is confirmed for each property. Required design disciplines and specialist responsibilities are established before submission.",
          ],
          [
            "Can approval reviews affect completion?",
            "Yes. Review comments, revisions and relevant inspections need to be considered alongside procurement and site work when the programme is agreed.",
          ],
        ]}
      />
      <EnquirySection service="Approvals & submissions" />
    </>
  );
}
