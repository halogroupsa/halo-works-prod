"use client";
import { useState } from "react";
import Link from "next/link";
import { spaces } from "@/lib/content";
import { Picture } from "./ui";
import { Icon } from "./icons";
export default function Gallery() {
  const [filter, setFilter] = useState("All spaces");
  return (
    <>
      <div className="filters" aria-label="Filter spaces">
        {[
          "All spaces",
          "Homes",
          "Joinery",
          "Workplaces",
          "Hospitality",
          "Retail",
        ].map(
          (f) => (
            <button
              key={f}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ),
        )}
      </div>
      <div className="gallery-grid" aria-live="polite">
        {spaces
          .filter((s) => filter === "All spaces" || s.category === filter)
          .map((s) => (
            <Link
              className="gallery-card"
              key={s.slug}
              href={`/spaces/${s.slug}/`}
            >
              <div className="image-frame">
                <Picture name={s.image} alt={s.title} />
                <span>
                  Explore space <Icon name="diagonal" size={16} />
                </span>
              </div>
              <div>
                <h2>{s.title}</h2>
                <span>{s.category}</span>
              </div>
              <p>{s.subtitle}</p>
            </Link>
          ))}
      </div>
    </>
  );
}
