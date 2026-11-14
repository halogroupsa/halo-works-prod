import { Breadcrumbs } from "@/components/seo";
import { PageIntro } from "@/components/ui";
import FAQ from "@/components/faq";
import { pageMetadata } from "@/lib/seo";
import { ClosingCTA } from "@/components/site-sections";
export const metadata = pageMetadata(
  "Fit-Out & Renovation FAQs",
  "Answers about Halo Works project scope, specialist teams, design information, approval routes, quotations and handover.",
  "/faqs/",
  "scope-planning-natural",
);
export default function FAQs() {
  return (
    <>
      <section className="wrap collection-intro">
        <Breadcrumbs items={[{ name: "FAQs", href: "/faqs/" }]} />
        <PageIntro
          label="Planning your project"
          title="Frequently asked questions"
          description="A few practical answers about the work, the people involved and the decisions you will make along the way."
        />
      </section>
      <FAQ title="Scope, costs and handover" tone="surface" />
      <ClosingCTA />
    </>
  );
}
