import Link from "next/link";
import { Icon as InterfaceIcon } from "./icons";
import { imageDimensions } from "@/lib/images";
export function Arrow() {
  return (
    <span className="button-arrow">
      <InterfaceIcon name="diagonal" size={17} />
    </span>
  );
}
export function Button({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      prefetch={false}
      className={`button ${light ? "outline" : ""}`}
      href={href}
    >
      {children}
      <Arrow />
    </Link>
  );
}
export function Picture({
  name,
  alt,
  className = "",
  eager = false,
  reveal,
  sizes = "(max-width: 700px) 100vw, 70vw",
}: {
  name: string;
  alt: string;
  className?: string;
  eager?: boolean;
  reveal?: "frame";
  sizes?: string;
}) {
  const dimensions = imageDimensions(name);
  return (
    <img
      className={className}
      data-reveal={reveal}
      src={`/images/${name}.webp`}
      srcSet={`/images/${name}-640.webp 640w, /images/${name}.webp ${dimensions.width}w`}
      sizes={sizes}
      alt={alt}
      {...dimensions}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
    />
  );
}
export function Label({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="listing-intro">
      <h1>{title}</h1>
      <p className="eyebrow">{label}</p>
      <p className="listing-description">{description}</p>
    </div>
  );
}
export function Icon({ kind = 0 }: { kind?: number }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width="35"
      height="35"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      {kind === 0 ? (
        <>
          <path d="M7 32V8h25v24H7Z M12 3v10 M3 13h10 M27 27h10 M27 27v10" />
        </>
      ) : kind === 1 ? (
        <>
          <path d="m20 5 14 8v16l-14 8-14-8V13Z m0 0v16m14-8-14 8-14-8m14 8v16" />
        </>
      ) : kind === 2 ? (
        <>
          <circle cx="20" cy="20" r="15" />
          <circle cx="20" cy="20" r="10" />
          <path d="M20 10v20" />
        </>
      ) : kind === 4 ? (
        <>
          <circle cx="20" cy="9" r="3" />
          <path d="M20 3v3M18 11.5 10 36M22 11.5 30 36M12.5 28.5h15" />
        </>
      ) : kind === 5 ? (
        <>
          <path d="M5 30h30M9 30a11 11 0 0 1 22 0M20 19v-3M17 16h6M3 34h34" />
        </>
      ) : kind === 6 ? (
        <>
          <path d="M7 17v17h26V17M5 9h30l-2 8H7ZM12 9l-1 8M20 9v8M28 9l1 8M16 34v-9h8v9" />
        </>
      ) : kind === 7 ? (
        <>
          <path d="M9 4h16l7 7v25H9ZM25 4v7h7M14 24l4 4 9-10" />
        </>
      ) : (
        <>
          <path d="M8 33C2 15 16 6 33 5c0 18-6 29-22 25M7 34 30 9" />
        </>
      )}
    </svg>
  );
}
