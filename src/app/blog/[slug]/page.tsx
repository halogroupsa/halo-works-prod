import PageHero from "@/components/page-hero";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo";
import { notFound } from "next/navigation";
import { articles, services } from "@/lib/site-content";
import { Icon } from "@/components/icons";
import { Label } from "@/components/ui";
import { ClosingCTA } from "@/components/site-sections";
import Link from "next/link";
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  return a
    ? pageMetadata(a.title, a.excerpt, `/blog/${slug}/`, a.image, true)
    : {};
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  const [serviceSlug] = a.serviceSlugs;
  const serviceName = serviceSlug === "landscaping"
    ? "Landscaping & outdoor living"
    : services.find((service) => service.slug === serviceSlug)?.name;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.excerpt,
          image: absoluteUrl(`/images/${a.image}.webp`),
          mainEntityOfPage: absoluteUrl(`/blog/${slug}/`),
          author: {
            "@type": "Organization",
            name: "Halo Works",
            url: absoluteUrl("/about/"),
          },
          publisher: { "@id": absoluteUrl("/#organization") },
        }}
      />
      <PageHero
        variant="inset"
        className="page-hero--article"
        label={`${a.category} / Planning guide`}
        title={a.title}
        description={a.excerpt}
        image={a.image}
        alt={a.imageAlt ?? a.title}
        path={`/blog/${slug}/`}
        crumb={a.title}
        parent={{ name: "Blog", href: "/blog/" }}
      />
      <div className="article-shell wrap">
        <aside className="article-index">
          <Label>In this guide</Label>
          <nav aria-label="Article contents">
            {a.sections.map(([h], i) => (
              <a key={h} href={`#note-${i + 1}`}>
                <span>0{i + 1}</span>
                {h}
              </a>
            ))}
          </nav>
        </aside>
        <article className="article-body">
          {a.sections.map(([h, p], i) => (
            <section key={h} id={`note-${i + 1}`} data-reveal>
              <Label>0{i + 1}</Label>
              <h2>{h}</h2>
              <p>{p}</p>
            </section>
          ))}
          <div className="article-end">
            <Link prefetch={false} href={`/services/${serviceSlug}/`} className="text-link">
              {serviceName ?? "Explore the related service"} <Icon name="diagonal" size={16} />
            </Link>
            {a.sources && (
              <aside className="prose" aria-label="Official references">
                <strong>Official references</strong>
                <ul>
                  {a.sources.map(({ href, label }) => (
                    <li key={href}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
          <Link href="/blog/" className="text-link">
            ← Back to the blog
          </Link>
        </article>
      </div>
      <ClosingCTA />
    </>
  );
}
