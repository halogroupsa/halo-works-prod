import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo";
export const metadata = pageMetadata(
  "Privacy & Your Enquiry",
  "How the Halo Works website prepares project briefs and how to contact us about information shared by email or WhatsApp.",
  "/privacy/",
  "contact-studio",
);
export default function Privacy() {
  return (
    <>
      <section className="section-surface">
        <div className="wrap plain-intro">
          <Breadcrumbs items={[{ name: "Privacy", href: "/privacy/" }]} />
          <h1>Your information.</h1>
          <p>How this website’s enquiry options work.</p>
        </div>
      </section>
      <article className="wrap prose section-pad">
        <section data-reveal>
          <h2>Your project brief</h2>
          <p>
            The form prepares a message in your browser. It does not submit your
            details to a website server, save them to a website database or
            automatically send an enquiry. When you select WhatsApp or email,
            your chosen app opens with the prepared message so you can review
            and send it.
          </p>
        </section>
        <section data-reveal>
          <h2>Information you choose to share</h2>
          <p>
            Halo Works uses the contact and project details you send to discuss
            your enquiry and the next assessment or quotation steps. Only include
            information relevant to your project. You may add photographs or
            drawings using your chosen messaging app.
          </p>
        </section>
        <section data-reveal>
          <h2>Third-party services</h2>
          <p>
            WhatsApp and your email provider handle messages under their own
            privacy terms. This website currently has no advertising pixels or
            third-party analytics configured. Hosting services may process
            technical request information to deliver and protect the website.
          </p>
        </section>
        <section data-reveal>
          <h2>Questions about your information</h2>
          <p>
            To ask about information shared with Halo Works, including correction
            or deletion requests, contact{" "}
            <a href="mailto:info@haloworks.ae">info@haloworks.ae</a>.
          </p>
        </section>
      </article>
    </>
  );
}
