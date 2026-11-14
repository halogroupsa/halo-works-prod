import Link from "next/link";
import { Icon } from "./icons";
import { Label } from "@/components/ui";
import { approvalSteps, authorities } from "@/lib/content";

/** Typeset names rather than logos: they identify approval routes, not partnerships. */
export function AuthorityWall() {
  return (
    <>
      <ul className="authority-wall" aria-label="Approval routes we coordinate">
        {authorities.map(([name, type]) => (
          <li className="authority" key={name}>
            <span>{type}</span>
            <strong>{name}</strong>
          </li>
        ))}
      </ul>
      <p className="fine-print authority-note">
        Names identify approval routes we coordinate and do not indicate a
        partnership or endorsement. The applicable authority, appointed
        submitting party and required permissions are confirmed for each
        property. Permits and NOCs remain subject to the relevant authority or
        developer review.
      </p>
    </>
  );
}

export function ApprovalSteps() {
  return (
    <ol className="approval-steps">
      {approvalSteps.map(([title, text], i) => (
        <li key={title}>
          <span className="approval-stamp" aria-hidden="true">
            0{i + 1}
          </span>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ol>
  );
}

export function ApprovalsTeaser() {
  return (
    <section
      className="approvals-teaser section-pad"
      aria-labelledby="approvals-title"
    >
      <div className="wrap">
        <div className="section-heading-row">
          <div>
            <Label>Authority & community approvals</Label>
            <h2 id="approvals-title">
              Approvals,
              <br />
              <em>coordinated.</em>
            </h2>
          </div>
          <p>
            Complex approvals need a coordinated technical response. We bring
            you, your designers, engineers and specialists together around the
            route that applies to your property.
          </p>
        </div>
        <AuthorityWall />
        <ApprovalSteps />
        <Link className="text-link" href="/approvals/">
          How approvals work <Icon name="diagonal" size={16} />
        </Link>
      </div>
    </section>
  );
}
