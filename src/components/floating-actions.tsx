import { Icon } from "./icons";

export default function FloatingActions() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/971566442008?text=Hello%20Halo%20Works%2C%20I%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Halo Works on WhatsApp"
      data-contact-channel="whatsapp"
    >
      <span aria-hidden="true">WhatsApp</span>
      <Icon name="whatsapp" size={30} />
    </a>
  );
}
