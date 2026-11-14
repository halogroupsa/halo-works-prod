"use client";

import { useState, type ReactNode } from "react";

export default function ProjectFilter({
  entries,
}: {
  entries: { slug: string; category: string; card: ReactNode }[];
}) {
  const [selected, select] = useState<string | null>(null);
  const categories = [...new Set(entries.map(({ category }) => category))];
  const shown =
    selected === null
      ? entries
      : entries.filter(({ category }) => category === selected);

  return (
    <>
      {categories.length > 1 && (
        <div
          className="filter-bar"
          role="group"
          aria-label="Filter projects by scope"
        >
          {[null, ...categories].map((category) => (
            <button
              key={category ?? "all-scopes"}
              type="button"
              aria-pressed={selected === category}
              onClick={() => select(category)}
            >
              {category ?? "All scopes"}
            </button>
          ))}
        </div>
      )}
      <p className="sr-only" role="status">
        {shown.length} {shown.length === 1 ? "project" : "projects"} shown
      </p>
      <ul className="project-record-grid">
        {shown.map(({ slug, card }, index) => (
          <li key={slug} data-reveal="stagger" data-reveal-order={index % 3}>
            {card}
          </li>
        ))}
      </ul>
    </>
  );
}
