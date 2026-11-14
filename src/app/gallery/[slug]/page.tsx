import { notFound } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/components/icons";
import PageHero from "@/components/page-hero";
import { spaces } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";
import { Picture } from "@/components/ui";
import { ClosingCTA } from "@/components/site-sections";
export function generateStaticParams() {
  return spaces.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = spaces.find((x) => x.slug === slug);
  return s
    ? pageMetadata(
        `${s.title} — Interior Design`,
        s.description,
        `/gallery/${slug}/`,
        s.image,
      )
    : {};
}
export default async function Concept({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = spaces.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <>
      <PageHero
        label={s.category}
        title={s.title}
        description={s.description}
        image={s.image}
        alt={s.title}
        path={`/gallery/${slug}/`}
        crumb={s.title}
        parent={{ name: "Design gallery", href: "/gallery/" }}
      />
      <section className="wrap section-pad">
        <div className="scope-layout">
          <div data-reveal>
            <p className="eyebrow">The design brief</p>
            <h2>{s.subtitle}</h2>
            <p>{s.brief}</p>
          </div>
          <div className="prose" data-reveal data-reveal-order={1}>
            <h3>Design approach</h3>
            <p>{s.approach}</p>
            <h3>Indicative materials</h3>
            <ul>
              {s.materials.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p>
              Final specifications, specialist appointments and delivery
              requirements are established for your own property and agreed
              scope.
            </p>
            <Link className="text-link" href={`/services/${s.service}/`}>
              Explore the related service <Icon name="diagonal" size={16} />
            </Link>
          </div>
        </div>
      </section>
      <div className="section-surface section-pad">
        <div className="wrap">
          <Picture
            className="concept-detail-photo"
            name={s.secondary}
            alt={`Additional detail for ${s.title}`}
            reveal="frame"
          />
        </div>
      </div>
      <section className="wrap section-pad">
        <Link className="text-link" href="/gallery/">
          ← Back to design gallery
        </Link>
      </section>
      <ClosingCTA />
    </>
  );
}
