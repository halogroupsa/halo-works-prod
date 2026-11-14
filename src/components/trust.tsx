import { Label } from "@/components/ui";
import { Icon } from "./icons";
import PartnerCarousel from "./partner-carousel";
const partners = [
  ["Dubai Properties", "dubai_properties"],
  ["ISKCON", "iskon"],
  ["Jumeirah", "jumeirah"],
  ["Majid Al Futtaim", "majid_al_futtain"],
  ["One&Only", "oneandonly"],
  ["Rotana", "rotana"],
  ["Sheraton", "sheraton"],
  ["Siemens", "siemens"],
] as const;
export function Partners() {
  return (
    <section className="partners-section section-pad" id="trusted-partners" aria-labelledby="partners-title">
      <div className="wrap" data-reveal>
        <div className="partners-heading">
          <Label>Halo Interiors · Our parent company</Label>
          <h2 id="partners-title">Our Trusted Partners</h2>
        </div>
        <PartnerCarousel partners={partners} />
      </div>
    </section>
  );
}
const reviews = [
  {
    name: "Timur G",
    topic: "Renovation",
    quote: "with attention to every detail",
    url: "https://share.google/lVSxtjShKMPp3CmOM",
  },
  {
    name: "limelight interors",
    topic: "Joinery & craftsmanship",
    quote: "Their premium quality joinery speaks for itself.",
    url: "https://share.google/1UaB5lC28lDDNYONS",
  },
  {
    name: "Mansi shah",
    topic: "Villa upgrade",
    quote: "Extremely professional and reliable.",
    url: "https://share.google/iAHNkGa6WwiFQFaKW",
  },
];
export function Testimonials() {
  return (
    <section
      className="testimonials-section"
      aria-labelledby="testimonials-title"
    >
      <div className="wrap">
        <div className="section-heading-row">
          <div>
            <Label>Voices from the Halo family</Label>
            <h2 id="testimonials-title">
              Good work.
              <br />
              <em>Remembered.</em>
            </h2>
          </div>
          <p>
            Client reviews of Halo Interiors,
            <br />
            our parent company.
          </p>
        </div>
        <div className="review-grid">
          {reviews.map((r) => (
            <figure className="review-card" key={r.name}>
              <span className="review-quote" aria-hidden="true">
                “
              </span>
              <Label>{r.topic}</Label>
              <blockquote>{r.quote}</blockquote>
              <figcaption>
                <span>
                  {r.name}
                  <small>Halo Interiors client · Review excerpt</small>
                </span>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Read ${r.name}’s full Google review`}
                >
                  <Icon name="diagonal" size={16} />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
        <a
          className="source-link"
          href="https://halo.ae/"
          target="_blank"
          rel="noreferrer"
        >
          Reviews featured on halo.ae · Read the full client stories{" "}
          <Icon name="diagonal" size={16} />
        </a>
      </div>
    </section>
  );
}
