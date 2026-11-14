import {
  haloInteriorsBudgetBand,
  haloInteriorsContact,
} from "@/lib/project-budget";
import { Icon } from "./icons";

export default function ProjectBudgetNote() {
  return (
    <aside
      className="project-budget-note"
      aria-label="Halo Interiors enquiries"
    >
      <p>
        For projects with a budget of <strong>{haloInteriorsBudgetBand}</strong>
      </p>
      <a className="text-link" href={haloInteriorsContact}>
        Contact Halo Interiors <Icon name="diagonal" size={15} />
      </a>
    </aside>
  );
}
