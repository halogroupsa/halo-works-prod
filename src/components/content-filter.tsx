"use client";
import { useState } from "react";
import Link from "next/link";
import { Picture } from "./ui";
import { Icon } from "./icons";
type Item = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  excerpt?: string;
};
export default function ContentFilter({
  items,
  kind,
}: {
  items: Item[];
  kind: "gallery" | "blog";
}) {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(items.map((x) => x.category))];
  const filtered =
    category === "All" ? items : items.filter((x) => x.category === category);
  return (
    <>
      <div
        className="filter-bar"
        role="group"
        aria-label={`Filter ${kind} by category`}
      >
        {categories.map((c, index) => (
          <button
            key={c}
            style={{ animationDelay: `${350 + index * 50}ms` }}
            aria-pressed={c === category}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {filtered.length} {kind === "gallery" ? "concepts" : "articles"} shown
      </p>
      <div
        className={`collection-grid collection-grid--${kind}`}
        data-filtered={category !== "All"}
      >
        {filtered.map((x, index) => (
          <Link
            prefetch={false}
            className="gallery-card"
            href={`/${kind}/${x.slug}/`}
            key={x.slug}
            data-reveal="stagger"
            data-reveal-order={index % 3}
          >
            <div className="collection-image">
              <Picture
                name={x.image}
                alt=""
                sizes={
                  kind === "gallery"
                    ? "(max-width: 620px) 100vw, 50vw"
                    : "(max-width: 620px) 100vw, 33vw"
                }
              />
            </div>
            <div className="collection-caption">
              <span className="eyebrow">{x.category}</span>
              <h2>
                {x.title} <Icon name="diagonal" size={16} />
              </h2>
              <p>{x.description || x.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
