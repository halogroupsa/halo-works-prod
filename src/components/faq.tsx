import Link from "next/link";
import { Label } from "@/components/ui";
import { JsonLd } from "@/components/seo";
import { Icon } from "@/components/icons";
import { faqs } from "@/lib/content";
export default function FAQ({
  id,
  items = faqs,
  title = (
    <>
      Before you begin.
      <br />
    </>
  ),
  label = "Frequently asked questions",
  tone,
  contact = { href: "/contact/", label: "Have a different question?" },
}: {
  id?: string;
  items?: string[][];
  title?: React.ReactNode;
  label?: string;
  tone?: "surface" | "panel";
  contact?: { href: string; label: string };
}) {
  return (
    <section id={id} className={tone ? `section-${tone} section-pad` : "section-pad"}>
      <div className="wrap faq">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map(([q, a]) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }}
        />
        <div>
          <Label>{label}</Label>
          <h2>{title}</h2>
          <Link prefetch={false} className="text-link" href={contact.href}>
            {contact.label} <Icon name="diagonal" size={16} />
          </Link>
        </div>
        <div>
          {items.map(([q, a], index) => (
            <details key={q} data-reveal="stagger" data-reveal-order={index % 3}>
              <summary>
                {q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
