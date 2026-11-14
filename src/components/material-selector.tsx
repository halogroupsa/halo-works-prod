"use client";
import { textureForMaterial } from "@/lib/service-design";
import { useState } from "react";
import { Label } from "@/components/ui";
import type { ServiceDesign } from "@/lib/service-design";
export default function MaterialSelector({
  materials,
}: {
  materials: ServiceDesign["materials"];
}) {
  const [active, setActive] = useState(0);
  return (
    <div className="material-selector">
      <div
        className="material-options"
        role="group"
        aria-label="Explore the material palette"
      >
        {materials.map((m, i) => (
          <button
            key={m.name}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            className={`material-option ${i === active ? "is-selected" : ""}`}
          >
            <span className="material-sample">
              <img
                src={`/images/${textureForMaterial(m.name)}-640.webp`}
                alt={`Close-up texture of ${m.name.toLowerCase()}`}
                width={640}
                height={640}
                loading="lazy"
              />
            </span>
            <span>{m.name}</span>
            <small>{m.finish}</small>
            <span className="material-check" aria-hidden="true">
              {i === active ? "✓" : "+"}
            </span>
          </button>
        ))}
      </div>
      <div
        className="material-description"
        aria-live="polite"
        aria-atomic="true"
      >
        <Label>
          {materials[active].finish} / {materials[active].name}
        </Label>
        <p key={materials[active].name}>{materials[active].note}</p>
      </div>
      <p className="fine-print">
        Final materials and specifications are agreed for your project.
      </p>
    </div>
  );
}
