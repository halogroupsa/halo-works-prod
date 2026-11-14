import Link from "next/link";
import { Icon } from "./icons";
import { Picture } from "./ui";

const delivery = [
  [
    "Clear quotations",
    "See the scope, exclusions and payment milestones before work starts.",
    "scope-planning",
  ],
  [
    "Material selection",
    "Compare options and sign off samples before orders are placed.",
    "article-materials",
  ],
  [
    "Approval support",
    "Establish which submissions apply and who will prepare and submit them.",
    "process-hero",
  ],
  [
    "Work on site",
    "We manage the programme and check progress while appointed trades carry out their packages.",
    "scope-protection",
  ],
  [
    "Design & detailing",
    "We align drawings, finishes and shop drawings with the agreed scope and site conditions.",
    "scope-joinery",
  ],
  [
    "Handover & care",
    "Review snags, maintenance guidance and any warranty information that applies to your contract.",
    "process-inspection",
  ],
] as const;

const comparisons = [
  [
    "Scope & pricing",
    "Included work, exclusions and payment milestones",
    "Are the quotations priced against the same scope?",
  ],
  [
    "Materials",
    "Approved finishes and orders that affect timing",
    "Which finishes and fixtures are priced and specified?",
  ],
  [
    "Team & approvals",
    "Work packages and who handles any required submissions",
    "Who carries out each package and who submits for approval?",
  ],
  [
    "Programme & handover",
    "Work sequence, recorded changes and snag closeout",
    "How will changes and outstanding items be tracked?",
  ],
] as const;

const records = [
  [
    "01 / While work is underway",
    "Progress updates",
    "Agree how often you’ll receive updates and how site decisions will be recorded.",
  ],
  [
    "02 / When the brief changes",
    "Written variations",
    "Confirm what changes and how it affects the price or completion date before the work proceeds.",
  ],
  [
    "03 / At handover",
    "A closeout record",
    "Review inspections, snag closure and relevant care information together.",
  ],
] as const;

export default function HomeDelivery() {
  return (
    <>
      <section
        className="home-delivery section-pad"
        aria-labelledby="delivery-title"
      >
        <div className="wrap">
          <div className="home-section-heading" data-reveal>
            <div>
              <p className="eyebrow">Halo Works project management</p>
              <h2 id="delivery-title">What we manage</h2>
            </div>
            <Link prefetch={false} className="text-link" href="/process/">
              From brief to handover <Icon name="diagonal" size={16} />
            </Link>
          </div>
          <div className="delivery-grid">
            {delivery.map(([title, copy, image], index) => (
              <article
                key={title}
                data-reveal="stagger"
                data-reveal-order={index % 3}
              >
                <Picture
                  name={image}
                  alt=""
                  sizes="(max-width: 350px) 100vw, (max-width: 840px) 50vw, 33vw"
                />
                <div className="delivery-card-copy">
                  <span aria-hidden="true">0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wrap section-pad home-comparison"
        aria-labelledby="comparison-title"
      >
        <div className="home-section-heading" data-reveal>
          <div>
            <p className="eyebrow">Before you appoint a team</p>
            <h2 id="comparison-title">Compare the scope</h2>
          </div>
          <Link prefetch={false} className="text-link" href="/cost-guide/">
            Read the cost guide <Icon name="diagonal" size={16} />
          </Link>
        </div>
        <table className="comparison-table" aria-labelledby="comparison-title">
          <thead>
            <tr>
              <th scope="col">Check</th>
              <th scope="col">Halo Works documents</th>
              <th scope="col">Questions to ask</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map(([topic, documents, question]) => (
              <tr key={topic}>
                <th scope="row">{topic}</th>
                <td>{documents}</td>
                <td>{question}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section
        className="home-records section-pad"
        aria-labelledby="records-title"
      >
        <div className="wrap">
          <div className="home-section-heading" data-reveal>
            <div>
              <p className="eyebrow">Client care</p>
              <h2 id="records-title">What you’ll receive</h2>
            </div>
            <Link
              prefetch={false}
              className="text-link"
              href="/services/project-delivery/"
            >
              Project management <Icon name="diagonal" size={16} />
            </Link>
          </div>
          <div className="client-records">
            {records.map(([label, title, copy], index) => (
              <article
                key={title}
                data-reveal="stagger"
                data-reveal-order={index}
              >
                <p className="eyebrow">{label}</p>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wrap home-specialists"
        aria-labelledby="specialists-title"
      >
        <div>
          <h2 id="specialists-title">The specialists on your project</h2>
          <p>
            We appoint the disciplines your scope calls for and agree who
            delivers each package.
          </p>
        </div>
        <ul aria-label="Specialist disciplines">
          <li>Designers</li>
          <li>Engineers</li>
          <li>Manufacturers</li>
          <li>Site trades</li>
        </ul>
      </section>
    </>
  );
}
