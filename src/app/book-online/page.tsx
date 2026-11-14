import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { Breadcrumbs } from "@/components/seo";
import { PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Book a Project Consultation Online",
  "Request a consultation with Halo Works about your Dubai renovation, fit-out or joinery project. Send your brief by WhatsApp or email.",
  "/book-online/",
  "contact-studio",
);

export default function BookOnline() {
  return (
    <>
      <section className="wrap project-index">
        <Breadcrumbs items={[{ name: "Book online", href: "/book-online/" }]} />
        <PageIntro
          title="Request a consultation"
          label="Book online · Dubai"
          description="Tell us where the project is, what you want to change and when you need it ready. Send your request by WhatsApp or email and we’ll discuss a time with you."
        />
      </section>
      <section className="contact-landing" id="enquire">
        <div className="wrap contact-landing-grid">
          <div data-reveal>
            <h2>Your project brief</h2>
            <p>
              Include any access constraints and mention when you’re available.
              You can attach site photos or drawings when you send the request.
            </p>
            <Link href="/contact/" prefetch={false} className="text-link">
              Other ways to contact us <Icon name="diagonal" size={16} />
            </Link>
          </div>
          <div className="contact-landing-form">
            <ContactForm consultation />
          </div>
        </div>
      </section>
    </>
  );
}
