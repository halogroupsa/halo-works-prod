import { Arrow, Button, Picture } from "./ui";
import { Breadcrumbs } from "./seo";

type HeroMedia =
  | { image: string; alt: string; media?: never }
  | { media: React.ReactNode; image?: never; alt?: never };

type Props = HeroMedia & {
  label: string;
  title: React.ReactNode;
  description: string;
  path: string;
  crumb: string;
  action?: { href: string; label: string };
  secondaryAction?: { href: string; label: string };
  parent?: { name: string; href: string };
  variant?: "cover" | "inset" | "case";
  className?: string;
  caption?: string;
  panels?: string[];
};

export default function PageHero({
  label,
  title,
  description,
  image,
  alt,
  media,
  path,
  crumb,
  action,
  secondaryAction,
  parent,
  variant = "cover",
  className = "",
  caption,
  panels,
}: Props) {
  return (
    <section
      className={`page-hero page-hero--${variant} ${className}`}
      data-header-overlay={variant !== "inset" ? "desktop" : undefined}
      aria-labelledby="page-title"
    >
      <div className="page-hero-heading">
        <Breadcrumbs
          items={[...(parent ? [parent] : []), { name: crumb, href: path }]}
        />
        <h1 id="page-title">{title}</h1>
      </div>
      <figure className="page-hero-art">
        {image ? (
          <Picture
            name={image}
            alt={alt!}
            eager
            sizes={variant === "inset" ? "calc(100vw - 80px)" : "100vw"}
          />
        ) : (
          media
        )}
        {panels && (
          <div className="page-hero-panels">
            {panels.map((panel) => (
              <span key={panel}>{panel}</span>
            ))}
          </div>
        )}
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      <div className="page-hero-description">
        <p className="eyebrow">{label}</p>
        <p>{description}</p>
      </div>
      {action && (
        <div className="page-hero-actions">
          <Button href={action.href}>{action.label}</Button>
          {secondaryAction && (
            <a
              className="button outline page-hero-secondary"
              href={secondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {secondaryAction.label} <Arrow />
            </a>
          )}
        </div>
      )}
      {variant === "case" && (
        <a
          className="case-scroll"
          href="#project-details"
          aria-label="Scroll to project details"
        >
          <span aria-hidden="true" />
        </a>
      )}
    </section>
  );
}
