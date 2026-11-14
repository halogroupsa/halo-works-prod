const widths: Record<string, number> = {
  "hero-courtyard": 1774,
  "retail-boutique": 1024,
};

const heights: Record<string, number> = {
  "hero-courtyard": 887,
  "landscaping-hero": 864,
  "landscaping-shade": 864,
  "landscaping-lighting": 864,
  detail: 864,
  "detail-natural": 864,
  kitchen: 864,
  living: 864,
  workplace: 864,
  "process-inspection": 1026,
  "scope-office-natural": 1026,
  "scope-retail": 1025,
  "retail-boutique": 768,
  "scope-villa-doors": 1152,
  "scope-swimming-pool": 864,
  "scope-ac-installation": 1152,
};

export function imageDimensions(name: string) {
  return {
    width: widths[name] ?? 1536,
    height: heights[name] ?? 1024,
  };
}
