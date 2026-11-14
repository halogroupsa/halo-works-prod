import PageHero from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";
import { steps } from "@/lib/site-content";
import { Commitments, EnquirySection } from "@/components/site-sections";
export const metadata = pageMetadata(
  "How Your Project Works",
  "Follow the Halo Works process from initial brief and assessment to scope agreement, specialist delivery, inspections and handover.",
  "/process/",
  "process-inspection",
);
export default function Process() {
  return (
    <>
      <PageHero
        label="From assessment to handover"
        title="How it works"
        description="See when we agree scope and costs, how work progresses on site and what you receive at handover."
        image="process-inspection"
        alt="Inspection of fitted cabinetry"
        path="/process/"
        crumb="How it works"
      />
      <section className="wrap section-pad">
        <ol className="process-detail">
          {steps.map(([h, p, d], i) => (
            <li key={h} data-reveal="stagger" data-reveal-order={i % 3}>
              <span className="step-number">0{i + 1}</span>
              <h2>{h}</h2>
              <p>{p}</p>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </section>
      <Commitments />
      <EnquirySection />
    </>
  );
}
