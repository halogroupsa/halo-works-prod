import { Arrow, Button } from "./ui";

export default function ProjectEnquiryActions() {
  return (
    <div className="project-enquiry-actions">
      <Button href="/book-online/#enquire">Request a consultation</Button>
      <a
        className="button outline"
        href="https://wa.me/971566442008"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp <Arrow />
      </a>
    </div>
  );
}
