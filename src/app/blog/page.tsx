import { articles } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo";
import ContentFilter from "@/components/content-filter";
import { ClosingCTA } from "@/components/site-sections";
import { PageIntro } from "@/components/ui";
export const metadata = pageMetadata(
  "Renovation & Fit-Out Planning Blog",
  "Practical Dubai guides to home renovation, commercial fit-outs, joinery, outdoor projects and property maintenance.",
  "/blog/",
  "journal-studio",
);
export default function Blog() {
  const cards = articles.map(({ slug, title, category, image, excerpt }) => ({
    slug,
    title,
    category,
    image,
    excerpt,
  }));
  return (
    <>
      <section className="wrap collection-intro journal-intro">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog/" }]} />
        <PageIntro
          label="Halo Works · Planning advice"
          title="Project guides"
          description="Practical answers for planning renovations, commercial fit-outs, outdoor projects and property maintenance in Dubai."
        />
      </section>
      <section className="section-surface section-pad">
        <div className="wrap">
          <ContentFilter items={cards} kind="blog" />
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
