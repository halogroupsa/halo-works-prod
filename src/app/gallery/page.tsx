import { pageMetadata } from "@/lib/seo";
import { spaces } from "@/lib/site-content";
import { Breadcrumbs } from "@/components/seo";
import ContentFilter from "@/components/content-filter";
import { ClosingCTA } from "@/components/site-sections";
import Link from "next/link";
import { PageIntro } from "@/components/ui";
import { Icon } from "@/components/icons";
export const metadata = pageMetadata(
  "Interior Design Gallery",
  "Explore interior design ideas for homes, joinery, offices, hospitality and retail.",
  "/gallery/",
  "living-natural",
);
export default function Gallery() {
  return (
    <>
      <section className="wrap collection-intro gallery-intro">
        <Breadcrumbs items={[{ name: "Design gallery", href: "/gallery/" }]} />
        <PageIntro
          label="Interior design ideas"
          title="Design gallery"
          description="Explore materials, layouts and fitted details as a starting point for your brief."
        />
      </section>
      <section className="section-surface section-pad">
        <div className="wrap">
          <div className="gallery-note">
            <Link prefetch={false} className="text-link" href="/projects/">
              Go to project records <Icon name="diagonal" size={16} />
            </Link>
          </div>
          <ContentFilter items={spaces} kind="gallery" />
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
