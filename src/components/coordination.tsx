import Link from "next/link";
import { Icon } from "./icons";
import { Label } from "@/components/ui";
import {
  capabilities,
  challenges,
  disciplines,
  valuePoints,
} from "@/lib/content";

const specialists = [
  "Designers",
  "Engineers",
  "Joinery",
  "MEP specialists",
  "Suppliers",
  "Approvals",
];

/** Specialists orbit one coordinated scope; positions are percentages so labels stay crisp at any size. */
export function CoordinationDiagram() {
  return (
    <figure className="coordination-diagram">
      <div className="coordination-stage">
        <svg viewBox="0 0 400 400" fill="none" aria-hidden="true">
          <circle
            className="coordination-orbit"
            cx="200"
            cy="200"
            r="150"
            stroke="currentColor"
            strokeDasharray="2 7"
          />
          <circle
            cx="200"
            cy="200"
            r="100"
            stroke="currentColor"
            opacity=".35"
          />
          {specialists.map((_, i) => {
            const a = ((i * 60 - 90) * Math.PI) / 180;
            return (
              <line
                key={i}
                className="coordination-spoke"
                x1={200 + 150 * Math.cos(a)}
                y1={200 + 150 * Math.sin(a)}
                x2={200 + 70 * Math.cos(a)}
                y2={200 + 70 * Math.sin(a)}
                stroke="currentColor"
              />
            );
          })}
        </svg>
        <div className="coordination-core">
          <span>Halo Works</span>
          <small>One coordinated scope</small>
        </div>
        {specialists.map((name, i) => {
          const a = ((i * 60 - 90) * Math.PI) / 180;
          return (
            <span
              className="coordination-node"
              key={name}
              style={{
                left: `${50 + 37.5 * Math.cos(a)}%`,
                top: `${50 + 37.5 * Math.sin(a)}%`,
              }}
            >
              {name}
            </span>
          );
        })}
      </div>
      <figcaption>
        Specialists appointed around your scope, with clear responsibilities
        and one agreed programme.
      </figcaption>
    </figure>
  );
}

export function Challenge() {
  return (
    <section className="challenge section-pad" aria-labelledby="challenge-title">
      <div className="wrap challenge-intro">
        <div>
          <Label>The challenge we solve</Label>
          <h2 id="challenge-title">
            An interior project is a <em>significant commitment.</em>
          </h2>
          <p>
            Beyond the appearance of the finished space, it needs clear
            decisions, realistic planning, reliable coordination and consistent
            attention to the details that affect cost, quality and completion.
          </p>
          <p>
            Whether you are improving a family home, opening a business or
            transforming a workplace, we connect the creative brief with
            technical planning, procurement and full project execution, giving
            you a clear route from initial idea to completed space.
          </p>
          <Link className="text-link" href="/services/project-delivery/">
            How full project delivery works <Icon name="diagonal" size={16} />
          </Link>
        </div>
        <CoordinationDiagram />
      </div>
      <div className="wrap challenge-grid">
        {challenges.map(([problem, answer, text], i) => (
          <article className="challenge-card" key={problem}>
            <p className="challenge-problem">
              <span>0{i + 1}</span>
              <s>{problem}</s>
            </p>
            <h3>{answer}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const tickerItems = capabilities
  .filter((c) => !c.href || !c.href.includes("interior-design"))
  .flatMap((c) => c.items);

export function CapabilityTicker() {
  return (
    <div className="capability-ticker">
      <div className="wrap capability-ticker-inner">
        <p className="ticker-label">Within one scope</p>
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {tickerItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
        <Link href="/services/#capabilities">
          All capabilities <Icon name="diagonal" size={16} />
        </Link>
      </div>
    </div>
  );
}

export function Capabilities() {
  return (
    <section
      className="capabilities section-pad"
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="wrap">
        <div className="section-heading-row">
          <div>
            <Label>Full project execution</Label>
            <h2 id="capabilities-title">
              Every package.
              <br />
              <em>One coordinated scope.</em>
            </h2>
          </div>
          <p>
            A complete interior needs more than separate work packages. We
            connect design, technical information, specialist appointments,
            procurement and site delivery, with responsibilities and exclusions
            agreed from the outset.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((c, i) => (
            <article key={c.title}>
              <span className="capability-number">0{i + 1}</span>
              <h3>{c.title}</h3>
              <ul>
                {c.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {c.href && (
                <Link className="text-link" href={c.href}>
                  Explore this expertise <Icon name="diagonal" size={16} />
                </Link>
              )}
            </article>
          ))}
        </div>
        <p className="fine-print capability-note">
          Approval routes, testing and specialist obligations are established
          for the specific property and agreed scope.{" "}
          <Link href="/approvals/">
            Authority &amp; community approvals{" "}
            <Icon name="diagonal" size={16} />
          </Link>
        </p>
      </div>
    </section>
  );
}

export function ValueSection({ dark = false }: { dark?: boolean }) {
  return (
    <section
      className={`value-section ${dark ? "value-section--dark" : ""}`}
      aria-labelledby="value-title"
    >
      <div className="wrap value-layout">
        <div>
          <Label>Value & materials</Label>
          <h2 id="value-title">
            A well-priced project starts with{" "}
            <em>a clear specification.</em>
          </h2>
          <p>
            We help you understand what is included and how each choice affects
            appearance, durability, delivery and cost.
          </p>
        </div>
        <ol className="value-grid">
          {valuePoints.map(([title, text], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ExperienceBand() {
  return (
    <section className="experience-band" aria-labelledby="experience-title">
      <div className="wrap experience-grid">
        <div className="experience-number">
          <strong>
            20<span>+</span>
          </strong>
          <p>
            Years of collective
            <br />
            industry experience
          </p>
        </div>
        <div>
          <Label>The experience behind every brief</Label>
          <h2 id="experience-title">
            Many disciplines.
            <br />
            <em>One practical team.</em>
          </h2>
          <p>
            Experience gained delivering projects across these disciplines
            informs how we plan, coordinate and execute each new brief, led by a
            General Manager who stays closely involved.
          </p>
          <Link className="text-link" href="/about/">
            Meet Halo Works <Icon name="diagonal" size={16} />
          </Link>
        </div>
        <ol className="discipline-list">
          {disciplines.map((d, i) => (
            <li key={d}>
              <span>0{i + 1}</span>
              {d}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
