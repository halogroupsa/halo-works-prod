import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function Breadcrumbs({
  items,
  light = false,
}: {
  items: { name: string; href: string }[];
  light?: boolean;
}) {
  const trail = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: absoluteUrl(item.href),
          })),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`breadcrumbs ${light ? "light" : ""}`}
      >
        <ol>
          {trail.map((item, i) => (
            <li key={item.href}>
              {i === trail.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link prefetch={false} href={item.href}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
