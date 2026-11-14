export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  budget: string;
  completion: string;
  message: string;
  flexible: boolean;
  consultation?: boolean;
};
export function buildEnquiry(input: Enquiry) {
  const clean = (value: string) => value.trim();
  const email = clean(input.email);
  const request = input.consultation
    ? "request a consultation"
    : "discuss a project";
  return `Hello Halo Works, I would like to ${request}.\n\nName: ${clean(input.name)}${email ? `\nEmail: ${email}` : ""}\nPhone: ${clean(input.phone)}\nProperty / location: ${clean(input.location)}\nService: ${clean(input.service)}\nIndicative budget: ${clean(input.budget) || "To discuss"}\nRequired completion: ${input.flexible ? "Flexible / to be agreed" : input.completion}\n\nProject brief:\n${clean(input.message)}`;
}
export function enquiryHref(channel: "whatsapp" | "email", draft: string) {
  return channel === "whatsapp"
    ? `https://wa.me/971566442008?text=${encodeURIComponent(draft)}`
    : `mailto:info@haloworks.ae?subject=${encodeURIComponent("Project enquiry — Halo Works")}&body=${encodeURIComponent(draft)}`;
}
