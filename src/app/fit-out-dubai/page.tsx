import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/page-hero";
import {
  Commitments,
  ServiceGrid,
  EnquirySection,
  ProcessSection,
} from "@/components/site-sections";
export const metadata = {
  ...pageMetadata(
    "Fit-Out & Renovation Project Enquiries",
    "Discuss your Dubai fit-out, renovation or joinery project with Halo Works. Specialist teams, procurement and site delivery within one agreed scope.",
    "/fit-out-dubai/",
    "living-natural",
  ),
  robots: { index: false, follow: true },
};
export default function Campaign() {
  return (
    <>
      <PageHero
        label="Halo Works / Dubai"
        title="Your project. Brought together."
        description="Interior planning, renovation, fit-out and bespoke joinery. We bring the relevant specialist teams into one agreed scope and manage the path to handover."
        image="living-natural"
        alt="Residential interior"
        path="/fit-out-dubai/"
        crumb="Project enquiries"
        action={{ href: "#enquire", label: "Discuss your project" }}
      />
      <Commitments />
      <section className="wrap section-pad">
        <ServiceGrid />
      </section>
      <ProcessSection />
      <EnquirySection />
    </>
  );
}
