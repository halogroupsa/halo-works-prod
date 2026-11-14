import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo";
import ContactForm from "@/components/contact-form";
import { Button, PageIntro } from "@/components/ui";
import { Icon } from "@/components/icons";
import Link from "next/link";

export const metadata = pageMetadata(
  "Contact & Project Enquiries",
  "Discuss your Dubai fit-out, renovation or joinery project by WhatsApp or email. Share the property, scope and required completion date with Halo Works.",
  "/contact/",
  "hero-courtyard",
);

export default function Contact() {
  return (
    <>
      <section className="wrap contact-intro">
        <Breadcrumbs items={[{ name: "Contact", href: "/contact/" }]} />
        <div className="contact-intro-title">
          <PageIntro
            title="Discuss your project"
            label="Halo Works LLC-FZ · Dubai"
            description="Tell us what you’d like to change. Send your brief on WhatsApp or by email and we’ll discuss the next steps with you."
          />
          <Button href="#enquire" light>
            Prepare your brief
          </Button>
        </div>
        <div className="contact-channel-links" data-reveal>
          <div>
            <p className="eyebrow">WhatsApp</p>
            <a
              className="contact-phone"
              href="https://wa.me/971566442008"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Halo Works at +971 56 644 2008"
            >
              <strong>+971 56</strong> 644 2008
            </a>
          </div>
          <a className="text-link" href="mailto:info@haloworks.ae">
            info@haloworks.ae <Icon name="diagonal" size={17} />
          </a>
        </div>
      </section>
      <section className="contact-landing" id="enquire">
        <div className="wrap contact-landing-grid">
          <div data-reveal>
            <p className="eyebrow">Project enquiries</p>
            <h2>Prepare your brief</h2>
          </div>
          <div className="contact-landing-form" data-reveal data-reveal-order={1}>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="wrap contact-details">
        <div data-reveal>
          <h2>Project enquiries</h2>
          <a href="tel:+971566442008">+971 56 644 2008</a>
          <a href="mailto:info@haloworks.ae">info@haloworks.ae</a>
          <Link href="/book-online/" prefetch={false}>
            Book a consultation
          </Link>
        </div>
        <div data-reveal data-reveal-order={1}>
          <h2>Khalil Rahman</h2>
          <p>General Manager</p>
          <a href="tel:+971503119165">+971 50 311 9165</a>
          <a href="mailto:khalil@haloworks.ae">khalil@haloworks.ae</a>
        </div>
        <div data-reveal data-reveal-order={2}>
          <h2>Halo Works LLC-FZ</h2>
          <p>Dubai, United Arab Emirates</p>
        </div>
      </section>
    </>
  );
}
