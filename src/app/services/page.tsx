import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { serviceGroups, services } from "@/lib/site-content";
import { EnquirySection } from "@/components/site-sections";
import { Breadcrumbs } from "@/components/seo";
import { PageIntro } from "@/components/ui";
import { Icon } from "@/components/icons";

export const metadata = pageMetadata(
  "Renovation, Interior Design & Fit-Out Services",
  "Explore Halo Works services for villa and apartment renovation, workplace fit-out, bespoke joinery, finishes and landscaping in Dubai.",
  "/services/",
  "hero-courtyard",
);

export default function Services() {
  return (
    <>
      <section className="wrap service-index">
        <Breadcrumbs items={[{ name: "Services", href: "/services/" }]} />
        <PageIntro
          label="Dubai · Homes & commercial spaces"
          title="Services"
          description="Choose the work you need, from a room upgrade to a full fit-out. We define the scope with you and bring in the specialists it calls for."
        />
        <div className="service-directory">
          {serviceGroups.map((group) => (
            <details
              className="service-directory-row"
              key={group.id}
              id={group.id}
              name="service-directory"
              data-reveal
            >
              <summary>
                <span>
                  <span className="service-directory-name">{group.title}</span>
                  <span className="service-directory-summary">
                    {group.summary}
                  </span>
                </span>
                <Icon name="chevron" size={23} />
              </summary>
              <ul>
                {group.slugs.map((slug, index) => (
                  <li
                    key={slug}
                    style={{ animationDelay: 150 + index * 40 + "ms" }}
                  >
                    <Link href={"/services/" + slug + "/"} prefetch={false}>
                      {services.find((s) => s.slug === slug)!.name}{" "}
                      <Icon name="diagonal" size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
        <div className="service-index-outdoor" data-reveal>
          <div>
            <h2>Planning an outdoor project?</h2>
            <p>
              Explore paving, planting, shade and lighting for gardens, terraces
              and courtyards.
            </p>
          </div>
          <Link
            prefetch={false}
            href="/services/landscaping/"
            className="text-link"
          >
            Landscaping &amp; outdoor living <Icon name="diagonal" size={16} />
          </Link>
        </div>
      </section>
      <EnquirySection />
    </>
  );
}
